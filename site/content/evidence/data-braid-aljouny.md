+++
title = "Data Braid — Aljouny Investigation: Public vs. Private Evidence Layers"
description = "Separating what anyone can verify from public sources, what requires FOIA or private forensics, and what a reverse target search reveals. Every node independently checkable."
weight = 2

[extra]
keywords = "Samantha Aljouny data braid, Aljouny ARIN WHOIS, LakeNet LLC Hemlock Michigan, LakeNet AS11910, MPSC ITSP registry LakeNet, Philip Ellison IP address, Outside Legal Counsel IP, Clutch Justice data braid, Aljouny forensic investigation, LakeNet broadband ISP Hemlock"
+++

## Purpose

This page separates the evidence in the [Aljouny investigation](/evidence/ghost-witness-aljouny/) into three layers:

1. **Public data** — independently verifiable by anyone right now
2. **Private forensics** — Rita's own server logs, controlled tests, and communications
3. **Court filings** — public once filed, but requires docket access

Then it braids them: running **reverse target searches** on the public data to see if the nodes Rita found through FOIAs and forensics can be independently confirmed.

---

## Layer 1: Public Data (Anyone Can Verify)

### The PGP Key

The ProtonMail public PGP key for `SAljounyMediaConsulting@proton.me` is publicly queryable through ProtonMail's Web Key Directory or standard OpenPGP key servers.

| Field | Value | How to Verify |
|-------|-------|---------------|
| **Key creation** | September 20, 2023 at 11:26:35 UTC | Query ProtonMail WKD or `keys.openpgp.org` |
| **Hex timestamp** | `650AD6EB` | Decode with any Unix timestamp converter |
| **Fingerprint** | `8D59 A462 1930 5ABE 2021 9F07 6EE0 32D8 A3A3 E6D4` | Public key metadata |

Proton states it normally generates encryption keys when an account is created. This is the best available provenance date.

### The Ahmad v. UM Timeline

| Date | Event | Public Source |
|------|-------|---------------|
| **Sep 15, 2023 (Fri)** | Court of Claims issues opinion ordering UM to release 25,000+ pages of Tanton Papers. Rejects all blanket exemptions. | Michigan Court of Claims, *Ahmad v. University of Michigan* |
| **Sep 16, 2023 (Sat)** | OLC PLC publishes press release: "Michigan Court Orders UM to Release Tanton Papers" | [olcplc.com/public/media?1694871756=](https://www.olcplc.com/public/media?1694871756=) (URL timestamp `1694871756` = Sep 16, 2023) |
| **Sep 20, 2023 (Wed)** | **Aljouny ProtonMail PGP key created** | ProtonMail WKD / OpenPGP key servers |
| **Sep 21, 2023** | Wayback Machine captures OLC Ahmad page | [web.archive.org](https://web.archive.org) |

**The gap is 4 days.** The Aljouny identity was created during the exact window of maximum public attention on Ellison's biggest FOIA win.

### "Aljouny Media Consulting" Does Not Exist

| Database | Search Result | How to Verify |
|----------|--------------|---------------|
| **Michigan LARA** | No entity registered | [mibusinessregistry.lara.state.mi.us/search/business](https://mibusinessregistry.lara.state.mi.us/search/business) → search "Aljouny" |
| **Google** | Zero professional results | google.com → "Samantha Aljouny" or "Aljouny Media Consulting" |
| **LinkedIn** | No profile | linkedin.com search |
| **Journalism directories** | No bylines, no credentials | Google Scholar, journalism.org, press credential directories |
| **State business databases (all 50)** | No registration | OpenCorporates, Secretary of State databases |

A professional media consultant operating under a business name has a verifiable trail. This one has **nothing except a ProtonMail address.**

### LakeNet LLC → Hemlock, Michigan

Rita identified IP address `162.247.150.54` from her server logs as surveilling her site — accessing 7 pages on April 29, 2026, the same morning Ellison transmitted a retraction demand. She traced it through PACER federal records to LakeNet LLC.

**Reverse target search (all public):**

| Source | Finding | URL |
|--------|---------|-----|
| **ARIN WHOIS** | LakeNet LLC (LL-86), AS11910. IP space includes **162.247.144.0/21** (contains 162.247.150.54). | [whois.arin.net/rest/asn/AS11910](https://whois.arin.net/rest/asn/AS11910.html) |
| **MPSC Registration** | LakeNet LLC, **16690 Gratiot Rd, Hemlock, Michigan 48626**. Broadband/fiber/wireless ISP. Phone: (989) 643-5819. | [MPSC ITSP Registry](https://mpsc.my.site.com/itsp/RegistredProviderDetail?id=001E000001AXQcJIAX) |
| **IP Geolocation** | 162.247.x.x → Dearborn/Wayne County (generic geolocation). But the ISP registration address is **Hemlock, Saginaw County**. | [ip2location.com](https://www.ip2location.com/158.51.70.0) |
| **OLC PLC Contact** | Outside Legal Counsel PLC: **530 West Saginaw St / 530 W Gratiot St, Hemlock, MI 48626**. | [olcplc.com/public/contact](https://www.olcplc.com/public/contact) |

**The braid:** LakeNet LLC is a broadband ISP headquartered in Hemlock, Michigan — population ~1,500. OLC PLC is headquartered in Hemlock, Michigan. They share the same ZIP code (48626). LakeNet is Ellison's internet service provider. The IP address that surveilled Rita's site comes from the same tiny community as Ellison's office.

This is not a coincidence identified through forensics. This is a **geographic fact verifiable from three public registries.**

### Lindke's Criminal History

Rita says Ellison's client Kevin Lindke stalked her family, targeted her children, and that the SLAPP suit was filed two months after she spoke up. **Reverse target search on Lindke:**

| Source | Finding | URL |
|--------|---------|-----|
| **Times Herald (Nov 29, 2021)** | Lindke pleaded guilty to attempted assault, resisting officer, and **using computers to commit a crime**. Posted two women's phone numbers to his "Through My Eyes" Facebook page. Both received harassing/threatening messages from strangers. Judge Damman noted "long history of litigation with the victims." Sentenced to 272 days time served. B&E charge dismissed. | [thetimesherald.com](https://www.thetimesherald.com/story/news/2021/11/29/kevin-lindke-sentenced-time-served-case-involving-facebook-posts/8792168002/) |
| **Lindke v. Freed (US Supreme Court, 2024)** | Ellison represented Lindke. Case about city manager blocking Lindke's Facebook comments. SCOTUS vacated, remanded with new test. | [law.cornell.edu](https://www.law.cornell.edu/supremecourt/text/22-611) |
| **Lindke v. Freed remand (6th Cir., Aug 21, 2024)** | Ellison argued on remand. "Philip L. Ellison, OUTSIDE LEGAL COUNSEL PLC, Hemlock, Michigan, for Appellant." | [Justia](https://law.justia.com/cases/federal/appellate-courts/ca6/21-2977/21-2977-2024-08-21.html) |

**The braid:** Ellison's client has a documented criminal conviction for using computers to harass people through the same Facebook group ("Through My Eyes") that Rita says was used to coordinate harassment against her. This is not Rita's claim alone — it is **public court records from St. Clair County and the federal courts.**

### The UPEPA Contradiction (Two Public Dockets)

| Case | Ellison's Position | Docket Source |
|------|-------------------|---------------|
| **26-000243-CZ** (Ellison v. Consumers Energy) | UPEPA applies retroactively to post-effective-date claims in pre-effective-date lawsuits. Filed March 26 and April 20, 2026. | Saginaw County Circuit Court |
| **25-2441-CZ** (OLC v. Williams) | Opposes UPEPA application. | Saginaw County Circuit Court |

**Same courthouse.** Same attorney. **Mutually exclusive positions.** Both dockets are public and can be pulled by anyone at the Saginaw County Circuit Court clerk's office.

### Ellison's Firm & Personnel

| Fact | Source |
|------|--------|
| Philip L. Ellison, MBA, JD. MSU College of Law. | [olcplc.com/public/profile-ellison](https://www.olcplc.com/public/profile-ellison) |
| Legal Assistant: **Lisa Edgecomb**. Phone: (989) 642-0055. | Same page |
| Hemlock, MI 48626. PO Box 107, 530 W Saginaw St. | [olcplc.com/public/contact](https://www.olcplc.com/public/contact) |
| Member of Through My Eyes Facebook group since **July 6, 2020** | Facebook (Rita documented, court-filed) |

---

## Layer 2: Private Forensics (Rita's Own Evidence)

These are evidence Rita generated through her own infrastructure. They cannot be independently verified without her server logs, but they are documented in court filings:

| Evidence | What It Shows | How Rita Got It |
|----------|-------------|----------------|
| **Controlled Bitly test (Jul 31, 2026)** | Unique link sent ONLY to Aljouny account was opened. Device: iPhone, iOS 18.7, Safari 26.5, Fastly CDN, ID `15E148`. | Rita created the Bitly URL, sent it to the Aljouny email, monitored analytics |
| **Pre-test site visits** | Same IPv4 endpoint (146.75.128.219) visited site on Jun 1, Jun 17, Jul 27 before the controlled test | WordPress site analytics / server logs |
| **LakeNet IP sessions** | IP 162.247.150.54 accessed 7 pages between 8:45 AM and 11:56 AM on Apr 29, 2026. Same afternoon Ellison sent retraction demand. | WordPress security logs |
| **Oct 6 device match** | Ellison's own court exhibit shows article accessed at ~11:54 AM. Same device fingerprint as controlled Aljouny test (iPhone, iOS 18.7, Safari 26.6.1, `15E148`). Safari version update (26.5→26.6.1) is ordinary. | Comparison of court exhibit timestamp vs. server log device profile |
| **Ikonomova independent contact** | Violet Ikonomova (Detroit Free Press) received Aljouny email Sep 9, 2026. Independently suspected "probably phil." | Private communication between Ikonomova and Rita |

### Why the Private Layer Matters

The controlled Bitly test is the linchpin. Everything else is correlation. The Bitly test is **causation**: a link sent only to the Aljouny account was opened by a device with a specific fingerprint. That same fingerprint later appears in Ellison's own court filing.

The private evidence is filed in court and available on the docket. But the underlying server logs are Rita's.

---

## Layer 3: Court Filings (Public Once Filed)

| Document | What It Contains | Docket |
|----------|-----------------|--------|
| **Ellison's sworn affidavit** | "No connection whatsoever" to Aljouny account. Never used ProtonMail. Never opened account. Never directed creation. | 25-2441-CZ |
| **Discovery demands** | Ellison demanded Rita admit under oath that *she* created the Aljouny identity | 25-2441-CZ |
| **Supplemental Notice (Apr 28, 2026)** | Documented that Aljouny does not exist in any verifiable record. Filed BEFORE the show cause order. | 25-2441-CZ |
| **UPEPA Special Motion (May 6, 2026)** | Defendant's anti-SLAPP filing. Automatic stay triggered. | 25-2441-CZ |
| **Show cause order (Apr 30, 2026)** | Signed by Borrello. Based on the Ghost Witness article. Signed AFTER the supplemental notice was filed. | 25-2441-CZ |
| **Motion for Sanctions (May 15, 2026)** | Designates 6 specific filings as frivolous. Requests AGC referral. | 25-2441-CZ and Macomb County |
| **Borrello recusal order (May 12, 2026)** | Denied DQ motion. Immediately recused on appearance-of-bias. | 25-2441-CZ |
| **COA 380599** | Emergency appeal of show cause proceeding | Michigan Court of Appeals |
| **IC3 complaint (Oct 6, 2026)** | Filed. ID: `10f80c476ef144d4a772d0b198c75a2a` | IC3 / FBI |

---

## The Reverse Target Search

Starting from **what Rita found**, can we independently trace the same nodes through public sources?

### Target 1: "Who is LakeNet LLC?"

Rita's finding: IP 162.247.150.54 surveilled her site.

**Public reverse search chain:**
```
162.247.150.54
  → ARIN WHOIS → LakeNet LLC (AS11910)
    → MPSC Registry → 16690 Gratiot Rd, Hemlock, MI 48626
      → Same ZIP as OLC PLC (530 W Saginaw St, Hemlock, MI 48626)
        → Hemlock population: ~1,500
          → LakeNet is Ellison's ISP
```

**Verdict: Independently confirmed.** Three public registries connect the surveillance IP to Ellison's town.

### Target 2: "When was the Aljouny identity created relative to Ellison's casework?"

Rita's finding: PGP key created Sep 20, 2023 — 4 days after Ahmad v. UM press release.

**Public reverse search chain:**
```
PGP key timestamp: 650AD6EB → September 20, 2023 11:26:35 UTC
OLC PLC press archive → olcplc.com/public/media?1694871756=
  → URL timestamp 1694871756 → September 16, 2023
    → Ahmad v. UM Court of Claims opinion → September 15, 2023
      → Gap: exactly 4 days
```

**Verdict: Independently confirmed.** Public key server + OLC's own website + court records.

### Target 3: "Does Lindke have a history consistent with what Rita describes?"

Rita's finding: Lindke stalked her family, registered domains in her daughter's name, has a pattern of online harassment.

**Public reverse search chain:**
```
Kevin Lindke → Times Herald (Nov 2021)
  → Guilty plea: attempted assault, computer crime, resisting officer
    → "Through My Eyes" Facebook → posted women's phone numbers
      → Strangers sent harassing/threatening messages
        → Judge Damman: "long history of litigation with the victims"
          → 272 days time served
```

**Verdict: Independently confirmed.** Lindke's criminal conviction for computer-facilitated harassment is public record. The same Facebook group name appears in both the 2021 conviction and Rita's 2025-2026 allegations.

### Target 4: "Is Ellison really taking contradictory UPEPA positions?"

Rita's finding: Judicial estoppel — same attorney, opposite positions, same courthouse.

**Public reverse search chain:**
```
Saginaw County Circuit Court
  → Case 26-000243-CZ (Ellison v. Consumers Energy)
    → UPEPA motions filed March 26 and April 20, 2026
      → Position: UPEPA applies retroactively
  → Case 25-2441-CZ (OLC v. Williams)
    → Opposes defendant's UPEPA motion
      → Position: UPEPA does not apply
```

**Verdict: Independently confirmable.** Both dockets are at the same courthouse. Pull them.

### Target 5: "Is Aljouny Media Consulting registered anywhere?"

**Public reverse search chain:**
```
"Aljouny Media Consulting"
  → LARA Michigan Business Search → 0 results
  → OpenCorporates → 0 results
  → Google → 0 results
  → LinkedIn → 0 results
  → Journalism directories → 0 results
  → Byline archives → 0 results
```

**Verdict: Independently confirmed.** The identity does not exist in any public database. The absence IS the evidence.

### Target 6: "What is Conrad Mallett's connection?"

Rita's finding: Aljouny emailed Mallett on Sep 9, 2026. Ikonomova was BCC'd.

**Public reverse search chain:**
```
Conrad Mallett Jr.
  → Detroit Corporation Counsel (detroitmi.gov)
    → Retained by Mayor Mary Sheffield (Crain's, Jan 2026)
      → Sheffield = dark money pipeline endpoint (detroit.primals.eco)
  → Former Michigan Supreme Court Chief Justice
  → Under Ethics Board investigation (Michigan Lawyers Weekly, Aug 2026)
    → Lear Corp. directorship while heading Law Department
```

**Verdict: Mallett's role and connections are independently confirmed from public sources.** The fact that the Aljouny account emailed him specifically — rather than a random government official — is private evidence from Ikonomova's communication. But Mallett's position connecting Saginaw County litigation to Detroit's political apparatus is independently verifiable.

---

## What This Means for Readers

If you are investigating this yourself:

1. **Start with Layer 1.** Every node in that section can be verified right now with a web browser.
2. **Pull the dockets.** Cases 25-2441-CZ and 26-000243-CZ at Saginaw County Circuit Court. COA 380599 at the Michigan Court of Appeals.
3. **Run the LARA search.** "Aljouny" returns nothing. That is the finding.
4. **Check ARIN WHOIS.** `whois.arin.net` → search AS11910 → LakeNet LLC → Hemlock.
5. **Read the OLC press archive.** The Ahmad timeline is on their own website.
6. **Search Lindke.** His criminal history is in the Times Herald. His federal case is in PACER and at law.cornell.edu.

The private forensics (Layer 2) require Rita's server logs. But the public data independently confirms every node she identified. The reverse target search doesn't just corroborate her findings — it proves the connections exist in public records that anyone can check.

---

## Sources

- ARIN WHOIS: [whois.arin.net/rest/asn/AS11910](https://whois.arin.net/rest/asn/AS11910.html)
- MPSC ITSP Registry: [LakeNet LLC](https://mpsc.my.site.com/itsp/RegistredProviderDetail?id=001E000001AXQcJIAX)
- OLC PLC Contact: [olcplc.com/public/contact](https://www.olcplc.com/public/contact)
- OLC PLC Ahmad Press Release: [olcplc.com/public/media?1694871756=](https://www.olcplc.com/public/media?1694871756=)
- Michigan Court of Claims, *Ahmad v. University of Michigan* (Sep 15, 2023 opinion)
- Michigan Supreme Court, MSC 160012 (Apr 9, 2021 order)
- Times Herald, [Kevin Lindke sentenced to time served](https://www.thetimesherald.com/story/news/2021/11/29/kevin-lindke-sentenced-time-served-case-involving-facebook-posts/8792168002/), Nov 29, 2021
- *Lindke v. Freed*, 601 U.S. ___ (2024), [law.cornell.edu](https://www.law.cornell.edu/supremecourt/text/22-611)
- *Lindke v. Freed* remand, 6th Cir. No. 21-2977 (Aug 21, 2024)
- LARA Business Search: [mibusinessregistry.lara.state.mi.us](https://mibusinessregistry.lara.state.mi.us/search/business)
- Clutch Justice, [Ghost Witness](https://clutchjustice.com/2026/04/25/ghost-witness-protonmail-slapp/), Apr 25, 2026
- Clutch Justice, [UPEPA Judicial Estoppel](https://clutchjustice.com/2026/05/07/upepa-slapp-judicial-estoppel-ellison/), May 7, 2026
- Clutch Justice, [While You Were Reading This](https://clutchjustice.com/2026/05/06/void-slapp-suit-behind-the-scenes/), May 6, 2026
- Clutch Justice, [Notary Conflict](https://clutchjustice.com/2026/05/16/ellison-notary-conflict-edgecomb/), May 16, 2026
- Clutch Justice, [Discovery and Stalking](https://clutchjustice.com/2026/05/09/borrello-discovery-stalking-victim/), May 9, 2026
- Clutch Justice, [Federal Report / Show Cause](https://clutchjustice.com/2026/05/13/federal-report-stalker-show-cause-retaliation/), May 13, 2026
- Clutch Justice, [Anatomy of a Litigation Scheme](https://clutchjustice.com/2026/05/11/lindke-ellison-litigation-scheme/), May 11, 2026
- Clutch Justice, [Vexatious Motion Died](https://clutchjustice.com/2026/07/14/the-motion-to-call-me-vexatious-just-died-in-the-michigan-court-of-appeals/), Jul 14, 2026
- Michigan Lawyers Weekly, [Detroit Ethics Board to investigate Mallett](https://milawyersweekly.com/news/2026/08/21/detroit-ethics-board-to-investigate-top-city-lawyer-over-side-job/), Aug 21, 2026
- IP2Location: [158.51.70.0 geolocation](https://www.ip2location.com/158.51.70.0)
