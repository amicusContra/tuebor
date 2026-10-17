/*
 * SQUIRREL.JS — The Mobius Strip View
 * Reads graph.json, computes live vital signs, populates the HUD.
 * The HUD and the graph are the same surface. One truth. No lie.
 *
 * scyBorg Triple License: AGPL-3.0-or-later / ORC / CC-BY-SA 4.0
 */
(function () {
  'use strict';

  function fmt(n) {
    return n.toLocaleString('en-US');
  }

  function setText(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  function loadGraph() {
    var url = '/graph.json';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status !== 200) return;
      try {
        var g = JSON.parse(xhr.responseText);
        processGraph(g);
      } catch (e) {
        console.warn('[squirrel] Could not parse graph.json:', e);
      }
    };
    xhr.send();
  }

  function processGraph(g) {
    var nodes = g.nodes || [];
    var edges = g.edges || [];

    var nodeCount = nodes.length;
    var edgeCount = edges.length;

    // Count edge types
    var edgeTypes = {};
    var degree = {};
    for (var i = 0; i < edges.length; i++) {
      var e = edges[i];
      edgeTypes[e.type] = (edgeTypes[e.type] || 0) + 1;
      degree[e.source] = (degree[e.source] || 0) + 1;
      degree[e.target] = (degree[e.target] || 0) + 1;
    }
    var typeCount = Object.keys(edgeTypes).length;

    // Avg degree
    var totalDeg = 0;
    var degreeKeys = Object.keys(degree);
    for (var j = 0; j < degreeKeys.length; j++) {
      totalDeg += degree[degreeKeys[j]];
    }
    var avgDeg = degreeKeys.length > 0 ? (totalDeg / degreeKeys.length).toFixed(1) : '0';

    // Pendants (degree 1) and islands (degree 0)
    var nodeIdSet = {};
    for (var k = 0; k < nodes.length; k++) {
      nodeIdSet[nodes[k].id] = true;
    }
    var pendants = 0;
    var islands = 0;
    for (var m = 0; m < nodes.length; m++) {
      var d = degree[nodes[m].id] || 0;
      if (d === 0) islands++;
      else if (d === 1) pendants++;
    }

    // Count articles
    var articleCount = 0;
    for (var n = 0; n < nodes.length; n++) {
      if (nodes[n].class === 'article' || (nodes[n].id && nodes[n].id.indexOf('article_') === 0)) {
        articleCount++;
      }
    }

    // Singleton edge types
    var singletons = 0;
    var typeKeys = Object.keys(edgeTypes);
    for (var p = 0; p < typeKeys.length; p++) {
      if (edgeTypes[typeKeys[p]] === 1) singletons++;
    }

    // Top polyglot — node with most distinct edge types
    var nodeTypes = {};
    for (var q = 0; q < edges.length; q++) {
      var ee = edges[q];
      if (!nodeTypes[ee.source]) nodeTypes[ee.source] = {};
      if (!nodeTypes[ee.target]) nodeTypes[ee.target] = {};
      nodeTypes[ee.source][ee.type] = true;
      nodeTypes[ee.target][ee.type] = true;
    }
    var topPolyglot = '';
    var topPolyCount = 0;
    var ntKeys = Object.keys(nodeTypes);
    for (var r = 0; r < ntKeys.length; r++) {
      var ct = Object.keys(nodeTypes[ntKeys[r]]).length;
      if (ct > topPolyCount) {
        topPolyCount = ct;
        topPolyglot = ntKeys[r];
      }
    }

    // Populate the HUD — update ALL stale numbers
    setText('live-node-count', fmt(nodeCount) + ' nodes');
    setText('live-edge-count', fmt(edgeCount) + ' documented connections');
    setText('live-edge-types', fmt(typeCount) + ' edge types');
    setText('game-total-nodes', fmt(nodeCount));
    setText('v-nodes', fmt(nodeCount));
    setText('v-edges', fmt(edgeCount));
    setText('v-types', fmt(typeCount));
    setText('v-degree', avgDeg);
    setText('v-pendants', fmt(pendants));
    setText('v-islands', fmt(islands));
    setText('sq-articles', fmt(articleCount));
    setText('sq-languages', fmt(typeCount));

    // Topo label
    var topoLabel = document.getElementById('topo-label');
    if (topoLabel) {
      topoLabel.textContent = fmt(nodeCount) + ' nodes, ' + fmt(edgeCount) + ' edges \u2014 who connects to whom, through what';
    }

    // Squirrel stats
    var sqStats = document.getElementById('squirrel-stats');
    if (sqStats) {
      sqStats.textContent = fmt(nodeCount) + ' nodes. ' + fmt(edgeCount) + ' edges. ' +
        fmt(typeCount) + ' languages. ' + fmt(articleCount) + ' articles. ' +
        fmt(singletons) + ' singleton connections. The tree is alive.';
    }

    // Store for game
    window.__graphVitals = {
      nodes: nodeCount,
      edges: edgeCount,
      types: typeCount,
      avgDegree: parseFloat(avgDeg),
      pendants: pendants,
      islands: islands,
      articles: articleCount,
      singletons: singletons,
      topPolyglot: topPolyglot,
      topPolyCount: topPolyCount
    };
  }

  // Load on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadGraph);
  } else {
    loadGraph();
  }
})();
