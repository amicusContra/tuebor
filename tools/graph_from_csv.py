#!/usr/bin/env python3
"""Build site/static/graph.json from site/static/graph.csv.

graph.csv is the table of record: one row per connection, each with its kind, its epistemic status
(record / corroborated / inference), an amount where there is one, and the document it comes from.
graph.json is the same table in the shape graph tools read ({nodes, edges}); nothing is added that is not in
the table. Where a row names no source document the edge says so (source_doc: null) instead of leaving it out.
Street addresses and e-mail addresses that sit in a note are not carried over (meta.left_out_of_notes counts them).

usage: python3 tools/graph_from_csv.py [site/static/graph.csv] [site/static/graph.json]
"""
import csv
import json
import os
import re
import sys
from collections import Counter

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, "..", "site", "static", "graph.csv")
DST = sys.argv[2] if len(sys.argv) > 2 else os.path.join(HERE, "..", "site", "static", "graph.json")


def amount(text):
    digits = re.sub(r"[^0-9.]", "", text or "")
    if not digits:
        return None
    value = float(digits)
    return int(value) if value == int(value) else value


def clean(text):
    text = (text or "").strip()
    return text or None


# Two kinds of text in the table's notes are not carried into graph.json: a street address and an e-mail address.
# The connection, its status and its source document stay; only that text is left out, and meta counts how often.
STREET = re.compile(r"\b\d{1,6}\s+(?:[NSEW]\.?\s+)?[A-Z][A-Za-z]+(?:\s+[A-Z][A-Za-z]+){0,2}\s+"
                    r"(?:St|Street|Ave|Avenue|Rd|Road|Dr|Drive|Blvd|Boulevard|Ln|Lane|Ct|Court|Pl|Place|Way|Hwy|Highway|Pkwy)\b\.?"
                    r"(?:,?\s+(?:Apt|Unit|#)\s*\w+)?")
EMAIL = re.compile(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}")
left_out = Counter()


def note(text):
    text = clean(text)
    if not text:
        return None
    text, a = STREET.subn("(street address left out)", text)
    text, b = EMAIL.subn("(e-mail address left out)", text)
    left_out["street_addresses"] += a
    left_out["email_addresses"] += b
    return text


rows = list(csv.DictReader(open(SRC, encoding="utf-8-sig", newline="")))
nodes, order = {}, []
edges = []
for r in rows:
    for side in ("source", "target"):
        nid, label = r[side + "_id"].strip(), r[side + "_label"].strip()
        if nid not in nodes:
            nodes[nid] = {"id": nid, "label": label, "edges": 0}
            order.append(nid)
        nodes[nid]["edges"] += 1
    w = clean(r.get("weight"))
    edges.append({
        "source": r["source_id"].strip(),
        "target": r["target_id"].strip(),
        "type": r["edge_type"].strip(),
        "epistemic_status": r["epistemic_status"].strip(),
        "role": note(r.get("role")),
        "amount_usd": amount(r.get("amount_usd")),
        "note": note(r.get("note")),
        "weight": (float(w) if w and re.fullmatch(r"[0-9.]+", w) else None),
        "source_doc": clean(r.get("source_doc")),
    })

with_amount = [e for e in edges if e["amount_usd"] is not None]
meta = {
    "built_from": "graph.csv",
    "note": "Same rows as graph.csv, nothing added. source_doc null = the table names no document for that row. "
            "Street addresses and e-mail addresses in notes are left out.",
    "left_out_of_notes": dict(left_out),
    "nodes": len(order),
    "edges": len(edges),
    "edges_by_status": dict(Counter(e["epistemic_status"] for e in edges).most_common()),
    "edges_by_type": dict(Counter(e["type"] for e in edges).most_common()),
    "edges_with_source_doc": sum(1 for e in edges if e["source_doc"]),
    "edges_with_amount": len(with_amount),
    "edges_with_amount_and_source_doc": sum(1 for e in with_amount if e["source_doc"]),
    "amount_usd_total": sum(e["amount_usd"] for e in with_amount),
    "amount_usd_by_status": {k: sum(e["amount_usd"] for e in with_amount if e["epistemic_status"] == k)
                             for k in sorted(set(e["epistemic_status"] for e in with_amount))},
}
out = {"meta": meta, "nodes": [nodes[i] for i in order], "edges": edges}
with open(DST, "w", encoding="utf-8", newline="\n") as fh:
    json.dump(out, fh, ensure_ascii=False, indent=1)
    fh.write("\n")
print("graph.json: %d nodes, %d edges (%s); %d edges name a source document; %d carry an amount ($%s), %d of those name a source document"
      % (meta["nodes"], meta["edges"], ", ".join("%s %d" % kv for kv in meta["edges_by_status"].items()),
         meta["edges_with_source_doc"], meta["edges_with_amount"], "{:,.0f}".format(meta["amount_usd_total"]),
         meta["edges_with_amount_and_source_doc"]))
