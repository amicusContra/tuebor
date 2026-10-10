+++
title = "Ghost Witness — The Samantha Aljouny Investigation"
description = "A Michigan attorney submitted correspondence from a witness who does not appear to exist. A forensic investigation spanning 13 months of evidence converges on a single question: who controlled the account?"
date = 2026-10-06
weight = 1

[extra]
keywords = "Samantha Aljouny ProtonMail ghost witness, Philip Ellison SLAPP fabricated witness, Aljouny Media Consulting fake journalist, Saginaw County Circuit Court Borrello, UPEPA anti-SLAPP Michigan, fabricated evidence Michigan court, ProtonMail forensic investigation PGP key, Clutch Justice Ellison investigation, IC3 cyber evidence complaint, Conrad Mallett Aljouny email, Outside Legal Counsel fabricated witness, Ellison sworn affidavit Aljouny, Lisa Edgecomb notary Ellison, fabricated witness Michigan SLAPP, OLC v Williams 25-2441-CZ, Violet Ikonomova Aljouny, Detroit Free Press Aljouny"

[taxonomies]
counties = ["Saginaw", "Wayne"]
+++

## Summary

An attorney submitted correspondence from a purported journalist named
"Samantha Aljouny" of "Aljouny Media Consulting" as evidence in
Saginaw County Circuit Court proceedings before Judge Andre Borrello.

The journalist does not appear to exist. No articles. No bylines. No
LinkedIn profile. No Michigan business registration. No professional
footprint of any kind. The only traceable artifact is a ProtonMail
address: `SAljounyMediaConsulting@proton.me`.

The attorney then:

1. Listed Aljouny as a potential witness
2. Demanded the opposing party admit under oath that *they* created the identity
3. Swore in an affidavit that he had "no connection whatsoever" to the account
4. Pursued contempt proceedings carrying possible incarceration

A forensic investigation has produced 13 independent convergence points.

---

## The Convergence

### 1. The Account — September 2023

The ProtonMail public PGP key for `SAljounyMediaConsulting@proton.me`
carries a creation timestamp of:

**September 20, 2023 at 11:26:35 UTC**

- Hex creation-time field: `650AD6EB`
- Decimal timestamp: `1695209195`
- OpenPGP fingerprint: `8D59 A462 1930 5ABE 2021 9F07 6EE0 32D8 A3A3 E6D4`

Proton states it normally generates encryption keys when an account or
new email address is created. This is the best technical provenance date
for the Aljouny address.

No professional journalist or media consultant operating under the name
"Aljouny Media Consulting" has a documentable professional presence
predating or postdating September 2023 — no bylines, no press credentials,
no client work product, no directory listings, no trace anywhere.

### 2. The Ahmad v. University of Michigan Timing

Philip L. Ellison of Outside Legal Counsel PLC represented Hassan Ahmad
in *Ahmad v. University of Michigan*, a significant Michigan FOIA case.

The chronology:

| Date | Event |
|------|-------|
| September 15, 2023 | Opinion issued in *Ahmad v. University of Michigan* |
| September 16, 2023 | Outside Legal Counsel published press release |
| **September 20, 2023** | **Aljouny ProtonMail key created** |
| September 21, 2023 | Wayback Machine captured OLC's Ahmad page |

The Aljouny address was created **four days after** Ellison publicly
announced his Ahmad result — during the exact window of activity
surrounding that case.

### 3. The Controlled Link Test — July 2026

A unique Bitly URL (`https://bit.ly/AboutClutch`) was sent **only to
the Aljouny account**. It was not published anywhere.

The link was opened:

**July 31, 2026 at approximately 10:59 PM EDT**

Technical capture:

| Field | Value |
|-------|-------|
| IP | `146.75.128.219` (Fastly) |
| Device | iPhone |
| OS | iOS 18.7 |
| Browser | Mobile Safari 26.5 |
| WebKit | 605.1.15 |
| Mobile ID | `15E148` |
| Time zone | America/Detroit |
| Screen | 430 × 932 |

Because the link was sent **only** to Aljouny, the opening establishes
that someone with access to the Aljouny mailbox accessed the site through
this technical environment.

### 4. Pre-Test Visits from the Same Endpoint

The same IPv4 endpoint (`146.75.128.219`) appears in site records before
the controlled test:

- June 1, 2026
- June 17, 2026
- July 27, 2026
- **July 31, 2026 — controlled Aljouny event**

Fastly/Apple Private Relay infrastructure can be shared — the IP alone
is not a unique identifier. But the controlled July 31 event gives the
endpoint contextual significance.

### 5. Independent Journalist Confirmation

On **September 9, 2026**, Detroit Free Press reporter **Violet Ikonomova**
independently contacted the investigator and asked:

> *"did you ever figure out who Samantha Aljouny is?"*

Ikonomova reported:

- She received an email **that day** from the Aljouny Proton account
- A troll image had been emailed to **Conrad Mallett** (then head of Detroit's Law Department)
- Ikonomova was **blind copied** on that email
- The communication came from the Aljouny Proton identity

Most critically, Ikonomova independently stated:

> *"makes me think it's probably phil bc its a legal thing, no idea what
> kevin lindke's interest would be"*

She was not told to suspect anyone. Her assessment was based on the legal
subject matter of the communication.

### 6. October 6, 2026 — The Court Filing Match

On October 6, 2026, the attorney filed a court document containing a
printout of a Clutch Justice article. His own exhibit shows the article
was accessed at approximately **11:54 AM**.

Site records show access to the same article through Fastly/Apple Private
Relay using:

| Field | Controlled Aljouny (Jul 31) | Oct 6 Court Filing |
|-------|---------------------------|-------------------|
| Device | iPhone | iPhone |
| OS | iOS 18.7 | iOS 18.7 |
| WebKit | 605.1.15 | 605.1.15 |
| Mobile ID | `15E148` | `15E148` |
| Browser | Safari 26.5 | Safari 26.6.1 |
| Network | Fastly | Fastly |

The Safari version update (26.5 → 26.6.1) over this period is ordinary.
The rest of the environment is identical.

### 7. What Was Sworn Under Oath

The attorney submitted a sworn affidavit stating:

- He had never used Proton Mail
- He had never opened a Proton account
- He had never had a third party create or operate one for him
- He had **"no connection whatsoever"** to `SAljounyMediaConsulting@proton.me`
- He had never created or directed the creation of an alias, pseudonym, or "cut-out" identity

These were sworn factual representations made in litigation.

---

## What Is Proven vs. What Is Not

### Documented

- The Aljouny ProtonMail account exists/existed
- Its PGP key was created September 20, 2023 at 11:26:35 UTC
- That date falls within a four-day window of Ellison's Ahmad v. UM activity
- The attorney listed Aljouny as a potential witness
- The attorney demanded opposing counsel admit creating the identity
- The attorney swore he had "no connection whatsoever" to the account
- A controlled link sent only to Aljouny was opened from an iPhone/iOS/Fastly environment
- The same endpoint visited the site before the controlled test
- A Detroit Free Press reporter independently received Aljouny communications
- The reporter independently suspected the attorney based on subject matter
- The attorney's own Oct 6 court filing matches the same technical environment
- An IC3 complaint was filed October 6, 2026 (ID: `10f80c476ef144d4a772d0b198c75a2a`)

### Not Yet Proven

- Who registered the Proton account
- Who controlled it on each date
- Whether the attorney personally typed every Aljouny email
- Whether someone else had access
- Whether the Fastly/Private Relay sessions represent one physical device

Those questions require provider/account/device evidence.

---

## The Central Question

If provider or device evidence ultimately establishes that the attorney
created, controlled, participated in, or had access to the Aljouny
account, the issue becomes:

**Why was a journalist being accused in court of operating an identity
connected to the person making the accusation?**

---

## Status

| Date | Action |
|------|--------|
| April 25, 2026 | Ghost Witness article published on Clutch Justice |
| April 28, 2026 | Supplemental Notice filed with trial court documenting Aljouny non-existence |
| April 30, 2026 | Show cause order signed (contempt based on article) |
| May 7, 2026 | UPEPA anti-SLAPP motion filed |
| July 31, 2026 | Controlled Bitly test — Aljouny-associated device captured |
| August 5, 2026 | Ellison notified that technical information captured |
| September 9, 2026 | Violet Ikonomova independently receives Aljouny email, contacts investigator |
| October 6, 2026 | Court filing provides matching access event; IC3 complaint submitted |

---

## Sources

Every claim is sourced to:

- **Court records** — Saginaw County Circuit Court, before Judge Andre Borrello
- **ProtonMail** — public PGP key metadata (OpenPGP standard)
- **Bitly** — controlled link access records
- **Server logs** — Clutch Justice site access records
- **Direct communication** — Violet Ikonomova (Detroit Free Press)
- **Attorney filings** — discovery requests, affidavits, initial disclosures
- **IC3** — FBI Internet Crime Complaint Center submission

Published reporting: [Clutch Justice](https://clutchjustice.com)

---

*Evidence summary submitted for determination. Not legal advice.*
*The investigator is not an attorney and is not providing legal analysis.*
