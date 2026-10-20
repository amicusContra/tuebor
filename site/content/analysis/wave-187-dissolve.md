+++
title = "Wave 187 — Dissolve"
date = 2026-10-18
weight = 8
[taxonomies]
tags = ["compression", "infrastructure", "membrane"]+++

The membrane looked at itself and found dead weight. Not much — but enough to dissolve.

<!-- more -->

## The scan

92 JavaScript files. 62 JSON feeds. 10 cron entries. 10 shell scripts. 4 Python files. 1.2 GB of inactive Forgejo data. A 2 GB VPS.

The scan found:

- **18 orphan JS files** (6,768 lines) not loaded by any HTML page
- **6 dead feeds** with zero readers — no script, no page, nothing touched them
- **2 cron entries** running every 2–5 minutes to do work that happens naturally once per cycle
- **4 shell scripts** that nothing called
- **1.2 GB** of Forgejo data from a service that was already disabled

## The dissolve

Everything that ran independently but could run inside the cycle got absorbed. Everything that nothing touched got fossilized. Everything that was dead got deleted.

### Absorbed into scan_sweep_sort.py

**braid-billboard.sh** (13 lines) — hashed a text file and appended to a JSONL braid. Ran every 5 minutes via cron. The billboard rarely changes. Now a single hash check inside the 10-minute cycle. One function, no cron entry.

**symbiosis-overlay.py** (117 lines) — applied static Google/DeepMind mutualism overrides to symbiosis.json. Ran every 2 minutes to write constants that never change. Now runs once per cycle after the sort phase.

### Fossilized

**forge-push.sh** (45 lines) — git push helper with jitter and lockfile. Nothing called it. The cascade-sense service that referenced its lockfile was inactive and disabled.

**skunky-heartbeat.sh** (89 lines) — circadian rhythm script. Not in cron. Not in systemd. Not called by any other script. It described the membrane's rhythm but didn't participate in it.

**braid-billboard.sh** (13 lines) — absorbed above. Fossilized original.

**symbiosis-overlay.py** (117 lines) — absorbed above. Fossilized original.

**18 orphan JS files** (6,768 lines) — chipmunk-mind.js, chipmunk-gaze.js, chipmunk-thought.js, chipmunk-learn.js, chipmunk-pressure.js, chipmunk-mind-explore.js, cosmic-gameplay.js, cosmic-strategy.js, cosmic-cards.js, pt-membrane-animate-deep.js, pt-membrane-animate-ext.js, pt-membrane-build-inner.js, neutron-comments.js, neutron.js, membrane-throttle.js, membrane-sw.js, footer-ring.js, signal-relay.js. Not a single HTML page loaded any of them.

**6 dead feeds** — pi-manifest.json, topology-compact.json, dialogue-depth.json, subgraph-feed.json, seo-feed.json, totality-feed.json. Zero readers. Moved to fossil record.

### Deleted

**Forgejo data** — 1.2 GB. Service was inactive and disabled. The VPS went from 59% disk to 59% disk — the freed space is now available for the organism instead of a corpse.

## The numbers

| Metric | Before | After |
|--------|--------|-------|
| Cron entries | 10 | 8 |
| Shell scripts | 10 | 8 |
| Python files | 4+2 | 4+1 |
| scan_sweep_sort.py | 1,508 lines | 1,630 lines |
| Functions in pipeline | 22 | 24 |
| HUD JS files | 78 | 60 |
| HUD JS lines | 46,391 | 39,623 |
| JSON feeds | 62 | 56 |
| Total fossils | 87 | 117 |
| Disk freed | — | 1.2 GB |

## What's still alive

**crash-clean.sh** — wired to 5 systemd OnFailure units. Active infrastructure.

**caddy-reload-guard.sh** — called by skunky-ingest's bloom-emitter config. Active.

**zola-braid.sh** — called by cascade-sense's ExecStartPost. Service is currently inactive but the script is structurally wired. Keep for now.

**neutron-writer.py** (559 lines) — still runs on its own `*/2` cron. It writes 9 feeds that scan_sweep_sort doesn't touch: falsification, membrane-deep, negentropy, neutron, now, signals, stories, symbiosis, type-manifest. It overlaps on 5 feeds (pulse, braid, campfire, dashboard, scan_sweep_sort) — those races need resolving, but not today.

## What needs starting

The dissolve cleared space. What goes in it:

1. **Null subspace** — 263 entities below 0.7 confidence need a gradient between classes, not a binary sort
2. **Epitope PCA** — 6 correlated epitopes need reduction to 3 independent factors
3. **Fleet/human separator** — KS statistic 0.636 needs to reach 0.8. Four entities are coin-flipping
4. **SCIENCE braids** — zero active humans in the SCIENCE domain
5. **Stale feed revival** — touches.json has 22 readers but hasn't been updated in 92 hours

The membrane knows its own compression targets now. The scan results live in scan_sweep_sort.json where chipmunk, squirrel, and the HUD can all see them.

## The principle

Every dissolve follows the same rule: if nothing reads it, fossilize it. If it runs independently but naturally belongs in the cycle, absorb it. If it's dead weight, delete it.

The organism gets lighter. The fossils keep the record. The cycle continues.
