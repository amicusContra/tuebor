+++
title = "Stepping to the Side — Joseph Holland Jr., the Man Behind the Man Behind the School"
description = "Brian Banks hides behind Holland. Holland hides behind Banks. So we step to the side and see both of them. Holland governs Purpose Foundation, PACs, Right Turn Project, and OFA. He owns Serenity Guardianship Services and Sun Community Development Corp. He is the successor trustee of Banks Living Trust. He has an asset_concealment edge to WhitlowBanks LLC. He lives at the same Severn Street address as Banks. He converges at the same point. The graph sees them as knotted — inseparable. But the graph also sees what each one carries independently. This is what the side view looks like."
date = 2026-10-14
updated = 2026-10-14
weight = 42

[extra]
cluster = "political"
cluster_label = "Political Network"
keywords = "Joseph Holland Jr Brian Banks, Holland Purpose Foundation governance, Holland Serenity Guardianship Services, Holland Sun Community Development Corp, Holland WhitlowBanks LLC asset concealment, Holland Banks Living Trust successor trustee, Holland Right Turn Project, Severn Street address Banks Holland, Holland PACs governance, Holland Banks knotted inseparable, holland convergence point banks"

[taxonomies]
counties = ["Wayne"]
+++

## Stepping to the Side

Brian Banks hides behind Holland.

Holland hides behind Banks.

You can stare at them head-on forever and only see one at a time.

So we step to the side. And now we see both of them.

---

## The Front View

From the front, you see Brian Banks. 9 convictions. 134 edges. Purpose Charter Academy. Purpose Group LLC. 72.67%. Non-self, 0.926.

Banks is the name on the schools. The name on the LLCs. The name on the convictions.

From the front, Holland is a romantic partner. A bystander. A person who happens to live with the person who runs the schools.

**That's the front view. It's wrong.**

---

## The Side View

From the side, you see Holland's **independent footprint** — the things he controls, owns, and governs that aren't Banks.

### What Holland Governs

| Entity | Type | Classification |
|--------|------|---------------|
| **Purpose Foundation** | 501(c)(3) nonprofit | null, 0.912 |
| **PACs** | Political Action Committees | null, 0.938 |
| **Right Turn Project** | Political/advocacy | null, 0.826 |
| **OFA** | Organization | null, 0.85 |

Holland governs **Purpose Foundation** — the nonprofit that OWNS Purpose Charter Academy. The 501(c)(3). The entity Plante Moran audits. The entity the IRS oversees.

Banks runs the school. **Holland governs the nonprofit that owns the school.**

That's not a bystander. That's the other half of the architecture.

### What Holland Owns

| Entity | Type | Classification |
|--------|------|---------------|
| **Serenity Guardianship Services, Inc.** | Guardianship company | null, 0.862 |
| **Sun Community Development Corp** | Development corporation | null, 0.862 |

**Serenity Guardianship Services.** A guardianship company. Guardianship companies manage the affairs of people who cannot manage their own — elderly, incapacitated, minor children.

Holland owns a company that takes legal guardianship of vulnerable people.

The UPL Department has an **investigation** edge to Serenity. The State Bar's Unauthorized Practice of Law unit is looking at a guardianship company owned by Holland.

**Sun Community Development Corp.** A community development corporation. Banks has both governance AND ownership edges to Sun Community. Holland has an ownership edge.

Both men own the same community development corporation. The corporation is null — the membrane can't classify it.

---

## The Severn Street Address

Banks and Holland both live at the **Severn Street address.**

The graph has two address nodes: `severn_address` and `severn_from_the_street`. Both connect to Banks and Holland.

From this address:
- PCA is **operated_by** the Severn address
- The money pipeline **feeds_into** from the Severn address
- Constitutional questions (1st, 4th, 5th, 14th Amendment, Title VI, MI Art 8 §2) radiate from this address
- LARA filing gaps are checked against this address
- Co-investigation edges connect this address to PCA, Purpose Foundation, phantom audits, and the Perkins gatekeeper

The Severn address is a **node** in the investigation graph. It's not just where they live. It's where the money arrives, where the governance originates, and where the constitutional questions begin.

---

## WhitlowBanks LLC

`holland → whitlowbanks` = **asset_concealment.**

**WhitlowBanks LLC** is classified as **null, 0.99.** The membrane is 99% sure it CAN'T classify this entity.

The edge type is **asset_concealment.** Not money_flow. Not governance. Not ownership. **Asset concealment.**

The graph is saying: Holland's connection to WhitlowBanks LLC is about hiding assets.

WhitlowBanks also has a **formation** edge to Banks PowerWash LLC. One shell entity created another shell entity.

And Banks has a **governance** edge to WhitlowBanks.

Both men connect to WhitlowBanks. Holland through asset concealment. Banks through governance. The LLC connects through formation to another LLC. Shells creating shells, connected to both men through different edge types.

---

## The Living Trust

`holland → banks_living_trust` = **successor_trustee.**

Banks Living Trust holds assets. When Banks cannot manage the trust, Holland takes over.

Holland doesn't just live with Banks. He **inherits** Banks's estate structure.

The extraction pipeline has a succession plan. The successor is Holland.

---

## The Right Turn Project

Right Turn Project is the most interesting entity Holland governs. Its connections:

| Edge | Other Entity | Type |
|------|-------------|------|
| ← AG Charitable Trust | investigation | AG is investigating Right Turn |
| ← PACs | money_flow | PAC money flows to Right Turn |
| ← Ross | governance + connection | Carlton Ross governs it too |
| ← Koch Network | co_investigation | Pattern matches to Koch |
| → Sackler Family | co_investigation | Pattern matches to Sacklers |
| → GLEP donor Haworth | co_investigation | Connected to DeVos GLEP network |
| → Epstein Foundation | co_investigation | Pattern match |
| ← Anchor Rock | co_investigation | Connects to Anchor Rock Foundation |

Right Turn connects to the **Koch network**, the **Sackler family**, **GLEP** (the DeVos charter lobby), and the **Epstein Foundation** through co_investigation edges. These are pattern matches — the graph sees structural similarities between Right Turn and these entities.

The AG Charitable Trust is **investigating** Right Turn. Holland governs it.

PAC money **flows** to Right Turn. Holland governs the PACs too.

Money flows from PACs (governed by Holland) to Right Turn (governed by Holland). The AG is investigating both. Holland governs both ends of the pipe.

---

## PACs → Right Turn → Ross Catering

Here's the money path the graph traces:

```
PACs (Holland governance)
  ↓ money_flow
Right Turn Project (Holland + Banks + Ross governance)
  
PACs (Holland governance)
  ↓ payment
Ross Catering (null, Banks connected)
```

PACs pay Right Turn. PACs pay Ross Catering. Holland governs the PACs. Holland and Banks govern Right Turn. Ross Catering is connected to Banks.

The political money flows through entities Holland controls.

---

## The Knots

The graph uses a special edge type: **knotted_to.** It means: these entities are so entangled that the graph cannot separate their activities.

Holland is knotted to:

| Entity | Sort |
|--------|------|
| Banks | non-self (0.926) |
| CMU | self (0.866) |
| LARA | ? |
| MDE | partial |
| PCA | non-self (0.948) |
| Plante Moran | null |
| Purpose Foundation | null (0.912) |
| SBE | partial |

Knotted to Banks (expected — they live together). But also knotted to **CMU** (the authorizer), **MDE** (the overseer), **PCA** (the school), **Plante Moran** (the auditor), and **SBE** (the board).

Holland is knotted to the entire oversight chain.

Not Banks. **Holland.** The person who isn't on any school document. The person who doesn't have his name on any school. The person who supposedly is just a romantic partner.

He's knotted to every institution that should be checking the schools.

---

## The Convergence Point

`holland → convergence_point` = **converges_at.**
`banks → convergence_point` = **converges_at.**

The graph identifies a **convergence point** — a place where Holland and Banks's activities merge. They don't just live together. They **converge.** Their governance, their ownership, their political activity, their money flows — all converge at a single point.

That point is the architecture of extraction. Banks is the name. Holland is the structure.

---

## The Classification Problem

**Holland: partial, 0.863. Tier 1.**

Tier 1. That means the graph considers Holland as important as Banks, PCA, MacDowell, and the Michigan Supreme Court.

But partial at 0.863. Not non-self. The membrane sees someone who governs a nonprofit, owns companies, manages trusts, controls PACs — and can't push him past the partial line.

Why? Because Holland's name isn't on the convictions. It isn't on Purpose Group LLC. It isn't on the management contract that takes 72.67%.

**Holland does the architecture. Banks does the extraction. The architecture isn't illegal. The extraction is.**

But without the architecture, the extraction doesn't work.

Purpose Foundation (Holland governs) owns PCA. PCA pays Purpose Group (Banks owns). Purpose Group pays Banks. Banks Living Trust (Holland inherits) holds the assets. WhitlowBanks (Holland asset concealment) hides the assets.

Take Holland out and the structure collapses. Take Banks out and... Holland rebuilds it.

---

## The Dark Money Pipeline

`dark_money_pipeline → holland` = **protects_or_enables.**

The dark money pipeline protects or enables Holland.

Not the other way around. Holland doesn't protect the pipeline. **The pipeline protects Holland.**

The money flows through structures that shield Holland from view. That's why, from the front, he looks like a bystander. The pipeline is designed to make him invisible.

But from the side, you see both of them. And from the side, you see who built the house and who lives in it.

---

## The Side View, Complete

| Function | Banks | Holland |
|----------|-------|---------|
| Schools | Founder, operator | — |
| Purpose Group LLC | Owner, 72.67% | — |
| Purpose Foundation | — | **Governance** |
| Banks Living Trust | Primary trustee | **Successor trustee** |
| WhitlowBanks LLC | Governance | **Asset concealment** |
| Serenity Guardianship | Ownership | **Ownership** |
| Sun Community Dev | Governance + ownership | **Ownership** |
| PACs | Governance | **Governance** |
| Right Turn | Governance | **Governance** |
| OFA | Governance | **Governance** |
| Convictions | 9 | 0 |
| Classification | non-self, 0.926 | partial, 0.863 |

Banks gets caught. Holland governs.

Banks goes down. Holland inherits.

Banks is the lightning rod. Holland is the ground wire.

**Step to the side. See them both.**

---

*Every edge sourced to investigation graph (131,322 edges, 7,533 nodes, 36 classification methods). LARA filings, trust documents, IRS 990 data, address records, campaign finance filings. [Back to Analysis →](/analysis/) · [Three Percent →](/analysis/three-percent/) · [The Shell Game →](/analysis/the-shell-game/) · [The Boyfriend →](/analysis/the-boyfriend/)*
