"use client"
import { useState } from "react"
import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import AnimateIn from "../components/AnimateIn"
import { useBreakpoint } from "../hooks/useBreakpoint"

const Y = "#DFFF13", BK = "#000000", W = "#FFFFFF"
const MUTED = "rgba(255,255,255,0.58)", BORDER = "rgba(255,255,255,0.08)"
const HEAD = "'Barlow Condensed','Anton',Impact,sans-serif"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

const CATEGORIES = [
    { id: 1,  name: "Best Deep Tech Innovation",           icon: "⚡", description: "Recognising the most groundbreaking deep technology innovation by a visa-route founder.",          criteria: ["Technological novelty", "Commercial viability", "UK market impact", "Team capability"] },
    { id: 2,  name: "Best FinTech Founder",                icon: "💳", description: "Celebrating the founder who has built the most impactful financial technology company.",             criteria: ["Revenue growth", "User adoption", "Regulatory navigation", "Innovation in finance"] },
    { id: 3,  name: "Best HealthTech Innovation",          icon: "🏥", description: "Honouring the most significant health technology innovation improving patient outcomes.",            criteria: ["Clinical impact", "Scalability", "NHS adoption", "Patient safety"] },
    { id: 4,  name: "Best CleanTech / Climate Founder",    icon: "🌱", description: "Recognising the founder making the greatest contribution to climate and sustainability.",           criteria: ["Carbon impact", "Scalability", "Commercial traction", "Policy influence"] },
    { id: 5,  name: "Best EdTech Innovation",              icon: "📚", description: "Celebrating the most impactful educational technology innovation.",                                  criteria: ["Learning outcomes", "Accessibility", "Scale of reach", "Adoption"] },
    { id: 6,  name: "Most Fundable Early Stage Startup",   icon: "🚀", description: "The startup with the most compelling investment case, judged by a panel of investors.",             criteria: ["Market size", "Traction", "Team strength", "Investor-readiness"] },
    { id: 7,  name: "Best Founder in Diversity & Inclusion",icon:"🤝", description: "Honouring the founder actively building a more inclusive tech ecosystem.",                          criteria: ["Team diversity", "Community initiatives", "Measurable impact", "Industry leadership"] },
    { id: 8,  name: "Best Scale-Up Story",                 icon: "📈", description: "Recognising the most impressive growth trajectory from startup to scale-up.",                       criteria: ["Revenue growth rate", "Team growth", "Market expansion", "Operational excellence"] },
    { id: 9,  name: "Best Global Talent Visa Founder",     icon: "🌍", description: "Celebrating excellence among founders who arrived on the Global Talent Visa.",                     criteria: ["Innovation impact", "Industry recognition", "UK contribution", "Community building"] },
    { id: 10, name: "Best Innovator Founder Visa Startup", icon: "💡", description: "Honouring the best startup founded under the Innovator Founder Visa route.",                        criteria: ["Endorsing body assessment", "Innovation score", "Commercial progress", "Team quality"] },
    { id: 11, name: "Legacy Innovation Award",             icon: "🏆", description: "A special award recognising a founder from a Legacy Innovation Route who built something truly significant.", criteria: ["Historical contribution", "Lasting impact", "Industry influence", "UK legacy"], isLegacy: true },
]

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
                    Eleven awards recognising the innovators, founders and builders who came to the UK and built something significant.
                </p>
                <a href="https://form.typeform.com/to/GIA2026" target="_blank" rel="noopener noreferrer" className="btn-primary"
                    style={{ background: Y, color: BK, padding: "14px 36px", fontFamily: BODY, fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
                    Submit a Nomination
                </a>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, marginTop: 20 }}>
                    <div style={{ width: 8, height: 8, background: Y, borderRadius: "50%" }} />
                    <p style={{ fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: "0.18em", margin: 0, fontFamily: BODY }}>Applications Open until 15 July 2026</p>
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
                                                {String(cat.id).padStart(2, "0")}
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
                                                    <div style={{ color: W, fontWeight: 700, fontSize: 14, marginBottom: 16, fontFamily: BODY }}>OPEN FOR NOMINATIONS</div>
                                                    <a href="https://form.typeform.com/to/GIA2026" target="_blank" rel="noopener noreferrer" className="btn-primary"
                                                        style={{ background: Y, color: BK, display: "block", textAlign: "center", padding: "11px 16px", fontFamily: BODY, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
                                                        Nominate →
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
