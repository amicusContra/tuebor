// Signal exploration visualization — the traveling salesman's doorbell
// Shows how visitors navigate through the evidence site.
// Each hop is detected via the Referer header — no cookies, no tracking.
// Data source: window.SIGNAL_EXPLORATION (from signal-data.js)

(function() {
  'use strict';

  var SE = window.SIGNAL_EXPLORATION;
  if (!SE) return;

  function renderExploration(container) {
    var width = container.clientWidth || 800;
    container.innerHTML = '';

    // ── Stats bar ──
    var stats = document.createElement('div');
    stats.style.cssText = 'display:flex;gap:24px;flex-wrap:wrap;justify-content:center;margin:0 0 16px;';
    var s = SE.summary;
    [
      { n: s.humanHits || s.totalHits || 0, l: 'human hits', c: '#2ecc71' },
      { n: s.uniquePages || 0, l: 'pages explored', c: '#2ecc71' },
      { n: s.totalHops || 0, l: 'doorbell hops', c: '#2ecc71' },
      { n: s.crawlerHits || 0, l: 'crawlers guided', c: '#3498db' },
      { n: s.scannerHits || 0, l: 'scanners neutralized', c: '#e74c3c' },
    ].forEach(function(item) {
      var d = document.createElement('div');
      d.style.cssText = 'text-align:center;';
      d.innerHTML = '<div style="font-size:28px;font-weight:800;color:' + item.c + ';">' + item.n +
        '</div><div style="font-size:10px;opacity:0.5;text-transform:uppercase;letter-spacing:1px;">' +
        item.l + '</div>';
      stats.appendChild(d);
    });
    container.appendChild(stats);

    // ── Traffic composition pie (SVG donut) ──
    var eco = SE.ecosystem;
    if (eco) {
      var pieTitle = document.createElement('h4');
      pieTitle.style.cssText = 'margin:20px 0 6px;font-size:13px;opacity:0.7;';
      pieTitle.textContent = 'Who Visits — Traffic Classification';
      container.appendChild(pieTitle);

      var pieSub = document.createElement('p');
      pieSub.style.cssText = 'font-size:10px;opacity:0.4;margin:0 0 8px;';
      pieSub.textContent = 'Every request classified. Crawlers guided. Scanners cataloged. Only verified humans counted as signal.';
      container.appendChild(pieSub);

      var pieW = width;
      var pieH = 160;
      var pieSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      pieSvg.setAttribute('viewBox', '0 0 ' + pieW + ' ' + pieH);
      pieSvg.setAttribute('width', '100%');
      pieSvg.setAttribute('height', pieH);
      pieSvg.style.cssText = 'margin-bottom:8px;';

      var cx = pieH / 2 + 10;
      var cy = pieH / 2;
      var outerR = 60;
      var innerR = 35;

      var slices = [
        { label: 'Humans', val: s.humanHits || s.totalHits || 0, color: '#2ecc71' },
        { label: 'Crawlers', val: s.crawlerHits || 0, color: '#3498db' },
        { label: 'SEO Bots', val: s.seoHits || 0, color: '#9b59b6' },
        { label: 'Link Previews', val: s.previewHits || 0, color: '#f39c12' },
        { label: 'Scanners', val: s.scannerHits || 0, color: '#e74c3c' },
      ].filter(function(sl) { return sl.val > 0; });

      var total = slices.reduce(function(a, b) { return a + b.val; }, 0) || 1;
      var angle = -Math.PI / 2;

      slices.forEach(function(sl) {
        var sweep = (sl.val / total) * 2 * Math.PI;
        var endAngle = angle + sweep;
        var large = sweep > Math.PI ? 1 : 0;

        var x1o = cx + outerR * Math.cos(angle);
        var y1o = cy + outerR * Math.sin(angle);
        var x2o = cx + outerR * Math.cos(endAngle);
        var y2o = cy + outerR * Math.sin(endAngle);
        var x1i = cx + innerR * Math.cos(endAngle);
        var y1i = cy + innerR * Math.sin(endAngle);
        var x2i = cx + innerR * Math.cos(angle);
        var y2i = cy + innerR * Math.sin(angle);

        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d',
          'M ' + x1o + ' ' + y1o +
          ' A ' + outerR + ' ' + outerR + ' 0 ' + large + ' 1 ' + x2o + ' ' + y2o +
          ' L ' + x1i + ' ' + y1i +
          ' A ' + innerR + ' ' + innerR + ' 0 ' + large + ' 0 ' + x2i + ' ' + y2i +
          ' Z'
        );
        path.setAttribute('fill', sl.color);
        path.setAttribute('opacity', '0.8');
        var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = sl.label + ': ' + sl.val + ' (' + Math.round(sl.val / total * 100) + '%)';
        path.appendChild(title);
        pieSvg.appendChild(path);

        angle = endAngle;
      });

      // Center label
      var ct = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      ct.setAttribute('x', cx); ct.setAttribute('y', cy - 4);
      ct.setAttribute('text-anchor', 'middle');
      ct.setAttribute('fill', 'currentColor');
      ct.setAttribute('font-size', '14');
      ct.setAttribute('font-weight', '800');
      ct.textContent = (s.totalRequests || total);
      pieSvg.appendChild(ct);
      var ct2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      ct2.setAttribute('x', cx); ct2.setAttribute('y', cy + 12);
      ct2.setAttribute('text-anchor', 'middle');
      ct2.setAttribute('fill', 'currentColor');
      ct2.setAttribute('font-size', '8');
      ct2.setAttribute('opacity', '0.4');
      ct2.textContent = 'total requests';
      pieSvg.appendChild(ct2);

      // Legend to the right of donut
      var lx = cx + outerR + 30;
      var ly = 20;
      slices.forEach(function(sl) {
        var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', lx); rect.setAttribute('y', ly - 8);
        rect.setAttribute('width', 10); rect.setAttribute('height', 10);
        rect.setAttribute('rx', 2);
        rect.setAttribute('fill', sl.color);
        rect.setAttribute('opacity', '0.8');
        pieSvg.appendChild(rect);

        var t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        t.setAttribute('x', lx + 16); t.setAttribute('y', ly);
        t.setAttribute('fill', 'currentColor');
        t.setAttribute('font-size', '10');
        t.textContent = sl.label + ' — ' + sl.val + ' (' + Math.round(sl.val / total * 100) + '%)';
        pieSvg.appendChild(t);
        ly += 20;
      });

      // Scanner details to the right
      if (eco.scanners && eco.scanners.length > 0) {
        var sx = lx + 220;
        var sy = 16;
        var sh = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        sh.setAttribute('x', sx); sh.setAttribute('y', sy);
        sh.setAttribute('fill', '#e74c3c');
        sh.setAttribute('font-size', '9');
        sh.setAttribute('font-weight', '600');
        sh.textContent = 'Scanner types:';
        pieSvg.appendChild(sh);
        sy += 14;
        eco.scanners.slice(0, 6).forEach(function(sc) {
          var t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          t.setAttribute('x', sx); t.setAttribute('y', sy);
          t.setAttribute('fill', 'currentColor');
          t.setAttribute('font-size', '8');
          t.setAttribute('opacity', '0.5');
          t.textContent = sc.name + ' (' + sc.hits + ')';
          pieSvg.appendChild(t);
          sy += 12;
        });
      }

      // Probe paths below scanner details
      if (eco.probes && eco.probes.length > 0) {
        var px = sx || lx + 220;
        var py = sy + 6;
        var ph = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        ph.setAttribute('x', px); ph.setAttribute('y', py);
        ph.setAttribute('fill', '#e74c3c');
        ph.setAttribute('font-size', '9');
        ph.setAttribute('font-weight', '600');
        ph.textContent = 'Probed paths:';
        pieSvg.appendChild(ph);
        py += 14;
        eco.probes.slice(0, 4).forEach(function(pr) {
          var t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          t.setAttribute('x', px); t.setAttribute('y', py);
          t.setAttribute('fill', 'currentColor');
          t.setAttribute('font-size', '8');
          t.setAttribute('opacity', '0.5');
          t.textContent = pr.path + ' (' + pr.hits + ')';
          pieSvg.appendChild(t);
          py += 12;
        });
      }

      container.appendChild(pieSvg);
    }

    // ── Hourly heatmap ──
    var heatTitle = document.createElement('h4');
    heatTitle.style.cssText = 'margin:20px 0 6px;font-size:13px;opacity:0.7;';
    heatTitle.textContent = 'When They Come — Hourly Human Signal';
    container.appendChild(heatTitle);

    var heatSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var heatH = 80;
    heatSvg.setAttribute('viewBox', '0 0 ' + width + ' ' + heatH);
    heatSvg.setAttribute('width', '100%');
    heatSvg.setAttribute('height', heatH);
    heatSvg.style.cssText = 'background:rgba(0,0,0,0.02);border-radius:6px;margin-bottom:8px;';

    var hours = SE.hourly || [];
    if (hours.length) {
      var maxH = Math.max.apply(null, hours.map(function(h) { return h.hits; }));
      var barW = Math.max(6, (width - 40) / hours.length - 2);
      hours.forEach(function(h, i) {
        var bh = (h.hits / maxH) * (heatH - 25);
        var x = 20 + i * (barW + 2);
        var bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bar.setAttribute('x', x);
        bar.setAttribute('y', heatH - 15 - bh);
        bar.setAttribute('width', barW);
        bar.setAttribute('height', bh);
        bar.setAttribute('rx', '2');
        var intensity = h.hits / maxH;
        var r = Math.round(46 + intensity * 200);
        var g = Math.round(204 - intensity * 100);
        var b = Math.round(113 - intensity * 50);
        bar.setAttribute('fill', 'rgb(' + r + ',' + g + ',' + b + ')');
        bar.setAttribute('opacity', '0.8');
        var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = h.hour + ':00 — ' + h.hits + ' human hits';
        bar.appendChild(title);
        heatSvg.appendChild(bar);

        if (h.hits > maxH * 0.5 || i === 0 || i === hours.length - 1) {
          var lbl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          lbl.setAttribute('x', x + barW / 2);
          lbl.setAttribute('y', heatH - 3);
          lbl.setAttribute('text-anchor', 'middle');
          lbl.setAttribute('fill', 'currentColor');
          lbl.setAttribute('font-size', '7');
          lbl.setAttribute('opacity', '0.4');
          lbl.textContent = h.hour.split(' ')[1] + 'h';
          heatSvg.appendChild(lbl);
        }

        if (h.hits > 5) {
          var ct = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          ct.setAttribute('x', x + barW / 2);
          ct.setAttribute('y', heatH - 18 - bh);
          ct.setAttribute('text-anchor', 'middle');
          ct.setAttribute('fill', 'currentColor');
          ct.setAttribute('font-size', '8');
          ct.setAttribute('font-weight', '600');
          ct.setAttribute('opacity', '0.6');
          ct.textContent = h.hits;
          heatSvg.appendChild(ct);
        }
      });
    }
    container.appendChild(heatSvg);

    // ── Navigation hop graph (the traveling salesman) ──
    var hopTitle = document.createElement('h4');
    hopTitle.style.cssText = 'margin:20px 0 6px;font-size:13px;opacity:0.7;';
    hopTitle.textContent = 'The Traveling Salesman — How They Navigate';
    container.appendChild(hopTitle);

    var hopSub = document.createElement('p');
    hopSub.style.cssText = 'font-size:10px;opacity:0.4;margin:0 0 8px;';
    hopSub.textContent = 'Each arrow is a doorbell ring — a visitor moving from one page to another. Detected via Referer header. No cookies. No tracking.';
    container.appendChild(hopSub);

    var graphH = Math.max(350, width * 0.4);
    var graphSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    graphSvg.setAttribute('viewBox', '0 0 ' + width + ' ' + graphH);
    graphSvg.setAttribute('width', '100%');
    graphSvg.setAttribute('height', graphH);
    graphSvg.style.cssText = 'background:rgba(0,0,0,0.02);border-radius:8px;';

    var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    var marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
    marker.setAttribute('id', 'hop-arrow');
    marker.setAttribute('viewBox', '0 0 10 10');
    marker.setAttribute('refX', '22');
    marker.setAttribute('refY', '5');
    marker.setAttribute('markerWidth', '5');
    marker.setAttribute('markerHeight', '5');
    marker.setAttribute('orient', 'auto');
    var ap = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    ap.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
    ap.setAttribute('fill', '#2ecc71');
    ap.setAttribute('opacity', '0.6');
    marker.appendChild(ap);
    defs.appendChild(marker);
    graphSvg.appendChild(defs);

    var hopNodes = {};
    var hops = SE.hops || [];
    var pages = SE.pages || [];

    hops.forEach(function(h) {
      hopNodes[h.from] = hopNodes[h.from] || { id: h.from, hits: 0 };
      hopNodes[h.to] = hopNodes[h.to] || { id: h.to, hits: 0 };
    });

    pages.slice(0, 15).forEach(function(p) {
      if (!hopNodes[p.path]) hopNodes[p.path] = { id: p.path, hits: 0 };
      hopNodes[p.path].hits = p.hits;
      hopNodes[p.path].label = p.label;
      hopNodes[p.path].entries = p.entries;
    });

    pages.forEach(function(p) {
      if (hopNodes[p.path]) {
        hopNodes[p.path].hits = p.hits;
        hopNodes[p.path].label = p.label;
        hopNodes[p.path].entries = p.entries;
      }
    });

    var nodeArr = Object.values(hopNodes);
    if (nodeArr.length === 0) {
      var emptyMsg = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      emptyMsg.setAttribute('x', width / 2);
      emptyMsg.setAttribute('y', graphH / 2);
      emptyMsg.setAttribute('text-anchor', 'middle');
      emptyMsg.setAttribute('fill', 'currentColor');
      emptyMsg.setAttribute('font-size', '12');
      emptyMsg.setAttribute('opacity', '0.4');
      emptyMsg.textContent = 'Awaiting navigation hops — the traveling salesman has not yet arrived';
      graphSvg.appendChild(emptyMsg);
      container.appendChild(graphSvg);
    } else {
      function shortLabel(path) {
        if (path === '/') return 'Home';
        var parts = path.split('/').filter(Boolean);
        var last = parts[parts.length - 1].replace(/-/g, ' ');
        return last.length > 18 ? last.substring(0, 16) + '...' : last;
      }

      var nodes = nodeArr.map(function(n, i) {
        var angle = (2 * Math.PI * i) / nodeArr.length;
        var r = Math.min(width, graphH) * 0.3;
        return {
          id: n.id,
          label: n.label || shortLabel(n.id),
          hits: n.hits || 1,
          entries: n.entries || 0,
          x: width / 2 + r * Math.cos(angle),
          y: graphH / 2 + r * Math.sin(angle),
          vx: 0, vy: 0
        };
      });

      var nodeMap = {};
      nodes.forEach(function(n) { nodeMap[n.id] = n; });

      for (var iter = 0; iter < 80; iter++) {
        for (var i = 0; i < nodes.length; i++) {
          for (var j = i + 1; j < nodes.length; j++) {
            var dx = nodes[j].x - nodes[i].x;
            var dy = nodes[j].y - nodes[i].y;
            var dist = Math.sqrt(dx * dx + dy * dy) || 1;
            var force = 8000 / (dist * dist);
            var fx = (dx / dist) * force;
            var fy = (dy / dist) * force;
            nodes[i].vx -= fx; nodes[i].vy -= fy;
            nodes[j].vx += fx; nodes[j].vy += fy;
          }
        }
        hops.forEach(function(h) {
          var src = nodeMap[h.from];
          var tgt = nodeMap[h.to];
          if (!src || !tgt) return;
          var dx = tgt.x - src.x;
          var dy = tgt.y - src.y;
          var dist = Math.sqrt(dx * dx + dy * dy) || 1;
          var force = (dist - 120) * 0.02;
          var fx = (dx / dist) * force;
          var fy = (dy / dist) * force;
          src.vx += fx; src.vy += fy;
          tgt.vx -= fx; tgt.vy -= fy;
        });
        nodes.forEach(function(n) {
          n.vx += (width / 2 - n.x) * 0.005;
          n.vy += (graphH / 2 - n.y) * 0.005;
          n.x += n.vx * 0.3;
          n.y += n.vy * 0.3;
          n.vx *= 0.75; n.vy *= 0.75;
          n.x = Math.max(60, Math.min(width - 60, n.x));
          n.y = Math.max(30, Math.min(graphH - 30, n.y));
        });
      }

      hops.forEach(function(h) {
        var src = nodeMap[h.from];
        var tgt = nodeMap[h.to];
        if (!src || !tgt) return;
        var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', src.x); line.setAttribute('y1', src.y);
        line.setAttribute('x2', tgt.x); line.setAttribute('y2', tgt.y);
        line.setAttribute('stroke', '#2ecc71');
        line.setAttribute('stroke-width', Math.min(h.count * 2, 6));
        line.setAttribute('stroke-opacity', Math.min(0.3 + h.count * 0.15, 0.8));
        line.setAttribute('marker-end', 'url(#hop-arrow)');
        var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = shortLabel(h.from) + ' → ' + shortLabel(h.to) + ' (' + h.count + ' hops)';
        line.appendChild(title);
        graphSvg.appendChild(line);

        if (h.count >= 2) {
          var mx = (src.x + tgt.x) / 2;
          var my = (src.y + tgt.y) / 2;
          var el = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          el.setAttribute('x', mx); el.setAttribute('y', my - 4);
          el.setAttribute('text-anchor', 'middle');
          el.setAttribute('fill', '#2ecc71');
          el.setAttribute('font-size', '8');
          el.setAttribute('font-weight', '700');
          el.textContent = h.count + '×';
          graphSvg.appendChild(el);
        }
      });

      var maxHits = Math.max.apply(null, nodes.map(function(n) { return n.hits; }));
      nodes.forEach(function(n) {
        var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('transform', 'translate(' + n.x + ',' + n.y + ')');

        var r = 8 + Math.sqrt(n.hits / maxHits) * 16;
        var isEntry = n.entries > n.hits * 0.5;
        var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('r', r);
        circle.setAttribute('fill', isEntry ? '#e74c3c' : '#2ecc71');
        circle.setAttribute('fill-opacity', '0.7');
        circle.setAttribute('stroke', '#fff');
        circle.setAttribute('stroke-width', '2');
        g.appendChild(circle);

        if (n.hits > 1) {
          var ht = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          ht.setAttribute('dy', '3');
          ht.setAttribute('text-anchor', 'middle');
          ht.setAttribute('fill', '#fff');
          ht.setAttribute('font-size', Math.max(8, r * 0.6));
          ht.setAttribute('font-weight', '700');
          ht.textContent = n.hits;
          g.appendChild(ht);
        }

        var label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('dy', r + 12);
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('fill', 'currentColor');
        label.setAttribute('font-size', '9');
        label.setAttribute('font-weight', n.hits > 5 ? '600' : '400');
        label.textContent = n.label;
        g.appendChild(label);

        var tooltip = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        tooltip.textContent = n.label + '\n' + n.hits + ' visits' +
          (n.entries ? '\n' + n.entries + ' direct entries (landing page)' : '') +
          '\n' + n.id;
        g.appendChild(tooltip);

        graphSvg.appendChild(g);
      });

      var ly = 16;
      [
        { color: '#e74c3c', label: '● Entry point (landing page)' },
        { color: '#2ecc71', label: '● Internal page (navigated to)' },
        { color: '#2ecc71', label: '→ Doorbell hop (Referer detected)' },
      ].forEach(function(item) {
        var t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        t.setAttribute('x', 8); t.setAttribute('y', ly);
        t.setAttribute('fill', item.color);
        t.setAttribute('font-size', '9');
        t.setAttribute('opacity', '0.6');
        t.textContent = item.label;
        graphSvg.appendChild(t);
        ly += 14;
      });

      container.appendChild(graphSvg);
    }

    // ── Top exploration paths ──
    var pathTitle = document.createElement('h4');
    pathTitle.style.cssText = 'margin:20px 0 6px;font-size:13px;opacity:0.7;';
    pathTitle.textContent = 'Most Explored Pages';
    container.appendChild(pathTitle);

    var table = document.createElement('table');
    table.style.cssText = 'width:100%;border-collapse:collapse;font-size:12px;';
    var thead = '<tr style="opacity:0.5;text-align:left;border-bottom:1px solid rgba(255,255,255,0.1);">' +
      '<th style="padding:4px 8px;">Page</th>' +
      '<th style="padding:4px 8px;text-align:right;">Visits</th>' +
      '<th style="padding:4px 8px;text-align:right;">Direct</th>' +
      '<th style="padding:4px 8px;">Bar</th></tr>';
    var tbody = '';
    var topHits = pages.length > 0 ? pages[0].hits : 1;
    pages.slice(0, 12).forEach(function(p) {
      var barW = Math.round((p.hits / topHits) * 100);
      var entryPct = p.entries ? Math.round(p.entries / p.hits * 100) : 0;
      tbody += '<tr style="border-bottom:1px solid rgba(255,255,255,0.05);">' +
        '<td style="padding:4px 8px;"><a href="' + p.path + '" style="color:inherit;text-decoration:none;">' + p.label + '</a></td>' +
        '<td style="padding:4px 8px;text-align:right;font-weight:600;">' + p.hits + '</td>' +
        '<td style="padding:4px 8px;text-align:right;opacity:0.5;">' + (p.entries || 0) + '</td>' +
        '<td style="padding:4px 8px;">' +
          '<div style="background:rgba(46,204,113,0.15);border-radius:3px;height:14px;width:100%;position:relative;">' +
            '<div style="background:#2ecc71;border-radius:3px;height:100%;width:' + barW + '%;opacity:0.7;"></div>' +
            (entryPct > 0 ? '<div style="background:#e74c3c;border-radius:3px;height:100%;width:' + Math.round(barW * entryPct / 100) + '%;opacity:0.5;position:absolute;top:0;left:0;"></div>' : '') +
          '</div>' +
        '</td></tr>';
    });
    table.innerHTML = thead + tbody;
    container.appendChild(table);

    // ── Bot ecosystem detail (if present) ──
    if (eco && (eco.crawlers.length || eco.aiCrawlers.length || eco.scanners.length)) {
      var ecoTitle = document.createElement('h4');
      ecoTitle.style.cssText = 'margin:20px 0 6px;font-size:13px;opacity:0.7;';
      ecoTitle.textContent = 'Bot Ecosystem — Guide · Catalog · Neutralize';
      container.appendChild(ecoTitle);

      var ecoGrid = document.createElement('div');
      ecoGrid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;font-size:11px;';

      // Guided column
      var guidedCol = '<div style="border-left:3px solid #3498db;padding-left:8px;">';
      guidedCol += '<div style="font-weight:700;color:#3498db;margin-bottom:6px;">🧭 Guided</div>';
      (eco.crawlers || []).forEach(function(c) {
        guidedCol += '<div style="opacity:0.7;">' + c.name + ' <span style="opacity:0.4;">(' + c.hits + ')</span></div>';
      });
      (eco.aiCrawlers || []).forEach(function(c) {
        guidedCol += '<div style="opacity:0.7;">' + c.name + ' <span style="opacity:0.4;">(' + c.hits + ')</span></div>';
      });
      guidedCol += '</div>';

      // Cataloged column
      var catCol = '<div style="border-left:3px solid #9b59b6;padding-left:8px;">';
      catCol += '<div style="font-weight:700;color:#9b59b6;margin-bottom:6px;">📋 Cataloged</div>';
      (eco.seoBots || []).forEach(function(c) {
        catCol += '<div style="opacity:0.7;">' + c.name + ' <span style="opacity:0.4;">(' + c.hits + ')</span></div>';
      });
      (eco.linkPreviews || []).forEach(function(c) {
        catCol += '<div style="opacity:0.7;">' + c.name + ' <span style="opacity:0.4;">(' + c.hits + ')</span></div>';
      });
      catCol += '</div>';

      // Neutralized column
      var neutCol = '<div style="border-left:3px solid #e74c3c;padding-left:8px;">';
      neutCol += '<div style="font-weight:700;color:#e74c3c;margin-bottom:6px;">🛡️ Neutralized</div>';
      (eco.scanners || []).slice(0, 8).forEach(function(c) {
        neutCol += '<div style="opacity:0.7;">' + c.name + ' <span style="opacity:0.4;">(' + c.hits + ')</span></div>';
      });
      if (eco.probes && eco.probes.length) {
        neutCol += '<div style="margin-top:6px;font-size:9px;opacity:0.4;">Probed: ';
        neutCol += eco.probes.slice(0, 5).map(function(p) { return p.path; }).join(', ');
        neutCol += '</div>';
      }
      neutCol += '</div>';

      ecoGrid.innerHTML = guidedCol + catCol + neutCol;
      container.appendChild(ecoGrid);
    }

    // ── Generated timestamp ──
    var ts = document.createElement('p');
    ts.style.cssText = 'font-size:9px;opacity:0.3;text-align:right;margin-top:12px;';
    ts.textContent = 'Receptor snapshot: ' + SE.generated + ' · ' +
      (s.humanHits || s.totalHits || 0) + ' human hits · ' +
      (s.totalRequests || 0) + ' total requests · ' +
      (s.days || 0) + ' days';
    container.appendChild(ts);
  }

  function init() {
    var container = document.getElementById('signal-exploration');
    if (!container) return;
    renderExploration(container);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
