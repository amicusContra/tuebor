+++
title = "Serenity Guardianship Services — UPL Red Flag"
description = "Serenity Guardianship Services — dissolved entity run by convicted felon Brian Banks. Non-attorney running guardianship services = textbook UPL."
weight = 11
date = 2026-09-20
updated = 2026-09-25

[extra]
keywords = "Serenity Guardianship Services, Serenity Guardianship Brian Banks, Serenity Guardianship UPL, unauthorized practice of law Detroit, Brian Banks guardianship, Wayne County Probate guardianship, Serenity Guardianship Services LARA 802290962 dissolved, Serenity Guardianship non-attorney Brian Banks guardianship services, Serenity Guardianship textbook unauthorized practice of law, Brian Banks 9 convictions running guardianship services, Wayne County Probate David Perkins Serenity jurisdiction"

[taxonomies]
actors = ["Brian Banks", "Judge David Perkins", "Judge Tenisha Yancey", "Judge Adam Sabree", "Judge Sean Perkins", "Joseph Holland"]
entities = ["Serenity Guardianship Services", "Purpose Charter Academy", "MacDowell Preparatory Academy", "The Purpose Group LLC"]
courts = ["Wayne County Probate Court", "36th District Court"]
connections = ["business entity", "credential fraud", "RICO predicate"]+++

## Entity Overview

| Field | Value |
|-------|-------|
| Name | Serenity Guardianship Services, Inc. |
| LARA ID | 802290962 |
| Type | Guardianship services |
| Status | **DISSOLVED** |
| Banks' Role | Agent |

Serenity Guardianship Services was a guardianship company operated by {{ actor(key="banks") }} — a **non-attorney** with **9 felony convictions** and no bar admission.

## Unauthorized Practice of Law {{ confidence(level="documented") }} (UPL)

| Factor | Detail |
|--------|--------|
| Operator | Brian Banks — never admitted to any bar ([State Bar verification](/validate/)) |
| Service type | Guardianship services — legal proceedings requiring court representation |
| Classification | Textbook **Unauthorized Practice of Law (UPL)** |
| Credential fraud | Banks claims "J.D." on school materials; no bar admission confirmed |

Guardianship involves court-supervised management of incapacitated persons' affairs. Operating a guardianship services company without legal licensure violates Michigan's UPL statutes and professional conduct rules.

## Connection to Wayne County Probate Court {{ confidence(level="documented") }}

| Connection | Detail |
|------------|--------|
| Jurisdiction | Wayne County Probate Court handles guardianship cases |
| Judge | {{ actor(key="perkins_david") }} — Chief Judge Pro Tem, Wayne Probate |
| Pipeline | Perkins previously served **36th District Court (2014–2018)** — same court as {{ actor(key="yancey") }}, {{ actor(key="adam_sabree") }}, and {{ actor(key="sean_perkins") }} |
| Effect | Guardianship cases from Banks' dissolved entity route through Probate Court where network-connected judges sit |

Banks operated Serenity Guardianship through the same Probate jurisdiction where {{ actor(key="perkins_david") }} presides.

## Connection to Banks Network

| Entity | Relationship |
|--------|-------------|
| {{ entity(key="pca") }} | Same enterprise principal |
| {{ entity(key="macdowell") }} | Same enterprise principal |
| {{ entity(key="purpose_group") }} | Same extraction structure |
| {{ actor(key="holland") }} | Co-principal across all financial entities |

## Significance

A convicted felon running guardianship services without legal credentials demonstrates the enterprise's pattern: operate in legally regulated spaces without qualification, extract value, and rely on [captured courts](/analysis/institutional-capture/) for protection when challenged.

See also: [RICO Pattern](/analysis/rico-pattern/) — predicate acts including wire fraud on credential claims.

## Verify

- {{ source(key="lara_cofs", query="Entity 802290962") }}
- Judge Perkins: {{ actor(key="perkins_david") }}
- State Bar: {{ source(key="state_bar") }} — confirm Banks has no bar admission
- Banks profile: {{ actor(key="banks") }} — ICHAT SID **{{ fact(registry="actors", key="banks", field="sid") }}**

---

*All sources are public records.*
