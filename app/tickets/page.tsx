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
    hero: { background: BLACK, padding: "120px 60px 100px", textAlign: "center", borderBottom: "1px solid #1a1a1a", minHeight: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
    eyebrow: { color: YELLOW, fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontSize: 13, letterSpacing: 6, textTransform: "uppercase", marginBottom: 24 },
    pageTitle: { fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: 80, lineHeight: 1, letterSpacing: -2, marginBottom: 24, textTransform: "uppercase", maxWidth: 900 },
    dateLine: { fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontSize: 28, letterSpacing: 4, color: YELLOW, textTransform: "uppercase", marginBottom: 40 },
    comingSoonBadge: { display: "inline-block", border: "2px solid #DFFF13", color: YELLOW, padding: "10px 32px", fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: 6, textTransform: "uppercase", marginBottom: 40 },
    body: { color: "#aaaaaa", fontSize: 18, lineHeight: 1.8, maxWidth: 680, textAlign: "center", margin: "0 auto 40px" },
    notifySection: { padding: "80px 60px", background: "#050505", textAlign: "center" },
    sectionTitle: { fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: 48, textTransform: "uppercase", marginBottom: 20 },
    emailForm: { display: "flex", gap: 0, maxWidth: 500, margin: "0 auto", height: 52 },
    emailInput: { flex: 1, background: "#111", border: "1px solid #333", borderRight: "none", color: WHITE, padding: "0 20px", fontSize: 14, outline: "none", fontFamily: "'General Sans',sans-serif" },
    submitBtn: { background: YELLOW, color: BLACK, border: "none", padding: "0 28px", fontFamily: "'General Sans',sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer" },
    eventSection: { padding: "80px 60px", maxWidth: 1200, margin: "0 auto" },
    detailsGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, marginTop: 60 },
    detailCard: { background: "#0a0a0a", border: "1px solid #1a1a1a", padding: 40 },
    detailIcon: { fontSize: 32, marginBottom: 16, display: "block" },
    detailLabel: { color: YELLOW, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 },
    detailValue: { fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: 24, textTransform: "uppercase" },
    footer: { background: "#050505", borderTop: "1px solid #1a1a1a", padding: "60px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40, marginTop: 80 },
    footerTitle: { fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: 2, textTransform: "uppercase", color: YELLOW, marginBottom: 16 },
    footerText: { color: "#666", fontSize: 14, lineHeight: 1.8 },
}

const footerLinks = { color: "#666", display: "block", marginBottom: 8, textDecoration: "none" }

const eventDetails = [
    { icon: "📅", label: "When", value: "October 2026" },
    { icon: "📍", label: "Where", value: "London, UK" },
    { icon: "🎭", label: "What", value: "Gala Dinner + Awards" },
    { icon: "👥", label: "Who", value: "Founders, Investors, Press" },
    { icon: "🏆", label: "How Many", value: "11 Categories" },
    { icon: "✨", label: "Vibe", value: "Premium - Inspiring" },
]

export default function TicketsPage() {
    return (
        <div style={S.page}>
            <nav style={S.nav}>
                <a href="/" style={S.logo}>GLOBAL INNOVATION AWARDS</a>
                <div style={S.navLinks}>
                    <a href="/" style={S.navLink}>Home</a>
                    <a href="/categories" style={S.navLink}>Categories</a>
                    <a href="/about" style={S.navLink}>About</a>
                    <a href="/tickets" style={{ ...S.navLink, color: YELLOW }}>Tickets</a>
                    <a href="/faqs" style={S.navLink}>FAQs</a>
                    <a href="#" style={S.ctaBtn}>Nominate</a>
                </div>
            </nav>

            <div style={S.hero}>
                <p style={S.eyebrow}>Awards Evening - October 2026 - London</p>
                <h1 style={S.pageTitle}>Get Your Tickets</h1>
                <p style={S.dateLine}>October 2026 - London</p>
                <div style={S.comingSoonBadge}>Tickets Available from July 2026</div>
                <p style={S.body}>Join us for a premium awards evening celebrating the founders and innovators who came to the UK and built something extraordinary.</p>
                <a href="#notify" style={S.ctaBtn}>Notify Me When Tickets Open</a>
            </div>

            <div style={S.eventSection}>
                <p style={{ color: YELLOW, fontSize: 12, letterSpacing: 5, textTransform: "uppercase", textAlign: "center", marginBottom: 16 }}>Event Details</p>
                <h2 style={{ ...S.sectionTitle, textAlign: "center" }}>A Night to Remember</h2>
                <div style={S.detailsGrid}>
                    {eventDetails.map((d) => (
                        <div key={d.label} style={S.detailCard}>
                            <span style={S.detailIcon}>{d.icon}</span>
                            <p style={S.detailLabel}>{d.label}</p>
                            <p style={S.detailValue}>{d.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div id="notify" style={S.notifySection}>
                <p style={{ color: YELLOW, fontSize: 12, letterSpacing: 5, textTransform: "uppercase", marginBottom: 16 }}>Stay Informed</p>
                <h2 style={S.sectionTitle}>Get Notified When Tickets Open</h2>
                <p style={{ color: "#aaaaaa", fontSize: 16, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 40px" }}>Tickets go on sale in July 2026. Enter your email to be first to know.</p>
                <div style={S.emailForm}>
                    <input type="email" placeholder="Your email address" style={S.emailInput} />
                    <button style={S.submitBtn}>Notify Me</button>
                </div>
            </div>

            <footer style={S.footer}>
                <div>
                    <p style={S.footerTitle}>Global Innovation Awards</p>
                    <p style={S.footerText}>The UK&apos;s first awards celebrating immigrant innovators.</p>
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
                </div>
            </footer>
        </div>
    )
}
