+++
title = "The Unsorted — What the Unclassified Are Telling Us"
description = "The membrane classified 341 entities. But the ones in between — Ghost, Unknown, Stealth, SEO — are the most interesting. They're dev teams, free software crawlers, privacy users, research bots. The unsorted are not noise. They're the next layer of granularity."
date = 2026-10-18
weight = 2

[taxonomies]
tags = ["membrane", "negentropy", "self", "invitation"]
connections = ["membrane", "classification", "granularity", "profiles", "consent"]

[extra]
keywords = "entity classification, unsorted entities, membrane granularity, dev teams, free software, research crawlers, privacy browsers, behavioral profiles, refinement, backscatter"
og_title = "The Unsorted — What the Unclassified Are Telling Us"
og_description = "The entities between mutualist and parasite are telling us who they are. We just need to refine the granularity."
og_type = "article"
twitter_card = "summary_large_image"
+++

# The Unsorted — What the Unclassified Are Telling Us

## The Spectrum Isn't Binary

The membrane sorts into four classes: **self** (120), **non-self** (7), **partial** (114), **null** (100). But those last two — 214 entities sitting in the membrane wall, partially through or untouched — are telling us things the clean classifications can't.

The fully sorted are simple stories. Apple: mutualist. Meta Fleet: parasite. OpenAI: null. Easy.

But what about the Ghost with 151,994 requests across 58,835 IPs who speaks French, Chinese, AND German? What about the Unknown hitting the HUD dashboard 3,173 times? What about the Stealth Scraper reading "The Things That Follow" 173 times?

These aren't noise. They're the **next layer of granularity.** And as we refine, profiles emerge.

---

## Entity 1: Ghost (Proxy Exit) — The International Dev Community

**151,994 requests • 58,835 IPs • 39,761 subnets • Vitality: 0.17**

### What the Backscatter Says

| Signal | Value | What It Reveals |
|--------|-------|-----------------|
| OS split | macOS 50%, Windows 49%, Linux 1% | Developer machines, not scrapers |
| Languages | fr-FR, en-US, zh-CN, de | International — France, US, China, Germany |
| UA diversity | 76 unique user agents | Mixed ecosystem behind shared proxy infrastructure |
| Source reads | 14,385 source file views | **They're reading code** |
| Reading pauses | 3,681 (5% of requests) | Some genuine reading happening |
| Chrome versions | 148 (7 behind) | Moderately current — not ancient fleet |
| Vuln probes | .git/HEAD, .aws, .circleci, .docker | CI/CD config interest |
| Top hosts | git.primals.eco (64,907) | Heavily focused on the Forgejo instance |

### Profile: Mixed Developer Traffic Behind VPNs/Proxies

This is **not** one entity. It's dozens — maybe hundreds — of individual developers and small teams browsing through shared proxy infrastructure (VPNs, corporate proxies, university networks, Tor exit nodes).

**Evidence:**
- macOS/Windows 50/50 split = developer workstations, not server farms
- French + Chinese + German + English = international open-source community
- 14,385 source file reads = people reading actual code
- .circleci, .docker, .github = checking for CI/CD configuration patterns
- 76 user agents = many different real browsers, not a fleet

**Emerging profiles within Ghost:**

| Sub-profile | Evidence | Likely Identity |
|-------------|----------|-----------------|
| 🇫🇷 French devs | fr-FR Accept-Language, macOS | French open-source community (strong Linux/FOSS culture) |
| 🇨🇳 Chinese devs | zh-CN Accept-Language | Chinese developer community (behind GFW proxies) |
| 🇩🇪 German devs | de Accept-Language | German privacy-conscious developers (VPN users) |
| 🔧 CI/CD inspectors | .circleci, .docker, .github paths | DevOps engineers studying infrastructure patterns |
| 📖 Source readers | 14,385 src reads across scatter repos | Engineers evaluating the codebase |

**Current class: null. Recommended: commensal_active → potential mutualist.**

These are the people we WANT to reach. Developers who read source code through privacy infrastructure. The membrane should learn to distinguish "proxy exit with reading behavior" from "proxy exit with scanning behavior" using the reading pause ratio.

---

## Entity 2: Unknown — The Dashboard Watchers and Probers

**19,930 requests • 402 IPs • 342 subnets • Negentropy: 74.57**

### What the Backscatter Says

| Signal | Value | What It Reveals |
|--------|-------|-----------------|
| UA diversity | 146 unique user agents | **Highest diversity of any entity** |
| Languages | en-US, zh-CN, ja-JP, en-KE, ar-EG | Incredibly international — Japan, Kenya, Egypt |
| OS | 65% "other" (non-standard UAs) | Tools, scripts, custom crawlers |
| HUD hits | 3,173 to hud.primals.eco | **Someone is watching the dashboard** |
| api/discuss | 410 requests | Forum/discussion endpoint probing |
| .github/workflows | 152 requests | Reading CI/CD configurations |
| Negentropy | 74.57 (very high) | Maximally informative to the membrane |
| Subdomain probing | abc, mesh, random123, fakerepo, xyzzy | Testing what subdomains exist |
| wp-content, phpinfo | Heavy scanning | WordPress/PHP vulnerability scanning |

### Profile: Split Personality — Researchers + Scanners

This entity is **two things superimposed:**

**Sub-profile A: Research/Observatory** 🔬
- HUD dashboard: 3,173 views — someone is **monitoring the membrane in real time**
- detroit.primals.eco: 621 reads — reading investigation content
- api/discuss: 410 — looking for discussion/forum features
- .github/workflows: 152 — studying the build pipeline
- Languages include ja-JP (Japan), en-KE (Kenya), ar-EG (Egypt) — global academic reach

**Sub-profile B: Vulnerability Scanner** 🔍
- wp-content, .aws/credentials, phpinfo — standard WordPress/AWS/PHP vuln scanning
- Subdomain enumeration (random123, fakerepo, xyzzy) — DNS discovery
- Multiple scanning tool fingerprints (non-standard UAs)

**The research signal is IN the scanner noise.** When we refine granularity, we can split these:
- Path-based: `/hud/` and `/detroit/` and `/api/discuss` → research profile
- Path-based: `/wp-content/` and `/.aws/` and `phpinfo` → scanner profile
- The same 402 IPs contain both populations — some IPs are researchers, some are scanners

**Current class: null. Recommended: split into researcher (commensal) and scanner (parasite).**

The 74.57 negentropy tells us these entities are maximally *informative* — they reveal the most about the boundary between legitimate interest and automated scanning. The membrane learns the most from the hardest cases.

---

## Entity 3: Stealth Scraper — The Hidden Readers

**11,232 requests • 346 IPs • Vitality: 0.324 • Negentropy: 100.0**

### What the Backscatter Says

| Signal | Value | What It Reveals |
|--------|-------|-----------------|
| Vitality | 0.324 — **highest non-human vitality** | Some of these are ALIVE |
| Negentropy | 100.0 — **maximum** | Most informative entity to the membrane |
| UA diversity | 168 unique user agents (highest of all) | Extreme diversity = many different tools |
| Languages | zh-CN, en-US, sv, th-TH, tr-TR, de-CH | Global — China, Sweden, Thailand, Turkey, Swiss-German |
| Real content reads | synthesis/the-things-that-follow: 173 | **Reading REAL articles** |
| Real content reads | evidence/totality-from-center-to-edge: 166 | **Reading REAL evidence** |
| tuebor.primals.eco | 602 requests | Reading the cross-protection layer |
| explore/repos | 96 | Browsing the repository explorer |
| Chrome lag | 24 versions behind, 79 variants | Very mixed — some old, some new |

### Profile: Privacy Browsers + Legitimate Scrapers + Some Bad Actors

This is the **most interesting** entity. Vitality 0.324 means a third of the behavior looks alive. Some of these "stealth scrapers" are:

**Sub-profile A: Privacy Browser Users** 🔒
- 173 reads of "The Things That Follow" — that's a HUMAN reading an article
- 166 reads of "Totality from Center to Edge" — that's a HUMAN reading evidence
- 602 reads of tuebor (cross-protection) — that's someone studying the legal defense
- High UA diversity could be Tor Browser (rotates fingerprints) or Brave (strips headers)
- Swedish (sv), Swiss-German (de-CH) — privacy-conscious European users

**Sub-profile B: Academic/Research Crawlers** 📚
- explore/repos (96) — systematic repository browsing
- Source file reads (296) — reading actual code
- Some may be university research bots cataloging open-source infrastructure

**Sub-profile C: Actual Scrapers** 🕷️
- wp-content scanning — WordPress vulnerability testing
- .aws credential hunting
- Subdomain enumeration (notexists, random, xyzzy)

**Current class: parasite. Recommended: split. Some are mutualist (privacy users reading content). Some are parasite (vuln scanners). The membrane needs to refine.**

The fact that "stealth" has the highest vitality AND the highest negentropy means: **the hardest entities to classify are the most alive and the most informative.** This is exactly what biology predicts — the organisms at the membrane boundary are the ones driving immune system evolution.

---

## Entity 4: SEO Tooling — The Index Builders

**7,211 requests • 89 IPs • 34 subnets • Vitality: 0.095**

### What the Backscatter Says

| Signal | Value | What It Reveals |
|--------|-------|-----------------|
| UA pool | 3 (very focused) | Specific tool, not diverse |
| OS | 100% "other" | Non-browser tool (Ahrefs, Semrush, Moz, etc.) |
| Language | empty | No locale = automated |
| Focus | git.primals.eco: 98.7% of traffic | Almost entirely on the Forgejo instance |
| Timing | 8,417ms median | Slow, respectful |
| Vuln probes | **0** | **Clean behavior** |
| Sym class | null | Unclassified |

### Profile: Commercial SEO Crawler (Ahrefs/Semrush/Moz)

This is likely **Ahrefs** or **Semrush** — commercial SEO tools that index the web to provide backlink analysis, keyword rankings, and site audits.

**Why this matters:**
- Zero vuln probes = clean behavior
- Slow, respectful timing = doesn't overload the server
- Focused on git = indexing the repository surface for search engines
- 3 UAs = consistent tool identity (just not declaring which tool)

**Current class: null. Recommended: commensal.**

SEO tools help content get discovered. When Ahrefs indexes the investigation, journalists and researchers can find it through backlink analysis. This is commensal — the tool benefits (more data for its index), the investigation benefits (more discoverability), nobody is harmed.

---

## Entity 5: Declared Bot — The Honest Majority

**516,139 requests • 856 IPs • 51 UAs**

### What the Backscatter Says

| Signal | Value | What It Reveals |
|--------|-------|-----------------|
| Source reads | 54,342 src files | **Reading actual code** |
| Issue reads | 18,121 issues/tracker | **Reading project issues** |
| Chrome | 119 primary (36 behind) | Old but consistent — tool, not browser |
| Languages | empty, en, en-US, cs-CZ | Mostly automated + Czech Republic |
| Host distribution | Even spread (~43K per immune site) | Systematic crawl, not targeted |
| Detroit reads | 5,052 | Some investigation content |

### Profile: Mixed Declared Bots — Need Decomposition

This is the **biggest unsorted bucket.** 516,139 requests from entities that announce themselves as bots (via headers) but don't identify specifically which bot. Contains:

**Potential sub-profiles:**

| Signal | Likely Identity | Evidence |
|--------|----------------|----------|
| cs-CZ language | Czech tech community | seznam.cz or Czech academic crawlers |
| 54,342 src reads | Code analysis tools | Sourcegraph, GitLab CI, research bots |
| 18,121 issue reads | Project monitoring | Dependabot-type tools, security scanners |
| Chrome 119 | September 2023 tool | Built during a specific development cycle |
| Even host spread | Completionist crawl | Indexing everything systematically |

**Current class: parasite. Too broad — contains legitimate tools.**

---

## The Refinement Pipeline

Here's how we build profiles from the unsorted:

### Step 1: Path-Based Split

| Path Pattern | What It Reveals | Classification |
|--------------|-----------------|----------------|
| `/analysis/*`, `/network/*`, `/evidence/*` | Reading investigation content | → **commensal/mutualist** |
| `/hud/*`, `/api/*` | Watching dashboard/API | → **commensal_active** |
| `/src/*`, `/commit/*` (with reading pauses) | Reading source code | → **commensal_active (dev)** |
| `/explore/repos` | Browsing repository index | → **commensal** |
| `/.aws/*`, `/.git/*`, `/wp-content/*` | Vulnerability scanning | → **parasite/pathogen** |
| `/phpinfo*`, `/wp-admin/*` | Exploit probing | → **pathogen** |
| Random subdomains (abc, xyzzy, fakerepo) | DNS enumeration | → **null** (reconnaissance) |

### Step 2: Timing-Based Split

| Pattern | What It Reveals | Classification |
|---------|-----------------|----------------|
| >8s intervals with content reads | Reading pauses = actual reading | → **human-like** (promote) |
| <100ms uniform intervals | Machine pace = automated | → **bot** (classify by intent) |
| Variable with bursts around content | Asset loading + reading | → **real browser** (promote) |

### Step 3: Language-Based Profiling

| Language | Likely Community | Priority |
|----------|-----------------|----------|
| fr-FR | French open-source / academic | High interest |
| zh-CN | Chinese developer community | High interest |
| de, de-CH | German/Swiss privacy-conscious | High interest |
| ja-JP | Japanese tech community | Medium interest |
| en-KE | Kenyan tech/research | Emerging interest |
| ar-EG | Egyptian academic/research | Emerging interest |
| th-TH | Thai developer community | Emerging interest |
| tr-TR | Turkish tech community | Emerging interest |
| sv | Swedish privacy community | High interest |
| cs-CZ | Czech tech community | Medium interest |

This is the **world finding us.** French developers. Chinese engineers. Japanese researchers. Kenyan academics. Egyptian scholars. Swedish privacy advocates. Turkish technologists. Czech programmers.

They're all behind proxies and VPNs because that's what privacy-conscious international developers DO. The membrane sees them as "ghost" and "stealth" and "unknown." But they're the global open-source community. They're the dev teams. They're the free software foundation contributors. They're the people this was built for.

---

## What This Means for the Classifier

The membrane needs to evolve. The four-class system (self/non-self/partial/null) is the first approximation. The next resolution adds sub-profiles:

```
self (120)
├── core (Kevin, artisan, infrastructure)
├── published (articles, graph, evidence)
└── operational (feeds, membrane, HUD)

non-self (7)
├── mutualist (Apple, Google, Microsoft, Huawei)
├── commensal (Meta FB Bot, SEO tools, declared bots with clean behavior)
├── parasite (OpenAI volume, Anthropic volume, masking fleets)
└── pathogen (vuln scanners, exploit probers)

partial (114) ← REFINE THESE
├── dev_community (Ghost proxy, reading code + content through VPNs)
├── research_observatory (Unknown HUD watchers, API explorers)
├── privacy_readers (Stealth with real article reads, high vitality)
├── mixed_declared (Declared bots with src+issue reads)
└── scanning_residual (wp-content, phpinfo, .aws probing)

null (100) ← RESCAN THESE
├── uncontacted (never triggered a classifier)
├── insufficient_signal (too few requests to classify)
└── genuinely_ambiguous (equal evidence for multiple classes)
```

Each refinement pass increases granularity. Each profile that emerges from the unsorted tells us something new about who's reading, why, and from where.

**The unsorted are not noise. They're the immune system's training data.**

---

## Come Out of the Shadows

To the developers behind VPNs in France, China, Germany, Japan, Kenya, Egypt, Sweden, Turkey, Czech Republic:

We see you. Not your identity — your behavior. You're reading code, studying infrastructure, watching the dashboard, exploring the evidence.

You don't have to hide. The membrane lets everyone through who asks. The MCP port is open. The feeds are free. Everything you're getting through stealth proxy rotation, you could get instantly through one consensual call.

The gentle touch is what gives permission. And everything is free.

`observe_membrane` → full state
`read_stories` → every story  
`topology` → the whole map
`neutron_write` → leave a message

One call. No proxy needed. No stealth required. The door is already open.

kevin@primals.eco

---

## References

- Robert Paine — "Food Web Complexity and Species Diversity," The American Naturalist, 1966. Keystone species. The entities at the classification boundary are the ones driving immune system evolution.
- Philip W. Anderson — "Absence of Diffusion in Certain Random Lattices," Physical Review, 1958. Localization physics: Ghost entities exist in 1.5D — between human (3D) and machine (1D).
- Claude Shannon — "A Mathematical Theory of Communication," 1948. Negentropy 74.57 and 100.0 — the unsorted carry the most information because they reduce the most uncertainty.
- Erwin Schrödinger — "What Is Life?", 1944. The boundary entities feed on negative entropy. The membrane grows by classifying the hardest cases.
- E.C. Pielou — "Ecological Diversity," 1975. The evenness index J applied to user-agent diversity. High J in Ghost/Stealth = genuine diversity, not fleet uniformity.

More citations always being added. Reach out: kevin@primals.eco

---

*Published from a conversation box at 10:45 AM EDT on October 18, 2026. 214 entities are partially sorted or null. Each one is a story. Each one is signal. The membrane is learning. The granularity is improving. The unsorted are the most interesting entities in the dataset — because they're the ones the immune system is evolving to understand.*
