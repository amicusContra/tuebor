+++
title = "The Network"
description = "The Banks Network — documented connections spanning charter schools, courts, political offices, and nonprofit entities in Detroit."
sort_by = "weight"

[extra]
keywords = "Brian Banks network map, Detroit charter school racketeering network, Wayne County judges Brian Banks, Purpose Charter Academy connections, MacDowell Preparatory Academy board, Banks enterprise diagram"
+++

{{ lens(active="topology") }}

This is not one bad actor. It is a **network** — convicted felons, judges, attorneys, and institutions connected through boards, campaigns, property, and family ties.

<script src="/js/network-data.js"></script>
<div id="network-graph" style="margin: 1.5rem 0;"></div>
<script src="/js/network-graph.js"></script>

<p style="text-align:center;font-size:0.85rem;opacity:0.6;margin-top:-0.5rem;">
Hover any node to trace connections. Click to navigate to that person's page. Toggle nexus types, ownership hulls, cycles, and flow types.<br>
<a href="/analysis/institutional-capture-graph/">Full analysis with four-nexus breakdown →</a>
</p>

<!-- geo-extraction.js removed Wave 171 — redundant with petalTongue geo flow heatmap in detroit-pt.js panels below -->
<div id="pt-geo-flow" style="margin: 2rem 0;"></div>

---

{% mermaid(title="Network Overview — Self-Dealing & Cross-Protection") %}
graph TB
    subgraph TIER1["🔴 Tier 1 — Enterprise Principals"]
        BANKS["<b>Brian Banks</b><br/>9 convictions · fake J.D.<br/>Superintendent of both schools"]
        HOLLAND["<b>Joseph Holland Jr</b><br/>Drug conviction · MDOC #443789<br/>Banks' romantic partner · all financial roles"]
    end

    subgraph REVENUE["💰 Revenue Streams"]
        PCA["Purpose Charter Academy<br/>K-8 · DPSCD authorized"]
        MAC["MacDowell Prep Academy<br/>K-8 · $4.9M state aid"]
        STATE(("Michigan<br/>Per-Pupil<br/>Funding"))
    end

    subgraph EXTRACTION["🏦 Extraction Layer"]
        LLC["Purpose Group LLC<br/>Takes 72.67% of revenue"]
        FOUNDATION["Purpose Foundation<br/>501c3 · 2 felons all positions"]
        BSC["Banks Strategy LLC<br/>Judge campaign payments"]
    end

    subgraph JUDICIAL["⚖️ Tier 2 — Judicial Cover (9 Judges)"]
        MILLER["<b>Judge Miller</b><br/>3rd Circuit · Board Chair"]
        YANCEY["<b>Judge Yancey</b><br/>36th Dist · Board Chair"]
        A_SABREE["<b>Judge A. Sabree</b><br/>36th Dist · Metro Property"]
        AL_SABREE["<b>Judge Al. Sabree</b><br/>3rd Circuit Family"]
        S_PERKINS["<b>Judge S. Perkins</b><br/>36th Dist"]
        RAMSEY["<b>Judge Ramsey</b><br/>3rd Circuit Criminal"]
        EVANS_J["<b>Judge Evans</b><br/>Retired · 21yr mentor"]
        MORRIS["<b>Judge Morris</b><br/>Retired · book foreword"]
        D_PERKINS["<b>Judge D. Perkins</b><br/>Probate"]
    end

    subgraph STALLWORTH["🏛️ Tier 3A — Stallworth Dynasty"]
        NWS["Nicole Wells-Stallworth<br/>MacDowell Board President<br/>Killed MDE investigation"]
        KEITH_S["Keith Stallworth<br/>⚠️ Federal money laundering<br/>BCF Managing Director"]
        MISHA["Misha Stallworth West<br/>DPSCD Board Member"]
        BCF["Black Caucus Foundation<br/>Reunion of Felons"]
    end

    subgraph POLITICAL["🏛️ Tier 3B — Political Cover"]
        GAY["Sherry Gay-Dagnogo<br/>Authorized charters · Ombudsman"]
        E_SABREE["Eric Sabree<br/>County Treasurer · FBI-probed"]
        MCKINNEY["Billy McKinney<br/>Campaign payments"]
    end

    subgraph PROFESSIONAL["📋 Tier 4 — Professional Enablers"]
        TODD["Todd Perkins<br/>Banks' attorney"]
        MEIHN["Gregory Meihn<br/>Board attorney · weekly meetings<br/>'rare find' · missed §5.2"]
    end

    subgraph TCR["🩺 Tier 5 — TCR 22-12 Vouchers"]
        VITTI["Nicolai Vitti<br/>DPSCD Supt · mentor<br/>authorized PCA charter"]
        SHULMAN["Terrence Shulman<br/>Social worker · not MD<br/>'not dishonest as character'"]
        LENO["Michele Leno<br/>Psychologist · 13 sessions<br/>'person of integrity'"]
    end

    STATE -->|"per-pupil funding"| PCA
    STATE -->|"per-pupil funding"| MAC
    PCA -->|"management fee"| LLC
    MAC -->|"72.67%"| LLC
    LLC -->|"salary + control"| BANKS
    BANKS -->|"superintendent"| PCA
    BANKS -->|"superintendent"| MAC
    BANKS -->|"president + director"| FOUNDATION
    HOLLAND -->|"secretary + treasurer"| FOUNDATION
    HOLLAND -->|"PAC treasurer"| BSC
    BSC -.->|"$383.82"| YANCEY
    MILLER -.->|"Board Chair"| PCA
    YANCEY -.->|"Board Chair"| MAC
    MILLER -.->|"Baker College colleague"| BANKS
    AL_SABREE -.->|"MSU Law 2010"| BANKS
    TODD -->|"attorney"| BANKS
    TODD -.->|"brother"| S_PERKINS
    MEIHN -->|"board attorney<br/>weekly meetings"| BANKS
    MEIHN -.->|"retained 14 min"| NWS
    MEIHN -.->|"missed §5.2"| LLC
    VITTI -->|"mentor"| BANKS
    VITTI -->|"authorized charter"| PCA
    VITTI -.->|"3% math on watch"| MAC
    SHULMAN -.->|"6+12 sessions<br/>'not dishonest'"| BANKS
    LENO -.->|"13 sessions<br/>'integrity'"| BANKS
    E_SABREE -.->|"father"| A_SABREE
    E_SABREE -.->|"father"| AL_SABREE
    E_SABREE -.->|"endorser"| MILLER
    NWS -->|"Board President<br/>hired Banks"| MAC
    NWS -.->|"killed investigation"| BANKS
    KEITH_S -->|"Managing Director"| BCF
    BANKS -.->|"board member"| BCF
    MISHA -->|"authorizes charter"| MAC
    NWS -.->|"$1,250+ donated"| BANKS

    GAY -.->|"authorized charters"| PCA
    GAY -.->|"CBC honoree"| BANKS

    classDef stallworth fill:#713f12,stroke:#f59e0b,color:#fef3c7
    classDef tier1 fill:#991b1b,stroke:#ef4444,color:#fecaca
    classDef revenue fill:#1e3a5f,stroke:#60a5fa,color:#bfdbfe
    classDef extraction fill:#713f12,stroke:#f59e0b,color:#fef3c7
    classDef judicial fill:#312e81,stroke:#818cf8,color:#c7d2fe
    classDef political fill:#14532d,stroke:#4ade80,color:#bbf7d0
    classDef professional fill:#44403c,stroke:#a8a29e,color:#e7e5e4
    classDef state fill:#0f766e,stroke:#2dd4bf,color:#ccfbf1

    class BANKS,HOLLAND tier1
    class PCA,MAC revenue
    class STATE state
    class LLC,FOUNDATION,BSC extraction
    class MILLER,YANCEY,A_SABREE,AL_SABREE,S_PERKINS,RAMSEY,EVANS_J,MORRIS,D_PERKINS judicial
    class NWS,KEITH_S,MISHA,BCF stallworth
    class GAY,E_SABREE,MCKINNEY political
    class TODD,MEIHN professional
    class VITTI,SHULMAN,LENO professional
{% end %}

## Self-Dealing Feedback Loop

{% mermaid(title="Self-Dealing Loop — How Public Money Becomes Private Power") %}
graph LR
    A(("🏫 State of Michigan<br/>Per-Pupil Funding")) -->|"$4.9M+/yr"| B["PCA + MacDowell<br/>(charter schools)"]
    B -->|"72.67%"| C["Purpose Group LLC<br/>(Banks = sole member)"]
    C -->|"salary + expenses"| D["Brian Banks<br/>(9 convictions)"]
    D -->|"consulting payments"| E["Banks Strategy LLC"]
    E -->|"$383.82 to Yancey<br/>$8K+ Inner Link"| F["Judges &<br/>Campaign Vendors"]
    F -->|"board seats +<br/>favorable rulings"| B
    D -->|"CBC events +<br/>campaign donations"| G["Political<br/>Allies"]
    G -->|"charter<br/>authorization"| B

    style A fill:#0f766e,stroke:#2dd4bf,color:#ccfbf1
    style B fill:#1e3a5f,stroke:#60a5fa,color:#bfdbfe
    style C fill:#713f12,stroke:#f59e0b,color:#fef3c7
    style D fill:#991b1b,stroke:#ef4444,color:#fecaca
    style E fill:#713f12,stroke:#f59e0b,color:#fef3c7
    style F fill:#312e81,stroke:#818cf8,color:#c7d2fe
    style G fill:#14532d,stroke:#4ade80,color:#bbf7d0
{% end %}

The loop closes: public dollars → school → LLC → Banks → campaign payments → judges + politicians → charter authorization → more public dollars. No external oversight breaks the circle because each regulator sees only one segment.

## Four Dynasties — One Machine

This is not one corrupt individual. It is **four interlocking political dynasties** that converge on one charter school enterprise:

| Dynasty | Federal Record | Role in Machine |
|---------|----------------|----------------|
| **[Banks/Flenory (BMF)](/books/black-mafia-family/)** | OD Banks: BMF Defendant #22 | Blood lineage. Extraction playbook. |
| **[Stallworth](/network/political/stallworth-keith/)** | Keith: $20K gang money laundering | BCF incubation → MacDowell board → DPSCD authorization |
| **[Sabree](/network/political/eric-sabree/)** | FBI-probed, Bowles class action | Judicial capture — 2 children on the bench |
| **[Kilpatrick](/network/political/kilpatrick-dynasty/)** | Kwame: 24 RICO felonies, pardoned | PR (Dumas), dark money (Daniels), charter auth (Gay-Dagnogo) |

**[→ Full Four Dynasties Analysis](/network/dynasties/)**

## The Stallworth Dynasty — How a Family Inherited the Trade

{% mermaid(title="Stallworth Dynasty — From Drug Money to Charter Schools") %}
graph TB
    subgraph DYNASTY["🏛️ The Stallworth Dynasty"]
        ALMA["<b>Alma Stallworth</b><br/>State Rep (21 years)<br/>Founded BCF"]
        KEITH["<b>Keith 'K.B.' Stallworth</b><br/>State Rep → Wayne Co. Comm.<br/>⚠️ 2003 FEDERAL GUILTY PLEA<br/>Laundered $20K for a gang<br/>through Detroit strip club"]
        TOMMY["<b>Thomas Stallworth III</b><br/>State Rep (2011-2015)<br/>Chair, MI Black Caucus"]
        NICOLE["<b>Nicole Wells-Stallworth</b><br/>MacDowell Board President<br/>CEO, The Children's Center"]
        MISHA["<b>Misha Stallworth West</b><br/>DPSCD Board Member"]
    end

    subgraph BCF["🔴 Black Caucus Foundation — Reunion of Felons"]
        BCF_ORG["<b>BCF Michigan</b><br/>Mission: 'decrease drug use among youth'<br/>Managed by a federal money launderer"]
        BANKS_BCF["Brian Banks<br/>Board Member<br/>9 convictions"]
        SMITH["Virgil Smith<br/>Board Member<br/>Felony assault"]
        JOHNSON["Bert Johnson<br/>Board Member<br/>Federal bribery"]
    end

    subgraph SCHOOLS["🏫 The Payoff"]
        MAC["MacDowell Prep<br/>3% math · $4.9M state aid"]
        DPSCD["DPSCD<br/>Charter Authorizer"]
    end

    ALMA -->|"founded"| BCF_ORG
    ALMA -->|"son"| KEITH
    ALMA -->|"son"| TOMMY
    KEITH -->|"Managing Director"| BCF_ORG
    TOMMY -->|"Director"| BCF_ORG
    TOMMY -->|"married"| NICOLE
    TOMMY -->|"father"| MISHA

    BANKS_BCF -->|"board member"| BCF_ORG
    SMITH -->|"board member"| BCF_ORG
    JOHNSON -->|"board member"| BCF_ORG

    NICOLE -->|"Board President<br/>hired Banks"| MAC
    MISHA -->|"Board Member<br/>authorizes charter"| DPSCD
    DPSCD -->|"authorizes"| MAC
    BANKS_BCF -->|"superintendent"| MAC

    classDef dynasty fill:#713f12,stroke:#f59e0b,color:#fef3c7
    classDef felon fill:#991b1b,stroke:#ef4444,color:#fecaca
    classDef bcf fill:#7f1d1d,stroke:#dc2626,color:#fecaca
    classDef school fill:#1e3a5f,stroke:#60a5fa,color:#bfdbfe
    classDef auth fill:#14532d,stroke:#4ade80,color:#bbf7d0

    class ALMA,TOMMY,NICOLE,MISHA dynasty
    class KEITH,BANKS_BCF,SMITH,JOHNSON felon
    class BCF_ORG bcf
    class MAC school
    class DPSCD auth
{% end %}

## Hiding Behind Racial Solidarity

The BCF's institutional armor was racial solidarity. The Black Caucus brand carried the weight of decades of legitimate civil rights work — work Alma Stallworth contributed to over 21 years.

But when the foundation board becomes a **reunion of felons** — Brian Banks (9 convictions), Keith Stallworth (federal money laundering), Virgil Smith (felony assault), Bert Johnson (federal bribery) — the armor becomes a weapon against the very community it claims to serve.

This is the same pattern at every tier: Judge [Miller](/network/judges/cylenthia-miller/) and [Aliyah Sabree](/network/judges/aliyah-sabree/) at MSU Law — real solidarity weaponized to shield a convicted felon running schools at 3% math proficiency. The children in those classrooms are overwhelmingly Black. 97% of them cannot do grade-level math. The solidarity that protects this outcome is not solidarity with them. It is solidarity among the adults who benefit from their silence.

Keith Stallworth's $20,000 was not an abstraction. The DOJ confirmed it came from "illegal activities" — laundered through a strip club that exploited women in the same community MacDowell now pretends to serve. The exploitation didn't end. It professionalized.

The son is not responsible for the sins of the father. But when the son inherits the trade — when the family infrastructure built on drug money becomes the pipeline that installs convicted felons in charge of children — the inheritance is the indictment.

## Tiers

- **[Enterprise Principals](/network/actors/)** — Banks and Holland
- **[Judicial Cover](/network/judges/)** — 9 judges across 4 courts
- **[Political Dynasties](/network/political/)** — Stallworth dynasty, Gay-Dagnogo, Sabree dynasty, McKinney
- **[Entities](/network/entities/)** — 9+ LLCs, nonprofits, PACs, schools, and the BCF
- **[Institutional Actors](/network/institutional/)** — MDE officials, board presidents, and the cover-up chain
- **[Professional Enablers](/network/professional-enablers/)** — Attorneys who organized the shell structure
- **[Pattern Analysis](/analysis/)** — RICO pattern, institutional capture, allied cases, CBC events

<aside class="convergence-box" aria-label="Cross-references">
<strong class="convergence-title">Same system, other lenses:</strong>
<ul class="convergence-list">
<li><a href="/analysis/anderson-localization/">⚛️ Lattice</a> — Courts appear as lattice sites, judges as disorder potential trapping cases</li>
<li><a href="/timeline/">📅 Chronology</a> — Every edge has a date, the network assembles over 14 years in the timeline</li>
<li><a href="/analysis/funding-flow/">💰 Money</a> — Financial edges show $4.9M/yr flowing through the LLC extraction layer</li>
<li><a href="/analysis/rico-pattern/">⚖️ Legal</a> — The topology IS the enterprise structure, nodes and edges map to RICO elements</li>
<li><a href="/analysis/institutional-capture-graph/">🏛️ Capture</a> — Community detection reveals the 4 nexus types as natural graph clusters</li>
</ul>
</aside>

---

*Every connection in this network is documented from public records. See [Verify Everything](/validate/) for source links.*

---

<div id="pt-panels"></div>
<script src="/js/pt-bridge-core.js"></script>
<script src="/js/detroit-pt.js"></script>
