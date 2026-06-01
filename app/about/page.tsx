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

const kicker: React.CSSProperties = { color: YELLOW, fontSize: 11, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 16, fontFamily: BODY }
const sectionTitle: React.CSSProperties = { fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.0, textTransform: "uppercase", marginBottom: 24 }
const bodyText: React.CSSProperties = { color: MUTED, fontSize: 17, lineHeight: 1.8, marginBottom: 20, fontFamily: BODY }
const twoCol: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center", maxWidth: 1200, margin: "0 auto" }
const imgPlaceholder: React.CSSProperties = { background: "#111", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", color: "#333", fontSize: 13, letterSpacing: "0.14em", fontFamily: BODY, textTransform: "uppercase" }
const wrap: React.CSSProperties = { padding: "96px 48px", maxWidth: 1200, margin: "0 auto" }
const altWrap: React.CSSProperties = { padding: "96px 48px", background: "#050505", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }

const steps = [
    { num: "01", title: "Open Nominations", body: "Nominations open on 15 May 2026 and close on 15 July 2026. Anyone can nominate a founder — including self-nomination. Each nominee must meet the visa route eligibility criteria." },
    { num: "02", title: "Judging & Shortlist", body: "Our independent panel of judges reviews all nominations. A shortlist of five finalists per category is announced on 20 August 2026. Judges score against published criteria for each category." },
    { num: "03", title: "Awards Evening", body: "Winners are announced at a premium in-person Awards Evening in London in October 2026. Tickets are available to founders, investors, sponsors and the broader innovation community." },
    { num: "04", title: "Media & Legacy", body: "Winners and finalists receive significant media coverage through our partner network. Their stories become part of the permanent record of immigrant innovation in the UK." },
]

export default function AboutPage() {
    return (
        <div style={{ fontFamily: BODY, background: BLACK, color: WHITE, width: "100%", overflowX: "hidden" }}>
            <Nav />

            {/* Hero */}
            <div style={{ background: BLACK, padding: "88px 48px 64px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
                <div style={kicker}>Who We Are</div>
                <h1 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(48px,9vw,80px)", lineHeight: 0.95, letterSpacing: "-0.01em", margin: 0, textTransform: "uppercase" }}>
                    About the Awards
                </h1>
            </div>

            {/* Why We Created */}
            <div style={wrap}>
                <div style={twoCol}>
                    <div>
                        <div style={kicker}>Why We Created This</div>
                        <h2 style={sectionTitle}>Built by Immigrants. Recognised by the UK.</h2>
                        <p style={bodyText}>The Global Innovation Awards were created to shine a light on the founders, builders and innovators who arrived in the UK under an innovation or talent visa route &mdash; and built something truly significant.</p>
                        <p style={bodyText}>The UK&apos;s visa innovation routes &mdash; the Global Talent Visa, Innovator Founder Visa, and their predecessors &mdash; have brought exceptional people to these shores. Many have founded companies that are now reshaping industries. Yet their stories are rarely told together.</p>
                        <p style={bodyText}>This is Year 1. We are starting a movement.</p>
                    </div>
                    <div style={imgPlaceholder}>[ Founder Photography ]</div>
                </div>
            </div>

            {/* Electric Yellow bar */}
            <div style={{ background: YELLOW, padding: "22px 48px", display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
                {["INNOVATOR FOUNDER VISA", "GLOBAL TALENT VISA", "LEGACY INNOVATION ROUTES"].map((t, i) => (
                    <React.Fragment key={t}>
                        {i > 0 && <span style={{ color: BLACK, fontFamily: HEAD, fontWeight: 900, fontSize: 18 }}>|</span>}
                        <span style={{ color: BLACK, fontFamily: HEAD, fontWeight: 900, fontSize: 18, letterSpacing: "0.12em", textTransform: "uppercase" }}>{t}</span>
                    </React.Fragment>
                ))}
            </div>

            {/* Eligibility */}
            <div style={altWrap}>
                <div style={twoCol}>
                    <div style={imgPlaceholder}>[ Eligibility Illustration ]</div>
                    <div>
                        <div style={kicker}>Who Can Apply</div>
                        <h2 style={sectionTitle}>Eligibility</h2>
                        <p style={bodyText}>To be eligible, you must have founded or co-founded a UK-based company and arrived in the UK under one of the following visa routes:</p>
                        <ul style={{ color: MUTED, fontSize: 16, lineHeight: 2.2, paddingLeft: 20, fontFamily: BODY }}>
                            <li><strong style={{ color: WHITE }}>Global Talent Visa</strong> &mdash; Tech Nation, UKRI, or Royal Academy endorsement</li>
                            <li><strong style={{ color: WHITE }}>Innovator Founder Visa</strong> &mdash; Current route</li>
                            <li><strong style={{ color: WHITE }}>Innovator Visa</strong> &mdash; Previous route (closed 2023)</li>
                            <li><strong style={{ color: WHITE }}>Startup Visa</strong> &mdash; Legacy route</li>
                            <li><strong style={{ color: WHITE }}>Tier 1 Exceptional Talent</strong> &mdash; Legacy route</li>
                            <li><strong style={{ color: WHITE }}>Tier 1 Entrepreneur</strong> &mdash; Legacy route</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Two-Stage Process */}
            <div style={wrap}>
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <div style={kicker}>How It Works</div>
                    <h2 style={{ ...sectionTitle, margin: "0 auto" }}>The Two-Stage Process</h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                    {steps.map((s) => (
                        <div key={s.num} style={{ background: "#0a0a0a", border: `1px solid ${BORDER}`, padding: 40 }}>
                            <div style={{ fontFamily: HEAD, fontWeight: 900, fontSize: 60, color: YELLOW, lineHeight: 1, marginBottom: 16 }}>{s.num}</div>
                            <h3 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: 26, textTransform: "uppercase", marginBottom: 12 }}>{s.title}</h3>
                            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, fontFamily: BODY, margin: 0 }}>{s.body}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* NEXUS Background */}
            <div style={{ ...altWrap, textAlign: "center" }}>
                <div style={{ maxWidth: 740, margin: "0 auto" }}>
                    <div style={kicker}>About NEXUS</div>
                    <h2 style={sectionTitle}>Powered by NEXUS</h2>
                    <p style={{ ...bodyText, marginBottom: 36 }}>NEXUS is the community and platform for global talent building in the UK. We connect founders, investors and the people who support them. The Global Innovation Awards is our flagship recognition programme.</p>
                    <a href="https://form.typeform.com/to/GIA2026" target="_blank" rel="noopener noreferrer" style={{ background: YELLOW, color: BLACK, padding: "14px 36px", fontFamily: BODY, fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
                        Submit a Nomination
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    )
}
