// Investigation Game — The Traveling Salesman's Network
// Games@Home for evidence exploration.
// Each page visit discovers a node. Each hop reveals an edge.
// Community progress is aggregated anonymously. Personal journal in localStorage.
// No cookies. No tracking. No IPs stored.

(function() {
  'use strict';

  var STORAGE_KEY = 'detroit_investigation';
  var GRAPH_URL = '/graph.json';
  var PROGRESS_URL = '/investigation.json';
  var canvas, ctx, nodes, edges, width, height, dpr;
  var simulation = { nodes: [], edges: [] };
  var communityData = null;
  var personalState = loadPersonal();
  var hoveredNode = null;
  var animFrame = null;

  // Colors by type/tier
  var COLORS = {
    actor:       { fill: '#e74c3c', dim: '#3d1a1a' },
    entity:      { fill: '#f1c40f', dim: '#3d3510' },
    institution: { fill: '#58a6ff', dim: '#1a2d42' },
    edge:        { normal: '#21262d', hot: '#58a6ff', traversed: '#30363d' }
  };

  var TIER_SIZE = { 1: 14, 2: 10, 3: 8, 4: 7, 5: 6, 'none': 5 };

  function loadPersonal() {
    try {
      var d = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (d && d.visited) return d;
    } catch(e) {}
    return { visited: [], journal: [], started: new Date().toISOString() };
  }

  function savePersonal() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(personalState)); } catch(e) {}
  }

  function recordVisit(pageUrl) {
    if (!pageUrl) return;
    var clean = pageUrl.replace(/\/$/, '').toLowerCase();
    if (personalState.visited.indexOf(clean) === -1) {
      personalState.visited.push(clean);
      personalState.journal.push({
        page: clean,
        time: new Date().toISOString()
      });
      savePersonal();
    }
  }

  // Record current page visit
  recordVisit(window.location.pathname);

  function isDiscovered(node) {
    if (!node.page) return false;
    var clean = node.page.replace(/\/$/, '').toLowerCase();
    return personalState.visited.indexOf(clean) !== -1;
  }

  function communityHeat(node) {
    if (!communityData || !communityData.node_visits) return 0;
    return communityData.node_visits[node.id] || 0;
  }

  function edgeHeat(edge) {
    if (!communityData || !communityData.hot_paths) return 0;
    for (var i = 0; i < communityData.hot_paths.length; i++) {
      var hp = communityData.hot_paths[i];
      if ((hp.from === edge.source && hp.to === edge.target) ||
          (hp.from === edge.target && hp.to === edge.source)) {
        return hp.visits || 0;
      }
    }
    return 0;
  }

  // Simple force simulation
  function initSimulation(graphData) {
    var nodeMap = {};
    simulation.nodes = graphData.nodes.map(function(n, i) {
      var angle = (i / graphData.nodes.length) * Math.PI * 2;
      var r = Math.min(width, height) * 0.35;
      var sn = {
        id: n.id,
        label: n.label,
        type: n.type,
        tier: n.tier || 'none',
        page: n.page || null,
        x: width/2 + Math.cos(angle) * r * (0.5 + Math.random() * 0.5),
        y: height/2 + Math.sin(angle) * r * (0.5 + Math.random() * 0.5),
        vx: 0, vy: 0,
        _orig: n
      };
      nodeMap[n.id] = sn;
      return sn;
    });

    simulation.edges = [];
    graphData.edges.forEach(function(e) {
      if (nodeMap[e.source] && nodeMap[e.target]) {
        simulation.edges.push({
          source: nodeMap[e.source],
          target: nodeMap[e.target],
          type: e.type,
          weight: e.weight || 1,
          _orig: e
        });
      }
    });

    // Run force layout
    for (var tick = 0; tick < 200; tick++) {
      stepForce(0.3 * Math.max(0.01, 1 - tick/200));
    }
  }

  function stepForce(alpha) {
    var ns = simulation.nodes;
    var es = simulation.edges;
    var k = Math.sqrt(width * height / ns.length) * 0.8;
    var i, j, dx, dy, dist, force, n1, n2;

    // Repulsion
    for (i = 0; i < ns.length; i++) {
      for (j = i + 1; j < ns.length; j++) {
        dx = ns[j].x - ns[i].x;
        dy = ns[j].y - ns[i].y;
        dist = Math.sqrt(dx*dx + dy*dy) || 1;
        force = k * k / dist * alpha;
        ns[i].vx -= dx/dist * force;
        ns[i].vy -= dy/dist * force;
        ns[j].vx += dx/dist * force;
        ns[j].vy += dy/dist * force;
      }
    }

    // Attraction along edges
    for (i = 0; i < es.length; i++) {
      n1 = es[i].source; n2 = es[i].target;
      dx = n2.x - n1.x;
      dy = n2.y - n1.y;
      dist = Math.sqrt(dx*dx + dy*dy) || 1;
      force = dist / k * alpha * 0.3;
      n1.vx += dx/dist * force;
      n1.vy += dy/dist * force;
      n2.vx -= dx/dist * force;
      n2.vy -= dy/dist * force;
    }

    // Center gravity
    for (i = 0; i < ns.length; i++) {
      ns[i].vx += (width/2 - ns[i].x) * alpha * 0.01;
      ns[i].vy += (height/2 - ns[i].y) * alpha * 0.01;
    }

    // Apply + dampen
    var pad = 30;
    for (i = 0; i < ns.length; i++) {
      ns[i].x += ns[i].vx;
      ns[i].y += ns[i].vy;
      ns[i].vx *= 0.6;
      ns[i].vy *= 0.6;
      ns[i].x = Math.max(pad, Math.min(width - pad, ns[i].x));
      ns[i].y = Math.max(pad, Math.min(height - pad, ns[i].y));
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width * dpr, height * dpr);
    ctx.save();
    ctx.scale(dpr, dpr);

    var maxHeat = 1;
    if (communityData && communityData.hot_paths) {
      communityData.hot_paths.forEach(function(hp) {
        if (hp.visits > maxHeat) maxHeat = hp.visits;
      });
    }

    // Draw edges
    simulation.edges.forEach(function(e) {
      var heat = edgeHeat(e._orig);
      var srcDisc = isDiscovered(e.source);
      var tgtDisc = isDiscovered(e.target);

      if (heat > 0) {
        var intensity = Math.min(1, heat / maxHeat);
        ctx.strokeStyle = 'rgba(88,166,255,' + (0.15 + intensity * 0.6) + ')';
        ctx.lineWidth = 0.5 + intensity * 2;
      } else if (srcDisc && tgtDisc) {
        ctx.strokeStyle = 'rgba(88,166,255,0.3)';
        ctx.lineWidth = 1;
      } else {
        ctx.strokeStyle = 'rgba(48,54,61,0.4)';
        ctx.lineWidth = 0.5;
      }

      ctx.beginPath();
      ctx.moveTo(e.source.x, e.source.y);
      ctx.lineTo(e.target.x, e.target.y);
      ctx.stroke();
    });

    // Draw nodes
    simulation.nodes.forEach(function(n) {
      var discovered = isDiscovered(n);
      var heat = communityHeat(n);
      var c = COLORS[n.type] || COLORS.institution;
      var r = TIER_SIZE[n.tier] || 5;

      if (n === hoveredNode) {
        // Hovered — full bright with glow
        ctx.shadowColor = c.fill;
        ctx.shadowBlur = 12;
        ctx.fillStyle = c.fill;
        r *= 1.4;
      } else if (discovered) {
        // Player discovered — bright
        ctx.shadowColor = c.fill;
        ctx.shadowBlur = 6;
        ctx.fillStyle = c.fill;
      } else if (heat > 0) {
        // Community visited but player hasn't — medium
        ctx.shadowBlur = 0;
        var a = Math.min(0.8, 0.3 + heat * 0.05);
        ctx.fillStyle = c.fill.replace(')', ',' + a + ')').replace('rgb', 'rgba');
        if (c.fill.charAt(0) === '#') {
          var rgb = hexToRgb(c.fill);
          ctx.fillStyle = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + a + ')';
        }
      } else {
        // Fog of war — dim
        ctx.shadowBlur = 0;
        ctx.fillStyle = c.dim;
      }

      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Label for discovered or hovered nodes
      if (discovered || n === hoveredNode) {
        ctx.font = (n === hoveredNode ? 'bold ' : '') + '10px system-ui, sans-serif';
        ctx.fillStyle = '#e8e8e8';
        ctx.textAlign = 'center';
        ctx.fillText(n.label, n.x, n.y - r - 4);
      }
    });

    ctx.restore();
  }

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 200, g: 200, b: 200 };
  }

  function getNodeAt(mx, my) {
    for (var i = simulation.nodes.length - 1; i >= 0; i--) {
      var n = simulation.nodes[i];
      var r = (TIER_SIZE[n.tier] || 5) + 4;
      var dx = mx - n.x, dy = my - n.y;
      if (dx*dx + dy*dy < r*r) return n;
    }
    return null;
  }

  function updateUI() {
    var personalCount = 0;
    var totalNodes = simulation.nodes.length;
    simulation.nodes.forEach(function(n) {
      if (isDiscovered(n)) personalCount++;
    });

    var el = document.getElementById('game-personal');
    if (el) el.textContent = personalCount + ' / ' + totalNodes;

    // Community progress
    if (communityData) {
      var cp = communityData.nodes_discovered || 0;
      var ct = communityData.nodes_total || totalNodes;
      var pct = Math.round(cp / ct * 100);
      var gel = document.getElementById('game-explored');
      if (gel) gel.textContent = cp + ' / ' + ct + ' (' + pct + '%)';
      var bar = document.getElementById('game-progress-fill');
      if (bar) bar.style.width = pct + '%';

      // Update hero stat
      var se = document.getElementById('stat-explored');
      var sp = document.getElementById('stat-explored-pct');
      if (se && sp) { se.style.display = ''; sp.textContent = pct + '%'; }

      // 404 targets
      var te = document.getElementById('game-targets');
      if (te && communityData.targets_404) {
        te.textContent = communityData.targets_404.length + ' clues';
      }
    }

    // Journal
    var journal = document.getElementById('game-journal');
    var entries = document.getElementById('journal-entries');
    if (journal && entries && personalState.journal.length > 0) {
      journal.style.display = '';
      entries.innerHTML = '';
      personalState.journal.slice(-10).reverse().forEach(function(j) {
        var d = document.createElement('div');
        d.style.padding = '0.2em 0';
        d.style.borderBottom = '1px solid var(--border, #21262d)';
        var t = new Date(j.time);
        var ts = t.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
        d.textContent = ts + ' — ' + j.page;
        entries.appendChild(d);
      });
    }
  }

  function loadGraph() {
    fetch(GRAPH_URL).then(function(r) { return r.json(); }).then(function(data) {
      nodes = data.nodes;
      edges = data.edges;
      initSimulation(data);
      draw();
      updateUI();
    }).catch(function(e) {
      console.warn('investigation-game: could not load graph.json', e);
    });
  }

  function loadProgress() {
    fetch(PROGRESS_URL, { cache: 'no-store' }).then(function(r) { return r.json(); }).then(function(data) {
      communityData = data;
      updateUI();
      draw();
    }).catch(function() {
      // No investigation.json yet — that's fine, run without community data
    });
  }

  function init() {
    var container = document.getElementById('investigation-canvas');
    canvas = document.getElementById('game-canvas');
    if (!container || !canvas) return;

    dpr = window.devicePixelRatio || 1;
    var rect = container.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx = canvas.getContext('2d');

    // Mouse interaction
    canvas.addEventListener('mousemove', function(e) {
      var rect = canvas.getBoundingClientRect();
      var mx = e.clientX - rect.left;
      var my = e.clientY - rect.top;
      var node = getNodeAt(mx, my);
      if (node !== hoveredNode) {
        hoveredNode = node;
        canvas.style.cursor = node && node.page ? 'pointer' : 'default';
        draw();
      }
    });

    canvas.addEventListener('click', function(e) {
      var rect = canvas.getBoundingClientRect();
      var mx = e.clientX - rect.left;
      var my = e.clientY - rect.top;
      var node = getNodeAt(mx, my);
      if (node && node.page) {
        window.location.href = node.page;
      }
    });

    canvas.addEventListener('mouseleave', function() {
      if (hoveredNode) { hoveredNode = null; draw(); }
    });

    // Resize handler
    window.addEventListener('resize', function() {
      var rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      if (simulation.nodes.length) {
        // Re-center
        var scaleX = width / (canvas._lastW || width);
        var scaleY = height / (canvas._lastH || height);
        simulation.nodes.forEach(function(n) { n.x *= scaleX; n.y *= scaleY; });
        draw();
      }
      canvas._lastW = width;
      canvas._lastH = height;
    });
    canvas._lastW = width;
    canvas._lastH = height;

    loadGraph();
    loadProgress();
    setInterval(loadProgress, 30000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
