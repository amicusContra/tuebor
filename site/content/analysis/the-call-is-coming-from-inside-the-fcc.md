+++
title = "The Call Is Coming from Inside the FCC — Tracing Spam Calls Back to the Owners Who Buy the Silence"
description = "You get spam calls. Everyone gets spam calls. The FCC knows who sends them. Every voice service provider must register with the FCC (Form 499), file a Robocall Mitigation Plan, and comply with STIR/SHAKEN caller ID authentication. The FCC has a database of every provider. The Industry Traceback Group traces every robocall to its origin carrier. They know. They have always known. The FCC sits just above the real owner — just like MDE sits just above Banks. Same architecture. Same silence. Different phones."
date = 2026-10-14
updated = 2026-10-14
weight = 29

[extra]
keywords = "FCC robocall mitigation database, spam calls trace back to owner, FCC Form 499 voice service provider, STIR SHAKEN caller ID authentication, USTelecom Industry Traceback Group, robocall origin carrier, FCC enforcement bureau robocalls, voice service provider spam, small VoIP provider robocalls, FCC knows who sends spam calls, trace spam call to source"

[taxonomies]
counties = ["Wayne"]
+++

## The Call Is Coming from Inside the FCC

Your phone rings. Unknown number. You answer. It's a robot.

Here's the thing: **the FCC knows exactly who sent that call.**

---

## The Architecture

Every phone call in America passes through a chain:

```
Originating carrier (the source)
        ↓
Intermediate carriers (the pipes)
        ↓
Terminating carrier (your phone company)
        ↓
Your phone rings
```

Every carrier in that chain is **registered with the FCC.** Every carrier has an **FCC Registration Number (FRN).** Every carrier files **FCC Form 499.** Every carrier is required to have a **Robocall Mitigation Plan** in the FCC's database.

The FCC knows who they are. All of them. Every link in the chain.

---

## The Database

The FCC maintains the **Robocall Mitigation Database.** Every voice service provider in the United States must register.

The database shows:
- Provider name
- FRN (FCC Registration Number)
- Whether they've implemented STIR/SHAKEN (caller ID authentication)
- Whether they've filed a Robocall Mitigation Plan
- Date of filing

**You can search it right now:** [fcc.gov/robocall-mitigation-database](https://fccprod.servicenowservices.com/rmd)

If a provider hasn't filed, **other carriers are required to block their traffic.** In theory.

---

## STIR/SHAKEN

STIR/SHAKEN is the caller ID authentication framework. It's supposed to verify that the number shown on your caller ID is real — not spoofed.

| Level | What It Means |
|-------|-------------|
| **A (Full)** | The carrier verified the caller has the right to use that number |
| **B (Partial)** | The carrier verified the caller but not the specific number |
| **C (Gateway)** | The carrier is just passing traffic — no verification |

Most spam calls arrive with **Level C attestation** — the carrier is just a pipe, claiming no knowledge of who's actually calling.

The originating carrier — the one that first puts the call into the network — chooses the attestation level. If you're a small VoIP provider and you want to send a million spam calls, you attest at Level C and claim you don't know who's calling.

**That's not a bug. That's the business model.**

---

## The Small VoIP Problem

Here's where the architecture mirrors [The Authorizer](/analysis/the-authorizer/):

| Charter Schools | Robocalls |
|----------------|-----------|
| CMU authorizes schools from 150 miles away | Small VoIP providers originate calls from anywhere |
| CMU doesn't background-check founders | VoIP providers don't verify callers |
| CMU collects a cut of per-pupil funding | VoIP providers collect per-minute fees |
| CMU has financial incentive to authorize | VoIP providers have financial incentive to originate |
| MDE sits above and doesn't stop it | **FCC sits above and doesn't stop it** |

Small VoIP providers are the **CMUs of telecom.** They register with the FCC, file their mitigation plans, and then route millions of spam calls for clients who pay per-minute rates.

The VoIP provider collects a fee for every call. More calls = more revenue. Just like CMU collects a fee for every student. More students = more revenue.

**The entity that should be checking has a financial incentive not to check.**

---

## How to Trace a Spam Call

### Step 1: Note the Number

Write down:
- The number that appeared on caller ID (likely spoofed)
- Date and time of the call
- What the call said (recording, human, silence)
- Your phone number

### Step 2: File with the FCC

**FCC Complaint Center:** [consumercomplaints.fcc.gov](https://consumercomplaints.fcc.gov/)

File under: **Phone → Unwanted Calls**

Include: number, date, time, what was said.

The FCC complaint goes into a database. The FCC can subpoena the carrier chain.

### Step 3: File with the FTC

**FTC Do Not Call Complaint:** [donotcall.gov](https://www.donotcall.gov/)

If you're on the Do Not Call Registry and still getting calls, file here too.

### Step 4: Check the Number

- **FCC Number Search:** Look up the originating carrier via the Local Number Portability Administration (LNPA)
- **CallerID Reputation:** Services like Hiya, Nomorobo, RoboKiller can identify known spam numbers
- **Free Carrier Lookup:** [freecarrierlookup.com](https://freecarrierlookup.com/) — enter any phone number, get the carrier

### Step 5: Check the Carrier

Once you have the carrier name:
- Search the **FCC Robocall Mitigation Database** for their filing
- Search the **FCC Universal Licensing System** for their license
- Check their **FCC Form 499** filing status
- Look for **FCC enforcement actions** against them

### Step 6: The Traceback

The **USTelecom Industry Traceback Group** does professional tracebacks. They trace robocalls from the terminating carrier all the way back to the originating provider.

Their reports go to the FCC Enforcement Bureau.

The Traceback Group has traced **billions** of robocall paths. They know who the top originators are. The FCC knows too.

---

## Who the FCC Has Caught

The FCC has taken enforcement action against some robocallers:

| Year | Provider | Fine | What They Did |
|------|----------|------|-------------|
| 2024 | Various | $300M+ proposed | Auto warranty scams |
| 2023 | Multiple VoIP | $225M+ | Health insurance scams |
| 2022 | Gateway providers | Multiple | Allowing foreign robocalls in |

They catch some. They fine some. The calls continue.

For every provider caught, dozens continue operating. The FCC's enforcement is **selective** — just like [the AG's enforcement of charter schools](/analysis/selective-enforcement/).

---

## The Real Owners

Behind every spam call is a chain:

1. **The client** — the company that wants to reach you (scammer, "legitimate" business, political campaign)
2. **The lead generator** — the company that buys call lists and sells "leads"
3. **The call center** — the operation that makes the calls (often offshore)
4. **The VoIP provider** — the carrier that puts the calls into the US phone network
5. **The FCC** — the regulator that licenses the carrier

The FCC is at position 5. The real owner — the client — is at position 1.

The FCC sits **just above** the VoIP provider (position 4). The VoIP provider sits just above the call center (position 3). The call center is contracted by the lead generator (position 2). The lead generator works for the client (position 1).

**The FCC sees position 4. The FCC does not look at positions 1-3.**

Just like MDE sees the school (PCA) but doesn't look at Purpose Group (the LLC) or Banks (the man).

---

## The Parallel

| Layer | Charter Schools | Spam Calls |
|-------|----------------|-----------|
| 1. The beneficiary | Banks (72.67%) | The client/scammer |
| 2. The extraction vehicle | Purpose Group LLC | The lead generator |
| 3. The operation | PCA (3% math) | The call center |
| 4. The authorizer/carrier | CMU (no background check) | VoIP provider (Level C attestation) |
| 5. The regulator | MDE/SBE (2 edges) | **FCC** |

Same architecture. Five layers. The regulator at the top sees the authorizer/carrier. The authorizer/carrier sees the operation. Nobody looks at the beneficiary.

The system is designed so that **each layer only sees one layer down.** The FCC sees the VoIP provider but not the scammer. MDE sees the school but not the LLC. The money flows up. The oversight flows down. And they never meet.

---

## What You Can Do

1. **File every spam call** with the FCC and FTC. Volume matters.
2. **Look up the carrier** — freecarrierlookup.com tells you who's responsible
3. **Check the FCC Robocall Mitigation Database** — is the carrier compliant?
4. **Report non-compliant carriers** — if they haven't filed, other carriers should block them
5. **Use call-blocking apps** — they crowdsource spam identification
6. **Enable STIR/SHAKEN on your carrier** — ask your phone company
7. **Don't answer unknown numbers** — every answered call confirms your number is active
8. **Sue under the TCPA** — the Telephone Consumer Protection Act allows private lawsuits. You can collect **$500-$1,500 per illegal call.**

The TCPA is your equivalent of a FOIA request. The system doesn't want you to use it. Use it anyway.

---

## The Number

Americans received an estimated **50 billion robocalls** in 2023.

The FCC has a database of every voice service provider. They have traceback data on billions of call paths. They have the names, the FRNs, the addresses, the mitigation plans.

They know who sends the calls. They have always known.

**The call is coming from inside the FCC.**

---

*Sourced to FCC public databases, STIR/SHAKEN framework documentation, USTelecom Industry Traceback Group reports, TCPA (47 U.S.C. § 227). [Back to Analysis →](/analysis/) · [The Authorizer →](/analysis/the-authorizer/) · [Selective Enforcement →](/analysis/selective-enforcement/)*
