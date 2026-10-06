+++
title = "Court Records Guide"
description = "How to find, read, and use Michigan court records. State dockets, appellate opinions, federal PACER, and what to look for."
weight = 3
+++

## Michigan State Courts

### Trial Court Records

Michigan circuit and district courts maintain case records. Access varies by county:

| System | Coverage | URL |
|--------|----------|-----|
| **Michigan Courts Case Search** | Some courts | [courts.michigan.gov/case-search](https://www.courts.michigan.gov/case-search/) |
| **Odyssey/MiCourt** | Many counties now use Odyssey | Check individual court websites |
| **County clerk websites** | Varies | Search "[County] County Clerk case search" |
| **In-person** | Always available | Visit the courthouse during business hours |

### What a Docket Tells You

A docket is the chronological list of everything filed in a case. Key entries to watch:

| Entry Type | What to Look For |
|------------|-----------------|
| **Complaint/Petition** | Who sued whom, what claims, what relief sought |
| **Answer** | Did the defendant respond? When? |
| **Motions** | What's being asked for — summary disposition, contempt, sanctions |
| **Orders** | What the judge actually decided |
| **Show cause** | The court is demanding someone explain why they shouldn't be held in contempt |
| **Contempt** | Someone was found in contempt — check if it was *before* the merits were decided |
| **UPEPA motion** | Anti-SLAPP special motion — was it heard? Was it ruled on? |
| **Recusal/DQ** | Judge removed or removed themselves — always read the order |
| **Remand** | Appellate court sent it back — means the trial court got it wrong |

### What to Look for in the Gaps

The most important information in a docket is often what is **not** there:

- A motion filed but never ruled on
- A hearing logged as "status conference" instead of substantive proceeding — dodging the transcript requirement (MCR 8.108(B)(1))
- A FOIA response that refers to records with no corresponding entry
- An appeal with no trial transcript available

### How to Read an Appellate Opinion

Michigan appellate opinions are published (citable) or unpublished (persuasive only). Both are available:

| Source | URL |
|--------|-----|
| **Michigan Courts Opinions Search** | [courts.michigan.gov/opinions](https://www.courts.michigan.gov/opinions/) |
| **Google Scholar** | [scholar.google.com](https://scholar.google.com) → Case law → Michigan courts |
| **Court of Appeals** | Published: Michigan Appeals Reports. Unpublished: available online. |

**Key fields in an opinion:**
- **Affirmed** = trial court was right
- **Reversed** = trial court was wrong
- **Vacated** = trial court's order is void
- **Remanded** = sent back for further proceedings
- **Remanded to a different judge** = the appellate court lost confidence in the original judge (this is rare and significant)

---

## Federal Court Records (PACER)

### What PACER Is

Public Access to Court Electronic Records. All federal court filings — district courts, bankruptcy courts, and appellate courts.

| Field | Detail |
|-------|--------|
| **URL** | [pacer.uscourts.gov](https://pacer.uscourts.gov) |
| **Cost** | $0.10/page (capped at $3.00/document). Quarterly fees under $30 are waived. |
| **Account** | Free to register. Required to search or download. |
| **Tip** | Register, then check your quarterly statement — most casual researchers stay under the $30 waiver threshold |

### How to Search PACER

1. Go to [pacer.uscourts.gov](https://pacer.uscourts.gov)
2. Click "Find a Case"
3. Select the court (e.g., Eastern District of Michigan, Western District of Michigan)
4. Search by party name, case number, or date range
5. View the docket — each entry links to the filed document (PDF)

### Why Federal Records Matter

State actors sometimes appear in federal litigation:
- **Section 1983 civil rights cases** (e.g., McCann v. Fuller — $14.5M verdict for wrongful conviction)
- **RICO filings**
- **Bankruptcy filings** that reveal financial relationships invisible at the state level
- **Federal investigations** that generate public records (indictments, plea agreements, sentencing memoranda)

### Key Federal Cases Referenced in This Investigation

| Case | Court | Significance |
|------|-------|-------------|
| **McCann v. Fuller** | W.D. Michigan | $14.5M verdict — MSP D/Sgt. Bryan Fuller, constitutional violations, wrongful conviction |
| **Ahmad v. University of Michigan** | Michigan (state, but Ellison's FOIA case) | Timing of Aljouny PGP key creation matches press release |
| **Lindke v. Freed** | US Supreme Court | Ellison's client; social media/1A; Lindke's alleged harassment triggered SLAPP |

---

## LARA Business Entity Search

### What It Is

Michigan's Licensing and Regulatory Affairs (LARA) maintains all business entity registrations — LLCs, PLLCs, corporations, nonprofits, PACs.

| Field | Detail |
|-------|--------|
| **URL** | [mibusinessregistry.lara.state.mi.us/search/business](https://mibusinessregistry.lara.state.mi.us/search/business) |
| **Cost** | Free to search |
| **What you get** | Entity name, type, status, formation date, registered agent, resident agent address, annual report history |

### What to Search For

- **Law firm PLLCs** — formation date, registered agent (often reveals who controls the entity)
- **PACs and campaign committees** — Statement of Organization, officers, treasurer
- **Nonprofits** — formation, purpose, officers (cross-reference with IRS 990s at [ProPublica Nonprofit Explorer](https://projects.propublica.org/nonprofits/))
- **Dark money entities** — recently formed, vague purpose statements, no public activity, large campaign expenditures

### Why Formation Dates Matter

If an entity was formed days or weeks before a major campaign expenditure, contract award, or court filing — that is a timing correlation worth documenting.

---

## Campaign Finance

### Michigan

| System | URL | What It Covers |
|--------|-----|---------------|
| **Michigan Campaign Finance Reporting System (CFRS)** | [miboecfr.nictusa.com/cfr](https://miboecfr.nictusa.com/cfr/) | State and local candidates, PACs, ballot question committees |

### National

| System | URL | What It Covers |
|--------|-----|---------------|
| **TransparencyUSA** | [transparencyusa.org](https://www.transparencyusa.org) | State-level campaign finance across all 50 states |
| **FEC** | [fec.gov](https://www.fec.gov) | Federal candidates and PACs |
| **OpenSecrets** | [opensecrets.org](https://www.opensecrets.org) | Federal + lobbying + dark money tracking |

### What to Look For

- **Who funds whom** — trace contributions from donor → committee → candidate
- **Committee officers** — who is treasurer? Who is registered agent?
- **Expenditures** — who gets paid? For what services? When?
- **Timing** — contributions clustered around key decisions (votes, contract awards, appointments)
- **Committee-to-committee transfers** — the mechanism by which dark money moves

---

## The Cross-Reference

A single database tells one story. The power is in reading multiple sources against each other:

| If you find... | Cross-reference with... |
|---------------|----------------------|
| A name on a campaign filing | LARA (entity connections), docket (litigation), FOIA (government role) |
| A court order that seems wrong | Appellate opinions (was it reversed?), JTC Annual Report (was the judge admonished?), other dockets (pattern?) |
| A law firm PLLC | LARA (formation date), campaign finance (political donations), docket (client list) |
| An MSP investigator in a shooting review | PACER (federal civil rights cases), other county shootings (same investigator?), MCOLES (certification status) |
| A FOIA denial | Other FOIA responses from same agency (pattern?), circuit court FOIA lawsuits (has this agency lost before?) |

## Sources

- Michigan Courts: [courts.michigan.gov](https://www.courts.michigan.gov)
- PACER: [pacer.uscourts.gov](https://pacer.uscourts.gov)
- LARA: [mibusinessregistry.lara.state.mi.us](https://mibusinessregistry.lara.state.mi.us/search/business)
- Michigan CFRS: [miboecfr.nictusa.com/cfr](https://miboecfr.nictusa.com/cfr/)
- TransparencyUSA: [transparencyusa.org](https://www.transparencyusa.org)
