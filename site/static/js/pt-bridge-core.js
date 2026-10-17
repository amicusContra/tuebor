// petalTongue Bridge Core — shared WebSocket, JSON-RPC, and rendering
// infrastructure used by all *-pt.js site bridges.
//
// Usage:
//   var pt = PetalBridge(config);
//   pt.connect();
//   pt.renderBinding(binding, targetId);
//
// Config:
//   wsUrl     — WebSocket endpoint (default: 'wss://hud.primals.eco/ws')
//   domain    — rendering domain hint (default: 'signal')
//   statusEl  — DOM id for status indicator (default: 'pt-status')
//   metricsEl — DOM id for metrics display (default: null, disabled)
//   maxHeight — SVG max-height in px (default: 280)
//   reconnectMs — reconnect delay (default: 5000)
//   rpcTimeoutMs — RPC timeout (default: 8000)

'use strict';

// eslint-disable-next-line no-unused-vars
function PetalBridge(config) {
  config = config || {};
  var WS_URL = config.wsUrl || 'wss://hud.primals.eco/ws';
  var DOMAIN = config.domain || 'signal';
  var STATUS_EL = config.statusEl || 'pt-status';
  var METRICS_EL = config.metricsEl || null;
  var MAX_HEIGHT = (config.maxHeight || 280) + 'px';
  var RECONNECT_MS = config.reconnectMs || 5000;
  var RPC_TIMEOUT = config.rpcTimeoutMs || 8000;

  var ws = null;
  var rpcId = 0;
  var pending = {};
  var connected = false;
  var onConnect = config.onConnect || null;

  function connect() {
    ws = new WebSocket(WS_URL);
    ws.onopen = function() {
      connected = true;
      updateStatus('connected');
      if (onConnect) onConnect();
    };
    ws.onclose = function() {
      connected = false;
      updateStatus('offline');
      setTimeout(connect, RECONNECT_MS);
    };
    ws.onmessage = function(ev) {
      try {
        var msg = JSON.parse(ev.data);
        if (msg.id && pending[msg.id]) {
          pending[msg.id](msg.result || msg.error);
          delete pending[msg.id];
        }
      } catch (e) { /* ignore parse errors */ }
    };
  }

  function rpc(method, params) {
    return new Promise(function(resolve) {
      if (!ws || ws.readyState !== 1) { resolve(null); return; }
      var id = ++rpcId;
      pending[id] = resolve;
      ws.send(JSON.stringify({jsonrpc: '2.0', method: method, params: params || {}, id: id}));
      setTimeout(function() {
        if (pending[id]) { pending[id](null); delete pending[id]; }
      }, RPC_TIMEOUT);
    });
  }

  function updateStatus(state) {
    var el = document.getElementById(STATUS_EL);
    if (!el) return;
    var colors = {connected: '#2ecc71', rendering: '#58a6ff', offline: '#6e7681'};
    el.style.color = colors[state] || '#6e7681';
    el.textContent = state === 'connected' ? '● petalTongue' :
                     state === 'rendering' ? '◉ rendering…' : '○ offline';
  }

  function requestMetrics() {
    if (!METRICS_EL) return;
    rpc('pt.metrics').then(function(m) {
      if (!m) return;
      var el = document.getElementById(METRICS_EL);
      if (!el) return;
      el.style.fontSize = '0.75em';
      el.style.color = '#6e7681';
      el.textContent = 'CPU ' + (m.cpu_usage_percent || 0).toFixed(0) + '% · '
                     + (m.memory_used_mb || 0).toFixed(0) + ' MB · '
                     + (m.core_count || '?') + ' cores';
    });
  }

  function renderBinding(binding, targetId, domain) {
    updateStatus('rendering');
    return rpc('pt.render_binding', {
      binding: binding,
      domain: domain || DOMAIN
    }).then(function(r) {
      updateStatus('connected');
      if (!r || !r.svg) return;
      var el = document.getElementById(targetId);
      if (!el) return;
      el.innerHTML = r.svg;
      var svg = el.querySelector('svg');
      if (svg) {
        svg.style.width = '100%';
        svg.style.height = 'auto';
        svg.style.maxHeight = MAX_HEIGHT;
      }
    });
  }

  function requestSelectivity(targetId) {
    return rpc('pt.relay_selectivity').then(function(r) {
      if (!r) return null;
      var el = document.getElementById(targetId);
      if (el) {
        renderBinding({
          channel_type: 'gauge', id: 'relay-selectivity',
          label: 'Membrane Selectivity (Anderson)',
          value: r.selectivity_observed,
          min: 0, max: 1, unit: 'S',
          thresholds: [
            {value: 0.3, color: '#e74c3c'},
            {value: 0.7, color: '#f39c12'},
            {value: 1.0, color: '#2ecc71'}
          ]
        }, targetId);
      }
      return r;
    });
  }

  return {
    connect: connect,
    rpc: rpc,
    renderBinding: renderBinding,
    requestMetrics: requestMetrics,
    requestSelectivity: requestSelectivity,
    updateStatus: updateStatus,
    isConnected: function() { return connected; }
  };
}

// ═══════════════════════════════════════════════════════════════
// Organism Classification — single source of truth
// ═══════════════════════════════════════════════════════════════

// eslint-disable-next-line no-unused-vars
function classifyOrganism(cluster) {
  var ae = cluster.sample_ae || '';
  var isMeta = ae.indexOf('gzip, deflate, zstd') === 0
            && !cluster.has_lang
            && cluster.ua_pool_size >= 4;
  var isAnth = cluster.ips === 1
            && ae.indexOf('gzip, br, zstd') === 0;
  var isSelf = cluster.has_lang
            && cluster.ips === 1
            && ae.indexOf('br, zstd') > 0;

  if (isMeta) return {label: 'Meta', color: '#e74c3c'};
  if (isAnth) return {label: 'Anthropic', color: '#ff6b35'};
  if (isSelf) return {label: 'Self', color: '#2ecc71'};
  return {label: cluster.hash ? cluster.hash.substring(0, 6) : 'Unknown', color: '#f1c40f'};
}

// ═══════════════════════════════════════════════════════════════
// Panel Builder Helpers — reduce per-site boilerplate
// ═══════════════════════════════════════════════════════════════

// eslint-disable-next-line no-unused-vars
function buildOrganismProfile(bridge, clusters) {
  if (!clusters || clusters.length === 0) return;
  var orgLabels = clusters.map(function(c) { return classifyOrganism(c).label; });
  var orgGroups = clusters.map(function(c, i) {
    return {
      key: orgLabels[i],
      categories: ['IPs', 'UA Pool', 'Blame%'],
      values: [c.ips, c.ua_pool_size, Math.round((c.blame_ratio || 0) * 100)]
    };
  });
  bridge.renderBinding({
    channel_type: 'faceted_bar', id: 'organism-profile',
    label: 'Epitope Organisms — Per-Organism Behavioral Profile',
    group_by: 'organism', groups: orgGroups, unit: 'value', columns: 3,
    normalization: 'min_max'
  }, 'pt-organism-profile');
}

// eslint-disable-next-line no-unused-vars
function buildEntityGauges(bridge, entities) {
  if (!entities || entities.length < 2) return;
  var gauges = [];
  entities.forEach(function(e) {
    if (e.total_requests > 5 && e.timing && e.timing.cv !== undefined) {
      gauges.push({
        key: e.label.replace(/ \(.*\)/, ''),
        value: Math.round(e.timing.cv * 1000) / 1000,
        min: 0, max: 2.0,
        normal_range: [0.3, 1.5], warning_range: [0.0, 0.1]
      });
    }
  });
  if (gauges.length < 2) return;
  bridge.renderBinding({
    channel_type: 'faceted_gauge', id: 'entity-gauges',
    label: 'Per-Entity Timing CV — Who Is a Machine',
    group_by: 'entity', gauges: gauges, unit: 'CV', columns: 3
  }, 'pt-entity-gauges');
}

// eslint-disable-next-line no-unused-vars
function buildEntityDetail(bridge, entities) {
  if (!entities || entities.length < 2) return;
  var groups = [];
  entities.forEach(function(e) {
    if (e.total_requests > 5) {
      var sfPct = e.header_fingerprint ? Math.round(e.header_fingerprint.sec_fetch_pct) : 0;
      groups.push({
        key: e.label.replace(/ \(.*\)/, ''),
        categories: ['Chrome Lag', 'Blame%', 'RPS×10', 'Sec-Fetch%'],
        values: [e.chrome_lag || 0, e.blame_pct || 0, Math.round((e.avg_rps || 0) * 10), sfPct]
      });
    }
  });
  if (groups.length < 2) return;
  bridge.renderBinding({
    channel_type: 'faceted_bar', id: 'entity-detail',
    label: 'Per-Entity Behavioral Profile — Chrome Lag, Blame, RPS',
    group_by: 'entity', groups: groups, unit: 'value', columns: 3,
    normalization: 'min_max'
  }, 'pt-entity-detail');
}

// eslint-disable-next-line no-unused-vars
function buildEntityMatrix(bridge, entities) {
  if (!entities || entities.length < 2) return;
  var labels = [], vals = [];
  entities.forEach(function(e) {
    if (e.total_requests > 5) {
      labels.push(e.label.replace(/ \(.*\)/, ''));
      vals.push(e.unique_ips);
      vals.push(e.chrome_lag || 0);
      vals.push(e.blame_pct || 0);
      vals.push(e.is_honest ? 100 : 0);
      vals.push(Math.round((e.avg_rps || 0) * 10));
    }
  });
  if (labels.length < 2) return;
  bridge.renderBinding({
    channel_type: 'heatmap', id: 'entity-matrix',
    label: 'Entity Behavioral Matrix — Full Comparison',
    x_labels: ['IPs', 'Chrome Lag', 'Blame%', 'Honest', 'RPS×10'],
    y_labels: labels, values: vals, unit: 'value',
    normalization: 'min_max'
  }, 'pt-entity-matrix');
}

// eslint-disable-next-line no-unused-vars
function buildAcceptLanguageDonut(bridge, clusters) {
  if (!clusters || clusters.length < 2) return;
  var present = 0, absent = 0;
  clusters.forEach(function(c) {
    if (c.has_lang) present += c.ips; else absent += c.ips;
  });
  bridge.renderBinding({
    channel_type: 'donut', id: 'organism-lang',
    label: 'Accept-Language — Human vs Machine',
    categories: ['Present (human-like)', 'Absent (machine)'],
    values: [present, absent], unit: 'IPs'
  }, 'pt-organism-lang');
}

// eslint-disable-next-line no-unused-vars
function buildSummaryKpis(bridge, dash) {
  if (!dash || !dash.rps) return;
  var mc = (dash.timing && dash.timing.machine_confidence) || 'LOW';
  var mcVal = mc === 'HIGH' ? 0.95 : mc === 'MEDIUM' ? 0.6 : 0.2;
  var organisms = (dash.epitope_summary && dash.epitope_summary.unique_hashes) || 0;
  bridge.renderBinding({
    channel_type: 'faceted_gauge', id: 'summary-kpis',
    label: 'Live Signal',
    group_by: 'metric',
    gauges: [
      { key: 'RPS', value: dash.rps, min: 0, max: 50, unit: 'req/s',
        warning_range: [10, 50] },
      { key: 'Fleet IPs', value: dash.fleet_ips || 0, min: 0, max: 500,
        warning_range: [100, 500] },
      { key: 'Human IPs', value: dash.human_ips || 0, min: 0, max: 100,
        normal_range: [1, 100] },
      { key: 'Fleet %', value: dash.fleet_pct || 0, min: 0, max: 100, unit: '%',
        warning_range: [50, 100] },
      { key: 'Machine Confidence', value: mcVal, min: 0, max: 1.0,
        warning_range: [0.5, 1.0] },
      { key: 'Organisms', value: organisms, min: 0, max: 20 }
    ],
    columns: 3
  }, 'pt-summary-kpis');
}

// eslint-disable-next-line no-unused-vars
function buildEpitopeSummary(bridge, summary) {
  if (!summary || !summary.unique_hashes) return;
  bridge.renderBinding({
    channel_type: 'bar', id: 'epitope-summary',
    label: 'Epitope Summary — Organism Counts',
    categories: ['Organisms', 'Largest Cluster', 'IPs Hashed', 'Multi-IP'],
    values: [
      summary.unique_hashes || 0,
      summary.largest_cluster || 0,
      summary.total_hashed || 0,
      summary.clusters_gt1 || 0
    ],
    unit: 'count'
  }, 'pt-epitope-summary');
}

// ═══════════════════════════════════════════════════════════════
// Relay Selectivity Panel — live Anderson S from firewall data
// ═══════════════════════════════════════════════════════════════

// eslint-disable-next-line no-unused-vars
function buildSelectivityPanel(bridge) {
  bridge.requestSelectivity('pt-relay-selectivity').then(function(r) {
    if (!r || !r.modes) return;
    var cats = [], vals = [], colors = [];
    r.modes.forEach(function(m) {
      cats.push(m.id);
      vals.push(m.p_observed);
      colors.push(m.p_observed > 0.5 ? '#2ecc71' : '#e74c3c');
    });
    bridge.renderBinding({
      channel_type: 'faceted_bar', id: 'relay-permeability',
      label: 'Per-Mode Permeability (observed)',
      categories: cats, values: vals,
      colors: colors, unit: 'P',
      normalization: {strategy: 'none'}
    }, 'pt-relay-permeability');

    var metaEl = document.getElementById('pt-relay-meta');
    if (metaEl) {
      metaEl.innerHTML =
        '<span style="font-size:0.8em;color:#6e7681">' +
        'Unique IPs: ' + (r.unique_ips || {}).udp + ' UDP / ' + (r.unique_ips || {}).tcp + ' TCP · ' +
        'hbbs peers (1h): ' + (r.hbbs_peers_1h || 0) + ' · ' +
        'Rate-limit events (5m): ' + ((r.ratelimit_events_5m || {}).udp || 0) + ' UDP / ' +
        ((r.ratelimit_events_5m || {}).tcp || 0) + ' TCP · ' +
        'Probe: ' + (r.probe_ts || '?') +
        '</span>';
    }
  });
}
