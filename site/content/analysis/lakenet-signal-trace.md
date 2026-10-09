+++
title = "LakeNet Signal Trace — One ISP, One Town, Every Thread"
description = "IP address 162.247.150.54 was captured surveilling a journalist, in a federal court filing, and in a domain registration chain. All three lead to LakeNet LLC (AS11910), the only ISP in Hemlock, Michigan — population 1,500. Multi-capture means the signal traces everyone who shared the infrastructure."
weight = 1

[extra]
keywords = "LakeNet LLC Hemlock Michigan, AS11910 IP trace, 162.247.150.54 LakeNet, Philip Ellison ISP, Quagmire Solutions ISP clients, LakeNet Hemlock fiber, Ellison LakeNet surveillance, Outside Legal Counsel IP address, Hemlock Michigan ISP trace, LakeNet AS11910 ARIN, domain registration IP trace, Rita Williams surveillance IP, Clutch Justice IP forensics, LakeNet 123NET peering, LakeNet Daystarr upstream, LakeNet Peninsula Fiber Network, Hemlock network forensics"
+++

## The Signal

IP address `162.247.150.54` was captured in **three independent evidence contexts**:

| Context | Date | Source |
|---------|------|--------|
| **Surveilling a journalist's website** | April 29, 2026 — 7 pages between 8:45 AM and 11:56 AM | WordPress server logs ([data braid](/evidence/data-braid-aljouny/)) |
| **Federal court filing** | Documented in PACER ECF No. 175-4 | Federal docket |
| **Domain registration chain** | September 9, 2025 — same period as 3-domain batch targeting PPO holders | [Clutch Justice, May 16, 2026](https://clutchjustice.com/2026/05/16/ellison-notary-conflict-edgecomb/) |

All three resolve to the same source: **LakeNet LLC** (AS11910), the only broadband ISP headquartered in **Hemlock, Michigan** — population approximately 1,500.

The law firm of [Philip L. Ellison](/actors/ellison/) (Outside Legal Counsel PLC) is also headquartered in **Hemlock, Michigan**.

---

## The ISP

| Field | Detail | Source |
|-------|--------|--------|
| **Company** | LakeNet LLC | [MPSC Registry](https://mpsc.my.site.com/itsp/RegistredProviderDetail?id=001E000001AXQcJIAX) |
| **ASN** | AS11910 | [ARIN WHOIS](https://whois.arin.net/rest/asn/AS11910.html) |
| **Headquarters** | 16690 Gratiot Rd, Hemlock, MI 48626 | Same |
| **IPv4 Addresses** | 4,096 total | [IPinfo](https://ipinfo.io/AS11910) |
| **IP Ranges** | 162.247.144.0/21 (Hemlock) + 158.51.68.0/22 (St. Charles area) | ARIN |
| **Service Area** | Hemlock, Merrill, Marion Springs, St. Charles | [LakeNet availability](https://www.lakenetfiber.com/availability) |
| **Fiber Miles** | 100+ miles of road | Same |
| **Founded** | April 8, 2010 | LARA |
| **Officers** | Chris Fabien (CTO), Keri Fabien (Operations), Rob Bresnahan (CFO) | FCC Form 499 |
| **Phone** | (989) 643-5819 | LakeNet website |
| **ARIN Tech Contact** | FABIE1-ARIN (Chris Fabien) | ARIN WHOIS |
| **Services** | Fiber broadband, cable TV, VoIP phone, fixed wireless | LakeNet website |
| **Traffic Volume** | 5-10 Gbps | [PeeringDB](https://www.peeringdb.com/net/9430) |

### Network Topology

```
                    ┌──────────────────┐
                    │  Internet (BGP)  │
                    └──────┬───────────┘
                           │
        ┌──────────────────┼───────────────────┐
        │                  │                   │
  ┌─────┴──────┐   ┌──────┴──────┐    ┌───────┴───────┐
  │  Cogent    │   │  Hurricane  │    │   Daystarr    │
  │  AS174     │   │  Electric   │    │   AS21527     │
  │            │   │  AS6939     │    │   Owosso, MI  │
  └────────────┘   └─────────────┘    └───────────────┘
                           │
                   ┌───────┴───────┐
                   │  123.NET DC   │ ← Peering in Southfield
                   │  Southfield   │   (Metro Detroit)
                   │  DET-iX       │
                   │  209.124.52.52│
                   └───────┬───────┘
                           │
                   ┌───────┴───────┐
                   │   LakeNet     │
                   │   AS11910     │
                   │   Hemlock, MI │
                   └───────┬───────┘
                           │
              ┌────────────┼────────────┐
              │                         │
     162.247.144.0/21          158.51.68.0/22
     Hemlock area              St. Charles area
              │
     ┌────────┴────────┐
     │ 162.247.150.54  │ ← CAPTURED IP
     │ (Ellison office)│
     └─────────────────┘
```

### Why LakeNet IPs Geolocate to Detroit

LakeNet peers at **123.NET datacenters in Southfield, Michigan** (Metro Detroit):
- 123.NET DC1 — 24700 Northwestern Hwy, Southfield
- 123.NET DC2 — 24275 Northwestern Hwy, Southfield
- 123.NET DC3 — 24245 Northwestern Hwy, Southfield

Standard IP geolocation services resolve LakeNet IPs to **Dearborn** or **Wayne County** — the location of the peering exchange, not the actual subscriber. This is a known artifact of IP geolocation for small regional ISPs that peer at major exchange points.

The MPSC registration and ARIN WHOIS confirm the actual infrastructure is in **Hemlock, Saginaw County** — not Metro Detroit.

Source: [PeeringDB AS11910](https://www.peeringdb.com/net/9430) · [IP2Location discussion](/evidence/data-braid-aljouny/#target-1-who-is-lakenet-llc)

---

## Multi-Capture: What Three Hits Means

When the same IP address appears in three independent evidence streams, it means:

1. **Consistent source location.** The device was at the same physical network connection across different dates and activities. This is a fixed office, not a mobile device on cellular.

2. **Persistent operational use.** The IP was used for surveillance (server logs), legal proceedings (court filing), and infrastructure operations (domain registration) — three different categories of activity, all from the same desk.

3. **Traceable fingerprint.** Any OTHER traffic from the 162.247.144.0/21 range carries the same ISP fingerprint. In a town of 1,500 with one ISP, the suspect pool for any LakeNet IP in evidence is extremely small.

### The Sharing Hypothesis

LakeNet serves approximately 100+ miles of road in the Hemlock/Merrill/Marion Springs/St. Charles area. At typical rural fiber adoption rates (30-50%), that means roughly 500-1,000 active subscribers. But only a handful of those subscribers have any connection to the documented investigation:

| Person | Location | LakeNet Customer? | Relationship |
|--------|----------|-------------------|-------------|
| **Philip L. Ellison** | 530 W Saginaw St / 355 N Maple St, Hemlock | **YES** — IP 162.247.150.54 documented | Attorney. [Actor profile](/actors/ellison/) |
| **Calvin Ellison** | 1111 S Orr Rd, Hemlock (= Quagmire Solutions address) | **LIKELY** — same town, family property | Brother/relative. Resides at Quagmire registered address |
| **Lisa Edgecomb** | Hemlock area | **POSSIBLE** — same small town | Legal assistant / notary. Deputy Clerk, Richland Township |
| **Dr. Katherine Ellison** | Same household as Philip | **YES** — same office/home network | Saginaw ISD Board President. Hemlock PS Board VP |
| **Matthew Gronda** | 4800 Fashion Square Blvd, Saginaw | **NO** — Saginaw city center, 15 miles from Hemlock | Co-counsel. $73,752.45 joint sanctions |
| **Kevin Lindke** | St. Clair County | **NO** — 90+ miles from Hemlock | Client. Convicted of computer crime |
| **JM (Lindke's mother)** | Macomb County | **NO** — different county | Through My Eyes admin |

**The critical question:** When someone visits Ellison's office — Lindke for legal consultations, Gronda for case coordination, Edgecomb for daily work — do they use the office WiFi? Every device that connects to Ellison's office network gets a LakeNet IP. Every web request from that device carries the 162.247.x.x fingerprint.

---

## The Quagmire → ISP Pipeline

Ellison didn't just USE LakeNet. His pre-law career is built on ISP infrastructure:

| Period | Activity | ISP Connection | Source |
|--------|----------|---------------|--------|
| **2000-2004** | Student Webmaster, Lake Superior State University | Managed university web infrastructure | [LSSU Commencement 2005](https://doczz.net/doc/4811451/) |
| **2000-2007** | Owner, Quagmire Solutions LLC — web design & communications | Served **"Internet service companies" (plural)** | [OLC PLC bio](https://michigansupremecourtattorney.com/meet-attorney-ellison) |
| **2000-2007** | Quagmire Solutions clients included **"a major regional newspaper owned by an international outfit"** | Saginaw News / Advance Local (Newhouse/Condé Nast) | Same |
| **2005** | Quagmire Solutions LLC formally incorporated | Hemlock, MI — same town where LakeNet would form 5 years later | [LARA B0703X](https://companiesmi.com/company/B0703X/quagmire-solutions-llc) |
| **2006** | Built I-500 Snowmobile Race website | Web infrastructure work | [Web Archive](https://web.archive.org/web/20061103034715/http:/i-500.com/index.php) |
| **2010** | LakeNet LLC formed by Chris & Keri Fabien | **Only broadband ISP headquartered in Hemlock** | LARA |
| **2010-present** | Ellison is LakeNet customer | IP 162.247.150.54 | ARIN / server logs |
| **2018-present** | Quagmire Solutions operates FOIAworks.com | Still active LLC — LARA entity B0703X | [foiaworks.com/about](https://www.foiaworks.com/about/) |
| **2024** | ARIN records for LakeNet updated (Nov 25, 2024) | Ongoing infrastructure management | ARIN WHOIS |

### Key Questions

1. **Which ISPs did Quagmire Solutions serve?** Ellison's bio says "internet service companies" (plural). LakeNet is the only ISP in Hemlock but didn't exist until 2010. The ISP clients were earlier companies — possibly predecessors that LakeNet absorbed, or nearby ISPs like **Air Advantage** (Frankenmuth, same Saginaw County). If Quagmire built the web infrastructure for ISPs that LakeNet later replaced or absorbed, Ellison has historical knowledge of the network architecture.

2. **Does Quagmire Solutions still contract with LakeNet?** Quagmire is an active LARA entity. It operates FOIAworks. Does it also provide web services to LakeNet? The FOIA template for [LakeNet vendor agreements](/investigate/hemlock-foia/#template-3-lakenet-llc--vendor-agreements-with-government-entities) would reveal this.

3. **What are the other two companies at 1111 S Orr Rd?** CompaniesMI lists "3 companies at the same address" at Quagmire's registered address. Quagmire Solutions is one. The other two are unidentified.

---

## Trace Paths — Using the Signal to Find the Network

### Path 1: Rita's Full Server Logs

Rita's WordPress security logs captured `162.247.150.54` accessing 7 pages on April 29, 2026. The full trace requires searching for **every IP in the 162.247.144.0/21 and 158.51.68.0/22 ranges** across all her server logs.

| Finding | What It Means |
|---------|--------------|
| **Single LakeNet IP** | One device, one location — Ellison's office |
| **Multiple different LakeNet IPs** | Multiple devices or locations — office, home, family property, or different people on the same ISP |
| **LakeNet IPs at times when Ellison was in court** | Someone else at his office used the network to surveil while he was on the record in the courthouse |
| **LakeNet IPs correlating with Through My Eyes post times** | Coordinated harassment from Hemlock |

### Path 2: GoDaddy Session Logs (Subpoena Required)

Three harassment domains were registered within 30 minutes on September 9, 2025. `olcplc.com` received an account-wide update 24 hours later. GoDaddy preserves session logs for every domain management action.

A subpoena to GoDaddy for the IP addresses used in the September 9, 2025 registration sessions would show:

| If GoDaddy IP = | Then |
|------|------|
| **162.247.x.x (LakeNet)** | Registration occurred from Hemlock — Ellison's infrastructure |
| **Different ISP, same device fingerprint** | Registration from a different location by the same person |
| **Different ISP, different device** | Registration by someone else — but the olcplc.com sync still ties it to Ellison's GoDaddy account |

### Path 3: Facebook Admin Logs (Subpoena Required)

Facebook preserves IP addresses for every admin action on a group. Through My Eyes (~25,000 members) has identifiable admin activity:

- **JM (Lindke's mother)** administers the group. Her IP should be Macomb County.
- **Philip L. Ellison** joined July 6, 2020. His join IP should be LakeNet.
- If any **moderation action** (post approval, content removal, member management) originated from a **LakeNet IP**, someone in Hemlock was moderating.

### Path 4: Device Fingerprint Cross-Reference

The controlled Bitly test identified the Aljouny-linked device as: **iPhone, iOS 18.7, Safari 26.5, Fastly CDN edge, hardware identifier 15E148**.

Ellison's own court exhibit (October 6, 2026) showed the same page accessed from: **iPhone, iOS 18.7, Safari 26.6.1, same hardware identifier 15E148**.

The device fingerprint is **ISP-independent** — it travels with the phone regardless of which network it connects to. If this same fingerprint appears in logs from multiple ISPs, it traces the phone's travel between networks:

| Network | What It Means |
|---------|--------------|
| **LakeNet (Hemlock office)** | Device at work |
| **Residential ISP (Hemlock home)** | Device at home — different IP, same person |
| **Roscommon County ISP (Higgins Lake office)** | Device at the "Up North Office" — third IP range |
| **Cellular (Verizon/AT&T/T-Mobile)** | Device mobile between locations |

### Path 5: The Higgins Lake Office

OLC PLC's "Up North Office" at 4522 W Higgins Lake Dr, Roscommon, MI 48653 — purchased November 7, 2024 for $150,000 — is the FOIAworks mailing address. Roscommon County is **not in LakeNet's service area**.

Whatever ISP serves that address provides a **second IP fingerprint** for Ellison. Admin sessions on FOIAworks from that IP, combined with the LakeNet IP from Hemlock, create a two-point trace:

- **LakeNet IP + Roscommon IP** accessing the same admin dashboards = same person, two locations
- The Roscommon County Register of Deeds [FOIA template](/investigate/hemlock-foia/#template-4-roscommon-county--4522-w-higgins-lake-dr-property) would identify who purchased the building

### Path 6: Upstream Provider Cross-Reference

LakeNet's upstream providers connect to the broader Saginaw-area network:

| Upstream | ASN | Coverage | Why It Matters |
|----------|-----|----------|---------------|
| **Daystarr Communications** | AS21527 | Shiawassee, Clinton, **Saginaw**, Genesee Counties | Covers Saginaw proper — where Gronda PLC is located (4800 Fashion Square Blvd) |
| **Cogent Communications** | AS174 | National | Backbone transit |
| **Hurricane Electric** | AS6939 | National | Backbone transit |
| **123.NET** | — | Metro Detroit (Southfield) | Peering exchange — where LakeNet traffic enters the Metro Detroit network |

**Daystarr** serves **Saginaw County** — the same county where both LakeNet and Gronda PLC operate. LakeNet uses Daystarr as an upstream provider. This means LakeNet's traffic routes **through** Daystarr's infrastructure. It does NOT mean Daystarr customers share LakeNet's IP range — but it means the network relationship is documented in BGP routing tables.

---

## What the Trace Reveals Without Subpoenas

Everything above that requires a subpoena is noted. But the **public data alone** already establishes:

1. **162.247.150.54 = LakeNet = Hemlock = Ellison.** Three public registries (ARIN, MPSC, OLC PLC contact page) confirm this. Anyone can verify it.

2. **Multi-capture = persistent operational use.** The same IP in server logs, court filings, and domain registration chains is not coincidence — it is the daily work address of a single network subscriber.

3. **Hemlock has one ISP.** Any LakeNet IP in evidence narrows the geographic source to ~5 square miles. In a town of 1,500, that is functionally an address.

4. **Quagmire Solutions served ISPs.** The pre-law web design firm whose owner is now the attorney has a documented technical relationship with internet service providers in the same geography. The firm is still an active LARA entity.

5. **Three entities at Quagmire's address.** The 1111 S Orr Rd, Hemlock property houses at least three registered companies. Two are unidentified.

6. **The device fingerprint matches.** The Aljouny-linked device (Bitly test) and Ellison's court exhibit device share the same hardware identifier: 15E148. This was [independently documented](/evidence/data-braid-aljouny/) without a subpoena.

---

## Summary

One IP address. Three independent captures. One ISP in a town of 1,500. The attorney's law firm on the same road as the ISP's headquarters. A pre-law career building websites for ISPs in the same geography. A 153-domain portfolio managed through the same company that now operates a FOIA surveillance platform with no privacy policy.

The LakeNet signal is not a single data point. It is a **tracer isotope** — once injected into the evidence stream, it illuminates every connection that passes through the same infrastructure. Every person who sat in that office, connected to that WiFi, or used that network is carrying the same fingerprint.

Multi-capture means the signal can trace everyone who shared it.

---

## Sources

- ARIN WHOIS: [whois.arin.net/rest/asn/AS11910](https://whois.arin.net/rest/asn/AS11910.html)
- MPSC Registry: [LakeNet LLC](https://mpsc.my.site.com/itsp/RegistredProviderDetail?id=001E000001AXQcJIAX)
- PeeringDB: [AS11910](https://www.peeringdb.com/net/9430)
- IPinfo: [AS11910 details](https://ipinfo.io/AS11910)
- CIDR Report: [AS11910 adjacency](https://www.cidr-report.org/cgi-bin/as-report?as=AS11910&view=6447)
- LakeNet website: [lakenetfiber.com](https://www.lakenetfiber.com/)
- OLC PLC: [olcplc.com/public/contact](https://www.olcplc.com/public/contact)
- Clutch Justice: [Data Braid](/evidence/data-braid-aljouny/) · [Domain Registrations](/evidence/domain-registrations/) · [Notary Conflict (May 16)](https://clutchjustice.com/2026/05/16/ellison-notary-conflict-edgecomb/)
- CompaniesMI: [Quagmire Solutions B0703X](https://companiesmi.com/company/B0703X/quagmire-solutions-llc)
- LSSU Commencement 2005: [doczz.net](https://doczz.net/doc/4811451/)
- LARA Business Search: [mibusinessregistry.lara.state.mi.us](https://mibusinessregistry.lara.state.mi.us/search/business)
- DayStarr Communications: [daystarr.net](https://daystarr.net/)
- Peninsula Fiber Network: [pfnllc.net](https://www.pfnllc.net/)

---

## Related Pages

- **[Infrastructure Grid](/analysis/infrastructure-grid/)** — This page is Node 2 of 11. The complete map shows every point where entity infrastructure touches individual privacy — not just LakeNet, but FOIAworks, GoDaddy, M365, dark money vehicles, harassment domains, and court filings.
- **[How To Build an OS](/analysis/how-to-build-an-os/)** — The parallel infrastructure: while LakeNet enables surveillance from Hemlock, Dykema enables dark money from Lansing. Both use privacy tools designed for individuals to shield entity operations.
- **[FOIAworks Infrastructure Scan](/evidence/foiaworks-infrastructure/)** — The platform built on top of LakeNet. Same town, same attorney, same infrastructure stack.
