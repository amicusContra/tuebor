+++
title = "FOIAworks Infrastructure Scan — What the Server Tells Anyone Who Asks"
description = "Passive reconnaissance of foiaworks.com reveals GoDaddy shared hosting, exposed cPanel admin interface, misconfigured email, no privacy policy, 3,537-entity targeting database, and a Microsoft 365 tenant. Every finding comes from public DNS, HTTP headers, SSL certificates, and the site's own sitemap."
weight = 4

[extra]
keywords = "FOIAworks infrastructure, foiaworks.com hosting, FOIAworks GoDaddy, FOIAworks cPanel, FOIAworks PHP, FOIAworks SSL certificate, FOIAworks email misconfiguration, FOIAworks SPF record, FOIAworks Microsoft 365, FOIAworks privacy policy 404, Quagmire Solutions hosting, Philip Ellison FOIAworks, FOIAworks public bodies database, FOIAworks sitemap, FOIAworks FOIA surveillance, FOIAworks LakeNet, Hemlock Michigan FOIAworks"
+++

## What This Page Is

A passive infrastructure scan of [foiaworks.com](https://www.foiaworks.com/) — the FOIA request platform operated by [Quagmire Solutions, LLC](/evidence/foiaworks-honeypot/) (Philip L. Ellison, registered agent).

Every finding on this page comes from sources the server voluntarily provides to any visitor:

- **DNS records** — public, queryable by anyone via `nslookup` or `dig`
- **HTTP response headers** — returned by the server on every request
- **SSL/TLS certificate** — published to [Certificate Transparency](https://crt.sh/) logs by design
- **WHOIS** — public domain registration data
- **robots.txt** — published by the site to instruct search engines
- **sitemap.xml** — published by the site to help search engines index its pages

No account was created. No login was attempted. No vulnerability was exploited. No traffic was intercepted. The server was asked public questions and it answered them.

---

## Network Layer

| Finding | Value | Source |
|---------|-------|--------|
| **IP Address** | `208.109.69.231` | DNS A record |
| **Reverse DNS** | `231.69.109.208.host.secureserver.net` | PTR record |
| **Hosting** | GoDaddy shared hosting (secureserver.net) | rDNS + infrastructure match |
| **Nameservers** | `ns45.domaincontrol.com`, `ns46.domaincontrol.com` | DNS NS records |
| **Registrar** | GoDaddy.com, LLC (IANA ID 146) | [WHOIS](https://www.whoxy.com/foiaworks.com) |
| **Domain created** | August 4, 2025 | WHOIS |
| **Domain expires** | August 4, 2027 | WHOIS |
| **Domain status** | clientDeleteProhibited, clientRenewProhibited, clientTransferProhibited, clientUpdateProhibited | WHOIS |
| **DNS zone last modified** | September 14, 2026 (SOA serial 2026091403) | DNS SOA record |

**This is GoDaddy shared hosting.** The IP address (`208.109.69.231`) is a shared GoDaddy server confirmed by the reverse DNS pointer (`host.secureserver.net`). The domain, DNS, hosting, and email management are all through GoDaddy. The domain is 14 months old.

---

## Server Stack

| Finding | Value | Source |
|---------|-------|--------|
| **Web server** | Apache | HTTP `Server` header |
| **Language** | PHP 8.3.35 | HTTP `X-Powered-By` header |
| **Session** | `PHPSESSID` cookie issued on every request | HTTP `Set-Cookie` header |
| **Cache policy** | `no-store, no-cache, must-revalidate` | HTTP `Cache-Control` header |
| **Frame protection** | `SAMEORIGIN` | HTTP `X-Frame-Options` header |
| **Referrer policy** | `strict-origin-when-cross-origin` | HTTP `Referrer-Policy` header |
| **Content-Type sniffing** | Blocked | HTTP `X-Content-Type-Options: nosniff` |
| **Content-Security-Policy** | **Not present** | Absent from response headers |

FOIAworks is a **custom PHP application** — not WordPress, not Drupal, not a known CMS. It was built from scratch. The `PHPSESSID` cookie on every request means the server creates a session for every visitor, whether logged in or not. The `no-cache` directive means every page load is a fresh PHP execution — nothing is served from cache.

The absence of a Content-Security-Policy header means the application does not restrict which scripts, styles, or resources can execute in the browser.

---

## SSL Certificate — The Subdomains

The SSL certificate, issued by Let's Encrypt and published to Certificate Transparency logs, reveals **five Subject Alternative Names (SANs)**:

| SAN | What It Is | Status (Oct 9, 2026) |
|-----|-----------|---------------------|
| `www.foiaworks.com` | Main website | Active |
| `foiaworks.com` | Bare domain | Active |
| **`cpanel.foiaworks.com`** | **cPanel server administration interface** | **HTTP 200 — login page accessible** |
| **`mail.foiaworks.com`** | **Mail server** | Resolves |
| **`webdisk.foiaworks.com`** | **WebDisk file manager** | **HTTP 401 — authentication required** |

**Certificate details:**
- Issuer: Let's Encrypt (YR1)
- Issued: August 22, 2026
- Expires: November 20, 2026
- Subject: `CN=www.foiaworks.com`

The SSL certificate tells anyone who queries it that Ellison runs cPanel administration, a mail server, and a WebDisk file manager on this hosting account. All three subdomains are included in the certificate because they are active services.

### cPanel — The Admin Interface

`cpanel.foiaworks.com` returns **HTTP 200** — the cPanel login page is publicly accessible on the internet. The response includes a `cprelogin` cookie confirming it is a live cPanel instance.

cPanel provides:
- File management (all site files, PHP code, uploads)
- Database management (phpMyAdmin — direct SQL access to user data)
- Email management (all email accounts, forwarding rules)
- DNS management
- SSL certificate management
- Cron jobs (scheduled tasks)
- Access logs and error logs
- Backup management

The login page being publicly accessible is standard for GoDaddy shared hosting. It is not a vulnerability — it is the normal architecture. But it means the **entire FOIAworks application, database, and user data** is managed through a standard cPanel interface protected by a username and password.

### WebDisk — The File Manager

`webdisk.foiaworks.com` returns **HTTP 401** (authentication required). WebDisk provides remote access to the hosting account's files via WebDAV protocol. It is enabled on this account.

---

## Email Configuration — Misconfigured

| Record | Value | Source |
|--------|-------|--------|
| **MX** | `foiaworks-com.mail.protection.outlook.com` | DNS MX record |
| **SPF** | `v=spf1 include:secureserver.net -all` | DNS TXT record |
| **DMARC** | `v=DMARC1; p=quarantine; rua=mailto:dmarc_rua@onsecureserver.net` | DNS TXT `_dmarc.foiaworks.com` |
| **Autodiscover** | `CNAME → autodiscover.outlook.com` | DNS CNAME record |
| **M365 Tenant** | `NETORGFT19358193.onmicrosoft.com` | DNS TXT record |

### The Misconfiguration

**Inbound email** routes to **Microsoft 365** (the MX record points to `mail.protection.outlook.com`). This means someone paying for M365 Business receives foiaworks.com email in Outlook.

**The SPF record** authorizes only **GoDaddy** (`secureserver.net`) to send email on behalf of foiaworks.com. It does **not** include `include:spf.protection.outlook.com` — which is required for Microsoft 365 to pass SPF checks when sending email.

**Result:** Any email sent FROM a foiaworks.com address through Microsoft 365 may **fail SPF validation** at the receiving end. The SPF record says "only GoDaddy can send as us," but the email actually sends through Microsoft.

The DMARC policy is set to `quarantine` — meaning receiving mail servers should quarantine (spam-folder) messages that fail SPF/DKIM checks. DMARC aggregate reports are sent to GoDaddy's collection address (`dmarc_rua@onsecureserver.net`), not to Ellison.

**The M365 tenant ID** (`NETORGFT19358193.onmicrosoft.com`) is a Microsoft 365 for Business tenant. This is the organizational container for Ellison's Microsoft cloud services — email, OneDrive, SharePoint, Teams, and any other M365 applications configured under this tenant.

---

## The Database: 3,537 Michigan Public Bodies

The [sitemap.xml](https://www.foiaworks.com/sitemap.xml) — published by the site for search engine indexing — reveals **3,582 URLs** including **3,537 individual public body pages**.

### Public Body Categories

| Category | URL Pattern |
|----------|-------------|
| Cities | `/public-bodies/type/cities/` |
| Counties | `/public-bodies/type/counties/` |
| Townships | `/public-bodies/type/townships/` |
| Villages | `/public-bodies/type/villages/` |
| School Districts | `/public-bodies/type/school-districts/` |
| Public School Academies | `/public-bodies/type/public-school-academies/` |
| Intermediate School Districts | `/public-bodies/type/intermediate-school-districts/` |
| Universities / Colleges | `/public-bodies/type/public-university-or-college/` |
| State Agencies | `/public-bodies/type/state-agencies/` |
| County Road Agencies | `/public-bodies/type/county-road-agency/` |
| Housing Authorities | `/public-bodies/type/housing-authorities/` |
| Transit Authorities | `/public-bodies/type/transit/` |
| Community Mental Health | `/public-bodies/type/community-mental-health/` |

This is a **complete Michigan FOIA targeting database** — every type of public body that can receive a FOIA request. When a user selects a target agency, this database tells the platform which agency to route the request to.

All page last-modified dates are **August 23, 2026** — the day after the Terms of Service were published (August 22, 2026). The entire public-facing site was deployed in a single push.

The `/public-bodies/type/cities/` page was last modified **October 9, 2026** — today. The database is actively maintained.

### Target Persona Pages

FOIAworks has custom landing pages for **11 user categories**:

| Persona | URL |
|---------|-----|
| Residents | `/for/residents/` |
| **Journalists** | `/for/journalists/` |
| **Attorneys** | `/for/attorneys/` |
| **Nonprofits** | `/for/nonprofits/` |
| **Researchers** | `/for/researchers/` |
| Businesses | `/for/businesses/` |
| **Investigators** | `/for/investigators/` |
| **Civic Organizations** | `/for/civic-organizations/` |
| **Labor / Public Employees** | `/for/labor-public-employees/` |
| **Frequent Requesters** | `/for/frequent-requesters/` |

The platform specifically recruits **journalists, investigators, attorneys, researchers, and frequent FOIA filers** — the exact categories of people who investigate government misconduct, corporate wrongdoing, and attorney misconduct.

---

## FOIA Guide — 26 Topic Pages

The sitemap reveals a comprehensive Michigan FOIA guide with pages for:

| Topic | URL |
|-------|-----|
| How to write a request | `/michigan-foia-guide/how-to-write-a-request/` |
| Deadlines | `/michigan-foia-guide/deadlines/` |
| Fees and deposits | `/michigan-foia-guide/fees-and-deposits/` |
| Exemptions | `/michigan-foia-guide/exemptions/` |
| Denials and redactions | `/michigan-foia-guide/denials-and-redactions/` |
| Appeals | `/michigan-foia-guide/appeals/` |
| Lawsuits | `/michigan-foia-guide/lawsuits/` |
| Templates | `/michigan-foia-guide/templates/` |
| **Police reports** | `/michigan-foia-guide/police-reports/` |
| **Body camera footage** | `/michigan-foia-guide/body-camera-footage/` |
| **Dash camera video** | `/michigan-foia-guide/dash-camera-video/` |
| **911 calls / dispatch records** | `/michigan-foia-guide/911-calls-dispatch-records/` |
| **Internal affairs records** | `/michigan-foia-guide/police-internal-affairs-records/` |
| **Use of force records** | `/michigan-foia-guide/use-of-force-records/` |
| Government emails / texts | `/michigan-foia-guide/government-emails-text-messages/` |
| Contracts / bids / payments | `/michigan-foia-guide/government-contracts-bids-payments/` |
| Salaries / payroll | `/michigan-foia-guide/government-salaries-payroll/` |
| Government data | `/michigan-foia-guide/government-data/` |
| Zoning / code enforcement | `/michigan-foia-guide/zoning-code-enforcement-records/` |
| Meeting records | `/michigan-foia-guide/meeting-records/` |
| Property assessment | `/michigan-foia-guide/property-assessment-records/` |
| Traffic crash reports | `/michigan-foia-guide/traffic-crash-reports/` |
| Public bodies | `/michigan-foia-guide/public-bodies/` |
| Public records | `/michigan-foia-guide/public-records/` |
| FAQ | `/michigan-foia-guide/faq/` |

**Six of the 26 guide pages are specifically about law enforcement records** — police reports, body cameras, dash cameras, 911 calls, internal affairs, and use of force. The platform is designed to attract people investigating police conduct.

---

## What's Blocked

| Path | HTTP Status | Meaning |
|------|------------|---------|
| `/includes/` | **403 Forbidden** | Directory exists on the server. Access denied. Listed in robots.txt as `Disallow`. Contains PHP include files — the application's internal code. |
| `/privacy/` | **404 Not Found** | No privacy policy exists. Confirmed October 9, 2026. |

---

## The Pattern

| Component | Finding | Concern |
|-----------|---------|---------|
| **Hosting** | GoDaddy shared hosting, budget tier | No enterprise security controls, shared IP, standard cPanel |
| **Admin** | cPanel login page publicly accessible | Entire application managed through single username/password |
| **Email** | Microsoft 365 tenant with misconfigured SPF | Split configuration, DMARC reports go to GoDaddy (not operator) |
| **Privacy** | No privacy policy (404 confirmed Oct 9, 2026) | No published data use, retention, sharing, or deletion policies |
| **Database** | 3,537 Michigan public bodies mapped | Complete FOIA targeting infrastructure for every agency in the state |
| **Targeting** | 11 persona pages including investigators, journalists, attorneys | Platform specifically recruits people who investigate misconduct |
| **Law enforcement** | 6 guide pages on police records alone | Designed to attract people investigating police conduct |
| **Code** | Custom PHP application (not off-the-shelf CMS) | Built by the same person who ran Quagmire Solutions web design |
| **Sessions** | PHP session cookie on every request | Every visitor tracked server-side from first page load |

This infrastructure is operated by [Philip L. Ellison](/actors/ellison/) — the attorney who:
- [Fabricated a witness](/evidence/ghost-witness-aljouny/) in a SLAPP suit
- [Surveilled a journalist](/evidence/data-braid-aljouny/) from his [LakeNet office IP](/analysis/lakenet-signal-trace/)
- Whose client [registered domains](/evidence/domain-registrations/) targeting a journalist and her minor child
- Owes [$74,752.45 in federal sanctions](/evidence/ellison-sanctions/)
- Is under [AGC investigation](/actors/ellison/#agc-investigation) (File No. 25-2363)
- Whose sworn denial of connection to the fabricated witness is the subject of an [IC3 complaint](/actors/ellison/#the-fabricated-witness)

The same person who does all of that now operates a platform that collects the identities of FOIA requesters, their investigation targets, their correspondence with government agencies, and the responsive documents those agencies produce — with no published privacy policy.

---

## How to Verify

Every finding on this page can be reproduced from any computer:

| Check | Command |
|-------|---------|
| IP address | `nslookup foiaworks.com` |
| Reverse DNS | `nslookup 208.109.69.231` |
| MX record | `nslookup -type=MX foiaworks.com` |
| SPF record | `nslookup -type=TXT foiaworks.com` |
| DMARC | `nslookup -type=TXT _dmarc.foiaworks.com` |
| M365 tenant | Look for `NETORGFT19358193.onmicrosoft.com` in TXT records |
| Autodiscover | `nslookup -type=CNAME autodiscover.foiaworks.com` |
| SSL certificate | Visit `https://crt.sh/?q=foiaworks.com` |
| cPanel login | Visit `https://cpanel.foiaworks.com` (login page, no auth needed to see it) |
| HTTP headers | Any HTTP client → `HEAD https://foiaworks.com` |
| robots.txt | Visit `https://foiaworks.com/robots.txt` |
| Sitemap | Visit `https://www.foiaworks.com/sitemap.xml` |
| Privacy policy | Visit `https://foiaworks.com/privacy/` → 404 |
| WHOIS | Visit [whoxy.com/foiaworks.com](https://www.whoxy.com/foiaworks.com) |

---

## Sources

- DNS: Standard DNS queries (A, MX, TXT, NS, SOA, CNAME, PTR)
- WHOIS: [whoxy.com/foiaworks.com](https://www.whoxy.com/foiaworks.com)
- Certificate Transparency: [crt.sh](https://crt.sh/?q=foiaworks.com)
- robots.txt: [foiaworks.com/robots.txt](https://foiaworks.com/robots.txt)
- sitemap.xml: [foiaworks.com/sitemap.xml](https://www.foiaworks.com/sitemap.xml)
- Terms of Service: [foiaworks.com/terms](https://www.foiaworks.com/terms/)
- Privacy policy: [foiaworks.com/privacy](https://foiaworks.com/privacy/) → **404 Not Found**

---

## Related Pages

- **[Infrastructure Grid](/analysis/infrastructure-grid/)** — This page is Node 1 of 11 in the complete infrastructure map. See every point where entity infrastructure touches individual privacy — FOIAworks, LakeNet, GoDaddy, M365, dark money vehicles — all tagged simultaneously.
- **[How To Build an OS](/analysis/how-to-build-an-os/)** — The Dykema dark money architecture that connects Save Detroit Jobs to both parties through one compliance specialist. FOIAworks and Dykema operate parallel privacy-inversion systems: one collects investigator data, the other hides donor data.
- **[LakeNet Signal Trace](/analysis/lakenet-signal-trace/)** — The ISP infrastructure beneath FOIAworks. Same town, same attorney, same tracer isotope.
