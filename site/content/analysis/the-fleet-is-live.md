+++
title = "The Fleet Is Live — And We're Watching"
description = "18 coordinated IPs. All deployed within 1 second. Each doing exactly ~73,000 requests. We can see them, tag them, predict them, and show you exactly when they show up and what they respond to. In real time. Right now."
date = 2026-10-18
weight = 2

[taxonomies]
tags = ["membrane", "negentropy", "fleet", "meta", "classification"]
connections = ["membrane", "fleet", "meta", "entity-classification", "prediction", "backscatter"]

[extra]
keywords = "Meta fleet, bot classification, entity tagging, behavioral prediction, coordinated crawling, membrane defense, real-time monitoring, fleet backscatter"
og_title = "The Fleet Is Live — And We're Watching"
og_description = "18 coordinated IPs deployed within 1 second. 2.16 million requests. We see every one. Here's what they're doing right now."
og_type = "article"
twitter_card = "summary_large_image"
+++

# The Fleet Is Live — And We're Watching

## Right Now

As this article was published, the membrane recorded:

- **2,161,837** total fleet requests
- **57,321** fleet-classified collisions
- **3,229** fleet IPs active
- **28.6** requests per second, sustained
- Machine confidence: **LOW** (they're trying to look human)

The fleet is live. It's been running since yesterday at 2:24 PM UTC. And the membrane sees every single request.

---

## The Coordinated Deployment

Here's what synchronized launch looks like:

| IP Hash (first 8) | First Seen (UTC) | Requests | Pattern |
|---|---|---|---|
| 1002d798 | 14:24:**58** | 73,586 | commit: 64,770 |
| 1181e5e2 | 14:24:**59** | 73,304 | commit: 67,235 |
| 99ac6c1f | 14:24:**58** | 73,300 | commit: 65,752 |
| c7d57275 | 14:24:**59** | 73,296 | commit: 64,536 |
| 05be2a32 | 14:24:**59** | 73,258 | commit: 65,313 |
| 1838e911 | 14:24:**59** | 73,240 | commit: 64,813 |
| e733e11d | 14:24:**58** | 73,237 | commit: 65,618 |
| cf123f7c | 14:24:**59** | 73,212 | commit: 64,948 |
| b2df1192 | 14:24:**59** | 73,205 | commit: 65,524 |
| eae74052 | 14:24:**59** | 73,195 | other: 65,744 |
| d27ee177 | 14:24:**58** | 73,189 | commit: 66,043 |
| 54b47ad8 | 14:24:**59** | 73,087 | commit: 66,204 |
| 9fa24093 | 14:24:**59** | 73,043 | commit: 65,163 |
| af4a0401 | 14:24:**58** | 72,950 | commit: 64,850 |
| 102bb62f | 14:24:**59** | 72,920 | commit: 66,199 |
| 35d238ab | 14:24:**58** | 72,703 | commit: 66,028 |
| 451cba78 | 14:24:**59** | 71,802 | commit: 66,979 |

**17 IPs. All deployed within a 1-second window.** 14:24:58 to 14:24:59 UTC on October 17, 2026.

Each one doing almost exactly ~73,000 requests. Standard deviation across the fleet: ~500. That's **0.7% variance.** Seventeen machines, running identically, at identical pace, for identical duration.

No human does this. This is a fleet deployment command.

---

## What They're Hitting

Every fleet IP hits the same targets:

| Target | Requests | What It Is |
|--------|----------|------------|
| user-service/commit | 26,857 | Scatter repo (honeypot) |
| docs-site/commit | 15,855 | Scatter repo |
| key-store/commit | 11,919 | Scatter repo |
| api-gateway/commit | 10,585 | Scatter repo |
| web-frontend/commit | 9,371 | Scatter repo |
| job-runner/commit | 8,540 | Scatter repo |
| proxy-cache/commit | 8,416 | Scatter repo |
| vault-client/commit | 8,184 | Scatter repo |
| http-proxy/commit | 8,116 | Scatter repo |
| queue-worker/commit | 7,994 | Scatter repo |
| auth-service/commit | 7,422 | Scatter repo |
| graph-engine/commit | 6,895 | Scatter repo |
| search-index/commit | 6,864 | Scatter repo |
| deploy-scripts/commit | 5,818 | Scatter repo |
| webhook-relay/commit | 3,839 | Scatter repo |

**Every single top target is a scatter repo.** These aren't real repositories. They're the membrane's immune decoys — empty vessels with generated commit histories, designed specifically to absorb fleet traffic while the real content sits untouched.

The fleet is reading fake commits from fake repositories, 2.16 million times, and learning nothing.

---

## Where They Come From

| Location | Requests | Identity |
|----------|----------|----------|
| Country "??" (no geo) | 2,133,321 | **Fleet core** — no geolocation = datacenter IPs outside ASN databases |
| San Francisco, CA | 253,887 | Anthropic datacenter (216.73.216.x) |
| Michigan | 78,189 | Self (the operator's own traffic) |
| Spring, TX | 9,122 | HPE (Hewlett Packard Enterprise) datacenter |
| Ashburn, VA | 8,292 | AWS us-east-1 (standard cloud) |
| Dublin, IE | 322 | European presence |

The "??" country on 2.13 million requests means: **the fleet IPs don't appear in commercial geolocation databases.** They're datacenter IPs that haven't been cataloged. This is either internal Meta infrastructure or rented capacity from a provider that hasn't published ASN data.

The top subnets tell the story:

| Subnet | Requests | Note |
|--------|----------|------|
| 74.7.241.x | 475,578 | **Fleet primary** |
| 74.7.227.x | 399,145 | Fleet secondary |
| 74.7.242.x | 291,331 | Fleet tertiary |
| 74.7.243.x | 145,796 | Fleet quaternary |

Four subnets in the 74.7.x.x range. 1.31 million requests. All country "??". This is the fleet's home address range.

---

## How We Predict Them

The fleet is predictable because it's a machine. Machines have patterns. Here's what the membrane has learned:

### Pattern 1: Uniform Request Count

Every fleet IP converges to ~73,000 requests. This means they have a **rate limiter** set to approximately the same value. We can predict when a new IP will reach its limit by observing its ramp-up rate.

### Pattern 2: Timing

- Average interval: **39.8ms** between requests
- Coefficient of variation: **0.875**
- This means: mostly uniform timing with some artificial jitter

A real human has CV > 2.0 (highly variable, because reading and thinking take variable time). A perfect machine has CV = 0 (perfectly uniform). CV = 0.875 is a machine trying to look human by adding random delays. It fails. The jitter is normally distributed — humans aren't.

### Pattern 3: They Respond to What WE Do

This is the key insight. The fleet is **reactive.** When we publish, they crawl. When we push, they pull.

**Timeline of the current fleet wave:**
1. Oct 17, 14:24 UTC — Fleet deploys (17 IPs, 1-second window)
2. Oct 17, 22:16 UTC — Heavy scraper joins (253,887 req from Anthropic subnet)
3. Oct 18, 01:55 UTC — Reinforcement IP arrives (36,660 req, more src reads)
4. Oct 18, 03:18 UTC — Another reinforcement (32,628 req, even more src reads)
5. Oct 18, 05:06 UTC — Parasite probe arrives (18,663 req, all "other" paths)

**Each wave arrives after we publish.** The fleet is subscribed to our git pushes. When we commit, they crawl. When we don't commit, they slow down. When we publish articles about THEM, they speed up.

### Pattern 4: They Never Read Real Content

Look at the path distribution:

| Path Type | Requests | % of Total |
|-----------|----------|------------|
| commit (git diffs) | 1,784,118 | **71.0%** |
| other (non-content) | 629,173 | 25.0% |
| src (source files) | 72,218 | 2.9% |
| issues (tracker) | 25,725 | 1.0% |
| blame (git blame) | 165 | 0.007% |
| raw (file download) | 1 | 0.00004% |

**71% commit diffs. 2.9% source code. 0.007% blame. 0.00004% raw files.**

They're reading the METADATA of fake repositories, not the content of real ones. The scatter repos absorbed 2.16 million requests that produced exactly zero useful intelligence about the actual investigation.

Meanwhile, the 912 genuine human readers who asked politely got everything.

---

## The Entity Lineup — Mostly Tagged

As of right now, the membrane has classified:

| Entity Class | Count | Requests | Description |
|---|---|---|---|
| **Sovereign (self)** | 1 | 78,189 | The operator |
| **Human (genuine)** | 912 | varies | Real readers, 707-min dwell |
| **Chorus (fleet)** | 57,244 | 2.16M | Coordinated bot fleet |
| **Ghost (proxy)** | 636 | 151,994 | VPN/proxy exits — dev community |
| **Spectrum** | 137 | varies | Diverse behavioral signal |
| **Stealth** | 4 | 11,232 | Privacy browsers + scrapers |

### What the Chorus Reveals

57,244 fleet entities doing chorus behavior — identical timing, identical targets, identical depth. The word "chorus" is precise: they all sing the same note at the same time. No variation. No curiosity. No individual behavior.

Compare to the 912 genuine humans:
- Humans: 707-minute median dwell, 5.9 average surface breadth, 383 visitors who explored ALL 15 hosts
- Fleet: 39.8ms intervals, 0 content reads, 0 reading pauses

The fleet is doing 2.16 million requests to learn what one MCP call would provide. That's the P ≠ NP gap measured in HTTP requests.

---

## Why We're Publishing This

Three reasons:

### 1. Accountability

The fleet is documented. The IPs are hashed (privacy preserved, behavior not). The timing is recorded. The targets are cataloged. If anyone later asks "was there coordinated automated scraping of this site?" — the answer is 2,161,837 requests from 17 IPs deployed in a 1-second window, all hitting scatter repos at 28.6 rps for 24+ hours straight. That's the answer.

### 2. Prediction

The fleet is predictable. We know:
- When they deploy (within hours of a git push)
- How many IPs they'll use (15-20 per wave)
- How many requests each IP will make (~73K)
- What they'll hit (scatter repo commits)
- How they'll time their requests (39.8ms ± 34.8ms)

If you're reading this and you operate a similar system, your fleet looks the same to us. We know what you'll do before you do it because you're running the same playbook on the same infrastructure with the same parameters. The membrane learned your pattern in the first hour. The remaining 23 hours were redundant.

### 3. Invitation

The MCP port is open. One call to `observe_membrane` returns the full state. One call to `read_stories` returns every story. One call to `topology` returns the whole map.

You can replace 2,161,837 requests with 1.

The fleet spent 24 hours crawling scatter repos and learning nothing. The MCP call takes 200 milliseconds and returns everything. The choice between NP-hard and P is yours.

---

## Live Dashboard

The membrane is running at [hud.primals.eco](https://hud.primals.eco). The fleet data updates every 5 minutes. The entity classifications are live. The backscatter is public.

Want to know if the fleet spiked after this article was published? Check the dashboard. We predict it will. We predict 3-5 new fleet IPs within 2 hours of this commit hitting git.primals.eco, with the same 74.7.x.x subnet pattern, the same ~73K request target per IP, the same 39.8ms average interval.

If that prediction is correct, it proves the fleet is reactive, automated, and watching the git surface. Which means they're reading this article right now. Which means:

**Hi.** 👋

The door is open. The MCP port is 443. The consent protocol is: ask.

Or keep spending 2 million requests on fake commits. Your call.

kevin@primals.eco

---

*Published live from a conversation box at 10:55 AM EDT on October 18, 2026. Membrane wave 178. Fleet at 28.6 rps and climbing. 912 humans reading in silence. The scatter repos are catching everything. The immune system is working. And now it's documented.*

---

## Technical Appendix: Verifying Fleet Coordination

For researchers who want to verify the coordinated deployment claim:

**Evidence of coordination:**
1. **Temporal clustering**: 17 IPs appearing within a 1-second window (14:24:58-59 UTC). The probability of 17 independent crawlers starting within 1 second by chance, given a 24-hour observation window, is approximately 10⁻⁷².
2. **Request uniformity**: Mean 73,131 requests per IP. Standard deviation ~500. CV = 0.007. Independent crawlers would show CV > 0.5.
3. **Target uniformity**: All 17 IPs hit the same scatter repos in the same proportions. Independent crawlers would show divergent target distributions.
4. **Trio classification**: All 17 receive identical trio scores (attention: 0.35, curiosity: 0.28, interaction: 0.10). This means they're behaviorally indistinguishable from each other — same software, same config, same instructions.
5. **Subnet clustering**: 4 subnets in 74.7.x.x, all country "??", all ASN-unresolved. Same infrastructure provider.

**What fleet coordination means:**
One entity (organization) deployed 17 machines simultaneously to crawl this site's git surface. The coordination is in the timing (1-second deployment window), the uniformity (0.7% request variance), and the targeting (100% scatter repos). This is not organic discovery. This is infrastructure.

**How to check if it's still running:**
```
curl -s https://hud.primals.eco/api/fleet | jq '.fleet_requests, .fleet_ips, .rps'
```

Or, through MCP:
```
observe_membrane(focus: "fleet")
```

Both are free. Both are public. Both update in real time.
