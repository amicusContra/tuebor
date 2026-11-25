+++
title = "MacDowell Preparatory Academy — Financial Extraction"
description = "MacDowell Preparatory Academy Detroit — K-8 charter school, 4201 West Outer Drive. Dr. Brian Banks superintendent (9 convictions, 6 felony). 3% math proficiency, bottom 50% Michigan. Purpose Group LLC extracts 72.67% of $4.9M revenue."
weight = 10
date = 2026-09-20
updated = 2026-09-25

[extra]
keywords = "MacDowell Preparatory Academy, MacDowell Prep Detroit, 3 percent math proficiency, Purpose Group LLC management, Detroit charter school performance, MacDowell enrollment, DPSCD authorized, Brian Banks superintendent, Detroit charter school audit, MacDowell academy scores"

[taxonomies]
actors = ["Brian Banks", "Judge Tenisha Yancey", "Joseph Holland"]
entities = ["MacDowell Preparatory Academy", "The Purpose Group LLC", "Purpose Foundation"]
courts = ["36th District Court", "Wayne County 3rd Circuit Court"]
connections = ["charter authorization", "credential fraud", "business entity", "board membership"]+++

## School Overview

| Field | Value |
|-------|-------|
| Type | Charter school |
| Location | Detroit, Michigan |
| Authorizer | Central Michigan University (CMU) |
| Management | The Purpose Group, LLC |
| Superintendent | Brian Roderick Banks |

MacDowell Preparatory Academy receives public per-pupil funding while Purpose Group LLC — controlled by Banks — extracts the majority of school spending.

## Financial Extraction {{ confidence(level="verified") }}

| Metric | Value |
|--------|-------|
| Annual revenue | **{{ entity(key="macdowell", field="revenue") }}** |
| Purpose Group LLC payments | **{{ entity(key="macdowell", field="extraction_amount") }} ({{ entity(key="macdowell", field="extraction_pct") }})** |
| Reported staff salaries | **$0** |
| Unaccounted management fee gap | **{{ entity(key="macdowell", field="unaccounted") }}** |
| Math proficiency | **3%** |

### How the Numbers Work

Purpose Group receives {{ entity(key="macdowell", field="extraction_amount") }} of MacDowell's spending — {{ entity(key="macdowell", field="extraction_pct") }} of total revenue. The school reports **$0 in staff salaries** because staff are technically employed by Purpose Group, not the school itself.

Purpose Group reported paying staff **$3,936,712**, leaving a **{{ entity(key="macdowell", field="unaccounted") }} gap** between what MacDowell paid Purpose Group and what Purpose Group reported spending on personnel.

```
MacDowell revenue:           $4,900,000
Purpose Group payments:      $4,285,201  (72.67%)
Purpose Group staff costs:   $3,936,712
Unaccounted gap:             $348,489
School-reported salaries:            $0
```

{% mermaid(title="MacDowell Revenue Flow — Where the Money Goes") %}
graph LR
    STATE(("Michigan<br/>Per-Pupil<br/>Funding")) -->|"$4.9M/yr"| MAC["MacDowell Prep"]
    MAC -->|"72.67%<br/>$4,285,201"| LLC["Purpose Group LLC<br/>(Banks = sole member)"]
    LLC -->|"$3,936,712"| STAFF["Staff Payroll"]
    LLC -->|"$150,000"| BANKS["Banks Salary"]
    LLC -->|"$348,489"| GAP["❓ Unaccounted"]
    MAC -->|"$0 reported"| DIRECT["Direct Staff<br/>Salaries"]

    style STATE fill:#0f766e,stroke:#2dd4bf,color:#ccfbf1
    style MAC fill:#1e3a5f,stroke:#60a5fa,color:#bfdbfe
    style LLC fill:#713f12,stroke:#f59e0b,color:#fef3c7
    style BANKS fill:#991b1b,stroke:#ef4444,color:#fecaca
    style GAP fill:#92400e,stroke:#f59e0b,color:#fef3c7
    style STAFF fill:#14532d,stroke:#4ade80,color:#bbf7d0
    style DIRECT fill:#44403c,stroke:#6b7280,color:#9ca3af
{% end %}

## Credential Fraud {{ confidence(level="verified") }}

| Claim | Location |
|-------|----------|
| "Juris Doctorate with a Concentration in Criminal Law" | macdowellprep.com |

State Bar of Michigan search for "Brian Banks": **zero results**.

## Verify

- School website: [macdowellprep.com](https://www.macdowellprep.com)
- CMU charter authorization: [cmich.edu](https://www.cmich.edu)
- Financial data: [mischooldata.org](https://www.mischooldata.org)
- State Bar: {{ source(key="state_bar") }} — search "Brian Banks" (zero results)

## Independent Reporting

### Primary Analytical Reference
- {{ source(key="clutch_justice", path="/2026/09/13/macdowell-preparatory-academy-academic-financial-record/", label="MacDowell: $15,217/student, 3% math proficiency") }} — Comprehensive academic and financial analysis documenting extraction model, board composition, Yancey as Board Chair, gift-card-labeled payments, and DPSCD authorization of second school (Sep 2026)
- {{ source(key="clutch_justice", path="/2026/09/23/foia-michigan-school-board-records-guide/", label="FOIA and Your Michigan School Board") }} — Legal roadmap for parents requesting MacDowell financial records under MCL 15.231 (Sep 2026)

### Secondary Sources
- {{ source(key="school_digger", path="/go/MI/schools/0103304769/school.aspx", label="MacDowell Preparatory Academy") }} — Ranked 1,443rd of 1,488 Michigan elementary schools (bottom 3%)
- {{ source(key="us_news", path="/michigan/macdowell-preparatory-academy-203303", label="MacDowell Preparatory Academy") }} — 3% math proficiency, 12% reading proficiency
- {{ source(key="freep", path="/story/news/columnists/ml-elrick/2023/08/27/detroit-school-former-felon-as-principal/70669868007/", label="Back to Fool — Brian Banks") }} — M.L. Elrick investigation (Aug 2023)

---

*All sources are public records. Full documentation in the [git repository](https://git.primals.eco/publicRecord/detroit).*
