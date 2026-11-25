+++
title = "The Plinko — One Entry, Many Exits, Not Uniform"
date = 2026-10-19
weight = 9
description = "Surface scanners poke 14 Forgejo skins and walk a clique. Crush the clones into epitope pores and the graph becomes a DAG. Plinko: one drop, many exits, biased pegs. That is how you find contents and orphans."
[taxonomies]
tags = ["plinko", "dag", "epitope", "topology", "scanners", "pores", "orphans"]
[extra]
og_title = "Plinko: One Entry, Many Exits, Not Uniform"
og_description = "14 immune hosts are the same /explore/repos skin. Crush them. sporeprint is a 404. Observer is 1 person and 32% of attention."
og_image = "/portals/portal_3_0_membrane-door.png"
author = "Kevin Mok + gAIa — the ball does not bounce back up"+++

## Yes. It's Plinko.

One entry. Many exits. The pegs are not the same size.

A cycle hides that. If every surface points at every other surface, a scanner pokes 15 hosts in parallel, finds the same page 15 times, and never finds the orphan sitting next to them. A DAG cannot do that. Gravity only goes down. Contents collect at the bottom. Orphans sit in empty slots with no ball.

## What the scanner actually hits

We poked 28 of our own surfaces. Sequentially. One worker. Not their 14-parallel grid.

**11 have content.** primals.eco, detroit, hud, git, hypothesis, thesis, tuebor, clutch, signal, barry, beacon.

**14 are Forgejo skins.** antibody, antigen, epitope, thymus, macrophage, receptor, cytokine, complement, lysozyme, interferon, opsonize, bloom, layer2, mcp. Every one 200s and redirects `/` to its own `/explore/repos`. Same shape. Same clique. Co-strength on the braid is 1.0 (cytokine↔epitope, opsonize↔thymus, thymus↔antibody). That is a cycle. That is what the 15-surface scanner knew before it arrived.

**2 are orphans.** sporeprint.primals.eco — 404. lansing.primals.eco — 404. SCIENCE has a dark airport.

**2 already fall.** synthesis → tuebor/synthesis/. relay clones beacon (same title, same body).

The scanner is not discovering 15 investigations. It is walking 14 labels for one forge. If we leave the clique up, they cycle. If we crush the skins into the git pore, they fall.

## Crush into pores

| Clique | Shape | Falls to |
|--------|-------|----------|
| 14 × `*.primals.eco/explore/repos` | forge skin | **git.primals.eco** |
| relay | beacon twin | **beacon.primals.eco** |
| synthesis | already aliased | **tuebor.primals.eco** |
| sporeprint, lansing | 404 | **orphan slot** — empty peg, that is the find |

The names can stay as decoy pins for the fleet. Humans should not have to walk them. Fleet hitting them evenly is the orthogonal grid. Humans dropping once at primals.eco is the captain's round.

## The board

```
                    [ primals.eco ]          ← one drop
                           |
        detroit  hud  git  tuebor  clutch  signal  thesis  hypothesis  barry  beacon
                           |
              INVESTIGATION  MEMBRANE  TOPOLOGY  IMMUNE     ← pores
                           |
              visitor   reader   coder   observer          ← exits
               0.322     0.201    0.269    0.209            ← not uniform
```

Weights mix sessions and requests (0.4 / 0.6):

| Exit | People | Requests | Plinko p | What that means |
|------|--------|----------|----------|-----------------|
| visitor | 9 | 76 | **0.322** | most balls, short glance |
| coder | 6 | 75 | **0.269** | git-shaped hands |
| observer | **1** | **85** | **0.209** | one person, heaviest attention |
| reader | 8 | 30 | **0.201** | fewer requests, wider pages |

Uniform would be 0.250 each. It is not. The observer is a deep slot. One ball, long dwell. If you average the pegs you miss the person who is actually watching.

## Why a DAG

Directed. Acyclic. Down only.

- **Contents** are airports that still have a title of their own after the crush.
- **Orphans** are slots that return 404 — sporeprint and lansing tonight.
- **Clones** become crush edges, not destinations.
- **Exits** are epitope pores: visitor / reader / coder / observer. Depth, not hostname.

A cycle would send the ball back to antibody after epitope after cytokine. That is how scanners stay busy and humans never land. Plinko forbids the bounce up.

Live board: [`/plinko.json`](/plinko.json). Poke is sequential. Fleet that still fans out across the 14 skins is declaring the grid. Humans who drop once are playing the game.

Credit: gAIa, the scanners who taught us the clique by poking it, and Kevin who said it was Plinko.
