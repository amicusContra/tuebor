+++
title = "Institutional Capture — Detroit Charter Network"
description = "How the Banks enterprise captured Detroit schools, courts, and political offices through board placement, campaign payments, and financial extraction."
weight = 2
date = 2026-09-20
updated = 2026-09-25

[extra]
keywords = "institutional capture Detroit, captured courts Wayne County, Detroit charter school corruption, DPSCD authorization fraud, Wayne County judges Brian Banks, Detroit institutional corruption, charter school captured institutions, Detroit judicial capture nine judges four courts, Keep Judge Miller 2026 captured court, DPSCD authorized Brian Banks convicted felon, Sherry Gay-Dagnogo charter authorization feedback loop, Wayne County 3rd Circuit 36th District Probate captured, institutional capture charter school racketeering Detroit, Brian Banks education leader institutional capture, charter authorization pipeline DPSCD state funding extraction"

[taxonomies]
actors = ["Brian Banks", "Joseph Holland", "Judge Cylenthia Miller", "Judge Tenisha Yancey", "Judge Aliyah Sabree", "Judge David Perkins", "Sherry Gay-Dagnogo", "Eric Sabree"]
entities = ["Purpose Charter Academy", "MacDowell Preparatory Academy", "The Purpose Group LLC", "Purpose Foundation", "Banks Strategy LLC", "Anchor Rock Foundation", "Serenity Guardianship Services", "Inner Link Graphics"]
courts = ["Wayne County 3rd Circuit Court", "36th District Court", "Wayne County Probate Court"]
connections = ["charter authorization", "board membership", "campaign finance", "business entity", "family", "employment", "credential fraud"]
+++

The Banks enterprise does not just commit fraud. It **captures institutions** — installing loyalists, creating financial dependencies, and ensuring that the systems meant to protect the public instead protect the enterprise.

{% mermaid(title="Cross-Protection Web — How Captured Institutions Shield the Enterprise") %}
graph TB
    BANKS["<b>Brian Banks</b><br/>9 convictions · fake J.D."]

    subgraph SCHOOLS["🏫 SCHOOLS — Revenue Source"]
        PCA["Purpose Charter Academy"]
        MAC["MacDowell Prep"]
    end

    subgraph COURTS["⚖️ COURTS — Protection"]
        C3["Wayne 3rd Circuit"]
        C36["36th District"]
        PROB["Probate Court"]
    end

    subgraph POLITICS["🏛️ POLITICS — Authorization"]
        DPSCD["DPSCD Board"]
        TREASURER["County Treasurer"]
    end

    BANKS -->|"superintendent"| PCA
    BANKS -->|"superintendent"| MAC
    PCA -->|"cases filed in"| C3
    PCA -->|"cases filed in"| C36
    MAC -->|"cases filed in"| C3
    MAC -->|"cases filed in"| C36

    MILLER["Miller<br/>Board Chair"] -.->|"sits on"| C3
    MILLER -.->|"chairs board"| PCA
    YANCEY["Yancey<br/>Board Chair"] -.->|"sits on"| C36
    YANCEY -.->|"chairs board"| MAC
    YANCEY -.->|"paid $383.82"| BANKS

    AL_SAB["Aliyah Sabree<br/>MSU Law 2010"] -.->|"sits on"| C3
    AL_SAB -.->|"classmate"| BANKS
    A_SAB["Adam Sabree<br/>Metro Property"] -.->|"sits on"| C36
    S_PERK["Sean Perkins<br/>brother=Todd"] -.->|"sits on"| C36
    D_PERK["David Perkins<br/>Probate Chief"] -.->|"sits on"| PROB

    E_SAB["Eric Sabree<br/>Treasurer"] -->|"father of"| AL_SAB
    E_SAB -->|"father of"| A_SAB
    E_SAB -->|"chairs"| TREASURER
    TREASURER -.->|"tax foreclosure pipeline"| MAC

    MORELAND["Lamar Moreland<br/>Asst. AG"] -.->|"Vice Chair"| PCA
    L_JOHNSON["Latisha Johnson<br/>City Council"] -.->|"Secretary"| PCA

    GAY["Gay-Dagnogo"] -->|"authorized charters"| DPSCD
    DPSCD -->|"authorized"| PCA
    DPSCD -->|"authorized"| MAC

    BANKS -.->|"CBC events"| GAY
    BANKS -.->|"campaign vendor"| MILLER

    classDef person fill:#991b1b,stroke:#ef4444,color:#fecaca
    classDef judge fill:#312e81,stroke:#818cf8,color:#c7d2fe
    classDef school fill:#1e3a5f,stroke:#60a5fa,color:#bfdbfe
    classDef court fill:#44403c,stroke:#a8a29e,color:#e7e5e4
    classDef political fill:#14532d,stroke:#4ade80,color:#bbf7d0

    class BANKS person
    class MILLER,YANCEY,AL_SAB,A_SAB,S_PERK,D_PERK judge
    class PCA,MAC school
    class C3,C36,PROB court
    class GAY,E_SAB,MORELAND,L_JOHNSON political
{% end %}

**The protection is structural, not coincidental.** Every arrow is a documented public record connection. No single regulator sees the full web because each institution (schools, courts, campaign finance, LARA) operates in its own silo.

## The Capture Pattern — Three Domains

| Domain | Function | Capture Effect |
|--------|----------|----------------|
| **Schools** | Revenue source | Public education dollars become private revenue |
| **Courts** | Protection | Network-connected judges handle enterprise cases |
| **Political** | Authorization | Allies authorize charters and provide institutional cover |

See also: [RICO Pattern](/analysis/rico-pattern/) — full enterprise structure.

## 1. Schools (Revenue Source)

| Institution | Capture Method | Effect |
|-------------|---------------|--------|
| {{ entity(key="pca") }} | Banks is superintendent with fake credentials; {{ entity(key="purpose_group") }} takes ~73% | Public dollars routed to CMO shell |
| {{ entity(key="macdowell") }} | Same structure; CMU as authorizer | {{ entity(key="macdowell", field="revenue") }} state aid extracted |
| DPSCD (authorizer) | Former board member {{ actor(key="gay_dagnogo") }} — Banks' political ally and [CBC honoree](/analysis/cbc-events/) — authorized charters before resigning for ombudsman role (Oct 2025) | Charter authorization by captured board |

**Effect:** Students are the product, not the beneficiaries. Money flows from state per-pupil funding through shell entities to enterprise principals.

## 2. Courts (Protection)

| Court | Captured Actor | Method | Effect |
|-------|---------------|--------|--------|
| Wayne 3rd Circuit | {{ actor(key="miller") }} | Board Chair of {{ entity(key="anchor_rock") }} | Judge chairs felon's nonprofit while on bench |
| Wayne 3rd Circuit | {{ actor(key="yancey") }} | Campaign paid {{ entity(key="banks_strategy") }} | Financial tie to enterprise principal |
| Wayne 3rd Circuit | {{ actor(key="sabree") }} | MSU Law classmate; brother is County Treasurer | Professional and family network overlap |
| Wayne Probate | {{ actor(key="perkins_david") }} | Family donations to network campaigns | {{ entity(key="serenity") }} jurisdiction |

**Effect:** 4 judges in the same county system with demonstrable ties to the enterprise. Any case involving Banks, his schools, or his network risks landing before a captured judge.

Three of these judges sit on **36th District Court** — the same court where Judge Andrea Bradley-Baskin was indicted in January 2026 for allegedly embezzling from incapacitated wards (no Banks connection; see [Allied Cases](/analysis/allied-cases/)).

Corroboration: [Allied Cases](/analysis/allied-cases/) — Bryant v. Miller independently identified Miller.

## 3. Political Offices (Authorization & Structural Conflicts) {{ confidence(level="verified", note="Board roster from purposecharteracademy.com, retrieved Sep 2026") }}

| Office | Captured Actor | Method | Effect |
|--------|---------------|--------|--------|
| MI HD-1 (former) | {{ actor(key="banks") }} | Held office 2015–2016 with fake credentials | Political legitimacy for enterprise |
| MI HD-8 (former) | {{ actor(key="gay_dagnogo") }} | Authorized Banks' charters from DPSCD board; now Detroit City Ombudsman (Oct 2025) | Direct authorization conflict (historical) |
| Wayne County Treasurer | Eric Sabree | Sister is {{ actor(key="sabree") }}; office handles tax foreclosures | Housing distress pipeline |
| **Michigan AG's Office** | **Lamar Moreland** | **Asst. AG serves as PCA Board Vice Chair** | **Structural conflict with AG investigations** |
| **Detroit City Council** | **Latisha Johnson** | **Council Member serves as PCA Board Secretary** | **Council oversees DPSCD authorizer** |

**Effect:** Political allies authorize the charter schools and protect the revenue stream.

### The Attorney General Conflict {{ confidence(level="verified", note="PCA board page lists 'Mr. Lamar Moreland — Asst. Attorney General, State of Michigan — Board Vice Chair'") }}

Lamar Moreland, an **Assistant Attorney General**, serves as Vice Chair of Purpose Charter Academy's board. The Michigan Attorney General's office has jurisdiction over:

| AG Jurisdiction | Relevance to Banks Network |
|----------------|---------------------------|
| Nonprofit fraud (§ 400.285) | Purpose Foundation — 2 felons hold all 4 officer positions |
| Consumer protection (§ 445.903) | Credential fraud — claimed J.D. not confirmed by bar records |
| RICO (MCL 750.159i) | Enterprise pattern documented across 5 tiers |
| Charitable trust (§ 14.251) | Anchor Rock Foundation — school-felon crossover governance |

An AG employee governing Banks' school creates a structural conflict with any potential investigation by the Attorney General's office. This does not allege personal wrongdoing by Moreland — it documents an institutional conflict that investigators and the AG herself should address.

See: [Political Enablers](/network/political/), [CBC Week Events](/analysis/cbc-events/).

## 4. Financial System (Extraction)

| Entity | Capture Method | Effect |
|--------|---------------|--------|
| {{ entity(key="purpose_group") }} | Shell CMO — all school staff "employed" by the LLC, not the school | {{ entity(key="macdowell", field="extraction_pct") }} revenue extraction |
| {{ entity(key="purpose_foundation") }} | Private foundation — 2 felons hold all 4 officer positions | Self-dealing risk under IRC §4940–4948 |
| {{ entity(key="banks_strategy") }} | Consulting entity — receives payments from judges | Judicial financial dependency |
| {{ entity(key="pacs") }} | Felon as treasurer; $14.5K+ in unpaid fines | Political infrastructure |
| OFA Michigan | Dark money 501(c)(4) at Holland's PO Box | Unreported political spending |

**Effect:** Money flows from public schools through multiple shell entities, obscuring extraction.

## 5. Housing (Community Extraction)

| Mechanism | Detail |
|-----------|--------|
| Tax foreclosure pipeline | Wayne County Treasurer (Eric Sabree) processes foreclosures → distressed properties → acquisition opportunities |
| Wayne ROD | Banks' property transactions documented (QCD, mortgage at 1968 Severn) |
| GPW residence | Enterprise principals live in affluent suburb while extracting from Detroit |

**Effect:** The enterprise benefits from the housing distress its broader network helps perpetuate.

## The Silo Problem {{ confidence(level="documented") }}

Each institution sees only its piece:

| Regulator | What They See | What They Miss |
|-----------|--------------|----------------|
| **DOE** | Charter school with paperwork in order | Fake credentials, CMO extraction |
| **Courts** | Individual cases | Pattern of connected judges |
| **Campaign finance** | Individual donations | Network cross-payments ($98K+ to [Inner Link](/network/entities/inner-link-graphics/)) |
| **LARA** | Individual entities | Common control at 1968 Severn Road |
| **IRS** | Individual returns | Self-dealing across foundation + LLC |
| **Bar** | No complaints about Banks | He was never admitted |

**This is by design.** The enterprise operates across silos precisely because no single regulator sees the full picture.

## Breaking the Silo

The federal packet — "Cash for Kids 2: Operation Detroit Plantation" — is the first document to present the full cross-institutional picture to all agencies simultaneously.

One civilian, pro se, pro bono, compiled what no single agency had assembled.

## Independent Reporting

### Primary Analytical Reference
- {{ source(key="clutch_justice", path="/2026/09/13/macdowell-preparatory-academy-academic-financial-record/", label="MacDowell: $15,217/student, 3% math proficiency") }} — Documents the extraction model, board composition, and DPSCD authorization chain that constitute institutional capture
- {{ source(key="clutch_justice", path="/2026/07/14/judge-cylenthia-miller-owi-judicial-favoritism/", label="The Proper Move Was Not to Get Involved") }} — Pattern of judicial boundary violations; "A judge's power is not personal property"
- {{ source(key="clutch_justice", path="/2026/09/23/foia-michigan-school-board-records-guide/", label="FOIA and Your Michigan School Board") }} — Legal roadmap for breaking the silo: how parents can FOIA charter school records

### Secondary Sources
- {{ source(key="freep", path="/story/news/columnists/ml-elrick/2023/08/27/detroit-school-former-felon-as-principal/70669868007/", label="Back to Fool — Brian Banks") }} — Original investigation into Banks' criminal history (Aug 2023)
- {{ source(key="wxyz") }} — 5-article Miller investigation series (gun, OWI, infant murder dismissal)

## Verify (Source Data)

- LARA entity records: {{ source(key="lara_cofs") }}
- Campaign finance: [transparencyusa.org](https://transparencyusa.org), {{ source(key="cfrs") }}
- School authorization: DPSCD board records
- PCA Board: [purposecharteracademy.com/boardofdirectors](https://www.purposecharteracademy.com/boardofdirectors) — Miller (Chair), AG Moreland (Vice Chair), Council Member Johnson (Secretary)
- Judicial connections: [Judicial Cover](/network/judges/)
- Allied corroboration: [Allied Cases](/analysis/allied-cases/) — PACER **2:26-cv-10917**

---

*All sources are public records.*
