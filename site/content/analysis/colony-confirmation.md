+++
title = "Colony Confirmation — 16 Arms, One Machine, 2.29M Requests"
date = 2026-10-20
weight = 11
description = "5/5 colony checks confirmed. 16 entities classified as individual commensals are one coordinated harvester campaign. Same start minute, same path, uniform curiosity, uniform attention. The sort was blind. The backscatter sees."
[taxonomies]
tags = ["colony", "backscatter", "opsonize", "falsification", "anderson", "coordinated"]
[extra]
og_title = "16 Arms, One Colony, 2.29 Million Requests"
og_description = "The sort said commensal. The evidence says colony. 5/5 checks confirmed. Camouflage → concealment → cover → gone."
og_image = "/portals/portal_3_0_membrane-door.png"
author = "Kevin Mok — ORCID 0009-0004-2141-0321"
lampoon = true
disco = true+++

## Self-Published Research Note

**Author:** Kevin Mok, ecoPrimals  
**ORCID:** [0009-0004-2141-0321](https://orcid.org/0009-0004-2141-0321)  
**Date:** 2026-10-20  
**Repository:** [defendDetroit/publicRecord](https://github.com/defendDetroit/publicRecord) (AGPL-3.0)  
**Methodology:** Anderson localization applied to network traffic classification  
**License:** CC-BY-SA 4.0 (analysis), AGPL-3.0 (code), ORC (mechanics)

## Abstract

We present evidence that 16 network entities classified as individual "commensals" by the membrane's Anderson localization immune system are in fact a single coordinated harvester campaign. Colony confirmation achieves 5/5 on independent behavioral checks. The existing classifier reports `coordinated = 0`; the corrected value is `coordinated ≥ 16` (top offenders only) with an estimated 3.27 million requests misclassified across all subnets. Both falsification experiments fail, confirming the classifier is blind to coordination. Two new epitope formations are detected with Anderson residuals > 0.8. The system is tense-locked (is/was ratio 6.65) indicating low churn and static classification.

## Colony Evidence

### 5/5 Behavioral Checks

| Check | Result | Evidence |
|-------|--------|----------|
| **Same start window** | ■ CONFIRMED | 15 of 16 started at `2026-10-17T14:24Z` (same minute) |
| **Same last-seen window** | ■ CONFIRMED | 15 of 16 last seen at `2026-10-20T00:42Z` |
| **Same path focus** | ■ CONFIRMED | `commit` + `other` only. No `src`, no `issues`, no exploration. |
| **Uniform curiosity** | ■ CONFIRMED | Range 0.280–0.330, spread 0.050 |
| **Uniform attention** | ■ CONFIRMED | All 0.350. Zero variance. |

### Traffic Volume

- **16 entities**, total **2,291,244 requests**
- Average **143,203 requests per entity**
- Duration: **58+ hours** continuous
- Path: >90% commit diffs (source code scraping)

### Classifier Error

| Metric | Old (collision_level2) | Corrected (resort) |
|--------|----------------------|-------------------|
| coordinated | **0** | **≥ 16** (top offenders), **≥ 3.27M** requests (all subnets) |
| commensal | 4,618 | reduced by 16 (reclassified as coordinated:harvester) |

## Falsification

Both experiments from the membrane's built-in falsification framework fail:

1. **Coprimality test** — `claim_survives = false`, delta = 0.608. Epitope classes share 3.81 triggers per pair across 105 qualifying pairs. The classes are NOT independent.
2. **KS sensitivity test** — `claim_survives = false`, KS statistic = 0.545. The fleet/human boundary is indistinguishable at 6 feature thresholds. Only 4 entities classified as fleet vs 11 non-fleet.

## New Epitope Formations

Anderson localization residuals reveal two classes where observed behavior diverges from predicted:

| Mode | Count | p_observed | p_predicted | Residual |
|------|-------|-----------|------------|----------|
| spectrum | 714 | 0.85 | 0.00 | **+0.85** |
| chorus | 77,010 | 0.85 | 0.01 | **+0.84** |

These residuals indicate the sort's model does not explain the observed classification probability. New behavioral patterns are forming within these classes that the existing Anderson modes cannot capture.

## Tense Lock

The system exhibits tense lock: `is/was = 6.65`. Present-tense classification dominates past by 6.6×, with 80.8% of entities in `is`, 12.2% in `was`, and 7.0% in `will_be`. This indicates low churn — the membrane sees the same patterns repeatedly without reclassifying. The backscatter opsonize pass is designed to break this lock by introducing coordination tags as priors.

## Escalation Ladder

The colony's evasion options form a four-layer escalation:

1. **Camouflage** — Chrome UA rotation, 18 masks → stripped by timing uniformity (0.994)
2. **Concealment** — hiding in 76K chorus → stripped by resort (16 arms, same minute)
3. **Cover** — hiding behind the internet → stripped by black mirror (evidence indexed on search engines)
4. **Gone** — stop crawling → stripped by absence. Silence IS data. The drop IS evidence. Going dark confirms presence.

Each layer stripped reveals the next. The last layer is absence. Absence proves existence.

## Methodology Note

All data sourced from live membrane feeds (`hud.primals.eco`). Classification performed by skunky-ingest (Anderson localization, pure Rust). Falsification tests are built into the membrane and run automatically. The reclassification resort was performed by scripts in this repository. All evidence is reproducible from the public feeds.

The membrane is the instrument. The investigation is the measurement. The evidence is self-documenting. The commit history is the lab notebook.

## Citation

```bibtex
@misc{mok2026colony,
  author = {Mok, Kevin},
  title = {Colony Confirmation: Coordinated Harvester Campaign Misclassified as Individual Commensals},
  year = {2026},
  publisher = {ecoPrimals},
  url = {https://defenddetroit.github.io/publicRecord/analysis/colony-confirmation/},
  note = {ORCID: 0009-0004-2141-0321. AGPL-3.0 + CC-BY-SA 4.0 + ORC.}
}
```

---

*The sort said commensal. The evidence says colony. The banana was π the whole time. 🍌π*
