+++
title = "Purpose Charter Academy — K-8 Charter School"
description = "Purpose Charter Academy School for Law & Public Service — K-8 charter, 10101 E. Canfield, Detroit. DPSCD-authorized. Founder Dr. Brian Banks (9 convictions, 6 felony). Development team includes Judge Cylenthia Miller."
weight = 15
date = 2026-09-20
updated = 2026-09-25

[extra]
keywords = "Purpose Charter Academy, PCA Detroit, Brian Banks founder, Detroit charter school, DPSCD authorized, School for Law and Public Service, Purpose Group LLC, charter school funding, Detroit education, Purpose Charter Academy enrollment"

[taxonomies]
actors = ["Brian Banks", "Judge Cylenthia Miller", "Joseph Holland", "Sherry Gay-Dagnogo"]
entities = ["Purpose Charter Academy", "The Purpose Group LLC", "Anchor Rock Foundation"]
courts = ["Wayne County 3rd Circuit Court", "36th District Court"]
connections = ["charter authorization", "credential fraud", "business entity", "board membership", "institutional capture"]+++

## School Overview

| Field | Value |
|-------|-------|
| Type | K-8 charter school |
| Location | Detroit, Michigan |
| Authorizer | Detroit Public Schools Community District (DPSCD) |
| Management | The Purpose Group, LLC |
| Superintendent | Brian Roderick Banks |

Purpose Charter Academy (PCA) is a K-8 charter school serving Detroit students. DPSCD authorized the school. The Purpose Group, LLC — a management company controlled by Banks — handles day-to-day operations.

## DOE Certificate Timing

| Field | Value |
|-------|-------|
| Certificate | AD0000048782 |
| Issued | September 2, 2022 |
| Context | **3 days after the school year started** |

The Michigan Department of Education issued PCA's operating certificate on September 2, 2022 — three days after the school year had already begun.

## Credential Fraud {{ confidence(level="verified") }}

Banks serves as superintendent while claiming credentials he cannot verify.

| Claim | Location |
|-------|----------|
| "Juris Doctor from Michigan State University College of Law" | purposecharteracademy.com |

State Bar of Michigan search for "Brian Banks": **zero results**. Banks has never been admitted to any bar.

## Board of Directors {{ confidence(level="verified") }}

Per [purposecharteracademy.com/boardofdirectors](https://www.purposecharteracademy.com/boardofdirectors) (retrieved Sep 2026):

| Position | Name | Title / Affiliation |
|----------|------|---------------------|
| **Board Chair** | **Hon. Cylenthia LaToye Miller** | **Judge, Wayne County 3rd Circuit Court** |
| Board Vice Chair | **Mr. Lamar Moreland** | **Assistant Attorney General, State of Michigan** |
| Board Secretary | **Hon. Latisha Johnson** | **Detroit City Council Member** |
| Board Treasurer | Mr. Devin Hutchings | Founder, DH Strategies |
| Board Asst. Treasurer | Mr. Major Clora | President/CEO, Clora Funeral Home |

### Institutional Capture Through the Board

A **sitting judge**, an **Assistant Attorney General**, and a **City Council member** serve on the board of a school run by a man with 9 criminal convictions and a fake J.D. This is not informal support — these are **governance positions** at a publicly funded entity.

| Board Member | Institution Captured | Conflict |
|-------------|---------------------|----------|
| {{ actor(key="miller") }} | **Wayne County 3rd Circuit** | Judge chairs board of felon's school; school generates cases in her court |
| Lamar Moreland | **Michigan Attorney General's Office** | The AG's office could investigate Banks; its own employee governs Banks' school |
| Latisha Johnson | **Detroit City Council** | Council oversees DPSCD, which authorized Banks' charter |

The AG connection is particularly significant: the Michigan Attorney General has jurisdiction over nonprofit fraud (Purpose Foundation), consumer protection (credential fraud), and RICO (the enterprise pattern). An AG employee serving on Banks' board creates a structural conflict with any potential investigation.

## Financial Structure

Public education dollars flow through a layered structure:

```
STATE OF MICHIGAN (per-pupil funding)
        │
        ▼
Purpose Charter Academy
        │
        ▼
The Purpose Group, LLC (management company)
        │
        ▼
Brian Roderick Banks (sole member)
```

Revenue passes through Purpose Group LLC rather than remaining under direct school control. The same management company structure appears at {{ entity(key="macdowell") }}, where {{ entity(key="macdowell", field="extraction_pct") }} of spending flows to Purpose Group.

## Verify

- DPSCD authorization: [detroitk12.org](https://www.detroitk12.org)
- School data: [mischooldata.org](https://www.mischooldata.org)
- School website: [purposecharteracademy.com](https://www.purposecharteracademy.com)
- State Bar: {{ source(key="state_bar") }} — search "Brian Banks" (zero results)

## Independent Reporting

### Primary Analytical Reference
- {{ source(key="clutch_justice", path="/2026/09/13/macdowell-preparatory-academy-academic-financial-record/", label="MacDowell Preparatory Academy: $15,217/student, 3% math proficiency") }} — Documents Banks' school operations, financial extraction, board composition, and DPSCD authorization of PCA (Sep 2026)
- {{ source(key="clutch_justice", path="/2026/09/23/foia-michigan-school-board-records-guide/", label="FOIA and Your Michigan School Board") }} — Legal guide for parents requesting records from PCA and MacDowell (Sep 2026)

### Secondary News Sources
- {{ source(key="freep", path="/story/news/columnists/ml-elrick/2023/08/27/detroit-school-former-felon-as-principal/70669868007/", label="Back to Fool — Brian Banks hired as principal") }} — M.L. Elrick investigation into Banks' criminal history and DOE certificate (Aug 2023)
- DPSCD board minutes (Jul 2025) — PCA authorization for disconnected youth

### Source Data
- DPSCD authorization records (board minutes, Jul 2025)
- Michigan Department of Education certificate records
- LARA: {{ source(key="lara_cofs") }}
- State Bar: {{ source(key="state_bar") }} — search "Brian Banks" (zero results)

---

*All sources are public records. Full documentation in the [git repository](https://git.primals.eco/publicRecord/detroit).*
