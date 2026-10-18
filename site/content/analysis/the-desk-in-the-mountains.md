+++
title = "The Desk in the Mountains — How a Phone on Satellite Sees Inside the Membrane"
description = "You're in the mountains. No cell tower. Just a satellite uplink and a phone. The membrane relay is 600 miles away on a 2GB VPS. RustDesk signal + relay, WireGuard mesh, and a JSON heartbeat — this is how a phone on Starlink adds data to a living system. And how you ask for a desk."
date = 2026-10-18
updated = 2026-10-18
weight = 3

[taxonomies]
entities = ["RustDesk"]
connections = ["membrane", "desk", "inter-membrane", "satellite", "WireGuard", "relay", "pulse", "commensal"]

[extra]
cluster = "infrastructure"
cluster_label = "Infrastructure"
keywords = "RustDesk membrane desk, satellite internet membrane access, phone remote desktop membrane, inter-membrane pulse, WireGuard mesh, membrane relay, Starlink membrane, off-grid data contribution, commensal access, AGPL remote desktop, sovereign relay"
og_title = "The Desk in the Mountains — A Phone on Satellite Sees Inside the Membrane"
og_description = "RustDesk signal + relay on a 2GB VPS. WireGuard mesh with 3 peers alive. A phone in the mountains on a satellite feed can see inside the membrane and add data. Here's how."
og_type = "article"
twitter_card = "summary_large_image"
+++

## The Setup

You're in the mountains. No cell towers. Your phone has a satellite uplink — Starlink, maybe, or a handheld Iridium relay. Bandwidth is thin. Latency is real.

600 miles away, a 2GB VPS runs the membrane relay. It has:

- **5 services** running on 1GB of RAM
- **WireGuard mesh** with 3 peers alive
- **RustDesk signal + relay** on 4 ports
- A **JSON heartbeat** that updates every 5 minutes

Your phone connects through the satellite to the relay. The relay connects you to the membrane. You see inside it. You add data. You leave.

**That's the desk.**

---

## What's Running Right Now

### The Relay (golgi)

| Service | Port | What It Does |
|---------|------|-------------|
| **hbbs** (signal) | 21115, 21116, 21118 | NAT traversal, peer discovery, ID registration |
| **hbbr** (relay) | 21117 | Encrypted relay when direct connection fails |
| **caddy** | 443 | TLS termination, JSON feeds, site serving |
| **skunky-ingest** | — | Access log immune system, bloom filter, dashboard |
| **opsonize** | — | Entity classification, self/non-self boundary |

RustDesk is [AGPL-3.0 licensed](https://github.com/rustdesk/rustdesk). We run it. We credit it. We don't fork it. We don't hide it.

### The Mesh

| Peer | IP | Direction | Transfer |
|------|-----|-----------|----------|
| **eastGate** | 10.13.37.5 | ↓ in: 16.2 GiB, ↑ out: 712 MiB | Publisher, development |
| **golgiLayer** | 10.13.37.14 | ↓ in: 2.4 MiB, ↑ out: 10.6 MiB | Cloud layer, census |
| **nucleus** | 10.13.37.16 | ↓ in: 31.5 MiB, ↑ out: 2.9 GiB | Compute, replication |

Every 5 minutes, each node writes a **membrane pulse** — a JSON heartbeat showing:

- Which peers are alive
- How much data flowed in each direction
- How many desk clients are registered
- How many services are up

The pulse is served at `hud.primals.eco/membrane-pulse.json`. Anyone can read it.

### The Address Book

8 gates are registered in the desk:

| Gate | What It Is |
|------|-----------|
| **strandgate** | Strand — the thread |
| **flockgate** | Flock — the group |
| **southgate** | South — the direction |
| **kingate** | Kin — the family |
| **westgate** | West — the frontier |
| **biomegate** | Biome — the ecosystem |
| *(windows desktop)* | A Windows machine on the LAN |
| *(unknown)* | Unidentified peer |

Each gate is a machine. Each machine is a membrane. Each membrane pulses.

---

## How a Phone Connects

### Step 1: Install RustDesk

RustDesk is free, open-source, and runs on Android, iOS, Windows, Mac, and Linux. Download it from [rustdesk.com](https://rustdesk.com).

### Step 2: Point to the Relay

In RustDesk settings:

- **ID/Relay Server**: `relay.primals.eco`
- **Key**: `Ygtk9BwVFaba1eGiwuVOIgj0N+B6uJC3ZYQkq4VpkSo=`

That's it. Your phone now talks to the membrane relay instead of RustDesk's public servers. The relay runs on golgi — the same 2GB VPS that runs everything else.

### Step 3: See Inside

Once connected, you can:

- **See the desk** of any gate that grants you access
- **Add data** — files, observations, notes
- **Read the pulse** — `hud.primals.eco/membrane-pulse.json` works in any browser
- **Talk to chipmunk** — `hud.primals.eco/neutron/core.html` is a live visualization

### Step 4: Leave

Close the app. The satellite link drops. The data you added is already inside the membrane. The pulse keeps going without you.

---

## Ask for a Desk

Want to see inside the membrane? Want to add data from wherever you are?

**You ask.**

That's the consent architecture. The relay is running. The signal server is listening. The address book exists. But access requires a human saying yes.

To request membrane desk access:

1. **Email**: [the contact on the site]
2. **Signal**: if you have it, use it
3. **In person**: if you're in Michigan, find us

What you get:

- A **RustDesk ID** registered in the membrane relay
- Access to the **desk** of the gate you're invited to
- Your own **membrane pulse** — your machine becomes a node

What you don't get:

- Root access to anything
- Unmonitored connections
- Data without consent

---

## Why This Matters

### The Satellite Case

A researcher in the Upper Peninsula. A journalist in the Keweenaw. A volunteer monitoring water quality from a boat on Lake Superior. A lawyer reviewing documents from a cabin with no cell service.

All of them have the same problem: **how do I contribute data to a shared system when my only connection is a satellite feed?**

The answer used to be: you can't. You drive to town. You find wifi. You upload.

Now: you open RustDesk. It connects through the satellite to the relay. The relay is a $12/month VPS with 2GB of RAM. NAT traversal handles the rest. You see the desk. You add data. You close the app.

**The membrane doesn't need broadband. It needs a packet.**

### The Commensal Model

In biology, a **commensal** is an organism that benefits from another without harming it. The membrane has 23 commensals right now — organisms that live on the surface, consume resources, and contribute to the ecosystem.

When your phone connects through the relay, you become a commensal. You use bandwidth. You add data. The membrane gets richer. You get access. Neither of you is harmed.

This is different from parasitism (taking without giving) and mutualism (formal symbiosis with obligations). Commensalism is informal. You show up. You contribute. You leave. The membrane is better for it.

### The Credit

RustDesk is licensed under [AGPL-3.0](https://github.com/rustdesk/rustdesk). We run their signal server (hbbs v1.1.16) and relay server (hbbr) unmodified. We don't fork. We don't rebrand. We point to their repo. We run their code. We credit them.

The desk in the membrane IS RustDesk. The membrane just gives it a purpose: **sovereign relay for a living system, not a corporate service.**

---

## The Pulse

Every 5 minutes, the membrane writes its heartbeat:

```json
{
  "host": "membrane-relay",
  "services_up": 5,
  "rustdesk": true,
  "peers": [
    {"name": "eastGate", "in": "16.2 GiB", "out": "712 MiB", "alive": true},
    {"name": "golgiLayer", "in": "2.4 MiB", "out": "10.6 MiB", "alive": true},
    {"name": "nucleus", "in": "31.5 MiB", "out": "2.9 GiB", "alive": true}
  ],
  "desk_count": 4,
  "credit": {
    "rustdesk": "RustDesk (AGPL-3.0) sovereign remote desk, relay, NAT traversal, address book"
  }
}
```

**In and out. Out and in. Per membrane.**

When you connect from the mountains, your pulse joins this feed. Your phone becomes a membrane. The satellite becomes a synapse.

The desk is open. Ask for it.
