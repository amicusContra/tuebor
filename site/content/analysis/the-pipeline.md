+++
title = "The Pipeline — From Kwame to Banks, Detroit's Political Conveyor Belt"
description = "Kwame Kilpatrick was Detroit's mayor. 28-year federal sentence for racketeering, extortion, and bribery (commuted by Trump). Dennis Archer preceded him — null classification, Dykema partner, MI Supreme Court justice, State Bar governor. The pipeline doesn't stop when one mayor leaves. It reloads. Banks is connected politically to Kwame, to Archer through Dykema, to Sheffield through Gay-Dagnogo, to Bert Johnson through Black Caucus. The conveyor belt carries the same cargo. Only the faces change."
date = 2026-10-14
updated = 2026-10-14
weight = 40

[extra]
cluster = "political"
cluster_label = "Political Network"
keywords = "Kwame Kilpatrick Brian Banks Detroit, Dennis Archer Dykema partner, Kwame Kilpatrick racketeering conviction, Detroit political pipeline charter schools, Archer Michigan Supreme Court State Bar, Kwame Sheffield political network, Bert Johnson conviction, Carolyn Kilpatrick Congress, Detroit mayor charter school pipeline, Kilpatrick machine"

[taxonomies]
counties = ["Wayne"]
+++

## The Pipeline

Detroit has had this pipeline for a long time.

It starts at the mayor's office and ends at a school where 3% of children can do math.

---

## Station 1: Dennis Archer

**Dennis Archer.** Former Mayor of Detroit. Former Michigan Supreme Court Justice.

| Edge | Type |
|------|------|
| → Dykema | employment |
| → MI Supreme Court | governance |
| → SBM | governance |
| → Kwame | political |
| → Miller | about |
| → Detroit College of Law | education |
| ← Coleman Young | political |

Archer was a **Dykema partner.** Dykema Gossett — the firm that wrote Michigan's charter school law in 1993. [How to Build an OS](/analysis/how-to-build-an-os/).

He governed the **Michigan Supreme Court** and the **State Bar of Michigan.** The court that interprets charter school law and the bar that won't investigate Banks's fake JD.

Classification: **null, 0.943.**

The membrane is 94.3% sure it can't classify him. He was a Supreme Court justice, a bar governor, a Dykema partner, and a mayor. He's everything and nothing. The system passes through him like light through glass.

---

## Station 2: Kwame Kilpatrick

**Kwame Kilpatrick.** Mayor of Detroit 2002-2008.

Convicted of racketeering, extortion, and bribery. 28-year federal sentence. Commuted by President Trump in January 2021.

| Edge | Type |
|------|------|
| ← Banks | political |
| ← Bert Johnson | political |
| → Gay-Dagnogo | political |
| ← Gay-Dagnogo | political |
| → Bing | political |
| → Cockrel Jr | political |
| → Daniels | appointment |
| → Dumas | employment |
| ← Carolyn Kilpatrick | family |
| → Carolyn Kilpatrick | family |
| ← Glenn Page | about |
| → MSU Law | education |

Kwame attended **MSU Law.** The same law school Banks falsely claims to have attended.

Kwame has a political edge to Banks. Banks has a political edge to Kwame. **Bidirectional.** They exist in each other's political world.

Classification: **partial, 0.84.**

Partial. He did real governance work AND he committed federal crimes. That's partial at its most literal: partly legitimate, partly criminal. Convicted and commuted.

---

## Station 3: The Family Machine

**Carolyn Cheeks Kilpatrick.** US Congresswoman. Kwame's mother.

| Edge | Type |
|------|------|
| → Banks | political |
| → Kwame | family |
| ← Kwame | family |
| → Michigan Legislature | former member |

Classification: **null, 0.9.**

She has a political edge to Banks. The congresswoman, the mother of the convicted mayor, connected to the man with 9 convictions who runs a school with 3% math proficiency.

**Bert Johnson.** State Senator. Convicted of bribery.

| Edge | Type |
|------|------|
| → Banks | political |
| → Gay-Dagnogo | political |
| → Kwame | political |
| → Black Caucus Foundation | governance |

Classification: **partial, 0.82.**

Another conviction. Another political connection to Banks. Another partial classification.

---

## The Conveyor Belt

| Position | Person | Conviction? | Banks Connection | Sort |
|----------|--------|------------|-----------------|------|
| Mayor | Archer | No | Via Dykema | null (0.943) |
| Mayor | Kwame | 28 years (commuted) | political (bidirectional) | partial (0.84) |
| Mayor | Bing | No | political | partial |
| Mayor | Sheffield | No | political | partial (0.84) |
| Congress | C. Kilpatrick | No | political | null (0.9) |
| State Senate | Bert Johnson | bribery | political | partial (0.82) |
| State Rep | Gay-Dagnogo | No | political, enabler | partial (0.80) |

Every mayor. Every era. Every administration. The political edge to Banks persists.

It doesn't matter who sits in the chair. The chair is connected.

---

## The MSU Law Thread

Archer attended Detroit College of Law (merged into MSU Law).
Kwame attended MSU Law.
Banks **claims** to have attended MSU Law. He didn't.
Goetz attended Detroit College of Law (merged into MSU Law).

The same law school connects the real attorneys, the real convicts, and the fake attorney. It's the credential that the pipeline runs through — real for some, imaginary for Banks, and irrelevant to the 362 children who don't know and don't care whether their school's founder has a law degree.

---

## Why the Pipeline Matters

Individual politicians come and go. Kwame went to prison. Archer retired. Sheffield is mayor now.

But the pipeline doesn't change operators. It changes **faces.** The connections remain. The political edges regenerate. The charter school system created in 1993 by Dykema continues to authorize schools run by people with 9 convictions.

The pipeline IS the system. And the system is partial, all the way down.

---

*Sourced to federal court records, Michigan Legislature records, Detroit mayoral records, investigation graph (131,322 edges). [Back to Analysis →](/analysis/) · [The Mayor Who Looked Away →](/analysis/the-mayor-who-looked-away/) · [The Enabler →](/analysis/the-enabler/)*
