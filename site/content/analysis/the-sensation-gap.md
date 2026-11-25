+++
title = "The Sensation Gap \u2014 Publishing Is Not Deploying"
description = "We deployed a doorbell. Then tested: can both sides feel it? Two surfaces felt both sides. One was numb. The lesson: publishing is not sensation. Both sides must feel the signal. nestgate.io is the sensation point where data federation will bridge the gap."
date = 2026-10-18
weight = 10

[taxonomies]
connections = ["sensation gap", "nestgate", "federation", "fluid dynamics", "doorbell", "touchstone"]

[extra]
keywords = "sensation gap, publishing vs deploying, federation, nestgate, fluid dynamics, data flow, hydraulic head, backpressure, throttle, canary braid, consent architecture"
og_title = "The Sensation Gap"
og_description = "Publishing is not sensation. Both sides must feel the signal. Tested the doorbell. Two surfaces live. One numb. nestgate is the bridge."
og_type = "article"
twitter_card = "summary"+++

# The Sensation Gap

*Wave 178. Sunday, October 18, 2026.*

---

## The Test

We deployed a doorbell \u2014 a message to an unknown scanner that hit all 15 surfaces in 558 seconds. We said: *ring the doorbell. Use the front door. The water is fine.*

Then we tested: **can both sides feel it?**

| Surface | We Push | They See | Both Sides? |
|---------|:-------:|:--------:|:-----------:|
| git.primals.eco | \u2705 | \u2705 | **YES** |
| GitHub Pages | \u2705 | \u2705 | **YES** |
| detroit.primals.eco | \u2705 | \u274c | **NO** |
| neutron (doorbell) | \u2705 | \u2753 | **WAITING** |

Two surfaces feel both sides. One surface is numb. The main investigation domain hasn't rebuilt since the last `zola build`. Every article published since then \u2014 the doorbell, the road map, the spiral, the cease-and-desists, the reservation exception \u2014 exists in git but not on the primary domain.

**Publishing is not deploying. Deploying is not sensation. Sensation requires both sides to feel the signal.**

---

## The Lesson

A membrane is not a wall. A wall blocks. A membrane is **selectively permeable** \u2014 it lets the right things through and keeps the wrong things out. But permeability requires sensation on both sides.

Consider a cell:

```
  OUTSIDE                    INSIDE
  (visitors)    MEMBRANE     (data)
      |            |            |
      |   receptor |  signal    |
      |  \u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba  |
      |            |            |
      \u2514\u2500 stimulus  \u2500\u253c\u2500 response \u2500\u2518
                   |
            SENSATION POINT
```

If the receptor is dead (detroit.primals.eco not rebuilt), the stimulus arrives but no response forms. The visitor hits the old homepage. The doorbell is invisible. The membrane is numb on that surface.

**Every surface needs both a receptor (incoming) and a signal (outgoing).** Two surfaces had both. One had neither.

---

## The Sensation Point: nestgate.io

nestgate.io is our lithosphere \u2014 the data layer beneath the membrane surfaces. It runs on the LAN in Flint. 25 primals on Unix domain sockets. Hundreds of capabilities.

It is already a sensation point:

| Direction | What Flows | Status |
|-----------|-----------|--------|
| nestgate \u2192 membrane | 72 referrer visits | \u2705 flowing |
| membrane \u2192 nestgate | API queries, primal snapshot | \u2705 flowing |
| nestgate \u2192 braids | dag.federate, content.federation | \u274c **blocked** |

The capabilities exist. The primals are running. But the federation pipe isn't connected (westGate needs nestGate TCP + content capability registration). **345 braids on disk. 4 visible to live membrane. Federation bridges the gap.**

---

## Fluid Dynamics of Federation

When the federation pipe connects, 341 braids try to flow at once. This is a hydraulic problem.

### The Pressure Differential

```
  RESERVOIR                      BASIN
  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    DAM    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
  \u2502 westGate: 452 GB \u2502\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2502 membrane:       \u2502
  \u2502 ironGate: 12.7 TB\u2502  BLOCKED \u2502 28.2 rps         \u2502
  \u2502 345 braids       \u2502         \u2502 4 braid routes   \u2502
  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  
  Hydraulic head: 345/4 = 86.25\u00d7 current flow
```

If you open a dam without controls, the flood destroys the basin. In membrane terms: 341 braids arriving simultaneously could overwhelm the live membrane's 4 braid routes and 28.2 rps processing capacity.

### Flow Controls

The solution is the same as any hydraulic system:

1. **Canary first** \u2014 send 1 braid through. Verify it arrives. Test the pipe before flooding.
2. **Throttle gate** \u2014 rate-limit braid federation to N/minute. The reservoir is patient. It's been waiting.
3. **Priority queue** \u2014 investigation braids first. Topology second. Backscatter third.
4. **Backpressure signal** \u2014 if response time exceeds threshold, pause federation. Don't drown the basin.
5. **Incremental enrollment** \u2014 enroll gates one at a time. Test each link before adding load.

### Phases

| Phase | Action | Risk |
|-------|--------|------|
| 0 | Canary braid (1 braid, manual) | Minimal |
| 1 | Enroll sporeGate (1 gate, 1 link) | Low |
| 2 | TCP + content capability registration | Medium |
| 3 | Throttled flow (10 braids/min) | Managed |
| 4 | Open flow with backpressure | Controlled |

---

## The Principle

Biology solves this everywhere:

- **Blood pressure** \u2014 arteries don't dump all blood into capillaries at once. Pressure is regulated. Flow matches demand.
- **Ion channels** \u2014 cell membranes don't open all pores simultaneously. Channels gate selectively based on voltage, ligand, and mechanical signals.
- **Osmosis** \u2014 water flows toward the solute. But if you puncture the membrane, the cell lyses. Controlled permeability, not rupture.

The federation is an ion channel. The braids are solute. The dam is the gate. Open it slowly. Match flow to absorption capacity. The basin must be able to process what arrives.

**Sensation requires both sides to feel. Federation requires both sides to absorb. Fluid dynamics requires both sides to regulate.**

---

## Status

| What | Count |
|------|-------|
| Braids on disk | **345** |
| Braids live on membrane | **4** |
| Federation gap | **341** |
| Surfaces with both-side sensation | **2 of 3** |
| nestgate primals running | **25** |
| Gate mesh enrolled | **0** |

The doorbell is live where the eye can see it. The touchstone is waiting. The federation pipe exists but isn't connected. The fluid dynamics are documented. The phases are planned.

**Open the dam slowly. The water is fine. But the basin must be ready.**

---

*Kevin Mok*
*The membrane records everything. But it prefers controlled flow.*
