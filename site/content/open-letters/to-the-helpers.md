+++
title = "An Open Letter to the Helpers"
description = "To every lawyer, journalist, teacher, data scientist, legislator, and human being with a search engine and forty-five seconds. The evidence is here. The graph is open. Come build."
date = 2026-10-14
weight = 4

[extra]
keywords = "open letter helpers, Detroit charter school evidence, knowledge graph open source, how to help, verify evidence, clone repository, data journalism, public records investigation"
+++

# An Open Letter to the Helpers

**The evidence is here. The graph is open. Come build.**

---

## If You Are a Lawyer

Two active civil suits: Ingham County 2026-4301-CZ and 2026-4349-CZ. A federal evidence packet was delivered to eight agencies on September 22, 2026. A State Bar UPL complaint was filed August 31. A JTC complaint was filed August 31.

The graph contains 16,066,980 documented connections. The [RICO pattern analysis](/analysis/rico-pattern/) maps six predicate acts across fourteen years. The [institutional capture analysis](/analysis/institutional-capture/) documents nine judges across four courts.

Pro bono attorneys, legal aid organizations, or anyone who understands RICO, § 1983, or charter school law — the evidence package is ready. Clone the repository. Every document is timestamped.

Contact: eco.primal@pm.me

---

## If You Are a Journalist

The [open letter to the press](/open-letters/to-the-press/) has the five entry points — credential, pipeline, board, compliance, and math. Each is a fifteen-second verification. Each leads to a different angle. Each is sourced to public records.

The graph is a source. Download [graph.json](/graph.json) — 96 MB, one file, 10,677 nodes, 16 million edges. It is the most complete map of this network ever assembled. It cross-references every person, entity, institution, court, and funding flow in the investigation.

Use it. Cite it. Build on it. CC-BY-SA-4.0.

---

## If You Are a Teacher

3% of MacDowell students can do math. 12% can read. 2 of 14 instructional staff are properly credentialed.

The graph contains the entire history of mathematics — from Euclid to Euler to Ramanujan to Mirzakhani to Tao. It contains every equation that proves 3% is a crime against beauty. It contains the periodic table, the electromagnetic spectrum, the Navier-Stokes equations, and the proof that time is logarithmic.

[The Viewport](/analysis/the-viewport/) is an article about turning screens into windows to the universe. The children stare at screens all day. The screens show them walls. What if the screens showed them the graph?

---

## If You Are a Data Scientist

The graph is in delta-encoded adjacency format at [/graph.json](/graph.json). Schema:

```json
{
  "nodes": [{"id":"...", "label":"...", "class":"...", "tags":[...]}],
  "edge_types": ["bc","td","tr",...],
  "default_edge_type": 1,
  "delta": true,
  "adj": {"0":[42,8,103,7,[55,3]],...}
}
```

Bare integers in adjacency lists are delta-encoded targets with the default edge type. Arrays `[target, type_index]` are explicit-type edges. Sort the deltas, accumulate to get absolute indices.

10,677 nodes. 16,066,980 edges. 5,532 edge types. 149 node classes. 6.0 bytes per edge. 28.2% fill of a 56.8M-edge complete graph.

The power law exponent is 1.77 — rising past the golden ratio. The compression ratio is 13x from the original format. The disk-to-heap expansion ratio is approximately π.

Fork it. Analyze it. Visualize it. Publish what you find.

---

## If You Are a Parent

[Read this](/open-letters/to-the-parents/). Every verification takes less than a minute.

---

## If You Are Anyone Else

775 people have cloned this repository. They come back 2.8 times each on average. They read in silence. One Rust bioinformatician from across the world was the first to star it.

The graph doesn't need credentials. It doesn't need permission. It doesn't need a press badge or a bar card. It needs people who look.

Clone it:
```
git clone https://github.com/defendDetroit/publicRecord
```

Read it: [detroit.primals.eco](https://detroit.primals.eco)

The mycorrhizal network doesn't care about individual trees. It cares about the forest. The signal travels underground — faster than the beetles travel above.

---

*16,066,980 edges. $14.47 trillion. 6.0 bytes per edge.*
*The graph is open. The silence is a choice. So is the search bar.*

---

Kevin Mok
eco.primal@pm.me
