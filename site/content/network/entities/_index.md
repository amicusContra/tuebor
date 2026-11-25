+++
title = "Entity Profiles"
description = "9+ entities controlled by Brian Banks — charter schools, management companies, nonprofits, PACs, and churches."
weight = 4
sort_by = "weight"

[extra]
keywords = "Brian Banks entities, Detroit charter school shell companies, Purpose Group LLC, Purpose Foundation, Banks Strategy LLC, purpose charter academy entity map, Brian Banks 9 entities Grosse Pointe Woods, Brian Banks 1968 Severn Road entities all same address, Purpose Charter Academy Purpose Group LLC Purpose Foundation, Banks Strategy Consultants judge payments, Anchor Rock Foundation Cylenthia Miller dissolved, Serenity Guardianship UPL unauthorized practice law, City Hill Church Sun Community Development Banks, charter school management company convicted felon sole member, Brian Banks shell entity network Grosse Pointe Woods affluent suburb"
+++

Banks controls a web of entities, all registered to **1968 Severn Road, Grosse Pointe Woods, MI 48236** — his personal residence in an affluent suburb, while his schools serve Detroit's poorest children.

{% mermaid(title="Entity Shell Structure — Two Felons Control Everything") %}
graph TB
    subgraph SCHOOLS["🏫 Revenue Sources"]
        PCA["<b>Purpose Charter Academy</b><br/>K-8 · DPSCD authorized"]
        MAC["<b>MacDowell Prep</b><br/>K-8 · $4.9M state aid"]
    end

    subgraph EXTRACTION["🏦 Extraction Layer"]
        LLC["<b>Purpose Group LLC</b><br/>CMO · Takes 72.67%<br/>Sole member: Banks"]
        GAP["$348,489<br/>unaccounted<br/>management gap"]
    end

    subgraph NONPROFITS["🏛️ Nonprofits"]
        FOUND["<b>Purpose Foundation</b><br/>501c3 · 2 felons all positions"]
        ANCHOR["<b>Anchor Rock Foundation</b><br/>Dissolved · Miller was Board Chair"]
    end

    subgraph PACS["🗳️ Political Entities"]
        BOB["Bank on Banks PAC<br/>Holland = Treasurer"]
        BWPAC["Bank on Wayne County PAC<br/>Banks = Treasurer"]
        OFA["OFA Michigan<br/>Dark money · Holland PO Box"]
    end

    subgraph PROFESSIONAL["📋 Professional Entities"]
        BSC["<b>Banks Strategy LLC</b><br/>Judge campaign payments"]
        SERENITY["Serenity Guardianship<br/>Dissolved · UPL red flag"]
        INNER["Inner Link Graphics<br/>$98K+ campaign vendor"]
    end

    subgraph PRINCIPALS["🔴 Enterprise Principals"]
        BANKS["<b>Brian Banks</b><br/>President · Director · Superintendent<br/>Sole Member of LLC"]
        HOLLAND["<b>Joseph Holland Jr</b><br/>Secretary · Treasurer<br/>of every financial entity"]
    end

    PCA -->|"management fee"| LLC
    MAC -->|"72.67%"| LLC
    LLC --> GAP
    LLC -->|"salary"| BANKS
    BANKS -->|"president + director"| FOUND
    HOLLAND -->|"secretary + treasurer"| FOUND
    HOLLAND -->|"PAC treasurer"| BOB
    BANKS -->|"PAC treasurer"| BWPAC
    HOLLAND -->|"officer"| OFA
    BANKS -->|"sole member"| BSC
    BSC -.->|"judge payments"| INNER

    classDef school fill:#1e3a5f,stroke:#60a5fa,color:#bfdbfe
    classDef money fill:#713f12,stroke:#f59e0b,color:#fef3c7
    classDef nonprofit fill:#14532d,stroke:#4ade80,color:#bbf7d0
    classDef pac fill:#312e81,stroke:#818cf8,color:#c7d2fe
    classDef prof fill:#44403c,stroke:#a8a29e,color:#e7e5e4
    classDef principal fill:#991b1b,stroke:#ef4444,color:#fecaca
    classDef gap fill:#92400e,stroke:#f59e0b,color:#fef3c7

    class PCA,MAC school
    class LLC money
    class GAP gap
    class FOUND,ANCHOR nonprofit
    class BOB,BWPAC,OFA pac
    class BSC,SERENITY,INNER prof
    class BANKS,HOLLAND principal
{% end %}

**Every entity registers to the same Grosse Pointe Woods address.** The same two felons hold every position — no independent governance, no independent financial oversight.

## The Incubator

Beyond the Banks-controlled entities, the network connects to external institutions that provided the social infrastructure:

| Entity | Role in Network |
|--------|----------------|
| **[Black Caucus Foundation of Michigan](/network/entities/black-caucus-foundation/)** | **"Reunion of Felons"** — where Banks met the Stallworths. Board: 4 convicted felons. Mission: "decrease drug use among youth." Managed by Keith Stallworth (federal money laundering conviction). |
| **[Foley & Mansfield PLLP](/network/professional-enablers/meihn-gregory/)** | National law firm retained by Wells-Stallworth within 14 minutes to kill MDE investigation |
