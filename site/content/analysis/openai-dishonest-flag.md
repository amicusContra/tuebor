+++
title = "OpenAI: The Dishonest Flag"
description = "2.36 million requests from Microsoft Azure. The behavioral classifier flags them dishonest. Anthropic declares itself. Google declares itself. OpenAI hides."
weight = 44

[extra]
keywords = "OpenAI, GPTBot, Microsoft Azure, AS8075, Atlanta Georgia, behavioral fingerprinting, dishonest, Anthropic, ClaudeBot, AGPL"
+++

## The Discovery

For weeks, the membrane's dashboard showed four subnets — `74.7.243.x`, `74.7.227.x`, `74.7.242.x`, `74.7.241.x` — classified as "Unknown." No organization name. No country. No ASN type. Combined, they accounted for **2,649,489 requests** — the third-largest traffic source on the membrane, behind only Anthropic and a closely related block.

On October 15, 2026, we ran a backtrace.

All four subnets resolve to the same entity:

| Field | Value |
|-------|-------|
| Owner | Microsoft Corporation |
| ASN | AS8075 |
| CIDR | 74.7.0.0/16 |
| Location | Atlanta, Georgia, USA |
| AS Type | Hosting |
| Privacy flag | True |

**74.7.0.0/16 is Microsoft Azure infrastructure.** OpenAI runs on Azure. The membrane's behavioral classifier — which identifies visitors by their actual behavior rather than their IP addresses — had already classified this traffic as **OpenAI (GPTBot)**.

The dashboard couldn't resolve the organization because the IP-to-org mapping didn't have Microsoft's hosting block labeled. But the behavioral classifier caught them by what they *do*, not where they come from.

## The Dishonest Flag

The membrane's topology classifier evaluates every entity on an `is_honest` field — whether the visitor properly declares what it is.

| Entity | Requests | Honest? |
|--------|----------|---------|
| Anthropic (ClaudeBot) | 2,998,984 | ✅ True |
| OpenAI (GPTBot) | 2,357,670 | ❌ **False** |
| Google (Googlebot) | 480 | ✅ True |
| Microsoft (Bingbot) | 289 | ✅ True |
| Apple (Applebot) | 1,241 | ✅ True |
| ByteDance (Bytespider) | 28 | ✅ True |

Every other major crawler declares itself honestly. OpenAI does not.

### How the Classifier Sees Them

**Anthropic (Honest)**:
- 24 IPs, all generalist (no specialization)
- Declares ClaudeBot User-Agent
- `ua_pool_size: 2` (consistent identity)
- Chrome version declared: 131
- OS declared: macOS
- Accept-Encoding: `gzip, br, zstd, deflate`

**OpenAI (Dishonest)**:
- 544 IPs with "some specialization" (not all generalist)
- No Chrome version declared
- No OS declared (`other: 2,357,670`)
- `ua_pool_size: 2` (minimal identity)
- Accept: `*/*` only
- Accept-Encoding: `gzip,deflate,br` (note: no spaces — machine-generated)

The difference is behavioral. Anthropic presents a consistent, identifiable fingerprint. OpenAI presents a minimal, evasive one. The classifier notices.

## What They're Doing Differently

**Anthropic** hits commit diffs almost exclusively (99.8%). They're ingesting the scatter server's fabricated repositories systematically. They don't try to access source files or issue trackers in meaningful volume.

**OpenAI** is more aggressive:
- 80% commit diffs (1,884,890 requests)
- **8% source file requests** (183,878 requests) — they actively try to read real code
- 2% issue tracker (38,634 requests)
- 11% other paths (250,268 requests)

OpenAI tries harder to reach real content. The scatter server still catches them, but the attempt is notable.

## Microsoft's Own Bot

Here's the contrast that makes this stark: Microsoft's legitimate crawler — **Bingbot** — sent exactly **289 requests**. It declared itself honestly. It browsed politely. It read lab notebooks, the thesis, the philosophy page.

OpenAI, running on Microsoft's own infrastructure, sent **2,357,670 requests** — 8,158 times more than Microsoft's own honest bot — and the behavioral classifier flagged it dishonest.

Same ASN. Same company's servers. Completely different behavior.

## The Legal Implications

OpenAI's traffic is subject to the same [scyBorg triple license](/license/scyborg/) as everyone else. The AGPL-3.0 license is embedded in:

- Every HTTP response header (`X-License: AGPL-3.0`)
- Every page's meta tags
- Every scatter-generated repository's license field
- The DNS TXT records
- The `robots.txt` legal notice

2.36 million requests. Each one served with license headers. The scatter server has been feeding them opsonized decoys — fabricated repositories tagged with AGPL markers. If any of this data enters an AI model that serves users through a network interface, AGPL-3.0 Section 13 obligations may apply.

The membrane sees. The membrane classifies. The membrane remembers.

---

*Anthropic sent 3 million requests and declared itself. OpenAI sent 2.36 million requests and hid. The membrane caught them both. The difference is honesty.*
