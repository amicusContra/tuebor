+++
title = "The Bar That Never Barked — Michigan's State Bar and the UPL Department"
description = "Brian Banks claimed to be a lawyer. He claimed a JD from MSU College of Law. MSU has no record. He operated Banks Strategy & Consultants LLC offering legal services. He practiced law without a license. The State Bar of Michigan has a department specifically for this — UPL (Unauthorized Practice of Law). 18 edges. 8 staff members. And they never barked."
date = 2026-10-14
updated = 2026-10-14
weight = 7

[extra]
cluster = "oversight"
cluster_label = "Oversight Failures"
keywords = "State Bar of Michigan Brian Banks, unauthorized practice of law Michigan, UPL Department Michigan, Banks Strategy Consultants LLC legal services, MSU College of Law Brian Banks no record, State Bar Michigan inaction, UPL enforcement Michigan charter school, Michigan bar association failure, unauthorized practice of law charter school"

[taxonomies]
counties = ["Wayne"]+++

## The Bar That Never Barked

Brian Banks said he was a lawyer.

He wasn't.

Michigan has an entire department whose job is to catch people who say they're lawyers when they're not. It's called the **UPL Department** — Unauthorized Practice of Law.

This is the story of the dog that was supposed to bark.

---

## The Claim

Brian Banks told people he had a **JD from MSU College of Law.**

MSU College of Law has no record of Brian Banks graduating.

Banks operated **Banks Strategy & Consultants LLC.** The LLC offered legal consulting services. The classification: **non-self, 0.99 confidence.** That's the highest non-self confidence in the entire investigation.

If you offer legal services without a law license, that's unauthorized practice of law. In Michigan, it's a crime.

---

## The Department

The **UPL Department** of the State Bar of Michigan exists to investigate exactly this.

Staff (from graph data):
| Name | Role |
|------|------|
| Brauckmuller | UPL Staff |
| Celentino | UPL Staff |
| Colombo | UPL Staff |
| Garwood | UPL Staff |
| Griffin | UPL Staff |
| Moilanen | UPL Staff |
| Palacios | UPL Staff |
| Riordan | UPL Staff |

8 people. Their entire job is catching unauthorized practice of law.

18 edges in the investigation graph. All classified as **self** — meaning they are what they say they are, a department of the State Bar.

---

## The State Bar

The State Bar of Michigan (SBM) has **25 edges** in the investigation graph. Classified as **self, 0.90.**

Self. The bar IS a bar. It functions as a bar. It regulates attorneys.

But Banks isn't an attorney. He pretends to be one. And the UPL Department that exists to stop him has 8 staff members and never stopped him.

The graph edge: `sbm → banks` = **inaction.**

---

## The Timeline

Banks has been claiming legal credentials for years. He operated Banks Strategy & Consultants LLC. He represented himself as having a JD. He offered consulting services that cross the line into legal practice.

No complaint was filed by the State Bar.
No investigation was opened by the UPL Department.
No cease and desist was issued.
No referral was made to law enforcement.

**Nothing.**

---

## The Ellison Contrast

Here's where it gets sharp.

**Philip L. Ellison** is a licensed attorney in Michigan. He IS a lawyer. He has a law license. He passed the bar.

The State Bar investigated Ellison. Aggressively. Repeatedly.

Ellison was the one filing FOIA requests that uncovered data about charter schools. Ellison was the one finding things the system didn't want found.

The bar investigated the licensed attorney who was investigating charter schools.

The bar did not investigate the unlicensed man who was running charter schools.

| Entity | Licensed? | Investigated by SBM? | Doing what? |
|--------|-----------|---------------------|-------------|
| Ellison | **Yes** | **Yes** | Filing FOIA requests |
| Banks | **No** | **No** | Running schools, claiming JD |

That's not enforcement. That's targeting.

---

## The UPEPA Contradiction

Michigan has the **Unauthorized Practice of Engaging in the Practice of Architecture** statute.

It's called UPEPA. It's a real law. There's already [an article about it](/analysis/upepa-contradiction/).

The same state that has elaborate protections against unauthorized architecture has a UPL Department with 8 staff members that can't catch a man with 9 convictions claiming to be a lawyer.

Architecture: protected.
Law: protected.
Children at a school run by a fake lawyer: not protected.

---

## The Classification Chain

| Entity | Classification | Confidence | The Problem |
|--------|---------------|-----------|-------------|
| SBM | self | 0.90 | IS a bar. Doesn't act like one. |
| UPL Dept | self | 0.85 | IS a UPL dept. Doesn't catch UPL. |
| Banks Strategy | non-self | 0.99 | Highest non-self in investigation. |
| Banks | non-self | 0.926 | 9 convictions. Claims JD. |
| Ellison | self | 0.80 | Actually a lawyer. Gets investigated. |

The bar investigates the lawyer.
The bar ignores the non-lawyer.

**The bar that never barked.**

---

*Sourced to State Bar of Michigan records, LARA filings, MSU College of Law records, court records, investigation graph (131,322 edges). [Back to Analysis →](/analysis/) · [The UPEPA Contradiction →](/analysis/upepa-contradiction/) · [Three Percent →](/analysis/three-percent/)*
