# Agent Instructions — tuebor

You are working on an evidence-based accountability documentation site covering Michigan courts, prosecutors, judges, and oversight systems. This is a live investigation with real-world consequences.

## Critical Rules

1. **Every factual claim must have a source.** No exceptions. If you cannot cite a court record, public filing, FOIA response, or published article, frame it as an investigation checklist item (`- [ ]`), not a finding.

2. **Do not fabricate or speculate.** If the evidence says "five gunshot wounds to the back" cite the autopsy report. If the evidence says "no body camera video exists" cite the FOIA denial or the sheriff's statement. Never infer beyond what the document says.

3. **Privacy constraints:**
   - Do NOT publish Rita Williams' phone number, home address, or children's names
   - Do NOT identify Rita's relationship to the site operators — she is a contact at hello@clutchjustice.com and that is all
   - Do NOT publish Roeiah Ahmaliah Epps-Ward's identity, bar number, phone, address, or employer
   - Kevin Mok's phone number must NOT appear on any public-facing page. ProtonMail (eco.primal@pm.me) only

4. **Sourcing format:** Use tables for structured data. Use inline links for sources. Every source gets a full citation in the Sources section at the bottom of each page.

5. **Tone:** Factual, precise, sourced. Not angry, not editorial. Let the documents speak. The pattern is damning enough without commentary.

## Repo Structure

```
site/content/
├── _index.md              # Landing page
├── actors/                 # One .md per documented person
├── evidence/               # Primary evidence pages
├── analysis/               # Pattern analysis
├── investigate/            # Reader toolkit (FOIA, oversight, court records)
└── timeline/               # Master chronology
```

## How to Add Content

### New Actor Page

Create `site/content/actors/lastname.md`:

```toml
+++
title = "Full Name"
description = "Role. Key finding. One sentence."
weight = N  # position in sort order
+++
```

Required sections:
- **Identity** — table with name, position, court/office, location
- **Key findings** — sourced to specific documents, with dates
- **Investigation Path** — `- [ ]` checklist of next research targets
- **Sources** — full citations

### New Evidence Page

Create `site/content/evidence/descriptive-name.md`:

```toml
+++
title = "Evidence Page Title"
description = "What this evidence shows."
weight = N
+++
```

Required: every claim sourced. "What Is Proven vs. What Is Not" section if the evidence is forensic.

### New Investigation Guide

Create `site/content/investigate/guide-name.md`:

```toml
+++
title = "Guide Title"
description = "What this guide helps readers do."
weight = N
+++
```

Required: actionable steps, templates where applicable, Michigan-specific statutory citations.

## Key Databases for Research

| Database | URL | What It Has |
|----------|-----|-------------|
| LARA Business Search | mibusinessregistry.lara.state.mi.us/search/business | Michigan entity registrations |
| Michigan Courts Case Search | courts.michigan.gov/case-search | State court dockets |
| Michigan Courts Opinions | courts.michigan.gov/opinions | Published and unpublished appellate opinions |
| PACER | pacer.uscourts.gov | Federal court filings ($0.10/page, $3 cap/doc) |
| ARIN WHOIS | whois.arin.net | IP address and ASN registration |
| TransparencyUSA | transparencyusa.org | Campaign finance across all states |
| Michigan CFRS | miboecfr.nictusa.com/cfr | Michigan campaign finance filings |
| AGC | agcmi.org | Attorney grievance filing info |
| JTC | jtc.courts.mi.gov | Judicial tenure complaints |
| ProtonMail WKD | via standard OpenPGP key lookup | Public PGP key metadata |

## Active Investigations

### Aljouny / Ellison (Saginaw County)
- Case No. 25-2441-CZ (OLC v. Williams)
- COA No. 380599
- Case No. 26-000243-CZ (Ellison v. Consumers Energy)
- IC3 ID: 10f80c476ef144d4a772d0b198c75a2a
- Key evidence: ghost-witness-aljouny.md, data-braid-aljouny.md

### Barry County Courts
- Judge Michael Schipper — active JTC investigation
- Julie Nakfoor Pratt — Brady/Giglio failures, private admonishment
- Jeremiah Johnson shooting — Oct 28, 2024
- MSP 5th District team (Criger, Fuller)
- SCAO systemic review requested
- Federal involvement confirmed per Clutch Justice

### 38th District Court (Eastpointe)
- Judge Kathleen Galen — JTC admonition match, Soward reversal
- Mark Makoski — magistrate, residency question
- Nov 3, 2026 election: Galen vs. Goodman

### Cross-Reference: Detroit
- Conrad Mallett (Corporation Counsel) connects Aljouny investigation to Detroit dark money pipeline
- Same AGC, JTC, SCAO handle complaints across all investigations
- detroit.primals.eco has 287+ pages of complementary evidence

## Commit Messages

Use descriptive commit messages that name what was added and what sources were used. Example:

```
Nakfoor Pratt actor page: private admonishment, Fuller/Brady, Johnson shooting

Sources: ADB 2021 Annual Report, Clutch Justice (Jul 7, Jun 29, Sep 23),
WOOD TV8, MLive, PACER (McCann v. Fuller)
```
