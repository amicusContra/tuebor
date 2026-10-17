+++
title = "For Journalists — The Evidence Package"
description = "Everything is sourced from public records. Clone the git repository. No FOIA required. Full citation support (CFF 1.2.0). Structured data available as JSON, CSV, and TOML."
weight = 2
date = 2026-10-05

[extra]
keywords = "Detroit charter school investigation evidence, journalist resource Brian Banks, public record evidence package Detroit, how to cite detroit charter school investigation, charter school fraud evidence database, FOIA free Detroit investigation"
+++

## How to Use This

This is a **public evidence library**, not a news article. Every claim is cited to verifiable public records. The entire site is version-controlled in a [git repository]({{ config.extra.repo_url }}) that anyone can clone. Nothing is anonymous. Nothing is behind a paywall.

**You do not need a FOIA request.** Everything here comes from publicly accessible databases.

---

## Quick Start

| Need | Where |
|------|-------|
| **Clone everything** | `git clone {{ config.extra.repo_url }}` |
| **Cite this research** | [CITATION.cff]({{ config.extra.repo_url }}/src/branch/main/CITATION.cff) (CFF v1.2.0) |
| **AI-assisted research** | [llms.txt](/llms.txt) — structured context for language models |
| **Machine-readable graph** | [graph.json](/graph.json) — 87 nodes, 140 typed edges |
| **Edge list for analysis** | [graph.csv](/graph.csv) — source, target, type, weight |
| **Verify integrity** | [content-manifest.toml]({{ config.extra.repo_url }}/src/branch/main/content-manifest.toml) — BLAKE3 hashes |

---

## Key Stories

### The Enterprise Structure
A convicted felon runs two Detroit charter schools receiving $4.9M+ in public funding. His single-member LLC takes 72.67% of revenue. His **romantic partner** is a convicted drug offender — discharged from MDOC **without improvement** — who holds every financial officer position in the enterprise. Banks uses Holland. The Management Agreement's "No Related Parties" clause is violated on its face.

→ [Brian Banks profile](/network/actors/brian-banks/) · [Funding flow](/analysis/funding-flow/) · [RICO pattern](/analysis/rico-pattern/)

### The Judicial Capture
9 judges across 4 Wayne County courts have documented connections to the enterprise. One is Board Chair of the charter school. Another controls case assignment in Probate Court.

→ [Judicial cover](/network/judges/) · [Anderson localization](/analysis/anderson-localization/) · [Allied cases](/analysis/allied-cases/)

### The Dynasty Network
Four interlocking political dynasties converge on one charter school enterprise: Banks/Flenory (BMF), Stallworth, Sabree, and Kilpatrick.

→ [Network map](/network/) · [Institutional capture graph](/analysis/institutional-capture-graph/)

### The Credential Gap
2 of 14 instructional staff properly credentialed. 3% math proficiency. $4.9M in public funding.

→ [Credential audit](/analysis/credential-audit/) · [Words vs. Numbers](/analysis/words-vs-numbers/)

---

## Source Databases

All external sources with direct access links and query instructions:

→ **[Sources & Databases](/sources/)** — 22 databases with access instructions

Key sources include:
- **OTIS** (Michigan criminal records) — free, no account
- **LARA** (business entity filings) — free, searchable
- **Wayne County Register of Deeds** — property records
- **MOECS** (educator credentials) — free lookup
- **Campaign finance** (CFRS) — contribution search

---

## Prior Coverage

This investigation has been independently confirmed by multiple outlets:

→ **[Coverage](/coverage/)** — Clutch Justice, Detroit Free Press, WXYZ Detroit, and others

---

## Evidence Integrity

Every page is BLAKE3-hashed. The repository is git-signed. Three independent surfaces carry this evidence:
- **detroit.primals.eco** (live site)
- **[git.primals.eco/publicRecord/detroit](https://git.primals.eco/publicRecord/detroit)** (sovereign repository)
- **[GitHub mirror](https://github.com/defendDetroit/publicRecord)** (public mirror)

→ **[Full evidence library](/evidence/)** · **[Verify Everything](/validate/)**

---

## Contact

Corrections, disputes, follow-up questions, or media inquiries:

→ **[Contact](/contact/)** — secure contact options available

*Truth matters more than being right. If something is wrong, I will correct it publicly.*
