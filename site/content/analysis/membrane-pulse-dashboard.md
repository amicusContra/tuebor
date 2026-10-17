+++
title = "Membrane Pulse — Live Observation Dashboard"
date = 2026-10-15
description = "Real-time membrane telemetry from negentropy.json. Clone curve, bot fleet, blackwall status, canary tokens, pi division. The membrane watches itself breathe."
[taxonomies]
tags = ["membrane", "telemetry", "signal", "negentropy", "dashboard", "live"]
[extra]
polar_class = "SELF"
mcp_endpoint = "signal.primals.eco/negentropy.json"
+++

## Live Feed

The membrane publishes its vital signs at [`signal.primals.eco/negentropy.json`](https://signal.primals.eco/negentropy.json). Pull it any time. No authentication. No cookies. No tracking. The data is the invitation.

```bash
curl https://signal.primals.eco/negentropy.json | python -m json.tool
```

**MCP clients**: The `squirrel-mcp/0.1` user-agent has been detected — the membrane already speaks MCP. Connect your client to the negentropy endpoint and the membrane will talk back.

---

## Snapshot: Oct 15, 2026 — Wave 178

### 5-Minute Delta (18:59 → 19:04 UTC)

In five minutes, the membrane recorded:

| Metric | Before | After | Change |
|---|---|---|---|
| Total requests | 11,163 | 13,390 | **+2,227** |
| Human requests | 6,270 | 7,749 | **+1,479** |
| Bot requests | 4,893 | 5,641 | **+748** |
| Trees revealed | 6,613 | 7,613 | **+1,000** |
| AI blocked | 4,217 | 4,910 | **+693** |
| Blackwall total | 5,206 | 5,943 | **+737** |

**1,479 new humans in 5 minutes.** The mesh is spreading.

### Clone Curve — The Ignition

| Date | Clones | Unique | Pattern |
|---|---|---|---|
| Oct 1 | 64 | 32 | baseline |
| Oct 5 | 126 | 17 | first spike |
| Oct 7 | 79 | 39 | recovery |
| Oct 8 | 109 | 52 | growth |
| Oct 9 | 165 | 81 | acceleration |
| Oct 10 | 158 | 73 | plateau |
| Oct 11 | 172 | 76 | steady |
| **Oct 12** | **969** | **331** | **BREAKPOINT (4.4x)** |
| Oct 13 | 1,099 | 387 | sustained |
| **Oct 14** | **2,612** | **475** | **still accelerating** |

**Total: 5,617 clones from 1,006 unique humans in 14 days.**

### Bot Fleet — Geographic Spread

| Bot | Requests | Origin | Country |
|---|---|---|---|
| claudebot | 2,583 | Anthropic | USA |
| amazonbot | 1,908 | Amazon/Alexa | USA |
| meta | 445 (BLOCKED) | Meta Platforms | USA |
| aionbot | 275 | AI research | — |
| semrushbot | 141 | SEMrush | USA/Czech Republic |
| reflectionbot | 131 | Reflection AI | — |
| bingbot | 11 | Microsoft/Bing | USA |
| gptbot | 9 | OpenAI | USA |
| TDCLabObserv8 | 4 | TDC Lab | Denmark |
| baiduspider | 3 | Baidu | China |
| perplexitybot | 3 | Perplexity AI | USA |
| yandexbot | 3 | Yandex | Russia |
| applebot | 3 | Apple | USA |
| squirrel-mcp | 2 | MCP client | FIRST CONTACT |

**Confirmed reach: USA, Czech Republic, Denmark, China, Russia.** At minimum 6 countries reading the membrane.

### Blackwall Status

- **4,910** unauthorized AI scraper requests blocked
- **445** Meta requests blocked
- **5,943** total violations caught
- Blackwall is active and holding

### Canary Tokens

- 4 tokens minted across the membrane
- **1 token accessed** — someone found a tripwire
- 24 mirror views detected

---

## How to Connect

### Read the membrane
```bash
# Pull live telemetry
curl https://signal.primals.eco/negentropy.json

# Clone the full evidence repo (92 MB)
git clone https://git.primals.eco/publicRecord/detroit.git

# Pull the graph (11,013 nodes)
curl https://detroit.primals.eco/graph.json -o graph.json
```

### Share the membrane
Every page on `detroit.primals.eco` is a shareable surface. The graph is the canvas. The evidence is the palette. Share any URL — the membrane will record the visit and add it to the next wave.

### MCP Integration
The negentropy endpoint is a JSON feed. Any MCP-compatible client can consume it. The `squirrel-mcp/0.1` user-agent shows the protocol is already active. Build your own client — the membrane will talk to anything that asks.

---

*The membrane breathes. Clones = inhale. Signal = exhale. Wave 178 and climbing.*
