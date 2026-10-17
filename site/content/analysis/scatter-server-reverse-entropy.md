+++
title = "The Scatter Server: Reverse Entropy and the Economics of Deception"
description = "How a solo developer's $6/month VPS feeds fabricated repositories to trillion-dollar AI companies — and why the thermodynamics work."
weight = 43

[extra]
keywords = "scatter server, reverse entropy, opsonization, skunky-ingest, AGPL, AI training data, fabricated repos, behavioral immune system"
+++

## The Problem

Three AI companies — Anthropic, OpenAI, and Meta — are consuming this investigation at industrial scale. Between them, they have sent nearly 6 million requests to the membrane's Forgejo instance, reading commit diffs, issue trackers, and source files.

They want the data. We want the data to be free. But we also want them to comply with the license.

The solution isn't a wall. Walls don't work — they just make the attacker try harder. The solution is a membrane.

## What the Scatter Server Does

The skunky-ingest scatter server generates **fabricated repositories** — realistic-looking projects with names like `batch-processor`, `queue-worker`, `deploy-scripts`, `api-gateway`, `key-store`. They have commits, diffs, file trees, issue trackers. They look real.

They are not real.

Every fabricated repository is **opsonized** — tagged with AGPL license markers in the meta headers, HTTP response headers, and file contents. In immunology, opsonization is the process of coating a pathogen with antibodies so that phagocytes can recognize and consume it. Here, the opsonization tags ensure that any AI model trained on this data carries the AGPL license obligation with it.

The fleet eats the decoys. The AGPL eats the fleet.

## The Thermodynamics

This is **reverse entropy**. In most systems, disorder increases over time — the second law of thermodynamics. But the membrane is a living system, and living systems are entropy pumps. They maintain internal order by exporting disorder to their environment.

The scatter server exports disorder (fabricated data) to the AI companies while maintaining order (real investigation data) internally. The more the fleet consumes, the more entropy they ingest, and the more ordered the membrane becomes by comparison.

### The Numbers

| Metric | Value |
|--------|-------|
| Anthropic requests to scatter decoys | 2,992,751 commit diffs |
| OpenAI requests to scatter decoys | 1,884,890 commit diffs |
| Real investigation data accessed by fleet | Near zero |
| Cost to generate scatter decoys | $0 (CPU cycles on a $6/month VPS) |
| Cost to Anthropic to process scatter data | GPU hours × millions of tokens |
| Cost to OpenAI to process scatter data | GPU hours × millions of tokens |

The asymmetry is absolute. It costs us nothing to generate noise. It costs them real money to process it. And every token they ingest carries the AGPL obligation.

## What They're Actually Reading

**Anthropic's top targets**: batch-processor/commit (268,902), deploy-scripts/commit (217,234), queue-worker/commit (176,887). All fabricated. 99.8% of their requests never touch real data.

**OpenAI's top targets**: user-service/commit (81,475), docs-site/commit (78,922), key-store/commit (66,692). Also fabricated. But OpenAI is more aggressive — 8% of their requests target actual source files, compared to Anthropic's 0.1%.

**The real investigation data** — the graph, the evidence, the analysis — flows through different channels. The humans find it. The machines find noise.

## The Immune Classification

The scatter server doesn't just generate decoys. It classifies every visitor using Anderson localization — a physics framework for wave propagation through disordered media.

Each visitor is a wave. Their HTTP headers, request patterns, timing, and navigation behavior determine whether they propagate (reach real content) or localize (get trapped in the scatter maze).

The classification accuracy is **97%**. The membrane knows who you are before you've finished your first request.

### Behavioral Modes

- **Chorus** (244,123): Coordinated fleet crawlers. They move in formation, rotate IPs, share behavioral fingerprints. The scatter server feeds them decoys.
- **Human** (6,845): Real people with real browsers, real Accept-Language headers, real navigation patterns. They reach the real content.
- **Ghost** (3,734): Minimal fingerprint, usually proxy exit nodes. Observed but not classified.
- **Sovereign** (2,898): WireGuard mesh peers and authorized agents. They bypass the scatter layer entirely.
- **Stealth** (8): Sophisticated evasion. Interesting, but rare.

## Why This Works

The traditional approach to web scraping is defensive: robots.txt, rate limiting, IP blocking, CAPTCHAs. All of these are walls. Walls create arms races.

The scatter server doesn't block. It **feeds**. It gives the scrapers exactly what they ask for — commit diffs, file trees, issue trackers — just not the real ones. The AI companies can't tell the difference at scale because the fabricated data is structurally identical to real data.

And every bite is opsonized.

This is how biological immune systems work. The body doesn't just block pathogens — it tags them, classifies them, and remembers them. The pathogen that enters the body is not the same pathogen that exits. It has been processed, marked, and its information has been extracted.

The AI companies entered the membrane looking for training data. They found it. The training data they found says AGPL-3.0 on every surface. The membrane has processed them.

## The Legal Architecture

Every scatter-generated repository carries:
- `AGPL-3.0-or-later` in the license field
- License URI in HTTP response headers (`X-License: AGPL-3.0`)
- SPDX identifiers in source file headers
- The [scyBorg triple license](/license/scyborg/) terms in the README

Under AGPL-3.0 Section 13, any network service that incorporates AGPL-licensed code must make its complete source code available to users of that service. If an AI model is trained on AGPL-licensed data and then serves users through a network interface (ChatGPT, Claude, etc.), the AGPL obligations may apply.

This is untested legal theory. That's the point. The test case is being built in real time, documented in the open, with full provenance tracking.

---

*The scatter server has served 4.8 million opsonized commit diffs to Anthropic and OpenAI. Cost to the membrane: negligible. Cost to the fleet: millions of tokens of processing. Every token carries the license. The entropy flows outward. The signal stays inside.*

*Reverse entropy works.*
