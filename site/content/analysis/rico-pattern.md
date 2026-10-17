+++
title = "RICO Pattern — The Banks Enterprise"
description = "RICO pattern analysis: 6 predicate acts, 14+ years of continuity, $4.9M annual extraction through shell entities. The Banks enterprise mapped."
weight = 1
date = 2026-09-20
updated = 2026-09-25

[extra]
keywords = "Detroit RICO pattern, Brian Banks RICO, charter school racketeering, 18 USC 1961, mail fraud charter school, wire fraud Detroit, money laundering Purpose Group LLC, Detroit charter school enterprise, Banks enterprise predicate acts, Brian Banks RICO 6 predicate acts 14 years, Purpose Group LLC money laundering extraction, Brian Banks Dr J.D. Ph.D. RICO enterprise leader, charter school racketeering convicted felon superintendent, 18 USC 1961 Purpose Charter Academy MacDowell, Brian Banks Pahara Fellow RICO predicate, Detroit charter school $4.9M annual extraction, RICO pattern education leader convicted felon, federal master packet 8 agencies September 2026"

[taxonomies]
actors = ["Brian Banks", "Joseph Holland", "OD Banks", "Judge Cylenthia Miller", "Judge Aliyah Sabree", "Judge Tenisha Yancey", "Judge David Perkins"]
entities = ["Purpose Charter Academy", "MacDowell Preparatory Academy", "The Purpose Group LLC", "Purpose Foundation", "Banks Strategy LLC", "Anchor Rock Foundation", "Serenity Guardianship Services"]
courts = ["Wayne County 3rd Circuit Court", "36th District Court", "Wayne County Probate Court", "Eastern District of Michigan"]
connections = ["RICO predicate", "credential fraud", "campaign finance", "business entity", "board membership", "criminal record", "charter authorization", "family"]
+++

{{ lens(active="legal") }}

This page presents the complainant's analysis of documented relationships and financial flows, organized under the framework of 18 U.S.C. § 1961 (RICO). **The records are public. The relationships are documented. The pattern analysis is the complainant's inference, submitted to federal agencies for determination.** Whether these facts constitute racketeering is a legal conclusion that only a court or prosecutorial authority can make.

{{ status(level="filed", note="Federal master packet submitted to 8 agencies Sep 22, 2026") }}

### Epistemic Key
| Marker | Meaning |
|--------|---------|
| {{ status(level="record") }} | Verifiable public record |
| {{ status(level="corroborated") }} | Confirmed by 2+ independent sources |
| {{ status(level="inference") }} | Analytical conclusion drawn from records — not adjudicated |
| {{ status(level="allegation") }} | Formally alleged in complaint — awaiting determination |

## Enterprise Structure {{ confidence(level="documented") }}

{% mermaid(title="RICO Enterprise Structure — Brian Roderick Banks") %}
graph TB
    BANKS["<b>BRIAN RODERICK BANKS</b><br/>9 convictions · 3 bankruptcies · fake J.D."]

    subgraph REV["💰 REVENUE STREAMS"]
        PCA["Purpose Charter Academy<br/>K-8, DPSCD authorized"]
        MAC["MacDowell Prep<br/>$4.9M state aid"]
        BSC["Banks Strategy LLC<br/>Judge campaign payments"]
        EVT["CBC Week events<br/>$50K–$150K est."]
    end

    subgraph EXT["🔄 EXTRACTION MECHANISM"]
        TPG["Purpose Group LLC (CMO)<br/>Takes 72.67% of revenue"]
        PF["Purpose Foundation (501c3)<br/>2 felons, all positions"]
        SAL["Personal salary<br/>$150K+ base"]
    end

    subgraph POL["🏛️ POLITICAL CONNECTIONS"]
        PAC1["Bank on Banks PAC<br/>Holland = Treasurer"]
        PAC2["Bank on Wayne Co. PAC<br/>Banks = Treasurer"]
        OFA["OFA Michigan<br/>Dark money mailers"]
        CBC["CBC Week hosting<br/>4 years"]
    end

    subgraph JUD["⚖️ JUDICIAL CONNECTIONS"]
        MILLER["Judge Miller<br/>Board Chair"]
        SABREE["Judge Aliyah Sabree<br/>MSU Law classmate"]
        YANCEY["Judge Yancey<br/>Paid $383.82"]
        D_PERK["Judge David Perkins<br/>Family donations"]
    end

    HOLLAND["<b>Joseph Holland Jr.</b><br/>Felon · MDOC #443789<br/>Foundation Sec+Treas · PAC Treas<br/>Living Trust · OFA Officer"]

    BANKS --> PCA & MAC & BSC & EVT
    PCA & MAC --> TPG
    TPG --> SAL
    BANKS --> PF
    BANKS --> PAC1 & PAC2 & OFA & CBC
    MILLER & SABREE & YANCEY & D_PERK -.->|"documented connection"| BANKS
    BANKS --- HOLLAND

    classDef person fill:#991b1b,stroke:#ef4444,color:#fecaca
    classDef revenue fill:#1e3a5f,stroke:#60a5fa,color:#bfdbfe
    classDef extract fill:#854d0e,stroke:#facc15,color:#fef9c3
    classDef political fill:#14532d,stroke:#4ade80,color:#bbf7d0
    classDef judge fill:#312e81,stroke:#818cf8,color:#c7d2fe

    class BANKS,HOLLAND person
    class PCA,MAC,BSC,EVT revenue
    class TPG,PF,SAL extract
    class PAC1,PAC2,OFA,CBC political
    class MILLER,SABREE,YANCEY,D_PERK judge
{% end %}

See: [Enterprise Principals](/network/actors/), [Entity Profiles](/network/entities/), [Judicial Cover](/network/judges/).

## Revenue Streams

| Stream | Entity | Annual Value | Source |
|--------|--------|-------------|--------|
| Charter school A | {{ entity(key="macdowell") }} | **{{ entity(key="macdowell", field="revenue") }}** state aid | School budget transparency |
| Charter school B | {{ entity(key="pca") }} | State aid (finances pending) | DPSCD authorization |
| Consulting | {{ entity(key="banks_strategy") }} | Judge campaign payments | TransparencyUSA |
| Events | [CBC Week parties](/analysis/cbc-events/) | $50K–$150K est. (4 years) | Eventbrite |

## Extraction Mechanism

| Layer | Entity | Mechanism |
|-------|--------|-----------|
| CMO shell | {{ entity(key="purpose_group") }} | Takes **{{ entity(key="macdowell", field="extraction_pct") }}** of school revenue; sole member: Banks |
| Management gap | Purpose Group LLC | **{{ entity(key="macdowell", field="unaccounted") }}** unaccounted "management fee" |
| Private foundation | {{ entity(key="purpose_foundation") }} | 2 felons hold all 4 officer positions |
| Personal extraction | {{ actor(key="banks") }} | $150K base salary + control of all entities |

## Political Connections {{ status(level="record") }}

| Entity | Role | Detail |
|--------|------|--------|
| Bank on Banks for Michigan PAC | Treasurer | {{ actor(key="holland") }} — convicted drug trafficker |
| Bank on Wayne County PAC | Treasurer | {{ actor(key="banks") }} |
| Opportunities For All Michigan | Officer | Holland; dark money mailers |
| [CBC Week events](/analysis/cbc-events/) | Host | 4 years of Congressional Black Caucus networking |

See: [Political Action Committees](/network/entities/political-action-committees/), [Political Enablers](/network/political/).

## Judicial Connections {{ status(level="record") }}

Nine judges have documented connections to the enterprise. Whether these connections required recusal or constitute a pattern is submitted for agency determination.

| Judge | Court | Documented Connection | Status |
|-------|-------|----------------------|--------|
| {{ actor(key="miller") }} | Wayne 3rd Circuit | PCA Board Chair {{ status(level="record") }} | Active — ballot Nov 2026 |
| {{ actor(key="sabree") }} | Wayne 3rd Circuit | MSU Law classmate (~2010); father = Treasurer {{ status(level="record") }} | Active |
| {{ actor(key="yancey") }} | 36th District | Paid **$383.82** to Banks Strategy — sole expenditure {{ status(level="record") }} | Active |
| {{ actor(key="perkins_david") }} | Wayne Probate | Family donations to network campaigns {{ status(level="record") }} | Active |

See: [Institutional Capture](/analysis/institutional-capture/).

{% mermaid(title="RICO Predicate Acts — How Each Crime Feeds the Enterprise") %}
graph TB
    ENT["<b>Banks Enterprise</b><br/>14+ years · $4.9M+/yr"]

    subgraph FRAUD["📄 Fraud Predicates"]
        MAIL["<b>Mail Fraud</b><br/>§1341<br/>Fake J.D. on school<br/>websites + conference bios"]
        WIRE["<b>Wire Fraud</b><br/>§1343<br/>False credentials on<br/>DOE + grant applications"]
    end

    subgraph MONEY["💰 Financial Predicates"]
        LAUNDER["<b>Money Laundering</b><br/>§1956<br/>$4.28M through LLC shell<br/>$348K unaccounted gap"]
        BANK_FR["<b>Financial Fraud</b><br/>§1344<br/>3 bankruptcies<br/>PAC irregularities"]
    end

    subgraph CORRUPT["⚖️ Potential Corruption Predicates"]
        BRIBE["<b>§201 Question</b><br/>Campaign payments from<br/>judges to enterprise LLC"]
        OBSTRUCT["<b>§1503 Question</b><br/>Connected judges<br/>presiding without recusal"]
    end

    MAIL -->|"credential claims<br/>on school filings"| ENT
    WIRE -->|"federal reporting<br/>with disputed credentials"| ENT
    LAUNDER -->|"LLC extraction<br/>72.67% of revenue"| ENT
    BANK_FR -->|"financial opacity<br/>$348K unaccounted"| ENT
    BRIBE -->|"campaign payments<br/>$383.82 documented"| ENT
    OBSTRUCT -->|"connections documented<br/>recusal not filed"| ENT

    ENT -->|"revenue"| LAUNDER
    ENT -->|"authority"| MAIL
    ENT -->|"payments"| BRIBE

    classDef enterprise fill:#991b1b,stroke:#ef4444,color:#fecaca
    classDef fraud fill:#713f12,stroke:#f59e0b,color:#fef3c7
    classDef money fill:#14532d,stroke:#4ade80,color:#bbf7d0
    classDef corrupt fill:#312e81,stroke:#818cf8,color:#c7d2fe

    class ENT enterprise
    class MAIL,WIRE fraud
    class LAUNDER,BANK_FR money
    class BRIBE,OBSTRUCT corrupt
{% end %}

Each predicate act reinforces the others. Credential fraud enables school authorization → authorization enables revenue → revenue enables campaign payments → payments enable judicial protection → judicial protection prevents accountability → the cycle continues.

## Potential Predicate Acts (18 U.S.C. § 1961) {{ status(level="allegation", note="Submitted for federal determination Sep 22, 2026") }}

The following are submitted as potential predicates for agency evaluation. Whether each constitutes a federal offense is a determination for prosecutors and courts, not this publication.

| # | Potential Act | Statute | Documented Evidence | Epistemic Status |
|---|-------------|---------|---------------------|-----------------|
| 1 | **Mail Fraud** | § 1341 | False J.D. credential on school websites, bios, published materials {{ status(level="corroborated") }} | Credential claim: {{ status(level="record") }}. Whether it constitutes fraud: {{ status(level="allegation") }} |
| 2 | **Wire Fraud** | § 1343 | False credential on DOE applications, grant filings {{ status(level="inference") }} | Application filings: {{ status(level="record") }}. Intent: {{ status(level="allegation") }} |
| 3 | **Money Laundering** | § 1956 | $4.28M/yr through Purpose Group LLC; $348K unaccounted {{ status(level="record") }} | Financial flow: {{ status(level="corroborated") }}. Laundering characterization: {{ status(level="allegation") }} |
| 4 | **Financial Fraud** | § 1344 | Three bankruptcies; PAC irregularities {{ status(level="record") }} | Records: {{ status(level="record") }}. Pattern: {{ status(level="inference") }} |
| 5 | **Bribery concern** | § 201 | Judge campaign → Banks Strategy LLC ($383.82) {{ status(level="record") }} | Payment: {{ status(level="record") }}. Bribery characterization: {{ status(level="allegation") }} |
| 6 | **Recusal question** | § 1503 | Connected judges presiding over enterprise-related cases {{ status(level="inference") }} | Connections: {{ status(level="record") }}. Obstruction characterization: {{ status(level="allegation") }} |

## The Continuity Test

The enterprise has operated continuously for **14+ years** (2010–present):

| Phase | Period | Activity |
|-------|--------|----------|
| **Street** | Pre-2005 | BMF drug distribution network (father {{ fact(registry="bmf", field="father") }} = Defendant #22) |
| **Political** | 2014–2016 | MI State House using fake credentials |
| **Educational** | 2017–present | Charter school superintendent using fake credentials |
| **Financial** | 2017–present | CMO extraction of public school funds |
| **Nonprofit** | 2024–present | [Purpose Foundation](/network/entities/purpose-foundation/) — private foundation, 2 felon officers |

See: [Timeline](/timeline/) for chronological documentation.

## Independent Reporting

### Primary Analytical Reference
- {{ source(key="clutch_justice", path="/2026/09/13/macdowell-preparatory-academy-academic-financial-record/", label="MacDowell: $15,217/student, 3% math proficiency") }} — Documents financial extraction pattern: 73% to Purpose Group LLC, 3% math proficiency, gift-card-labeled payments

### Secondary Sources
- {{ source(key="freep", path="/story/news/columnists/ml-elrick/2023/08/27/detroit-school-former-felon-as-principal/70669868007/", label="Back to Fool — Brian Banks") }} — Original investigation into Banks' criminal history

## Verify (Source Data)

| Claim | Verify At |
|-------|----------|
| Criminal record | MI ICHAT — SID **{{ fact(registry="actors", key="banks", field="sid") }}** |
| No bar admission | State Bar of MI — {{ source(key="state_bar") }} |
| Entity records | LARA — IDs **803294855**, **803295082**, **802070120** |
| School finances | [macdowellprep.com](https://macdowellprep.com) (budget transparency) |
| Campaign payments | [transparencyusa.org](https://transparencyusa.org) |
| Bankruptcies | PACER — Cases 97-45020, 98-49073, 06-55281 |
| BMF connection | PACER — Case 2:05-cr-80955 |
| Judicial connections | MI campaign finance — {{ source(key="cfrs") }} |
| PCA Board | [purposecharteracademy.com/boardofdirectors](https://www.purposecharteracademy.com/boardofdirectors) |

<aside class="convergence-box" aria-label="Cross-references">
<strong class="convergence-title">Same system, other lenses:</strong>
<ul class="convergence-list">
<li><a href="/network/">🕸️ Topology</a> — Enterprise principals, judges, and entities form the core cluster in the 87-node network graph</li>
<li><a href="/analysis/anderson-localization/">⚛️ Lattice</a> — Judicial capture creates disorder that localizes cases, the mechanism protecting the enterprise</li>
<li><a href="/timeline/">📅 Chronology</a> — 14 years of predicate acts visible as a continuous timeline from 2010 to 2026</li>
<li><a href="/analysis/funding-flow/">💰 Money</a> — $4.9M/yr extraction flow, the financial substrate of every predicate act</li>
<li><a href="/analysis/institutional-capture-graph/">🏛️ Capture</a> — Each nexus type corresponds to a class of predicate acts</li>
</ul>
</aside>

---

*All sources are public records.*
