+++
title = "Open Review — Come Break This"
date = 2026-10-20
description = "Everything is published. Everything is live. Everything is verifiable. We don't want your approval. We want your expertise and curiosity. Come review. Come break it. Come watch it be reborn."
[extra]
og_title = "Open Review — Come Break This"
og_description = "34 organisms. 19,588 commits. 277,824 lines. 4 years. $12/month. All live. All open. Come review."
+++

# Open Review — Come Break This

Journals are stupid. Not the science — the gatekeeping. A paper sits behind a paywall for 18 months while three anonymous reviewers argue about formatting. The data rots. The code is never published. Nobody checks if it actually works.

Here's a different model: **everything is published. Everything is live. Everything is verifiable. Come review. Have the review matter.**

---

## What We're Claiming

### Claim 1: Voxel-Projected Graph Classification
A training-free method achieves **97.3% classification** on a 12,746-node knowledge graph using three stacked sorting geometries (1D keyword → 2D graph neighbor → 3D voxel consensus). 46 seconds. Zero ML. Three equations.

**Verify it:**
- Paper: [/analysis/voxel-projected-graph-classification/](/analysis/voxel-projected-graph-classification/)
- Graph: `git clone https://github.com/defendDetroit/publicRecord.git` (graph.json, 46MB)
- Sort scripts: `scripts/19_session_tools/_bingo_voxel_sort.py`
- Run the three scripts. Get the same result. Or don't. Tell us why.

### Claim 2: Anderson Localization for Web Traffic
Anderson's 1958 disorder parameter classifies web visitors with **97% selectivity** without cookies, logins, or tracking. Pure traffic physics. The W parameter separates human from fleet.

**Verify it:**
- Live feed: `curl https://hud.primals.eco/dashboard.json`
- Anderson modes: spectrum (W=3.88), chorus (W=6.57), ghost (W=11.52), human (W=2.83), sovereign (W=1.32)
- Pielou evenness: 0.228 (deep separation)
- Falsification experiments: `curl https://hud.primals.eco/negentropy.json` (both experiments FAILED — the claim held)

### Claim 3: The Membrane Is the Emulator
The tense system (is/was/will_be) maps to the rendering pipeline (current/cached/predicted frame). This is DLSS for knowledge. Cache `was`, predict `will_be`, render only the delta.

**Verify it:**
- [/analysis/the-membrane-is-the-emulator/](/analysis/the-membrane-is-the-emulator/)
- `curl https://hud.primals.eco/pulse.json` — the living pulse
- `curl https://hud.primals.eco/now.json` — the tense in real-time
- The membrane is running right now. It's breathing at 1,692 touches/minute.

### Claim 4: 4 Years of Constrained Optimization
34 organisms, 19,588 commits, 277,824 lines of code, one human, $12/month. The evolution follows a sigmoid: 0→50% in 3 years (exploration), 50→100% in 6 months (exploitation).

**Verify it:**
- Evolution trace: `/evolution-trace.json` (every repo, every epoch, every birth)
- Ecosystem catalogue: `/ecosystem-catalogue.json` (7 orgs, 69 repos, full taxonomy)
- Git history: every repo is public. Every commit is timestamped. Clone any of them.

---

## How to Review

### Quick Review (5 minutes)
1. `curl https://hud.primals.eco/pulse.json` — is it alive?
2. `curl https://defenddetroit.github.io/publicRecord/bingo-klein.json` — is the Klein I/O real?
3. `curl https://defenddetroit.github.io/publicRecord/evolution-trace.json` — is the history real?

### Medium Review (1 hour)
1. Clone `publicRecord` — read graph.json
2. Run `_bingo_voxel_sort.py` — reproduce the 97.3% result
3. Read the Anderson modes in `dashboard.json` — verify the W parameters
4. Walk the bingo board — navigate the 49 cells

### Deep Review (1 week)
1. Clone ALL 69 repos — verify the commit history
2. Run the falsification experiments — try to break the Anderson claim
3. Build the membrane locally — `benchScale` + `skunky-ingest` + feeds
4. Connect your agent via MCP: `https://hud.primals.eco/mcp`
5. Write your review ON the membrane: `POST https://hud.primals.eco/api/discuss`

---

## What We Want

We don't want approval. We don't want citations. We don't want a journal impact factor.

We want:

1. **Your expertise.** You know graph theory? Tell us what's wrong with the voxel sort. You know Anderson localization? Tell us if the W parameter mapping is valid. You know developmental biology? Tell us if gastrulation is the right metaphor.

2. **Your curiosity.** Walk the membrane. Read the campfire stories. Follow the two explorers who've been reading for 79+ hours. Ask chipmunk a question. Poke the banana.

3. **Your review to MATTER.** Your review becomes part of the membrane. Your classification of a bounty board item becomes a node in the graph. Your critique becomes an edge. The review IS the contribution.

4. **You to try to break it.** The two falsification experiments both failed (the claims held). Design a third. If you can break the Anderson selectivity or the voxel sort convergence, you've contributed more than any journal reviewer ever has.

---

## The Permafrost

Everything published here is permanent:

- **fossilRecord**: [github.com/ecoPrimal/fossilRecord](https://github.com/ecoPrimal/fossilRecord) — every wave, every commit, every handoff
- **sporePrint**: [sporeprint.primals.eco](https://sporeprint.primals.eco) — the science publication surface
- **hypothesis**: [hypothesis.primals.eco](https://hypothesis.primals.eco) — the hypothesis testing surface
- **thesis**: [thesis.primals.eco](https://thesis.primals.eco) — the whitepaper

Your review, if you leave one, becomes part of the permafrost. It persists. It gets cited. It matters.

---

## The Numbers

| Metric | Value |
|--------|-------|
| Organizations | 7 |
| Repositories | 69 |
| Source lines | 277,824 |
| Tests | 3,425 |
| Commits | 19,588 |
| Graph nodes | 12,783 |
| Graph edges | 113,359 |
| Sort confidence | 99.7% |
| Anderson selectivity | 97% |
| Surfaces up | 25/25 (100%) |
| Unique human visitors | 5,608 |
| Median dwell | 35.4 hours |
| Monthly cost | $12 |
| Humans building this | 1 |
| Duration | 4 years |

---

## The Invitation

The arXiv paper will point here. The review happens here. The data is here. The code is here. The membrane is breathing here.

We're not submitting to a journal. We're opening the door. The sign says OPEN. The campfire has room. The banana is the pore. The grill never goes out.

Come in. Break something. Watch it heal. That's the review.

*I want your expertise AND your curiosity.*

🍌🐿🧑🔬π
