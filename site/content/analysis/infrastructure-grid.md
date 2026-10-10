+++
title = "Infrastructure Grid — Every Point Where Entity Infrastructure Touches Individual Privacy"
description = "A fluorescent tag map of every node where corporate and political infrastructure intersects with individual human data. Each node tagged with: what data it collects, how it gets access, what legal protection exists, and the public record that makes it visible."
weight = 2

[extra]
keywords = "FOIAworks privacy, LakeNet surveillance, Domains By Proxy dark money, GoDaddy cPanel exposed, Microsoft 365 tenant FOIAworks, Quagmire Solutions data collection, Through My Eyes Facebook group, Philip Ellison infrastructure, dark money individual privacy, FOIA platform data collection, Dykema dark money privacy, Save Detroit Jobs phone number, infrastructure surveillance map"

[taxonomies]
counties = ["Saginaw"]
+++

## What This Page Is

A fluorescent tag map.

In biology, a fluorescent tag is a molecule that attaches to a target and glows under UV light — making the invisible visible. This page tags every node where entity infrastructure touches individual human data, so the entire system lights up at once.

Each node is tagged with:
- **COLLECTS:** What individual human data this node accesses
- **HOW:** The mechanism of data collection
- **PROTECTION:** What legal privacy protection exists (or doesn't)
- **TAG:** The public record that makes this node visible to anyone

---

## The Grid

### NODE 1: FOIAworks.com — The Honeypot

**Operator:** [Quagmire Solutions, LLC](/evidence/foiaworks-honeypot/) (Philip L. Ellison, registered agent)

| | |
|---|---|
| **COLLECTS** | Requester identity (name, email, account). Investigation targets (which agency, what topic). Correspondence (all messages between requester and government). Responsive documents (the actual FOIA productions). Payment data ($4.95-$69.95/month). Browsing patterns (PHPSESSID on every visit — [infrastructure scan](/evidence/foiaworks-infrastructure/)). |
| **HOW** | Account creation. Payment processing. Server-side session tracking (PHP session cookie issued to every visitor, logged-in or not). No opt-out. 3,537 Michigan public bodies in targeting database. 11 persona landing pages recruiting journalists, investigators, attorneys, researchers, frequent filers. |
| **PROTECTION** | **None.** [Privacy policy returns 404 Not Found](/evidence/foiaworks-infrastructure/) (verified Oct 9, 2026). No published data use policy. No retention limits. No deletion mechanism. No breach notification commitment. Terms of Service grant platform broad rights to user content. |
| **TAG** | [foiaworks-infrastructure](/evidence/foiaworks-infrastructure/) — IP address, hosting stack, SSL certificate SANs, sitemap analysis, WHOIS, email misconfiguration. All from public DNS, HTTP headers, Certificate Transparency logs. |

**Who it touches:** Every person who creates an account, files a request, or even browses the site. The $69.95/month "Statewide" plan captures up to 120 FOIA requests — potentially every investigation a journalist or researcher runs across all 83 Michigan counties.

---

### NODE 2: LakeNet LLC (AS11910) — The ISP Trace

**Operator:** Christopher Fabien (CTO), Keri Fabien (Operations), Rob Bresnahan (CFO)

| | |
|---|---|
| **COLLECTS** | IP address assignment (which subscriber gets which IP at what time). Traffic metadata (source/destination of all connections). DNS queries (what domains subscribers visit). Session logs (connection timestamps). |
| **HOW** | Standard ISP infrastructure. Every device that connects to LakeNet's network (office WiFi, home connection, guest devices) gets a 162.247.x.x or 158.51.x.x IP address that traces to Hemlock, MI. In a town of ~1,500 with one ISP, any LakeNet IP in evidence is functionally an address. |
| **PROTECTION** | Federal: [Cable Communications Policy Act](https://www.law.cornell.edu/uscode/text/47/chapter-5/subchapter-V-A) (47 U.S.C. §551) protects subscriber records. State: MPSC regulations require CLEC compliance. Both require legal process (subpoena/court order) for disclosure. |
| **TAG** | [LakeNet signal trace](/analysis/lakenet-signal-trace/) — ARIN WHOIS (AS11910), MPSC ITSP registry, PeeringDB, Certificate Transparency. Three independent captures of 162.247.150.54: [surveillance logs](/evidence/data-braid-aljouny/), federal court filing (PACER), [domain registration chain](/evidence/domain-registrations/). |

**Who it touches:** Every LakeNet subscriber (~500-1,000 households). Every person who visits Ellison's office and connects to WiFi. Every device that passes through the 162.247.144.0/21 range. The multi-capture means the IP is a persistent operational fingerprint — a tracer isotope that illuminates every connection sharing the infrastructure.

---

### NODE 3: GoDaddy Account — The Domain Empire

**Operator:** Account holder (identity masked by Domains By Proxy)

| | |
|---|---|
| **COLLECTS** | Domain registration IP addresses (what IP registered each domain). Session logs (every login, every DNS change, every renewal). Payment data (credit card for domain purchases). cPanel access logs (every admin session on foiaworks.com). WebDisk file access logs. Email routing logs. |
| **HOW** | Single GoDaddy account manages: foiaworks.com (FOIA platform), olcplc.com (law firm), [ritafelinewilliams.com](/evidence/impersonation-domain/) (harassment/impersonation), [dinowaynehines.com](/evidence/domain-registrations/) (PPO holder target), [avalynnwilliams.com](/evidence/domain-registrations/) (minor child target). All share GoDaddy registrar, Domains By Proxy privacy, identical lock configurations. [Three harassment domains registered within 30 minutes](/evidence/domain-registrations/). Law firm domain updated 24 hours later. |
| **PROTECTION** | GoDaddy's privacy policy. Domains By Proxy agreement (disclosable by court order). [cPanel login page is publicly accessible](/evidence/foiaworks-infrastructure/) — entire application managed through single username/password behind standard GoDaddy shared hosting security. |
| **TAG** | [domain-registrations](/evidence/domain-registrations/) — WHOIS records, registration timestamps, lock configuration fingerprints. [foiaworks-infrastructure](/evidence/foiaworks-infrastructure/) — SSL certificate SANs reveal cpanel.foiaworks.com, mail.foiaworks.com, webdisk.foiaworks.com. All from Certificate Transparency logs. |

**Who it touches:** Rita Williams (impersonation domain active, renewed through 2027). Dino Wayne Hines (PPO holder, domain registered in his legal name). A minor child (domain registered in her legal name). Every FOIAworks user (data managed through this cPanel). Every OLC PLC client (law firm communications through this infrastructure).

---

### NODE 4: Microsoft 365 Tenant — The Email Cloud

**Operator:** Tenant NETORGFT19358193.onmicrosoft.com

| | |
|---|---|
| **COLLECTS** | All email sent to/from foiaworks.com addresses. OneDrive/SharePoint documents (if configured). Teams communications (if configured). Calendar data. Contact lists. Admin audit logs. |
| **HOW** | MX record routes all inbound foiaworks.com email to `foiaworks-com.mail.protection.outlook.com`. M365 tenant identified from DNS TXT record. Autodiscover CNAME points to outlook.com. [SPF is misconfigured](/evidence/foiaworks-infrastructure/) — authorizes GoDaddy but not M365 for sending, meaning outbound email may fail validation. |
| **PROTECTION** | Microsoft's [privacy policy](https://privacy.microsoft.com/) and [DPA](https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA). But Microsoft protects data between Microsoft and the tenant admin — it does NOT protect FOIAworks users from the tenant admin (Ellison/Quagmire Solutions). **The gap is between the platform operator and the users, not between Microsoft and the operator.** |
| **TAG** | DNS TXT record containing `NETORGFT19358193.onmicrosoft.com`. MX record pointing to `foiaworks-com.mail.protection.outlook.com`. Autodiscover CNAME to `autodiscover.outlook.com`. All publicly queryable: `nslookup -type=TXT foiaworks.com` |

**Who it touches:** Every person who emails a foiaworks.com address. Every FOIAworks user who receives email notifications about their FOIA requests. Every government agency that responds to a FOIAworks-routed request by email.

---

### NODE 5: Quagmire Solutions LLC — The Bridge

**Operator:** Philip L. Ellison (registered agent, LARA B0703X)

| | |
|---|---|
| **COLLECTS** | Historical: ISP client data from "internet service companies" (plural, per OLC PLC bio). Current: FOIAworks platform data. Web design client data. Three companies at registered address (1111 S Orr Rd, Hemlock) — two unidentified. |
| **HOW** | Pre-law career (2000-2007): built websites for ISPs, "a major regional newspaper owned by an international outfit" (likely Saginaw News / Advance Local), internet service companies. Current: operates FOIAworks.com as active LARA entity. The Quagmire → LakeNet pipeline means historical infrastructure knowledge of the local ISP network architecture. |
| **PROTECTION** | None published. Quagmire Solutions has no public privacy policy, no terms of service, no public-facing website. It exists as a LARA entity and as the declared operator of FOIAworks. |
| **TAG** | LARA entity B0703X (Active). [OLC PLC bio](https://michigansupremecourtattorney.com/meet-attorney-ellison) describing ISP client work. FOIAworks Terms of Service naming "Quagmire Solutions, LLC" as platform operator. CompaniesMI listing "3 companies at the same address." |

**Who it touches:** Historical ISP clients' customer data (if retained). Current FOIAworks users. Unknown entities at the registered address.

---

### NODE 6: Through My Eyes — The Amplification Platform

**Operator:** Admin team including JM (Kevin Lindke's mother, Macomb County)

| | |
|---|---|
| **COLLECTS** | Facebook group member identities (~25,000 members). Post engagement data. Admin action logs (post approval, content removal, member management). IP addresses for every admin session (Facebook internal logs). Comment and reaction history. |
| **HOW** | Facebook group with public membership. Admin panel provides member management, post moderation, and content control. Facebook preserves IP addresses for every admin action. Philip L. Ellison [joined July 6, 2020](/analysis/lakenet-signal-trace/). If any moderation action originated from a LakeNet IP (162.247.x.x), someone in Hemlock was moderating content in a group with 25,000 members. |
| **PROTECTION** | Facebook's Terms of Service and privacy policy govern the platform. Group admins have access to member lists and moderation tools but not raw IP data (that requires Facebook legal process). Group members have no privacy from admins regarding their membership and post history. |
| **TAG** | Facebook group search (public). Membership list (visible to members). Admin list (partially visible). Ellison join date documented in [data braid](/evidence/data-braid-aljouny/). |

**Who it touches:** ~25,000 group members. Anyone tagged, mentioned, or discussed in posts. PPO holders named in group content. Journalists and investigators named in group discussions.

---

### NODE 7: The Harassment Domains — Active Impersonation

**Operator:** Account holder behind Domains By Proxy

| | |
|---|---|
| **COLLECTS** | Visitor IP addresses (server logs). Visitor device fingerprints (HTTP headers). Referrer data (where visitors came from). Search engine click-through data. Any form submissions (if forms exist). |
| **HOW** | Three domains [registered within 30 minutes](/evidence/domain-registrations/) targeting PPO holders: ritafelinewilliams.com (active impersonation site, renewed through 2027), dinowaynehines.com, avalynnwilliams.com (minor child). Hosted on GoDaddy. ritafelinewilliams.com is SEO-targeted to rank for Rita Williams' name — anyone Googling the journalist finds the impersonation site. |
| **PROTECTION** | **None for the targets.** The domains use Domains By Proxy to hide the registrant. The targets cannot identify who registered domains in their names without a court order to GoDaddy. Michigan's [Identity Theft Protection Act](http://www.legislature.mi.gov/(S(n0jkx4yt0vy3cdjzalfjpxlg))/mileg.aspx?page=GetObject&objectname=mcl-445-61) (MCL 445.61 et seq.) and [cyberstalking statute](http://www.legislature.mi.gov/(S(n0jkx4yt0vy3cdjzalfjpxlg))/mileg.aspx?page=GetObject&objectname=mcl-750-411s) (MCL 750.411s) apply but require identifying the registrant first. |
| **TAG** | [domain-registrations](/evidence/domain-registrations/) — WHOIS timestamps, registration sequence, lock configuration match, 24-hour olcplc.com update. All public via WHOIS and Certificate Transparency. |

**Who it touches:** Rita Williams (journalist, impersonation target). Dino Wayne Hines (PPO holder). A minor child (domain registered in her legal name). Anyone who finds the impersonation site through search engines.

---

### NODE 8: Court Filing System — The Legal Infrastructure

**Operator:** Philip L. Ellison / OLC PLC

| | |
|---|---|
| **COLLECTS** | Every person named in a filing becomes part of the public record. Addresses, phone numbers, and personal details included in court documents become accessible through PACER and state court systems. Ellison's filings have included the [fabricated "Aljouny" identity](/evidence/ghost-witness-aljouny/) — injecting false information into the court record system. |
| **HOW** | Attorney filing privilege. E-filing systems. PACER. TrueFiling. State court clerks. |
| **PROTECTION** | Court records are public by default. Privacy protections exist for minors, sealed cases, and redacted information — but attorneys control what goes INTO the filing. A fabricated witness declaration, once filed, becomes part of the permanent court record. |
| **TAG** | [ghost-witness-aljouny](/evidence/ghost-witness-aljouny/) — the fabricated declaration. [ellison-sanctions](/evidence/ellison-sanctions/) — $74,752.45 in federal sanctions. [litigation-docket](/evidence/litigation-docket/) — full case history. All public via PACER and state court dockets. |

**Who it touches:** Every party in every case Ellison files. Every witness named (real or fabricated). Every person whose information appears in exhibits. The judicial system itself — false filings corrupt the record.

---

## The Dykema Grid

### NODE 9: Save Detroit Jobs / Detroit Leaders — The Hollow Nonprofit

| | |
|---|---|
| **COLLECTS** | Donor identities (not required to disclose as 501(c)(4)). Expenditure targets (who the money is spent against). Voter contact data (for mailers and ad targeting). Community organizing data (contact lists, event attendees). |
| **HOW** | IRS 501(c)(4) status — not required to disclose donors. [Phone number is Dykema's (517-374-9100)](/analysis/how-to-build-an-os/). Tax returns prepared by Dykema. Officers include [two Dykema employees](/analysis/how-to-build-an-os/) and a [convicted felon](/analysis/how-to-build-an-os/). Spent [$84,017 defeating a journalist](https://www.deadlinedetroit.com/articles/28930/benson-tied_non-profit_pivots_to_fighting_elrick_in_detroit_district_4_council_race) in a city council race. Paid [$18,000+ to FBI raid target](https://www.deadlinedetroit.com/articles/28819/the_messy_intersection_of_dark_money_and_detroit_politics) Carol Banks in "unspecified reimbursements." |
| **PROTECTION** | 501(c)(4) donor secrecy. No public accountability for who funds the entity or how it targets individuals. The voters targeted by $84K in attack mailers have no way to know who paid for them. |
| **TAG** | [IRS 990EZ](https://projects.propublica.org/nonprofits/organizations/813772058) (EIN 81-3772058). LARA entity search. [MI SOS campaign finance](https://miboecfr.nictusa.com/cfr/). [How To Build an OS](/analysis/how-to-build-an-os/). |

**Who it touches:** Every voter who received attack mailers without knowing who funded them. ML Elrick (investigative journalist, defeated). Carol Banks (FBI raid target, received $18K in unspecified reimbursements). Every resident of Detroit District 4 whose representative was selected by dark money.

---

### NODE 10: Our Neighborhoods First — The Duggan Machine

| | |
|---|---|
| **COLLECTS** | Same as Node 9 — donor identities hidden, expenditure targets public only through FCC filings for broadcast ads. Voter targeting data for mailers, texts, digital ads. "Believed to have spent hundreds of thousands of dollars" ([Deadline Detroit](https://www.deadlinedetroit.com/articles/26311/dark_money_flows_into_duggan_s_250_million_detroit_bond_campaign)). |
| **HOW** | 501(c)(4). Domains By Proxy website. PO Box 43001 at Renaissance Center (same box as Detroit Forward Together SuperPAC). Officers are Duggan appointees. Incorporated by Wilk, compliance by Moore. Website registered through Domains By Proxy. |
| **PROTECTION** | 501(c)(4) donor secrecy. Domains By Proxy registration privacy. PO Box instead of physical address. Officers [decline comment](https://www.deadlinedetroit.com/articles/26311/dark_money_flows_into_duggan_s_250_million_detroit_bond_campaign). |
| **TAG** | [WHOIS](https://www.whois.com/whois/) — Domains By Proxy confirmed. [FCC filings](https://www.fcc.gov/) — broadcast ad disclosures. [Deadline Detroit](https://www.deadlinedetroit.com/articles/26311/dark_money_flows_into_duggan_s_250_million_detroit_bond_campaign) — investigative reporting. [How To Build an OS](/analysis/how-to-build-an-os/). |

**Who it touches:** Every Detroit voter targeted by ads and mailers from an entity they cannot identify. Anthony Adams (mayoral candidate, attacked). Every Detroiter who voted on Prop N based on messaging from an entity whose funders are secret.

---

### NODE 11: RFFW LLC — The $1M Pass-Through

| | |
|---|---|
| **COLLECTS** | Minimal — this was a single-purpose entity. But it collected the donor's identity (Shery Cotton) and concealed it from the public for 353 days. |
| **HOW** | LLC formed July 14, 2022. $1M donated to Reproductive Freedom for All within 15 days. No public disclosure. [Treasurer: Renae Moore](/analysis/how-to-build-an-os/) (Dykema). Attorney: W. Alan Wilk (Dykema). Registered agent: CSC – Lawyers Incorporating Service. [Complaint](https://www.michigan.gov/sos/-/media/Project/Websites/sos/CFR-Complaints/2023/Meyers-v-RFFW-2.pdf) characterized it as a "$1,000,000 money laundering scheme." |
| **PROTECTION** | LLC formation privacy. Complaint forced disclosure. Penalty: $1,300 in late fees. The entity's purpose was specifically to prevent the public from knowing who donated $1M to a ballot campaign. |
| **TAG** | [MI SOS complaint](https://www.michigan.gov/sos/-/media/Project/Websites/sos/CFR-Complaints/2023/Meyers-v-RFFW-2.pdf) (Meyers v RFFW). [Detroit News](https://www.detroitnews.com/story/news/politics/2023/08/30/abortion-campaign-donation-shery-cotton-grosse-pointe-park-million-dollars-alleged-money-laundering/70708048007/). [How To Build an OS](/analysis/how-to-build-an-os/). |

**Who it touches:** Every Michigan voter who voted on the reproductive rights ballot question without knowing a single person donated $1M through a shell entity.

---

## The Grid — Lit Up

```
INDIVIDUAL HUMAN                    ENTITY INFRASTRUCTURE
─────────────────                   ─────────────────────

Journalist researches          →    FOIAworks [NO PRIVACY POLICY]
  government misconduct              collects: identity, targets,
                                     documents, browsing patterns

Journalist's website           ←    LakeNet IP 162.247.150.54
  surveilled from Hemlock             3 independent captures

PPO holders' legal names       →    GoDaddy / Domains By Proxy
  registered as domains               3 domains in 30 minutes
  including MINOR CHILD                renewed through 2027

Investigative reporter         ←    SDJ/Detroit Leaders [$84K]
  defeated in city election           phone = Dykema: 517-374-9100

25,000 Facebook members        →    Through My Eyes group
  visible to admin team               attorney joined Jul 2020

Detroit voters                 ←    Our Neighborhoods First
  targeted by secret money            "hundreds of thousands"
                                     Domains By Proxy website

Michigan voters                ←    RFFW LLC [$1M hidden 353 days]
  uninformed of ballot donor          penalty: $1,300

Every FOIAworks email          →    Microsoft 365 tenant
  routed through Ellison              NETORGFT19358193
  with misconfigured SPF

Court record system            ←    Fabricated witness filed
  corrupted by false filing           "Samantha Aljouny"
                                     PGP key: Sep 20, 2023
```

---

## What The Grid Shows

When you light up every node simultaneously, the pattern is:

1. **No node has adequate privacy protection for the individuals it touches.** FOIAworks has no privacy policy. SDJ hides its donors. ONF hides behind Domains By Proxy. RFFW hid a $1M donor for 353 days. The harassment domains hide behind the same privacy service.

2. **Privacy infrastructure designed for individuals is used by entities to avoid accountability.** Domains By Proxy protects individuals from having their home address in WHOIS. These entities use it to hide who runs political operations spending hundreds of thousands of dollars.

3. **The same infrastructure that hides entity identity collects individual identity.** FOIAworks has no privacy policy but requires account creation. The FOIA platform operated by the attorney who surveilled a journalist collects the identities of people investigating government misconduct.

4. **Every node connects through a small number of operators.** Two attorneys (Wilk, Ellison), one compliance specialist (Moore), one law firm (Dykema), one ISP (LakeNet), one registrar (GoDaddy), one privacy service (Domains By Proxy). The infrastructure that touches millions of people is controlled by a handful of entities.

5. **The legal protections point the wrong direction.** Domains By Proxy protects the entity from the public. 501(c)(4) status protects the donor from the voter. No published privacy policy protects the platform operator from the user. In every case, the protection shields the entity and exposes the individual.

---

## How To Verify Every Node

| Node | Verification Method |
|------|-------------------|
| FOIAworks | Visit [foiaworks.com/privacy/](https://foiaworks.com/privacy/) → 404 |
| LakeNet | `nslookup` any 162.247.x.x → `host.secureserver.net` trace to [ARIN AS11910](https://whois.arin.net/rest/asn/AS11910.html) |
| GoDaddy domains | [WHOIS lookup](https://www.whois.com/whois/) on any listed domain |
| M365 tenant | `nslookup -type=TXT foiaworks.com` → find NETORGFT19358193 |
| Quagmire Solutions | [LARA search](https://mibusinessregistry.lara.state.mi.us/) → entity B0703X |
| SDJ phone | [ProPublica Nonprofit Explorer](https://projects.propublica.org/nonprofits/organizations/813772058) → 517-374-9100 |
| Domains By Proxy | WHOIS on ourneighborhoodsfirst.com or ritafelinewilliams.com |
| RFFW complaint | [michigan.gov/sos](https://www.michigan.gov/sos/-/media/Project/Websites/sos/CFR-Complaints/2023/Meyers-v-RFFW-2.pdf) |

---

## Sources

All public records, published journalism, and independently verifiable technical data. No private information, no hacking, no account creation, no social engineering. The servers were asked public questions and they answered them. The filings are on public databases. The journalism is published and linked.

**Related pages:**
- [Tommy Boy](/analysis/tommy-boy/) — The Barrett node: where Dykema PAC money becomes "convicted felon" smear against tenant advocates. FEC → LARA → IRS → projection.
- [FOIAworks Infrastructure Scan](/evidence/foiaworks-infrastructure/)
- [LakeNet Signal Trace](/analysis/lakenet-signal-trace/)
- [How To Build an OS](/analysis/how-to-build-an-os/)
- [Domain Registration Campaign](/evidence/domain-registrations/)
- [Data Braid — Aljouny Investigation](/evidence/data-braid-aljouny/)

---

*When you tag every node, the grid lights up. The pattern is not hidden — it was just never illuminated simultaneously. Individual privacy serves individuals. Entity privacy, at this scale, serves concealment.*
