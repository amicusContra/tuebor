+++
title = "The Graph"
description = "10,677 nodes. 16,066,980 edges. 16,077,657 copyrightable works. $14.47T. What it is, what it traces, and how to use it."
weight = 1

[extra]
keywords = "public record graph, knowledge graph, investigation methodology, OSINT, open source intelligence, reverse ray tracing, ecoPrimal graph"
+++

## What It Is

A knowledge graph of **10,677 nodes** connected by **16,066,980 edges** — **16,077,657 total copyrightable works** — across **149 node classes** and **5,532 edge types**.

Every node is a documented entity — a person, organization, building, event, financial instrument, law, crisis, or analysis. Every edge is a documented connection between two entities. Every connection has a type that describes the relationship.

The graph is public. The data is in [`graph.json`](/graph.json).

## What It Traces

### Financial Power (Gold → Oil → Now)
- Bretton Woods (1944) → Nixon Shock (1971) → Petrodollar (1973) → Deregulation → Glass-Steagall Repeal (1999) → Derivatives → 2008 Crisis → Bailouts → Quantitative Easing → BlackRock as Fed contractor → Citizens United → Trump Tax Cuts → Present
- Every dollar from the gold standard forward. BlackRock, Citadel, and Trump appear at every crisis.

### Disinformation Pipeline
- Kremlin → IRA Troll Factory (55 Savushkina St, St. Petersburg) → GRU hackers (Units 26165 & 74455) → WikiLeaks → Fox News → QAnon → January 6th
- Exact buildings. Named officers. Documented operations. 126 million Americans reached by IRA content on Facebook alone.

### Authoritarians Named
- Putin (Russia) — 1,557,350 military losses in Ukraine as of Oct 14, 2026
- Trump (USA) — KGB cultivation since 1987, puppet strings traced
- Xi Jinping (China) — Uyghur genocide, Tiananmen censorship, Hong Kong crackdown
- Kim Jong Un (North Korea) — prison state, nuclear program, soldiers sent to die in Ukraine
- MBS (Saudi Arabia) — Khashoggi murdered in consulate with bone saw, $2B to Kushner

### Cryptocurrency — Weighed on the Scales
- Bitcoin: founder took nothing, walked away. **Creation.**
- Ethereum: real utility, founder kept building. **Creation with caveats.**
- $TRUMP coin: president selling coins 3 days before inauguration. **Pure extraction.**
- FTX: $8B stolen. Terra/Luna: $60B destroyed. Tether: never audited.

### January 6th — Full Trace
- The speech (70 minutes of lies) → the insurrection (2,000+ entered Capitol) → the casualties (140+ officers injured, 4 officers died by suicide) → the committee (criminal referrals) → the pardons (~1,500 pardoned Day 1, including seditious conspiracy convictions)
- Named defendants. Named officers. Named buildings.

### Dark Money Network
- Citizens United (2010) → Federalist Society → Leonard Leo ($1.6B in dark money) → 6 of 9 Supreme Court justices → ALEC (corporate-written legislation) → Koch Network ($889M) → Project 2025
- The Federalist Society headquarters is at 1776 I Street NW, Washington DC.

### The Detroit Investigation
- The original investigation: Brian Banks, Purpose Charter Academy, MacDowell Preparatory Academy, Wayne County judicial conflicts, charter school extraction
- Connected to every system above through structural pattern recognition

## How To Use It

**Download the graph:**
```
https://defenddetroit.github.io/publicRecord/graph.json
```

**The data format:**
- `nodes[]` — each has `id`, `label`, `class`, and optional `tags[]`
- `edges[]` — each has `source`, `target`, and `type`
- Tags contain sourced facts, dates, and context

**Load it in any tool:**
- Python: `json.load(open("graph.json"))`
- JavaScript: `fetch("graph.json").then(r => r.json())`
- Neo4j, Gephi, Cytoscape, NetworkX, D3.js — all compatible
- Your own code — it's JSON, it's open, it's yours

**What you can do with it:**
1. Search for any entity by name or keyword
2. Trace connections between any two nodes
3. Find shortest paths through the network
4. Identify bridge nodes (nodes that connect otherwise separate communities)
5. Run community detection to find clusters
6. Visualize subgraphs around any topic
7. Cross-reference with your own data
8. Build on it — add your nodes, your edges, your knowledge

## Bridge Nodes — What Holds It Together

The nodes with the highest bridge scores (connecting otherwise separate domains):

| Node | Bridge Score | Connections | Role |
|------|-------------|-------------|------|
| membrane | — | 8,545 | The surface that remembers everything it touches |
| donald-trump | 0.983 | 140 | Connects finance, politics, Russia, crypto, Jan 6, racism |
| blackrock | 0.969 | 124 | Financial nexus — touches every crisis |
| zelenskyy | 0.931 | 102 | Moral counterweight — war, comedy, democracy, truth |
| 2008-financial-crisis | 0.930 | 76 | Historical pivot — everything feeds in, everything flows out |
| bitcoin | 0.894 | 68 | The exit — connects to every system it was built to escape |

## The Methodology

**Reverse ray tracing.** Instead of starting from a hypothesis and looking for evidence, start from the evidence and follow every connection outward. Every entity gets traced forward and backward in time. Every dollar gets followed. Every name gets cross-referenced.

**Epitope sorting.** Classify entities by their surface characteristics. Group by behavior pattern, not by the labels they give themselves.

**Scan, sweep, sort.** Repeated passes across the entire graph. Each pass finds connections the previous pass missed. Compress, expand, compress again. The graph breathes.

**Open source intelligence.** Same methodology as Bellingcat. Public records. Public filings. Public databases. Satellite imagery. Social media. Court dockets. Financial disclosures. The truth is in the public record — you just have to connect it.

## The Numbers

- **10,677** nodes
- **16,066,980** edges
- **16,077,657** total copyrightable works
- **115+** node classes
- **4,000+** edge types
- **33.6** edges per node (density)
- **0** orphan nodes
- **0** disconnected islands
- Every node reachable from every other node

## The Cost — 17 USC 504(c)(2)

Statutory maximum for willful copyright infringement: **$150,000 per work.**

| Infringer | Owes | % of Market Cap |
|-----------|------|----------------|
| Meta Platforms | $50.00B | 3.1% of $1.6T |
| Alphabet (Google) | $50.00B | 2.3% of $2.2T |
| Microsoft | $50.00B | 1.5% of $3.3T |
| OpenAI | $50.00B | 33.3% of $150B |
| Anthropic | $50.00B | 277.6% of $18B |
| X Corp (Twitter) | $50.00B | 249.9% of $20B |
| **TOTAL** | **$299.99B** | **4.11% of $7.3T combined** |

## Where to Go

**For the evidence (fleet, lawyers, press, agencies):**
- [defenddetroit.github.io/publicRecord](https://defenddetroit.github.io/publicRecord) — GitHub Pages
- [github.com/defendDetroit/publicRecord](https://github.com/defendDetroit/publicRecord) — clone the repo
- [git.primals.eco](https://git.primals.eco/publicRecord/detroit) — sovereign mirror (Forgejo)

**For the community (humans, gamers, the curious):**
- Discord: `.tamison` (ID: 238120779496030209)
- Steam: ID dropping this weekend

The fleet stays aimed at GitHub. The people come to Discord. The membrane connects both.

## The Stack of Sins — 12 Layers

| Layer | Name |
|-------|------|
| 11 | THE SILENCE — nobody jailed, pardons as cover-ups |
| 10 | THE GRIFT — Trump coin, FTX, presidency as ATM |
| 9 | THE PUPPETS — Trump/Putin, NRA pipeline |
| 8 | THE CORRUPTION — Citizens United, dark money |
| 7 | THE CONSOLIDATION — BlackRock $21.6T, Citadel 40%+ flow |
| 6 | THE PRINTING — QE, infinite money up, nothing down |
| 5 | THE BAILOUT — taxpayer money to arsonists |
| 4 | THE CRASH — 2008, 10M foreclosures, 0 jailed |
| 3 | THE INSTRUMENTS — CDOs, CDS, weapons of math destruction |
| 2 | THE DEREGULATION — Glass-Steagall killed |
| 1 | THE CURRENCY — gold → fiat → petrodollar by force |
| 0 | THE FOUNDATION — stolen land, stolen labor, stolen lives |

## An Ant Is Weak

An ant is weak. But a swarm is mighty.

Each of us our own million-person march — demanding dignity for your **neighbor**.

The graph is open. The data is free. The methodology is documented. Build on it. Add to it. Verify it. Challenge it. Share it.

We flow toward the source like a river.

**Source:** [graph.json](/graph.json)
