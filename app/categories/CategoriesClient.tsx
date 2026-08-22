"use client"
import { useState } from "react"
import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import AnimateIn from "../components/AnimateIn"
import { useBreakpoint } from "../hooks/useBreakpoint"
import { NOMINATE_URL } from "../lib/links"

const Y = "#DFFF13", BK = "#000000", W = "#FFFFFF"
const MUTED = "rgba(255,255,255,0.58)", BORDER = "rgba(255,255,255,0.08)"
const HEAD = "'Barlow Condensed','Anton',Impact,sans-serif"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

import { CATEGORIES } from "./categories-data"

export default function CategoriesPage() {
    const [expanded, setExpanded] = useState<number | null>(null)
    const bp = useBreakpoint()
    const isMobile = bp === "mobile"
    const isTablet = bp === "tablet"
    const isSmall  = isMobile || isTablet
    const hPad = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px"
    const W_OBJ: React.CSSProperties = { maxWidth: 1280, margin: "0 auto", padding: hPad, boxSizing: "border-box" }

    return (
        <div style={{ fontFamily: BODY, background: BK, color: W, width: "100%", overflowX: "hidden" }}>
            <Nav />

            {/* Hero */}
            <div style={{ background: BK, padding: isSmall ? "72px 20px 48px" : "88px 48px 64px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
                <div style={{ display: "inline-block", background: "rgba(223,255,19,0.08)", border: "1px solid rgba(223,255,19,0.22)", color: Y, fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", padding: "4px 14px", marginBottom: 20, fontFamily: BODY }}>The Awards</div>
                <h1 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(36px,8vw,80px)", lineHeight: 0.95, letterSpacing: "-0.01em", margin: "0 0 20px", textTransform: "uppercase" }}>
                    Award Categories 2026
                </h1>
                <p style={{ color: MUTED, fontSize: isSmall ? 16 : 18, maxWidth: 600, margin: "0 auto 32px", lineHeight: 1.7, fontFamily: BODY }}>
                    Ten categories, plus one special Pioneer Award, recognising the founders, innovators and exceptional talent who chose the UK and are delivering on their ambition.
                </p>
                <a href={NOMINATE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
                    style={{ background: Y, color: BK, padding: "14px 36px", fontFamily: BODY, fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
                    NOMINATE | APPLY NOW
                </a>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, marginTop: 20 }}>
                    <div style={{ width: 8, height: 8, background: Y, borderRadius: "50%" }} />
                    <p style={{ fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: "0.18em", margin: 0, fontFamily: BODY }}>Applications are open now</p>
                </div>
            </div>

            {/* Category accordion cards */}
            <div style={{ padding: isSmall ? "48px 20px" : "64px 48px" }}>
                <div style={W_OBJ}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {CATEGORIES.map((cat, i) => (
                            <AnimateIn key={cat.id} delay={i * 40}>
                                <div style={{ background: "#0a0a0a", border: `1px solid ${expanded === cat.id ? Y : (cat.isLegacy ? "rgba(223,255,19,0.3)" : BORDER)}`, transition: "border-color 0.2s" }}>
                                    {/* Card Header */}
                                    <div style={{ padding: isSmall ? "20px" : "24px 32px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}
                                        onClick={() => setExpanded(expanded === cat.id ? null : cat.id)}>
                                        <div style={{ display: "flex", alignItems: "center", gap: isSmall ? 14 : 24, flex: 1 }}>
                                            <span style={{ fontFamily: HEAD, fontWeight: 900, fontSize: isSmall ? 24 : 32, color: expanded === cat.id ? Y : "rgba(223,255,19,0.25)", minWidth: isSmall ? 36 : 48, transition: "color 0.2s" }}>
                                                {cat.displayNum}
                                            </span>
                                            <div>
                                                <div style={{ fontSize: 10, color: cat.isLegacy ? Y : MUTED, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 3, fontFamily: BODY }}>
                                                    {cat.isLegacy ? "✦ Special Award" : "Category"}
                                                </div>
                                                <h3 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: isSmall ? 17 : 22, textTransform: "uppercase", margin: 0, lineHeight: 1.1 }}>{cat.name}</h3>
                                            </div>
                                        </div>
                                        <div style={{ color: Y, fontSize: 20, transition: "transform 0.2s", transform: expanded === cat.id ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}>▾</div>
                                    </div>

                                    {/* Expanded Content */}
                                    {expanded === cat.id && (
                                        <div style={{ borderTop: `1px solid ${BORDER}`, padding: isSmall ? "20px" : "24px 32px", background: "rgba(0,0,0,0.4)" }}>
                                            <div style={{ display: "grid", gridTemplateColumns: isSmall ? "1fr" : "1fr auto", gap: 32, alignItems: "start" }}>
                                                <div>
                                                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, marginBottom: 20, fontFamily: BODY }}>{cat.description}</p>
                                                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", color: Y, textTransform: "uppercase", marginBottom: 12, fontFamily: BODY }}>Judging Criteria</div>
                                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                                        {cat.criteria.map((c, idx) => (
                                                            <li key={idx} style={{ padding: "9px 0", borderBottom: `1px solid ${BORDER}`, fontSize: 14, color: "#ccc", display: "flex", alignItems: "center", gap: 10, fontFamily: BODY }}>
                                                                <span style={{ color: Y, fontSize: 12 }}>→</span> {c}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div style={{ background: "#0d0d0d", border: `1px solid ${BORDER}`, padding: "20px 24px", minWidth: isSmall ? "auto" : 200, textAlign: "center" }}>
                                                    <div style={{ fontSize: 9, color: MUTED, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 8, fontFamily: BODY }}>Status</div>
                                                    <div style={{ color: W, fontWeight: 700, fontSize: 14, marginBottom: 16, fontFamily: BODY }}>OPEN NOW</div>
                                                    <a href={NOMINATE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary"
                                                        style={{ background: Y, color: BK, display: "block", textAlign: "center", padding: "11px 16px", fontFamily: BODY, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
                                                        NOMINATE | APPLY NOW
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </AnimateIn>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
