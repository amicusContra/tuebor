# tuebor — Michigan Public Record

**"I will defend."** Evidence-based accountability documentation across Michigan courts, institutions, and oversight systems.

## What This Is

A sourced evidence repository documenting institutional failures across Michigan's judicial, prosecutorial, and oversight systems. Every claim is tied to court records, public filings, FOIA responses, or verifiable data.

This is the second node in the [primals.eco](https://primals.eco) evidence network, alongside [detroit.primals.eco](https://detroit.primals.eco).

## Repo Structure

```
site/content/
├── _index.md                      # Landing page — WHY, county table, navigation
├── actors/                         # Sourced profiles of documented actors
│   ├── _index.md                   #   Actor registry + case table + cross-references
│   ├── ellison.md                  #   Philip L. Ellison — OLC PLC, SLAPP, Aljouny
│   ├── borrello.md                 #   Judge Andre R. Borrello — recusal, contempt
│   ├── galen.md                    #   Judge Kathleen Galen — 38th District, JTC
│   ├── schipper.md                 #   Judge Michael Schipper — Barry County, JTC
│   └── nakfoor-pratt.md            #   Julie Nakfoor Pratt — prosecutor, Brady/Giglio
├── evidence/                       # Primary evidence and forensic analysis
│   ├── ghost-witness-aljouny.md    #   13 convergence points — fabricated witness
│   └── data-braid-aljouny.md       #   Public vs private layers + reverse target searches
├── analysis/                       # Pattern analysis across investigations
│   ├── _index.md                   #   Cross-network connections, shared oversight
│   └── institutional-immunity.md   #   94% dismissal rate, the math of isolation
├── investigate/                    # Reader action toolkit
│   ├── _index.md                   #   Process overview — how to run your own investigation
│   ├── foia-toolkit.md             #   Templates, deadlines, exemption challenges
│   ├── oversight-guide.md          #   AGC, JTC, SCAO, MCOLES, IC3 filing guides
│   ├── court-records.md            #   Dockets, PACER, LARA, campaign finance
│   └── evidence-documentation.md   #   Incident logs, preservation notices
└── timeline/
    └── _index.md                   # Master chronology 2013–present
```

## Content Format

All content pages use [Zola](https://www.getzola.org/) front matter (TOML `+++` blocks):

```toml
+++
title = "Page Title"
description = "One-sentence summary for SEO and navigation."
weight = 1  # sort order within section
+++
```

## Sourcing Standard

Every factual claim must cite a specific source:
- **Court records** — case number, court, date, docket entry
- **Public filings** — LARA entity, campaign finance filing, ARIN WHOIS
- **FOIA responses** — requesting party, responding agency, date, tracking number
- **Published reporting** — outlet, author, date, URL
- **Statutes** — MCL citation, court rule (MCR) citation

Unsourced claims belong in investigation checklists (`- [ ]` items), not in findings.

## Investigation Checklists

Every actor page has an **Investigation Path** section with unchecked items:

```markdown
## Investigation Path

- [ ] Pull full docket from Saginaw County Circuit Court for 25-2441-CZ
- [ ] Check JTC complaints history for Borrello
- [ ] FOIA: Cork Wine Pub liquor license records from Michigan LARA/LCC
```

These are the next research targets. Pick one, run it, and add findings to the page.

## Evidence Network

This is one node in the [primals.eco](https://primals.eco) investigation network:

| Surface | URL | Description |
|---------|-----|-------------|
| **Tuebor** | [tuebor.primals.eco](https://tuebor.primals.eco) | Michigan court accountability (this repo) |
| **Barry** | [barry.primals.eco](https://barry.primals.eco) | Barry County mirror + desk workbench |
| **Detroit** | [detroit.primals.eco](https://detroit.primals.eco) | Detroit public schools investigation |
| **Clutch Justice** | [clutchjustice.com](https://clutchjustice.com) | Walkable investigation graph |
| **Thesis** | [thesis.primals.eco](https://thesis.primals.eco) | Live research — Stomachs With No Eyes |
| **sporePrint** | [sporeprint.primals.eco](https://sporeprint.primals.eco) | Ecosystem documentation + philosophy |
| **Signal** | [signal.primals.eco](https://signal.primals.eco) | Live behavioral topology monitor |
| **Gorilla** | [gorilla.primals.eco](https://gorilla.primals.eco) | Real-time fleet observation |
| **Source** | [git.primals.eco](https://git.primals.eco) | Sovereign Forgejo — AGPL source |

### Repositories

- **This repo:** [github.com/amicusContra/tuebor](https://github.com/amicusContra/tuebor)
- **Clutch Justice:** [github.com/amicusContra/clutch](https://github.com/amicusContra/clutch)
- **Detroit:** [github.com/defendDetroit/publicRecord](https://github.com/defendDetroit/publicRecord)
- **Full source:** [git.primals.eco/ecoPrimals](https://git.primals.eco/ecoPrimals) (AGPL-3.0-or-later)

### Contact

- hello@clutchjustice.com (public)
- eco.primal@pm.me (encrypted)

## License

Public record documentation. Source materials are public records, court filings, and published reporting.

---

<p align="center"><i>hello world — Artisan</i></p>
<p align="center"><sub><a href="https://sporeprint.primals.eco/philosophy/the-elements-of-style/">φ design system</a> · 55 repos · 6 orgs · 9 surfaces · <a href="https://primals.eco">primals.eco</a></sub></p>
