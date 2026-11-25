+++
title = "Purpose Foundation — Two Felons, Four Positions"
description = "501(c)(3) private foundation where two convicted felons hold all four officer positions. Banks: President + Director. Holland: Secretary + Treasurer."
weight = 9
date = 2026-09-20
updated = 2026-09-25

[extra]
keywords = "Purpose Foundation, Purpose Foundation Detroit, Banks Holland nonprofit, private foundation fraud, Purpose Foundation Brian Banks Holland, Purpose Foundation two felons all positions, Purpose Foundation 501c3 no governance, Purpose Foundation LARA 803294855 EIN 33-3537910, Purpose Foundation filed December 2024, Purpose Foundation Grosse Pointe Woods, Purpose Foundation Jehan Crump-Gibson Attorney In Fact, Purpose Foundation Banks President Director Holland Secretary Treasurer, Purpose Foundation private 501c3 two convicted felons four positions, Purpose Foundation no independent oversight"

[taxonomies]
actors = ["Brian Banks", "Joseph Holland"]
entities = ["Purpose Foundation", "The Purpose Group LLC", "Purpose Charter Academy", "MacDowell Preparatory Academy"]
courts = ["Wayne County 3rd Circuit Court"]
connections = ["business entity", "board membership", "criminal record", "RICO predicate"]+++

## Entity Overview

| Field | Value |
|-------|-------|
| Name | Purpose Foundation |
| Type | 501(c)(3) private foundation |
| LARA ID | 803294855 |
| EIN | 33-3537910 |
| Filed | December 9, 2024 |
| Registered Address | Grosse Pointe Woods, MI (same as Purpose Group and Banks) |
| Filed By | Crump-Gibson (Attorney In Fact) |

Purpose Foundation is a private foundation registered at the same Grosse Pointe Woods address as Banks' other entities.

## Officer Structure — Zero Independent Governance {{ confidence(level="verified") }}

Two convicted felons hold **all four officer positions**:

| Officer | Person | Convictions |
|---------|--------|-------------|
| President | Brian Roderick Banks | 9 convictions |
| Director | Brian Roderick Banks | — |
| Secretary | Joseph Holland | Drug trafficking |
| Treasurer | Joseph Holland | — |

No independent board members. No outside oversight. The entire governance structure is occupied by two felons.

{% mermaid(title="Foundation Governance — Two Felons, All Positions") %}
graph TB
    FOUND["<b>Purpose Foundation</b><br/>501(c)(3) · EIN 33-3537910"]
    BANKS["<b>Brian Banks</b><br/>9 convictions (6 felony)"]
    HOLLAND["<b>Joseph Holland Jr</b><br/>Drug conviction · MDOC #443789"]

    BANKS -->|"President"| FOUND
    BANKS -->|"Director"| FOUND
    HOLLAND -->|"Secretary"| FOUND
    HOLLAND -->|"Treasurer"| FOUND

    IRS["IRC §4941<br/>Self-Dealing<br/>Prohibition"]
    FOUND -.->|"both officers are<br/>disqualified persons"| IRS

    style FOUND fill:#14532d,stroke:#4ade80,color:#bbf7d0
    style BANKS fill:#991b1b,stroke:#ef4444,color:#fecaca
    style HOLLAND fill:#991b1b,stroke:#ef4444,color:#fecaca
    style IRS fill:#713f12,stroke:#f59e0b,color:#fef3c7
{% end %}

## Private Foundation Restrictions {{ confidence(level="documented") }}

Private foundation status triggers IRC §4940–4948 self-dealing prohibitions:

- **§4941** — Self-dealing between foundation and disqualified persons
- **§4942** — Minimum distribution requirements
- **§4943** — Excess business holdings
- **§4944** — Jeopardizing investments
- **§4945** — Taxable expenditures
- **§4946** — Definition of disqualified persons (includes substantial contributors, managers, and family members)
- **§4948** — Notice requirements for disqualified persons

Banks and Holland, as officers and disqualified persons, face strict limits on transactions between themselves and the foundation.

## Verify

- {{ source(key="lara_cofs", query="Entity 803294855") }}
- IRS EIN lookup: [apps.irs.gov/app/eos](https://apps.irs.gov/app/eos) — EIN **33-3537910**

---

*All sources are public records. Full documentation in the [git repository](https://git.primals.eco/publicRecord/detroit).*
