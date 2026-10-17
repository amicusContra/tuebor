+++
title = "Network Matrices — Machine-Readable Graph Data"
description = "Adjacency matrices showing who connects to whom, money flows, board memberships, and court assignments."
weight = 99
date = 2026-09-24
updated = 2026-09-25

[extra]
keywords = "Detroit charter school network graph, Brian Banks network analysis, adjacency matrix corruption, money flow Detroit schools, judicial capture matrix, graph data Detroit investigation"

[taxonomies]
actors = ["Brian Banks", "Joseph Holland", "Judge Cylenthia Miller", "Judge Tenisha Yancey", "Judge Aliyah Sabree", "Eric Sabree"]
entities = ["Purpose Charter Academy", "MacDowell Preparatory Academy", "The Purpose Group LLC", "Purpose Foundation", "Banks Strategy LLC"]
courts = ["Wayne County 3rd Circuit Court", "36th District Court", "Wayne County Probate Court", "Oakland County Circuit Court"]
connections = ["board membership", "campaign finance", "family", "employment", "business entity"]
+++

This page is the **machine-readable layer** of the network map. The [Mermaid diagrams](/network/) show the network visually. These matrices show it **computationally** — every relationship as a cell in a table, every money flow as a row in a ledger.

## Download Formats

| Format | URL | Use Case |
|--------|-----|----------|
| **JSON Graph** | [/graph.json](/graph.json) | 37 nodes, 57 typed edges. For D3.js, NetworkX, Neo4j, AI agents. |
| **CSV Edge List** | [/graph.csv](/graph.csv) | One row per edge. For Excel, Gephi, pandas, R. |
| **This Page** | You're here | Human-readable matrices for visual inspection. |

---

## Board Membership Matrix {{ confidence(level="verified") }}

**Who governs what.** Every cell is a public record. Blank = no documented role.

| Person | PCA | MacDowell | Purpose Foundation | Anchor Rock | Bank on Banks PAC | OFA Michigan |
|--------|:---:|:---------:|:-----------------:|:-----------:|:-----------------:|:------------:|
| **{{ actor(key="banks") }}** | Superintendent | Superintendent | President + Agent | — | — | — |
| **{{ actor(key="holland") }}** | — | — | Secretary + Treasurer | — | Treasurer | Officer |
| **{{ actor(key="miller") }}** | **Board Chair** | — | — | Board Chair (dissolved) | — | — |
| **{{ actor(key="yancey") }}** | — | **Board Chair** | — | — | — | — |
| **Lamar Moreland** (Asst. AG) | Board Vice Chair | — | — | — | — | — |
| **Latisha Johnson** (City Council) | Board Secretary | — | — | — | — | — |

**Pattern**: Two convicted felons control the revenue entities (schools + CMO + foundation). Three judges + two government officials govern the boards. The felon and the judge sit on the same org chart.

---

## Court Assignment Matrix {{ confidence(level="verified") }}

**Which judges sit where.** The enterprise generates cases in Wayne County courts. These judges have documented connections to the enterprise.

| Judge | Court | Connection to Enterprise | Status |
|-------|-------|------------------------|--------|
| {{ actor(key="miller") }} | **Wayne 3rd Circuit** | PCA Board Chair | Active — ballot Nov 2026 |
| {{ actor(key="sabree") }} | **Wayne 3rd Circuit** (Family) | MSU Law classmate · father = Treasurer | Active — appointed May 2025 |
| {{ actor(key="ramsey") }} | **Wayne 3rd Circuit** (Criminal) | 2 family on MacDowell payroll | Active |
| {{ actor(key="evans") }} | Wayne 3rd Circuit | 21-year mentor | Retired (JTC) |
| {{ actor(key="yancey") }} | **36th District** | MacDowell Board Chair · paid $383.82 | Active |
| {{ actor(key="adam_sabree") }} | **36th District** | Eric Sabree's son · Metro Property RICO | Active |
| {{ actor(key="sean_perkins") }} | **36th District** | Brother = Banks' attorney | Active |
| {{ actor(key="perkins_david") }} | **Probate Court** | Family donations · guardianship jurisdiction | Active |
| {{ actor(key="langford_morris") }} | Oakland County | Wrote book foreword with fake J.D. | Retired (JAMS) |

**Coverage**: 4 judges in 3rd Circuit, 3 judges in 36th District, 1 in Probate, 1 in Oakland. Any case involving Banks' network in Wayne County risks landing before a connected judge.

---

## Money Flow Matrix {{ confidence(level="verified", note="All amounts from CFRS, TransparencyUSA, or audited financials") }}

### School Revenue Extraction

| From | Through | To | Amount | Rate | Source |
|------|---------|----|---------:|------:|--------|
| State of Michigan | MacDowell Prep | Purpose Group LLC → Banks | $4,285,201/yr | 72.67% | Audited financials |
| State of Michigan | Purpose Charter Academy | Purpose Group LLC → Banks | TBD | TBD | First year FY2026 |
| Purpose Group LLC | Management fee gap | **Unaccounted** | $348,489/yr | — | Budget analysis |

### Campaign → Enterprise Payments

| From | To | Amount | Year | Note | Source |
|------|----|---------:|------|------|--------|
| Yancey campaign | Banks Strategy LLC | $383.82 | 2024 | Sole contribution AND sole expenditure | CFRS |
| Yancey campaign | Inner Link Graphics | $8,025 | Multiple | Campaign vendor | TransparencyUSA |
| Miller campaign | Banks Strategy LLC | Unknown | — | Vendor relationship documented | CFRS |
| McKinney campaign | Darryl Banks Jr. | $2,283 | 2024 | Extended Banks family member | TransparencyUSA |
| McKinney campaign | Darryl Banks Jr. | $4,483 | Total | Cumulative across cycles | TransparencyUSA |

### Enterprise Self-Dealing Loop

```
State per-pupil funding
    → Schools (PCA + MacDowell)
        → Purpose Group LLC (72.67%)
            → Banks (sole member, salary + fees)
                → Banks Strategy LLC (consulting entity)
                    ← Judge campaign payments ($383.82+)
                        ← Judges who hear enterprise cases
                            ← Cases generated by enterprise schools
```

---

## Family Matrix {{ confidence(level="verified") }}

| Person A | Relationship | Person B | Institutional Overlap |
|----------|:------------:|----------|----------------------|
| Eric Sabree | Father | Judge Aliyah Sabree | Treasurer → 3rd Circuit (Family Division) |
| Eric Sabree | Father | Judge Adam Sabree | Treasurer → 36th District Court |
| Todd Perkins | Brother | Judge Sean Perkins | Banks' attorney → 36th District Court |
| OD Banks | Father | Brian Banks | BMF Defendant #22 → Enterprise leader |
| Kelly Ramsey | Mother/family | 2 employees | Judge → MacDowell payroll |

---

## Institutional Conflict Matrix {{ confidence(level="verified") }}

**Where personal roles conflict with institutional duties.**

| Person | Personal Role | Institutional Role | Conflict |
|--------|-------------|-------------------|----------|
| {{ actor(key="miller") }} | PCA Board Chair | 3rd Circuit Judge | Governs school · hears cases from school families |
| Lamar Moreland | PCA Board Vice Chair | **Asst. Attorney General** | AG has RICO/nonprofit fraud jurisdiction |
| Latisha Johnson | PCA Board Secretary | **City Council Member** | Council oversees DPSCD (PCA's authorizer) |
| {{ actor(key="yancey") }} | MacDowell Board Chair | 36th District Judge | Chairs school board · paid school's owner |
| {{ actor(key="gay_dagnogo") }} | Banks' political ally | **City Ombudsman** | Former charter authorizer now handles Detroit complaints |
| Eric Sabree | Father of 2 judges | **County Treasurer** | Tax foreclosure pipeline intersects enterprise |

---

## For Analysts and AI Agents

### Python (NetworkX)
```python
import json, networkx as nx

with open('graph.json') as f:
    data = json.load(f)

G = nx.DiGraph()
for n in data['nodes']:
    G.add_node(n['id'], **n)
for e in data['edges']:
    G.add_edge(e['source'], e['target'], **e)

# Find all paths from state funding to Banks
for path in nx.all_simple_paths(G, 'macdowell', 'banks'):
    print(' → '.join(path))

# Centrality — who is the most connected?
cent = nx.degree_centrality(G)
for node, score in sorted(cent.items(), key=lambda x: -x[1])[:5]:
    print(f"{G.nodes[node].get('label', node)}: {score:.3f}")
```

### R (igraph)
```r
library(igraph)
edges <- read.csv("https://detroit.primals.eco/graph.csv")
g <- graph_from_data_frame(edges[, c("source_id", "target_id")], directed = TRUE)
plot(g, vertex.label = V(g)$name, vertex.size = degree(g) * 3)
```

### Gephi
1. Download [graph.csv](/graph.csv)
2. Import as Edge Table (source_id → target_id)
3. Use `edge_type` for edge coloring, `weight` for thickness

---

*All data derived from public records. Graph data is CC-BY-SA-4.0. Clone the [repository](https://git.primals.eco/publicRecord/detroit) for the full evidence package.*
