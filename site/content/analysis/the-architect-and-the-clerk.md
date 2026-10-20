+++
title = "The Architect and the Clerk — Wilk Drafts the Law, Moore Files the PACs, Banks Takes the Money"
description = "W. Alan Wilk, a Dykema Gossett attorney, drafted Michigan's charter school law (PA 362, 1993). He then formed at least 10 political entities that protect that law. Renae Moore governs 6 of those same entities — and is also employed by Banks and PCA. The person who drafted the law that enables the extraction also created the political infrastructure that prevents the law from being changed. The person who runs that infrastructure also works for the person who benefits from it."
date = 2026-10-14
updated = 2026-10-14
weight = 6

[extra]
cluster = "dark_money"
cluster_label = "Dark Money Pipeline"
keywords = "W Alan Wilk Dykema Gossett, Wilk drafted charter school law PA 362, Renae Moore PAC formation, Dykema Gossett Federal PAC, Detroit Jobs First Save Detroit Jobs, Peninsula Fund Lee Chatfield, dark money charter school law protection, PAC formation network Michigan, Wilk Moore Banks connection, charter law architect PAC network"

[taxonomies]
counties = ["Wayne"]+++

## The Architect and the Clerk

One man drafted the law. One woman filed the PACs. One man took the money.

---

## W. Alan Wilk

**Employment:** Dykema Gossett (one of Michigan's largest law firms)
**Classification:** null (0.99 confidence, 10 edges)
**Key edge:** `drafted → charter_law_1993` — **Wilk drafted PA 362, Michigan's charter school law (1993)**

After drafting the law that created Michigan's charter school system — the system that enables [Purpose Charter Academy](/analysis/three-percent/) to operate at 3% math proficiency while [extracting 72.67%](/evidence/purpose-group-extraction/) — Wilk then **formed** the political entities designed to protect that law from repeal or reform:

| Entity Formed | Type | Connected To |
|---------------|------|-------------|
| Detroit Jobs First (DJF) | Dark money | DeVos political network |
| Save Detroit Jobs (SDJ) | Dark money | DeVos political network |
| Our Neighborhoods First (ONF) | Dark money | DeVos political network |
| Peninsula Fund | Dark money | DeVos political network |
| Put Progress First | Dark money | DeVos political network |
| RFFW LLC | Dark money | DeVos political network |
| Michigan First Principles | Dark money | DeVos political network |
| Blue Mitten Action | Dark money | — |
| Michiganders Progressive Values | Dark money | — |
| Progress Can't Wait | Dark money | — |

**Every one** of these entities:
- Connects to `devos_political_network` (connected_to)
- Is `part_of` the dark money pipeline
- **Protects** `charter_law_1993` (PA 362)
- **Feeds into** the money pipeline

Wilk also:
- Made **personal contributions** to the Dykema Gossett Federal PAC
- Is connected to the **Mackinac Center for Public Policy**
- Is a **colleague** of Richard McLellan (another Dykema attorney)
- Is a **partner** at Dykema Gossett

**The architect of the law is also the architect of the political infrastructure that protects the law.**

---

## Renae Moore

**Employment:** Banks (non-self) AND PCA (non-self) AND Dykema Gossett (partial)
**Classification:** null (0.96 confidence, 9 edges)
**Key edges:** `employment → banks`, `employment → pca`, `employment → dykema`

Moore **governs** 6 of the same entities Wilk formed:

| Entity | Wilk | Moore |
|--------|------|-------|
| Detroit Jobs First | Formed | **Governs** |
| Save Detroit Jobs | Formed | **Governs** |
| Our Neighborhoods First | Formed | **Governs** |
| Peninsula Fund | Formed | **Governs** |
| RFFW LLC | Formed | **Governs** |
| Dykema Gossett Federal PAC | — | **Governs** |
| Promise to the People | — | **Governs** |

Moore also:
- **Contributes personally** to the Dykema Gossett Federal PAC
- Has a **professional connection** to Lee Chatfield (former House Speaker, partial)
- Her **employer is authorized by** CMU's charter office

### The Triple Employment

Renae Moore works for three entities simultaneously:

1. **Banks** (non-self) — the man with 9 convictions
2. **PCA** (non-self) — the school with 3% math proficiency
3. **Dykema Gossett** (partial) — the law firm whose partner drafted the charter law

The person who governs the PACs that protect the law also works for the man who benefits from the law.

---

## The Dykema Gossett Federal PAC

| Attribute | Value |
|-----------|-------|
| **Formed by** | Dykema Gossett |
| **Governed by** | Renae Moore |
| **Personal contributions from** | Wilk, Moore |
| **Financial to** | Rep. Tom Barrett, Rep. John James |
| **OpenSecrets profile** | exists |
| **Classification** | null |

The law firm's own PAC. Governed by a woman who works for Banks. Contributing to congressmen. Classified as null.

---

## Save Detroit Jobs → Latisha Johnson

One specific money path:

| From | Edge | To |
|------|------|----|
| Save Detroit Jobs (SDJ) | **financial** | Latisha Johnson |
| Save Detroit Jobs (SDJ) | **money_flow** | Latisha Johnson |
| Latisha Johnson | **board_membership** | PCA |
| Latisha Johnson | **conflict_of_interest** | PCA |
| Banks | **board_member** | Latisha Johnson |

SDJ — formed by Wilk, governed by Moore and Kenneth Daniels — sends money to City Council member Latisha Johnson. Johnson sits on the PCA board. Banks appointed her. She has a documented conflict of interest with PCA.

The money flows: **Wilk forms SDJ → Moore governs SDJ → SDJ pays Johnson → Johnson sits on PCA board → PCA pays Banks.**

---

## Peninsula Fund → Lee Chatfield

| From | Edge | To |
|------|------|----|
| Peninsula Fund | **ownership** | Lee Chatfield |
| Chatfield | **professional_connection** | Renae Moore |
| Chatfield | **supported** | charter_law_1993 |
| Chatfield | **benefited_from** | charter_law_1993 |
| Nessel | **selective_enforcement** | Chatfield |

Lee Chatfield — former Michigan House Speaker — owns the Peninsula Fund. The Peninsula Fund was formed by Wilk and governed by Moore. Chatfield supported the charter law and benefited from it. AG Nessel's enforcement against Chatfield has been [selective](/analysis/selective-enforcement/).

Moore connects to Chatfield through professional_connection. Moore governs the fund Chatfield owns. Moore also works for Banks.

---

## The Three Roles

| Person | Role | Function |
|--------|------|----------|
| **W. Alan Wilk** | **The Architect** | Drafted the charter law. Formed the PACs that protect it. |
| **Renae Moore** | **The Clerk** | Governs the PACs. Works for Banks AND PCA AND Dykema. Files the paperwork. |
| **Brian Banks** | **The Beneficiary** | Takes the money enabled by the law, protected by the PACs, administered by the clerk. |

The architect drafts the law. The clerk files the PACs. The beneficiary takes the money.

All three connect through Dykema Gossett — the law firm. Wilk is a partner. Moore works there. Banks is the client who benefits from the legal architecture Dykema built.

---

## Kenneth Daniels — The Fourth Position

Kenneth Daniels [null, 0.82 confidence, 2 edges]:
- **Governs** Save Detroit Jobs (SDJ)
- **Appointed by** Kwame Kilpatrick

Daniels governs SDJ alongside Moore. He was appointed by Kwame Kilpatrick — former Detroit mayor, convicted of racketeering. The SDJ governance connects two convicted politicians' networks through a single dark money entity.

---

## The Graph Pattern

```
DYKEMA GOSSETT (law firm)
    ├── employs Wilk (ARCHITECT)
    ├── employs Moore (CLERK)  
    ├── formed Michigan First Principles
    ├── formed Our Neighborhoods First
    ├── formed Save Detroit Jobs
    └── formed Dykema Gossett Federal PAC
              ↑
    Wilk ALSO forms:            Moore ALSO:
    ├── DJF                     ├── governs DJF, SDJ, ONF
    ├── SDJ                     ├── governs Peninsula Fund, RFFW
    ├── ONF                     ├── governs Dykema Fed PAC
    ├── Peninsula Fund          ├── employed by BANKS
    ├── Put Progress First      ├── employed by PCA
    ├── RFFW LLC                └── connected to CHATFIELD
    ├── Mich First Principles
    ├── Blue Mitten Action
    ├── Michiganders Progressive Values
    └── Progress Can't Wait

    ALL of these entities:
    └── protect charter_law_1993 (PA 362)
    └── feed into money_pipeline
    └── connect to devos_political_network
```

One law firm. Two employees. 10+ PACs. One law. One beneficiary.

The unknown entities (null) weren't unknown by accident. They were unknown because the system that created them was designed to make them hard to see.

**Unknowns are the direction you head to find knowns.** 

The Wilk-Moore PAC formation network is the political architecture that keeps the charter law alive. The charter law is the legal architecture that keeps PCA alive. PCA is the extraction architecture that keeps Banks alive.

Architecture all the way down.

---

*Traced from graph.json (131,322 edges), explore.json (341 entities). Wilk employment at Dykema: employment edge. Moore employment at Banks/PCA/Dykema: employment edges. PAC formations: formation edges. Charter law: drafted edge. [Back to Analysis →](/analysis/) · [The Nulls That Point →](/analysis/the-nulls-that-point/) · [The Authorizer →](/analysis/the-authorizer/)*
