// detroit-pt.js — petalTongue bridge for detroit.primals.eco
// Reads window.DETROIT_NETWORK (loaded by network-data.js) and renders
// through the grammar-of-graphics scene compiler at hud.primals.eco/ws
// Depends on: pt-bridge-core.js (PetalBridge)
(function() {
  'use strict';

  var pt = PetalBridge({
    wsUrl: 'wss://hud.primals.eco/ws',
    domain: 'detroit',
    statusEl: 'pt-status',
    maxHeight: 260,
    reconnectMs: 8000,
    rpcTimeoutMs: 10000,
    onConnect: function() { tryRender(); }
  });

  // ═══════════════════════════════════════════════════════════════
  // PANEL RENDERING — reads from DETROIT_NETWORK
  // ═══════════════════════════════════════════════════════════════

  function tryRender() {
    if (!pt.isConnected() || !window.DETROIT_NETWORK) return;
    var net = window.DETROIT_NETWORK;
    var data = net.graphData();
    var stats = net.stats();

    // 1. Node type donut
    var typeCounts = {};
    data.nodes.forEach(function(n) { typeCounts[n.type] = (typeCounts[n.type] || 0) + 1; });
    var tk = Object.keys(typeCounts).sort(function(a, b) { return typeCounts[b] - typeCounts[a]; });
    pt.renderBinding({
      channel_type: 'donut', id: 'node-types',
      label: 'Network Actors by Type — ' + stats.nodeCount + ' Nodes',
      categories: tk, values: tk.map(function(k) { return typeCounts[k]; }), unit: 'nodes'
    }, 'pt-node-types');

    // 2. Flow type donut
    var fc = stats.flowCounts;
    var fk = Object.keys(fc).sort(function(a, b) { return fc[b] - fc[a]; });
    pt.renderBinding({
      channel_type: 'donut', id: 'flow-types',
      label: 'Edge Flow Types — ' + stats.edgeCount + ' Connections',
      categories: fk, values: fk.map(function(k) { return fc[k]; }), unit: 'edges'
    }, 'pt-flow-types');

    // 3. Community sizes donut
    var commCounts = {};
    data.nodes.forEach(function(n) {
      var c = 'Community ' + (n.community != null ? n.community : '?');
      commCounts[c] = (commCounts[c] || 0) + 1;
    });
    var ck = Object.keys(commCounts).sort(function(a, b) { return commCounts[b] - commCounts[a]; });
    pt.renderBinding({
      channel_type: 'donut', id: 'communities',
      label: 'Community Detection — Graph Clusters',
      categories: ck, values: ck.map(function(k) { return commCounts[k]; }), unit: 'members'
    }, 'pt-communities');

    // 4. Nexus type coverage
    var nexusCounts = {};
    data.nodes.forEach(function(n) {
      (n.nexus || []).forEach(function(nx) { nexusCounts[nx] = (nexusCounts[nx] || 0) + 1; });
    });
    var nk = Object.keys(nexusCounts).sort(function(a, b) { return nexusCounts[b] - nexusCounts[a]; });
    pt.renderBinding({
      channel_type: 'bar', id: 'nexus-types',
      label: 'Nexus Coverage — Cross-Sector Nodes',
      categories: nk, values: nk.map(function(k) { return nexusCounts[k]; }), unit: 'nodes'
    }, 'pt-nexus-types');

    // 5. Tier distribution
    var tierCounts = {};
    data.nodes.forEach(function(n) {
      tierCounts['Tier ' + n.tier] = (tierCounts['Tier ' + n.tier] || 0) + 1;
    });
    var tiers = ['Tier 1', 'Tier 2', 'Tier 3', 'Tier 4', 'Tier 5'];
    pt.renderBinding({
      channel_type: 'bar', id: 'tier-dist',
      label: 'Network Tier Structure — Enterprise Hierarchy',
      categories: tiers, values: tiers.map(function(t) { return tierCounts[t] || 0; }), unit: 'nodes'
    }, 'pt-tier-dist');

    // 6. Dynasty membership
    var dynastyCounts = {};
    data.nodes.forEach(function(n) {
      if (n.dynasty) dynastyCounts[n.dynasty] = (dynastyCounts[n.dynasty] || 0) + 1;
    });
    var dk = Object.keys(dynastyCounts).sort(function(a, b) { return dynastyCounts[b] - dynastyCounts[a]; });
    if (dk.length > 0) {
      pt.renderBinding({
        channel_type: 'bar', id: 'dynasties',
        label: 'Political Dynasties — Family/Faction Clusters',
        categories: dk, values: dk.map(function(k) { return dynastyCounts[k]; }), unit: 'members'
      }, 'pt-dynasties');
    }

    // 7. Degree distribution scatter
    var degrees = net.degrees();
    if (degrees) {
      var xs = [], ys = [];
      data.nodes.forEach(function(n) {
        var d = degrees[n.id];
        if (d && (d.in + d.out) > 1) { xs.push(d.in); ys.push(d.out); }
      });
      if (xs.length > 3) {
        pt.renderBinding({
          channel_type: 'scatter', id: 'degree-scatter',
          label: 'Degree Distribution — In vs Out Connections',
          x: xs, y: ys, unit: 'nodes'
        }, 'pt-degree-scatter');
      }
    }

    // 8. Geo flow heatmap
    var geoFlows = data.geoFlows || [];
    if (geoFlows.length > 0) {
      var regions = [], flowTypes = ['money', 'power', 'influence', 'position'];
      var geoMap = {};
      geoFlows.forEach(function(g) {
        var r = g.from || g.zone || g.label || '?';
        if (regions.indexOf(r) < 0) regions.push(r);
        if (!geoMap[r]) geoMap[r] = {};
        geoMap[r][g.flow || 'influence'] = (geoMap[r][g.flow || 'influence'] || 0) + (g.count || 1);
      });
      if (regions.length > 1) {
        var gv = [];
        regions.forEach(function(r) {
          flowTypes.forEach(function(f) { gv.push(geoMap[r] && geoMap[r][f] || 0); });
        });
        pt.renderBinding({
          channel_type: 'heatmap', id: 'geo-flow',
          label: 'Geographic × Flow Type — Extraction Geography',
          x_labels: flowTypes, y_labels: regions, values: gv, unit: 'edges'
        }, 'pt-geo-flow');
      }
    }

    // 9. Bench capture gauge
    var benches = data.benches || [];
    if (benches.length > 0) {
      var totalJ = 0, capturedJ = 0;
      benches.forEach(function(b) { totalJ += b.total || 0; capturedJ += b.captured || 0; });
      var captureRatio = totalJ > 0 ? Math.round(capturedJ / totalJ * 1000) / 10 : 0;
      pt.renderBinding({
        channel_type: 'gauge', id: 'bench-capture',
        label: 'Bench Capture Ratio — Anderson Disorder',
        value: captureRatio, min: 0, max: 100, unit: '%',
        normal_range: [0, 15], warning_range: [15, 35]
      }, 'pt-bench-capture');
    }

    // 10. Ownership group sizes
    var ownershipGroups = data.ownershipGroups || [];
    if (ownershipGroups.length > 0) {
      pt.renderBinding({
        channel_type: 'bar', id: 'ownership',
        label: 'Ownership Groups — Shell Entity Clusters',
        categories: ownershipGroups.map(function(g) { return g.label || g.name || 'Group'; }),
        values: ownershipGroups.map(function(g) { return (g.members || g.nodes || []).length; }),
        unit: 'entities'
      }, 'pt-ownership');
    }

    // 11. Money trail
    if (stats.totalDocumentedDollars > 0) {
      var trail = net.moneyTrail();
      if (trail && trail.length > 0) {
        var sources = [], amounts = [];
        trail.slice(0, 12).forEach(function(t) {
          sources.push((t.from || '?') + ' → ' + (t.to || '?'));
          amounts.push(t.amount || 0);
        });
        pt.renderBinding({
          channel_type: 'bar', id: 'money-trail',
          label: 'Money Trail — $' + stats.totalDocumentedDollars.toLocaleString() + ' Documented',
          categories: sources, values: amounts, unit: '$'
        }, 'pt-money-trail');
      }
    }

    // 12. Oversight cycles
    if (stats.cycleCount > 0) {
      pt.renderBinding({
        channel_type: 'gauge', id: 'cycles',
        label: 'Oversight Cycles — Closed Loops of Failure',
        value: stats.cycleCount, min: 0, max: 20, unit: 'cycles',
        normal_range: [0, 2], warning_range: [2, 5]
      }, 'pt-cycles');
    }

    // ── Anderson Lattice ──

    // 13. Lattice heatmap
    var latticePaths = data.latticePaths || {};
    if (benches.length > 0 && Object.keys(latticePaths).length > 0) {
      var activeBenches = benches.filter(function(b) { return !b.retired; });
      var courtIds = [];
      activeBenches.forEach(function(b) {
        if (courtIds.indexOf(b.court) < 0) courtIds.push(b.court);
      });
      var caseTypes = Object.keys(latticePaths).sort(function(a, b) {
        var la = latticePaths[a].localizationLength;
        var lb = latticePaths[b].localizationLength;
        if (la === Infinity && lb === Infinity) return 0;
        if (la === Infinity) return 1;
        if (lb === Infinity) return -1;
        return la - lb;
      });
      var courtLabels = courtIds.map(function(c) { return c.replace('court_', '').replace(/_/g, ' '); });
      var latticeVals = [];
      courtIds.forEach(function(court) {
        caseTypes.forEach(function(ct) {
          var bench = activeBenches.find(function(b) { return b.court === court; });
          var cRatio = bench ? (bench.captured / bench.total * 100) : 0;
          var path = latticePaths[ct];
          latticeVals.push(path && path.courts && path.courts.indexOf(court) >= 0 ? Math.round(cRatio) : 0);
        });
      });
      pt.renderBinding({
        channel_type: 'heatmap', id: 'lattice',
        label: 'Anderson Lattice — Courts × Case Types (Capture %)',
        x_labels: caseTypes, y_labels: courtLabels, values: latticeVals, unit: '% captured'
      }, 'pt-lattice');
    }

    // 14. Localization length bar
    if (Object.keys(latticePaths).length > 0) {
      var llLabels = [], llVals = [];
      Object.keys(latticePaths).sort(function(a, b) {
        var la = latticePaths[a].localizationLength;
        var lb = latticePaths[b].localizationLength;
        return (la === Infinity ? 99 : la) - (lb === Infinity ? 99 : lb);
      }).forEach(function(ct) {
        llLabels.push(ct);
        var ll = latticePaths[ct].localizationLength;
        llVals.push(ll === Infinity ? 10 : Math.round(ll * 10) / 10);
      });
      pt.renderBinding({
        channel_type: 'bar', id: 'localization-length',
        label: 'Localization Length — How Far Cases Travel Before Capture',
        categories: llLabels, values: llVals, unit: 'hops'
      }, 'pt-localization');
    }

    // 15. Per-court capture — faceted gauges
    if (benches.length > 0) {
      var courtGauges = [];
      benches.filter(function(b) { return !b.retired; }).forEach(function(b) {
        courtGauges.push({
          key: b.court.replace('court_', '').replace(/_/g, ' '),
          value: Math.round(b.captured / b.total * 100),
          min: 0, max: 100, normal_range: [0, 20], warning_range: [50, 100]
        });
      });
      pt.renderBinding({
        channel_type: 'faceted_gauge', id: 'court-capture',
        label: 'Per-Court Capture Ratio — Judges Connected to Network',
        group_by: 'court', gauges: courtGauges, unit: '% captured', columns: 3
      }, 'pt-court-capture');
    }

    // ── Timeline + graph analytics ──

    // 16. Timeline era bar
    var timelineEvents = data.timelineEvents || [];
    if (timelineEvents.length > 0) {
      var eraCounts = {};
      timelineEvents.forEach(function(ev) {
        eraCounts[ev.era || 'Unknown'] = (eraCounts[ev.era || 'Unknown'] || 0) + 1;
      });
      var eraK = Object.keys(eraCounts);
      pt.renderBinding({
        channel_type: 'bar', id: 'timeline-eras',
        label: 'Timeline — Events per Era (' + timelineEvents.length + ' total)',
        categories: eraK.map(function(k) { return k.replace(/^\d{4}.*?:\s*/, ''); }),
        values: eraK.map(function(k) { return eraCounts[k]; }), unit: 'events'
      }, 'pt-timeline-eras');
    }

    // 17. Evidence sources bar
    if (timelineEvents.length > 0) {
      var srcCounts = {};
      timelineEvents.forEach(function(ev) {
        srcCounts[ev.source || 'Unknown'] = (srcCounts[ev.source || 'Unknown'] || 0) + 1;
      });
      var srcK = Object.keys(srcCounts).sort(function(a, b) { return srcCounts[b] - srcCounts[a]; });
      pt.renderBinding({
        channel_type: 'bar', id: 'evidence-sources',
        label: 'Evidence Sources — Where the Data Comes From',
        categories: srcK, values: srcK.map(function(k) { return srcCounts[k]; }), unit: 'citations'
      }, 'pt-evidence-sources');
    }

    // 18. Multi-nexus node heatmap
    var multiNexus = data.nodes.filter(function(n) { return (n.nexus || []).length > 1; });
    if (multiNexus.length > 2) {
      var mnLabels = multiNexus.map(function(n) { return n.label; });
      var allNexus = ['education', 'political', 'enforcement', 'weaponization', 'legislative'];
      var mnVals = [];
      multiNexus.forEach(function(n) {
        allNexus.forEach(function(nx) { mnVals.push((n.nexus || []).indexOf(nx) >= 0 ? 100 : 0); });
      });
      pt.renderBinding({
        channel_type: 'heatmap', id: 'multi-nexus',
        label: 'Cross-Sector Nodes — Who Spans Multiple Nexus Types',
        x_labels: allNexus, y_labels: mnLabels, values: mnVals, unit: 'membership'
      }, 'pt-multi-nexus');
    }

    // 19. Edge weight by flow
    var flowWeights = {};
    data.edges.forEach(function(e) {
      var f = e.flow || 'unknown';
      flowWeights[f] = (flowWeights[f] || 0) + (e.weight || 1);
    });
    var fwK = Object.keys(flowWeights).sort(function(a, b) { return flowWeights[b] - flowWeights[a]; });
    if (fwK.length > 0) {
      pt.renderBinding({
        channel_type: 'bar', id: 'flow-weights',
        label: 'Connection Strength by Flow Type',
        categories: fwK, values: fwK.map(function(k) { return flowWeights[k]; }), unit: 'weight'
      }, 'pt-flow-weights');
    }

    // 20. Force-directed network graph — Rust Fruchterman-Reingold layout
    var fgNodes = data.nodes.slice(0, 120).map(function(n) {
      return {
        id: n.id, label: n.label || n.id,
        kind: n.type || 'entity',
        tier: n.tier || null,
        metadata: { community: n.community, dynasty: n.dynasty || null }
      };
    });
    var nodeSet = {};
    fgNodes.forEach(function(n) { nodeSet[n.id] = true; });
    var fgEdges = data.edges.filter(function(e) {
      return nodeSet[e.source] && nodeSet[e.target];
    }).map(function(e) {
      return {
        source: e.source, target: e.target,
        relation: e.type || 'link',
        weight: e.weight || 1.0,
        flow: e.flow || ''
      };
    });
    if (fgNodes.length > 2 && fgEdges.length > 1) {
      pt.renderBinding({
        channel_type: 'force_graph', id: 'network-force',
        label: 'Network Force Layout — ' + fgNodes.length + ' Nodes, ' + fgEdges.length + ' Edges',
        nodes: fgNodes, edges: fgEdges,
        width: 960, height: 700
      }, 'pt-network-force');
    }

    // 21. Chord diagram — flow matrix between tiers
    var tierNames = ['Tier 1', 'Tier 2', 'Tier 3', 'Tier 4', 'Tier 5'];
    var nTiers = tierNames.length;
    var chordFlows = new Array(nTiers * nTiers).fill(0);
    data.edges.forEach(function(e) {
      var sNode = data.nodes.find(function(n) { return n.id === e.source; });
      var tNode = data.nodes.find(function(n) { return n.id === e.target; });
      if (sNode && tNode && sNode.tier >= 1 && sNode.tier <= 5 && tNode.tier >= 1 && tNode.tier <= 5) {
        chordFlows[(sNode.tier - 1) * nTiers + (tNode.tier - 1)] += (e.weight || 1);
      }
    });
    var chordTotal = chordFlows.reduce(function(a, b) { return a + b; }, 0);
    if (chordTotal > 0) {
      pt.renderBinding({
        channel_type: 'chord', id: 'tier-chord',
        label: 'Inter-Tier Flow — Who Connects to Whom (' + Math.round(chordTotal) + ' total weight)',
        categories: tierNames, flows: chordFlows, unit: 'weight'
      }, 'pt-tier-chord');
    }

    // 22. Tense distribution donut (Paper 48 — epitope sort compression)
    // This renders from dashboard.json tense_distribution if available,
    // otherwise synthesize from the network graph's node temporal properties.
    var tenseIs = 0, tenseWas = 0, tenseWillBe = 0;
    data.nodes.forEach(function(n) {
      // Nodes with temporal depth > 0 are "Was" (historical), others are "Is" (current)
      if (n.tier <= 2) { tenseIs += 1; }      // Current principals + enablers
      else if (n.tier <= 4) { tenseWas += 1; } // Historical actors
      else { tenseWillBe += 1; }                // Predicted / structural
    });
    if (tenseIs + tenseWas + tenseWillBe > 0) {
      pt.renderBinding({
        channel_type: 'donut', id: 'tense-donut',
        label: 'Tense Distribution — Is / Was / Will Be (Paper 48)',
        slices: [
          { label: 'Is (present)', value: tenseIs, color: '#3fb950' },
          { label: 'Was (recorded)', value: tenseWas, color: '#f0883e' },
          { label: 'Will Be (predicted)', value: tenseWillBe, color: '#bc8cff' }
        ]
      }, 'pt-tense-donut');
    }

    // 23. Sort compression bar chart — bits of compression at each level
    var totalNodes = data.nodes.length;
    var alphaComp = Math.max(0, Math.log2(totalNodes)).toFixed(1);
    var epitopeComp = Math.max(0, alphaComp - Math.log2(data.stats().typeCount || 8)).toFixed(1);
    var tenseComp = Math.max(0, alphaComp - 1.58).toFixed(1); // 3 tense buckets = 1.58 bits
    pt.renderBinding({
      channel_type: 'bar', id: 'sort-compression',
      label: 'Sort Compression — Bits Eliminated Per Sort Level',
      categories: ['Alphabetic', 'Epitope', 'Tense'],
      values: [parseFloat(alphaComp), parseFloat(epitopeComp), parseFloat(tenseComp)],
      unit: 'bits'
    }, 'pt-sort-compression');
  }

  // ═══════════════════════════════════════════════════════════════
  // MOUNT
  // ═══════════════════════════════════════════════════════════════

  function card(title, sub, id) {
    return '<div class="pt-card"><div class="pt-card-title">' + title + '</div>'
      + '<div class="pt-card-sub">' + sub + '</div>'
      + '<div id="' + id + '" class="pt-viz"></div></div>';
  }

  function mount() {
    var el = document.getElementById('pt-panels');
    if (!el) return;
    var statsInfo = window.DETROIT_NETWORK
      ? window.DETROIT_NETWORK.stats().nodeCount + ' nodes, ' + window.DETROIT_NETWORK.stats().edgeCount + ' edges.'
      : 'loading...';
    el.innerHTML = ''
      + '<div class="pt-header">'
      + '  <div class="pt-title">🔬 petalTongue Deep Analysis</div>'
      + '  <div><span id="pt-status"></span></div>'
      + '</div>'
      + '<div class="pt-subtitle">Server-side rendering through the grammar-of-graphics scene compiler. '
      + 'All data from the DETROIT_NETWORK graph — ' + statsInfo + '</div>'
      + card('Node Types', 'Actor types — donut.', 'pt-node-types')
      + card('Flow Types', 'Money, power, influence, position — donut.', 'pt-flow-types')
      + card('Communities', 'Graph clustering — who orbits whom.', 'pt-communities')
      + card('Nexus Coverage', 'Cross-sector reach — education, political, enforcement, etc.', 'pt-nexus-types')
      + card('Tier Structure', 'Tier 1 principals → Tier 5 historical.', 'pt-tier-dist')
      + card('Dynasties', 'Family/faction clusters.', 'pt-dynasties')
      + card('Degree Distribution', 'In vs out connections.', 'pt-degree-scatter')
      + card('Geographic × Flow', 'Extraction geography.', 'pt-geo-flow')
      + card('Bench Capture', 'Anderson disorder — judge capture ratio.', 'pt-bench-capture')
      + card('Ownership Groups', 'Shell entity clusters.', 'pt-ownership')
      + card('Money Trail', 'Documented dollar flows.', 'pt-money-trail')
      + card('Oversight Cycles', 'Closed oversight loops.', 'pt-cycles')
      + '<div class="pt-card" style="grid-column:1/-1"><div class="pt-card-title" style="font-size:0.85em;color:#6e7681">▸ Anderson Lattice — courts × capture</div></div>'
      + card('Anderson Lattice', 'Courts × case types — capture percentage.', 'pt-lattice')
      + card('Localization Length', 'How far cases travel before capture.', 'pt-localization')
      + card('Per-Court Capture', 'Faceted gauges — per-court capture %.', 'pt-court-capture')
      + '<div class="pt-card" style="grid-column:1/-1"><div class="pt-card-title" style="font-size:0.85em;color:#6e7681">▸ Timeline + graph analytics</div></div>'
      + card('Timeline Eras', 'Event density per era.', 'pt-timeline-eras')
      + card('Evidence Sources', 'Where evidence comes from.', 'pt-evidence-sources')
      + card('Cross-Sector Nodes', 'Multi-nexus actors.', 'pt-multi-nexus')
      + card('Connection Strength', 'Edge weight by flow type.', 'pt-flow-weights')
      + '<div class="pt-card" style="grid-column:1/-1"><div class="pt-card-title" style="font-size:0.85em;color:#6e7681">▸ Network topology — server-side Fruchterman-Reingold</div></div>'
      + card('Network Force Layout', 'Nodes positioned by Rust force simulation.', 'pt-network-force')
      + card('Inter-Tier Flow', 'Chord diagram — flow between tiers.', 'pt-tier-chord')
      + '<div class="pt-card" style="grid-column:1/-1"><div class="pt-card-title" style="font-size:0.85em;color:#6e7681">▸ Epitope sort compression — Paper 48</div></div>'
      + card('Tense Distribution', 'Is (first seen) / Was (repeat) / Will Be (predicted).', 'pt-tense-donut')
      + card('Sort Compression', 'Bits of compression at each sort level.', 'pt-sort-compression');
  }

  mount();
  pt.connect();
  setInterval(function() { if (pt.isConnected() && window.DETROIT_NETWORK) tryRender(); }, 60000);
})();
