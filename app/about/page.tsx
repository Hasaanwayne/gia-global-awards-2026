"use client"
import React from "react"

const YELLOW = "#DFFF13"
const BLACK = "#000000"
const WHITE = "#FFFFFF"

const S: Record<string, React.CSSProperties> = {
    page: { fontFamily: "'General Sans','Inter',sans-serif", background: BLACK, color: WHITE, width: "100%", overflowX: "hidden" },
    nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 60px", background: BLACK, position: "sticky", top: 0, zIndex: 100, borderBottom: "1px solid #1a1a1a" },
    logo: { fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: 20, color: YELLOW, letterSpacing: 2, textDecoration: "none" },
    navLinks: { display: "flex", gap: 32, alignItems: "center" },
    navLink: { color: WHITE, textDecoration: "none", fontSize: 14, letterSpacing: 1, textTransform: "uppercase" },
    ctaBtn: { background: YELLOW, color: BLACK, border: "none", padding: "12px 28px", fontFamily: "'General Sans',sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", textDecoration: "none", display: "inline-block" },
    hero: { background: BLACK, padding: "80px 60px 60px", textAlign: "center", borderBottom: "1px solid #1a1a1a" },
    eyebrow: { color: YELLOW, fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontSize: 13, letterSpacing: 6, textTransform: "uppercase", marginBottom: 20 },
    pageTitle: { fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: 72, lineHeight: 1, letterSpacing: -1, marginBottom: 20, textTransform: "uppercase" },
    section: { padding: "80px 60px", maxWidth: 1200, margin: "0 auto" },
    altSection: { padding: "80px 60px", background: "#050505" },
    twoCol: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", maxWidth: 1200, margin: "0 auto" },
    sectionEyebrow: { color: YELLOW, fontSize: 12, letterSpacing: 5, textTransform: "uppercase", marginBottom: 16 },
    sectionTitle: { fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: 48, lineHeight: 1.05, textTransform: "uppercase", marginBottom: 24 },
    body: { color: "#aaaaaa", fontSize: 17, lineHeight: 1.8, marginBottom: 20 },
    imagePlaceholder: { background: "#111", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", color: "#333", fontSize: 14, letterSpacing: 2 },
    yellowBar: { background: YELLOW, padding: "24px 60px", display: "flex", gap: 40, justifyContent: "center", flexWrap: "wrap" },
    barItem: { color: BLACK, fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: 4, textTransform: "uppercase" },
    stepsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, maxWidth: 1200, margin: "0 auto" },
    stepCard: { background: "#0a0a0a", border: "1px solid #1a1a1a", padding: 40 },
    stepNum: { fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: 64, color: YELLOW, lineHeight: 1, marginBottom: 16 },
    stepTitle: { fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: 28, textTransform: "uppercase", marginBottom: 12 },
    stepBody: { color: "#aaaaaa", fontSize: 15, lineHeight: 1.7 },
    footer: { background: "#050505", borderTop: "1px solid #1a1a1a", padding: "60px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 },
    footerTitle: { fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: 2, textTransform: "uppercase", color: YELLOW, marginBottom: 16 },
    footerText: { color: "#666", fontSize: 14, lineHeight: 1.8 },
}

const footerLinks = { color: "#666", display: "block", marginBottom: 8, textDecoration: "none" }

export default function AboutPage() {
    return (
        <div style={S.page}>
            <nav style={S.nav}>
                <a href="/" style={S.logo}>GLOBAL INNOVATION AWARDS</a>
                <div style={S.navLinks}>
                    <a href="/" style={S.navLink}>Home</a>
                    <a href="/categories" style={S.navLink}>Categories</a>
                    <a href="/about" style={{ ...S.navLink, color: YELLOW }}>About</a>
                    <a href="/tickets" style={S.navLink}>Tickets</a>
                    <a href="/faqs" style={S.navLink}>FAQs</a>
                    <a href="#" style={S.ctaBtn}>Nominate</a>
                </div>
            </nav>

            <div style={S.hero}>
                <p style={S.eyebrow}>Our Story</p>
                <h1 style={S.pageTitle}>About the Awards</h1>
            </div>

            <div style={S.section}>
                <div style={S.twoCol}>
                    <div>
                        <p style={S.sectionEyebrow}>Why We Created This</p>
                        <h2 style={S.sectionTitle}>Built by Immigrants. Recognised by the UK.</h2>
                        <p style={S.body}>The Global Innovation Awards were created to shine a light on the founders, builders and innovators who arrived in the UK under an innovation or talent visa route &mdash; and built something truly significant.</p>
                        <p style={S.body}>The UK&apos;s visa innovation routes &mdash; the Global Talent Visa, Innovator Founder Visa, and their predecessors &mdash; have brought exceptional people to these shores. Many have founded companies that are now reshaping industries. Yet their stories are rarely told together.</p>
                        <p style={S.body}>This is Year 1. We are starting a movement.</p>
                    </div>
                    <div style={S.imagePlaceholder}>[ FOUNDER PHOTOGRAPHY ]</div>
                </div>
            </div>

            <div style={S.yellowBar}>
                <span style={S.barItem}>INNOVATOR FOUNDER VISA</span>
                <span style={S.barItem}>|</span>
                <span style={S.barItem}>GLOBAL TALENT VISA</span>
                <span style={S.barItem}>|</span>
                <span style={S.barItem}>LEGACY INNOVATION ROUTES</span>
            </div>

            <div style={S.altSection}>
                <div style={S.twoCol}>
                    <div style={S.imagePlaceholder}>[ ELIGIBILITY ILLUSTRATION ]</div>
                    <div>
                        <p style={S.sectionEyebrow}>Who Can Apply</p>
                        <h2 style={S.sectionTitle}>Eligibility</h2>
                        <p style={S.body}>To be eligible for the Global Innovation Awards, you must have founded or co-founded a UK-based company and have arrived in the UK under one of the following visa routes:</p>
                        <ul style={{ color: "#aaaaaa", fontSize: 16, lineHeight: 2.2, paddingLeft: 20 }}>
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

            <div style={S.section}>
                <p style={{ ...S.sectionEyebrow, textAlign: "center" }}>How It Works</p>
                <h2 style={{ ...S.sectionTitle, textAlign: "center", maxWidth: 600, margin: "0 auto 60px" }}>The Two-Stage Process</h2>
                <div style={S.stepsGrid}>
                    {[
                        { num: "01", title: "Open Nominations", body: "Nominations open on 15 May 2026 and close on 15 July 2026. Anyone can nominate a founder — including self-nomination. Each nominee must meet the visa route eligibility criteria." },
                        { num: "02", title: "Judging & Shortlist", body: "Our independent panel of judges reviews all nominations. A shortlist of five finalists per category is announced on 20 August 2026. Judges score against published criteria for each category." },
                        { num: "03", title: "Awards Evening", body: "Winners are announced at a premium in-person Awards Evening in London in October 2026. Tickets are available to founders, investors, sponsors and the broader innovation community." },
                        { num: "04", title: "Media & Legacy", body: "Winners and finalists receive significant media coverage through our partner network. Their stories become part of the permanent record of immigrant innovation in the UK." },
                    ].map((s) => (
                        <div key={s.num} style={S.stepCard}>
                            <div style={S.stepNum}>{s.num}</div>
                            <h3 style={S.stepTitle}>{s.title}</h3>
                            <p style={S.stepBody}>{s.body}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ ...S.altSection, textAlign: "center" }}>
                <p style={S.sectionEyebrow}>About NEXUS</p>
                <h2 style={{ ...S.sectionTitle, maxWidth: 700, margin: "0 auto 24px" }}>Powered by NEXUS</h2>
                <p style={{ ...S.body, maxWidth: 700, margin: "0 auto 40px" }}>NEXUS is the community and platform for global talent building in the UK. We connect founders, investors and the people who support them. The Global Innovation Awards is our flagship recognition programme.</p>
                <a href="#" style={S.ctaBtn}>Submit a Nomination</a>
            </div>

            <footer style={S.footer}>
                <div>
                    <p style={S.footerTitle}>Global Innovation Awards</p>
                    <p style={S.footerText}>The UK&apos;s first awards celebrating innovators who built something significant after arriving under an innovation or talent visa route.</p>
                </div>
                <div>
                    <p style={S.footerTitle}>Navigate</p>
                    <p style={S.footerText}>
                        <a href="/" style={footerLinks}>Home</a>
                        <a href="/categories" style={footerLinks}>Categories</a>
                        <a href="/about" style={footerLinks}>About</a>
                        <a href="/tickets" style={footerLinks}>Tickets</a>
                        <a href="/faqs" style={{ ...footerLinks, marginBottom: 0 }}>FAQs</a>
                    </p>
                </div>
                <div>
                    <p style={S.footerTitle}>Contact</p>
                    <p style={S.footerText}>hello@globalinnovatorawards.com</p>
                    <p style={{ ...S.footerText, marginTop: 8 }}>&copy; 2026 Global Innovation Awards. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
