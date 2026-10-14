+++
title = "The LLC — How Purpose Group Extracts 72.67% of a School"
description = "Purpose Group LLC is a single-member LLC. The single member is Brian Roderick Banks, who has 9 criminal convictions. Purpose Charter Academy pays Purpose Group for 'management services.' Purpose Group pays Banks. MacDowell Preparatory Academy does the same thing. Two schools, one LLC, one man, one pocket. 72.67% of every tax dollar walks out the door."
date = 2026-10-14
updated = 2026-10-14
weight = 2

[extra]
keywords = "Purpose Group LLC Brian Banks, Purpose Group LLC Purpose Charter Academy, 72 percent extraction charter school, single member LLC charter school Michigan, Purpose Group MacDowell Preparatory, charter school management fee extraction, Brian Banks 9 convictions Purpose Group, Purpose Group money flow, charter school LLC revenue extraction Detroit"

[taxonomies]
counties = ["Wayne"]
+++

## The LLC

This is the simplest story in the investigation.

It has three characters: a school, an LLC, and a man.

---

## Character 1: The School

**Purpose Charter Academy.** 362 students. Detroit. Authorized by DPSCD and CMU. Funded by Title I, US Department of Education, state per-pupil funding, and the Walton Family Foundation.

Total revenue: approximately **$3.15 million per year.**

The students are 99.2% Black. Math proficiency is 3%.

---

## Character 2: The LLC

**Purpose Group, LLC.** LARA Entity. Single-member LLC.

It provides "management services" to Purpose Charter Academy.

It also provides "management services" to **MacDowell Preparatory Academy** — the second school.

The management fee is **72.67% of total revenue.**

That's not a typo. Seventy-two point six seven percent.

For context: typical charter school management fees range from 10-15%. National Heritage Academies, Michigan's largest operator, charges roughly 12%.

Purpose Group charges six times the industry standard.

---

## Character 3: The Man

**Brian Roderick Banks.** The single member of Purpose Group LLC.

- 9 criminal convictions
- Classified as non-self (0.926 confidence)
- 134 edges in the investigation graph
- Governance of 14+ shell entities
- Claims a JD from MSU College of Law (MSU has no record)
- Impersonated a child (Dasean Mitchell)

He owns the LLC. The LLC gets 72.67%. Therefore he gets 72.67%.

Of every tax dollar that follows a child to Purpose Charter Academy, **seventy-two cents** ends up in the pocket of a man with 9 criminal convictions.

---

## The Second School

It's the same structure, twice.

**MacDowell Preparatory Academy.** Also authorized. Also funded. Also pays Purpose Group LLC for "management services."

The graph edges:
- `purpose_group → banks` [money_flow]
- `purpose_group → banks` [ownership]
- `pca → purpose_group` [money_flow]
- `macdowell → purpose_group` [money_flow, financial]
- `macdowell → banks` [money_flow]

Two schools. One LLC. One man. One pocket.

---

## Who Sees the Money

| Entity | What They See | What They Did |
|--------|--------------|---------------|
| **Plante Moran** | Audited PCA. Generated financial data. | Non-response. |
| **CMU** | Authorized both schools. Receives a cut. | No revocation. |
| **MDE** | Oversees all charter schools in Michigan. | Failed to stop. |
| **DPSCD** | Authorized PCA within district. | Failed to stop. |
| **IRS (EO)** | Purpose Foundation is a 501(c)(3). | Jurisdiction noted. |

Every entity in the oversight chain can see the 72.67%.

It's not hidden. It's in the audits. It's in the 990s. It's in the management contract.

**They all see it. None of them stop it.**

---

## The Graph

Purpose Group LLC: **non-self, 0.84 confidence.**

The graph assigned it non-self using 7 edges:
- `pca → purpose_group` [money_flow]
- `pca → purpose_group` [property]
- `banks → purpose_group` [money_flow]
- `banks → purpose_group` [ownership]
- `macdowell → purpose_group` [financial]
- `macdowell → purpose_group` [money_flow]
- `mde → purpose_group` [structural_proximity]

Seven edges. All money flowing in one direction. From children to an LLC to a man with 9 convictions.

The membrane doesn't need 36 methods for this one.

---

*Sourced to LARA filings, MDE data, IRS 990, court records, and the investigation graph. [Back to Analysis →](/analysis/) · [Three Percent →](/analysis/three-percent/) · [They Banked on Banks →](/analysis/they-banked-on-banks/)*
