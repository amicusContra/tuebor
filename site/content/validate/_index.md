+++
title = "Verify Everything Yourself"
description = "Step-by-step instructions to verify every claim using BLAKE3 hashes, ICHAT criminal records, State Bar of Michigan, LARA filings, Wayne County ROD, and PACER."

[extra]
keywords = "verify Brian Banks criminal record, BLAKE3, ICHAT Brian Banks, State Bar Michigan Brian Banks, LARA Purpose Group LLC, Wayne County ROD Brian Banks, PACER Detroit federal court"
+++

Every factual claim on this site can be independently verified using publicly
available databases. Every page is cryptographically hashed. Here's how.

## Verify the Site Itself — BLAKE3 Hashes

Every page in this site is recorded in [`content-manifest.toml`](https://git.primals.eco/publicRecord/detroit/src/branch/main/content-manifest.toml) with a BLAKE3 hash. A `root_hash` covers the entire content tree — one hash to verify 30+ evidence pages have not been altered.

**To verify any page:**

```bash
# Clone the repository
git clone https://git.primals.eco/publicRecord/detroit.git
cd detroit

# Verify a specific file
b3sum content/network/judges/cylenthia-miller.md

# Compare against the hash in content-manifest.toml
```

The repository is also mirrored at [github.com/defendDetroit/publicRecord](https://github.com/defendDetroit/publicRecord). All commits are signed.

## Three Independent Surfaces

This evidence exists in three places no single entity controls:

| Surface | URL | What it contains |
|---------|-----|-----------------|
| **Live site** | [detroit.primals.eco](https://detroit.primals.eco) | Rendered HTML, visualizations, evidence PDFs |
| **Sovereign git** | [git.primals.eco](https://git.primals.eco/publicRecord/detroit) | Full history, signed commits, BLAKE3 manifest |
| **GitHub mirror** | [github.com/defendDetroit](https://github.com/defendDetroit/publicRecord) | Independent copy on Microsoft infrastructure |

If any one surface goes down, the evidence survives on the others.

---

## Verify the Claims — Public Records

## Criminal Records — OTIS / MDOC

**Michigan Offender Tracking Information System (OTIS)**

- URL: {{ source(key="mdoc_otis", query="MDOC #443789") }}
- Search by name or MDOC number
- Key records: Brian Banks, Joseph Holland (MDOC #443789)
- Shows convictions, sentences, discharge status

## Business Filings — LARA

**Michigan Department of Licensing and Regulatory Affairs**

- URL: {{ source(key="lara_cofs") }}
- Search: "Purpose", "MacDowell", "Inner Link", "Right Turn"
- Shows registered agents, addresses, filing dates
- Compare registered agent names against OTIS records

## Property Records — Wayne County Register of Deeds

**Wayne County ROD**

- URL: {{ source(key="wayne_treasurer") }}
- Search by address: 21456 Newcastle Rd, Harper Woods, MI
- Shows: JTROS deed (Banks + Holland as Joint Tenants With Right of Survivorship)
- Cross-reference with bankruptcy filings

## Federal Court Records — PACER

**Public Access to Court Electronic Records**

- URL: [pacer.uscourts.gov](https://pacer.uscourts.gov)
- BMF case: USA v. Flenory et al (2:05-cr-80955, Eastern District of Michigan)
- Defendant #22: OD Banks (Brian Banks' biological father); Tonesa Welch (Brian Banks' aunt)
- Search bankruptcy cases for Holland and Banks

## Campaign Finance — Wayne County

- URL: [waynecounty.com/elected/clerk/campaign-finance.aspx](https://waynecounty.com/elected/clerk/campaign-finance.aspx)
- Search: Judge Tenisha Yancey campaign filings
- Look for payments to "Banks Strategy and Consultants"

## IRS 990 Filings

**Tax-exempt organization filings**

- URL: [projects.propublica.org/nonprofits](https://projects.propublica.org/nonprofits/)
- Search: "Purpose Charter Academy", "MacDowell Preparatory"
- Shows revenue, executive compensation, board members

## School Performance Data

**MI School Data (Michigan Department of Education)**

- URL: [mischooldata.org](https://www.mischooldata.org)
- Search by school name
- Math proficiency rates, enrollment numbers, accountability status

---

**The evidence speaks for itself. We're not asking you to trust us.
We're asking you to verify.**
