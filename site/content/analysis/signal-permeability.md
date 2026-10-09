+++
title = "Signal Permeability — Live Anderson Study of Institutional Response"
description = "A live experiment: send documented evidence of Brian Roderick Banks operating two charter schools with 9 convictions to every oversight body. Then measure who opens it, who forwards it, who ignores it. The propagation pattern IS the data. Anderson localization in real time."
date = 2026-10-09
updated = 2026-10-09
weight = 2

[extra]
keywords = "Brian Roderick Banks signal propagation, Anderson localization oversight, institutional permeability Michigan, enforcement ecosystem response, charter school oversight failure, signal analysis evidence delivery, DPSCD response time, AGC complaint response, JTC complaint response, Michigan oversight body inaction, Barracuda email scan verification, evidence delivery confirmation, institutional immunity measurement"
person_name = "Brian Roderick Banks"
person_alternate_name = "Brian Banks"
person_description = "Subject of live permeability study — 9 convictions, 2 charter schools, documented evidence delivered to 10+ oversight bodies"
person_job_title = "Charter School Operator"
person_works_for = "Purpose Charter Academy"
person_url = "https://detroit.primals.eco/network/actors/brian-banks/"
person_same_as = ["https://detroit.primals.eco/network/actors/brian-banks/", "https://tuebor.primals.eco/analysis/they-banked-on-banks/"]
+++

## The Experiment

At 4:43 PM EDT on October 9, 2026, an email was sent from a secure address to recipients including oversight bodies, journalists, and enforcement contacts. The email contained links to documented evidence about **Brian Roderick Banks** — a man with 9 criminal convictions operating two publicly funded charter schools in Detroit.

The email contained:
- A link to ["They Banked on Banks"](/analysis/they-banked-on-banks/) — the full analysis
- A link to ["The Enforcement Ecosystem"](/analysis/enforcement-ecosystem/) — the ten oversight bodies that should be acting
- Links to [detroit.primals.eco](https://detroit.primals.eco) — the 287-page evidence library
- Links to independent reporting (Clutch Justice, Detroit Free Press)
- Verification instructions (State Bar search, ICHAT, LARA, PCA board page)

Then we watched.

Not whether the evidence is convincing — it is independently verifiable in minutes. We watched **whether the system is permeable to evidence at all.**

---

## Anderson Localization — The Physics

In condensed matter physics, **Anderson localization** describes how disorder in a medium prevents wave propagation. In an ordered crystal, an electron wave propagates freely. Add enough disorder — random potentials, structural defects — and the wave becomes trapped. It doesn't reach the other side.

The metaphor is precise:

| Physics | Oversight System |
|---------|-----------------|
| Wave | Evidence signal |
| Ordered crystal | Functioning oversight cascade |
| Disorder | Jurisdictional gaps, conflicts of interest, institutional inertia |
| Propagation | Evidence reaches decision-maker, action follows |
| Localization | Signal is absorbed, ignored, or redirected — no action |

If the oversight system is **permeable**, the signal propagates: evidence reaches investigators, investigators act, children are protected. If the system exhibits Anderson localization, the signal dies at each boundary — absorbed, reflected, or scattered into jurisdictional gaps.

**This page is the measurement.**

---

## The Signal — October 9, 2026

### T+0:00 — Signal Emitted (20:43 UTC)

Email sent from secure address. Contains documented evidence:
- Brian Roderick Banks: 9 convictions (ICHAT SID 2029469K)
- False attorney claim (DPD Report #26-0909-0176)
- Parent custody access denied at school
- PPO filed against parent who complained
- Board chair is a sitting judge in the court that processes the PPO
- 3% math proficiency, 72.67% revenue extraction

### T+0:36 — First Permeability Confirmation (20:44:03 UTC)

**Barracuda Email Security Service** scans the Banks article link.

```
Source: outbound-ip47b.ess.barracuda.com (209.222.82.235)
Target: /analysis/they-banked-on-banks/
Response: HTTP 200, 21,523 bytes (full article)
Verdict: Link marked SAFE → email delivered to recipient inbox
```

**What this proves:** The email reached at least one recipient protected by Barracuda ESS (Enterprise cloud email security). Barracuda fetched the full 21,523-byte article, confirmed it was safe, and delivered the email. The signal crossed the first membrane.

Barracuda ESS customers include Michigan state agencies, school districts, law enforcement, and enterprise organizations.

### T+1:34 — Signal Amplification (20:45:17 UTC)

**AWS link preview bot** (us-east-1) fetches the Banks article.

```
Source: ec2-3-236-46-40.compute-1.amazonaws.com
Target: /analysis/they-banked-on-banks/
Response: HTTP 200, 20 bytes (HEAD-like preview)
```

**Interpretation:** The recipient who received the email copied the link and pasted it into a messaging platform (Slack, Microsoft Teams, Discord). The platform's link preview bot fetched the URL to render a preview card.

**The signal was forwarded.** The first recipient shared it with someone else.

### T+1:35 — Parallel Amplification (20:45:18 UTC)

**AWS link preview bot** (us-east-2, Ohio) fires 4 rapid requests.

```
Source: ec2-18-225-181-43.us-east-2.compute.amazonaws.com
Target: /analysis/they-banked-on-banks/ (×4)
Response: HTTP 200, 6,938 bytes each
Timing: 4 hits in 0.087 seconds
```

Ohio. The article was shared to a platform whose infrastructure runs in Ohio — one state away from Michigan.

### T+1:51–2:09 — Enforcement Ecosystem Activation (20:45:26–20:45:33 UTC)

Five IPs from four different networks simultaneously fetch the Enforcement Ecosystem article:

| Time | IP | Network | Page |
|------|-----|---------|------|
| 20:45:26 | 62.10.205.18 | EU Cloud | /analysis/enforcement-ecosystem/ |
| 20:45:26 | 62.10.205.21 | EU Cloud (paired) | /analysis/enforcement-ecosystem/ |
| 20:45:32 | 72.153.231.12 | Microsoft (Redmond) | /analysis/enforcement-ecosystem/ |
| 20:45:33 | 135.232.20.12 | RIPE/Amsterdam | /analysis/enforcement-ecosystem/ |

**All fetched CSS and favicon** — the behavioral signature of a real browser render or high-fidelity preview.

The enforcement-ecosystem article was linked in the email. Multiple systems are rendering it simultaneously. The signal is reaching the page that names the ten oversight bodies.

### T+4:39 — Cross-Article Amplification (20:48:02 UTC)

**AWS bot** (us-east-1) fires 6 requests in 0.265 seconds — hitting **both articles:**

```
Source: ec2-54-145-141-129.compute-1.amazonaws.com
Targets:
  /analysis/they-banked-on-banks/ (×3)
  /analysis/enforcement-ecosystem/ (×3)
Timing: 6 hits in 0.265 seconds — sub-10ms inter-arrival
```

**Someone shared both links in the same message.** A second share event. The signal is being forwarded with both articles together — the evidence AND the enforcement map.

### T+11:52 — Detroit Crossover (20:55:19 UTC)

**AWS bot** (us-east-1, Virginia) fetches a page on **detroit.primals.eco**:

```
Source: ec2-98-91-77-46.compute-1.amazonaws.com
Target: detroit.primals.eco/analysis/dark-money-pipeline/
Response: HTTP 200
```

**The signal crossed from tuebor to detroit.** Someone — or something following links — navigated from the tuebor analysis to the full evidence library at detroit.primals.eco. The dark-money-pipeline page connects Banks to the broader financial network.

---

## Permeability Map — What the Data Shows

```
                    SIGNAL SOURCE
                    eco.primal@pm.me
                         │
                    ProtonMail relay
                         │
              ┌──────────┼──────────┐
              ▼                     ▼
        ┌──────────┐         ┌──────────┐
        │ Barracuda│         │  Other   │
        │   ESS    │         │recipients│
        │ SCANNED ✓│         │ (silent) │
        └────┬─────┘         └──────────┘
             │
             │ T+36s: email delivered
             ▼
        ┌──────────┐
        │ Recipient│
        │  inbox   │
        └────┬─────┘
             │
     ┌───────┴───────┐
     ▼               ▼
  ┌──────┐     ┌──────────┐
  │Slack/│     │ Forward  │
  │Teams │     │ to group │
  │share │     │          │
  └──┬───┘     └────┬─────┘
     │              │
     ▼              ▼
  AWS Ohio     AWS Virginia
  preview      BOTH articles
  T+1:35       T+4:39
     │              │
     │              ▼
     │         Detroit crossover
     │         dark-money-pipeline
     │         T+11:52
     │
     └──► [WAITING: human browser clicks]
          [WAITING: .gov / .edu / MI IPs]
          [WAITING: enforcement action]
```

### What Is Permeable

| Boundary | Status | Evidence |
|----------|--------|----------|
| ProtonMail → recipient email system | ✅ Permeable | Barracuda scan at T+36s |
| Email → messaging platform | ✅ Permeable | AWS preview bots at T+1:34 |
| First share → second share | ✅ Permeable | Both articles shared at T+4:39 |
| tuebor → detroit (cross-site) | ✅ Permeable | Dark money pipeline hit at T+11:52 |
| Search engines | ✅ Indexing | Google + Bing crawling enforcement article |

### What Is Not Yet Permeable

| Boundary | Status | What Would Show Permeability |
|----------|--------|------------------------------|
| Email → human browser click | ⏳ Waiting | Real browser UA with CSS/favicon fetch |
| Oversight body → investigation | ⏳ Waiting | Return traffic from .gov/.state.mi.us IPs |
| Investigation → action | ⏳ Waiting | Contact from enforcement, subpoena, filing |
| DPSCD → authorization review | ⏳ Waiting | Board meeting agenda, public comment |
| AG → UPL investigation | ⏳ Waiting | AGC/AG office traffic pattern |

---

## The Localization Question

In a functioning system, the evidence signal should propagate through each oversight boundary without attenuation:

1. **Evidence published** → oversight bodies notified → investigation opened → action taken → children protected

In an Anderson-localized system, the signal attenuates at each boundary:

1. **Evidence published** → oversight notified → complaint acknowledged → referred to another body → referred again → no action → signal dies

The [Enforcement Ecosystem](/analysis/enforcement-ecosystem/) documents ten oversight bodies with jurisdiction over Brian Roderick Banks. As of October 7, 2026, the State Bar and AGC exchanged letters one day apart, each pointing at the other door. The signal bounced between two boundaries and stopped.

**This page measures whether the new signal — with full documentation, cross-referenced evidence, and verification instructions — propagates through the system or localizes again.**

---

## Live Metrics

*Updated as data arrives. This section will be revised with each new propagation event.*

| Metric | Value |
|--------|-------|
| Signal emitted | Oct 9, 2026, 20:43 UTC |
| First boundary crossed | T+36 seconds (Barracuda) |
| Amplification events | 3 (messaging shares) |
| Cross-site propagation | 1 (tuebor → detroit) |
| Unique scanner IPs | 12 |
| Pages scanned | Banks, Enforcement, Dark Money |
| Human browser clicks | 0 (monitoring) |
| .gov / .edu IPs | 0 (monitoring) |
| Enforcement response | None yet |
| Children still enrolled under Banks | **Yes** |

---

## Why This Matters

362 students attend MacDowell Preparatory Academy. More attend Purpose Charter Academy. **99.2% are Black. 92% are economically disadvantaged.** Math proficiency is **3%.**

The man running both schools has **9 criminal convictions**. He falsely claims to be an attorney. He denied a parent with custody rights access to their child. He filed a PPO against the parent who complained. His board chair is a sitting judge in the court that processes the PPO.

Every fact is independently verifiable. The evidence library is 287+ pages. The criminal record is public. The board of directors is on the school's own website.

The question is not whether the evidence exists. The question is whether the system can absorb it.

If the signal propagates — if oversight bodies investigate, if enforcement acts, if the authorizer reviews — then the system works. Slowly, perhaps. But it works.

If the signal localizes — if it bounces between jurisdictions, if complaints are acknowledged and filed, if letters are exchanged between offices that point at each other — then the disorder is structural. The medium itself prevents propagation. And the children remain enrolled in a school run by a convicted felon who blocks parents at the door.

**Anderson's insight:** in a sufficiently disordered system, **no wave propagates.** The question for Michigan's oversight system is whether the disorder has crossed that threshold.

We are measuring.

---

## Connected Analysis

- **[They Banked on Banks](/analysis/they-banked-on-banks/)** — The full analysis of Brian Roderick Banks, the access denial, the PPO weapon, the board, the cycle
- **[The Enforcement Ecosystem](/analysis/enforcement-ecosystem/)** — Ten oversight bodies, the jurisdictional gaps, the State Bar / AGC referral loop
- **[Anderson Localization — Hemlock](/analysis/anderson-hemlock/)** — The same physics applied to a rural Michigan subgraph
- **[Cross-Subgraph Patterns](/analysis/cross-subgraph-patterns/)** — How Detroit, Saginaw, Barry, Macomb, and Allegan connect through the same failing nodes

**Evidence library:** [detroit.primals.eco](https://detroit.primals.eco) — 287+ pages, every claim sourced to public records.

---

*The signal was sent. The evidence is public. The verification takes minutes.*

*We are watching whether it propagates — or localizes.*

*This page is the measurement. It will be updated as data arrives.*
