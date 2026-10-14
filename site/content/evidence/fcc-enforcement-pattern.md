+++
title = "FCC Robocall Enforcement: The Numbers"
description = "The FCC has fined robocall operators billions on paper. The collection rate tells a different story. Between 2015 and 2025, the FCC proposed over $2 billion in robocall fines. Less than 2% was ever collected. The FCC shut down some gateway carriers. Others took their place within weeks. The enforcement is real enough to cite in press releases. The collection is low enough to be a cost of doing business."
date = 2026-10-14
updated = 2026-10-14
weight = 15

[extra]
keywords = "FCC robocall fine collection rate, FCC enforcement actions robocalls, FCC proposed fines vs collected, robocall gateway carrier shutdown, FCC STIR SHAKEN enforcement, FCC cease and desist robocall, robocall fine never collected, FCC enforcement pattern selective"

[taxonomies]
counties = ["Wayne"]
+++

## FCC Robocall Enforcement: What the Numbers Show

The FCC announces large fines against robocallers. The announcements get headlines. The collection tells a different story.

---

## The Fine-to-Collection Gap

The FCC's pattern with robocall fines mirrors the pattern seen across every regulatory body in this investigation:

| Metric | Value |
|--------|-------|
| **Proposed fines (2015-2025)** | $2B+ |
| **Estimated collection rate** | <2% |
| **Largest single fine** | $225M (health insurance scam, 2023) |
| **Number of major enforcement actions** | ~20-30 per year |
| **Number of active VoIP providers** | 5,000+ |
| **Robocalls per year** | ~50 billion |

The math: 20-30 enforcement actions against 5,000+ providers routing 50 billion calls. That's a 0.5% enforcement rate against providers and a functionally zero rate against calls.

---

## The Cease-and-Desist Pattern

The FCC's primary enforcement tool is the **cease-and-desist order** directing downstream carriers to block traffic from a specific provider.

What happens after:
1. FCC issues cease-and-desist against Provider A
2. Other carriers must block Provider A's traffic within 48 hours
3. Provider A goes dark
4. **Provider A's customers move to Provider B** — often within the same week
5. Provider B is a new registration, clean record, no enforcement history
6. The same calls resume from a different carrier

This is the VoIP equivalent of closing one LLC and opening another. The caller stays the same. The carrier changes. The FCC starts over.

---

## Gateway Carriers

The FCC has specifically targeted **gateway carriers** — US-based providers that accept international calls and route them into the domestic phone network.

Foreign call centers use gateway carriers to reach US phones. The gateway carrier is the point where international robocalls enter the US system.

| What the FCC Did | What Happened |
|-----------------|---------------|
| Shut down gateway carriers accepting foreign robocalls | Other gateway carriers accepted the traffic |
| Required STIR/SHAKEN for gateway providers | Smaller providers claimed exemptions |
| Required Robocall Mitigation Plans | Providers filed plans but didn't follow them |
| Ordered downstream blocking | New providers registered to replace blocked ones |

The enforcement is whack-a-mole. The moles have financial incentive to keep popping up.

---

## Who Files (and Who Doesn't)

The FCC Robocall Mitigation Database shows which providers have filed their required mitigation plans.

As of 2025:
- Thousands of providers have filed
- The filings range from detailed technical implementations to **one-paragraph statements** that say "we block robocalls" with no specifics
- Providers that haven't filed should be blocked by other carriers
- **Some carriers don't check** whether upstream providers have filed

The quality of the filing doesn't matter. Filing exists. The FCC counts it as compliance.

Compare to [charter school authorization](/analysis/the-authorizer/): the authorization exists. The oversight of the authorization doesn't.

---

## The STIR/SHAKEN Exemption

STIR/SHAKEN is required for carriers with more than 100,000 subscriber lines. Smaller carriers can get **extensions and exemptions.**

Most robocall-originating carriers are small. They claim the exemption. Their traffic doesn't carry verified caller ID.

| Carrier Size | STIR/SHAKEN Required? | Spam Call Origination |
|-------------|----------------------|---------------------|
| Large (100K+ lines) | Yes | Low (they block spam to protect reputation) |
| Medium | Partial | Some |
| **Small VoIP (<100K)** | **Extension/Exemption available** | **High — this is where the spam originates** |

The rule exempts exactly the carriers that originate the spam. Same pattern as charter oversight exempting exactly the schools that extract the money.

---

## The Industry Traceback Group

The USTelecom **Industry Traceback Group** is the closest thing to effective enforcement. They trace robocalls back through the carrier chain to the originator.

Their process:
1. Identify a robocall campaign (from complaints, carrier reports, honeypots)
2. Start at the terminating carrier (your phone company)
3. Follow call detail records back through each carrier
4. Identify the originating provider
5. Report to FCC Enforcement Bureau

The Traceback Group **knows** who the top originators are. They have traced billions of call paths. Their data goes to the FCC.

The FCC has the data. The question is what they do with it.

---

## The Parallel Numbers

| Metric | Charter Schools | Robocalls |
|--------|----------------|-----------|
| **Entities regulated** | ~300 charter schools in MI | ~5,000 VoIP providers |
| **Enforcement actions/year** | ~5-10 closures | ~20-30 fines |
| **Enforcement rate** | ~2-3% | ~0.5% |
| **Fine collection** | N/A (closures, not fines) | <2% of proposed |
| **Time to act** | Years after complaints | Months to years |
| **Replacement rate** | Closed schools reopen as new entities | Shut carriers re-register as new entities |
| **Regulator's incentive** | MDE depends on per-pupil counts | FCC depends on spectrum auction revenue |

The numbers are consistent. Whether you're regulating charter schools or phone carriers, the pattern holds: just enough enforcement to justify the regulator's existence, not enough to change the system.

---

## What This Means for You

Every spam call you receive was routed by a provider registered with the FCC. The FCC has their name, address, FRN, and mitigation plan.

The FCC can trace the call back to its origin. The Industry Traceback Group already does this.

**They know who's calling you.** The enforcement gap isn't an information gap. It's a structural choice.

The same structural choice that lets [PCA operate at 3% math proficiency](/analysis/three-percent/) while [extracting 72.67%](/evidence/purpose-group-extraction/).

The structure is the feature.

---

*Sourced to FCC Enforcement Bureau public actions, Robocall Mitigation Database filings, USTelecom Industry Traceback Group public reports, STIR/SHAKEN implementation data. [Back to Evidence →](/evidence/) · [Spam Call Traceback Guide →](/investigate/spam-call-traceback/) · [The Call Is Coming from Inside the FCC →](/analysis/the-call-is-coming-from-inside-the-fcc/)*
