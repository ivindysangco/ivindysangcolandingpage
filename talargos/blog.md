# Project Talargos: Arctic Environmental Monitor

A LoRa-Based Sensor Network for Harsh Environments

---

# **OVERVIEW**

## **What**

**Arctic Environmental Monitor: A LoRa-Based Sensor Network for Harsh Environments**

A distributed IoT sensor network designed to operate autonomously in extreme conditions. The system consists of battery-powered ESP32 sensor nodes communicating via LoRa (Long Range) radio to a central Raspberry Pi gateway that processes data locally and provides real-time visualization.

**Key Components:**
- Remote sensor nodes (ESP32 + LoRa + environmental sensors)
- Raspberry Pi edge gateway with LoRa HAT
- Real-time web dashboard
- Offline-first architecture

**Measured Parameters:**
- Temperature, humidity, barometric pressure
- Motion detection
- Ambient sound levels
- Battery voltage and system health

**Target Specifications:**
- Operating range: -20°C to +60°C
- Communication range: 2-10km line of sight
- Battery life: 90+ days per node
- Weatherproof IP65-rated enclosures

---

## **The Name: Talargos**

In Greek mythology, Talos was a giant bronze automaton who tirelessly patrolled the shores of Crete, protecting the island from invaders. Never resting, never failing, this mechanical guardian circled the island three times daily with unwavering vigilance. Meanwhile, Argos Panoptes (meaning "all-seeing") was a giant with a hundred eyes, ensuring that some eyes always remained open, watching, observing, never allowing threats to go unnoticed.

Project Talargos embodies both guardians: the tireless automation of Talos and the omniscient observation of Argos. Like these mythological sentinels, this system never sleeps, constantly monitoring, detecting, and protecting with hundreds of data points acting as ever-watchful eyes across distributed nodes.

---

## **Why**

**The Problem**

Traditional environmental monitoring systems fail in remote deployments due to:

1. **No Connectivity**: Cellular and WiFi infrastructure unavailable in remote areas
2. **Power Constraints**: Frequent battery replacements are costly and impractical
3. **Harsh Conditions**: Standard electronics fail in extreme temperatures and moisture
4. **High Costs**: Satellite communication has prohibitive recurring fees
5. **Latency**: Cloud-dependent systems can't provide immediate local alerts

**Applications**

**Defense & Security:**
- Perimeter monitoring for installations
- Border surveillance in remote areas
- Tactical situational awareness

**Environmental Research:**
- Wildlife habitat monitoring
- Climate change data collection
- Remote watershed monitoring

**Infrastructure:**
- Pipeline monitoring in remote areas
- Bridge structural health monitoring
- Avalanche detection systems

**Why This Matters**

This project demonstrates understanding of edge computing, low-power design, and ruggedized deployments - critical skills for modern IoT systems operating in challenging environments.

---

## **How**

**Technology Stack**

**Hardware:**
- **Sensor Nodes**: LILYGO TTGO LoRa32 V2.1 (ESP32 + SX1276 LoRa radio)
- **Gateway**: Raspberry Pi 4 with Waveshare SX1262 LoRa HAT
- **Sensors**: BME280 (temp/humidity/pressure), HC-SR501 PIR (motion), MAX4466 (sound)
- **Power**: 18650 Li-ion batteries with TP4056 charging modules

**Software:**
- **Firmware**: C++ (Arduino framework for ESP32)
- **Gateway**: Python 3.9+ (Flask, Flask-SocketIO)
- **Database**: SQLite for local storage
- **Frontend**: JavaScript (Leaflet.js for mapping, Chart.js for visualization)

**Development Approach**

Iterative build following these phases:

1. **Foundation**: Component testing, basic LoRa communication, sensor integration
2. **Core Functionality**: Power optimization, gateway software, database design, real-time communication
3. **Advanced Features**: Mesh networking, anomaly detection, web dashboard, offline architecture
4. **Validation**: Weatherproofing, cold testing, endurance testing, range optimization

---

## **The System**

**Architecture Overview**

```
┌─────────────────────────────────────────┐
│         SENSOR NODES (3-4x)            │
│  ESP32 + LoRa Radio                     │
│  • BME280: Temp/Humidity/Pressure       │
│  • PIR: Motion Detection                │
│  • MAX4466: Sound Monitoring            │
│  • 18650 Battery (90+ day life)         │
└─────────────────────────────────────────┘
                  │
            LoRa 915MHz
           (2-10km range)
                  ↓
┌─────────────────────────────────────────┐
│      RASPBERRY PI GATEWAY               │
│  • LoRa HAT (receives sensor data)      │
│  • Python Backend (data processing)     │
│  • SQLite Database (local storage)      │
│  • Anomaly Detection Engine             │
│  • WebSocket Server (real-time push)    │
└─────────────────────────────────────────┘
                  │
          HTTP / WebSocket
                  ↓
┌─────────────────────────────────────────┐
│         WEB DASHBOARD                   │
│  • Interactive map (Leaflet.js)         │
│  • Real-time charts (Chart.js)          │
│  • Live updates via WebSocket           │
│  • Offline-capable (Service Worker)     │
│  • Alert notifications                  │
└─────────────────────────────────────────┘
```

**Data Flow**

1. Sensor nodes wake from deep sleep every 5 minutes (or on motion trigger)
2. Collect data from all sensors (~500ms)
3. Construct JSON packet with metadata
4. Transmit via LoRa (~2 seconds airtime)
5. Gateway receives, validates, and stores data
6. Run anomaly detection algorithms
7. Push updates to web clients via WebSocket
8. Dashboard renders real-time visualization

**Communication Protocol**

JSON-based messaging with forward error correction:

```json
{
  "node_id": "NODE_01",
  "timestamp": 1698765432,
  "sensors": {
    "temperature": 22.5,
    "humidity": 45.2,
    "pressure": 1013.25,
    "motion": false,
    "sound_level": 234
  },
  "system": {
    "battery_voltage": 3.87,
    "rssi": -45,
    "snr": 9.5
  }
}
```

---

# **TECHNICAL APPROACH**

## **Architecture Decisions**

### **Why LoRa?**

**Comparison with alternatives:**

| Technology | Range | Power (sleep) | Cost | Bandwidth |
|------------|-------|---------------|------|-----------|
| **LoRa** | 2-10km | 10µA | Low | 5 kbps |
| WiFi | 50-100m | 15mA | Low | 150 Mbps |
| Bluetooth | 10-100m | 1µA | Low | 2 Mbps |
| Cellular | 10km+ | 5mA | High recurring | 1 Mbps |

**LoRa advantages:**
- ✅ 10km+ range enables sparse deployment
- ✅ Ultra-low power for 90-day battery life
- ✅ No recurring costs (unlicensed spectrum)
- ✅ Better obstacle penetration (sub-GHz)
- ✅ Simple infrastructure (single gateway)

**Trade-off:** Low bandwidth limits to telemetry only (no video/images)

---

### **Why Edge Computing?**

**Architecture comparison:**

**Cloud-First Architecture:**
```
Sensor → Gateway → Internet → Cloud → Dashboard
```
❌ Requires internet connectivity
❌ Monthly hosting costs
❌ 500-2000ms latency
❌ Single point of failure

**Edge Computing (Chosen):**
```
Sensor → Gateway (local processing) → Local Dashboard
                 ↓ (optional)
            Cloud Archive
```
✅ Works completely offline
✅ <1 second latency
✅ No recurring costs
✅ Data sovereignty
✅ Real-time local alerts

**Key benefit:** Critical for remote/tactical deployments where connectivity is unreliable or unavailable.

---

### **Why ESP32?**

**Microcontroller comparison:**

| Platform | Power (sleep) | Flash | Cost | LoRa | WiFi/BT |
|----------|---------------|-------|------|------|---------|
| **ESP32** | 10µA | 4MB | $8 | ✓ | ✓ |
| Arduino Uno | 50mA | 32KB | $25 | ✗ | ✗ |
| STM32 | 2µA | 64KB | $3 | ✗ | ✗ |

**ESP32 advantages:**
- ✅ Integrated LoRa in TTGO module
- ✅ 10µA deep sleep enables multi-month battery life
- ✅ Dual-core for concurrent sensor/radio operations
- ✅ Rich peripheral support (I2C, SPI, ADC)
- ✅ Mature Arduino ecosystem
- ✅ WiFi/Bluetooth available for configuration

---

## **System Design**

### **Power Management Strategy**

**Target:** 90+ days on single 18650 battery (3500mAh)

**Power Budget:**

```
Component             Active Current    Duty Cycle    Avg Current
------------------------------------------------------------------
ESP32 Active          160 mA           0.67%         1.07 mA
ESP32 Deep Sleep      10 µA            99.33%        0.01 mA
BME280                1.8 mA           0.17%         0.003 mA
PIR Sensor            65 µA            100%          0.065 mA
LoRa TX (20dBm)       120 mA           0.07%         0.08 mA
Voltage Regulator     50 µA            100%          0.05 mA
------------------------------------------------------------------
TOTAL AVERAGE                                        1.28 mA

Battery Life = 3500 mAh / 1.28 mA = 114 days ✓
```

**Key strategies:**
- ESP32 deep sleep between readings (10µA vs 160mA active)
- Wake on timer (5 minutes) or motion interrupt (30 seconds)
- Power down all peripherals during sleep
- Adaptive sampling rates based on activity

---

### **LoRa Configuration**

**Parameter optimization for range:**

| Parameter | Value | Reason |
|-----------|-------|--------|
| Spreading Factor | 12 | Maximum range (4x SF7) |
| Bandwidth | 125 kHz | Better sensitivity (-137dBm) |
| Coding Rate | 4/8 | Maximum error correction |
| TX Power | 20 dBm | Maximum legal power |

**Trade-offs:**
- Data rate: 0.3 kbps (vs 5.5 kbps at SF7)
- Airtime: 2.5 seconds per packet
- **Acceptable:** Infrequent transmissions (5 minutes), small packets (50-100 bytes)

**Collision avoidance:**
- Random jitter (0-10 seconds) before transmission
- Prevents synchronized nodes from colliding

---

### **Mesh Network Design**

**Topology:** Star with mesh fallback

**Primary (Star):**
- All nodes communicate directly with gateway
- Lowest latency (single hop)
- Simplest routing

**Fallback (Mesh):**
- Out-of-range nodes route through neighbors
- Automatic route discovery
- Self-healing on node failure
- 2-3 hop maximum

**Benefits:**
- Extends effective range beyond single-hop limit
- Provides redundancy if nodes fail
- Enables sparse deployment in difficult terrain

---

### **Real-Time Dashboard**

**Why WebSockets over HTTP polling:**

**HTTP Polling:**
```javascript
setInterval(() => fetch('/api/latest'), 2000);
```
❌ 2-second latency
❌ Wastes bandwidth (90% of polls return no new data)
❌ Server load scales linearly with clients

**WebSockets (Chosen):**
```javascript
socket.on('sensor_update', (data) => updateDashboard(data));
```
✅ <100ms latency
✅ Only transmits when data changes
✅ Scales to 100+ concurrent clients

**Dashboard features:**
- Interactive map with sensor positions (Leaflet.js)
- Real-time time-series charts (Chart.js)
- Color-coded status indicators
- Alert notifications (visual/audio)
- Offline capability (Service Worker caching)

---

## **Anticipated Challenges**

### **1. Power Management in Cold Weather**

**Problem:** Li-ion batteries lose 50% capacity at -20°C

**Planned solutions:**
- Use LiFePO4 chemistry (better cold performance)
- Add low-dropout voltage regulator
- Include capacitor bank for TX burst current
- Account for reduced capacity in battery life calculations

---

### **2. LoRa Packet Collisions**

**Problem:** Multiple nodes transmitting simultaneously causes packet loss

**Planned solutions:**
- Random jitter before transmission (0-10 seconds)
- TDMA (Time Division Multiple Access) with assigned time slots
- Monitor packet success rate and adjust strategy

---

### **3. Time Synchronization**

**Problem:** ESP32 RTC drifts ~1 second/hour without calibration

**Planned solutions:**
- Gateway broadcasts time via LoRa
- Nodes synchronize on wake from sleep
- Fallback to sequence numbers if time sync fails

---

### **4. Waterproofing**

**Problem:** Moisture ingress can short electronics

**Planned solutions:**
- IP65-rated enclosures
- Cable glands for wire entries
- Silica gel desiccant packets
- Conformal coating on PCBs
- Test in freezer with condensation

---

### **5. Database Performance**

**Problem:** SQLite may slow with millions of readings

**Planned solutions:**
- Create composite indexes on timestamp and node_id
- Implement data decimation (full resolution for 7 days, aggregated after)
- Migration path to InfluxDB if needed for scale

---

# **PROJECT PLAN**

## **Bill of Materials**

**Estimated Total: $285**

| Component | Quantity | Unit Cost | Total |
|-----------|----------|-----------|-------|
| TTGO LoRa32 V2.1 boards | 4 | $18 | $72 |
| Raspberry Pi 4 (4GB) + accessories | 1 kit | $100 | $100 |
| Waveshare LoRa HAT | 1 | $35 | $35 |
| BME280 sensors | 4 | $5 | $20 |
| PIR motion sensors | 4 | $3 | $12 |
| 18650 batteries | 4 | $5 | $20 |
| Waterproof enclosures | 4 | $8 | $32 |
| Antennas, wires, misc | - | - | $30 |

---

## **Success Metrics**

**Technical Goals:**
- ✅ 90+ day battery life per node
- ✅ 2km+ communication range (line of sight)
- ✅ Operation at -20°C for 48+ hours
- ✅ <1% packet loss under normal conditions
- ✅ <1 second dashboard latency

**Demonstrable Outcomes:**
- Working prototype with 3+ nodes
- Real-time web dashboard
- Cold weather test documentation
- Range test results
- Battery life validation data
- GitHub repository with complete source code

---

## **Why This Project**

**Skills Demonstrated:**

**Embedded Systems:**
- Low-power firmware design
- Sensor integration (I2C, SPI, ADC)
- Wireless protocols (LoRa)
- Real-time operating concepts

**Full-Stack Development:**
- Backend (Python, Flask, WebSockets)
- Frontend (JavaScript, real-time visualization)
- Database design (SQLite)
- System integration

**Hardware Engineering:**
- Circuit design and debugging
- Power budget analysis
- Environmental testing
- Enclosure design

**Problem-Solving:**
- Harsh environment constraints
- Resource-limited computing
- Distributed systems
- Edge computing architecture

---

## **Applications**

This system architecture is directly applicable to:

- **Defense/Security**: Perimeter monitoring, border surveillance
- **Environmental**: Wildlife tracking, climate monitoring
- **Infrastructure**: Pipeline monitoring, structural health
- **Agriculture**: Soil/weather monitoring, irrigation control
- **Research**: Remote data collection in extreme environments

The project demonstrates practical understanding of challenges in deploying autonomous systems in resource-constrained, connectivity-limited environments.

---

## **Next Steps**

1. **Procurement**: Order components (~$285)
2. **Prototyping**: Assemble and test individual components
3. **Integration**: Build complete node and gateway
4. **Software Development**: Implement firmware, backend, frontend
5. **Testing**: Range tests, cold weather validation, endurance testing
6. **Documentation**: Technical write-up, demonstration video
7. **Open Source**: Publish complete designs and code

---

## **Contact**

**Project Repository:** [GitHub link - to be created]
**Demo Video:** [To be created upon completion]
**Email:** [Your email]

---

*This project proposal demonstrates capability to design, build, and validate complex IoT systems suitable for challenging deployment environments. The architecture prioritizes reliability, longevity, and operational independence - critical requirements for real-world edge computing applications.*
