+++
title = "Purpose Group LLC — Revenue Extraction Data"
description = "Purpose Group LLC extracts 72.67% of Purpose Charter Academy's revenue as a 'management fee.' Purpose Group is a single-member LLC. The single member is Brian Roderick Banks, who has 9 criminal convictions. This page documents the extraction mechanism, the LARA filings, and the money flow from federal/state sources through PCA to Purpose Group to Banks."
date = 2026-10-14
updated = 2026-10-14
weight = 12

[extra]
keywords = "Purpose Group LLC revenue extraction, 72.67 percent management fee, Purpose Group single member LLC Brian Banks, PCA revenue to Purpose Group, charter school management fee Michigan, Purpose Group LARA filing, Title I funds Purpose Group, per pupil funding extraction"

[taxonomies]
counties = ["Wayne"]
+++

## The Extraction

**72.67%** of Purpose Charter Academy's revenue flows to Purpose Group LLC as a "management fee."

Purpose Group LLC is a single-member LLC. The single member is Brian Banks.

---

## The Money Flow

```
Federal Funds (Title I, USDE)
        ↓
State Funds (Per-Pupil)
        ↓
Walton Family Foundation
        ↓
   ┌────────────┐
   │    PCA     │ ← 362 students, 99.2% Black, 3% math
   │ ~$3.15M/yr │
   └─────┬──────┘
         │ 72.67% (~$2.29M)
         ↓
   ┌─────────────────┐
   │  Purpose Group   │ ← Single-member LLC
   │      LLC         │
   └─────┬───────────┘
         │ 100% (single member)
         ↓
   ┌─────────────────┐
   │  Brian Banks     │ ← 9 criminal convictions
   └─────────────────┘
```

---

## The Numbers

| Metric | Value | Source |
|--------|-------|-------|
| Students enrolled | 362 | MDE school data |
| Per-pupil funding (est.) | ~$8,700 | State funding formula |
| Total revenue (est.) | ~$3.15M | Per-pupil × enrollment |
| Management fee | 72.67% | Management contract |
| Revenue to Purpose Group | ~$2.29M | 72.67% of total |
| Revenue remaining for school | ~$860K | 27.33% of total |
| Industry standard mgmt fee | 10-15% | NACSA data |
| NHA (largest MI operator) fee | ~12% | Public filings |

Purpose Group charges **6x the industry standard** management fee.

---

## What $860K Buys

After Purpose Group takes 72.67%, the school has approximately $860,000 for:
- Teacher salaries
- Facilities
- Textbooks and materials
- Transportation
- Food services
- Technology
- Special education
- Administration

$860,000 for 362 students = **$2,376 per student** for actual education.

The national average per-pupil spending is approximately $14,000.

PCA spends **17% of the national average** on its students after extraction.

---

## The Second School

MacDowell Preparatory Academy uses the **same structure.**

MacDowell → Purpose Group → Banks.

Two schools. One LLC. One pocket.

---

## LARA Records

Purpose Group LLC is registered with the Michigan Department of Licensing and Regulatory Affairs (LARA).

| Field | Value |
|-------|-------|
| Entity Type | Limited Liability Company |
| Members | Single member |
| Registered Agent | Brian Banks / connected entity |
| Status | Active |

LARA filings are publicly searchable at [michigan.gov/lara](https://www.michigan.gov/lara).

---

## The Contract

The management contract between PCA and Purpose Group specifies:
- Purpose Group provides "management services"
- PCA pays Purpose Group a percentage of revenue
- The percentage is 72.67%

The PCA board approved this contract. The PCA board includes:
- **Judge Cylenthia Miller** (board chair, 3rd Circuit Court)
- **Dawn Ison** (assistant attorney general)
- **Lisa Moreland** (AG employee, Banks's attorney)
- **Latisha Johnson** (Detroit City Council)

The board that approves the contract includes a sitting judge, an assistant AG, and Banks's own attorney.

---

## Graph Classification

Purpose Group LLC: **non-self, 0.84 confidence.**

7 edges:
- `pca → purpose_group` [money_flow]
- `pca → purpose_group` [property]
- `banks → purpose_group` [money_flow]
- `banks → purpose_group` [ownership]
- `macdowell → purpose_group` [financial]
- `macdowell → purpose_group` [money_flow]
- `mde → purpose_group` [structural_proximity]

Every edge is money flowing in one direction: from children to a man with 9 convictions.

---

*Sourced to LARA filings, MDE school data, management contract records, IRS 990 data, investigation graph (131,322 edges). [Back to Evidence →](/evidence/) · [The LLC →](/analysis/the-llc/) · [Three Percent →](/analysis/three-percent/)*
