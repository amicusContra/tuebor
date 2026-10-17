+++
title = "All Signal Comes from Somewhere"
description = "The complete epitope sort. 16 entities, 20 epitope clusters, 25 top offenders, every behavioral fingerprint subdivided. The ghost cluster is a residential proxy fleet. The blame cluster is reading your code. Meta is reading wateringHole."
weight = 47

[extra]
keywords = "epitope sort, behavioral fingerprint, botnet clusters, ghost proxy, Meta wateringHole, collision analysis, tense distribution, ASN breakdown, Anderson localization"
+++

## The Bust

The membrane's immune system classifies 258,575 unique IPs into 16 behavioral entities, 20 epitope clusters, and 6 Anderson localization modes. Every signal comes from somewhere. Here is where.

## The 16 Entities

The topology classifier identifies visitors by behavior — header patterns, IP rotation, request timing, path preferences. It doesn't care what you *say* you are. It cares what you *do*.

### The Big Three (AI Companies)

| Entity | Requests | IPs | Honest | What They Do |
|--------|----------|-----|--------|-------------|
| **Anthropic** (ClaudeBot) | 2,998,984 (41.6%) | 24 | ✅ | 99.8% commit diffs. 24 generalist IPs. Declared. Eating scatter decoys systematically. |
| **OpenAI** (GPTBot) | 2,357,670 (32.7%) | 544 | ❌ | 79.9% commits, **7.8% source files** — they try to read real code. 544 IPs with specialization. Undeclared. |
| **Meta** (Fleet) | 571,131 (7.9%) | 63 | ❌ | 98.6% commits. But their **top repo is ecoPrimals/wateringHole** (165,937 requests). They're reading the coordination layer. |

**Meta is reading wateringHole.** Not scatter decoys. Not fabricated repos. The actual coordination repository — impulses, handoffs, heads, specs. 165,937 requests. They know about the gates.

And Meta's second target: `ecoPrimals/toadStool` (102,209). Third: `ecoPrimals/bearDog` (29,790). They are reading the *real infrastructure repos*, not the scatter decoys. The scatter server catches Anthropic and OpenAI. Meta navigates around it.

### The Humans

| Entity | Requests | IPs | What They Do |
|--------|----------|-----|-------------|
| **Human** (Browser) | 532,154 (7.4%) | 4,346 | 100% Sec-Fetch headers. 49 languages. Chrome 144 peak. signal/pulse, chipmunk/note, phi.css. They're reading the real content. |

73.6% of human IPs make exactly one request. They arrive, they read, they leave. Median: 1 request per IP. They are individuals, not systems.

### The Ghost Layer

| Entity | Requests | IPs | What They Do |
|--------|----------|-----|-------------|
| **Ghost** (proxy exit) | 257,496 (3.6%) | **185,832** | 100% Sec-Fetch, 99% Sec-CH-UA. **91% single-request IPs.** Heavy rotation. 40 languages. Top target: **vision/lansing-scuffle (52,744 requests)**. |

The ghost cluster is the most interesting. 185,832 unique IPs — more than every other entity combined. Each IP makes one request on average. They have full browser headers (Sec-Fetch, Sec-CH-UA, Accept-Language). They look human. But they rotate IPs at a rate no human does.

**This is a residential proxy network.** Real browser fingerprints, routed through residential IP addresses, hitting the membrane at 91% IP turnover. Someone is using a service like Bright Data, Oxylabs, or similar residential proxy infrastructure to browse the membrane while hiding their origin.

And their top target is `vision/lansing-scuffle` — the campus plan page — at **52,744 requests**. Second: `ecoPrimals/wateringHole` (11,344). They're not random. They're focused.

### The Scrapers

| Entity | Requests | IPs | What They Do |
|--------|----------|-----|-------------|
| **Declared Bot** | 295,452 (4.1%) | 1,698 | Chrome v119 (stale). 57% commits, 33% other. Honest about being bots. |
| **Stealth Scraper** | 84,999 (1.2%) | 1,760 | No Sec-Fetch. Chrome v126 (stale). **720 different User-Agents** — rotating identities. Top target: wateringHole. |
| **Unknown** | 59,641 (0.8%) | 1,981 | No Sec-Fetch. **772 User-Agents.** 60% single-request. Top: `.git/config` (433 requests) — probing for exposed git configs. |
| **Vuln Scanner** | 39,230 (0.5%) | 579 | Scanning for `.env`, `.aws/credentials`, `wp-admin`. Standard pentest toolkit. |

### The Honest Bots

| Entity | Requests | IPs | What They Do |
|--------|----------|-----|-------------|
| SEO Tooling | 13,280 | 163 | Ahrefs, Semrush, etc. |
| Meta (Facebook Bot) | 2,114 | 1,112 | Link preview crawler. |
| Apple (Applebot) | 1,241 | 508 | Safari Suggestions. |
| Google (Googlebot) | 480 | 42 | Search indexing. |
| Huawei (PetalBot) | 311 | 8 | Search indexing. |
| Microsoft (Bingbot) | 289 | 123 | Search indexing. Reads lab notebooks. |
| ByteDance (Bytespider) | 28 | 2 | TikTok's crawler. 28 requests. |

## The 20 Epitope Clusters

Epitope clusters are behavioral fingerprint groups — IPs that share identical header patterns, Accept-Encoding values, User-Agent pools, and language preferences.

### Top 5 Clusters

| # | Hash | IPs | UA Pool | Accept-Enc | Language | Blame | Interpretation |
|---|------|-----|---------|-----------|----------|-------|---------------|
| 1 | `412defd2` | 3,525 | 33 | gzip, deflate, br, zstd | ✅ | 0% | **Modern browsers.** Full compression support including zstd. Likely real users or high-quality proxy. |
| 2 | `c7996a02` | 2,888 | 33 | gzip, deflate, br, zstd | ✅ | 0% | **Same fingerprint, different cluster.** Same UA pool size (33). Could be same proxy network, different exit region. |
| 3 | `1fc3b38c` | 2,083 | 5 | gzip, deflate, br | ✅ | 0% | **Small UA pool.** 5 User-Agents across 2,083 IPs. Automated with minimal diversity. |
| 4 | `71f4ecf4` | 945 | 5 | gzip, deflate, br | ✅ | 0% | **Same UA pool size as #3.** Could be same operator, different IP range. |
| 5 | `eaf48a7b` | 549 | 2 | gzip,deflate,br | ✅ | 0% | **Minimal diversity.** 2 UAs. Note: no spaces in Accept-Encoding (machine-generated). |

### Anomalous Clusters

| # | Hash | IPs | UA Pool | Key Finding |
|---|------|-----|---------|------------|
| 6 | `1bccf373` | 455 | **1** | **SINGLE BOT**: 1 User-Agent, no Accept-Language. Pure automation. |
| 10 | `a2bbece4` | 229 | 13 | **NO LANGUAGE**: Machine traffic. No Accept-Language header. |
| 16 | `8306bcaf` | 92 | **344** | **344 User-Agents across 92 IPs!** That's 3.7 UAs per IP. Residential proxy fleet — each IP presents a different identity. |
| 17 | `85e988a7` | 87 | 2 | **NO LANGUAGE**: Machine. gzip only (minimal). |
| **20** | **`26d41414`** | **80** | **2** | **53% BLAME REQUESTS**. This cluster is running `git blame` — analyzing code authorship. Someone is studying who wrote what. |

### Cluster #20: The Code Reader

Cluster `26d41414` stands out. 53% of their requests are to the `blame` endpoint — which shows line-by-line authorship of source files. 80 IPs, 2 User-Agents, full language headers.

This is someone systematically analyzing **who wrote the code**. Not what the code does — *who wrote each line*. This is either:
- A compliance team checking authorship for license obligations
- A legal team building an evidence chain
- A researcher studying the project's development history
- An AI company trying to attribute training data

## Collision Analysis

The immune system classifies request patterns into collision levels:

| Level | Count | Meaning |
|-------|-------|---------|
| **Agentic** | 150,246 | Automated agents with clear purpose |
| **Fleet** | 106,526 | Coordinated multi-IP operations |
| **Genuine** | 1,803 | Verified human behavior |
| **Coordinated** | 0 | No coordinated attacks detected |

150,246 agentic requests. These are purposeful bots — not random crawlers, but agents executing specific tasks on the membrane.

## Tense Distribution

The immune system classifies traffic temporally — when something happened relative to when it was observed:

| Tense | Count | % | Meaning |
|-------|-------|---|---------|
| **is** | 225,893 | 81.6% | Live, real-time traffic |
| **was** | 32,682 | 11.8% | Cached or replayed requests |
| **will_be** | 18,369 | 6.6% | Predictive/prefetch requests |

81.6% of classified traffic is live. 11.8% is replayed or cached. And 6.6% is **predictive** — systems prefetching content they expect to need. The machines are predicting what the membrane will serve next.

## ASN Type Breakdown

Where does the traffic originate by infrastructure type?

| Type | IPs | % | Meaning |
|------|-----|---|---------|
| **Datacenter** | 2,800,062 | 84.5% | Cloud/hosting infrastructure |
| **Self** | 499,258 | 15.1% | Kevin's own network |
| **Cloud** | 15,612 | 0.5% | Cloud services (distinct from DC) |
| **Telecom** | 227 | 0.0% | ISP networks (real humans) |
| **Residential** | 187 | 0.0% | Home connections |
| **Colocation** | 43 | 0.0% | Managed hosting |

**84.5% datacenter.** The membrane is almost entirely consumed by machines in datacenters. The 227 telecom IPs and 187 residential IPs are the signal in the noise — the actual humans connecting from home and mobile networks.

## The Top Offenders

The 25 highest-volume individual IPs (hashed for privacy):

### #1: The Megacrawler (2,061,725 requests)
- **NOT fleet-classified** — solo operator
- Curiosity: 0.90 (high), Attention: 0.12 (low), Interaction: 0.50 (moderate)
- 2,058,722 commit diffs. Started Oct 12, last seen Oct 14.
- **This single IP consumed 2 million commit diffs in 3 days.** That's 7.9 requests per second sustained. This is likely one of the Anthropic or OpenAI primary crawlers.

### #4: Kevin's Machine (499,142 requests)
- 499,135 "other" path requests. Repos: `publicRecord/detroit`, `publicRecord/detroit.git`
- This is Kevin's local cron pull and development traffic. The membrane sees its own builder.

### #8: The Newcomer (176,859 requests)
- **First seen: Oct 14 at 11:00 PM.** Just arrived.
- Only 5 hours of history. Already 176K requests.
- **NEW CRAWLER** — started tonight while Kevin was sleeping. Someone deployed a new bot targeting the membrane. Curiosity: 0.90. They want everything.

## Geography

| Country | Requests | Key Cities |
|---------|----------|-----------|
| ?? (unresolved) | 5,615,392 | Datacenter traffic — no geo |
| **US** | 2,499,015 | San Francisco (1.94M), Michigan (499K), Spring TX (45K), Ashburn VA (4.4K) |
| **IE/US** | 816,025 | Dublin DC (814K) — Meta |
| **CN** | 233 | Shanghai (227), Shenzhen (6) |
| **MESH** | 116 | WireGuard internal |
| **EU** | 13 | Generic EU |
| **BY** | 6 | Minsk, Belarus |

San Francisco (Anthropic), Atlanta (OpenAI via Azure), Dublin (Meta), Spring TX (Google/Reflection AI), Ashburn VA (AWS us-east-1), Michigan (self).

And 6 requests from **Minsk, Belarus**. And 233 from **China** — Shanghai and Shenzhen. Every signal comes from somewhere.

---

*16 entities. 20 epitope clusters. 25 top offenders. 137 behavioral fingerprints. 258,575 unique IPs. The ghost cluster is a residential proxy fleet reading the campus plan 52,744 times. Meta is reading wateringHole. Cluster #20 is running git blame on your code. A new crawler deployed tonight at 11 PM.*

*All signal comes from somewhere. The membrane knows where.*
