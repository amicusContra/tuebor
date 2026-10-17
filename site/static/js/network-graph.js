// Network graph visualization for detroit.primals.eco
// Renders actor/entity relationships as an interactive force-directed graph.
// Body awareness: 0=raw(graph.json), 1=sorted(classification.json),
//   2=observed(gaia core + moon orbit + π ratio).
//
// Data source: window.DETROIT_NETWORK (loaded from network-data.js)
// Fallback: petalTongue API /api/public-record/network

(function() {
  'use strict';

  // ── Resolve data from shared data layer ─────────────────────────────
  var DN = window.DETROIT_NETWORK || {};
  var COLORS = DN.nodeColors || {};
  var LINK_COLORS = DN.edgeColors || {};
  var NEXUS_COLORS = DN.nexusColors || {};
  var FLOW_COLORS = DN.flowColors || {};
  var FLOW_ICONS = DN.flowIcons || {};
  var OWNERSHIP_GROUPS = DN.ownershipGroups || [];
  var ADDRESS_CLUSTERS = DN.addressClusters || [];
  var OVERSIGHT_CYCLES = DN.oversightCycles || [];
  var COMMUNITIES = DN.communities || [];
  var SORT_COLORS = DN.sortColors || {
    'non-self': '#e74c3c', 'self': '#27ae60', 'null': '#7f8c8d',
    'partial': '#f39c12', 'other': '#3498db', 'unknown': 'rgba(128,128,128,0.3)'
  };

  // ── Body awareness state ──────────────────────────────────────────
  var classificationData = null; // loaded from classification.json
  var bodyLevel = 0; // 0=raw, 1=sorted, 2=observed

  // ── Sort overlay state ────────────────────────────────────────────
  var showSort = false;

  // ── Nexus filter state ─────────────────────────────────────────────
  var activeNexus = { education: true, political: true, enforcement: true, weaponization: true, legislative: true };
  var showOwnership = false;
  var showAddress = false;
  var showCycles = false;
  var activeFlows = null;
  var activeDynasty = null;

  // ── Collapse state ─────────────────────────────────────────────────
  var collapseStrategy = null; // null | 'community' | 'ownership' | 'address' | 'dynasty'
  var expandedGroups = {};     // group id → true for expanded groups

  var DYNASTY_COLORS = {
    kilpatrick: '#a855f7',
    stallworth: '#f59e0b',
    sabree: '#60a5fa',
    banks_flenory: '#ef4444',
    mayoral: '#94a3b8',
  };
  var DYNASTY_LABELS = {
    kilpatrick: 'Kilpatrick',
    stallworth: 'Stallworth',
    sabree: 'Sabree',
    banks_flenory: 'Banks/BMF',
    mayoral: 'Mayors',
  };

  function renderGraph(container, data) {
    var width = container.clientWidth || 800;
    var height = Math.max(700, width * 0.75);

    // ── Build nexus filter controls ──────────────────────────────────
    var controls = container.querySelector('.graph-controls');
    if (!controls) {
      controls = document.createElement('div');
      controls.className = 'graph-controls';
      controls.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;align-items:center;';
      var label = document.createElement('span');
      label.textContent = 'Nexus overlay:';
      label.style.cssText = 'font-size:12px;font-weight:600;opacity:0.7;margin-right:4px;';
      controls.appendChild(label);
      var nexusLabels = { education: 'Education', political: 'Political', enforcement: 'Enforcement', weaponization: 'Weaponization', legislative: 'Legislative' };
      ['education', 'political', 'enforcement', 'weaponization', 'legislative'].forEach(function(nx) {
        var btn = document.createElement('button');
        btn.textContent = nexusLabels[nx];
        btn.dataset.nexus = nx;
        btn.style.cssText = 'padding:4px 12px;border:2px solid ' + NEXUS_COLORS[nx] +
          ';border-radius:14px;font-size:11px;font-weight:600;cursor:pointer;transition:all 0.2s;' +
          'background:' + NEXUS_COLORS[nx] + ';color:#fff;';
        btn.addEventListener('click', function() {
          activeNexus[nx] = !activeNexus[nx];
          btn.style.background = activeNexus[nx] ? NEXUS_COLORS[nx] : 'transparent';
          btn.style.color = activeNexus[nx] ? '#fff' : NEXUS_COLORS[nx];
          renderGraph(container, data);
        });
        controls.appendChild(btn);
      });
      var allBtn = document.createElement('button');
      allBtn.textContent = 'All';
      allBtn.style.cssText = 'padding:4px 10px;border:1px solid #888;border-radius:14px;font-size:10px;cursor:pointer;background:transparent;color:inherit;';
      allBtn.addEventListener('click', function() {
        Object.keys(activeNexus).forEach(function(k) { activeNexus[k] = true; });
        controls.querySelectorAll('button[data-nexus]').forEach(function(b) {
          b.style.background = NEXUS_COLORS[b.dataset.nexus];
          b.style.color = '#fff';
        });
        renderGraph(container, data);
      });
      controls.appendChild(allBtn);

      // Layer separator
      var sep = document.createElement('span');
      sep.textContent = '│';
      sep.style.cssText = 'opacity:0.3;margin:0 4px;';
      controls.appendChild(sep);

      // Ownership hull toggle
      var ownBtn = document.createElement('button');
      ownBtn.textContent = '⬡ Ownership';
      ownBtn.dataset.layer = 'ownership';
      ownBtn.style.cssText = 'padding:4px 12px;border:2px solid #e74c3c;border-radius:14px;font-size:11px;font-weight:600;cursor:pointer;transition:all 0.2s;background:transparent;color:#e74c3c;';
      ownBtn.addEventListener('click', function() {
        showOwnership = !showOwnership;
        ownBtn.style.background = showOwnership ? '#e74c3c' : 'transparent';
        ownBtn.style.color = showOwnership ? '#fff' : '#e74c3c';
        renderGraph(container, data);
      });
      controls.appendChild(ownBtn);

      // Address overlap toggle
      var addrBtn = document.createElement('button');
      addrBtn.textContent = '📍 Address';
      addrBtn.dataset.layer = 'address';
      addrBtn.style.cssText = 'padding:4px 12px;border:2px solid #d35400;border-radius:14px;font-size:11px;font-weight:600;cursor:pointer;transition:all 0.2s;background:transparent;color:#d35400;';
      addrBtn.addEventListener('click', function() {
        showAddress = !showAddress;
        addrBtn.style.background = showAddress ? '#d35400' : 'transparent';
        addrBtn.style.color = showAddress ? '#fff' : '#d35400';
        renderGraph(container, data);
      });
      controls.appendChild(addrBtn);

      // Cycle detection toggle
      var cycBtn = document.createElement('button');
      cycBtn.textContent = '⟳ Cycles';
      cycBtn.dataset.layer = 'cycles';
      cycBtn.style.cssText = 'padding:4px 12px;border:2px solid #e67e22;border-radius:14px;font-size:11px;font-weight:600;cursor:pointer;transition:all 0.2s;background:transparent;color:#e67e22;';
      cycBtn.addEventListener('click', function() {
        showCycles = !showCycles;
        cycBtn.style.background = showCycles ? '#e67e22' : 'transparent';
        cycBtn.style.color = showCycles ? '#fff' : '#e67e22';
        renderGraph(container, data);
      });
      controls.appendChild(cycBtn);

      // Dynasty separator
      var sepD = document.createElement('span');
      sepD.textContent = '│';
      sepD.style.cssText = 'opacity:0.3;margin:0 4px;';
      controls.appendChild(sepD);

      var dynLabel = document.createElement('span');
      dynLabel.textContent = 'Dynasty:';
      dynLabel.style.cssText = 'font-size:12px;font-weight:600;opacity:0.7;';
      controls.appendChild(dynLabel);

      Object.keys(DYNASTY_COLORS).forEach(function(dy) {
        var btn = document.createElement('button');
        btn.textContent = DYNASTY_LABELS[dy];
        btn.dataset.dynasty = dy;
        btn.style.cssText = 'padding:4px 10px;border:2px solid ' + DYNASTY_COLORS[dy] +
          ';border-radius:14px;font-size:10px;font-weight:600;cursor:pointer;transition:all 0.2s;' +
          'background:transparent;color:' + DYNASTY_COLORS[dy] + ';';
        btn.addEventListener('click', function() {
          activeDynasty = activeDynasty === dy ? null : dy;
          controls.querySelectorAll('button[data-dynasty]').forEach(function(b) {
            var d2 = b.dataset.dynasty;
            b.style.background = activeDynasty === d2 ? DYNASTY_COLORS[d2] : 'transparent';
            b.style.color = activeDynasty === d2 ? '#fff' : DYNASTY_COLORS[d2];
          });
          renderGraph(container, data);
        });
        controls.appendChild(btn);
      });

      // Flow type separator
      var sep2 = document.createElement('span');
      sep2.textContent = '│';
      sep2.style.cssText = 'opacity:0.3;margin:0 4px;';
      controls.appendChild(sep2);

      // Flow type label
      var flowLabel = document.createElement('span');
      flowLabel.textContent = 'Flows:';
      flowLabel.style.cssText = 'font-size:12px;font-weight:600;opacity:0.7;';
      controls.appendChild(flowLabel);

      // Flow type filter buttons
      ['money', 'power', 'influence', 'position'].forEach(function(ft) {
        var btn = document.createElement('button');
        btn.textContent = FLOW_ICONS[ft] + ' ' + ft.charAt(0).toUpperCase() + ft.slice(1);
        btn.dataset.flow = ft;
        btn.style.cssText = 'padding:4px 10px;border:2px solid ' + FLOW_COLORS[ft] +
          ';border-radius:14px;font-size:10px;font-weight:600;cursor:pointer;transition:all 0.2s;' +
          'background:transparent;color:' + FLOW_COLORS[ft] + ';';
        btn.addEventListener('click', function() {
          if (!activeFlows) {
            activeFlows = { money: false, power: false, influence: false, position: false };
          }
          activeFlows[ft] = !activeFlows[ft];
          var anyFlowActive = Object.values(activeFlows).some(function(v) { return v; });
          if (!anyFlowActive) activeFlows = null;
          btn.style.background = (activeFlows && activeFlows[ft]) ? FLOW_COLORS[ft] : 'transparent';
          btn.style.color = (activeFlows && activeFlows[ft]) ? '#fff' : FLOW_COLORS[ft];
          renderGraph(container, data);
        });
        controls.appendChild(btn);
      });

      // Collapse separator
      var sep3 = document.createElement('span');
      sep3.textContent = '│';
      sep3.style.cssText = 'opacity:0.3;margin:0 4px;';
      controls.appendChild(sep3);

      // Collapse dropdown
      var collapseWrap = document.createElement('span');
      collapseWrap.style.cssText = 'position:relative;display:inline-block;';
      var collapseBtn = document.createElement('button');
      collapseBtn.textContent = '◈ Collapse';
      collapseBtn.style.cssText = 'padding:4px 12px;border:2px solid #1abc9c;border-radius:14px;font-size:11px;font-weight:600;cursor:pointer;transition:all 0.2s;background:transparent;color:#1abc9c;';
      collapseWrap.appendChild(collapseBtn);

      var collapseMenu = document.createElement('div');
      collapseMenu.style.cssText = 'display:none;position:absolute;top:100%;left:0;background:rgba(0,0,0,0.92);border:1px solid #1abc9c;border-radius:8px;padding:4px 0;z-index:20;min-width:140px;margin-top:4px;';
      var strategies = [
        { id: null, label: 'Off (all nodes)' },
        { id: 'community', label: '◈ Community' },
        { id: 'ownership', label: '⬡ Ownership' },
        { id: 'address', label: '📍 Address' },
        { id: 'dynasty', label: '👑 Dynasty' }
      ];
      strategies.forEach(function(s) {
        var item = document.createElement('div');
        item.textContent = s.label;
        item.style.cssText = 'padding:6px 14px;cursor:pointer;font-size:11px;color:#fff;transition:background 0.15s;white-space:nowrap;';
        item.addEventListener('mouseenter', function() { item.style.background = 'rgba(26,188,156,0.3)'; });
        item.addEventListener('mouseleave', function() { item.style.background = 'transparent'; });
        item.addEventListener('click', function(e) {
          e.stopPropagation();
          collapseStrategy = s.id;
          expandedGroups = {};
          collapseMenu.style.display = 'none';
          collapseBtn.style.background = s.id ? '#1abc9c' : 'transparent';
          collapseBtn.style.color = s.id ? '#fff' : '#1abc9c';
          collapseBtn.textContent = s.id ? '◈ ' + s.label.replace(/^[^\s]+\s/, '') : '◈ Collapse';
          renderGraph(container, data);
        });
        collapseMenu.appendChild(item);
      });
      collapseWrap.appendChild(collapseMenu);

      collapseBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        collapseMenu.style.display = collapseMenu.style.display === 'none' ? 'block' : 'none';
      });
      document.addEventListener('click', function() { collapseMenu.style.display = 'none'; });

      controls.appendChild(collapseWrap);

      // Sort overlay toggle — shows self/non-self/null/unknown classification
      var sepSort = document.createElement('span');
      sepSort.style.cssText = 'opacity:0.3;margin:0 4px;';
      sepSort.textContent = '│';
      controls.appendChild(sepSort);

      var sortBtn = document.createElement('button');
      sortBtn.textContent = '⊘ Epitope Sort';
      sortBtn.style.cssText = 'padding:4px 12px;border:2px solid #e67e22;border-radius:14px;font-size:11px;font-weight:600;cursor:pointer;transition:all 0.2s;background:transparent;color:#e67e22;';
      sortBtn.addEventListener('click', function() {
        showSort = !showSort;
        sortBtn.style.background = showSort ? '#e67e22' : 'transparent';
        sortBtn.style.color = showSort ? '#fff' : '#e67e22';
        renderGraph(container, data);
      });
      controls.appendChild(sortBtn);

      container.insertBefore(controls, container.firstChild);
    }

    // ── Filter nodes by active nexus ──────────────────────────────────
    var anyActive = Object.values(activeNexus).some(function(v) { return v; });
    var filteredNodes = data.nodes.filter(function(n) {
      if (!anyActive) return true;
      if (!n.nexus || n.nexus.length === 0) return true;
      return n.nexus.some(function(nx) { return activeNexus[nx]; });
    });
    var visibleIds = {};
    filteredNodes.forEach(function(n) { visibleIds[n.id] = true; });
    var filteredLinks = data.links.filter(function(l) {
      return visibleIds[l.source] && visibleIds[l.target];
    });

    // ── Collapse aggregation ─────────────────────────────────────────
    if (collapseStrategy) {
      var groups = [];
      if (collapseStrategy === 'community') {
        groups = COMMUNITIES.map(function(c) {
          return { id: 'comm_' + c.id, label: c.label, members: c.members, color: c.color };
        });
      } else if (collapseStrategy === 'ownership') {
        groups = OWNERSHIP_GROUPS.map(function(g) {
          return { id: 'own_' + g.id, label: g.label, members: g.members, color: g.stroke.replace(/rgba?\([^)]+\)/, '#e74c3c') };
        });
      } else if (collapseStrategy === 'address') {
        groups = ADDRESS_CLUSTERS.map(function(a) {
          return { id: 'addr_' + a.id, label: a.label, members: a.members, color: a.stroke.replace(/rgba?\([^)]+\)/, '#d35400') };
        });
      } else if (collapseStrategy === 'dynasty') {
        var dynGroups = {};
        filteredNodes.forEach(function(n) {
          var dy = n.dynasty || '_ungrouped';
          if (!dynGroups[dy]) dynGroups[dy] = [];
          dynGroups[dy].push(n.id);
        });
        Object.keys(dynGroups).forEach(function(dy) {
          if (dy === '_ungrouped' || dynGroups[dy].length < 2) return;
          groups.push({
            id: 'dyn_' + dy,
            label: (DYNASTY_LABELS[dy] || dy) + ' dynasty',
            members: dynGroups[dy],
            color: DYNASTY_COLORS[dy] || '#7f8c8d'
          });
        });
      }

      // Build: which nodes are assigned to a collapsed group?
      var nodeToGroup = {};
      var groupedNodeIds = {};
      groups.forEach(function(g) {
        if (expandedGroups[g.id]) return;
        g.members.forEach(function(mid) {
          if (visibleIds[mid]) {
            nodeToGroup[mid] = g.id;
            groupedNodeIds[mid] = true;
          }
        });
      });

      // Build super-nodes for collapsed groups
      var superNodes = [];
      var superNodeMap = {};
      groups.forEach(function(g) {
        if (expandedGroups[g.id]) return;
        var memberNodes = g.members.filter(function(m) { return visibleIds[m]; });
        if (memberNodes.length === 0) return;
        var edgeCount = 0;
        filteredLinks.forEach(function(l) {
          if (nodeToGroup[l.source] === g.id || nodeToGroup[l.target] === g.id) edgeCount++;
        });
        superNodes.push({
          id: g.id,
          label: g.label,
          tier: 3,
          type: 'super',
          detail: memberNodes.length + ' nodes, ' + edgeCount + ' connections',
          url: null,
          nexus: [],
          dynasty: null,
          era: null,
          community: -1,
          _isSuper: true,
          _members: memberNodes,
          _color: g.color,
          _memberCount: memberNodes.length
        });
        superNodeMap[g.id] = true;
      });

      // Replace grouped nodes with super-nodes; keep ungrouped nodes
      var ungroupedNodes = filteredNodes.filter(function(n) { return !groupedNodeIds[n.id]; });
      filteredNodes = ungroupedNodes.concat(superNodes);

      // Rebuild visibleIds
      visibleIds = {};
      filteredNodes.forEach(function(n) { visibleIds[n.id] = true; });

      // Remap edges: grouped node → its super-node
      filteredLinks = filteredLinks.map(function(l) {
        var src = nodeToGroup[l.source] || l.source;
        var tgt = nodeToGroup[l.target] || l.target;
        return { source: src, target: tgt, type: l.type, flow: l.flow, label: l.label, amount: l.amount };
      }).filter(function(l) {
        return l.source !== l.target && visibleIds[l.source] && visibleIds[l.target];
      });

      // Deduplicate edges between same pair of super-nodes
      var edgeKey = {};
      var deduped = [];
      filteredLinks.forEach(function(l) {
        var k = l.source < l.target ? l.source + '|' + l.target : l.target + '|' + l.source;
        if (!edgeKey[k]) {
          edgeKey[k] = { source: l.source, target: l.target, type: l.type, flow: l.flow, label: '', amount: null, _count: 1 };
          deduped.push(edgeKey[k]);
        } else {
          edgeKey[k]._count++;
          if (l.amount && (!edgeKey[k].amount || l.amount > edgeKey[k].amount)) {
            edgeKey[k].amount = l.amount;
          }
        }
      });
      deduped.forEach(function(l) {
        if (l._count > 1) l.label = l._count + ' connections';
      });
      filteredLinks = deduped;
    }

    // ── SVG setup ─────────────────────────────────────────────────────
    var existingSvg = container.querySelector('svg');
    if (existingSvg) existingSvg.remove();

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', height);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'Institutional capture network — ' + filteredNodes.length + ' nodes, ' + filteredLinks.length + ' edges');
    svg.style.cssText = 'background:rgba(0,0,0,0.02);border-radius:8px;';
    container.appendChild(svg);

    // ── Force-directed layout (no D3 dependency) ──────────────────────
    var nodes = filteredNodes.map(function(n, i) {
      var angle = (2 * Math.PI * i) / filteredNodes.length;
      var radius = Math.min(width, height) * 0.35;
      return Object.assign({}, n, {
        x: width / 2 + radius * Math.cos(angle) * (0.5 + n.tier * 0.12),
        y: height / 2 + radius * Math.sin(angle) * (0.5 + n.tier * 0.12),
        vx: 0, vy: 0
      });
    });

    var nodeMap = {};
    nodes.forEach(function(n) { nodeMap[n.id] = n; });

    var hasSuper = nodes.some(function(n) { return n._isSuper; });
    var repulsion = hasSuper ? 28000 : 18000;
    var idealDist = hasSuper ? 240 : 180;

    // ── Gaia core: find gravitational center (highest edge count) ──
    var gaiaCore = null;
    var maxDeg = 0;
    var degMap = {};
    filteredLinks.forEach(function(l) {
      degMap[l.source] = (degMap[l.source] || 0) + 1;
      degMap[l.target] = (degMap[l.target] || 0) + 1;
    });
    nodes.forEach(function(n) {
      var d = degMap[n.id] || 0;
      if (d > maxDeg) { maxDeg = d; gaiaCore = n; }
    });

    // ── Sort orbit radii: classified nodes orbit at sort-class distances ──
    var SORT_RADIUS = { 'non-self': 0.20, 'partial': 0.35, 'null': 0.50, 'self': 0.65, 'other': 0.80, 'unknown': 0.90 };

    for (var iter = 0; iter < 100; iter++) {
      for (var i = 0; i < nodes.length; i++) {
        for (var j = i + 1; j < nodes.length; j++) {
          var dx = nodes[j].x - nodes[i].x;
          var dy = nodes[j].y - nodes[i].y;
          var dist = Math.sqrt(dx * dx + dy * dy) || 1;
          var force = repulsion / (dist * dist);
          var fx = (dx / dist) * force;
          var fy = (dy / dist) * force;
          nodes[i].vx -= fx; nodes[i].vy -= fy;
          nodes[j].vx += fx; nodes[j].vy += fy;
        }
      }
      filteredLinks.forEach(function(link) {
        var s = nodeMap[link.source];
        var t = nodeMap[link.target];
        if (!s || !t) return;
        var dx = t.x - s.x;
        var dy = t.y - s.y;
        var dist = Math.sqrt(dx * dx + dy * dy) || 1;
        var force = (dist - idealDist) * 0.015;
        var fx = (dx / dist) * force;
        var fy = (dy / dist) * force;
        s.vx += fx; s.vy += fy;
        t.vx -= fx; t.vy -= fy;
      });
      // Gaia gravity: pull toward center, with sort-class orbit if body >= 1
      var gcx = gaiaCore ? gaiaCore.x : width / 2;
      var gcy = gaiaCore ? gaiaCore.y : height / 2;
      var baseR = Math.min(width, height) * 0.35;
      nodes.forEach(function(n) {
        if (showSort && bodyLevel >= 1 && n !== gaiaCore) {
          var sortClass = n.classification || 'unknown';
          var orbitR = baseR * (SORT_RADIUS[sortClass] || 0.90);
          var dx = n.x - gcx, dy = n.y - gcy;
          var dist = Math.sqrt(dx * dx + dy * dy) || 1;
          n.vx += (gcx + (dx / dist) * orbitR - n.x) * 0.003;
          n.vy += (gcy + (dy / dist) * orbitR - n.y) * 0.003;
        }
        n.vx += (width / 2 - n.x) * 0.004;
        n.vy += (height / 2 - n.y) * 0.004;
        n.x += n.vx * 0.3;
        n.y += n.vy * 0.3;
        n.vx *= 0.78; n.vy *= 0.78;
        n.x = Math.max(90, Math.min(width - 90, n.x));
        n.y = Math.max(50, Math.min(height - 50, n.y));
      });
    }

    // ── Build adjacency for hover highlighting ────────────────────────
    var adjacency = {};
    nodes.forEach(function(n) { adjacency[n.id] = new Set(); });
    filteredLinks.forEach(function(l) {
      if (adjacency[l.source]) adjacency[l.source].add(l.target);
      if (adjacency[l.target]) adjacency[l.target].add(l.source);
    });

    // ── Convex hull helper ────────────────────────────────────────────
    function convexHull(points) {
      if (points.length < 3) return points;
      points.sort(function(a, b) { return a[0] - b[0] || a[1] - b[1]; });
      var lower = [];
      for (var i = 0; i < points.length; i++) {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], points[i]) <= 0)
          lower.pop();
        lower.push(points[i]);
      }
      var upper = [];
      for (var i = points.length - 1; i >= 0; i--) {
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], points[i]) <= 0)
          upper.pop();
        upper.push(points[i]);
      }
      upper.pop(); lower.pop();
      return lower.concat(upper);
    }
    function cross(O, A, B) {
      return (A[0] - O[0]) * (B[1] - O[1]) - (A[1] - O[1]) * (B[0] - O[0]);
    }

    // ── Draw ownership hulls (behind everything) ──────────────────────
    if (showOwnership) {
      OWNERSHIP_GROUPS.forEach(function(group) {
        var pts = [];
        group.members.forEach(function(mid) {
          if (nodeMap[mid]) {
            var n = nodeMap[mid];
            var pad = 35;
            pts.push([n.x - pad, n.y - pad]);
            pts.push([n.x + pad, n.y - pad]);
            pts.push([n.x - pad, n.y + pad]);
            pts.push([n.x + pad, n.y + pad]);
          }
        });
        if (pts.length < 6) return;
        var hull = convexHull(pts);
        var pathD = 'M ' + hull.map(function(p) { return p[0] + ',' + p[1]; }).join(' L ') + ' Z';
        var hullPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        hullPath.setAttribute('d', pathD);
        hullPath.setAttribute('fill', group.color);
        hullPath.setAttribute('stroke', group.stroke);
        hullPath.setAttribute('stroke-width', '2');
        hullPath.setAttribute('stroke-dasharray', '6,4');

        var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = group.label + '\n' + group.note;
        hullPath.appendChild(title);
        svg.appendChild(hullPath);

        // Hull label
        var cx = 0, cy = 0;
        hull.forEach(function(p) { cx += p[0]; cy += p[1]; });
        cx /= hull.length; cy /= hull.length;
        var hullLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        hullLabel.setAttribute('x', cx);
        hullLabel.setAttribute('y', cy - (Math.max.apply(null, hull.map(function(p) { return p[1]; })) - cy) - 8);
        hullLabel.setAttribute('text-anchor', 'middle');
        hullLabel.setAttribute('fill', group.stroke);
        hullLabel.setAttribute('font-size', '10');
        hullLabel.setAttribute('font-weight', '600');
        hullLabel.setAttribute('font-style', 'italic');
        hullLabel.textContent = group.label;
        svg.appendChild(hullLabel);
      });
    }

    // ── Draw address overlap hulls ──────────────────────────────────
    if (showAddress) {
      ADDRESS_CLUSTERS.forEach(function(cluster) {
        var pts = [];
        cluster.members.forEach(function(mid) {
          if (nodeMap[mid]) {
            var n = nodeMap[mid];
            var pad = 30;
            pts.push([n.x - pad, n.y - pad]);
            pts.push([n.x + pad, n.y - pad]);
            pts.push([n.x - pad, n.y + pad]);
            pts.push([n.x + pad, n.y + pad]);
          }
        });
        if (pts.length < 6) return;
        var hull = convexHull(pts);
        var pathD = 'M ' + hull.map(function(p) { return p[0] + ',' + p[1]; }).join(' L ') + ' Z';
        var hullPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        hullPath.setAttribute('d', pathD);
        hullPath.setAttribute('fill', cluster.color);
        hullPath.setAttribute('stroke', cluster.stroke);
        hullPath.setAttribute('stroke-width', '2');
        hullPath.setAttribute('stroke-dasharray', '3,3');

        var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = cluster.address + '\n' + cluster.note;
        hullPath.appendChild(title);
        svg.appendChild(hullPath);

        var cx = 0, cy = 0;
        hull.forEach(function(p) { cx += p[0]; cy += p[1]; });
        cx /= hull.length; cy /= hull.length;
        var topY = Math.min.apply(null, hull.map(function(p) { return p[1]; }));

        var addrBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        var addrLen = cluster.label.length * 4.5;
        addrBg.setAttribute('x', cx - addrLen / 2 - 4);
        addrBg.setAttribute('y', topY - 18);
        addrBg.setAttribute('width', addrLen + 8);
        addrBg.setAttribute('height', 14);
        addrBg.setAttribute('rx', '3');
        addrBg.setAttribute('fill', 'rgba(0,0,0,0.7)');
        svg.appendChild(addrBg);

        var addrLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        addrLabel.setAttribute('x', cx);
        addrLabel.setAttribute('y', topY - 8);
        addrLabel.setAttribute('text-anchor', 'middle');
        addrLabel.setAttribute('fill', cluster.stroke);
        addrLabel.setAttribute('font-size', '9');
        addrLabel.setAttribute('font-weight', '600');
        addrLabel.textContent = '📍 ' + cluster.label;
        svg.appendChild(addrLabel);
      });
    }

    // ── Draw cyclic oversight paths (behind nodes, above hulls) ───────
    if (showCycles) {
      OVERSIGHT_CYCLES.forEach(function(cycle) {
        var pts = [];
        var allVisible = true;
        cycle.path.forEach(function(nid) {
          if (!nodeMap[nid]) { allVisible = false; return; }
          pts.push(nodeMap[nid]);
        });
        if (!allVisible || pts.length < 3) return;

        // Draw animated cycle path
        var pathParts = [];
        for (var i = 0; i < pts.length; i++) {
          var from = pts[i];
          var to = pts[(i + 1) % pts.length];
          if (i === 0) pathParts.push('M ' + from.x + ',' + from.y);
          pathParts.push('L ' + to.x + ',' + to.y);
        }
        var cyclePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        cyclePath.setAttribute('d', pathParts.join(' '));
        cyclePath.setAttribute('fill', 'none');
        cyclePath.setAttribute('stroke', '#e67e22');
        cyclePath.setAttribute('stroke-width', '3');
        cyclePath.setAttribute('stroke-opacity', '0.7');
        cyclePath.setAttribute('stroke-dasharray', '8,4');
        cyclePath.setAttribute('marker-mid', 'url(#cycle-arrow)');

        // Animate the dash
        var animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animate.setAttribute('attributeName', 'stroke-dashoffset');
        animate.setAttribute('from', '24');
        animate.setAttribute('to', '0');
        animate.setAttribute('dur', '1.5s');
        animate.setAttribute('repeatCount', 'indefinite');
        cyclePath.appendChild(animate);

        var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = cycle.label + '\n' + cycle.note;
        cyclePath.appendChild(title);
        svg.appendChild(cyclePath);

        // Cycle label at centroid
        var cx = 0, cy = 0;
        pts.forEach(function(p) { cx += p.x; cy += p.y; });
        cx /= pts.length; cy /= pts.length;
        var bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        var labelText = cycle.label;
        bg.setAttribute('x', cx - labelText.length * 3);
        bg.setAttribute('y', cy - 8);
        bg.setAttribute('width', labelText.length * 6);
        bg.setAttribute('height', 14);
        bg.setAttribute('rx', 3);
        bg.setAttribute('fill', 'rgba(230,126,34,0.15)');
        bg.setAttribute('stroke', 'rgba(230,126,34,0.4)');
        bg.setAttribute('stroke-width', '1');
        svg.appendChild(bg);

        var cycleLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        cycleLabel.setAttribute('x', cx);
        cycleLabel.setAttribute('y', cy + 3);
        cycleLabel.setAttribute('text-anchor', 'middle');
        cycleLabel.setAttribute('fill', '#e67e22');
        cycleLabel.setAttribute('font-size', '9');
        cycleLabel.setAttribute('font-weight', '600');
        cycleLabel.textContent = cycle.label;
        svg.appendChild(cycleLabel);
      });

      // Add arrow marker definition for cycles
      var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      var marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
      marker.setAttribute('id', 'cycle-arrow');
      marker.setAttribute('viewBox', '0 0 10 10');
      marker.setAttribute('refX', '5'); marker.setAttribute('refY', '5');
      marker.setAttribute('markerWidth', '6'); marker.setAttribute('markerHeight', '6');
      marker.setAttribute('orient', 'auto');
      var arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      arrowPath.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
      arrowPath.setAttribute('fill', '#e67e22');
      marker.appendChild(arrowPath);
      defs.appendChild(marker);
      svg.insertBefore(defs, svg.firstChild);
    }

    // ── Arrow marker definitions for flow directions ────────────────
    var defs = svg.querySelector('defs') || document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    if (!defs.parentNode) svg.insertBefore(defs, svg.firstChild);

    // Create arrow markers for each flow color
    Object.keys(FLOW_COLORS).forEach(function(ft) {
      var marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
      marker.setAttribute('id', 'arrow-' + ft);
      marker.setAttribute('viewBox', '0 0 10 10');
      marker.setAttribute('refX', '28'); marker.setAttribute('refY', '5');
      marker.setAttribute('markerWidth', '5'); marker.setAttribute('markerHeight', '5');
      marker.setAttribute('orient', 'auto');
      var arrowP = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      arrowP.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
      arrowP.setAttribute('fill', FLOW_COLORS[ft]);
      arrowP.setAttribute('opacity', '0.8');
      marker.appendChild(arrowP);
      defs.appendChild(marker);
    });
    // Default arrow
    var defMarker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
    defMarker.setAttribute('id', 'arrow-default');
    defMarker.setAttribute('viewBox', '0 0 10 10');
    defMarker.setAttribute('refX', '28'); defMarker.setAttribute('refY', '5');
    defMarker.setAttribute('markerWidth', '4'); defMarker.setAttribute('markerHeight', '4');
    defMarker.setAttribute('orient', 'auto');
    var defArrowP = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    defArrowP.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
    defArrowP.setAttribute('fill', '#95a5a6');
    defArrowP.setAttribute('opacity', '0.5');
    defMarker.appendChild(defArrowP);
    defs.appendChild(defMarker);

    // ── Draw links ────────────────────────────────────────────────────
    var linkElements = [];
    filteredLinks.forEach(function(link) {
      var s = nodeMap[link.source];
      var t = nodeMap[link.target];
      if (!s || !t) return;

      var flowActive = activeFlows && link.flow;
      var isFlowMatch = !activeFlows || (activeFlows && activeFlows[link.flow]);
      var useFlowColor = activeFlows && link.flow;

      var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', s.x); line.setAttribute('y1', s.y);
      line.setAttribute('x2', t.x); line.setAttribute('y2', t.y);

      if (useFlowColor && isFlowMatch) {
        line.setAttribute('stroke', FLOW_COLORS[link.flow]);
        line.setAttribute('stroke-width', '3');
        line.setAttribute('stroke-opacity', '0.8');
        line.setAttribute('marker-end', 'url(#arrow-' + link.flow + ')');
      } else if (activeFlows && !isFlowMatch) {
        line.setAttribute('stroke', '#555');
        line.setAttribute('stroke-width', '1');
        line.setAttribute('stroke-opacity', '0.1');
      } else {
      line.setAttribute('stroke', LINK_COLORS[link.type] || '#95a5a6');
      line.setAttribute('stroke-width', link.type === 'money' ? '3' : '1.5');
        line.setAttribute('stroke-opacity', '0.5');
        if (activeFlows) line.setAttribute('marker-end', 'url(#arrow-default)');
      }

      // For aggregated edges (collapsed), make them thicker
      if (link._count && link._count > 1) {
        var currentWidth = parseFloat(line.getAttribute('stroke-width')) || 1.5;
        line.setAttribute('stroke-width', Math.min(6, currentWidth + Math.log2(link._count)));
      }

      line.dataset.source = link.source;
      line.dataset.target = link.target;
      line.dataset.flow = link.flow || '';
      line.dataset.count = link._count || 1;
      svg.appendChild(line);
      linkElements.push(line);

      // Edge count badge for aggregated edges
      if (link._count && link._count > 2) {
        var mx = (s.x + t.x) / 2;
        var my = (s.y + t.y) / 2;
        var eBg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        eBg.setAttribute('cx', mx); eBg.setAttribute('cy', my);
        eBg.setAttribute('r', 8);
        eBg.setAttribute('fill', 'rgba(0,0,0,0.7)');
        svg.appendChild(eBg);
        var eLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        eLabel.setAttribute('x', mx); eLabel.setAttribute('y', my + 3);
        eLabel.setAttribute('text-anchor', 'middle');
        eLabel.setAttribute('fill', '#fff');
        eLabel.setAttribute('font-size', '8');
        eLabel.setAttribute('font-weight', '700');
        eLabel.setAttribute('pointer-events', 'none');
        eLabel.textContent = link._count;
        svg.appendChild(eLabel);
      }
    });

    // ── Compute degree for each node ────────────────────────────────
    var nodeDegree = {};
    nodes.forEach(function(n) { nodeDegree[n.id] = 0; });
    filteredLinks.forEach(function(l) {
      if (nodeDegree[l.source] !== undefined) nodeDegree[l.source]++;
      if (nodeDegree[l.target] !== undefined) nodeDegree[l.target]++;
    });

    // ── Draw nodes ────────────────────────────────────────────────────
    var nodeElements = {};
    nodes.forEach(function(n) {
      var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('transform', 'translate(' + n.x + ',' + n.y + ')');
      g.style.transition = 'opacity 0.2s';

      var deg = nodeDegree[n.id] || 0;
      var isSuper = n._isSuper;

      if (isSuper) {
        // Super-node: larger, hexagonal feel, click to expand
        var memberCount = n._memberCount || 1;
        var r = Math.max(24, Math.min(50, 18 + Math.sqrt(memberCount) * 8));
        var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('r', r);
        circle.setAttribute('fill', n._color || '#1abc9c');
        circle.setAttribute('stroke', '#fff');
        circle.setAttribute('stroke-width', '3');
        circle.setAttribute('stroke-dasharray', '6,3');
        circle.style.transition = 'r 0.2s';
        circle.style.cursor = 'pointer';
        g.appendChild(circle);

        // Member count badge
        var badge = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        badge.setAttribute('text-anchor', 'middle');
        badge.setAttribute('dy', '5');
        badge.setAttribute('fill', '#fff');
        badge.setAttribute('font-size', r > 30 ? '14' : '11');
        badge.setAttribute('font-weight', '700');
        badge.setAttribute('pointer-events', 'none');
        badge.textContent = memberCount;
        g.appendChild(badge);

        // Label
        var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('dy', -(r + 8));
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', 'currentColor');
        text.setAttribute('font-size', '11');
        text.setAttribute('font-weight', '700');
        text.textContent = n.label;
        g.appendChild(text);

        var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = n.label + ' (' + memberCount + ' nodes)\nClick to expand';
        g.appendChild(title);

        g.style.cursor = 'pointer';
        g.addEventListener('click', function(e) {
          e.stopPropagation();
          expandedGroups[n.id] = true;
          renderGraph(container, data);
        });

        g.addEventListener('mouseenter', function() {
          highlightNode(n.id);
          showSuperInfo(n);
        });
        g.addEventListener('mouseleave', function() {
          clearHighlight();
          hideInfo();
        });

        nodeElements[n.id] = { group: g, circle: circle, radius: r };
      } else {
        // Regular node
      if (n.url) {
        g.style.cursor = 'pointer';
          g.addEventListener('click', function(e) {
            e.stopPropagation();
            window.location.href = n.url;
          });
        }

        var r = Math.max(10, Math.min(32, 10 + Math.sqrt(deg) * 4));

        // Sort overlay: classification ring + opacity
        if (showSort && n.classification && n.classification !== 'unknown') {
          var sortRing = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          sortRing.setAttribute('r', r + 4);
          sortRing.setAttribute('fill', 'none');
          sortRing.setAttribute('stroke', SORT_COLORS[n.classification] || '#7f8c8d');
          sortRing.setAttribute('stroke-width', '3');
          sortRing.setAttribute('stroke-dasharray', n.classification === 'partial' ? '4,2' : 'none');
          sortRing.style.opacity = String(n.confidence || 0.5);
          g.appendChild(sortRing);
        }

        // Apply sort opacity: unknown nodes fade, classified nodes assert
        if (showSort) {
          g.style.opacity = String(n.opacity || 0.25);
        }

      var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('r', r);
      circle.setAttribute('fill', COLORS[n.type] || '#95a5a6');
      circle.setAttribute('stroke', '#fff');
        circle.setAttribute('stroke-width', r > 20 ? '2.5' : '1.5');
        circle.style.transition = 'r 0.2s, stroke-width 0.2s';
      g.appendChild(circle);

        if (deg >= 3) {
          var badge = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          badge.setAttribute('text-anchor', 'middle');
          badge.setAttribute('dy', '4');
          badge.setAttribute('fill', '#fff');
          badge.setAttribute('font-size', r > 20 ? '11' : '9');
          badge.setAttribute('font-weight', '700');
          badge.setAttribute('pointer-events', 'none');
          badge.textContent = deg;
          g.appendChild(badge);
        }

        var labelAbove = deg >= 5;
      var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('dy', labelAbove ? -(r + 6) : (r + 14));
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('fill', 'currentColor');
        text.setAttribute('font-size', deg >= 8 ? '12' : (deg >= 3 ? '10' : '9'));
        text.setAttribute('font-weight', deg >= 8 ? '700' : '500');
      text.textContent = n.label;
      g.appendChild(text);

        // If this node belongs to an expanded group, add a collapse hint
        if (collapseStrategy) {
          var nodeGroupId = null;
          Object.keys(expandedGroups).forEach(function(gid) {
            if (expandedGroups[gid] && n._expandedFrom === gid) nodeGroupId = gid;
          });
        }

      var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        var titleParts = [n.label + ' (' + deg + ' connections)', n.detail];
        if (n.classification && n.classification !== 'unknown') {
          titleParts.push('Sort: ' + n.classification.toUpperCase() + ' (' + Math.round((n.confidence || 0) * 100) + '%)');
          if (n.sort_note) titleParts.push(n.sort_note);
        } else if (showSort) {
          titleParts.push('Sort: UNKNOWN — not yet classified');
        }
        title.textContent = titleParts.join('\n');
      g.appendChild(title);

        g.addEventListener('mouseenter', function() {
          highlightNode(n.id);
          showInfo(n);
        });
        g.addEventListener('mouseleave', function() {
          clearHighlight();
          hideInfo();
        });

        nodeElements[n.id] = { group: g, circle: circle, radius: r };
      }

      svg.appendChild(g);
    });

    // ── Dynasty highlighting ────────────────────────────────────────
    if (activeDynasty) {
      Object.keys(nodeElements).forEach(function(nid) {
        var n = nodeMap[nid];
        var el = nodeElements[nid];
        if (!n) return;
        if (n.dynasty === activeDynasty) {
          el.group.style.opacity = '1';
          el.circle.setAttribute('stroke', DYNASTY_COLORS[activeDynasty]);
          el.circle.setAttribute('stroke-width', '3');
        } else {
          el.group.style.opacity = '0.2';
        }
      });
      linkElements.forEach(function(line) {
        var sNode = nodeMap[line.dataset.source];
        var tNode = nodeMap[line.dataset.target];
        var sMatch = sNode && sNode.dynasty === activeDynasty;
        var tMatch = tNode && tNode.dynasty === activeDynasty;
        if (sMatch || tMatch) {
          line.setAttribute('stroke-opacity', '0.7');
          line.setAttribute('stroke', DYNASTY_COLORS[activeDynasty]);
          line.setAttribute('stroke-width', '2.5');
        } else {
          line.setAttribute('stroke-opacity', '0.06');
        }
      });
    }

    // ── Hover highlighting ────────────────────────────────────────────
    function highlightNode(id) {
      var neighbors = adjacency[id] || new Set();
      Object.keys(nodeElements).forEach(function(nid) {
        var el = nodeElements[nid];
        if (nid === id) {
          el.group.style.opacity = '1';
          el.circle.setAttribute('stroke-width', '4');
          el.circle.setAttribute('r', el.radius + 4);
        } else if (neighbors.has(nid)) {
          el.group.style.opacity = '1';
          el.circle.setAttribute('stroke-width', '3');
        } else {
          el.group.style.opacity = '0.15';
        }
      });
      linkElements.forEach(function(line) {
        if (line.dataset.source === id || line.dataset.target === id) {
          line.setAttribute('stroke-opacity', '0.9');
          line.setAttribute('stroke-width', line.getAttribute('stroke-width') === '3' ? '4' : '3');
        } else {
          line.setAttribute('stroke-opacity', '0.08');
        }
      });
    }

    function clearHighlight() {
      Object.keys(nodeElements).forEach(function(nid) {
        var el = nodeElements[nid];
        el.group.style.opacity = '1';
        el.circle.setAttribute('stroke-width', el.radius > 20 ? '2.5' : '1.5');
        el.circle.setAttribute('r', el.radius);
      });
      linkElements.forEach(function(line) {
        line.setAttribute('stroke-opacity', '0.5');
        var isMoney = line.getAttribute('stroke') === LINK_COLORS.money;
        line.setAttribute('stroke-width', isMoney ? '3' : '1.5');
      });
    }

    // ── Info panel on hover ───────────────────────────────────────────
    var infoPanel = container.querySelector('.graph-info');
    if (!infoPanel) {
      infoPanel = document.createElement('div');
      infoPanel.className = 'graph-info';
      infoPanel.style.cssText = 'position:absolute;top:12px;right:12px;background:rgba(0,0,0,0.85);' +
        'color:#fff;padding:12px 16px;border-radius:8px;font-size:12px;max-width:280px;' +
        'pointer-events:none;opacity:0;transition:opacity 0.2s;z-index:10;line-height:1.5;';
      container.style.position = 'relative';
      container.appendChild(infoPanel);
    }

    function showInfo(n) {
      var connCount = (adjacency[n.id] || new Set()).size;
      var nexusStr = (n.nexus && n.nexus.length) ? n.nexus.map(function(x) {
        return '<span style="color:' + NEXUS_COLORS[x] + '">' + x + '</span>';
      }).join(' · ') : 'none';

      // Find ownership groups containing this node
      var ownershipInfo = '';
      OWNERSHIP_GROUPS.forEach(function(g) {
        if (g.members.indexOf(n.id) !== -1) {
          ownershipInfo += '<br><span style="color:#e74c3c;font-size:10px;">⬡ ' + g.note + '</span>';
        }
      });

      // Find address clusters containing this node
      var addressInfo = '';
      ADDRESS_CLUSTERS.forEach(function(a) {
        if (a.members.indexOf(n.id) !== -1) {
          addressInfo += '<br><span style="color:#d35400;font-size:10px;">📍 ' + a.address + ' (' + a.members.length + ' entities)</span>';
        }
      });

      // Find cycles containing this node
      var cycleInfo = '';
      OVERSIGHT_CYCLES.forEach(function(c) {
        if (c.path.indexOf(n.id) !== -1) {
          cycleInfo += '<br><span style="color:#e67e22;font-size:10px;">⟳ ' + c.label + '</span>';
        }
      });

      // Flow summary — what flows IN and OUT of this node
      var flowIn = { money: 0, power: 0, influence: 0, position: 0 };
      var flowOut = { money: 0, power: 0, influence: 0, position: 0 };
      filteredLinks.forEach(function(l) {
        if (l.flow) {
          if (l.target === n.id && flowIn[l.flow] !== undefined) flowIn[l.flow]++;
          if (l.source === n.id && flowOut[l.flow] !== undefined) flowOut[l.flow]++;
        }
      });
      var flowParts = [];
      Object.keys(FLOW_COLORS).forEach(function(ft) {
        if (flowIn[ft] || flowOut[ft]) {
          var parts = [];
          if (flowIn[ft]) parts.push(flowIn[ft] + ' in');
          if (flowOut[ft]) parts.push(flowOut[ft] + ' out');
          flowParts.push('<span style="color:' + FLOW_COLORS[ft] + '">' +
            FLOW_ICONS[ft] + ' ' + ft + ': ' + parts.join(', ') + '</span>');
        }
      });
      var flowInfo = flowParts.length ?
        '<br><span style="font-size:10px;">' + flowParts.join(' · ') + '</span>' : '';

      // Sort classification info
      var sortInfo = '';
      if (n.classification && n.classification !== 'unknown') {
        var sortColor = SORT_COLORS[n.classification] || '#7f8c8d';
        sortInfo = '<br><span style="color:' + sortColor + ';font-size:10px;font-weight:600;">⊘ ' +
          n.classification.toUpperCase() + ' — ' + Math.round((n.confidence || 0) * 100) + '% confidence' +
          (n.capture_score ? ' · ' + n.capture_score + ' epitopes' : '') + '</span>';
      } else if (showSort) {
        sortInfo = '<br><span style="opacity:0.4;font-size:10px;">⊘ Not yet sorted — hidden unknown</span>';
      }

      infoPanel.innerHTML = '<strong style="font-size:14px;">' + n.label + '</strong><br>' +
        '<span style="opacity:0.7">' + n.detail + '</span><br>' +
        '<span style="opacity:0.5;font-size:10px;">' + connCount + ' connections · Nexus: ' + nexusStr + '</span>' +
        flowInfo + sortInfo + ownershipInfo + addressInfo + cycleInfo +
        (n.url ? '<br><span style="opacity:0.4;font-size:10px;">Click to view page →</span>' : '');
      infoPanel.style.opacity = '1';
    }

    function showSuperInfo(n) {
      if (!n._isSuper) return showInfo(n);
      var members = n._members || [];
      var memberLabels = members.slice(0, 8).map(function(mid) {
        var found = data.nodes.find(function(nd) { return nd.id === mid; });
        return found ? found.label : mid;
      });
      if (members.length > 8) memberLabels.push('... +' + (members.length - 8) + ' more');

      infoPanel.innerHTML = '<strong style="font-size:14px;color:' + (n._color || '#1abc9c') + ';">' + n.label + '</strong><br>' +
        '<span style="opacity:0.7">' + members.length + ' nodes collapsed</span><br>' +
        '<span style="font-size:10px;opacity:0.6;">' + memberLabels.join(', ') + '</span><br>' +
        '<span style="opacity:0.4;font-size:10px;">Click to expand ↗</span>';
      infoPanel.style.opacity = '1';
    }

    function hideInfo() {
      infoPanel.style.opacity = '0';
    }

    // ── Legend ─────────────────────────────────────────────────────────
    var legendY = 20;
    var legend = [
      { color: COLORS.actor, label: 'Enterprise principals' },
      { color: COLORS.judge, label: 'Judicial cover' },
      { color: COLORS.political, label: 'Political enablers' },
      { color: COLORS.school, label: 'Schools' },
      { color: COLORS.entity, label: 'Shell entities' },
      { color: COLORS.bmf, label: 'BMF connection' },
      { color: COLORS.institutional, label: 'Institutional (FOIA)' },
    ];
    legend.forEach(function(item) {
      var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('cx', 20); c.setAttribute('cy', legendY);
      c.setAttribute('r', 6); c.setAttribute('fill', item.color);
      svg.appendChild(c);
      var t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      t.setAttribute('x', 32); t.setAttribute('y', legendY + 4);
      t.setAttribute('fill', 'currentColor'); t.setAttribute('font-size', '10');
      t.setAttribute('font-weight', '500');
      t.textContent = item.label;
      svg.appendChild(t);
      legendY += 20;
    });

    // Flow legend when active
    if (activeFlows) {
      legendY += 8;
      Object.keys(FLOW_COLORS).forEach(function(ft) {
        if (activeFlows[ft]) {
          var fl = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          fl.setAttribute('x1', 14); fl.setAttribute('y1', legendY);
          fl.setAttribute('x2', 26); fl.setAttribute('y2', legendY);
          fl.setAttribute('stroke', FLOW_COLORS[ft]);
          fl.setAttribute('stroke-width', '3');
          fl.setAttribute('marker-end', 'url(#arrow-' + ft + ')');
          svg.appendChild(fl);
          var ftText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          ftText.setAttribute('x', 32); ftText.setAttribute('y', legendY + 4);
          ftText.setAttribute('fill', FLOW_COLORS[ft]); ftText.setAttribute('font-size', '10');
          ftText.setAttribute('font-weight', '600');
          ftText.textContent = FLOW_ICONS[ft] + ' ' + ft.charAt(0).toUpperCase() + ft.slice(1);
          svg.appendChild(ftText);
          legendY += 20;
        }
      });
    }

    // Layer legend additions
    if (showOwnership || showAddress || showCycles) {
      legendY += 8;
      if (showAddress) {
        var ac = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        ac.setAttribute('x', 14); ac.setAttribute('y', legendY - 5);
        ac.setAttribute('width', 12); ac.setAttribute('height', 10);
        ac.setAttribute('rx', 2);
        ac.setAttribute('fill', 'rgba(211,84,0,0.15)');
        ac.setAttribute('stroke', 'rgba(211,84,0,0.6)');
        ac.setAttribute('stroke-width', '1.5');
        ac.setAttribute('stroke-dasharray', '3,3');
        svg.appendChild(ac);
        var at = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        at.setAttribute('x', 32); at.setAttribute('y', legendY + 4);
        at.setAttribute('fill', 'currentColor'); at.setAttribute('font-size', '10');
        at.setAttribute('font-weight', '500');
        at.textContent = 'Shared address (' + ADDRESS_CLUSTERS.length + ' clusters)';
        svg.appendChild(at);
        legendY += 20;
      }
      if (showOwnership) {
        var oc = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        oc.setAttribute('x', 14); oc.setAttribute('y', legendY - 5);
        oc.setAttribute('width', 12); oc.setAttribute('height', 10);
        oc.setAttribute('rx', 2);
        oc.setAttribute('fill', 'rgba(192,57,43,0.15)');
        oc.setAttribute('stroke', 'rgba(192,57,43,0.5)');
        oc.setAttribute('stroke-width', '1.5');
        oc.setAttribute('stroke-dasharray', '3,2');
        svg.appendChild(oc);
        var ot = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        ot.setAttribute('x', 32); ot.setAttribute('y', legendY + 4);
        ot.setAttribute('fill', 'currentColor'); ot.setAttribute('font-size', '10');
        ot.setAttribute('font-weight', '500');
        ot.textContent = 'Ownership hull';
        svg.appendChild(ot);
        legendY += 20;
      }
      if (showCycles) {
        var cl = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        cl.setAttribute('x1', 14); cl.setAttribute('y1', legendY);
        cl.setAttribute('x2', 26); cl.setAttribute('y2', legendY);
        cl.setAttribute('stroke', '#e67e22');
        cl.setAttribute('stroke-width', '2');
        cl.setAttribute('stroke-dasharray', '4,2');
        svg.appendChild(cl);
        var ct = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        ct.setAttribute('x', 32); ct.setAttribute('y', legendY + 4);
        ct.setAttribute('fill', 'currentColor'); ct.setAttribute('font-size', '10');
        ct.setAttribute('font-weight', '500');
        ct.textContent = 'Cyclic "oversight"';
        svg.appendChild(ct);
        legendY += 20;
      }
    }

    // Sort legend when active
    if (showSort) {
      legendY += 8;
      var sortLegend = [
        { cls: 'non-self', label: 'Non-self (capture)' },
        { cls: 'self',     label: 'Self (functioning)' },
        { cls: 'null',     label: 'Null (routing)' },
        { cls: 'partial',  label: 'Partial capture' },
        { cls: 'other',    label: 'Other (insufficient data)' },
        { cls: 'unknown',  label: 'Unknown — not yet sorted' },
      ];
      var sortHeader = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      sortHeader.setAttribute('x', 20); sortHeader.setAttribute('y', legendY + 4);
      sortHeader.setAttribute('fill', '#e67e22'); sortHeader.setAttribute('font-size', '10');
      sortHeader.setAttribute('font-weight', '700');
      sortHeader.textContent = 'Epitope Sort:';
      svg.appendChild(sortHeader);
      legendY += 18;
      var sortedCount = filteredNodes.filter(function(n) { return n.classification && n.classification !== 'unknown'; }).length;
      var unknownCount = filteredNodes.length - sortedCount;
      sortLegend.forEach(function(item) {
        var sc = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        sc.setAttribute('cx', 20); sc.setAttribute('cy', legendY);
        sc.setAttribute('r', 5); sc.setAttribute('fill', 'none');
        sc.setAttribute('stroke', SORT_COLORS[item.cls]); sc.setAttribute('stroke-width', '2');
        if (item.cls === 'partial') sc.setAttribute('stroke-dasharray', '3,1');
        if (item.cls === 'unknown') sc.style.opacity = '0.25';
        svg.appendChild(sc);
        var st = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        st.setAttribute('x', 32); st.setAttribute('y', legendY + 4);
        st.setAttribute('fill', 'currentColor'); st.setAttribute('font-size', '10');
        st.setAttribute('font-weight', '500');
        st.style.opacity = item.cls === 'unknown' ? '0.5' : '1';
        st.textContent = item.label;
        svg.appendChild(st);
      legendY += 18;
    });
      var summaryText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      summaryText.setAttribute('x', 20); summaryText.setAttribute('y', legendY + 4);
      summaryText.setAttribute('fill', 'currentColor'); summaryText.setAttribute('font-size', '9');
      summaryText.style.opacity = '0.5';
      summaryText.textContent = sortedCount + ' sorted / ' + unknownCount + ' proximate';
      svg.appendChild(summaryText);
      legendY += 20;
    }

    // ── Moon orbit rings (body level ≥ 1) ──────────────────────────
    if (showSort && gaiaCore) {
      var gcx = gaiaCore.x, gcy = gaiaCore.y;
      var baseR = Math.min(width, height) * 0.35;
      var sortClasses = ['non-self', 'partial', 'null', 'self', 'other'];
      sortClasses.forEach(function(cls) {
        var orbitR = baseR * (SORT_RADIUS[cls] || 0.90);
        var ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        ring.setAttribute('cx', gcx); ring.setAttribute('cy', gcy);
        ring.setAttribute('r', orbitR);
        ring.setAttribute('fill', 'none');
        ring.setAttribute('stroke', SORT_COLORS[cls] || '#7f8c8d');
        ring.setAttribute('stroke-width', '0.5');
        ring.setAttribute('stroke-opacity', '0.15');
        ring.setAttribute('stroke-dasharray', '4,4');
        svg.insertBefore(ring, svg.firstChild);
      });

      // Gaia core marker
      var coreMarker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      coreMarker.setAttribute('cx', gcx); coreMarker.setAttribute('cy', gcy);
      coreMarker.setAttribute('r', 3);
      coreMarker.setAttribute('fill', '#e74c3c');
      coreMarker.setAttribute('opacity', '0.4');
      svg.appendChild(coreMarker);
    }

    // ── π observation panel (body level 2) ──────────────────────────
    if (showSort) {
      var piSorted = filteredNodes.filter(function(n) { return n.classification && n.classification !== 'unknown'; }).length;
      var piTotal = filteredNodes.length;
      var piRatio = piTotal > 0 ? piSorted / piTotal : 0;
      var piTarget = 1 / Math.PI;

      var piY = height - 80;
      var piG = document.createElementNS('http://www.w3.org/2000/svg', 'g');

      // Body awareness label
      var bodyLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      bodyLabel.setAttribute('x', width - 10); bodyLabel.setAttribute('y', piY);
      bodyLabel.setAttribute('text-anchor', 'end');
      bodyLabel.setAttribute('fill', 'currentColor'); bodyLabel.setAttribute('font-size', '9');
      bodyLabel.setAttribute('opacity', '0.5');
      var bl = bodyLevel === 0 ? '0-body: raw' : bodyLevel === 1 ? '1-body: sorted' : '2-body: observed';
      bodyLabel.textContent = bl;
      piG.appendChild(bodyLabel);

      // π ratio
      var piText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      piText.setAttribute('x', width - 10); piText.setAttribute('y', piY + 14);
      piText.setAttribute('text-anchor', 'end');
      piText.setAttribute('fill', piRatio > piTarget ? '#27ae60' : '#f39c12');
      piText.setAttribute('font-size', '10'); piText.setAttribute('font-weight', '600');
      piText.textContent = piSorted + '/' + piTotal + ' sorted · π=' + piRatio.toFixed(3) +
        (piRatio > piTarget ? ' ✓' : ' → 1/π=' + piTarget.toFixed(3));
      piG.appendChild(piText);

      // Classification balance
      var counts = { 'non-self': 0, 'null': 0, 'self': 0, 'partial': 0, 'other': 0 };
      filteredNodes.forEach(function(n) {
        var c = n.classification || 'unknown';
        if (counts[c] !== undefined) counts[c]++;
      });
      var balText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      balText.setAttribute('x', width - 10); balText.setAttribute('y', piY + 28);
      balText.setAttribute('text-anchor', 'end');
      balText.setAttribute('fill', 'currentColor'); balText.setAttribute('font-size', '9');
      balText.setAttribute('opacity', '0.4');
      balText.textContent = 'non-self:' + counts['non-self'] + ' null:' + counts['null'] +
        ' self:' + counts['self'] + ' partial:' + counts['partial'] + ' other:' + counts['other'];
      piG.appendChild(balText);

      // Gaia core label
      if (gaiaCore) {
        var gaiaText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        gaiaText.setAttribute('x', width - 10); gaiaText.setAttribute('y', piY + 42);
        gaiaText.setAttribute('text-anchor', 'end');
        gaiaText.setAttribute('fill', '#e74c3c'); gaiaText.setAttribute('font-size', '9');
        gaiaText.setAttribute('opacity', '0.5');
        gaiaText.textContent = 'gaia core: ' + (gaiaCore.label || gaiaCore.id) + ' (' + maxDeg + ' edges)';
        piG.appendChild(gaiaText);
      }

      svg.appendChild(piG);
    }

    // Node count summary
    var countText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    countText.setAttribute('x', width - 10); countText.setAttribute('y', height - 10);
    countText.setAttribute('text-anchor', 'end');
    countText.setAttribute('fill', 'currentColor'); countText.setAttribute('font-size', '10');
    countText.setAttribute('opacity', '0.4');
    var layerInfo = [];
    if (showOwnership) layerInfo.push(OWNERSHIP_GROUPS.length + ' ownership groups');
    if (showAddress) layerInfo.push(ADDRESS_CLUSTERS.length + ' address clusters');
    if (showCycles) layerInfo.push(OVERSIGHT_CYCLES.length + ' cycles');
    if (activeFlows) {
      var flowCounts = {};
      filteredLinks.forEach(function(l) {
        if (l.flow && activeFlows[l.flow]) flowCounts[l.flow] = (flowCounts[l.flow] || 0) + 1;
      });
      var fc = Object.keys(flowCounts).map(function(f) { return flowCounts[f] + ' ' + f; });
      if (fc.length) layerInfo.push(fc.join(', '));
    }
    if (collapseStrategy) {
      var superCount = filteredNodes.filter(function(n) { return n._isSuper; }).length;
      var totalOriginal = data.nodes.length;
      layerInfo.push('collapsed: ' + superCount + ' groups from ' + totalOriginal + ' nodes');
    }
    if (showSort) {
      var sc = filteredNodes.filter(function(n) { return n.classification && n.classification !== 'unknown'; }).length;
      layerInfo.push(sc + ' sorted / ' + (filteredNodes.length - sc) + ' proximate');
    }
    countText.textContent = filteredNodes.length + ' nodes · ' + filteredLinks.length + ' edges' +
      (layerInfo.length ? ' · ' + layerInfo.join(' · ') : '');
    svg.appendChild(countText);
  }

  // ── Apply classification.json (durable source of truth) ──────────────
  function applyClassification(data) {
    if (!classificationData || !classificationData.entities) return data;
    data.nodes.forEach(function(n) {
      var entry = classificationData.entities[n.id];
      if (entry) {
        n.classification = entry.classification;
        n.confidence = entry.confidence;
        n.opacity = Math.max(0.25, entry.confidence || 0);
        n.sort_pass = entry.sort_pass;
        n.sort_method = entry.method;
        if (entry.note) n.sort_note = entry.note;
      }
    });
    bodyLevel = 1; // sorted
    var sorted = data.nodes.filter(function(n) { return n.classification && n.classification !== 'unknown'; }).length;
    if (sorted > data.nodes.length * 0.3) bodyLevel = 2; // observed at π
    return data;
  }

  // ── Initialize ────────────────────────────────────────────────────────

  function init() {
    var container = document.getElementById('network-graph');
    if (!container) return;

    // Fetch classification.json first (survives northGate merges)
    fetch('/classification.json')
      .then(function(r) { return r.ok ? r.json() : null; })
      .then(function(cls) { classificationData = cls; })
      .catch(function() { classificationData = null; })
      .finally(function() {
        // Data priority: shared data layer → API → error
        if (DN.nodes && DN.edges) {
          var gd = DN.graphData();
          renderGraph(container, applyClassification(gd));
          return;
        }
    fetch('/api/public-record/network')
      .then(function(r) { return r.ok ? r.json() : Promise.reject('no API'); })
          .then(function(data) { renderGraph(container, applyClassification(data)); })
          .catch(function() {
            container.innerHTML = '<p style="color:#e74c3c;">Network data not loaded. Ensure network-data.js is included before network-graph.js.</p>';
          });
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
