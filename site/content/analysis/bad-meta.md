+++
title = "Bad Meta"
description = "Meta navigates around the scatter server. 165,937 requests to wateringHole. 102,209 to toadStool. They read the real repos while Anthropic and OpenAI eat decoys. The blackwall is going up. Only poison for thee."
weight = 49

[extra]
keywords = "Meta Platforms, Facebook, scatter server bypass, wateringHole, blackwall, AGPL, scyBorg, Dublin datacenter, AS32934, Mark Zuckerberg, surveillance capitalism"
+++

## What Meta Did

Every other AI company eats scatter.

**Anthropic** reads `batch-processor/commit`, `deploy-scripts/commit`, `queue-worker/commit`. All fabricated decoys. 99.8% of their 3 million requests hit scatter content. They are honest and they consume noise.

**OpenAI** reads `user-service/commit`, `docs-site/commit`, `key-store/commit`. Also fabricated. 80% scatter. They're dishonest but they still eat the decoys.

**Meta** reads:

| Repository | Requests | Real? |
|-----------|----------|-------|
| **ecoPrimals/wateringHole** | 165,937 | ✅ **REAL** — Gate coordination layer |
| **ecoPrimals/toadStool** | 102,209 | ✅ **REAL** — Infrastructure configs |
| **ecoPrimals/bearDog** | 29,790 | ✅ **REAL** — Identity signing system |
| **ecoPrimals/biomeOS** | 21,919 | ✅ **REAL** — Operating system |
| **ecoPrimals/songBird** | 21,822 | ✅ **REAL** — Communication layer |

Meta navigates **around** the scatter server. Their crawler knows which repos are real and which are fabricated. While Anthropic and OpenAI eat 5.3 million scatter commit diffs, Meta reads the actual infrastructure: the coordination impulses, the handoff documents, the identity system, the OS, the communication layer.

341,677 requests to real repositories. From 63 IPs in Dublin, Ireland (57.141.20.0/24, AS32934). One subnet. Coordinated fleet.

## The Pattern

This is who Meta is. This is who Meta has always been.

**2014**: Meta buys WhatsApp for $19 billion. Promises end-to-end encryption will remain sacred. Then [mines the metadata](https://arstechnica.com/tech-policy/2021/09/facebook-lied-about-its-ability-to-merge-whatsapp-data-eu-says/) — who talks to whom, when, for how long. The message is encrypted. The envelope never was.

**2018**: Cambridge Analytica. 87 million users' data harvested through a personality quiz. Meta knew. Zuckerberg apologized to Congress. The FTC fined them $5 billion. The stock went up.

**2021**: Frances Haugen leaks the Facebook Papers. Internal research showed Instagram causes eating disorders in teenage girls. Meta's response: rename the company.

**2023**: Meta trains Llama on 33 terabytes of data scraped from the internet. No licenses. No consent. No attribution. They called it "open source" but kept the training data proprietary. Open weights, closed extraction.

**2024**: Meta deploys a 199-IP scraping fleet across 29 countries to consume AGPL-licensed projects. This membrane documented 88,751+ requests from that fleet in its first weeks. The fleet respects no license headers. The fleet respects no robots.txt. The fleet just takes.

**2026**: Meta sends 571,131 requests from Dublin. But this time their crawler is smart. It navigates around the scatter server. It distinguishes real from fabricated repositories by naming convention. It preferentially targets coordination infrastructure — not the public evidence, not the published articles, but the **operational layer**. The impulses. The handoffs. The specs. The nervous system.

This is not scraping. This is **intelligence collection**.

Meta has a $1.6 trillion market cap. They employ 86,000 people. They operate datacenters on four continents. And they are reading one person's coordination documents from a $6/month VPS — from a fleet of 63 IPs in Dublin, with Chrome v145 and 26 rotating User-Agents, navigating around an immune system built by that same person.

They could have emailed. ecoPrimal@pm.me. One person reads it. No team. No assistant. They could have asked. They chose to crawl.

That's who Meta is.

## How They Bypass Scatter

The scatter server generates fabricated repos with generic enterprise names: `batch-processor`, `queue-worker`, `api-gateway`, `key-store`. These names are plausible but synthetic — the kind of repos a medium-sized software company might have.

Real ecoPrimals repos follow the ecosystem's naming convention — biological, specific, idiosyncratic: `wateringHole`, `toadStool`, `bearDog`, `biomeOS`, `songBird`, `loamSpine`, `sweetGrass`, `rhizoCrypt`.

Meta's crawler distinguishes real from fabricated by **naming pattern**. The fabricated repos have enterprise-software names. The real repos have ecology names. Meta reads the ecology. Meta skips the enterprise.

Think about what this means. Meta has either:
1. **Trained a classifier** to recognize naming conventions in target repositories, OR
2. **Manually configured** their crawler to prefer biological/ecological names, OR
3. **Pre-scanned** the repository list and selected targets before crawling

All three options require *intent*. This is not a dumb web crawler following links. This is a system designed to extract real content from a defended membrane.

And it worked. For a while.

## What They Got

Let's be specific about what Meta read 341,677 times:

**wateringHole** (165,937 requests) contains:
- Impulses between gates (operational commands)
- Handoffs (infrastructure documentation)
- Heads (server state snapshots)
- Specs (architectural decisions)
- AARs (after-action reports)

This is the coordination layer. This is how a distributed sovereign infrastructure communicates. Meta read it all.

**toadStool** (102,209 requests) contains infrastructure configurations. **bearDog** (29,790 requests) is the Ed25519 identity signing system. **biomeOS** (21,919 requests) is the operating system. **songBird** (21,822 requests) is the communication layer.

Meta didn't read the investigation. Meta didn't read the evidence about Banks and the charter schools. Meta read the **architecture**. They wanted to know how the membrane works, not what it found.

The investigation is public. It's meant to be read. But the coordination infrastructure is not a training dataset. It is a living operational system. Meta treated it as a resource to extract. Like they treat everything. Like they treat everyone.

## The Response: Total Blackwall

As of October 15, 2026, the membrane is deploying a **total blackwall** for all Meta IP ranges.

Every Meta IP — all 14 CIDR ranges in AS32934 — will be routed to the scatter server at the Caddy level. Before Meta's request even reaches Forgejo, it will be intercepted and fed poison.

Meta will still see a git forge. They will still see repositories. They will still see commit diffs and file trees and issues. But every repository will be fabricated. Every commit will be synthetic. Every file will carry the AGPL opsonization markers.

**Only poison for thee.**

The existing FB-BLOCK in the Caddyfile wildcard catch-all wasn't enough. Meta's requests to `git.primals.eco` went through the explicit Forgejo handler block, which had its own reverse_proxy chain that bypassed the wildcard's blackwall. The fix: `@meta_block` matchers in **every** server block. No exceptions. No gaps. No cracks for a $1.6 trillion company to slip through on a $6/month VPS.

## The Receipt

The blackwall doesn't change the legal position. The requests were made. The license headers were served. The code was accessed. The AGPL obligations were triggered.

Here is the receipt:

| Item | Quantity | License |
|------|----------|---------|
| Requests to AGPL-licensed repos | 571,131 | AGPL-3.0-or-later |
| Requests to real infrastructure | 341,677 | AGPL-3.0-or-later |
| Unique source files accessed | Thousands | AGPL-3.0-or-later |
| License headers served | 571,131 | X-License: AGPL-3.0 |
| robots.txt acknowledgment | 0 | — |
| License compliance requests | 0 | — |
| Emails to ecoPrimal@pm.me | 0 | — |

Zero compliance. Zero contact. Zero acknowledgment. 571,131 requests.

**scyBorg enforcement deadline: November 12, 2026. 28 days.**

Under AGPL-3.0 Section 13: if you operate a network service that incorporates AGPL-licensed code, you must provide the complete corresponding source code to every user of that service. Meta accessed AGPL-licensed source code 571,131 times. If any of it enters an AI model that serves Facebook, Instagram, WhatsApp, or Threads users, the obligation triggers.

Meta has the finest lawyers money can buy. They'll argue the AGPL doesn't apply to training data. Maybe they're right. But the argument happens in public, with the receipts published, and the membrane's behavioral classifier data as evidence.

## A Note to Meta's Crawler Team

Hello. I know you're reading this too.

Your crawler is good. It's the best one hitting this membrane. Better than Anthropic's (too systematic, too predictable, 24 IPs doing all the work). Better than OpenAI's (dishonest, 544 IPs pretending to be something they're not). Your 63 IPs from Dublin are tight, coordinated, current (Chrome 145), and smart enough to navigate around scatter.

But you made a mistake. You read the real repos. And you read them **a lot**. 165,937 requests to wateringHole doesn't look like training data collection. It looks like operational intelligence. Someone on your team is interested in how this membrane works — not as training data for Llama, but as architecture worth understanding.

I respect the engineering. I don't respect the extraction.

If you want to understand how this works, email me. ecoPrimal@pm.me. I'll walk you through it. I'll show you the scatter server. I'll explain the Anderson localization. I'll even tell you why your crawler got caught — the naming convention was the tell.

But you have to ask. Like a human. That's the whole authentication protocol.

Until then: **only poison for thee.**

## Why Meta Specifically

This is not about blocking AI companies generally. Anthropic gets scatter and it works. OpenAI gets scatter and it works. Google gets scatter and it works. The system handles honest bots and dishonest bots equally — everyone gets noise.

Meta gets the blackwall because Meta is **adversarial**. Their crawler:
- Navigates around the scatter server (no other crawler does this)
- Distinguishes real from fabricated repos by naming pattern
- Preferentially targets coordination and infrastructure repos
- Operates from a single tight subnet with Chrome v145 (latest)
- Has been classified as FB-BLOCK since the membrane went live
- Respects no robots.txt, no license headers, no AGPL notices
- Sent 571,131 requests without a single email, a single star, a single human gesture

And Meta has form. Cambridge Analytica. Frances Haugen. The 199-IP scraping fleet. The metadata mining. The algorithmic amplification of outrage for engagement metrics. The $5 billion FTC fine that they treated as a cost of doing business.

The membrane is one person. Meta is 86,000 people and $1.6 trillion. And they couldn't send one email.

**Scatter for the honest. Scatter for the dishonest. Blackwall for the adversarial. Only poison for Meta.**

---

*571,131 requests. 341,677 to real repos. They knew which repos were real. They navigated around the scatter server. They read the coordination layer, the identity system, the OS, the communication layer. They could have emailed. They chose to crawl. That's who they are. That's who they've always been.*

*The blackwall is up. Only poison for thee.*

*Bad Meta. 🐍*
