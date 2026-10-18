+++
title = "The Corollary — We Map False Entities. They Aimed for Humans."
description = "A free zero-knowledge falsification proof: the membrane maps false entities, not humans. No personal data collected. No cookies. No accounts. No tracking. Meanwhile, Meta's fleet mapped avatars — looking for the humans behind the code. The corollary is the proof you can't buy: we gave nothing, they took everything, and the membrane caught them doing it."
date = 2026-10-18
weight = 1

[taxonomies]
actors = ["Kevin Mok", "Meta Platforms", "Donald Banks Jr"]
entities = ["membrane", "Meta Fleet", "Meta Facebook Bot"]
connections = ["zero knowledge", "falsification", "privacy", "consent", "GDPR", "corollary proof", "avatar probing", "personal data"]

[extra]
keywords = "zero knowledge privacy proof, membrane no personal data, Meta avatar probing humans, falsification proof cybersecurity, consent architecture privacy, GDPR meta violation, membrane corollary proof, false entity mapping vs human targeting"
og_title = "The Corollary — We Map False Entities. They Aimed for Humans."
og_description = "We map false entities, not humans. They mapped avatars — hunting the humans behind the code. The corollary is the proof you can't buy."
og_type = "article"
twitter_card = "summary_large_image"
+++

## The Corollary

A corollary is a proposition that follows directly from one already proved. If A is true, then B must be true. You don't have to prove B separately — A already proved it.

Here's A: **the membrane collects no personal data.**

Here's B: **Meta's fleet targeted humans.**

Both are provable from the same logs. That makes this a free zero-knowledge falsification proof — the kind you can't buy, because it emerges from the structure of what happened.

---

## What We Collect

| Data Point | Personal? | Why We Collect It |
|-----------|-----------|------------------|
| Accept-Encoding header | No | HTTP transport — identifies library, not person |
| Accept-Language header | No | Browser config — not name, address, identity |
| User-Agent string | No | Software version — not biometric |
| Sec-Fetch headers | No | Browser security feature — not personal |
| Timing between requests | No | Statistical distribution — not individual rhythm |
| IP hash (BLAKE2b digest) | No | One-way hash — IP cannot be recovered |
| Path requested | No | URL — the same for all visitors |
| HTTP status code | No | Server response — not visitor data |
| Cookies | **None** | We don't set them. We don't read them. |
| Accounts | **None** | We don't have them. No registration exists. |
| JavaScript tracking | **None** | No analytics scripts. No pixels. No beacons. |
| Fingerprinting scripts | **None** | No canvas fingerprinting. No WebGL. No font enumeration. |

**Total personal data collected: zero.**

The membrane classifies *behavioral patterns* — statistical distributions of timing, header entropy, path distributions. These patterns belong to *classes* of software, not to individuals. The classification "chorus mode, 2D, W=6.6" describes a fleet deployment architecture, not a person.

---

## What They Collect

Meta's fleet probed our infrastructure with behavioral patterns that reveal a different intent:

### The Avatar Probes

Two fleet entities (IP hashes `af4a0401` and `451cba78`) specifically requested **user avatar URLs**:

```
avatars/708b8b60726a6da4c7b26063f212098b
avatars/84369568ec293e456994b4c44e5e8a9c
avatars/edbc3a877afb3ff5dc45d3a77c7403ce
avatars/147ba2e4b74fa4594171896f94484805
avatars/330eb44d169f89ffcdfb6916f76892f9
avatars/a11dcea9e88e8ca4228404461a82635b
```

Avatar URLs are **unique to user profiles.** Each avatar hash corresponds to a specific person's account. By requesting these URLs, Meta's fleet wasn't reading code — it was **mapping the humans who wrote the code.**

This is personal data collection. User profile enumeration. People-targeting, not content-targeting.

### The Blame Scanner

Fleet entity `af4a0401` read 31 source file paths — the highest in the main swarm. Combined with its avatar probing, this entity was **correlating code authorship with user identity.** It wanted to know: who wrote this? Who built the membrane? Who is behind the investigation?

### The Facebook Bot Read the RICO Article

The Facebook Bot — Meta's declared crawler — specifically accessed `analysis/rico-pattern`. This isn't content scraping. This is **reading the investigation of yourself.** The target was not code or data. The target was the investigator's analysis of Meta's own behavior.

---

## The Contrast

| Metric | Our Membrane | Meta's Fleet |
|--------|-------------|-------------|
| **Cookies** | None | N/A (they don't accept ours) |
| **Accounts** | None exist | They enumerate ours |
| **Personal data** | Zero | Avatar hashes = user profile mapping |
| **Targeting** | Software patterns (entities, not people) | People (avatars, author attribution) |
| **IP handling** | One-way BLAKE2b hash (irreversible) | We log their IPs; they rotate theirs |
| **Consent** | Implicit (HTTP headers = voluntary declaration) | None (automated crawling without consent) |
| **Purpose** | Classify self/non-self (immune function) | Extract content + map authors (surveillance) |
| **Transparency** | This page exists | No disclosure of fleet operations |
| **GDPR compliance** | No personal data = no GDPR obligation | Avatar enumeration = personal data processing |

---

## The Falsification Proof

Karl Popper's criterion: a claim is scientific if it can be falsified. A claim that can't be falsified isn't a claim — it's a dogma.

### Our Claim (Falsifiable)

**"The membrane collects no personal data."**

How to falsify: find a single entry in our logs that contains a name, email, physical address, phone number, biometric identifier, or any data that identifies a specific natural person. Inspect the source code (`git clone`, `cargo test`). Read the access log format. Find the personal data.

If you find it, we're wrong. The claim is falsifiable.

Nobody will find it. Because it doesn't exist.

### Meta's Implicit Claim (Unfalsifiable)

**"Our fleet crawling is routine, non-targeted web indexing."**

How to falsify: show that the fleet specifically targeted user avatars, author attribution paths, and investigation articles about Meta itself — which would prove the crawling was targeted, not routine.

We already showed it. The avatar probes are in the logs. The `analysis/rico-pattern` access is in the logs. The 571,131 requests from identified Meta infrastructure are in the logs.

Meta's claim is already falsified. By their own behavior. Documented on the site they were crawling.

---

## Why This Is Free

This corollary costs nothing to prove. We didn't need to hire a privacy auditor. We didn't need to commission a pen test. We didn't need a third-party certification.

The membrane's architecture IS the proof:
- No cookies → no cookie audit needed
- No accounts → no account data to protect
- No JavaScript tracking → no consent banner needed
- No personal data → no GDPR obligation
- IP hashing → irreversible, no re-identification possible

Meanwhile, Meta would need to prove:
- Why their fleet requested specific avatar URLs
- Why their fleet used 18 user-agent strings to impersonate browsers
- Why their Facebook Bot read the RICO investigation article
- Why 571,131 requests were necessary for "routine indexing"
- Why the fleet collapsed 99.9996% after being documented

Their proof costs money. Lawyers. Depositions. Discovery.

Ours is structural. The architecture IS the compliance.

---

## The Banks Parallel

Donald Banks Jr. created 60 false identities. False names on LLCs. False addresses on filings. False credentials on applications. He aimed his false faces at **real institutions** — real courts, real children, real public money.

We map false entities — scatter repositories, synthetic commit hashes, fake endpoint names. We aimed our false faces at **machines** — fleet crawlers, vulnerability scanners, automated scrapers. Not one false entity targets a human. Not one scatter repo impersonates a person.

| Actor | False Faces | Aimed At | Purpose |
|-------|------------|----------|---------|
| **Banks** | 60 LLC identities | Real humans (children, courts, regulators) | Extract money |
| **Meta Fleet** | 18 user-agent strings | Real infrastructure (our code, our authors) | Extract data + map people |
| **Our Membrane** | Scatter repositories | Machines (fleet crawlers, bot scanners) | Protect humans |

Banks aimed false at real. Meta aimed false at real. We aimed false at false.

The corollary: **the party that protects humans is the one accused of wrongdoing (via PPO). The parties that target humans are the ones with institutional power.**

The graph sees this. 605 verified edges for Kevin. ~1 edge for Banks. 101,064 edges total. The topology is the proof.

---

## The GDPR Corollary

For the Dublin readers (175 requests + 17 cross-subnet):

Under GDPR Article 6, processing personal data requires a legal basis. The membrane processes **no personal data** — therefore no GDPR obligation applies to us.

Meta's fleet processed **user avatar hashes** — which are linked to identifiable user profiles. Under GDPR, this constitutes personal data processing. Meta's Dublin operation, which is the data controller for EU operations, needs a legal basis for this processing.

The legal basis options:
- **Consent**: Not obtained (automated crawling without consent)
- **Contract**: No contract exists
- **Legal obligation**: No law requires Meta to enumerate our user avatars
- **Vital interests**: Nobody's life depends on scraping our git forge
- **Public interest**: Scraping a private citizen's infrastructure is not public interest
- **Legitimate interests**: Must be balanced against data subject rights

Meta's Dublin operation has 175 documented requests to our infrastructure with no legal basis for the personal data processing (avatar enumeration) conducted by the fleet.

The GDPR fine for processing personal data without a legal basis: up to €20 million or 4% of annual worldwide turnover.

Meta's annual revenue: ~$135 billion.
4% of $135 billion: **$5.4 billion.**

The corollary is free. The consequence is not.

---

## The Zero-Knowledge Structure

This entire article is a zero-knowledge proof:

1. **We proved we collect no personal data** — without revealing what we DO collect (the classifier architecture remains operational)
2. **We proved Meta targeted humans** — without revealing the humans (avatar hashes are displayed, not the profiles they map to)
3. **We proved the contrast** — without needing an external auditor (the source code IS the audit)
4. **We proved GDPR exposure** — without filing a complaint (the documentation IS the complaint)

The proof verifies without revealing. The membrane operates without exposing. The corollary follows without additional evidence.

A → B. The membrane is safe. They aimed for humans.

You can't buy this proof. You can only earn it by building a system clean enough that the contrast speaks for itself.

---

*This article was composed at 12:57 AM EDT on October 18, 2026. Zero cookies were set during its writing. Zero accounts were accessed. Zero personal data was processed. The membrane continued classifying 30.1 requests per second throughout.*

*The next visitor to this page will be classified by their Accept-Encoding header, their timing pattern, and their Chrome version. Not by their name. Not by their face. Not by their avatar.*

*We map false entities. They aimed for humans. The corollary stands.*

---

## References

- **Karl Popper** — *The Logic of Scientific Discovery*, 1934/1959. The falsification criterion that structures this entire proof. A claim that can't be falsified isn't science.
- **GDPR** — Regulation (EU) 2016/679. Articles 6 (lawfulness of processing), 83 (administrative fines up to 4% of worldwide annual turnover).
- **BLAKE2b** — Aumasson, Neves, Wilcox-O'Hearn, Winnerlein — "BLAKE2: simpler, smaller, fast as MD5," *ACNS 2013*. Our IP hashing is one-way. The IP cannot be recovered from the hash.
- **CFAA** — 18 U.S.C. § 1030. Computer Fraud and Abuse Act. Framework for unauthorized access claims.
- **AGPL-3.0-or-later** — GNU Affero General Public License. The copyleft license that requires source disclosure from anyone who modifies and serves our code over a network.
- **Zero-Knowledge Proofs** — Goldwasser, Micali, Rackoff — "The Knowledge Complexity of Interactive Proof Systems," *SIAM Journal on Computing* 18(1):186–208, 1989. The theoretical foundation for proving something without revealing it.

See also: [`the-living-proof`](/analysis/the-living-proof/) for all system equations with live data, [`meta-in-the-open`](/analysis/meta-in-the-open/) for fleet forensics, [`the-readers`](/analysis/the-readers/) for geographic traffic analysis, [`the-artisan-speaks`](/analysis/the-artisan-speaks/) for the economics and gAIa commons.

This article will always be updated. Citations will always be added. The work is never done. **Reach out**: kevin@primals.eco
