"use client"
import { useState } from "react"
import React from "react"

const YELLOW = "#DFFF13"
const BLACK = "#000000"
const WHITE = "#FFFFFF"

const categories = [
    { id: 1, name: "Best Deep Tech Innovation", icon: "⚡", description: "Recognising the most groundbreaking deep technology innovation by a visa-route founder.", criteria: ["Technological novelty and depth", "Commercial viability", "UK market impact", "Team capability"] },
    { id: 2, name: "Best FinTech Founder", icon: "💳", description: "Celebrating the founder who has built the most impactful financial technology company.", criteria: ["Revenue growth", "User adoption", "Regulatory navigation", "Innovation in finance"] },
    { id: 3, name: "Best HealthTech Innovation", icon: "🏥", description: "Honouring the most significant health technology innovation improving patient outcomes.", criteria: ["Clinical impact", "Scalability", "NHS or private sector adoption", "Patient safety"] },
    { id: 4, name: "Best CleanTech / Climate Founder", icon: "🌱", description: "Recognising the founder making the greatest contribution to climate and sustainability.", criteria: ["Carbon impact", "Scalability", "Commercial traction", "Policy influence"] },
    { id: 5, name: "Best EdTech Innovation", icon: "📚", description: "Celebrating the most impactful educational technology innovation.", criteria: ["Learning outcomes", "Accessibility", "Scale of reach", "Teacher and student adoption"] },
    { id: 6, name: "Most Fundable Early Stage Startup", icon: "🚀", description: "The startup with the most compelling investment case, judged by a panel of investors.", criteria: ["Market size", "Traction", "Team strength", "Investor-readiness"] },
    { id: 7, name: "Best Founder in Diversity & Inclusion", icon: "🤝", description: "Honouring the founder actively building a more inclusive tech ecosystem.", criteria: ["Team diversity", "Community initiatives", "Measurable impact", "Industry leadership"] },
    { id: 8, name: "Best Scale-Up Story", icon: "📈", description: "Recognising the most impressive growth trajectory from startup to scale-up.", criteria: ["Revenue growth rate", "Team growth", "Market expansion", "Operational excellence"] },
    { id: 9, name: "Best Global Talent Visa Founder", icon: "🌍", description: "Celebrating excellence among founders who arrived on the Global Talent Visa.", criteria: ["Innovation impact", "Industry recognition", "UK contribution", "Community building"] },
    { id: 10, name: "Best Innovator Founder Visa Startup", icon: "💡", description: "Honouring the best startup founded under the Innovator Founder Visa route.", criteria: ["Endorsing body assessment", "Innovation score", "Commercial progress", "Team quality"] },
    { id: 11, name: "Legacy Innovation Award", icon: "🏆", description: "A special award recognising a founder from a Legacy Innovation Route who built something truly significant for the UK.", criteria: ["Historical contribution", "Lasting impact", "Industry influence", "UK legacy"], isLegacy: true },
]

const S: Record<string, React.CSSProperties> = {
    page: { fontFamily: "'General Sans', 'Inter', sans-serif", background: BLACK, color: WHITE, width: "100%", overflowX: "hidden" },
    nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 60px", background: BLACK, position: "sticky", top: 0, zIndex: 100, borderBottom: "1px solid #1a1a1a" },
    logo: { fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif", fontWeight: 700, fontSize: 20, color: YELLOW, letterSpacing: 2, textDecoration: "none" },
    navLinks: { display: "flex", gap: 32, alignItems: "center" },
    navLink: { color: WHITE, textDecoration: "none", fontSize: 14, letterSpacing: 1, textTransform: "uppercase" },
    ctaBtn: { background: YELLOW, color: BLACK, border: "none", padding: "12px 28px", fontFamily: "'General Sans', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", textDecoration: "none", display: "inline-block" },
    hero: { background: BLACK, padding: "80px 60px 60px", textAlign: "center", borderBottom: "1px solid #1a1a1a" },
    eyebrow: { color: YELLOW, fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif", fontSize: 13, letterSpacing: 6, textTransform: "uppercase", marginBottom: 20 },
    pageTitle: { fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif", fontWeight: 700, fontSize: 72, lineHeight: 1, letterSpacing: -1, marginBottom: 20, textTransform: "uppercase" },
    pageSub: { color: "#aaaaaa", fontSize: 18, maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.6 },
    grid: { padding: "60px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 24, maxWidth: 1400, margin: "0 auto" },
    card: { background: "#0a0a0a", border: "1px solid #222", overflow: "hidden", transition: "border-color 0.2s" },
    cardHeader: { padding: "32px 32px 24px", cursor: "pointer" },
    cardIcon: { fontSize: 32, marginBottom: 16, display: "block" },
    categoryLabel: { color: YELLOW, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 },
    cardName: { fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif", fontWeight: 700, fontSize: 26, lineHeight: 1.1, marginBottom: 12, textTransform: "uppercase" },
    cardDescription: { color: "#aaaaaa", fontSize: 15, lineHeight: 1.6 },
    expandToggle: { display: "flex", alignItems: "center", gap: 8, marginTop: 20, color: YELLOW, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", background: "none", border: "none", padding: 0 },
    expandedContent: { borderTop: "1px solid #222", padding: "24px 32px 32px", background: "#050505" },
    criteriaTitle: { fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: "#666", marginBottom: 16 },
    criteriaList: { listStyle: "none", padding: 0, margin: "0 0 24px" },
    criteriaItem: { padding: "8px 0", borderBottom: "1px solid #1a1a1a", fontSize: 14, color: "#cccccc", display: "flex", alignItems: "center", gap: 8 },
    nominateBtn: { background: YELLOW, color: BLACK, border: "none", padding: "12px 24px", fontFamily: "'General Sans', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", textDecoration: "none", display: "inline-block", width: "100%", textAlign: "center" },
    footer: { background: "#050505", borderTop: "1px solid #1a1a1a", padding: "60px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 },
    footerTitle: { fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: 2, textTransform: "uppercase", color: YELLOW, marginBottom: 16 },
    footerText: { color: "#666", fontSize: 14, lineHeight: 1.8 },
}

const footerLinks = { color: "#666", display: "block", marginBottom: 8, textDecoration: "none" }

export default function CategoriesPage() {
    const [expandedCard, setExpandedCard] = useState<number | null>(null)

    return (
        <div style={S.page}>
            <nav style={S.nav}>
                <a href="/" style={S.logo}>GLOBAL INNOVATION AWARDS</a>
                <div style={S.navLinks}>
                    <a href="/" style={S.navLink}>Home</a>
                    <a href="/categories" style={{ ...S.navLink, color: YELLOW }}>Categories</a>
                    <a href="/about" style={S.navLink}>About</a>
                    <a href="/tickets" style={S.navLink}>Tickets</a>
                    <a href="/faqs" style={S.navLink}>FAQs</a>
                    <a href="#" style={S.ctaBtn}>Nominate</a>
                </div>
            </nav>

            <div style={S.hero}>
                <p style={S.eyebrow}>The Awards</p>
                <h1 style={S.pageTitle}>Award Categories</h1>
                <p style={S.pageSub}>Eleven awards recognising the innovators, founders and builders who came to the UK and built something significant.</p>
                <a href="#" style={S.ctaBtn}>Submit a Nomination</a>
            </div>

            <div style={S.grid}>
                {categories.map((cat) => (
                    <div key={cat.id} style={{ ...S.card, ...(cat.isLegacy ? { border: `1px solid ${YELLOW}` } : {}) }}>
                        <div style={S.cardHeader} onClick={() => setExpandedCard(expandedCard === cat.id ? null : cat.id)}>
                            <span style={S.cardIcon}>{cat.icon}</span>
                            <p style={S.categoryLabel}>{cat.isLegacy ? "Special Award" : `Category ${cat.id}`}</p>
                            <h3 style={S.cardName}>{cat.name}</h3>
                            <p style={S.cardDescription}>{cat.description}</p>
                            <button style={S.expandToggle}>
                                <span>{expandedCard === cat.id ? "− Hide Criteria" : "+ View Criteria"}</span>
                            </button>
                        </div>
                        {expandedCard === cat.id && (
                            <div style={S.expandedContent}>
                                <p style={S.criteriaTitle}>Judging Criteria</p>
                                <ul style={S.criteriaList}>
                                    {cat.criteria.map((c, i) => (
                                        <li key={i} style={S.criteriaItem}><span style={{ color: YELLOW }}>→</span>{c}</li>
                                    ))}
                                </ul>
                                <a href="#" style={S.nominateBtn}>Nominate for This Category</a>
                            </div>
                        )}
                    </div>
                ))}
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
