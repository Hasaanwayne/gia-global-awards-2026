"use client"
import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import AnimateIn from "../components/AnimateIn"
import { useBreakpoint } from "../hooks/useBreakpoint"
import { ITINERARY, TICKET_URL } from "../lib/event"

const Y = "#DFFF13", BK = "#000000", W = "#FFFFFF"
const MUTED = "rgba(255,255,255,0.58)", BORDER = "rgba(255,255,255,0.08)"
const HEAD = "'Barlow Condensed','Anton',Impact,sans-serif"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

const IconUsers = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={Y} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M2.5 19c0-3.3 2.9-5.5 6.5-5.5s6.5 2.2 6.5 5.5" />
        <path d="M16.5 5.2a3 3 0 0 1 0 5.8" />
        <path d="M18 19c0-2.4-.8-4.2-2.3-5.4" />
    </svg>
)
const IconTrophy = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={Y} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
        <path d="M7 6H4.5v1.2A3 3 0 0 0 7.5 10M17 6h2.5v1.2A3 3 0 0 1 16.5 10" />
        <path d="M12 14v3M9 20h6M9.5 20l.8-3M14.5 20l-.8-3" />
    </svg>
)
const IconBowtie = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={Y} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 12 3.5 8v8L11 12z" />
        <path d="M13 12 20.5 8v8L13 12z" />
        <rect x="10.4" y="9.6" width="3.2" height="4.8" rx="1" />
    </svg>
)
const IconDinner = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={Y} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 3v7M4 3v3.5A2 2 0 0 0 6 8.5M8 3v3.5A2 2 0 0 1 6 8.5M6 10v11" />
        <path d="M17 3c-1.7 0-3 2.2-3 5s1.3 4 3 4 3-1.2 3-4-1.3-5-3-5zM17 12v9" />
    </svg>
)

const EVENT_DETAILS = [
    { Icon: IconUsers,  label: "Audience",   value: "Founders, Innovators, Investors & Media" },
    { Icon: IconTrophy, label: "Categories", value: "10 + Pioneer Award" },
    { Icon: IconBowtie, label: "Dress Code", value: "Black Tie & Evening Wear" },
    { Icon: IconDinner, label: "Format",     value: "Dinner, Awards & Keynote Speaker" },
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
                    <div style={{ fontFamily: HEAD, fontWeight: 700, fontSize: isSmall ? 18 : 24, letterSpacing: "0.16em", color: Y, textTransform: "uppercase", marginBottom: 28 }}>16 November 2026 &middot; The Dorchester, London</div>
                    <div style={{ display: "inline-block", border: `2px solid ${Y}`, color: Y, padding: "9px 28px", fontFamily: HEAD, fontWeight: 700, fontSize: isSmall ? 13 : 16, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 28 }}>Tickets on sale now</div>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: isSmall ? 15 : 17, lineHeight: 1.75, maxWidth: 560, margin: "0 auto 36px", fontFamily: BODY }}>
                        This is the room you want to be in. Join 150+ founders, investors, judges and the people powering the ecosystem, for a celebration of UK innovation.
                    </p>
                    <a href="#tickets" className="btn-primary" style={{ background: Y, color: BK, padding: "14px 36px", fontFamily: BODY, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
                        Buy Tickets
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
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)", gridAutoRows: "1fr", gap: isSmall ? 14 : 24 }}>
                        {EVENT_DETAILS.map((d, i) => (
                            <AnimateIn key={d.label} delay={i * 60} style={{ height: "100%" }}>
                                <div className="card-hover" style={{ background: "#0a0a0a", border: `1px solid ${BORDER}`, padding: isSmall ? "24px 18px" : 32, height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
                                    <div style={{ marginBottom: 16, height: 30, display: "flex", alignItems: "center" }}><d.Icon /></div>
                                    <div style={{ color: Y, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 8, fontFamily: BODY }}>{d.label}</div>
                                    <div style={{ fontFamily: HEAD, fontWeight: 900, fontSize: isSmall ? 17 : 21, textTransform: "uppercase", lineHeight: 1.15 }}>{d.value}</div>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>

                    {/* Guest-facing itinerary */}
                    <AnimateIn>
                        <div style={{ maxWidth: 560, margin: isSmall ? "48px auto 0" : "64px auto 0" }}>
                            <div style={{ textAlign: "center", marginBottom: 24 }}>
                                <div style={{ color: Y, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: BODY }}>Run of the Night</div>
                            </div>
                            {ITINERARY.map((row, i) => (
                                <div key={row.time} style={{ display: "flex", alignItems: "baseline", gap: isSmall ? 16 : 24, padding: "12px 0", borderBottom: i < ITINERARY.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                                    <span style={{ fontFamily: HEAD, fontWeight: 900, fontSize: isSmall ? 16 : 18, color: Y, letterSpacing: "0.04em", minWidth: isSmall ? 68 : 82, flexShrink: 0 }}>{row.time}</span>
                                    <span style={{ fontSize: isSmall ? 14 : 15, color: "rgba(255,255,255,0.80)", fontFamily: BODY, lineHeight: 1.5 }}>{row.moment}</span>
                                </div>
                            ))}
                        </div>
                    </AnimateIn>
                </div>
            </section>

            {/* Ticket Tailor box office */}
            <section id="tickets" style={{ background: "#050505", borderTop: `1px solid ${BORDER}`, padding: isSmall ? "64px 20px" : "80px 48px", textAlign: "center" }}>
                <div style={{ maxWidth: 860, margin: "0 auto" }}>
                    <div style={{ display: "inline-block", background: "rgba(223,255,19,0.08)", border: "1px solid rgba(223,255,19,0.22)", color: Y, fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", padding: "4px 14px", marginBottom: 16, fontFamily: BODY }}>Book Your Place</div>
                    <h2 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(28px,6vw,46px)", textTransform: "uppercase", margin: "0 0 16px" }}>Get Your Tickets</h2>
                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, marginBottom: 32, fontFamily: BODY, padding: hPad }}>
                        Secure your seat at The Dorchester on 16 November 2026. Finalists receive a discounted ticket code directly from the events team.
                    </p>

                    <div style={{ background: W, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                        <iframe
                            src={TICKET_URL}
                            title="Buy tickets for the Global Innovator Awards 2026"
                            style={{ width: "100%", height: isSmall ? 760 : 900, border: "none", display: "block" }}
                            loading="lazy"
                        />
                    </div>

                    <p style={{ color: MUTED, fontSize: 13, marginTop: 20, fontFamily: BODY }}>
                        Having trouble with the booking window?{" "}
                        <a href={TICKET_URL} target="_blank" rel="noopener noreferrer" style={{ color: Y, textDecoration: "underline" }}>
                            Open the box office in a new tab
                        </a>
                        .
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    )
}
