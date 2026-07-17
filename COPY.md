# K9 — Landing Page Copy

Edit any value below and resend. Each entry is labelled by where it appears on the page, top to bottom. Bracketed glosses `(…)` are the plain-language attributions of technical terms — keep, change, or delete as you like. Text inside **bold** is emphasised on the page.

---

## Nav bar
- **Logo:** K9
- **Logo subtitle:** COUNTER-DRONE · DEFENSE
- **Links:** Threat · System · Status · Roadmap · Vision
- **Button:** Book an intro call  → (opens Calendly)

---

## Hero
- **Eyebrow:** Sovereign counter-drone defense · India
- **Headline (line 1):** When the jammer fails,
- **Headline (line 2):** something has to *hit it.*
- **Sub-line 1:** K9 is an **AI-directed, close-in point-defense system** that physically defeats the drones nobody else can stop — **RF-silent FPV and fiber-optic** attackers (radio-silent; no signal to detect or jam) that fly straight through jamming.
- **Sub-line 2:** See it, classify it, hit it — while friendly aircraft are recognised and left alone.
- **Button 1:** Book an intro call →
- **Button 2:** See the system
- **Tag 1:** Air-gapped edge AI
- **Tag 2:** LLM out of the kill loop
- **Tag 3:** Threat classification — drone vs bird / aircraft
- **Tag 4:** Standalone-first · grid-ready
- **Scan line:** LIVE: AUTONOMOUS DETECT → CLASSIFY → ENGAGE

---

## 01 — The threat
- **Heading:** The drone that ignores your defenses.
- **Paragraph 1:** India's counter-drone stack is overwhelmingly **RF detection and jamming**. That entire layer goes blind against fiber-optic-tethered and fully autonomous FPV drones — no radio to detect, nothing to jam. These are the weapons redefining the modern frontline, and they arrive RF-silent.
- **Paragraph 2:** K9 attacks the white space: **passive detection** — acoustic plus electro-optical vision — paired with **cheap kinetic defeat**. You don't need to hear a radio if you can see it, hear it, and hit it.
- **Stat 1:** RF-silent — Fiber-optic & autonomous FPV
- **Stat 2:** Passive — No emissions to detect us
- **Stat 3:** Kinetic — Physical defeat, low cost/shot

### Comparison panel (right side)
- **Row 1 title:** Legacy RF jamming — badge: **2 / 3 missed**
  - RF drone (caught) · Fiber-optic (missed) · Autonomous (missed)
- **Row 2 title:** K9 · passive + kinetic — badge: **3 / 3 · design target**
  - RF drone (caught) · Fiber-optic (caught) · Autonomous (caught)
- **Note:** **Passive sensing sees the drone regardless of its radio** — every contact is detected, classified as friend or threat, and handed to fire-control for kinetic defeat.

---

## Market gap (below the threat)
### Card A — tag: "The benchmark"
- **Title:** The model's proven.
- **Body:** The clearest proof this category is real is **9 Mothers** (Austin, YC 2026) — AI shotgun turrets for close-in drone defense, already delivering to U.S. forces. But as a U.S., ITAR-controlled system, **any India sale needs case-by-case U.S. export approval — and can never be sovereign or free of a foreign kill-switch**, colliding with India's indigenous-procurement mandate. The playbook is proven; the Indian market is effectively open.

### Card B — tag: "The opening"
- **Title:** A sovereign answer, built in India.
- **Body:** India needs this capability **indigenous, air-gapped (fully offline), and free of foreign kill-switches.** K9 builds the Indian equivalent from open-weight AI on-site — no cloud, no external calls, provenance-controlled. The beachhead: **BSF → Navy → Army Air Defence.**

---

## 02 — The system
- **Heading:** Detect → Track → Aim → Engage.
- **Lead:** A deterministic sensor-to-effector (the weapon) pipeline — from detection to the trigger — running entirely on a hardened edge node (an on-site computer). No generative AI anywhere in the firing chain.

### Stage 01 — Sensors
- **Body:** Passive acoustic direction-finding fused with EO/camera vision — catches the fiber-optic and autonomous drones RF systems can't, and emits nothing itself.
- Mic-array direction-of-arrival (DoA)
- Open-weight EO detector (RF-DETR / D-FINE)
- Threat classification: drone vs bird / aircraft

### Stage 02 — Fire-Control
- **Body:** Detections become tracks; tracks become an aim solution; the solution becomes pan-tilt commands. Classical, low-latency, testable.
- Multi-object tracking
- Aim-solution solver
- Deterministic — no LLM in the loop

### Stage 03 — C2 & Edge
- **Body:** Command & control runs on an on-site edge GPU node — offline, no external calls. Operator sees live tracks; an air-gapped LLM writes after-action reports only, never firing.
- Live track / alert / log dashboard
- Secure boot + disk encryption
- Signed offline update path
- Documented track-export + cue-in interface (ICD — our published integration spec)

### Stage 04 — Effector
- **Body:** A safe stand-in (laser / airsoft) proves the full loop today; a 12-gauge shotgun effector follows post-licence. Same interface — only the muzzle changes.
- Safe stand-in for bench + demo
- 12-ga shotgun (post-licence)
- Faster slew + belt-fed later

### Highlight strip
- **Label:** LLM out of the kill loop
- **Text:** Detect → track → aim → engage is fully deterministic CV/DSP (computer-vision & signal-processing — rule-based, not AI guesswork). The language model lives only in the human / analysis layer — a safety property, engineered in, not an afterthought.

---

## 03 — Where we are
- **Heading:** Model training & bench experimentation — live now.
- **Lead:** Two tracks are running in parallel: the **targeting brain** (vision + fire-control) and the **motion platform** (the bench turret). Both are on the bench today, closing the loop between them.

### Track A — Targeting brain — status: Training
- **Body:** Detector trained across successive drone dataset generations and running live inference (real-time detection) on the bench feed. Now hardening against harder, real-world domains — motion blur, small/distant targets, mixed backgrounds.
- Progress bar: Detection pipeline — Operational
- Progress bar: Tracking & aim engine — Integrating
- Chips: Open-weight, Apache-2.0 (open licence) · Live bench inference · Own dataset growing

### Track B — Motion platform — status: On bench
- **Body:** Bench turret assembled — COTS (commercial off-the-shelf) pan-tilt gimbal, servos driven by an ESP32 microcontroller, and a safe stand-in effector (laser / airsoft). The fire-control loop takes aim commands straight from Track A: detect → track → aim, closing on the bench.
- Progress bar: Pan-tilt (aiming) control loop — In progress
- Progress bar: Closed-loop aim (A→B) — Wiring up
- Chips: COTS gimbal + servos · Safe stand-in effector · ESP32 firmware live

- **Console header:** k9-edge · closed-loop bench · sensor→effector
- **Disclaimer line:** Bench feed shown for capability illustration. Field-validated performance metrics are gated on held-out (unseen), real-world testing — reported honestly at pilot.

---

## 04 — Operational roadmap
- **Heading:** Software on-ramp → licence → kinetic.
- **Lead:** Each phase de-risks the next. Traction and end-user demand are built *before* the hard walls — the arms licence and the kinetic build — are approached.

### P0 · Foundation — Jul – Sep 2026 — [Current]
- **Description:** Software targeting brain + safe bench turret closing the loop; BSF discovery (underway).
- **Ships:** Detect→track→aim on the bench · demo · BSF talks
- **Gate to next:** Closed-loop demo · ₹50L secured · BSF interest
- **Funding:** Bootstrapped

### P1 · Traction & Licence — Oct 2026 – Mar 2027 — [Next]
- **Description:** Deployable software product, an iDEX (govt defence-innovation programme) / BSF pilot, the end-user requirement letter, and the arms licence filed.
- **Ships:** Hardened air-gapped build · operator C2 · pilot deployment
- **Gate to next:** Live pilot + end-user letter + licence filed
- **Funding:** Non-dilutive govt. grants (iDEX/ADITI) or pre-seed ₹1–3 Cr

### P2 · Kinetic PoC — Mar – Dec 2027 — [Planned]
- **Description:** Kinetic proof-of-concept (live-fire) on a range, a fieldable turret, and the first order or LOI.
- **Ships:** 12-ga effector integration · range live-fire PoC · fieldable unit
- **Gate to next:** PoC defeats a drone + licence + order/LOI
- **Funding:** Seed ₹15–40 Cr (estimated)

### P3 · Product line — 2028 + — [Planned]
- **Description:** Faster slew platform, belt-fed variant, counter-Shahed interceptor (against large "kamikaze" attack drones), ammunition via partner.
- **Ships:** High-speed platform · belt-fed · counter-Shahed line
- **Gate to next:** Scaled deployments & repeat orders
- **Funding:** Series A

---

## 05 — The vision
- **Heading:** India's sovereign close-in air defense.
- **Lead:** Software is the on-ramp, not the destination. It makes K9 a legitimate defense entity, wins end-user backing, and turns the arms licence from a cold application into a demand-backed one — funding the kinetic build with proof, not promises.

### Strategy arc (5 steps)
1. **Software brain** — AI detection + fire-control + C2 (command & control) establish K9 as a real defense vendor.
2. **End-user backing** — BSF / Navy demand + the end-user letter unlock the licence path.
3. **Proven capability** — Mechatronics + targeting brain prove we can build the effector (the weapon).
4. **Arms licence** — Approached from traction & demand — not from zero.
5. **Kinetic product** — The turret, then a full point-defense product line.

### Operating principles (4)
1. **Proven, not research** — Integrate proven parts — open CV (computer vision), COTS (off-the-shelf) gimbals, standard effectors. No science-project gates on the critical path.
2. **Sovereign air-gapped edge** — On-site compute, open-weight models, no cloud, no external calls. Air-gapped (fully offline); defense-in-depth by design.
3. **LLM out of the kill loop** — Detect→track→aim→engage is deterministic CV/DSP. The LLM lives only in the human / analysis layer.
4. **Capital-light until traction** — Raise on proof. Non-dilutive grants (iDEX / ADITI); equity only where it accelerates.

---

## 06 — Why this is winnable
- **Card 1 title:** A capability that doesn't exist here
  - **Body:** K9 defeats the RF-silent drones today's jam-based systems miss — passive detection paired with cheap kinetic kill. No fielded Indian system does this. And it's open where every incumbent is closed: a documented track interface, designed to plug into Akashteer/SAKSHAM-class C2 grids (India's air-defense command networks) — standalone-first where no grid exists.
- **Card 2 title:** The scarce asset
  - **Body:** Warm BSF relationships and prospective Navy access — the procurement door and end-user letter most defense startups never reach.
- **Card 3 title:** Timing
  - **Body:** The threat is here now, the U.S. benchmark is structurally locked out of India's sovereign-procurement lane, and non-dilutive defense capital is actively deploying.

---

## Closing call-to-action
- **Eyebrow:** Raising pre-seed
- **Heading:** Back the sovereign answer to the drone threat.
- **Body:** We're applying for **non-dilutive government grants (iDEX/ADITI)** and raising a **pre-seed round (₹1–3 Cr)** — to take the closed-loop system from bench to a BSF pilot and file the licence. Warm intros welcome.
- **Detail line:** Grants + pre-seed ₹1–3 Cr · defense-tech · India
- **Button:** Book an intro call → (opens Calendly)

---

## Footer
- Confidential — for prospective investors only.
- K9 is a working name. Planning material; not an offer of securities.
- **Badge:** Confidential

---

## Hero animation labels (on the moving background)
These render inside the turret animation.
- **Detection box, while identifying:** SCANNING…
- **Detection box, threat:** DRONE · THREAT
- **Detection box, friendly:** FRIENDLY · HOLD
- **Counter label:** THREATS NEUTRALIZED

### Scrolling console log lines (Status section)
1. `[ACOUSTIC]` direction-of-arrival lock · bearing acquired
2. `[VISION]` EO detector online · contact classified: FPV
3. `[CLASS]` friendly rotorcraft recognised · hold fire
4. `[TRACK]` multi-object track established
5. `[FIRE-CTRL]` aim solution computed · pan-tilt slewing
6. `[BENCH]` pan-tilt loop nominal · target centered
7. `[SAFETY]` stand-in effector armed · safe-mode
8. `[C2]` event logged · air-gapped · no external calls
9. `[ICD]` track picture exported · documented interface · grid-ready
10. `[SENSOR]` RF-silent contact — no radio emission detected
11. `[EDGE]` all inference on-site · offline

---

## Config (not copy, but editable)
- **Calendly link:** https://calendly.com/kamaldeep-sodhi19/30min
- **Fallback email (if Calendly can't load):** wozniak@juicelabs.ai
