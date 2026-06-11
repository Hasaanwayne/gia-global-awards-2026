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
const MAXW = 1280

const badge: React.CSSProperties = { display: "inline-block", background: "rgba(223,255,19,0.08)", border: "1px solid rgba(223,255,19,0.22)", color: Y, fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", padding: "4px 14px", marginBottom: 20, fontFamily: BODY }
const sectionTitle: React.CSSProperties = { fontFamily: HEAD, fontWeight: 900, textTransform: "uppercase", lineHeight: 1.0, margin: 0, color: W }
const bodyText: React.CSSProperties = { color: MUTED, fontSize: 16, lineHeight: 1.82, marginBottom: 20, fontFamily: BODY }

const steps = [
    { num: "01", title: "Open Nominations",    body: "Nominations open on 15 June 2026 and close on 15 July 2026. Entry is free. You can nominate yourself or someone else, both are equally welcome." },
    { num: "02", title: "Judging & Shortlist", body: "All nominations are reviewed by our independent judge panel. Ten finalists per category are announced on 20 August 2026." },
    { num: "03", title: "Awards Evening",      body: "Winners are announced at the Global Innovator Awards evening in Central London in October 2026." },
    { num: "04", title: "Media & Recognition", body: "Winners and finalists receive coverage across our media partner network. Your story reaches the investors, partners and press that matter." },
]

export default function AboutPage() {
    const bp = useBreakpoint()
    const isMobile = bp === "mobile"
    const isTablet = bp === "tablet"
    const isSmall = isMobile || isTablet
    const hPad = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px"
    const W_OBJ: React.CSSProperties = { maxWidth: MAXW, margin: "0 auto", padding: hPad, boxSizing: "border-box" }
    const secPad = isMobile ? "64px 20px" : isTablet ? "72px 32px" : "96px 48px"

    return (
        <div style={{ fontFamily: BODY, background: BK, color: W, width: "100%", overflowX: "hidden" }}>
            <Nav />

            {/* Hero */}
            <div style={{ background: BK, padding: isSmall ? "72px 20px 48px" : "88px 48px 64px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
                <div style={badge}>Who We Are</div>
                <h1 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(40px,8vw,80px)", lineHeight: 0.95, letterSpacing: "-0.01em", margin: 0, textTransform: "uppercase" }}>
                    About the Awards
                </h1>
            </div>

            {/* Why We Created */}
            <div style={{ padding: secPad }}>
                <div style={W_OBJ}>
                    <div style={{ display: "grid", gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr", gap: isSmall ? 40 : 72, alignItems: "center" }}>
                        <AnimateIn from={isSmall ? "up" : "left"}>
                            <div>
                                <div style={badge}>Celebrate. Showcase. Spotlight</div>
                                <h2 style={{ ...sectionTitle, fontSize: "clamp(28px,4vw,46px)", marginBottom: 24 }}>Why We Created This</h2>
                                <p style={bodyText}>The Global Innovator Awards exist to make you visible. If you made a deliberate decision to come to the UK and are building, creating or contributing something significant here, these awards have been created for you.</p>
                                <p style={bodyText}>You are actively shaping UK industries, research and culture. You may be mid-journey, still building, still proving yourself. Recognition at this stage is not ceremonial. It signals credibility to investors, partners and the wider market at exactly the moment it matters most.</p>
                                <p style={{ ...bodyText, marginBottom: 0 }}>This is Year 1. Your moment to be seen.</p>
                            </div>
                        </AnimateIn>
                        <AnimateIn from={isSmall ? "up" : "right"} delay={120}>
                            <div style={{ aspectRatio: "4/3", overflow: "hidden", border: `1px solid ${BORDER}` }}>
                                <img src="/about-team.jpg" alt="A diverse group of founders and innovators sitting together" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                            </div>
                        </AnimateIn>
                    </div>
                </div>
            </div>

            {/* Yellow bar */}
            <div style={{ background: Y, padding: "18px 20px", overflow: "hidden" }}>
                <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
                    {["INNOVATOR FOUNDER VISA", "GLOBAL TALENT VISA", "LEGACY INNOVATION ROUTES"].map((t, i) => (
                        <React.Fragment key={t}>
                            {i > 0 && !isMobile && <span style={{ color: BK, fontFamily: HEAD, fontWeight: 900, fontSize: 18 }}>|</span>}
                            <span style={{ color: BK, fontFamily: HEAD, fontWeight: 900, fontSize: isMobile ? 14 : 18, letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "center" }}>{t}</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Eligibility */}
            <div style={{ background: "#050505", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: secPad }}>
                <div style={W_OBJ}>
                    <div style={{ display: "grid", gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr", gap: isSmall ? 40 : 72, alignItems: "center" }}>
                        <AnimateIn from={isSmall ? "up" : "left"}>
                            <div style={{ aspectRatio: "4/3", overflow: "hidden", border: `1px solid ${BORDER}` }}>
                                <img src="/london-skyline.jpg" alt="City of London skyline at dusk" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                            </div>
                        </AnimateIn>
                        <AnimateIn from={isSmall ? "up" : "right"} delay={120}>
                            <div>
                                <div style={badge}>Who Can Apply</div>
                                <h2 style={{ ...sectionTitle, fontSize: "clamp(28px,4vw,46px)", marginBottom: 24 }}>Eligibility</h2>
                                <p style={bodyText}>These awards are open to founders, innovators and exceptional talent who made an active decision to come to the UK under one of the following qualifying routes:</p>
                                <ul style={{ color: MUTED, fontSize: 15, lineHeight: 2.1, paddingLeft: 20, fontFamily: BODY }}>
                                    {["Global Talent Visa, Current route", "Innovator Founder Visa, Current route", "Innovator Visa, Previous route (closed 2023)", "Start-up Visa, Legacy route", "Tier 1 Exceptional Talent, Legacy route", "Tier 1 Entrepreneur, Legacy route"].map((item) => (
                                        <li key={item}><strong style={{ color: W }}>{item.split(",")[0]}</strong>{item.includes(",") ? `,${item.slice(item.indexOf(",") + 1)}` : ""}</li>
                                    ))}
                                </ul>
                            </div>
                        </AnimateIn>
                    </div>
                </div>
            </div>

            {/* Two-Stage Process */}
            <div style={{ padding: secPad }}>
                <div style={W_OBJ}>
                    <AnimateIn>
                        <div style={{ textAlign: "center", marginBottom: isSmall ? 40 : 64 }}>
                            <div style={badge}>How It Works</div>
                            <h2 style={{ ...sectionTitle, fontSize: "clamp(28px,4vw,46px)" }}>The Two-Stage Process</h2>
                        </div>
                    </AnimateIn>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 24 }}>
                        {steps.map((s, i) => (
                            <AnimateIn key={s.num} delay={i * 80}>
                                <div style={{ background: "#0a0a0a", border: `1px solid ${BORDER}`, padding: isSmall ? 28 : 40 }}>
                                    <div style={{ fontFamily: HEAD, fontWeight: 900, fontSize: 52, color: Y, lineHeight: 1, marginBottom: 14 }}>{s.num}</div>
                                    <h3 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: 22, textTransform: "uppercase", marginBottom: 10 }}>{s.title}</h3>
                                    <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, fontFamily: BODY, margin: 0 }}>{s.body}</p>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>
                </div>
            </div>

            {/* NEXUS */}
            <div style={{ background: "#050505", borderTop: `1px solid ${BORDER}`, padding: secPad, textAlign: "center" }}>
                <div style={{ maxWidth: 720, margin: "0 auto", padding: hPad }}>
                    <div style={badge}>About NEXUS</div>
                    <h2 style={{ ...sectionTitle, fontSize: "clamp(28px,4vw,46px)", marginBottom: 20 }}>Powered by NEXUS</h2>
                    <p style={bodyText}>NEXUS is a UK innovation hub connecting frontier technology companies, incubators, science parks and scale-ups across global markets. We work at the intersection of international ambition and UK opportunity, helping founders and innovators establish, grow and scale in the UK.</p>
                    <p style={bodyText}>We have been supporting founders on innovation and talent routes for 8+ years, from the Tier 1 Entrepreneur Visa through to the current Innovator Founder Visa, where NEXUS is an active consortium partner under UK Endorsing Services.</p>
                    <p style={{ ...bodyText, marginBottom: 36 }}>The Global Innovator Awards was created because we know this community exists, we work with them every day, and we believe their achievements deserve a dedicated stage.</p>
                    <span
                        aria-disabled="true"
                        style={{ background: Y, color: BK, padding: "14px 36px", fontFamily: BODY, fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-block", cursor: "default" }}>
                        NOMINATIONS 15.06.26
                    </span>
                </div>
            </div>

            <Footer />
        </div>
    )
}
