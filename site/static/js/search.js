(function() {
  var input = document.getElementById('tuebor-search');
  var results = document.getElementById('tuebor-search-results');
  if (!input || !results) return;

  var idx = null;
  var allDocs = {};

  function loadIndex() {
    if (typeof window.searchIndex !== 'undefined' && typeof elasticlunr !== 'undefined') {
      idx = elasticlunr.Index.load(window.searchIndex);
      // Build doc store for title/body lookup
      var store = window.searchIndex.documentStore || {};
      if (store.docs) allDocs = store.docs;
      return;
    }
    setTimeout(loadIndex, 200);
  }
  loadIndex();

  var debounce = null;
  input.addEventListener('input', function() {
    clearTimeout(debounce);
    debounce = setTimeout(doSearch, 150);
  });

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { input.value = ''; results.style.display = 'none'; }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      var first = results.querySelector('.sr-item');
      if (first) first.focus();
    }
  });

  document.addEventListener('click', function(e) {
    if (!input.contains(e.target) && !results.contains(e.target)) results.style.display = 'none';
  });

  // Press / to focus search
  document.addEventListener('keydown', function(e) {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA' && document.activeElement.tagName !== 'SELECT') {
      e.preventDefault();
      input.focus();
    }
  });

  function doSearch() {
    var q = input.value.trim();
    if (q.length < 2) { results.style.display = 'none'; return; }
    if (!idx) {
      results.innerHTML = '<div class="sr-empty">Loading search index...</div>';
      results.style.display = 'block';
      return;
    }

    var hits = idx.search(q, { expand: true, fields: { title: { boost: 3 }, body: { boost: 1 } } });
    if (hits.length === 0) {
      results.innerHTML = '<div class="sr-empty">No results for "<strong>' + esc(q) + '</strong>"</div>';
      results.style.display = 'block';
      return;
    }

    var html = '';
    var max = Math.min(hits.length, 8);
    for (var i = 0; i < max; i++) {
      var ref = hits[i].ref;
      var doc = allDocs[ref] || idx.documentStore.getDoc(ref) || {};
      var title = doc.title || ref.split('/').filter(Boolean).pop() || 'Untitled';
      var body = doc.body || '';
      var url = ref;

      // Snippet
      var snippet = '';
      var lq = q.toLowerCase();
      var lb = body.toLowerCase();
      var pos = lb.indexOf(lq);
      if (pos > -1) {
        var start = Math.max(0, pos - 60);
        var end = Math.min(body.length, pos + q.length + 80);
        snippet = (start > 0 ? '...' : '') +
                  esc(body.substring(start, pos)) +
                  '<mark>' + esc(body.substring(pos, pos + q.length)) + '</mark>' +
                  esc(body.substring(pos + q.length, end)) +
                  (end < body.length ? '...' : '');
      } else {
        snippet = esc(body.substring(0, 120)) + (body.length > 120 ? '...' : '');
      }

      var section = '';
      if (url.indexOf('/analysis/') > -1) section = 'Analysis';
      else if (url.indexOf('/evidence/') > -1) section = 'Evidence';
      else if (url.indexOf('/actors/') > -1) section = 'Actors';
      else if (url.indexOf('/investigate/') > -1) section = 'Investigate';
      else if (url.indexOf('/timeline/') > -1) section = 'Timeline';

      html += '<a class="sr-item" href="' + esc(url) + '" tabindex="0">' +
              (section ? '<span class="sr-section">' + section + '</span>' : '') +
              '<span class="sr-title">' + esc(title) + '</span>' +
              '<span class="sr-snippet">' + snippet + '</span></a>';
    }

    if (hits.length > max) {
      html += '<div class="sr-more">' + (hits.length - max) + ' more results</div>';
    }

    results.innerHTML = html;
    results.style.display = 'block';

    // Arrow key nav
    var items = results.querySelectorAll('.sr-item');
    items.forEach(function(item, i) {
      item.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown') { e.preventDefault(); if (items[i+1]) items[i+1].focus(); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); if (i===0) input.focus(); else if(items[i-1]) items[i-1].focus(); }
        else if (e.key === 'Escape') { input.value=''; results.style.display='none'; input.focus(); }
      });
    });
  }

  function esc(s) { var d=document.createElement('div'); d.textContent=s; return d.innerHTML; }

  // CROSS-LINKS
  var crossEl = document.getElementById('cross-link-list');
  if (crossEl) {
    var crossWait = setInterval(function() {
      if (idx) { clearInterval(crossWait); buildCrossLinks(); }
    }, 300);
    setTimeout(function() { clearInterval(crossWait); }, 10000);
  }

  function buildCrossLinks() {
    if (!crossEl || !idx) return;
    var kw = crossEl.getAttribute('data-keywords');
    if (!kw) return;

    var terms = kw.split(',').map(function(t){return t.trim();}).filter(function(t){return t.length > 3;});
    var seen = {};
    var all = [];
    var currentUrl = window.location.pathname;
    var currentFull = window.location.href.replace(/\/$/, '');

    terms.forEach(function(term) {
      var searchTerm = term.split(' ').slice(0,3).join(' ');
      var hits = idx.search(searchTerm, { expand: true, fields: { title: {boost:2}, body: {boost:1} } });
      hits.forEach(function(hit) {
        var url = hit.ref;
        var urlPath = url.replace(/https?:\/\/[^\/]+/, '').replace(/\/$/, '');
        var curPath = currentUrl.replace(/\/$/, '');
        if (urlPath === curPath) return;
        if (seen[url]) { seen[url].score += hit.score; seen[url].matches++; return; }
        var doc = allDocs[url] || idx.documentStore.getDoc(url) || {};
        seen[url] = { url: url, title: doc.title || url.split('/').filter(Boolean).pop(), score: hit.score, matches: 1 };
        all.push(seen[url]);
      });
    });

    all.sort(function(a,b) { return (b.score*b.matches) - (a.score*a.matches); });
    var max = Math.min(all.length, 12);
    if (max === 0) { crossEl.innerHTML = '<p class="cross-empty">No cross-connections found.</p>'; return; }

    var html = '<div class="cross-grid">';
    for (var i = 0; i < max; i++) {
      var r = all[i];
      var section = '';
      if (r.url.indexOf('/analysis/')>-1) section='Analysis';
      else if (r.url.indexOf('/evidence/')>-1) section='Evidence';
      else if (r.url.indexOf('/actors/')>-1) section='Actors';
      else if (r.url.indexOf('/investigate/')>-1) section='Investigate';
      var strength = r.matches>=4?'strong':(r.matches>=2?'medium':'weak');
      html += '<a class="cross-card cross-'+strength+'" href="'+esc(r.url)+'">' +
              '<span class="cross-section">'+section+'</span>' +
              '<span class="cross-title">'+esc(r.title)+'</span>' +
              '<span class="cross-strength">'+r.matches+' shared entities</span></a>';
    }
    html += '</div>';
    crossEl.innerHTML = html;
  }
})();
