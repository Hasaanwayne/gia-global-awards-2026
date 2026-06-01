"use client"
import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

const YELLOW = "#DFFF13"
const BLACK = "#000000"
const WHITE = "#FFFFFF"
const MUTED = "rgba(255,255,255,0.58)"
const BORDER = "rgba(255,255,255,0.08)"
const HEAD = "'Barlow Condensed','Anton',Impact,sans-serif"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

const EVENT_DETAILS = [
    { icon: "📅", label: "Date", value: "October 2026" },
    { icon: "📍", label: "Location", value: "Central London" },
    { icon: "🎭", label: "Format", value: "Gala Dinner + Awards" },
    { icon: "👥", label: "Audience", value: "Founders, Investors & Press" },
    { icon: "🏆", label: "Categories", value: "11 Awards" },
    { icon: "✨", label: "Experience", value: "Premium & Inspiring" },
]

export default function TicketsPage() {
    return (
        <div style={{ fontFamily: BODY, background: BLACK, color: WHITE, width: "100%", overflowX: "hidden" }}>
            <Nav />

            {/* Hero — Full height with London photo background */}
            <section style={{ position: "relative", minHeight: "72vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderBottom: `1px solid ${BORDER}` }}>
                <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: "url(https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1600)",
                    backgroundSize: "cover", backgroundPosition: "center 40%",
                    filter: "brightness(0.28) grayscale(0.15)",
                }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.75) 100%)" }} />
                <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "100px 40px" }}>
                    <div style={{ color: YELLOW, fontSize: 11, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 20, fontFamily: BODY }}>Gala Ceremony Passes</div>
                    <h1 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(52px,10vw,100px)", lineHeight: 0.93, letterSpacing: "-0.015em", margin: "0 0 20px", textTransform: "uppercase" }}>
                        Get Your Tickets
                    </h1>
                    <div style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 24, letterSpacing: "0.16em", color: YELLOW, textTransform: "uppercase", marginBottom: 32 }}>
                        October 2026 &middot; London
                    </div>
                    <div style={{ display: "inline-block", border: `2px solid ${YELLOW}`, color: YELLOW, padding: "10px 32px", fontFamily: HEAD, fontWeight: 700, fontSize: 16, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 32 }}>
                        Tickets Available from July 2026
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 17, lineHeight: 1.75, maxWidth: 600, margin: "0 auto 40px", fontFamily: BODY }}>
                        Join 400+ founders, investors, accelerator heads and innovation pioneers for an unforgettable evening celebrating the UK&apos;s most remarkable immigrant innovators.
                    </p>
                    <a href="#notify" style={{ background: YELLOW, color: BLACK, padding: "15px 40px", fontFamily: BODY, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
                        Notify Me When Tickets Open
                    </a>
                </div>
            </section>

            {/* Event Details Grid */}
            <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 48px" }}>
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <div style={{ color: YELLOW, fontSize: 11, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 14, fontFamily: BODY }}>Event Details</div>
                    <h2 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(36px,6vw,52px)", textTransform: "uppercase", margin: 0 }}>A Night to Remember</h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                    {EVENT_DETAILS.map((d) => (
                        <div key={d.label} style={{ background: "#0a0a0a", border: `1px solid ${BORDER}`, padding: 36 }}>
                            <span style={{ fontSize: 28, marginBottom: 14, display: "block" }}>{d.icon}</span>
                            <div style={{ color: YELLOW, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 8, fontFamily: BODY }}>{d.label}</div>
                            <div style={{ fontFamily: HEAD, fontWeight: 900, fontSize: 22, textTransform: "uppercase" }}>{d.value}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ticket Tailor embed placeholder + Notify form */}
            <section id="notify" style={{ background: "#050505", borderTop: `1px solid ${BORDER}`, padding: "80px 48px", textAlign: "center" }}>
                <div style={{ maxWidth: 600, margin: "0 auto" }}>
                    <div style={{ color: YELLOW, fontSize: 11, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 14, fontFamily: BODY }}>Stay Informed</div>
                    <h2 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(32px,6vw,48px)", textTransform: "uppercase", margin: "0 0 20px" }}>Get Notified When Tickets Open</h2>
                    <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 36, fontFamily: BODY }}>
                        Tickets go on sale in July 2026. Register below to be first to know — nominees receive priority allocated seating.
                    </p>
                    {/* Ticket Tailor embed will replace this form in July 2026 */}
                    <div style={{ display: "flex", gap: 0, maxWidth: 460, margin: "0 auto", height: 50 }}>
                        <input
                            type="email"
                            placeholder="Your professional email"
                            style={{ flex: 1, background: "#111", border: `1px solid rgba(255,255,255,0.14)`, borderRight: "none", color: WHITE, padding: "0 18px", fontSize: 13, outline: "none", fontFamily: BODY }}
                        />
                        <button style={{ background: YELLOW, color: BLACK, border: "none", padding: "0 28px", fontFamily: BODY, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", flexShrink: 0 }}>
                            Notify Me
                        </button>
                    </div>
                    <p style={{ fontSize: 11, color: MUTED, marginTop: 14, fontFamily: BODY }}>★ Current nominees receive priority allocated guest seating</p>

                    {/* Ticket Tailor embed placeholder */}
                    <div style={{ marginTop: 56, padding: "40px", border: `1px dashed rgba(223,255,19,0.2)`, background: "rgba(223,255,19,0.02)", textAlign: "center" }}>
                        <div style={{ color: YELLOW, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 10, fontFamily: BODY }}>Coming July 2026</div>
                        <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, margin: 0, fontFamily: BODY }}>Ticket Tailor purchase widget will be embedded here when tickets open in July. General admission tickets grant full access to the awards hall, panel sessions, networking banquet and drinks reception.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
