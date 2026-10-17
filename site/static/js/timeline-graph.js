// Interactive timeline + network graph overlay for detroit.primals.eco
// Data source: petalTongue /api/public-record/timeline + /api/public-record/network
// Fallback: embedded static data

(function() {
  'use strict';

  // ── Color scheme (matches network-graph.js) ──

  var COLORS = {
    actor: '#c0392b', judge: '#8e44ad', political: '#2980b9',
    bmf: '#e74c3c', school: '#27ae60', entity: '#f39c12',
  };

  var ERA_COLORS = {
    'Pre-2017: Criminal History': '#c0392b',
    '2014–2016: Political Career': '#2980b9',
    '2017: The Pivot': '#e67e22',
    '2022–2023: Credentialing': '#8e44ad',
    '2024: Entity Expansion': '#f39c12',
    '2025: Charter Authorization': '#27ae60',
    '2026: Exposure': '#e74c3c',
    'Upcoming': '#95a5a6',
  };

  // ── Static timeline data (fallback) ──

  var STATIC_EVENTS = [
    { date: 'Nov 1998', event: 'Banks convicted — NSF Check, Lincoln Park', era: 'Pre-2017: Criminal History', actors: ['banks'], source: 'ICHAT' },
    { date: 'Apr 1999', event: 'Banks convicted — 3 felonies (U&P + 2×FTD), Oakland', era: 'Pre-2017: Criminal History', actors: ['banks'], source: 'ICHAT' },
    { date: 'Aug 1999', event: 'Banks convicted — NSF felony, Oakland', era: 'Pre-2017: Criminal History', actors: ['banks'], source: 'ICHAT' },
    { date: 'Sep 2003', event: 'Banks convicted — NSF $500+ felony, Wayne 3rd Circuit', era: 'Pre-2017: Criminal History', actors: ['banks'], source: 'ICHAT' },
    { date: 'Sep 2004', event: 'Banks arrested — Forgery + U&P, Eaton County', era: 'Pre-2017: Criminal History', actors: ['banks'], source: 'ICHAT' },
    { date: '2005', event: 'BMF federal indictment — OD Banks is Defendant #22', era: 'Pre-2017: Criminal History', actors: ['od_banks', 'banks'], source: 'PACER' },
    { date: '2007', event: 'Banks pleads guilty — Eaton County forgery', era: 'Pre-2017: Criminal History', actors: ['banks'], source: 'ICHAT' },
    { date: '2014', event: 'Banks runs for MI Senate; "Bank on Banks" PAC; Holland as Treasurer', era: '2014–2016: Political Career', actors: ['banks', 'holland', 'pacs'], source: 'MI Campaign Finance' },
    { date: '2015', event: 'Banks serves in MI House HD-1', era: '2014–2016: Political Career', actors: ['banks'], source: 'MI SOS' },
    { date: 'Jun 2016', event: 'Banks arrested by MI Attorney General — 3 felonies', era: '2014–2016: Political Career', actors: ['banks'], source: 'ICHAT' },
    { date: '2017', event: 'AG case: 3 felonies → 1 misdemeanor, 1 day', era: '2017: The Pivot', actors: ['banks'], source: 'ICHAT' },
    { date: 'Feb 2017', event: 'Banks Strategy & Consultants, LLC filed', era: '2017: The Pivot', actors: ['banks', 'banks_strategy'], source: 'LARA' },
    { date: '2017', event: 'Banks begins charter school career at MacDowell', era: '2017: The Pivot', actors: ['banks', 'macdowell'], source: 'Public records' },
    { date: '2022', event: 'Banks receives Ph.D. — dissertation lists fake "J.D., MSU Law, 2010"', era: '2022–2023: Credentialing', actors: ['banks'], source: 'Walden #12627' },
    { date: 'Sep 2022', event: 'MI DOE issues School Admin Certificate — 3 days after school year', era: '2022–2023: Credentialing', actors: ['banks'], source: 'MI DOE' },
    { date: '2023', event: 'Judge Miller — recorded confrontation with court security', era: '2022–2023: Credentialing', actors: ['miller'], source: 'News media' },
    { date: 'Apr 2024', event: 'Banks Strategy LLC restored — 3 overdue annual reports', era: '2024: Entity Expansion', actors: ['banks', 'banks_strategy'], source: 'LARA' },
    { date: 'Nov 2024', event: 'The Purpose Group, LLC filed', era: '2024: Entity Expansion', actors: ['banks', 'purpose_group'], source: 'LARA' },
    { date: 'Dec 2024', event: 'Purpose Foundation filed — Banks + Holland hold all positions', era: '2024: Entity Expansion', actors: ['banks', 'holland', 'purpose_foundation'], source: 'LARA' },
    { date: '2024', event: 'Judge Yancey campaign pays $383.82 to Banks Strategy (sole expenditure)', era: '2024: Entity Expansion', actors: ['yancey', 'banks_strategy'], source: 'CFRS' },
    { date: 'Jul 2025', event: 'PCA authorized by DPSCD Board', era: '2025: Charter Authorization', actors: ['pca', 'gay_dagnogo'], source: 'DPSCD' },
    { date: 'May 2026', event: 'Holland discharged from MDOC — "WITHOUT IMPROVEMENT"', era: '2026: Exposure', actors: ['holland'], source: 'MDOC OTIS' },
    { date: 'Aug 2026', event: 'Complainant attends PCA — Banks denies access', era: '2026: Exposure', actors: ['banks', 'pca'], source: 'Police report' },
    { date: 'Sep 2026', event: 'ICHAT pulled — 9 convictions confirmed', era: '2026: Exposure', actors: ['banks'], source: 'MI ICHAT' },
    { date: 'Sep 22, 2026', event: 'Federal Master Packet — scheduled delivery to 8 agencies', era: 'Upcoming', actors: ['banks', 'holland', 'miller', 'yancey'], upcoming: true, source: 'Prepared' },
    { date: 'Nov 3, 2026', event: 'Judge Cylenthia Miller — election day', era: 'Upcoming', actors: ['miller'], upcoming: true, source: '' },
  ];

  // ── Network mini-graph (shared with network-graph.js structure) ──

  var NETWORK_NODES = {
    banks: { label: 'Banks', color: COLORS.actor, url: '/network/actors/brian-banks/' },
    holland: { label: 'Holland', color: COLORS.actor, url: '/network/actors/joseph-holland/' },
    miller: { label: 'Miller', color: COLORS.judge, url: '/network/judges/cylenthia-miller/' },
    yancey: { label: 'Yancey', color: COLORS.judge, url: '/network/judges/tenisha-yancey/' },
    sabree: { label: 'Sabree', color: COLORS.judge, url: '/network/judges/aliyah-sabree/' },
    perkins_d: { label: 'Perkins', color: COLORS.judge, url: '/network/judges/david-perkins/' },
    gay_dagnogo: { label: 'Gay-Dagnogo', color: COLORS.political, url: '/network/political/sherry-gay-dagnogo/' },
    od_banks: { label: 'OD Banks', color: COLORS.bmf, url: null },
    welch: { label: 'Welch', color: COLORS.bmf, url: null },
    pca: { label: 'PCA', color: COLORS.school, url: '/network/entities/purpose-charter-academy/' },
    macdowell: { label: 'MacDowell', color: COLORS.school, url: '/network/entities/macdowell-prep/' },
    purpose_group: { label: 'Purpose Group', color: COLORS.entity, url: '/network/entities/purpose-group-llc/' },
    purpose_foundation: { label: 'Foundation', color: COLORS.entity, url: '/network/entities/purpose-foundation/' },
    banks_strategy: { label: 'Banks Strategy', color: COLORS.entity, url: '/network/entities/banks-strategy-llc/' },
    pacs: { label: 'PACs', color: COLORS.entity, url: '/network/entities/political-action-committees/' },
  };

  // ── Render ──

  function renderTimeline(container, events) {
    container.innerHTML = '';

    // Group by era
    var eras = [];
    var currentEra = null;
    events.forEach(function(ev) {
      if (ev.era !== currentEra) {
        currentEra = ev.era;
        eras.push({ name: ev.era, events: [] });
      }
      eras[eras.length - 1].events.push(ev);
    });

    // Era filter bar
    var filterBar = document.createElement('div');
    filterBar.className = 'tl-filter-bar';
    var allBtn = document.createElement('button');
    allBtn.className = 'tl-filter-btn active';
    allBtn.textContent = 'All';
    allBtn.setAttribute('data-era', 'all');
    filterBar.appendChild(allBtn);
    eras.forEach(function(era) {
      var btn = document.createElement('button');
      btn.className = 'tl-filter-btn';
      btn.textContent = era.name.replace(/:.*/,'').trim();
      btn.setAttribute('data-era', era.name);
      btn.style.borderColor = ERA_COLORS[era.name] || '#95a5a6';
      filterBar.appendChild(btn);
    });
    container.appendChild(filterBar);

    // Actor chips (network overlay)
    var chipBar = document.createElement('div');
    chipBar.className = 'tl-chip-bar';
    chipBar.innerHTML = '<span class="tl-chip-label">Filter by actor:</span>';
    var actorsSeen = {};
    events.forEach(function(ev) {
      (ev.actors || []).forEach(function(a) { actorsSeen[a] = true; });
    });
    Object.keys(actorsSeen).sort().forEach(function(id) {
      var node = NETWORK_NODES[id];
      if (!node) return;
      var chip = document.createElement('button');
      chip.className = 'tl-actor-chip';
      chip.textContent = node.label;
      chip.setAttribute('data-actor', id);
      chip.style.borderColor = node.color;
      chip.style.color = node.color;
      chipBar.appendChild(chip);
    });
    container.appendChild(chipBar);

    // Timeline track
    var track = document.createElement('div');
    track.className = 'tl-track';

    eras.forEach(function(era) {
      var eraDiv = document.createElement('div');
      eraDiv.className = 'tl-era';
      eraDiv.setAttribute('data-era', era.name);

      var eraHeader = document.createElement('div');
      eraHeader.className = 'tl-era-header';
      eraHeader.style.borderLeftColor = ERA_COLORS[era.name] || '#95a5a6';
      eraHeader.textContent = era.name;
      eraDiv.appendChild(eraHeader);

      era.events.forEach(function(ev) {
        var item = document.createElement('div');
        item.className = 'tl-event' + (ev.upcoming ? ' tl-upcoming' : '');
        item.setAttribute('data-actors', (ev.actors || []).join(','));

        var dot = document.createElement('span');
        dot.className = 'tl-dot';
        dot.style.background = ERA_COLORS[era.name] || '#95a5a6';

        var date = document.createElement('span');
        date.className = 'tl-date';
        date.textContent = ev.date;

        var text = document.createElement('span');
        text.className = 'tl-text';
        text.textContent = ev.event;

        var source = document.createElement('span');
        source.className = 'tl-source';
        source.textContent = ev.source || '';

        // Actor chips inline
        var actors = document.createElement('span');
        actors.className = 'tl-event-actors';
        (ev.actors || []).forEach(function(id) {
          var node = NETWORK_NODES[id];
          if (!node) return;
          var badge = document.createElement('a');
          badge.className = 'tl-actor-badge';
          badge.style.background = node.color;
          badge.textContent = node.label;
          if (node.url) badge.href = node.url;
          actors.appendChild(badge);
        });

        item.appendChild(dot);
        item.appendChild(date);
        item.appendChild(text);
        item.appendChild(source);
        item.appendChild(actors);
        eraDiv.appendChild(item);
      });

      track.appendChild(eraDiv);
    });

    container.appendChild(track);

    // ── Interactivity ──

    var activeEra = 'all';
    var activeActor = null;

    function filterEvents() {
      var allEvents = track.querySelectorAll('.tl-event');
      var allEras = track.querySelectorAll('.tl-era');

      allEras.forEach(function(era) {
        if (activeEra === 'all' || era.getAttribute('data-era') === activeEra) {
          era.style.display = '';
        } else {
          era.style.display = 'none';
        }
      });

      allEvents.forEach(function(item) {
        var eventActors = item.getAttribute('data-actors') || '';
        var eraMatch = activeEra === 'all' || item.closest('.tl-era').getAttribute('data-era') === activeEra;
        var actorMatch = !activeActor || eventActors.split(',').indexOf(activeActor) >= 0;

        if (eraMatch && actorMatch) {
          item.style.display = '';
          item.classList.remove('tl-dimmed');
        } else if (eraMatch && !actorMatch) {
          item.style.display = '';
          item.classList.add('tl-dimmed');
        } else {
          item.style.display = 'none';
        }
      });
    }

    // Era filter buttons
    filterBar.addEventListener('click', function(e) {
      var btn = e.target.closest('.tl-filter-btn');
      if (!btn) return;
      filterBar.querySelectorAll('.tl-filter-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeEra = btn.getAttribute('data-era');
      filterEvents();
    });

    // Actor chip buttons
    chipBar.addEventListener('click', function(e) {
      var chip = e.target.closest('.tl-actor-chip');
      if (!chip) return;
      var id = chip.getAttribute('data-actor');
      if (activeActor === id) {
        activeActor = null;
        chip.classList.remove('active');
      } else {
        chipBar.querySelectorAll('.tl-actor-chip').forEach(function(c) { c.classList.remove('active'); });
        chip.classList.add('active');
        activeActor = id;
      }
      filterEvents();
    });
  }

  // ── Initialize ──

  function init() {
    var container = document.getElementById('interactive-timeline');
    if (!container) return;

    fetch('/api/public-record/timeline')
      .then(function(r) { return r.ok ? r.json() : Promise.reject('no API'); })
      .then(function(data) { renderTimeline(container, data.events || []); })
      .catch(function() { renderTimeline(container, STATIC_EVENTS); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
