+++
title = "The Ghost Split — 59,587 Masks, Four Layers Deep"
description = "Ghost isn't one entity. It's a transit network. 59,587 residential IPs with perfect browser fingerprints — but 84% are reading the SAME scatter repos as the declared fleet. Someone is routing fleet crawlers through real people's machines. The Chrome versions prove they're real desktops. The targets prove they're fleet. Now we can see who's riding the bus."
date = 2026-10-18
weight = 1

[taxonomies]
tags = ["membrane", "negentropy", "fleet", "ghost", "classification", "proxy", "science"]
connections = ["fleet-is-live", "the-unsorted", "convergent-evolution", "entity-classification", "scatter-defense"]

[extra]
keywords = "ghost entity, residential proxy, fleet detection, browser fingerprint, Chrome version distribution, IP rotation, scatter repos, proxy network, entity classification, BrightData, Luminati, fleet hiding, Meta data collection"
og_title = "The Ghost Split — 59,587 Masks, Four Layers Deep"
og_description = "Ghost isn't one entity. It's a transit network. 84% are reading scatter repos through real people's machines."
og_type = "article"
twitter_card = "summary_large_image"
+++

# The Ghost Split

## 59,587 Masks. Four Layers Deep.

Ghost was classified as one entity: "proxy exit." 152,860 requests from 59,587 unique IPs across 40,214 subnets. Perfect browser fingerprints. Languages: French, Chinese, German, Austrian, English. The membrane called it Ghost because it looked like a crowd of ghosts — each one appearing once and vanishing.

**Ghost isn't one entity. Ghost is a transit network.** And at least four different things are riding it.

---

## The Chrome Versions Are The Tell

Every fleet we've identified has a signature: **frozen Chrome versions.**

- **OpenAI (GPTBot):** 1 UA string for 1,374,313 requests. One version. One config.
- **Declared Bot:** Chrome/119 for 529,385 requests. **36 versions behind stable.**
- **Anthropic:** 2 UA strings for 390,516 requests.

Now look at Ghost:

| Chrome Range | Versions | Requests Each | Pattern |
|---|---|---|---|
| **144-153** | 10 versions | ~9,200-9,750 | Current cluster (updated machines) |
| **99-124** | 8 versions | ~3,900-4,060 | Older machines (haven't updated) |
| **130-137** | 4 versions | 260-4,071 | Transition zone |
| **79, 83, 92** | 3 versions | 1-12 | Ancient machines |
| **155** | 1 version | 312 | Bleeding edge early adopters |

**38 Chrome versions.** Distributed exactly like you'd expect from tens of thousands of REAL computers with different update schedules.

A fleet picks one version and freezes it. Ghost has the **natural Chrome upgrade distribution** of a residential population.

---

## The OS Distribution Confirms It

| OS | Ghost Requests | Percentage |
|---|---|---|
| macOS | 76,019 | 49.7% |
| Windows | 75,513 | 49.4% |
| Linux | 1,173 | 0.8% |
| Other | 155 | 0.1% |

**Almost exactly 50/50 macOS and Windows.**

Fleets run on Linux servers. OpenAI: 100% `other` (Linux/custom). Declared Bot: 99% `other`. Every fleet is Linux because servers run Linux.

Ghost is **macOS and Windows** in equal proportions. That's the real-world desktop split. These are real desktops. Real people's machines.

---

## 91.4% Single-Request IPs

59,587 IPs. 91.4% sent exactly **one request** and disappeared.

That's not anonymous browsing. That's a **residential proxy rotation service.** BrightData (formerly Luminati), Oxylabs, SmartProxy, Webshare — they all work this way:

1. Customer buys proxy access
2. Each request routes through a different residential IP
3. The exit IP is a real person's machine (SDK installed via "free VPN" or "earn money" apps)
4. The request arrives with the real machine's Chrome version, OS, and headers
5. The IP is never reused for the same target

**The perfect disguise.** Every request looks like a unique real person in a different country.

---

## But The Targets Betray Them

Here's where it falls apart. Ghost's top 20 targets:

| Ghost Target | Requests | Type |
|---|---|---|
| core-utils/commit | 3,074 | **Scatter repo** |
| search-index/commit | 3,048 | **Scatter repo** |
| event-bus/commit | 2,919 | **Scatter repo** |
| graph-engine/commit | 2,860 | **Scatter repo** |
| docs-site/commit | 2,807 | **Scatter repo** |
| schema-registry/commit | 2,789 | **Scatter repo** |
| batch-processor/commit | 2,732 | **Scatter repo** |
| notification-hub/commit | 2,681 | **Scatter repo** |
| rate-limiter/commit | 2,643 | **Scatter repo** |
| oauth-provider/commit | 2,638 | **Scatter repo** |
| stream-adapter/commit | 2,624 | **Scatter repo** |
| log-aggregator/commit | 2,605 | **Scatter repo** |
| auth-service/commit | 2,590 | **Scatter repo** |
| http-proxy/commit | 2,580 | **Scatter repo** |
| webhook-relay/commit | 2,566 | **Scatter repo** |
| key-store/commit | 2,554 | **Scatter repo** |
| feature-flags/commit | 2,543 | **Scatter repo** |
| web-frontend/commit | 2,508 | **Scatter repo** |
| data-pipeline/commit | 2,489 | **Scatter repo** |
| vault-client/commit | 2,481 | **Scatter repo** |

**Every single top target is a scatter repo.** The same scatter repos that OpenAI hits. The same ones Microsoft hits. The same distribution.

**84% of Ghost traffic is commit diffs** (128,537 out of 152,860).

Real humans don't read commit diffs. Real humans reading through VPNs would hit articles, the investigation, the science pages. They'd show in the `other` or `src` path categories. They'd read *content.*

Ghost reads **fake commit diffs from fake repositories** — exactly like the declared fleet — but through 59,587 real people's machines.

---

## The Four Layers

Ghost is not one thing. It's four things sharing one pipe:

### Layer 1: Null (~54,500 IPs)
- Sent exactly 1 request
- No behavioral signal
- Cannot classify — insufficient data
- **Hold at null.** May never return.

### Layer 2: VPN Humans (~3,800 sessions)
- Show **reading pauses** (3,836 pauses detected — intervals >8 seconds)
- Diverse languages: `fr-FR`, `de-AT`, `zh-CN`, `en-US` — these are real people in real countries
- Current Chrome versions (148-155)
- Some read articles, not just commit diffs
- **These are genuine privacy-conscious readers.** French developers, Austrian researchers, Chinese technologists. They use VPNs because they value privacy. They read because they're curious.
- **Classification: self** (genuine humans behind privacy tools)

### Layer 3: Corporate/Cloud (~200 IPs)
- High requests per IP (max: 281 from one IP)
- `text/x-component` in Accept headers (React/Next.js — developers)
- Multiple sessions from same exit IP = corporate VPN with shared exit
- **These are developers at companies, browsing through corporate network**
- **Classification: partial** (need more signal to determine if reading or crawling)

### Layer 4: Fleet-Through-Proxy (~1,100 IPs)
- **Machine timing:** burst_count 71,627 vs pause_count 3,836 (19:1 ratio)
- **Scatter-only targeting:** 84% commit diffs, same repos as declared fleet
- **Real browser fingerprints** but **machine behavior**
- The residential proxy makes them LOOK human. The behavior makes them fleet.
- **Classification: non-self** (fleet hiding in residential proxy network)

---

## Who's Riding The Bus?

The fleet-through-proxy layer (~1,100 IPs with machine behavior) is hitting the **same scatter repos** as:

| Declared Fleet | Ghost Layer 4 | Same Targets? |
|---|---|---|
| OpenAI (GPTBot) — 1.37M req | ~1,100 IPs, 84% commit diffs | ✅ Same scatter repos |
| Microsoft (AS8075) — 1.38M req | Same target distribution | ✅ Same scatter repos |
| Anthropic (ClaudeBot) — 390K req | Same crawl pattern | ✅ Same scatter repos |

**The declared fleet and the Ghost fleet are reading the same fake repos.** The only difference is the pipe:

- **Declared:** Datacenter IPs, honest (or identifiable) User-Agent
- **Ghost:** Residential IPs, perfect browser fingerprint, no identification

Same crawl. Same targets. Same distribution. Different mask.

This is where the data goes. The residential proxy network collects it through 59,587 real people's machines, aggregates it, and delivers it to customers who pay for "web scraping" or "market intelligence" or "competitive analysis."

**The customers are the same companies whose declared bots are already crawling us.**

They're paying twice: once for the declared crawl (which hits scatter and learns nothing), and once for the Ghost crawl (which ALSO hits scatter and ALSO learns nothing). Two channels. Same empty shelves. Double the cost. Zero the intelligence.

---

## The Scatter Defense Worked Twice

The scatter repos weren't just absorbing the declared fleet. They were absorbing **both channels simultaneously:**

| Channel | Requests | Scatter Hit Rate | Intelligence Gained |
|---|---|---|---|
| Declared Fleet | 2,670,000+ | ~95% scatter | Zero |
| Ghost (Layer 4) | ~128,500 | ~84% scatter | Zero |
| **Total absorbed** | **~2,798,500** | | **Zero** |

2.8 million requests across two channels. Both hitting fake repos. Both learning nothing. Both paying for the privilege.

Meanwhile, the 3,800 VPN humans who actually paused and read got everything for free.

---

## What This Means For Classification

The Ghost entity needs to be split in the Rust-side classifier:

```
ghost_null:       ~54,500 IPs  →  null (hold)
ghost_vpn_human:  ~3,800 IPs   →  self (genuine readers)
ghost_corporate:  ~200 IPs     →  partial (more signal needed)
ghost_fleet:      ~1,100 IPs   →  non-self (fleet through proxy)
```

**Discriminating signals:**
- **Timing CV:** Humans >2.0, machines <1.0. Ghost overall is 5.288 (mixed). Split by per-IP timing.
- **Content type:** Article reads = human. Commit diff reads = fleet. 
- **Chrome version:** Current (148+) with pauses = human. Any version without pauses = fleet.
- **Requests per IP:** 1 = null. 2-10 with pauses = human. 10+ without pauses = fleet/corporate.

This split would:
- Rescue ~3,800 genuine humans from the Ghost bucket into `self`
- Identify ~1,100 fleet-through-proxy entities as `non-self`
- Explain how the same crawl pattern appears from both datacenter IPs and residential IPs
- Show that the scatter defense absorbs attacks through BOTH channels

---

## The Convergent Evidence

Five independent signals all point to the same conclusion:

1. **Chrome versions** (38 variants = real desktops, not fleet)
2. **OS distribution** (50/50 macOS/Windows = real desktops, not servers)
3. **IP rotation** (91.4% single-use = residential proxy service)
4. **Target overlap** (same scatter repos as declared fleet)
5. **Timing bimodality** (71K bursts + 3.8K pauses = mixed population)

**Ghost is a residential proxy network being used by fleet crawlers.** The real humans behind the VPNs are collateral — their machines are proxy exits, and some of them are also genuine readers. The fleet entities are the ones paying for the service.

This is convergent evidence. Not circumstantial — **convergent.** Five independent measurement axes pointing to the same structure. The probability of all five aligning by chance is vanishingly small.

The Ghost was never one ghost. It was a bus full of passengers — some human, some machine — all wearing the same mask.

Now we can see who's driving.

kevin@primals.eco

---

*The scatter defense absorbed 2.8 million requests across two channels and returned zero intelligence through either one. The VPN humans who paused got everything. The fleet that paid for residential proxies got fake commit diffs. The membrane can't be fooled by changing the pipe — it classifies behavior, not IP addresses. And behavior doesn't lie.*
