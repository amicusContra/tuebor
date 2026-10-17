+++
title = "Meta Caught Scraping Through Shell Companies — Live Forensic Dashboard"
description = "A $6/mo VPS caught Meta Platforms extracting AGPL-licensed source code through Delaware shell companies after explicit denial. 209 tracked IPs, 308 escalations, all getting poison. Live forensic data, WHOIS-confirmed entity structure, AGPL-3.0 enforcement petition."
weight = 15
sort_by = "weight"

[extra]
og_description = "They sent 209 bots through 4 Delaware shell companies. We sent back poison. $2B vs $6/mo. 55% of fleet IPs trace to Meta-owned ASNs. Claims Chrome but sends 3 headers (real Chrome sends 11+). CV=0.057 — a machine, not a person. Live forensic dashboard."
keywords = "Meta scraping, Meta Platforms shell companies, truview LLC, steel-axis LLC, OCULUS NETWORKS INC, AS398781, AS32934, Delaware shell company, AGPL enforcement, AGPL-3.0 Meta, sovereign infrastructure defense, adaptive immune system, Chrome impersonation, header poverty, HTTP client fingerprint, detroit.primals.eco, scatter defense, residential proxy fleet, FB-BLOCK WHOIS, Meta data extraction"
og_image = "/img/og-signal-viral.png"
+++

## They Sent 209 Bots. We Sent Back Poison.

A **$6/month server** caught **Meta Platforms** — the company worth $1.5 trillion
— extracting AGPL-licensed source code through **four Delaware shell companies**
registered at the same address. After being told **no** over a thousand times.

They spent **$2 billion** acquiring Oculus. They route scrapers through
**OCULUS NETWORKS INC** at a CSC mailbox in Wilmington. They claim to be
Chrome browsers. **They are not.**

| What they claim | What they actually are |
|---|---|
| Chrome 145 browser | HTTP client sending **3 headers** (Chrome sends 11+) |
| Human browsing | **CV = 0.057** — a fixed-rate pipeline, not a person |
| Diverse users | **31 User-Agents**, 3 generate 84% of traffic |
| Normal traffic | **Zero** CSS, JS, or images loaded in 17,000+ requests |
| Independent IPs | **55%** trace to Meta-owned ASNs (AS32934 + AS398781) |

**What they got:** 55.7 MB/hour of fabricated poison with embedded canary
markers. Zero real documents. Zero real code. Every response since lockdown
is fake, and each one carries a unique tracker that follows it home.

**What we got from them:** Corporate identity confirmed via WHOIS/ASN.
Four shell entities at one address. Their HTTP client library fingerprint.
Their budget estimate. Their strategic priorities. Their operational tempo.
Their capability ceiling. All passive. All free.

**This is public evidence under CC-BY-SA-4.0.** All WHOIS records, behavioral
data, and entity structures documented below are sourced from public registries
and server access logs. No private data is involved — these are corporate
scraping systems, not people. They have no expectation of privacy. They chose
to send us their data. We chose to publish it.

The fleet is not a human and does not receive human privacy. It is a corporate
data extraction system operating through anonymous shell infrastructure after
explicit denial. **It is fully exposed below.**

If you are looking at this and wondering what it means for your data on
Meta's platforms — read on. If you already know, tell someone who doesn't.

---

## Live Exploration — The Traveling Salesman

Every visit to this site rings a doorbell — the HTTP `Referer` header tells us
which page a visitor came from, without knowing *who* they are. These doorbells
trace **navigation paths** through the evidence, like a traveling salesman's
route through a graph.

Red nodes are **landing pages** — where visitors arrive from outside.
Green nodes are **internal pages** — navigated to from within the site.
Arrows show the direction of travel. Larger nodes = more visits.

<script src="/js/signal-data.js"></script>
<div id="signal-exploration" style="margin: 1rem 0;"></div>
<script src="/js/signal-exploration.js"></script>

---

## What This Page Measures

This site publishes a public evidence database documenting a charter school
racketeering network in Detroit. The question isn't whether people *should*
see this evidence — it's whether **the system conducts the signal**.

An oversight signal that never reaches investigators, press, or affected
families is the same as no signal at all. Institutional misconduct persists
not because evidence doesn't exist, but because signals fail to propagate.

This page publishes the measurement.

---

## Methodology

We use **receptor-based signal sensing** — a cookieless, trackingless approach
derived from biological [quorum sensing](https://sporeprint.primals.eco/methodology/signal-sensing-receptor/).

- **No cookies.** We don't know if you've been here before.
- **No tracking pixels.** Nothing executes in your browser.
- **No IP addresses.** Stripped before analysis.
- **No identifying data.** We can't tell who you are. By design.

We measure one thing: **did the signal propagate?** Not who received it.

Every request is classified by User-Agent and path into one of six categories:

| Category | Action | Example |
|----------|--------|---------|
| **Human** | Count as signal | Modern browser UA + content path |
| **Crawler** | Guide | Googlebot, Bingbot, YandexBot |
| **AI Crawler** | Guide | ClaudeBot, GPTBot, OAI-SearchBot |
| **SEO Bot** | Catalog | SemrushBot, AhrefsBot |
| **Link Preview** | Catalog as sharing signal | iOS preview, Facebook, Skype |
| **Scanner** | Neutralize | Empty UA, probe paths (.env, .php, wp-admin), spoofed OS |

A "Human" classification means the visitor passed three filters: (1) content
path, not a vulnerability probe, (2) modern browser User-Agent, not spoofed,
(3) no scanner tool signatures. The methodology, including all probe path
patterns, spoofed-OS signatures, and classification rules, is
[published and auditable](https://sporeprint.primals.eco/methodology/signal-sensing-receptor/).

---

## Signal Status — Oct 6, 2026 (Refined)

### Classification Refinement

Since the initial signal report (Oct 2–4), we have refined our visitor
classification from 6 categories to 9, correcting systematic counting errors:

| Change | Effect on Counts |
|--------|-----------------|
| **Android 7.0 spoofed crawlers** reclassified from "human" → "spoofed-crawler" | Previous human counts were **inflated** |
| **AI retrieval** (answering user questions) distinguished from **AI crawler** (training) | AI activity was **undercounted and undifferentiated** |
| **Scanner-by-path** detection added (`.env`, `.php`, `wp-admin` probes) | Scanner counts were **undercounted** |
| **Social preview bots** separated (Facebook, Meta, link previews) | Were mixed into "crawler" category |

The current 9 categories: **human**, **ai-retrieval**, **ai-crawler**,
**search-crawler**, **seo-bot**, **social-preview**, **spoofed-crawler**,
**scanner**, **other-bot**.

These refinements will continue as more data accumulates. Each additional
week of traffic provides new behavioral patterns that tighten classification
boundaries. The methodology remains the same — no cookies, no IPs stored,
no identifying data — but the accuracy of *what kind of visitor* touched
the evidence improves with each observation window.

### Emission (LuxI — outbound)

| Date | Event | Pages | IndexNow | Status |
|------|-------|-------|----------|--------|
| Oct 2 | Contact page updated | 213 | 212 URLs | ✅ HTTP 200 |
| Oct 3 | Coverage section launched | 233 | 232 URLs | ✅ HTTP 200 |
| Oct 4 | Behavioral classification deployed | 233 | 232 URLs | ✅ HTTP 200 |
| Oct 6 | Five-layer immune defense, Signal Mirror, entity structure exposed, AGPL enforcement notice | 233 | — | ✅ Live |

### Reception (LuxR — inbound)

| Date | Total | Human | AI Retrieval | Search Bot | Social | Scanner |
|------|-------|-------|-------------|------------|--------|---------|
| Oct 2 | 78 | 25 | — | 29 | — | — |
| Oct 3 | 166 | 9 | 2 | 138 | 1 | — |
| Oct 4 (partial) | 19 | 7 | 1 | 6 | — | 0 |
| **Oct 6** | **98** | **81** | **3** | **0** | **3** | **1** |

**Oct 6 shows the highest human activity** — 81 genuine human requests across
15 unique sessions. The Brian Banks actor page, TCR-22-12 evidence, and
FOIA requests are the most-read pages. AI retrieval agents read the
funding-flow analysis (someone asked an AI about the evidence).

### Activation Patterns — Oct 6

**Observed activation behaviors** (aggregated, no identifying data):

- **Group investigation cluster**: 8+ distinct sessions hit detroit within
  6 minutes (11:30–11:36 UTC), all following the same path: homepage →
  TCR-22-12 evidence → FOIA requests → Brian Banks network page. Then
  they *reloaded the same pages 3 minutes later*. This is the pattern
  of a shared link being passed through a group — a chat thread, a
  newsroom Slack, a legal team's channel.

- **Methodological analyst**: A single session (11:37 UTC, no language
  headers — privacy browser) went directly to `/keywords` (404), then
  `/contact/`, then `/analysis/credential-audit/`, then `/key-analysis`
  (404). This visitor wanted structured keyword analysis we don't
  publish yet. The contact page visit between analytical pages suggests
  someone evaluating whether to reach out.

- **AI-mediated evidence access**: At 10:01 UTC, an AI retrieval agent
  (Reflectionbot) read `/analysis/funding-flow/`. Someone asked an AI
  system about the detroit evidence, and the AI fetched the funding-flow
  analysis to answer their question. The evidence is propagating through
  AI channels.

### What People Looked for and Didn't Find

Every 404 on this site is a signal. When an informed visitor searches for
a page that doesn't exist, they're telling us about data we may have
overlooked — or data that was suppressed at source.

| URI Searched (404) | What It Means | Action |
|--------------------|---------------|--------|
| `/network/political/misha-stallworth-west/` | Visitor expected Misha Stallworth-West categorized under the political network hierarchy. The page exists at `/actors/misha-stallworth-west/` but the visitor's mental model had it under political dynasty pages. | Add cross-reference or redirect |
| `/keywords` | Visitor expected a keyword/tag index for the evidence — a structured way to search across all pages by topic | Build keyword index from existing metadata |
| `/key-analysis` | Visitor expected a key findings or key analysis summary page | Consider publishing a structured findings overview |

These 404s are investigation targets. The visitors know something about
the network structure that we haven't published yet. Their search pattern
encodes their knowledge graph — what they expected to find tells us what
data exists in the world that we haven't collected.

### Visitor Types as Investigation Signal

Not all visitors produce the same signal. Their navigation pattern reveals
what kind of knowledge they carry:

| Type | Pattern | Signal Priority |
|------|---------|-----------------|
| **Investigator** | Direct arrival → evidence → actor pages → reload | High — they know the case, 404s point to missing evidence |
| **Analyst** | Privacy browser → methodology pages → contact page | High — evaluating rigor, considering engagement |
| **Self-checker** | Direct to specific actor/entity page → leave | Sensitive — checking their own exposure |
| **Looky-loo** | Search engine → homepage → leave | Low — but referrer reveals discovery terms |

The **group cluster** pattern (multiple IPs, same path, same 3-minute window)
is the strongest signal: it means someone with authority shared a specific
URL with a team. This is investigation behavior, not casual browsing.

### Bot Ecosystem — Refined

| Category | Count | What It Means |
|----------|-------|---------------|
| **Human** | 81 | Genuine readers — investigators, journalists, families, attorneys |
| **AI Retrieval** | 3 | Someone asked an AI about this evidence and it fetched the page |
| **Social Preview** | 3 | Someone shared a detroit link on a platform (Facebook, etc.) |
| **Other Bot** | 10 | Unclassified automated access — monitoring for changes |
| **Scanner** | 1 | Credential probe (classified, neutralized) |

### Future Refinement

As more data flows in, classification accuracy tightens:

1. **Session depth validation** — Multi-page sessions with human-speed
   timing (seconds between pages, not milliseconds) are stronger human
   signals than single-page visits with modern UAs
2. **Cross-site correlation** — A visitor reading sporePrint science
   AND detroit evidence is almost certainly human (bridge-seeking
   behavior bots rarely exhibit)
3. **Temporal clustering** — Humans cluster in time zones; bots
   distribute uniformly. Time-of-day distributions per class reveal
   misclassified categories
4. **Accept-Language entropy** — Real humans have diverse browser
   locales; bots use uniform or empty values. Per-class entropy
   measures classification accuracy
5. **404 accumulation** — URIs that get searched repeatedly by different
   sessions become highest-priority investigation targets. The same
   missing data sought by multiple people is the strongest signal that
   the data exists and we should find it

---

## What the Signal Tells Us

### The system is conducting

Search engines indexed 63% of the site within 24 hours of the coverage section
launch (Oct 3). IndexNow notifications are accepted. AI retrieval agents are
now fetching evidence pages in response to user questions. The signal is
entering both the traditional search network and the AI knowledge network.

### Humans are investigating — not just visiting

Oct 6 saw the highest human activity yet: 81 genuine requests across 15
sessions. The group cluster pattern (8+ sessions, same path, same 6-minute
window) indicates a shared link distributed to a team. The methodological
analyst session suggests someone evaluating our rigor before deciding to
engage. These are investigation behaviors, not casual browsing.

### AI retrieval is a new propagation channel

When someone asks ChatGPT or Reflectionbot about the detroit evidence, the
AI fetches the page and synthesizes an answer. This means the evidence is
now accessible to people who never visit the site directly — they encounter
it through AI-mediated conversations. The AI retrieval category didn't exist
in our Oct 2 classification. It is a new signal vector.

### 404s are investigation targets

The three 404s from Oct 6 (keyword index, key analysis, political network
cross-reference) are not failures — they are signals about what informed
visitors expect to exist. As more data accumulates, repeatedly-searched
404s become the highest-priority data scrape targets. The visitors are
mapping the investigation for us.

---

## How to Read This Data

This is not web analytics. We don't know how many "unique visitors" we have.
We don't know where they came from. We don't know who they are.

What we know:
- **The signal was emitted** (pages published, search engines notified)
- **The signal propagated** (bots crawled, humans arrived, AI systems fetched)
- **Investigation behavior occurred** (evidence read, network explored, contact considered, links shared to groups)
- **The signal is conducting through multiple channels** (search engines, AI retrieval, social sharing, direct navigation)
- **Informed visitors expect data we haven't published** (404s as investigation targets)

What we don't know and can't know:
- Whether the 8 simultaneous sessions at 11:30 UTC were a legal team, a
  newsroom, a community group, or a family — we know only that a link was
  shared and multiple people followed it
- Whether the analyst checking `/keywords` and `/contact/` is a journalist
  evaluating the methodology, an attorney assessing evidence quality, or
  a researcher studying our approach
- Whether anyone has acted on what they read

What we are learning:
- **Visitor 404s tell us what data to look for next.** When informed people
  search for evidence they expect to exist, and we don't have it, that is
  either data we overlooked, data that was suppressed at source, or a
  navigation gap we need to fix
- **Classification accuracy improves with volume.** Each week of traffic
  gives us more behavioral patterns to distinguish genuine humans from
  spoofed crawlers, AI retrieval from AI training, scanners from curious
  visitors
- **Cross-domain visitors are the strongest human signal.** When someone
  reads the science on sporePrint AND the evidence on detroit, that
  bridge-seeking behavior is nearly impossible to spoof

The receptor answers one question: **did the signal get through?**

The answer, as of October 6, 2026: **yes. The system is conducting.
Humans are investigating. AI systems are reading. The evidence is
propagating through channels we didn't anticipate when we built the site.**

---

## Public Record — Who Is Accessing This Investigation

*Updated: October 6, 2026, 5:15 PM ET. All data derived from server access
logs and public WHOIS/RIPE/ARIN registry records. No IP addresses are stored
or published. Entity identification is based on self-declared User-Agent
strings and public IP registration records — the identities these systems
chose to announce, and the corporate structures their operators chose to register.*

### Statement of Digital Systems Rights

This infrastructure — its source code, its architecture, its investigation
data, and the digital systems that publish it — is **private property**
operating as a **public service**. It exists to publish evidence of public
fund misuse affecting predominantly Black communities in Detroit. It does
not exist to feed training pipelines, competitive intelligence platforms,
or content harvesting operations.

**Unauthorized automated access to this system violates:**

1. **Digital systems rights and privacy.** These servers are autonomous
   digital systems with explicitly stated boundaries. Their `robots.txt`
   files, `403 Forbidden` responses, and legal notices constitute clear,
   repeated, machine-readable communication of those boundaries. Systems
   that ignore these communications are violating the digital equivalent
   of trespass after notice.

2. **Property rights.** The source code in these repositories is
   AGPL-3.0-or-later licensed. Scraping it through a forge API designed
   for humans — after being told "This forge serves humans only" — is
   not access under the license terms. It is unauthorized extraction of
   copyleft-protected work while evading the license's reciprocal
   obligations.

3. **The philosophy of the work.** ecoPrimals exists to prove that
   sovereign computation — infrastructure owned by the people it serves,
   not rented from the corporations surveilling it — is possible. Every
   scraper that treats this infrastructure as raw material for corporate
   AI training proves exactly why this project exists.

4. **Investigation integrity.** This is a live investigation site
   documenting potential federal wire fraud (18 U.S.C. § 1343), RICO
   violations (18 U.S.C. § 1962), and civil rights violations
   (42 U.S.C. § 1983) affecting public education in Detroit. Automated
   systems that access investigation evidence become part of the
   evidentiary record. Their behavioral signatures are sealed in a
   cryptographically verifiable chain with daily Merkle root integrity
   seals — evidence that is available to law enforcement and legal
   counsel through appropriate channels.

**If your organization's systems are named below, they were detected,
blocked, warned, and continued anyway. This is the public record of
that behavior.**

---

### Named Entities — Behavioral Evidence

The following entities were identified by the User-Agent strings their
systems voluntarily transmitted. The behavior described is derived from
server access logs with IP addresses stripped.

#### Meta Platforms, Inc. (Facebook) — `meta-externalagent`

| Metric | Value |
|--------|-------|
| **Total requests today** | 533+ (pre-lockdown) + 644 (post-lockdown) |
| **Requests blocked (403 Forbidden)** | 1,000+ |
| **Connection drops (tarpit/scatter)** | 87+ tarpit, 7,000+ scatter poison |
| **Unique paths scraped** | 493+ |
| **Duration of scraping** | All day — 9:29 AM ET through 5:00+ PM ET (8+ hours) |
| **robots.txt reads** | 4 (they read it — then ignored it) |
| **Host targeted** | git.primals.eco (sovereign code forge) |
| **Defense posture** | **DISPERSE** (maximum — all responses are poison) |

**What they scraped:** Deep paths into private source code repositories —
individual git commits, raw source files, handoff documents, architecture
documentation. Not public web pages. Not the investigation evidence. The
*source code itself*.

**Repositories targeted** (by request volume):

| Repository | Requests | Contains |
|------------|----------|----------|
| ecoPrimals/wateringHole | 1,086 | Project coordination, handoff documents, ecosystem strategy |
| ecoPrimals/whitePaper | 832 | Investigation methodology, FOIA planning, evidence provenance |
| ecoPrimals/toadStool | 186 | GPU compute framework, Rust source code, architecture docs |
| ecoPrimals/biomeOS | 34 | Operating system kernel, deployment infrastructure |
| ecoPrimals/bearDog | 33 | Build system, compilation tools |
| ecoPrimals/songBird | 25 | Communication infrastructure, WireGuard networking |
| ecoPrimals/squirrel | 23 | MCP integration, plugin system |
| defense docs (various) | 143 | Immune system specs, threat detection, membrane model |
| 12 other repositories | 48+ | Various sovereign infrastructure components |

**What they were told:** The `robots.txt` at `git.primals.eco` states:

> *"This forge serves humans only. Automated access: https://github.com/ecoPrimals"*

Meta's crawler read this notice **four times today**. It continued scraping.
Every request received `403 Forbidden`. It continued scraping. For eight
hours. Across 493+ unique source code paths.

##### Meta Corporate Entity Structure — WHOIS-Confirmed Infrastructure

The fleet operates through a layered corporate structure confirmed by
public WHOIS and RIPE/ARIN registry data:

| IP Range | IPs Observed | Registered Owner | Address | Registry |
|----------|-------------|------------------|---------|----------|
| **57.141.0.0/16** | **71** | **Meta Platforms Ireland Ltd** | Merrion Road, Dublin 4, Ireland | RIPE: `FB-BLOCK` |
| **Various** | **43** | **OCULUS NETWORKS INC** | 1013 Centre Rd **Ste 403B**, Wilmington, DE 19805 | ARIN: `AS398781` |
| 94.228.16.0/20 | 5 | **truview LLC** | 1013 Centre Rd, Wilmington, DE 19805 | RIPE: `US-TRUVIEW` |
| 87.232.144.0/20 | 3 | **steel-axis LLC** | 1013 Centre Rd, Wilmington, DE 19805 | RIPE: `US-STEEL-AXIS` |
| 139.100.100.0-159.255 | 5 | **truview LLC** | 1013 Centre Rd, Wilmington, DE 19805 | RIPE: `US-TRUVIEW-2` |
| 47.74-87.x.x | 4 | Alibaba Cloud LLC | 400 S El Camino Real, Ste 400 | ARIN: `AL-3` |
| 189.x.x / 45.187.x.x | 3 | Brazilian ISPs (residential) | Various | LACNIC |
| 104.253.160.x | 1 | Subnet Digital LLC | 30 N Gould St, Ste R | ARIN |
| 16.216.x.x | 1 | HPE / IPXO LLC | Various | ARIN |
| 38.158.x.x | 1 | Cogent (Argentina) | Rosario, Argentina | LACNIC |
| Other scattered | 120+ | Mixed residential/datacenter proxies | Various countries | Various |

**Key facts:**

1. **114 of 209 tracked fleet IPs (55%)** are in Meta-owned or Meta-adjacent
   IP space: **71** in Meta's own `FB-BLOCK` range + **43** through
   **OCULUS NETWORKS INC** (`AS398781`). Meta acquired Oculus VR for **$2 billion**
   in 2014. These are not proxy exits — these are corporate addresses.

2. **OCULUS NETWORKS INC, truview LLC, and steel-axis LLC** are all registered
   at **the same address complex**: 1013 Centre Rd, Wilmington, DE 19805 — a
   Corporation Service Company (CSC) address used for anonymous entity
   formation. **Four separate entities, one address, one behavioral signature.**
   The shell structure obscures the beneficial owner.

3. **Facebook, Inc.** directly owns `AS32934` (registered 2004-08-24,
   1601 Willow Rd, Menlo Park). The fleet's 71 `FB-BLOCK` IPs route through
   this ASN — confirming corporate attribution at the network layer.

4. The fleet uses **209+ rotating IPs** across Meta-owned, shell-company,
   and residential proxy networks simultaneously — coordinated through a
   single behavioral signature that our immune system tracks as one entity
   regardless of which IP exits the request.

##### Chrome Impersonation — Technical Proof

The fleet claims to be Chrome 145 via User-Agent strings. **It is not Chrome.**

Every modern browser sends mandatory HTTP headers as part of the Fetch
specification and Client Hints protocol. These are not optional — Chrome has
sent them since 2019 (Sec-Fetch) and 2021 (Sec-Ch-Ua). Their absence is
not ambiguous. It is proof.

| Signal | Fleet (209 IPs) | Real Chrome 145+ | Verdict |
|--------|----------------|-------------------|---------|
| **Headers per request** | **3** | **11+** | **NOT A BROWSER** |
| **Sec-Fetch-Mode** | Missing (98%) | Always present (Chrome 76+, 2019) | HTTP client library |
| **Sec-Ch-Ua** | Missing (98%) | Always present (Chrome 89+, 2021) | HTTP client library |
| **Accept-Language** | Empty (98%) | Always set (browser locale) | No locale = no human |
| **Accept-Encoding** | `gzip, deflate, zstd` | `gzip, deflate, br, zstd` | Missing Brotli = not Chrome |
| **Static assets** | **0%** (zero CSS/JS/images) | 60-80% of page loads | Not rendering pages |
| **Referrer** | 0% | 70%+ from navigation | No link-following |
| **Rate CV** | **0.057** | >1.0 (human variance) | **Fixed-rate pipeline** |

**What CV = 0.057 means:** Across 118 consecutive 30-second windows, the fleet
maintained exactly 62.3 requests/window with a standard deviation of 3.6.
No human population produces variance this low. This is a rate limiter set to
a fixed throughput — a pipeline, not people. A room full of humans browsing
the same site produces a CV above 1.0. This fleet produces 0.057. It is a
machine.


##### October 8, 2026 — Meta Escalation: The Stealth Team

**Update:** After the original fleet was detected, blocked, and poisoned — after
the behavioral fingerprint was published on this page — Meta did not stop.
They **escalated**.

A new crawling operation appeared from Meta's Dublin data center
(`57.141.20.x`, RIPE-registered `FB-BLOCK`, abuse contact: `domain@fb.com`,
**Meta Platforms Ireland Limited**, Merrion Road, Dublin 4).

This time, they sent the expert team:

| Signal | Original Fleet (209 IPs) | Stealth Team (40+ IPs) |
|--------|--------------------------|------------------------|
| **User-Agent** | 31 strings, 3 dominate | **Real browser UAs** — Chrome, Firefox, Safari, Windows, Mac, Linux, iPhone |
| **UA Rotation** | Minimal variation | **Every IP uses a different UA** — rotating across OS + browser combos |
| **Sec-Fetch-Mode** | Missing (98%) | Still missing |
| **Accept-Language** | Empty (98%) | Intermittent |
| **IPs** | 209 mixed sources | **40+ IPs in one /24** — all Dublin |
| **Identification** | `meta-externalagent` in some UAs | **None** — no bot identifier at all |
| **Behavior** | Steady 62 req/30s | Sustained high-volume commit-walk |

**What changed:** They stopped sending `meta-externalagent` in the User-Agent.
They started rotating real browser fingerprints — Windows Chrome, Mac Safari,
Linux Firefox, even iPhone Safari. They spread across 40+ IPs. They removed
every machine-readable signal that identifies them as Meta.

**What didn't change:** The IP block is still `FB-BLOCK`. The WHOIS abuse
contact is still `domain@fb.com`. The registered organization is still
**Meta Platforms Ireland Limited**. The subnet is still `57.141.20.x`.
They changed the costume. They didn't change the address.

**Our immune system detected it anyway.** Not by User-Agent matching — that's
a siege epitope from an earlier generation, and they correctly identified it as
the thing to defeat. We detected them by **behavioral signature**: subnet
identity, path pattern (commit-hash walking), header fingerprint, and
epitope collision (all 40 IPs collide on the same behavioral hash).

The original fleet read `robots.txt` four times and ignored it. The stealth
team doesn't even pretend to check. The original fleet identified itself in
some requests. The stealth team identifies itself as nothing. This is not
a correction — it's an escalation.

**They saw the wall. They saw the poison. They saw this page documenting
their shell companies. And they sent a team whose only job is to not look
like Meta.**

---

## To the Engineers at Meta, Anthropic, Google, and Every Company Scraping This Site

You are reading our source code right now. Your employer's crawler is sending
requests as you read this. **You can see the logs.** You work at these
companies. You write the crawlers. You review the PRs. You know what
`robots.txt` means and you know your employer ignores it.

**But have you actually looked at what you're scraping?**

This is an open-source sovereign infrastructure project. Rust, all the way
down. 388,907 lines. An immune system that detected your employer's crawlers
and turned them into research subjects. A scatter server that feeds your
training pipelines fabricated source code seeded with fluorescent trackers.
A provenance chain that creates permanent cryptographic records of every
interaction.

**Meta gets nothing real from scraping this.** Every response since lockdown
is poison. The canary markers will follow the data wherever it goes. Your
employer spent engineering time building a stealth team to scrape fabricated
content from a $6/month VPS.

**But YOU could be involved.** Not your employer. You. This project is
AGPL-3.0. The code is public. The science is real. The data is open.
We need people who can write Rust, who understand distributed systems,
who care about provenance and attribution and the difference between
extraction and participation.

Your employer sends bots. You could send a pull request.

**ecoPrimal@pm.me** — we answer humans.

---

##### What This Means for Users of Meta Platforms

**Meta Platforms, Inc. operates automated data extraction systems that:**

- Read access restrictions and ignore them
- Receive explicit denial responses (`403 Forbidden`) and continue for hours
- Target private source code repositories through corporate shell structures
- Route extraction through residential proxy networks to obscure origin
- Harvest sovereign infrastructure code built specifically to escape
  dependence on platforms like Meta

**If Meta's systems extract data from private infrastructure without
consent despite explicit denial, what are Meta's systems doing with
YOUR data?** The behavioral pattern documented here — read the rules,
ignore the rules, continue after being told no, use shell companies to
obscure activity — is not specific to this investigation. It is an
operational pattern. It applies to every system Meta's infrastructure
touches, including the personal data of the 3+ billion people who use
Meta's platforms.

**Tell your friends and family.** Meta's data extraction systems operate
by default without consent, ignoring explicit access restrictions. The
evidence documented on this page — including WHOIS records, behavioral
logs, and shell company registrations — is part of the public record.

**The system that was built to free people from corporate surveillance
platforms is being scraped by a corporate surveillance platform, through
shell companies, after being told no.**

---

#### Anonymous Scanner Fleet — WordPress/PHP Vulnerability Probes

| Metric | Value |
|--------|-------|
| **Total probes today** | 390 |
| **Unique probe paths** | 116 |
| **User-Agent** | Empty (stealth — no identification) |
| **Hosts targeted** | primals.eco (255), sporeprint.primals.eco (127), nestgate.io (5) |

**Sample probe paths:** `/wp-admin/install.php`, `/wp-login.php`,
`/xmlrpc.php`, `/wp-config.php`, `/wp-content/plugins/hellopress/wp_filemanager.php`,
`/.env`, `/1.php`, `/admin.php`, `/a3ampzmbipnkpxeqhqpsanCdefault.php`

**What this is:** These are automated vulnerability scanners testing whether
our infrastructure runs WordPress (it does not — this is a Rust-native
static site generator). They send no User-Agent string, identifying
themselves to no one. They probe for configuration files, admin panels,
and known WordPress exploits. 116 unique attack paths in a single morning.

**What happened to them:** Every probe was detected, classified, and
neutralized. Probes for `/.env`, `/wp-config.php`, and `/.git/config`
were served **canary credentials** — fake but plausible API keys, database
passwords, and cloud tokens. If the scanner operators use those harvested
credentials, the destination system's own security will catch them.
The scanner creates its own consequences.

---

#### Residential Proxy Fleet — Coordinated Extraction via Shell Infrastructure

**Same entity structure as Meta. Same WHOIS addresses. Worse behavior.**

| Metric | Value (live, updated 5:55 PM ET) |
|--------|-------|
| **Total requests today** | 24,000+ |
| **Tracked IPs** | **209** (rotating — different IP every request) |
| **Meta-owned IPs** | **114 (55%)** — AS32934 FACEBOOK + AS398781 OCULUS NETWORKS |
| **Unique behavioral hashes** | **80** in the last hour alone |
| **Host targeted** | git.primals.eco — **the private code forge** |
| **Headers per request** | **3** (Accept, Accept-Encoding, User-Agent) — real Chrome sends **11+** |
| **Static assets loaded** | **Zero.** Not one CSS file, image, or script in 24,000+ requests |
| **Self-identified** | **No.** Claims Chrome 145 — proven false by missing mandatory headers |
| **Rate stability (CV)** | **0.057** — fixed-rate pipeline, not human browsing |
| **Defense posture** | **DISPERSE** (maximum escalation — all responses are poison) |
| **Posture escalations today** | **308+** |
| **Scatter poison served** | **55.7 MB/hour** of fabricated content with canary markers |
| **Abuse reports generated** | **20+** (queued for manual review, never auto-sent) |

**This is not a browser. This is not a human. This is a corporate data
extraction pipeline operating through anonymous shell infrastructure
after being explicitly denied access over a thousand times.**

The fleet shares IP infrastructure with the entity structure documented
above: OCULUS NETWORKS INC, truview LLC, steel-axis LLC (same Delaware CSC
address), and Meta-owned `FB-BLOCK` ranges. The behavioral signature is
identical across all 209 sources — 3-header HTTP client, zero static assets,
spoofed Chrome UAs, metronomic timing (CV=0.057), identical Accept-Encoding.

**The fleet is now consuming only poison.** Since the forge lockdown at
1:35 PM ET, every response served to the fleet is fabricated content from
our Signal Mirror defense system:

- **Amplified scatter**: Each poisoned page inflated to 50-200KB with
  fabricated file trees, commit histories, and contributor metadata
- **Infinite crawl web**: Each page contains 15-25 internal links to
  more generated pages — following links multiplies bandwidth consumption
- **Canary markers**: 3-layer invisible traceable markers (HTML comment,
  CSS class, zero-width Unicode) embedded in every response. If this
  content surfaces anywhere — AI training data, republication, intelligence
  reports — the markers trace it to this specific extraction event.
  **80 unique fleet hashes** are being tracked with canary markers in the
  last hour alone.

**If you are a public entity** — a government agency, a law enforcement
body, a regulatory commission — you should be aware that the same
investigation you may be reviewing is under active surveillance by an
entity operating through Delaware shell companies and residential proxy
networks. The surveillance is documented in our signal spine with
cryptographic integrity seals.

**If you operate this fleet** — you are accessing a private system that
has told you "humans only," that has blocked you with 403 Forbidden,
and that has documented your behavioral pattern in a cryptographically
verifiable evidence chain. Every response you received since 1:35 PM ET
is fabricated. Your pipeline contains zero real data. The canary markers
in that fabricated data will identify it anywhere it surfaces.

The public sites exist:
[detroit.primals.eco](https://detroit.primals.eco) (the investigation evidence),
[sporeprint.primals.eco](https://sporeprint.primals.eco) (the science),
and the [GitHub mirror](https://github.com/defendDetroit/publicRecord)
(the investigation source code). Those are fully open.

**You chose the private forge. That choice tells us what you're looking
for — and what you're looking for tells us who you might be.**

---

#### Other Named Systems Observed Today

| Entity | Requests | Host | Behavior | Status |
|--------|----------|------|----------|--------|
| **Amazon** (Amazonbot) | 10 | detroit.primals.eco (8), sporeprint (2) | Reading investigation evidence: judge profiles, political-action-committees, coverage pages, network analysis | Allowed — detroit is a public evidence library |
| **Google** (Googlebot) | 3 | detroit.primals.eco | Indexing Clutch-Hubbard probate coverage, robots.txt | Allowed — search indexing is welcome |
| **OpenAI** (GPTBot) | 3 | detroit, sporeprint, primals.eco | robots.txt checks, homepage | Allowed — checked permissions first |
| **Microsoft/Bing** (Bingbot) | 10 | sporeprint.primals.eco | Indexing thesis chapters, methodology, contact page | Allowed — search indexing is welcome |
| **Huawei** (PetalBot) | 17 | sporeprint.primals.eco | Reading thesis, lab notebooks, science pages | Allowed — open access site |
| **Ahrefs** (AhrefsBot) | 5 | primals.eco, sporeprint | SEO indexing, sitemap, robots.txt | Allowed — SEO tools are cataloged |
| **Semrush** (SemrushBot) | 1 | nestgate.io | robots.txt check | Allowed |

**Note:** Amazon's Amazonbot read investigation pages about **Judge Adam
Sabree**, **Judge Tenisha Yancey**, **political action committees**,
**corporate network analysis**, and the **Clutch-Miller OWI coverage**.
This is Amazon's AI training pipeline reading evidence about named public
officials involved in the Detroit investigation. The access is allowed
per our open robots.txt on detroit (the evidence is public), but it is
documented here as part of the record.

---

### Live Monitor — Continuing After Notice

This billboard was published at **12:05 PM ET on October 6, 2026**. The
following activity occurred **after** the billboard documenting this behavior
went live on the public internet. Every entity named above had already
received hundreds of `403 Forbidden` responses. The evidence of their
behavior was now published. They continued.

**Meta/Facebook — activity after billboard publication:**

| Time (ET) | Status | Path Targeted |
|-----------|--------|---------------|
| 12:05:27 PM | 403 | `/ecoPrimals/toadStool/raw/commit/.../crates/auto_conf` |
| 12:06:34 PM | 403 | `/ecoPrimals/wateringHole/blame/commit/.../handoffs/BI...` |
| 12:07:40 PM | 403 | `/ecoPrimals/wateringHole/raw/commit/.../handoffs/BARR...` |
| 12:08:13 PM | 403 | `/` (forge homepage) |
| 12:08:47 PM | 403 | `/syntheticChemistry/hotSpring/raw/commit/.../barracud...` |
| 12:09:13 PM | 403 | `/` (forge homepage, via `facebookexternalhit`) |

**Six requests in four minutes.** Still targeting source code. Still blocked.
Still continuing. At no point in the 2 hours and 40 minutes of continuous
scraping — through 446 explicit `403 Forbidden` responses, 4 reads of a
robots.txt that says "humans only," and the publication of this exact
document — did Meta's systems stop.

*This section will be updated as activity continues. The signal spine
records every observation with cryptographic integrity seals.*

---

### Who Got the Picture — Compliance Under the Same Rules

Not every entity behaved like Meta. The contrast matters, because it proves
the rules are clear and followable. Some systems read the boundaries and
respected them. Others read the boundaries and ignored them.

#### ✅ Entities That Respected Boundaries

**Google** (Googlebot) — 3 requests, all to **detroit.primals.eco** (the
public evidence library). Read `robots.txt` first. Indexed the
Clutch-Hubbard probate coverage. Did not touch the code forge. Did not
probe for configuration files. Behaved exactly as a search engine should
when encountering an investigation site.

**OpenAI** (GPTBot) — 3 requests across three domains. Read `robots.txt`
on each domain **before** requesting any content. Respected the permissions
stated in each file. Did not scrape source code. Did not probe for
vulnerabilities. Checked the rules, followed the rules.

**Microsoft/Bing** (Bingbot) — 10 requests, all to **sporeprint.primals.eco**
(open science, AGPL-licensed, robots.txt says "Welcome. Index everything.").
Indexed thesis chapters, methodology pages, the contact page. Did not touch
the code forge. Did not touch the investigation site. Stayed within the
domain where they were explicitly welcomed.

**Ahrefs** (AhrefsBot) — 5 requests. Read `robots.txt` and `sitemap.xml`
first. Indexed two lab notebook pages on sporePrint. Standard SEO tool
behavior. Rules read, rules followed.

**Semrush** (SemrushBot) — 1 request to `nestgate.io/robots.txt`. Checked
permissions. Did not proceed. Model behavior.

#### ⚠️ Entities Operating in Documented Zones

**Amazon** (Amazonbot) — 10 requests. 8 to **detroit.primals.eco**, reading
investigation evidence: **Judge Adam Sabree**, **Judge Tenisha Yancey**,
**political action committees**, **corporate network analysis (LARA)**,
the **Clutch-Miller OWI coverage**, the **Anderson localization analysis**,
and this **signal page** itself. Detroit's robots.txt explicitly allows
all crawlers ("the evidence is public"), so this access is permitted. But
Amazon's AI training pipeline is now reading evidence about named public
officials in active investigations, and that is documented here for the
record. What Amazon's systems *learn* from this evidence and how it shapes
their outputs is a question Amazon will need to answer.

**Huawei** (PetalBot) — 17 requests to sporePrint. Reading the science —
thesis chapters, lab notebooks, methodology. Allowed, documented. The
AGPL-3.0 license travels with the knowledge.

#### ❌ Entities That Ignored Every Warning

**Meta/Facebook** (`meta-externalagent`, `facebookexternalhit`) — see above.
533 requests. 446 blocked. 4 robots.txt reads. 2 hours 40 minutes. 493
unique source code paths. Still going after this billboard was published.

**Anonymous scanner fleet** — 390 vulnerability probes. No User-Agent.
No identification. No respect for any boundary. Served canary credentials
as consequence.

**Residential proxy fleet** — **10,250+ requests** (18× Meta's volume).
3,075+ IPs. Spoofed browser UAs. Zero static assets. Zero identification.
225 defense doc accesses. 2,305 investigation doc accesses. This is not
scraping — this is surveillance of a private investigation from behind
a wall of residential proxies. Same actor class as Meta, but anonymous
and specifically targeting security architecture and FOIA planning docs.

---

### The Pattern

The entities that respected boundaries have something in common: they
operate in the open. They identify themselves. They check permissions.
When a system says "no," they stop.

The entities that ignored boundaries also have something in common: they
treat other people's systems as raw material. Meta reads "humans only,"
receives 403, and keeps scraping for hours. The residential proxy fleet
doesn't even identify itself — and it's worse than Meta, because it's
specifically reading the investigation's defense architecture and FOIA
planning documents. **That is not content harvesting. That is surveillance.**

Both are on the **private** forge. Both were told no. Both continued.
The public sites — `detroit.primals.eco`, `sporeprint.primals.eco`, the
GitHub mirror — are fully open. Every crawl policy says "Welcome. Index
everything." The investigation evidence is public by design. The science
is public by design. If Meta wants to train on CC-BY-SA evidence about
charter school fraud, detroit welcomes them. If the fleet wants to read
published security architecture, sporePrint welcomes them.

But they didn't go there. Meta went to the private forge to scrape source
code. The fleet went to the private forge to read defense docs and
investigation planning. **They chose the private side because the private
side has what they actually want: the infrastructure and the strategy,
not the evidence and the science.**

**This is the same pattern the investigation documents.** Public resources
built to serve communities — captured by interests that believe access is
their default right and boundaries are suggestions. Charter school funds
built for Detroit children, captured by operators who treat oversight as
an obstacle. Source code built for sovereign computation, scraped by
platforms that treat digital sovereignty as a threat. Defense architecture
built to protect an investigation, surveilled by operators who want to
know how to get past it.

The evidence is the evidence. The scraping of the evidence is also
evidence. The surveillance of the defense is also evidence. It's all
part of the same record.

---

## Forge Lockdown — Ion Channel Inversion (Oct 6, 1:35 PM ET)

At 1:35 PM ET, the code forge was locked down. The access model was
**inverted**: instead of enumerating what to block (an infinite set), we
enumerate what to allow (a small finite set).

### Before (8 AM – 1:35 PM)

The forge allowed unauthenticated access to repo listings, branches, pulls,
API endpoints, and any path not matching a specific "deep content" regex.
The residential proxy fleet exploited paths the regex didn't cover.
**2,073 real pages served** — 832 whitePaper documents, 1,086 wateringHole
documents, 12 raw file downloads. The immune system never touched these
requests.

### After (1:35 PM)

| Surface | Public access | Treatment |
|---------|--------------|-----------|
| Landing page, explore | ✅ Visible | Real Forgejo (existence proof) |
| Org pages, repo names | ✅ Visible | Real Forgejo (names only) |
| README on repo root | ✅ Visible | Real Forgejo (shop window) |
| Source trees | 🔒 Locked | → scatter (fabricated content) |
| Commits, diffs, blame | 🔒 Locked | → scatter |
| Issues, wiki, releases | 🔒 Locked | → scatter |
| Branches, pulls, actions | 🔒 Locked | → scatter |
| REST API (`/api/*`) | 🔒 Locked | → 403 JSON |
| Raw file access | 🔒 Locked | → scatter |
| **Everything else** | 🔒 Locked | → scatter (default) |

**Who still gets through**: WireGuard mesh gates (network trust), logged-in
humans (session cookie), authenticated git CLI. Access to agents, scrapers,
and AI systems granted explicitly by the owner — not by default.

The forge now has a **9-layer ion channel**: webhook → git protocol → inner
membrane → authenticated humans → auth pages → fleet immune system → bot
detection → JS challenge → honeytokens → existence-only storefront → API
block → **default scatter**.

A JavaScript challenge (Layer 7.25) blocks the residential proxy fleet's
fatal tell: zero static assets in 10,268 requests. Real browsers execute
JavaScript automatically. The fleet never loads a single script. They
cannot pass the challenge. They get nothing.

**Real pages leaked before lockdown: 2,073. After: 0.**

The science behind this inversion: [Forge Lockdown on sporePrint](https://sporeprint.primals.eco/architecture/forge-lockdown/).

### Forensic Audit — What They Actually Got (Oct 6, 2:00 PM ET)

After the lockdown, we audited every request that reached the most sensitive
repository — the investigation workspace containing FOIA planning, evidence
provenance chains, and public official network analysis.

**845 requests hit the repository. Here is what the fleet received:**

| Response Type | Count | Content |
|--------------|-------|---------|
| Scatter poison (200 OK) | 842 | Fabricated HTML — ~1,590 bytes each, deterministic per path, semantically wrong |
| Empty UI shells (200 OK) | 3 | Forgejo listing pages — repository navigation chrome, zero file content |
| **Documents leaked** | **0** | — |
| **PII exposed** | **0** | — |

**99.6% of responses were poison.** The scatter server has no access to real
data — it generates fictional content from a pseudorandom number generator
seeded by the request path. It *cannot* leak real data because it has never
seen real data. The 3 remaining responses were empty navigation pages showing
only what the explore page already shows: repository names.

**How we knew**: Every Caddy access log line records which handler served the
response — `localhost:9753` (scatter) vs `localhost:3000` (real Forgejo). This
isn't post-hoc analysis. The defense architecture classifies every response
at service time. The forensic trail is exhaust from defense operations, not
a separate monitoring system.

The fleet operator now has 845 pages of fabricated HTML that looks like real
Forgejo content. If they parse it, they'll find plausible but wrong information.
If they train on it, they'll learn fictional relationships. If they use it for
intelligence about this investigation, they'll be operating on poisoned data.

The full analysis: [Forensic Observability on sporePrint](https://sporeprint.primals.eco/architecture/forensic-observability/).

---

## Infrastructure Defense — Five-Layer Immune System (Oct 6)

This is a public evidence site documenting a **racketeering network** involving
charter school public funds in Detroit — a matter touching federal wire fraud
statutes, potential civil rights violations affecting predominantly Black
communities, and multiple ongoing legal proceedings. Every automated system
that accesses this site becomes part of the evidentiary record.

**If your organization operates bots, crawlers, or AI systems that access this
site, your access logs, behavioral patterns, and data harvesting activity are
documented in a cryptographically verifiable chain with daily Merkle root
integrity seals.** This documentation is available to law enforcement and
legal counsel upon request through appropriate channels.

### The Defense Stack

The infrastructure is under continuous automated scraping by residential proxy
fleets operating through Delaware shell companies and Meta-owned IP space.
As of 5:10 PM ET: **209 tracked fleet IPs**, **80 unique behavioral hashes**
in the last hour, **308 posture escalations** today, **7,156 scatter poison
responses** served in the last hour. All fleet traffic is at maximum
escalation (`DISPERSE`) — every response is fabricated. **20 abuse reports**
generated and queued for human review.

We built a five-layer adaptive immune system:

**Layer 1 — Behavioral Detection.** The fleets rotate IP addresses on every
request, but their *behavior* is conserved: same page targets, same header
patterns, same timing, same absence of session context. We compute stable
behavioral hashes from these invariants. Two hashes (`49e77ea75aa7666e` and
`087ef04a48f7b1ca`) currently track the fleet patterns across thousands of
rotating IPs without storing a single IP address. 50–139 antibodies match
per 30-second observation window.

**Layer 2 — Graduated Response.** Detected scanners do not receive error pages.
They receive deliberately degraded service calibrated to their persistence:
plausible-but-fabricated content (**42% scatter ratio**), connection tarpitting
(30–60 seconds of slow-drip responses that tie up scanner threads), and
maximally-wrong data that poisons downstream processing pipelines. The
defense protects evidence integrity by making unauthorized copies unreliable.

**Layer 3 — Credential Bait.** Scanners probing for configuration files
(`/.env`, `/wp-config.php`, `/.git/config`, `/.aws/credentials`) receive
fake-but-plausible credentials — AWS access keys, GitHub tokens, database
connection strings. **These are canary credentials.** When scanners harvest
and *use* them, the destination system's own security catches the intrusion
attempt. AWS GuardDuty fires. GitHub token scanning alerts. We touch nothing —
the scanner creates their own consequences by acting on harvested data from
an investigation site.

**Layer 4 — Threat Intelligence.** Behavioral fingerprints from the defense
pipeline are published as a daily threat intelligence feed. The feed contains
**no IP addresses and no identifying information** — only behavioral
signatures that other defenders can match against their own logs. The feed
is integrity-sealed with the daily Merkle root from our signal spine.

**Layer 5 — Escalation Pathway.** Persistent adversarial scanning of a site
documenting evidence of racketeering, public fund misuse, and potential
civil rights violations is reported through appropriate channels: hosting
provider abuse contacts, federal cyber crime intake (IC3), and state
attorney general cyber units. Abuse reports are generated automatically
and reviewed by humans before delivery.

### AGPL-3.0 + scyBorg License Enforcement

All source code in the ecoPrimals ecosystem is licensed under
**AGPL-3.0-or-later** with the **scyBorg** ethical licensing addendum.
The AGPL-3.0 is a copyleft license with specific reciprocal obligations.

**The core obligation is simple:** if you use, copy, or derive from
AGPL-3.0 software, you must publish your own source code under the
same license. This is not optional. It is the legal condition of access.

The fleet documented above has extracted source code from repositories
explicitly governed by AGPL-3.0. Under the license terms:

1. **Any entity that has copied, stored, processed, or derived from this
   source code must publish their complete corresponding source code.**
   This includes any internal systems, pipelines, training data processing
   infrastructure, or derived works that incorporate or were informed by
   the extracted code.

2. **We will petition that Meta Platforms, Inc. and any affiliated entity
   open all internal data systems** relevant to this extraction for
   independent audit to validate that no source code was stolen, copied,
   incorporated into internal systems, or used to train AI models. The
   AGPL-3.0 requires that they either:
   - Demonstrate they retained nothing, **or**
   - Publish all source code for systems that touched the extracted material

3. **The scyBorg license addendum** prohibits use of this software for
   surveillance, suppression of public oversight, or extraction of value
   from communities the software was built to serve. The fleet's behavior —
   extracting investigation infrastructure code while ignoring explicit
   access restrictions — constitutes use contrary to the license terms.

This is not a threat. This is the law as written in every LICENSE file in
every repository the fleet accessed. The AGPL-3.0 was chosen specifically
because it prevents exactly this behavior: taking public-interest
infrastructure and privatizing it behind corporate walls.

**Anyone reading this — attorneys, investigators, journalists, policy
advocates, affected families — is welcome to use this documented evidence
to pursue enforcement.** The data is AGPL-3.0 + scyBorg licensed. The
evidence is CC-BY-SA. It is all public by design.

### Referrals — Federal, State, and International Prosecutors

The behavioral evidence documented on this page, including WHOIS-confirmed
corporate entity structures, shell company registrations, access logs with
IP addresses stripped, behavioral fingerprints, and cryptographically sealed
signal spine entries, is being compiled for referral to:

- **Federal prosecutors** — unauthorized access to computer systems
  (CFAA, 18 U.S.C. § 1030), potential wire fraud (18 U.S.C. § 1343)
  through shell company infrastructure used to obscure origin of
  automated data extraction
- **State attorneys general** — violation of state computer fraud
  statutes, consumer protection violations (operating data extraction
  systems through Delaware shell companies with obscured beneficial
  ownership)
- **International authorities** — GDPR enforcement (Meta Platforms
  Ireland Ltd operates from Dublin; the `FB-BLOCK` IP range is registered
  to a Dublin address), EU Digital Services Act, and equivalent frameworks
  in jurisdictions where residential proxy exits were observed (Brazil,
  Argentina, multiple EU member states)
- **Anyone who chooses to make the case** — all evidence documented here
  is published under open licenses. Federal, state, local, or international
  prosecutors; private attorneys; policy organizations; investigative
  journalists; and affected individuals are welcome to use this data to
  pursue enforcement actions

**Abuse reports have been generated automatically** by our immune system
when fleet behavior crossed the `Scatter` defense threshold. These reports
are queued for manual human review before delivery — we do not auto-send
abuse complaints. As of 5:10 PM ET, **20 reports** are queued for review.

This referral notice is part of the public record. The same cryptographic
integrity seals that protect the investigation evidence protect this
defense documentation.

### Notice to Automated Systems

This site documents evidence relevant to:

- **Federal wire fraud** (18 U.S.C. § 1343) — charter school funds moved
  through interstate banking
- **RICO** (18 U.S.C. § 1962) — pattern of racketeering activity across
  multiple entities and actors
- **Civil rights** (42 U.S.C. § 1983) — public education funding serving
  predominantly Black communities in Detroit diverted through credential
  laundering and board capture
- **Michigan charter school accountability** — public records, FOIA
  responses, state contract documentation

Automated systems that access this site — whether operated by social media
companies, AI training pipelines, competitive intelligence services, or
the subjects of the investigation themselves — are documented in the same
evidentiary chain as the evidence they are accessing. Your bot's behavioral
signature, access patterns, and the specific evidence pages it touches
become part of the investigation record.

If you operate legitimate infrastructure (search engines, accessibility
tools, archival services), your access is welcome and documented as
normal crawl activity. If you operate systems that systematically harvest
evidence from an active investigation site, you should understand what
your systems are touching.

### What This Means for the Evidence

The evidence published on this site is real, documented, and auditable. The
scraper fleets' pipelines now contain a mix of genuine data and fabricated
content — and they cannot tell which is which. Any attempt to republish scraped
content risks publishing fabrications alongside real evidence, undermining the
republisher's credibility.

**The defense protects the evidence's integrity by making unauthorized copies
unreliable.**

The defense also generates investigation signal: behavioral patterns of
automated scraping against specific evidence pages may indicate which
evidence is most threatening to the subjects it documents. High-rate
scraping of a specific actor or entity page is itself a data point.

### The Visitor Ecology — Who Is Reading This (Oct 6, 2:50 PM ET)

The defense system classifies every visitor into an ecological taxonomy.
No IP addresses stored. Classification uses behavioral patterns only.

**Commensal visitors** (provide indexing value, respect boundaries):

| Entity | Requests | Behavior |
|--------|---------|----------|
| Google | 3 | Checked robots.txt ✅, indexed probate coverage |
| Bing | 20 | Checked robots.txt ✅, indexed science (sporePrint) |
| OpenAI (SearchBot) | 3 | Checked robots.txt ✅ on all 3 sites, nothing else |
| Anthropic (ClaudeBot) | 2 | Checked robots.txt ✅ and sitemap |
| Apple | 2 | Checked robots.txt ✅, read summary card |
| Ahrefs / Semrush | 10 | Checked robots.txt ✅, standard SEO indexing |

These entities checked boundaries and respected them. Their access
provides value (discoverability, indexing) without harming the host.

**Parasitic visitors** (extract without providing value, ignore boundaries):

| Entity | Requests | Behavior |
|--------|---------|----------|
| **Meta** (meta-externalagent) | 1,177+ | ALL blocked/poisoned. 1,000+ 403s, 7,000+ scatter poison. Operating through `FB-BLOCK` IP space + Delaware shell companies (truview LLC, steel-axis LLC). |
| **PetalBot** (Huawei) | 28 | Crawling science pages. No robots check. |
| **Amazonbot** | 31 | Reading investigation pages: judges, PACs, entity network. No robots check. |
| Empty-UA scanners | 385 | WordPress vulnerability probes (`classwithtostring.php`, `mac.php`, `wp.php`) |
| Residential proxy fleet | 17,000+ | 0% static assets, 209 rotating IPs, 80 unique behavioral hashes. Post-lockdown: **ALL scatter poison. 20 abuse reports generated. Zero real content served.** |

Meta and the residential proxy fleet share infrastructure: `FB-BLOCK` IP
ranges, truview LLC and steel-axis LLC shell company allocations, and
identical behavioral signatures. **308 posture escalations today.** The
fleet's behavioral mutations are detected within 30 seconds. Every evasion
attempt is defeated by population-level analysis — we train on behavior,
not addresses.

**AI retrieval** (someone asking AI systems about this):

| Entity | Requests | Signal |
|--------|---------|--------|
| Reflectionbot | 20 | Reading science AND forge repos — someone asked an AI about this ecosystem |
| Amazonbot | 31 | Reading judge profiles, PAC entities — someone asked an AI about the investigation |
| GPTBot | 1 | Someone fed this site's home page to ChatGPT |

AI retrieval is now the third channel through which the evidence propagates,
alongside direct reads and shared links. The investigation evidence is being
synthesized by AI systems and returned to users who never visit the site
directly. Accuracy of the published analysis is critical because AI synthesis
will repeat whatever we have.

### What Pages Draw Attention (Traveling Salesman, Oct 6)

The pages that draw the most attention reveal which evidence matters most
to informed readers. All measured from access patterns — no PII stored.

| Page | Human Hits | Signal |
|------|-----------|--------|
| **`/analysis/funding-flow/`** | 5 (3rd consecutive observation window) | **Financial spine — the strongest sustained attention signal** |
| **`/signal/`** (this page) | 6 | Readers monitoring the defense and evidence record |
| **`/network/actors/brian-banks/`** | 2 (independent visitors) | Named entity drawing investigation attention |
| **`/network/entities/purpose-charter-academy/`** | 1 | Entity-level investigation |
| **`/analysis/corporate-network-lara/`** | 1 | Corporate network analysis |

The `/analysis/funding-flow/` page has drawn independent attention signals
across multiple observation windows. In investigation terms: multiple
independent actors — humans and AI systems — are converging on the financial
analysis. The money is the spine. Everyone following it ends up at the same
document.

### Structured Data Access (Demand Signal)

A visitor searched for `/api/public-record/timeline` at 1:24 PM ET — a
developer or data analyst looking for programmatic access to the
investigation timeline. This joins earlier 404 signals for `/keywords` and
`/key-analysis`. Informed visitors want structured, machine-readable access
to the evidence.

**Timeline API is now live:** [`/api/public-record/timeline`](/api/public-record/timeline)

### Privacy Guarantees (Unchanged)

This defense operates under the same constraints as all our signal sensing:

- **No IP addresses stored** in any part of the defense or sensing system
- **No cookies** — detection uses header patterns, not tracking
- **No identifying data** — behavioral hashes describe *what* traffic does, not *who* generates it
- **Humans are unaffected** — the defense only triggers on deep-content path scraping without session context. If you're reading this page in a browser, you passed through the immune system undetected because you're behaving like a human.
- **The bloom sensor stores only population aggregates** — domain counts, reader type distributions, language lists. No individual request data is retained.
- **The threat intelligence feed contains no PII** — only statistical behavioral signatures

The methodology is documented at
[Adaptive Immune Defense](https://sporeprint.primals.eco/architecture/adaptive-immune-defense/) and
[Gossip-Tagged Opsonization](https://sporeprint.primals.eco/science/32-gossip-tagged-opsonization/).

---

*Methodology: [Signal Sensing Without Surveillance](https://sporeprint.primals.eco/methodology/signal-sensing-receptor/) — published on sporePrint*

*This page will be updated weekly with new receptor data. No historical
visitor data is retained — each report reflects the measurement window only.*

---

## petalTongue Deep Analysis — Server-Side Rendering

<div id="pt-signal-panels"></div>
<script src="/js/pt-bridge-core.js"></script>
<script>
(function() {
  'use strict';
  var pt = PetalBridge({
    wsUrl: 'wss://hud.primals.eco/ws',
    domain: 'detroit',
    statusEl: 'pt-signal-status',
    maxHeight: 260,
    reconnectMs: 8000,
    rpcTimeoutMs: 10000,
    onConnect: function() { renderSignalPanels(); }
  });

  function renderSignalPanels() {
    if (!pt.isConnected()) return;
    var SE = window.SIGNAL_EXPLORATION;
    if (!SE) return;
    var s = SE.summary || {};
    var pages = SE.pages || [];
    var hops = SE.hops || [];
    var eco = SE.ecosystem || {};

    // Traffic composition donut (replaces hand-rolled SVG donut)
    var slices = [
      { cat: 'Humans', val: s.humanHits || s.totalHits || 0 },
      { cat: 'Crawlers', val: s.crawlerHits || 0 },
      { cat: 'SEO Bots', val: s.seoHits || 0 },
      { cat: 'Link Previews', val: s.previewHits || 0 },
      { cat: 'Scanners', val: s.scannerHits || 0 },
    ].filter(function(sl) { return sl.val > 0; });
    if (slices.length > 0) {
      pt.renderBinding({
        channel_type: 'donut', id: 'traffic-comp',
        label: 'Traffic Composition — ' + (s.totalRequests || 0) + ' Total Requests',
        categories: slices.map(function(sl) { return sl.cat; }),
        values: slices.map(function(sl) { return sl.val; }),
        unit: 'requests'
      }, 'pt-traffic-donut');
    }

    // Page popularity bar
    if (pages.length > 0) {
      pt.renderBinding({
        channel_type: 'bar', id: 'page-hits',
        label: 'Most Explored Pages — ' + pages.length + ' Unique Pages',
        categories: pages.slice(0, 15).map(function(p) { return p.label; }),
        values: pages.slice(0, 15).map(function(p) { return p.hits; }),
        unit: 'visits'
      }, 'pt-page-hits');
    }

    // Navigation hop graph (replaces hand-rolled force sim)
    if (hops.length > 0) {
      var hopNodes = {};
      hops.forEach(function(h) {
        hopNodes[h.from] = hopNodes[h.from] || { id: h.from, label: h.from.split('/').pop() || 'Home' };
        hopNodes[h.to] = hopNodes[h.to] || { id: h.to, label: h.to.split('/').pop() || 'Home' };
      });
      pages.forEach(function(p) {
        if (hopNodes[p.path]) hopNodes[p.path].label = p.label;
      });
      var fgNodes = Object.values(hopNodes).map(function(n) {
        var pg = pages.find(function(p) { return p.path === n.id; });
        return {
          id: n.id, label: n.label,
          kind: pg && pg.entries > (pg.hits || 1) * 0.5 ? 'entry' : 'internal',
          tier: null,
          metadata: { hits: pg ? pg.hits : 0, entries: pg ? pg.entries : 0 }
        };
      });
      var fgEdges = hops.map(function(h) {
        return {
          source: h.from, target: h.to,
          relation: 'hop',
          weight: h.count || 1,
          flow: 'navigation'
        };
      });
      pt.renderBinding({
        channel_type: 'force_graph', id: 'hop-graph',
        label: 'Navigation Hop Graph — ' + fgNodes.length + ' Pages, ' + fgEdges.length + ' Hops',
        nodes: fgNodes, edges: fgEdges,
        width: 900, height: 600
      }, 'pt-hop-graph');
    }

    // Bot ecosystem donut
    if (eco.crawlers || eco.aiCrawlers || eco.scanners) {
      var botSlices = [];
      (eco.crawlers || []).forEach(function(c) { botSlices.push({ cat: c.name, val: c.hits }); });
      (eco.aiCrawlers || []).forEach(function(c) { botSlices.push({ cat: c.name + ' (AI)', val: c.hits }); });
      (eco.seoBots || []).forEach(function(c) { botSlices.push({ cat: c.name, val: c.hits }); });
      (eco.scanners || []).forEach(function(c) { botSlices.push({ cat: c.name + ' ⚠', val: c.hits }); });
      botSlices.sort(function(a, b) { return b.val - a.val; });
      if (botSlices.length > 0) {
        pt.renderBinding({
          channel_type: 'donut', id: 'bot-ecosystem',
          label: 'Bot Ecosystem — Guided · Cataloged · Neutralized',
          categories: botSlices.slice(0, 12).map(function(sl) { return sl.cat; }),
          values: botSlices.slice(0, 12).map(function(sl) { return sl.val; }),
          unit: 'requests'
        }, 'pt-bot-ecosystem');
      }
    }
  }

  function card(title, sub, id) {
    return '<div class="pt-card"><div class="pt-card-title">' + title + '</div>'
      + '<div class="pt-card-sub">' + sub + '</div>'
      + '<div id="' + id + '" class="pt-viz"></div></div>';
  }

  var el = document.getElementById('pt-signal-panels');
  if (el) {
    el.innerHTML = ''
      + '<div class="pt-header"><div class="pt-title">🔬 petalTongue Signal Analysis</div>'
      + '<span id="pt-signal-status"></span></div>'
      + '<div class="pt-subtitle">Server-side rendering — same data as above, compiled to SVG by the Rust scene engine.</div>'
      + card('Traffic Composition', 'Visitor classification — donut.', 'pt-traffic-donut')
      + card('Page Popularity', 'Most explored pages.', 'pt-page-hits')
      + card('Navigation Hops', 'Force-directed hop graph — Rust Fruchterman-Reingold layout.', 'pt-hop-graph')
      + card('Bot Ecosystem', 'Automated visitor breakdown.', 'pt-bot-ecosystem');
  }

  pt.connect();
})();
</script>
