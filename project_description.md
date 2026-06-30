# Setu: The Peace Intelligence Platform
### *Bridging Communities Through Memory, Truth, and Collective Vigilance*

> *"The arc of the moral universe is long, but it bends toward justice — unless we build the infrastructure to bend it."*

---

## The Problem We Are Solving

Conflict in the twenty-first century does not begin in the streets. It begins in feeds.

Before a single stone is thrown, a digital campaign has already been running for weeks — algorithmically amplified, emotionally engineered, and deliberately targeted at the fracture lines of society: caste, religion, language, displacement, and memory. The mechanics of modern division are extraordinarily sophisticated. Coordinated bot networks manufacture consensus where none exists. Deepfake audio fabricates statements from leaders who never made them. Inflammatory imagery stripped of context spreads through encrypted messaging chains at velocities that outpace every traditional institution of correction — journalism, governance, civil society, and academic fact-checking alike.

Meanwhile, the communities most vulnerable to this infrastructure of hatred — refugees navigating unfamiliar bureaucracies, indigenous populations whose oral traditions exist nowhere in the digital record, survivors of inter-community violence whose testimonies are actively suppressed — have no equivalent platform. They have no architecture of resistance. They are passive recipients of a digital environment they did not design and cannot control.

The five pillars of the SHANTI initiative — inter-community dialogue and peacebuilding, countering misinformation and hate speech, refugee and displaced person support, historical memory and reconciliation, and cross-border collaboration and early warning — are not five separate problems. They are five manifestations of a single underlying failure: the absence of a unified, intelligent, and community-powered digital ecosystem built explicitly in service of pluralism.

Fragmented tools have been tried. Individual fact-checking portals. Isolated refugee resource directories. Unmoderated dialogue forums that collapse into echo chambers within days of launch. None of these approaches achieve systemic impact because they treat symptoms in isolation while the disease — a coordinated, cross-platform, emotionally resonant infrastructure of division — operates as an integrated whole.

**Setu was built because the tools that unite must be as technically sophisticated, as emotionally compelling, and as algorithmically intelligent as the tools that divide.**

---

## The Solution: A Unified Peace Intelligence Ecosystem

**Setu** — derived from the Sanskrit and Hindi word for *bridge* — is a full-stack, browser-accessible Peace Intelligence Platform that operationalizes all five SHANTI pillars through three deeply integrated, mutually reinforcing systems. It is designed not merely as a tool, but as a living digital ecosystem — a space where cultural memory is anchored, misinformation is hunted and neutralized through community action, and the geographic temperature of communal tension is monitored in near real-time.

The platform's architectural philosophy rejects the passive model of civic technology — the resource directory that sits un-updated, the awareness campaign that generates impressions but not action. Setu is built on the principle of *active pluralism*: the belief that sustainable peace is not observed, it is practiced, and that digital platforms have an obligation to design for that practice.

---

## Core Systems

---

### I. The Heritage Memory Map
#### *Preserving the Continuity of Human Culture Against the Erasure of Conflict*
**Addresses: SHANTI Pillars 3 (Refugee Support) & 4 (Historical Memory)**

The Heritage Memory Map is the experiential heart of the Setu platform — an interactive, community-populated cartographic record of living human culture. It functions simultaneously as a decentralized digital museum, a humanitarian resource directory, and a visual proof of the interconnectedness of human civilizations.

**The Cultural Preservation Layer**

When communities are displaced by conflict, partition, or persecution, the first casualty is not always physical — it is epistemic. Their stories disappear from the dominant record. Their shared spaces are renamed, repurposed, or demolished. Their dialects recede with every generation that grows up outside the geographic context that produced them. The Heritage Memory Map exists to make this erasure structurally difficult.

Any authenticated user can place a geographically anchored memory pin anywhere on the globe. The pin can carry any combination of the following media formats: written narrative, photographic documentation, audio recordings of oral history, or video testimony. These submissions undergo a lightweight community moderation process — peer flagging and verified contributor endorsement — before being permanently anchored to the map as nodes in an ever-growing cartographic archive.

The categories of cultural memory the platform is designed to capture include but are not limited to: shared religious practices between communities of different faiths, architectural heritage predating partition or conflict, culinary traditions with cross-community roots, oral literature and folk music, linguistic dialects at risk of extinction, and accounts of historical coexistence that dominant political narratives routinely erase.

When visualized at scale, the Heritage Memory Map produces an effect that no political argument can replicate: it makes visible, in unmistakable geographic terms, that cultures are not isolated silos but profoundly overlapping, mutually constituted webs of shared human experience. A Sufi shrine venerated by both Muslim and Hindu worshippers. A recipe with roots in three religious traditions. A festival that predates every modern political border on the map. The platform allows communities to see their entanglement — and to understand, viscerally, what is lost when that entanglement is severed by hatred.

**The Humanitarian Resource Layer**

The same cartographic infrastructure serves a second, urgently practical function for displaced and vulnerable populations. A separately toggled Support Layer — populated exclusively by verified NGO partners and community organizations through a credentialed access system — displays actionable survival resources: legal aid clinics, emergency accommodation centers, community kitchens, medical outreach programs, mental health support organizations, and official asylum processing locations.

This dual-purpose architecture is not incidental. It is a deliberate design statement: the same map that preserves the historical richness of a community's past also protects the living members of that community in their present. Memory and survival are not separate concerns. They are the same obligation.

**Technical Implementation**

The Heritage Memory Map is built on Leaflet.js with OpenStreetMap tile infrastructure, ensuring global accessibility without commercial API dependency. Pin data is stored in a Supabase PostgreSQL database with PostGIS geospatial extension support for efficient geographic querying. Media assets are stored in Supabase Storage with CDN distribution. The frontend renders map pins as animated SVG nodes with cluster management for high-density regions, maintaining performance across low-bandwidth connections.

---

### II. The Truth Bounty System
#### *Gamified Digital Forensics Against the Infrastructure of Misinformation*
**Addresses: SHANTI Pillars 2 (Countering Misinformation) & 1 (Inter-Community Dialogue)**

The Truth Bounty System is Setu's most technically sophisticated and behaviorally innovative feature. It reconceptualizes the fight against misinformation not as a reactive, institutional burden, but as an active, gamified, community-powered pursuit — structurally modeled on the Capture The Flag paradigm widely used in cybersecurity competitions.

**The Core Problem It Solves**

Traditional fact-checking fails not because fact-checkers lack competence, but because the model is architecturally mismatched to the problem. A professional fact-checking organization can investigate perhaps a dozen claims per day. A coordinated misinformation campaign can seed tens of thousands of false narratives per hour, through encrypted peer-to-peer channels that professional journalists cannot access. The asymmetry is not a matter of effort — it is a matter of scale.

The Truth Bounty System resolves this asymmetry by inverting the model. Instead of concentrating verification capacity in a small team of professionals, it distributes that capacity across an entire community of motivated, equipped, and incentivized digital investigators.

**The Verification Workflow**

When a piece of potentially harmful content — an inflammatory rumor circulating in a local WhatsApp network, a manipulated image designed to attribute violence to a minority community, a fabricated audio clip impersonating a community leader — is submitted to the Setu platform's **Reality Forge**, the system initiates a multi-stage analysis process.

*Stage 1 — Automated AI Scoring*: The submitted text is immediately processed through the Google Perspective API, a machine learning toxicity analysis system developed by Jigsaw (a unit of Google) and currently deployed in production by Wikipedia, The New York Times, and multiple United Nations digital safety initiatives. Perspective API returns a granular breakdown of the content across multiple toxicity dimensions: raw toxicity probability, severe toxicity classification, identity-based attack detection, insult pattern recognition, profanity indexing, and threat identification. This analysis generates the **Reality Score Card** — a visually clear, color-coded summary of the content's assessed harmfulness that is immediately displayed to the submitting user and visible to the broader investigation community.

*Stage 2 — Community Investigation*: The submission enters the open investigation queue. Community members — whose trust levels and investigative permissions are tiered according to their accumulated Trust Point reputation — can access the submission and contribute forensic evidence. This evidence can take several forms: reverse image search results tracing the photograph to an unrelated context or prior publication; metadata analysis of timestamps and geographic coordinates embedded in digital files; cross-referencing with primary source documentation; linguistic analysis tracing coordinated linguistic patterns consistent with bot-generated or centrally directed content.

*Stage 3 — Validation and Neutralization*: When sufficient verifiable evidence accumulates, the community votes to validate or reject the bounty claim. A validated bounty results in three consequential outcomes: the submitter and primary contributors receive Trust Points commensurate with the significance of the debunked claim; the misinformation is permanently marked on the platform as **NEUTRALIZED**, with the correction and evidence archive publicly attached; and the neutralized item is geographically anchored on the Heritage Memory Map, creating a permanent, searchable record of the lie and its refutation at the location where it caused harm.

*Stage 4 — Pattern Escalation*: Validated bounties in a specific geographic region within a defined time window contribute to the Pulse Radar system's tension scoring, creating a seamless data pipeline between community-level verification activity and platform-level early warning.

**The Behavioral Design**

The Truth Bounty System is engineered around a fundamental insight in behavioral psychology: intrinsic motivation, social recognition, and skill-building are more powerful drivers of sustained civic engagement than moral obligation alone. The Trust Points leaderboard is not decorative. It creates a social hierarchy of verified competence that transforms digital investigation into a respected, recognized practice. Over time, high-reputation contributors develop genuine forensic skills — digital literacy competencies that extend beyond the platform and make them more effective citizens in every online environment they inhabit.

---

### III. The Pulse Radar
#### *Geospatial Early Warning for the Prevention of Communal Violence*
**Addresses: SHANTI Pillars 5 (Cross-Border Early Warning) & 1 (Inter-Community Dialogue)**

Prevention is categorically more powerful — and more humane — than intervention. The Pulse Radar is Setu's real-time geospatial tension monitoring system, designed to provide civil society organizations, journalists, and community peacekeepers with the critical advance warning that separates a targeted counter-narrative from a preventable tragedy.

**Architecture and Logic**

The Pulse Radar is not a standalone system — it is an emergent property of the Truth Bounty network. As users submit and geotag misinformation bounties, the platform's backend continuously aggregates the following signals across rolling one-hour, six-hour, and twenty-four-hour temporal windows: submission volume by geographic region; average toxicity score of submissions in that region; proportion of submissions targeting a specific religious, ethnic, linguistic, or caste identity; rate of change in submission frequency (velocity, not just volume); and cross-platform correlation signals where available from partnered data integrations.

A proprietary composite tension index — the **Setu Regional Tension Score (SRTS)** — is computed from these signals using a weighted scoring model calibrated against historical patterns of pre-violence digital activity. When the SRTS for a geographic zone exceeds defined threshold levels, the zone transitions through a visual alert gradient on the map: neutral grey for baseline, amber for elevated attention, orange for active concern, and pulsing red for critical alert requiring immediate organizational response.

**NGO Alert Infrastructure**

Verified organizational partners registered on the Setu platform — NGOs, community peacekeeping organizations, accredited journalists — receive automated alert notifications at each threshold transition, containing: the geographic coordinates and administrative boundaries of the affected zone; the triggering signal breakdown (volume, toxicity, targeting pattern); the current SRTS value and its rate of change; and a direct link to the aggregated, anonymized evidence pool driving the alert.

This provides organizations with a structured, data-backed basis for mobilizing counter-narrative campaigns, initiating emergency community dialogues, requesting government attention, or deploying field resources — hours or days before digital hostility is likely to manifest as physical violence.

---

## Design Philosophy

Setu is built with the conviction that the dignity of its subject matter demands aesthetic excellence, not functional minimalism.

The visual language of the platform draws on the aesthetic heritage of cartographic scholarship, archival documentation, and the rich visual traditions of South Asian manuscript culture — expressed through a contemporary, dark-mode digital interface. The color palette is built around deep navy backgrounds (`#0A0E1A`), warm amber for cultural memory (`#F59E0B`), emerald for humanitarian safety (`#10B981`), and a red-orange tension gradient (`#EF4444` → `#F97316`) for the Pulse Radar. Typography combines Inter for interface clarity and Noto Serif Devanagari for cultural content, reflecting the dual mandate of the platform: precision and humanity.

Every interface decision — the animation curves, the modal transitions, the pin clustering behavior, the color semantics — is made in service of a single experience principle: that engaging with the heaviest subjects of human experience should feel neither clinical nor exploitative, but dignified, immersive, and genuinely respectful of the communities whose stories the platform exists to protect.

---

## Technical Architecture

```
Frontend Layer         Backend Layer           AI & Data Layer
──────────────         ─────────────           ───────────────
Next.js 14             Supabase                Google Perspective API
React 18               ├── PostgreSQL          ├── Toxicity scoring
Leaflet.js             │   + PostGIS           ├── Identity attack detection
CSS Variables          ├── Realtime            └── Threat classification
Framer Motion          ├── Auth
                       └── Storage             OpenStreetMap
                                               └── Map tile infrastructure
```

| Layer | Technology | Rationale |
|---|---|---|
| Frontend Framework | Next.js 14 (App Router) | Server-side rendering, edge deployment, zero install for demo |
| Map Engine | Leaflet.js | Lightweight, open-source, no commercial API dependency |
| Realtime Database | Supabase | PostgreSQL reliability with WebSocket-based live sync |
| Authentication | Supabase Auth | Row-level security, social login, anonymous session support |
| AI Toxicity Analysis | Google Perspective API | Production-grade, UN-validated, free tier for prototyping |
| Media Storage | Supabase Storage | Integrated CDN, direct upload from browser |
| Deployment | Vercel Edge Network | Sub-100ms TTFB globally, automatic preview deployments |

---

## Societal Impact Framework

Setu does not claim to end conflict. It claims to build the infrastructure that makes conflict harder to manufacture and easier to prevent.

By placing the tools of digital forensics in the hands of ordinary community members, it redistributes power in the information ecosystem. By anchoring cultural memory in a permanent, community-governed archive, it makes the erasure of human heritage structurally more difficult. By providing civil society with a real-time geospatial early warning system built on community intelligence rather than surveillance infrastructure, it enhances the capacity of peacekeeping organizations without requiring the compromise of individual privacy.

Most importantly, it establishes that technology built for peace can be as sophisticated, as engaging, and as architecturally ambitious as technology built for division. That is not a minor claim. It is the central premise of the entire platform.

**Setu. The Bridge.**

*Because bridges are not built by standing on one side.*

---

## Platform Pillars Coverage Matrix

| SHANTI Pillar | Setu Feature | Mechanism |
|---|---|---|
| Inter-community Dialogue | Truth Bounty + Heritage Map | Shared investigation + shared history |
| Countering Misinformation | Truth Bounty — Reality Forge | Perspective API + community forensics |
| Refugee & Displaced Support | Heritage Map — Support Layer | Verified NGO resource directory |
| Historical Memory | Heritage Map — Cultural Layer | Community-submitted geolocated archive |
| Cross-Border Early Warning | Pulse Radar — SRTS System | Aggregated tension scoring + NGO alerts |
