"use client"
import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import AnimateIn from "../components/AnimateIn"
import { useBreakpoint } from "../hooks/useBreakpoint"

const Y = "#DFFF13", BK = "#000000", W = "#FFFFFF"
const MUTED = "rgba(255,255,255,0.58)", BORDER = "rgba(255,255,255,0.08)"
const HEAD = "'Barlow Condensed','Anton',Impact,sans-serif"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

const EVENT_DETAILS = [
    { icon: "📅", label: "Date",       value: "October 2026" },
    { icon: "📍", label: "Location",   value: "Central London" },
    { icon: "🎭", label: "Format",     value: "Gala Dinner + Awards" },
    { icon: "👥", label: "Audience",   value: "Founders, Investors & Press" },
    { icon: "🏆", label: "Categories", value: "11 Awards" },
    { icon: "✨", label: "Experience", value: "Premium & Inspiring" },
]

export default function TicketsPage() {
    const bp = useBreakpoint()
    const isMobile = bp === "mobile"
    const isTablet = bp === "tablet"
    const isSmall  = isMobile || isTablet
    const hPad     = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px"
    const W_OBJ: React.CSSProperties = { maxWidth: 1100, margin: "0 auto", padding: hPad, boxSizing: "border-box" }

    return (
        <div style={{ fontFamily: BODY, background: BK, color: W, width: "100%", overflowX: "hidden" }}>
            <Nav />

            {/* Hero with London photo */}
            <section style={{ position: "relative", minHeight: isSmall ? "60vh" : "72vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderBottom: `1px solid ${BORDER}` }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1600)", backgroundSize: "cover", backgroundPosition: "center 40%", filter: "brightness(0.28) grayscale(0.15)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.75) 100%)" }} />
                <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: isSmall ? "80px 24px" : "100px 40px" }}>
                    <div style={{ display: "inline-block", background: "rgba(223,255,19,0.08)", border: "1px solid rgba(223,255,19,0.22)", color: Y, fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", padding: "4px 14px", marginBottom: 20, fontFamily: BODY }}>Gala Ceremony Passes</div>
                    <h1 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(44px,10vw,100px)", lineHeight: 0.93, letterSpacing: "-0.015em", margin: "0 0 18px", textTransform: "uppercase" }}>Get Your Tickets</h1>
                    <div style={{ fontFamily: HEAD, fontWeight: 700, fontSize: isSmall ? 18 : 24, letterSpacing: "0.16em", color: Y, textTransform: "uppercase", marginBottom: 28 }}>October 2026 &middot; London</div>
                    <div style={{ display: "inline-block", border: `2px solid ${Y}`, color: Y, padding: "9px 28px", fontFamily: HEAD, fontWeight: 700, fontSize: isSmall ? 13 : 16, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 28 }}>Tickets Available from July 2026</div>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: isSmall ? 15 : 17, lineHeight: 1.75, maxWidth: 560, margin: "0 auto 36px", fontFamily: BODY }}>
                        Join 400+ founders, investors and innovation pioneers for an unforgettable evening celebrating the UK&apos;s most remarkable immigrant innovators.
                    </p>
                    <a href="#notify" className="btn-primary" style={{ background: Y, color: BK, padding: "14px 36px", fontFamily: BODY, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
                        Notify Me When Tickets Open
                    </a>
                </div>
            </section>

            {/* Event Details Grid */}
            <section style={{ padding: isSmall ? "56px 20px" : "80px 48px" }}>
                <div style={W_OBJ}>
                    <AnimateIn>
                        <div style={{ textAlign: "center", marginBottom: 48 }}>
                            <div style={{ display: "inline-block", background: "rgba(223,255,19,0.08)", border: "1px solid rgba(223,255,19,0.22)", color: Y, fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", padding: "4px 14px", marginBottom: 16, fontFamily: BODY }}>Event Details</div>
                            <h2 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(32px,6vw,52px)", textTransform: "uppercase", margin: 0 }}>A Night to Remember</h2>
                        </div>
                    </AnimateIn>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr 1fr" : "repeat(3, 1fr)", gap: isSmall ? 14 : 24 }}>
                        {EVENT_DETAILS.map((d, i) => (
                            <AnimateIn key={d.label} delay={i * 60}>
                                <div className="card-hover" style={{ background: "#0a0a0a", border: `1px solid ${BORDER}`, padding: isSmall ? "24px 18px" : 36 }}>
                                    <span style={{ fontSize: isSmall ? 24 : 28, marginBottom: 12, display: "block" }}>{d.icon}</span>
                                    <div style={{ color: Y, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 6, fontFamily: BODY }}>{d.label}</div>
                                    <div style={{ fontFamily: HEAD, fontWeight: 900, fontSize: isSmall ? 17 : 22, textTransform: "uppercase" }}>{d.value}</div>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Notify form */}
            <section id="notify" style={{ background: "#050505", borderTop: `1px solid ${BORDER}`, padding: isSmall ? "64px 20px" : "80px 48px", textAlign: "center" }}>
                <div style={{ maxWidth: 600, margin: "0 auto" }}>
                    <div style={{ display: "inline-block", background: "rgba(223,255,19,0.08)", border: "1px solid rgba(223,255,19,0.22)", color: Y, fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", padding: "4px 14px", marginBottom: 16, fontFamily: BODY }}>Stay Informed</div>
                    <h2 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(28px,6vw,46px)", textTransform: "uppercase", margin: "0 0 16px" }}>Get Notified When Tickets Open</h2>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, marginBottom: 32, fontFamily: BODY, padding: hPad }}>Tickets go on sale in July 2026. Enter your email to be first to know &mdash; nominees receive priority allocated seating.</p>
                    <div style={{ display: "flex", gap: 0, maxWidth: 440, margin: "0 auto", height: 50 }}>
                        <input type="email" placeholder="Your professional email" style={{ flex: 1, background: "#111", border: `1px solid rgba(255,255,255,0.14)`, borderRight: "none", color: W, padding: "0 16px", fontSize: 13, outline: "none", fontFamily: BODY, minWidth: 0 }} />
                        <button className="btn-primary" style={{ background: Y, color: BK, border: "none", padding: "0 24px", fontFamily: BODY, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", flexShrink: 0 }}>Notify Me</button>
                    </div>
                    <p style={{ fontSize: 11, color: MUTED, marginTop: 12, fontFamily: BODY }}>★ Current nominees receive priority allocated guest seating</p>

                    {/* Ticket Tailor placeholder */}
                    <div style={{ marginTop: 48, padding: isSmall ? "28px 20px" : "36px", border: "1px dashed rgba(223,255,19,0.2)", background: "rgba(223,255,19,0.02)", textAlign: "center" }}>
                        <div style={{ color: Y, fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 10, fontFamily: BODY }}>Coming July 2026</div>
                        <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, margin: 0, fontFamily: BODY }}>Ticket Tailor purchase widget will be embedded here when tickets open in July. General admission tickets grant full access to the awards hall, panel sessions, networking banquet and drinks reception.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
