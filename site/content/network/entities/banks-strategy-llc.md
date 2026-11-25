+++
title = "Banks Strategy & Consultants LLC — Judge Payments"
description = "Banks Strategy LLC receives campaign payments from sitting judges. Lost good standing with LARA. Batch-filed 3 overdue annual reports in one day."
weight = 9
date = 2026-09-20
updated = 2026-09-25

[extra]
keywords = "Banks Strategy Consultants, Banks Strategy LLC, judge campaign payments, Yancey Banks Strategy, Banks Strategy LLC judge payments, Banks Strategy campaign finance, Banks Strategy Cylenthia Miller Tenisha Yancey, Banks Strategy and Consultants LLC LARA 802070120, Banks Strategy LLC Brian Banks sole member, Banks Strategy LLC judge campaign payments sitting judges, Banks Strategy LLC $383.82 Tenisha Yancey, Banks Strategy LLC chronic administrative neglect, Banks Strategy LLC lost good standing batch filed, Banks Strategy consultant convicted felon 9 convictions"

[taxonomies]
actors = ["Brian Banks", "Judge Tenisha Yancey"]
entities = ["Banks Strategy LLC", "Purpose Charter Academy", "MacDowell Preparatory Academy", "The Purpose Group LLC"]
courts = ["36th District Court"]
connections = ["campaign finance", "business entity"]+++

## Entity Overview

| Field | Value |
|-------|-------|
| Name | Banks Strategy & Consultants LLC |
| LARA ID | 802070120 |
| Filed | February 25, 2017 |
| Controller | Brian Roderick Banks (sole member) |

Banks Strategy & Consultants LLC is Banks' personal consulting firm — the entity that receives payments from sitting judges' campaigns.

## Chronic Administrative Neglect {{ confidence(level="documented") }}

The entity's LARA filing history shows a pattern of neglect:

| Event | Detail |
|-------|--------|
| Good standing | **Lost** |
| Apr 10, 2024 | **3 overdue annual statements batch-filed on one day** |

Rather than maintaining compliance, Banks allowed the entity to fall out of good standing and then filed multiple overdue statements simultaneously.

## Judge Campaign Payments {{ confidence(level="verified") }}

| Judge | Amount | Year | Source |
|-------|--------|------|--------|
| {{ actor(key="yancey") }} | **$383.82** | 2024 | TransparencyUSA |

This was Yancey's **sole contribution and sole expenditure** for the cycle — she contributed $383.82 to her own campaign, then paid 100% of it to Banks' LLC. A sitting 36th District Court judge's campaign paid a convicted felon's consulting firm while that felon operates charter schools in the same jurisdiction.

## Connection to Banks Network

{% mermaid(title="Banks Strategy LLC — Money Flow from Judge to Felon") %}
graph LR
    YANCEY["Judge Yancey<br/>36th District"] -->|"$383.82<br/>sole expenditure"| BSC["Banks Strategy<br/>& Consultants LLC"]
    BSC -->|"sole member"| BANKS["Brian Banks<br/>9 convictions"]
    BANKS -->|"superintendent"| PCA["Purpose Charter<br/>Academy"]
    BANKS -->|"superintendent"| MAC["MacDowell Prep<br/>Academy"]
    PCA -.->|"cases filed in"| COURT["36th District<br/>Court"]
    MAC -.->|"cases filed in"| COURT
    YANCEY -.->|"sits on"| COURT

    style YANCEY fill:#312e81,stroke:#818cf8,color:#c7d2fe
    style BSC fill:#713f12,stroke:#f59e0b,color:#fef3c7
    style BANKS fill:#991b1b,stroke:#ef4444,color:#fecaca
    style PCA fill:#1e3a5f,stroke:#60a5fa,color:#bfdbfe
    style MAC fill:#1e3a5f,stroke:#60a5fa,color:#bfdbfe
    style COURT fill:#44403c,stroke:#a8a29e,color:#e7e5e4
{% end %}

## Verify

- {{ source(key="lara_cofs", query="Entity 802070120") }}
- Campaign finance: [transparencyusa.org](https://transparencyusa.org) — search "Yancey" + "Banks Strategy"

---

*All sources are public records. Full documentation in the [git repository](https://git.primals.eco/publicRecord/detroit).*
