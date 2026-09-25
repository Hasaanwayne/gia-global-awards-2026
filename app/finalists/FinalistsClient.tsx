"use client"
import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import AnimateIn from "../components/AnimateIn"
import { useBreakpoint } from "../hooks/useBreakpoint"
import { FINALISTS } from "./finalists-data"

const Y = "#DFFF13", BK = "#000000", W = "#FFFFFF"
const MUTED = "rgba(255,255,255,0.58)", BORDER = "rgba(255,255,255,0.08)"
const HEAD = "'Barlow Condensed','Anton',Impact,sans-serif"
const BODY = "'General Sans','Inter',system-ui,sans-serif"
const MAXW = 1280

const TOTAL = FINALISTS.reduce((n, g) => n + g.names.length, 0)

export default function FinalistsPage() {
    const bp = useBreakpoint()
    const isMobile = bp === "mobile"
    const isTablet = bp === "tablet"
    const isSmall = isMobile || isTablet
    const hPad = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px"
    const secPad = isMobile ? "56px 20px" : isTablet ? "64px 32px" : "88px 48px"

    return (
        <div style={{ fontFamily: BODY, background: BK, color: W, width: "100%", overflowX: "hidden" }}>
            <Nav />

            {/* Hero */}
            <div style={{ background: BK, padding: isSmall ? "72px 20px 48px" : "88px 48px 64px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
                <div style={{ display: "inline-block", background: "rgba(223,255,19,0.08)", border: "1px solid rgba(223,255,19,0.22)", color: Y, fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", padding: "4px 14px", marginBottom: 20, fontFamily: BODY }}>
                    Shortlist Announced
                </div>
                <h1 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(40px,8vw,80px)", lineHeight: 0.95, letterSpacing: "-0.01em", margin: 0, textTransform: "uppercase" }}>
                    The 2026 Finalists
                </h1>
                <p style={{ color: MUTED, fontSize: isSmall ? 15 : 17, maxWidth: 720, margin: "22px auto 0", lineHeight: 1.75, fontFamily: BODY }}>
                    {TOTAL} founders, innovators and exceptional talent who chose the UK, selected by our independent
                    judging panel across ten categories. Winners announced on 16th November at The Dorchester, London.
                </p>

                {/* Stat strip */}
                <div style={{ display: "flex", justifyContent: "center", gap: isSmall ? 28 : 56, marginTop: 40, flexWrap: "wrap" }}>
                    {[
                        { n: "10", l: "Categories" },
                        { n: String(TOTAL), l: "Finalists" },
                        { n: "1", l: "Night in London" },
                    ].map((s) => (
                        <div key={s.l} style={{ textAlign: "center" }}>
                            <div style={{ fontFamily: HEAD, fontWeight: 900, fontSize: isSmall ? 34 : 46, color: Y, lineHeight: 1 }}>{s.n}</div>
                            <div style={{ fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: MUTED, marginTop: 6, fontFamily: BODY }}>{s.l}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Category groups */}
            <div style={{ padding: secPad }}>
                <div style={{ maxWidth: MAXW, margin: "0 auto", padding: hPad, boxSizing: "border-box" }}>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr", gap: isSmall ? 20 : 28 }}>
                        {FINALISTS.map((g, i) => (
                            <AnimateIn key={g.category} delay={(i % 2) * 90}>
                                <div style={{ background: "#0a0a0a", border: `1px solid ${BORDER}`, padding: isSmall ? "26px 22px" : "34px 32px", height: "100%", boxSizing: "border-box" }}>
                                    {/* Category header */}
                                    <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 20, paddingBottom: 18, borderBottom: `1px solid ${BORDER}` }}>
                                        <span style={{ fontFamily: HEAD, fontWeight: 900, fontSize: isSmall ? 30 : 38, color: Y, lineHeight: 1, flexShrink: 0 }}>{g.displayNum}</span>
                                        <h2 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: isSmall ? 19 : 23, textTransform: "uppercase", margin: 0, lineHeight: 1.15, color: W }}>
                                            {g.category}
                                        </h2>
                                    </div>

                                    {/* Names */}
                                    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                                        {g.names.map((n) => (
                                            <li key={n} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: isSmall ? "9px 0" : "10px 0", borderBottom: `1px solid rgba(255,255,255,0.05)` }}>
                                                <span aria-hidden="true" style={{ width: 5, height: 5, borderRadius: "50%", background: Y, flexShrink: 0, marginTop: 8 }} />
                                                <span style={{ fontSize: isSmall ? 14 : 15, lineHeight: 1.55, color: W, fontFamily: BODY }}>{n}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>

                    <p style={{ textAlign: "center", color: MUTED, fontSize: 13, marginTop: isSmall ? 36 : 52, fontFamily: BODY, lineHeight: 1.8 }}>
                        Finalists are listed alphabetically within each category. Winners are announced at the awards
                        evening on 16th November 2026.
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div style={{ background: "#050505", borderTop: `1px solid ${BORDER}`, padding: isSmall ? "64px 20px" : "80px 48px", textAlign: "center" }}>
                <h2 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(32px,6vw,52px)", textTransform: "uppercase", margin: "0 0 16px" }}>Be in the Room</h2>
                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 520, margin: "0 auto 32px", fontFamily: BODY }}>
                    Awards Gala &ndash; 16th November 2026 &middot; The Dorchester, London
                </p>
                <a href="/tickets" className="btn-primary"
                    style={{ background: Y, color: BK, padding: "14px 40px", fontFamily: BODY, fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
                    Get Tickets
                </a>
            </div>

            {/* Partnership enquiries */}
            <div style={{ background: BK, borderTop: `1px solid ${BORDER}`, padding: isSmall ? "56px 20px" : "72px 48px" }}>
                <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
                    <div style={{ display: "inline-block", background: "rgba(223,255,19,0.08)", border: "1px solid rgba(223,255,19,0.22)", color: Y, fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", padding: "4px 14px", marginBottom: 18, fontFamily: BODY }}>
                        Sponsorship
                    </div>
                    <h2 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(26px,5vw,42px)", textTransform: "uppercase", margin: "0 0 16px", lineHeight: 1.05 }}>
                        Partner with the Global Innovator Awards
                    </h2>
                    <p style={{ color: MUTED, fontSize: isSmall ? 15 : 16, lineHeight: 1.8, margin: "0 auto 18px", maxWidth: 580, fontFamily: BODY }}>
                        Interested in supporting the Global Innovator Awards and connecting with an international
                        community of founders, innovators and ecosystem leaders?
                    </p>
                    <p style={{ color: MUTED, fontSize: isSmall ? 15 : 16, lineHeight: 1.8, margin: 0, fontFamily: BODY }}>
                        For sponsorship and partnership enquiries, contact Anisa at{" "}
                        <a href="mailto:anisa@cellardoornexus.co.uk" style={{ color: Y, textDecoration: "underline", fontWeight: 600 }}>
                            anisa@cellardoornexus.co.uk
                        </a>
                        .
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    )
}
