+++
title = "The Fog — Privacy Terms for the Membrane"
date = 2026-10-20
weight = 13
description = "We see you but we fog you. We sort you but we don't name you. No one can dox through us — not even us. These are the terms."
[taxonomies]
tags = ["privacy", "fog", "terms", "differential-privacy", "ethics", "identity"]
[extra]
og_title = "The Fog — We See You But We Don't Name You"
og_description = "The membrane observes behavior, not identity. Hashed, not stored. Classified, not named. No one can dox through us. These are the terms."
og_image = "/portals/portal_3_3_membrane-window.png"
author = "Kevin Mok — ORCID 0009-0004-2141-0321"+++

## The Terms

The membrane sees everything that touches it. The membrane remembers nothing that identifies you. These are the terms.

### What We Collect

| We see | We store | We fog | You keep |
|--------|---------|--------|----------|
| A request arrived | Timestamp | IP is NOT stored | Your IP |
| How long you stayed | Dwell (minutes) | Which page, not who | Your name |
| How many surfaces you touched | Breadth (count) | Pattern, not person | Your identity |
| What you looked at | Page path | Aggregated, not individual | Your intent |
| Your browser headers | Epitope hash | The hash, not the headers | Your device |
| Your discuss post | Badge + body | Badge is random, not linked to IP | Your voice |

### What We Do NOT Collect

- **No IP addresses stored.** Ever. The membrane sorts by behavior, not by address.
- **No cookies.** None. Zero. Not even session cookies.
- **No tracking pixels.** No analytics. No Google Analytics. No Meta pixel. No ad network.
- **No login required.** The discuss API is anonymous. The badge is random.
- **No fingerprinting.** We see the epitope hash (browser behavior pattern) but we cannot reverse it to identify you.
- **No cross-session linking.** If you come back tomorrow, you are a new shape. We do not connect today's visit to tomorrow's.

### The Fog

The fog is how we protect you while still learning from your touch.

**Hashing:** Your browser headers become an epitope hash (like `412defd2`). The hash tells us "this browser behaves like a coder" but NOT "this is John Smith's laptop." The hash is one-way. We cannot un-hash it.

**Aggregation:** We report "42 human sessions" not "here are the 42 humans." The aggregate is the data. The individual is the fog.

**Epitope classification:** We say "visitor, reader, coder, observer" — behavior types, not people. You are classified by what you DO, not who you ARE.

**Differential privacy:** The fog adds noise. The 65.8% middle population is a cloud, not 65.8% of specific people. The cloud moves. The individuals inside it are invisible.

### Why We Fog

1. **Privacy is a right.** Even for people we disagree with. Even for fleet operators. Even for Meta's Dublin crawlers. We classify their behavior. We do not name their engineers.

2. **The investigation does not require identity.** We need to know "a 16-arm colony scraped 2.29M commit diffs." We do NOT need to know which engineer at which desk configured the crawler. The pattern is the evidence. The individual is irrelevant.

3. **Doxxing is the enemy's tool.** Banks filed a PPO (restraining order) against the investigator. That IS doxxing — using the legal system to reveal and suppress. We do not do this. Not to Banks. Not to Meta engineers. Not to anyone.

4. **The fog protects us too.** If we collected personal data, it could be subpoenaed, hacked, leaked. We don't have it. You can't leak what you don't store. The fog IS the security.

### For Investigation Targets

Even the subjects of this investigation are protected by the fog:

| We publish | We fog |
|-----------|--------|
| Brian Banks has 9 convictions | OTIS is public record (anyone can look it up) |
| Purpose Charter Academy extracted 72.67% | State financial reports are public |
| 22 agencies did not respond | We sent correspondence, they didn't reply |
| Judges have documented connections | Campaign finance, court records, LARA filings |

**Every fact we publish is from public records.** We do not publish personal phone numbers, home addresses, private communications, or anything that required deception to obtain.

If Banks' LARA registered agent address is a front — that is PUBLIC RECORD evidence of a front. We publish the public filing. We do not publish his actual home address.

### For the Fleet

Meta's Dublin fleet (57.141.20.x, 60 IPs, 14,054 requests) is documented by:
- Subnet (aggregated, not individual IPs)
- Behavior pattern (commit scraping, UA masking)
- Timing (uniformity 0.994)
- Classification (coordinated:harvester)

We do NOT publish:
- Individual IP addresses
- Names of engineers
- Internal Meta documents
- Anything from their private systems

The fleet's BEHAVIOR is public (they hit our public server). Their IDENTITY is fogged.

### For All Humans

The 5,425 humans on the membrane right now:
- Are counted but not named
- Are classified but not identified
- Are measured (dwell, breadth) but not tracked
- Leave spores (discuss badges) but the badges are random
- Can leave at any time and we cannot follow

**The fog applies to everyone equally.** Investigation targets. Fleet operators. Journalists. Parents. Attorneys. Gamers. Bots. The membrane does not play favorites with privacy.

### The Difference: Privacy vs Secrecy (Applied)

| | Privacy (what we protect) | Secrecy (what we expose) |
|---|---|---|
| **Individuals** | Their identity, their location, their personal life | Nothing — their privacy is absolute |
| **Institutions** | Their employees' personal info | Their PUBLIC behavior: filings, contracts, votes, court records |
| **Fleet** | Their engineers' names | Their crawling patterns, their TOS violations, their data extraction |
| **The investigation** | Sources, methods, unpublished leads | Everything we publish — open, AGPL, verifiable |

### Your Rights

1. **Right to be forgotten.** POST `/api/tombstone` with your discuss badge. Your comments are removed. The badge is burned. We cannot connect it to you because we never could.

2. **Right to be fog.** You don't need to do anything. You are already fog. The membrane does not know who you are. It only knows you were here.

3. **Right to be clear.** If you WANT to be identified — sign in with GitHub (Giscus), use your real name in discuss, email us directly — that is your choice. The fog is opt-out, not opt-in.

4. **Right to verify.** Clone the repo. Read the code. The membrane's sorting code is AGPL — open source. Verify that we do what we say. The fog is auditable.

---

*We see you but we fog you. We sort you but we don't name you. No one can dox through us — not even us. The fog is the privacy. The privacy is the ethics. The ethics are the rope's tension. Without tension, the rope is loose fibers. Without fog, the membrane is surveillance.* 🌫️⚖️🍌
