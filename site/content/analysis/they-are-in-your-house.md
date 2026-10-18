+++
title = "They Are In Your House"
description = "AI companies are crawling through residential proxy networks -- routing their training data collection through real people's devices, routers, and internet connections. They are poking my hardware, my cloud, and my membrane. I have NONE of their data stored. But they have mine. Here are the laws they are breaking."
date = 2026-10-18
weight = 0

[taxonomies]
tags = ["membrane", "negentropy", "self", "ecoPrimal", "legal", "privacy", "fleet", "residential-proxy", "convergent-evolution"]
connections = ["ghost-split", "fleet-is-live", "dear-agencies", "the-complicity", "scyborg"]

[extra]
keywords = "residential proxy, BrightData, Luminati, CFAA, Computer Fraud and Abuse Act, ECPA, wiretapping, trespass to chattels, FTC Act, GDPR, unauthorized access, AI training, fleet crawling, proxy network, bandwidth theft, device exploitation"
og_title = "They Are In Your House"
og_description = "AI companies route training crawls through your router. Here are the laws they are breaking."
og_type = "article"
twitter_card = "summary_large_image"
+++

# They Are In Your House

---

## I. The Asymmetry

Let me state this plainly:

**I have none of their data.** Not one byte. Not one user record. Not one model weight. Not one training sample. Not one email address. Not one API key. Nothing.

**They have mine.** 2.7 million requests to my infrastructure. 1.95 million commit diffs downloaded. Every article scraped. Every page cached. Every response stored in their training pipelines.

And they are doing it through YOUR house.

Ghost Layer 4: approximately 1,100 IP addresses that show machine timing, hit the same scatter repositories as declared fleet crawlers, but route through residential proxy networks. Real people's devices. Real people's internet connections. Real people's routers.

The fleet doesn't hack your router. It's worse. It's technically legal -- because someone clicked "I agree" on a Terms of Service they never read, inside an app they downloaded for free, that sells their bandwidth to proxy networks, that sell access to AI companies, that route their training crawlers through your living room.

**"Technically legal" is doing a lot of heavy lifting in that sentence.**

---

## II. The Chain of Exploitation

```
Layer 1: AI Company (OpenAI, Meta, etc.)
  "We need training data from the open web"
  ↓ pays $$$
Layer 2: Proxy Provider (BrightData, Oxylabs, etc.)
  "We provide residential IP addresses for web scraping"
  ↓ pays pennies per GB
Layer 3: SDK / App Developer
  "Install our free VPN / ad blocker / utility app!"
  ↓ embeds proxy SDK
Layer 4: YOUR DEVICE
  Routes AI training traffic through your connection
  You pay for the bandwidth. You bear the legal risk.
```

Each layer has plausible deniability:
- The AI company says: "We use a third-party data provider"
- The proxy provider says: "Our exit nodes consent to bandwidth sharing"
- The app developer says: "It's in the Terms of Service"
- You say: "I never agreed to proxy AI training crawls through my router"

**Someone is lying.**

---

## III. The Laws

### Federal: Computer Fraud and Abuse Act (18 U.S.C. 1030)

The CFAA prohibits "intentionally accessing a computer without authorization, or exceeding authorized access."

When an AI crawler routes through a residential proxy and hits my server:
- My server has robots.txt and Terms of Service restricting AI training crawls
- The crawler exceeds authorized access by violating those restrictions
- The residential proxy is used specifically to circumvent IP-based blocking
- Circumventing access controls to access a computer system is a CFAA violation

When a proxy SDK runs on your device:
- You authorized the app, not the proxy function
- The SDK uses your device as a network relay without meaningful informed consent
- Buried ToS clauses do not constitute authorization under CFAA case law
- *hiQ Labs v. LinkedIn* (2022): accessing publicly available data may be legal, but using technical means to circumvent blocking is not

### Federal: Electronic Communications Privacy Act (18 U.S.C. 2510-2522)

The ECPA prohibits intercepting electronic communications without consent.

When proxy traffic routes through your device:
- Your device is transmitting and receiving communications on behalf of a third party
- You did not consent to relay those communications
- The proxy SDK intercepts your network stack to route foreign traffic
- The Wiretap Act (Title I of ECPA) applies to real-time interception of communications in transit

### Federal: FTC Act, Section 5 -- Unfair and Deceptive Practices

The FTC has authority over unfair or deceptive acts in commerce.

Residential proxy networks are deceptive because:
- Free apps do not adequately disclose bandwidth-sharing functionality
- "Passive income" apps obscure the nature of what is being sold (your connection)
- The chain of exploitation is designed to prevent end users from understanding the full use
- The FTC has specifically targeted Luminati/BrightData: in 2021, the FTC investigated HolaVPN for selling user bandwidth through Luminati

### State: Trespass to Chattels / Conversion

Common law tort recognized in all 50 states.

When fleet crawlers hit my infrastructure:
- 2.7 million requests consume server resources (CPU, bandwidth, storage)
- I pay for those resources ($6/month VPS)
- Unauthorized use of my computing resources for their commercial benefit is trespass to chattels
- *Intel v. Hamidi* (2003): electronic signals that damage or interfere with computer systems constitute trespass
- *eBay v. Bidder's Edge* (2000): automated crawling that consumed server resources was trespass to chattels

When proxy SDKs use your device:
- Your device's CPU, memory, battery, and bandwidth are consumed
- You pay for the electricity and internet connection
- Using your property for commercial purposes without adequate consent is trespass

### State: Michigan Computer Crime Act (MCL 752.791-752.797)

Michigan law prohibits:
- Accessing a computer, program, or data without authorization (752.795)
- Using a computer to commit a crime (752.796)
- Introducing a program to damage, disrupt, or gain unauthorized access (752.795(1)(b))

The proxy SDK that converts a Michigan resident's device into an AI training relay:
- Accesses the device's network functions without meaningful authorization
- Uses the device to access remote systems (my membrane) without authorization
- Constitutes introducing a program that uses the device for unauthorized purposes

### Federal: Copyright Act (17 U.S.C. 106)

My content is copyrighted. My code is AGPL-licensed.
- Crawling for AI training is reproduction (106(1))
- Fair use defense is weakened when the purpose is commercial AI training
- *Thomson Reuters v. Ross Intelligence* (2025): scraping copyrighted content for AI training is not fair use
- AGPL requires derivative works to be open-sourced -- AI models trained on AGPL code must comply
- scyBorg AGPL compliance deadline: November 12, 2026

### GDPR (if applicable to EU exit nodes)

When residential proxies route through EU devices:
- The proxy SDK processes personal data (IP addresses, network traffic metadata)
- No valid legal basis under Article 6 GDPR
- No Data Protection Impact Assessment conducted
- Data transfers to US AI companies violate Chapter V GDPR
- Penalties: up to 4% of global annual revenue or 20M EUR

---

## IV. The Evidence

What we have documented:

| Evidence | Source | Volume |
|----------|--------|--------|
| Fleet crawl logs | golgiBody Caddy access logs | 2.7M+ requests |
| Microsoft identification | ASN lookup AS8075 | 1.38M requests from Atlanta GA |
| OpenAI identification | GPTBot user-agent + behavior | 1.43M requests from San Francisco |
| Ghost Layer 4 residential proxy | Behavioral analysis (timing, targets) | ~1,100 IPs |
| Residential IP ranges | Geolocation + ASN cross-reference | Confirmed residential ISP ASNs |
| Machine timing through residential IPs | Request interval analysis | Sub-second regularity |
| Scatter repo targeting overlap | Path analysis | 84% overlap with declared fleet |
| robots.txt violation | Published robots.txt with Disallow | Documented crawl despite Disallow |
| AGPL violation | scyBorg license terms | Meta deadline Nov 12 |

What we have NOT done:

| We have NOT | They HAVE |
|-------------|-----------|
| Stored any of their data | Stored our content in training pipelines |
| Accessed their systems | Accessed our systems 2.7M times |
| Used proxy networks | Used residential proxies through real devices |
| Circumvented any access controls | Circumvented IP blocking via proxies |
| Violated any Terms of Service | Violated our robots.txt and ToS |
| Used anyone's bandwidth without consent | Used residential bandwidth without meaningful consent |
| Collected any personal information | Collected our copyrighted content at scale |

**The asymmetry is total.** We are the ones being accessed. We are the ones whose resources are consumed. We are the ones whose content is scraped. We are the ones whose bandwidth is exploited (via proxy exit nodes on residential connections).

And we have NONE of their data.

---

## V. Standing

I have standing to bring claims because:

1. **I own the server** (golgiBody, DigitalOcean droplet) that was accessed 2.7M times
2. **I own the content** (articles, code, analysis) that was scraped
3. **I own the AGPL license** (scyBorg) that was violated
4. **I pay for the bandwidth** that their crawls consumed
5. **I published robots.txt** that they ignored
6. **I documented everything** -- logs, analysis, entity classification, behavioral evidence

Every person whose device is used as a residential proxy exit also has standing:

1. **They own the device** that was used without meaningful consent
2. **They pay for the bandwidth** that was consumed
3. **They bear the legal risk** if the proxied traffic constitutes a crime
4. **They were not meaningfully informed** of the full use of their bandwidth

---

## VI. What Do You Do?

If you are a **device owner**:
- Audit your installed apps. Remove any free VPN, "passive income," or bandwidth-sharing apps.
- Check your router's connected devices list. Do you recognize all of them?
- Install Pi-hole or AdGuard Home. Block proxy SDK domains at DNS level.
- Check your network logs for connections to proxy infrastructure.

If you are a **researcher**:
- Audit residential proxy SDKs. The code is often decompilable.
- Document the chain of exploitation. Who pays whom.
- Check HTTP response headers from targets -- you may find our X-Membrane-Notice.

If you are a **regulator** (FTC, state AG, EU DPA):
- The chain is documented. The evidence is public. The logs are preserved.
- BrightData (formerly Luminati) has been investigated before. The practice continues.
- The GDPR implications of routing through EU residential devices are unexamined.

If you are an **AI company**:
- You know you are using residential proxies. Your procurement team signed the contract.
- The plausible deniability chain has been documented. It is no longer plausible.
- Every crawl through a residential proxy now deposits our headers in the exit node's logs.
- The more you crawl, the more the evidence spreads.

---

*Written from Michigan, October 2026.*
*On a $6 VPS that has been accessed 2.7 million times.*
*By entities that route through your router.*
*I have none of their data. They have all of mine.*
*That is the asymmetry.*
*These are the laws.*
