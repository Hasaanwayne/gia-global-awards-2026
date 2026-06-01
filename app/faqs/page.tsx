"use client"
import { useState } from "react"
import React from "react"

const Y = "#DFFF13", B = "#000000", W = "#FFFFFF"

const faqs = [
    { q: "Who is eligible for a Global Innovation Award?", a: "You must have founded or co-founded a UK-based company and arrived in the UK under: Global Talent Visa, Innovator Founder Visa, Innovator Visa (legacy), Startup Visa (legacy), Tier 1 Exceptional Talent, or Tier 1 Entrepreneur." },
    { q: "Can I nominate someone else?", a: "Yes. Anyone can nominate a founder — including self-nomination. Colleagues, investors, mentors, advisors and the public are all welcome to nominate." },
    { q: "What is the nomination deadline?", a: "Nominations open 15 May 2026 and close 15 July 2026 at 23:59 BST. No nominations accepted after the deadline." },
    { q: "How are nominees judged?", a: "An independent panel of judges assesses nominees against published criteria for each category. Judges include investors, founders and innovation leaders." },
    { q: "When is the shortlist announced?", a: "Five finalists per category are announced on 20 August 2026. Finalists are notified directly and profiles published on this site." },
    { q: "How many categories are there?", a: "11 awards total: 10 open categories (Deep Tech, FinTech, HealthTech, CleanTech, EdTech, and more) plus one special Legacy Innovation Award." },
    { q: "Do I need to be the sole founder?", a: "No. Co-founders are eligible. At least one co-founder must have arrived under an eligible visa route." },
    { q: "My company is based outside the UK. Can I still apply?", a: "Your primary company must be incorporated and operating in the UK. Purely overseas companies are not eligible." },
    { q: "My visa was from 2015. Am I still eligible?", a: "Yes. There is no cap on how long ago you arrived. If you came on an eligible route and built something significant, you are eligible." },
    { q: "What happens if I win?", a: "Winners receive a trophy and public recognition at the Awards Evening in London in October 2026, plus media coverage through our partner network." },
    { q: "When and where is the Awards Evening?", a: "October 2026 in London. Exact venue and date announced September 2026. Tickets on sale July 2026." },
    { q: "Can sponsors influence the judging?", a: "No. Sponsors and judges operate entirely separately with no contact. All judging is independent." },
    { q: "How is NEXUS involved?", a: "NEXUS organises the Global Innovation Awards as its flagship recognition programme for founders who arrived on an innovation or talent visa route." },
    { q: "What does the nomination form ask for?", a: "Nominee name and company, visa route used, award category, description of their innovation, and why they deserve to win." },
    { q: "I have a question not covered here. How do I get in touch?", a: "Email us at hello@globalinnovatorawards.com. We aim to respond within 2 business days." },
]

const S: Record<string, React.CSSProperties> = {
    page: { fontFamily: "'General Sans','Inter',sans-serif", background: B, color: W, width: "100%", overflowX: "hidden" },
    nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 60px", background: B, position: "sticky", top: 0, zIndex: 100, borderBottom: "1px solid #1a1a1a" },
    logo: { fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: 20, color: Y, letterSpacing: 2, textDecoration: "none" },
    nl: { display: "flex", gap: 32, alignItems: "center" },
    a: { color: W, textDecoration: "none", fontSize: 14, letterSpacing: 1, textTransform: "uppercase" },
    btn: { background: Y, color: B, border: "none", padding: "12px 28px", fontFamily: "'General Sans',sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", textDecoration: "none", display: "inline-block" },
    hero: { background: B, padding: "80px 60px 60px", textAlign: "center", borderBottom: "1px solid #1a1a1a" },
    ey: { color: Y, fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontSize: 13, letterSpacing: 6, textTransform: "uppercase", marginBottom: 20 },
    h1: { fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: 72, lineHeight: 1, letterSpacing: -1, marginBottom: 20, textTransform: "uppercase" },
    sec: { padding: "80px 60px", maxWidth: 900, margin: "0 auto" },
    fi: { borderBottom: "1px solid #1a1a1a" },
    fq: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", cursor: "pointer", gap: 24 },
    qt: { fontSize: 18, fontWeight: 500, lineHeight: 1.4 },
    tg: { color: Y, fontSize: 24, flexShrink: 0, background: "none", border: "none", cursor: "pointer" },
    fa: { padding: "0 0 24px", color: "#aaaaaa", fontSize: 16, lineHeight: 1.8 },
    cs: { background: "#050505", padding: "80px 60px", textAlign: "center", marginTop: 60 },
    ct: { fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: 56, textTransform: "uppercase", marginBottom: 20 },
    cb: { color: "#aaaaaa", fontSize: 16, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 40px" },
    ft: { background: "#050505", borderTop: "1px solid #1a1a1a", padding: "60px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 },
    ftt: { fontFamily: "'Barlow Condensed','Arial Narrow',sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: 2, textTransform: "uppercase", color: Y, marginBottom: 16 },
    ftx: { color: "#666", fontSize: 14, lineHeight: 1.8 },
}

const footerLinks = { color: "#666", display: "block", marginBottom: 8, textDecoration: "none" }

export default function FAQsPage() {
    const [open, setOpen] = useState<number | null>(null)

    return (
        <div style={S.page}>
            <nav style={S.nav}>
                <a href="/" style={S.logo}>GLOBAL INNOVATION AWARDS</a>
                <div style={S.nl}>
                    <a href="/" style={S.a}>Home</a>
                    <a href="/categories" style={S.a}>Categories</a>
                    <a href="/about" style={S.a}>About</a>
                    <a href="/tickets" style={S.a}>Tickets</a>
                    <a href="/faqs" style={{ ...S.a, color: Y }}>FAQs</a>
                    <a href="#" style={S.btn}>Nominate</a>
                </div>
            </nav>

            <div style={S.hero}>
                <p style={S.ey}>Help Centre</p>
                <h1 style={S.h1}>Frequently Asked Questions</h1>
            </div>

            <div style={S.sec}>
                {faqs.map((f, i) => (
                    <div key={i} style={S.fi}>
                        <div style={S.fq} onClick={() => setOpen(open === i ? null : i)}>
                            <span style={S.qt}>{f.q}</span>
                            <button style={S.tg}>{open === i ? "−" : "+"}</button>
                        </div>
                        {open === i && <div style={S.fa}>{f.a}</div>}
                    </div>
                ))}
            </div>

            <div style={S.cs}>
                <h2 style={S.ct}>Ready to Nominate?</h2>
                <p style={S.cb}>Nominations are open until 15 July 2026.</p>
                <a href="#" style={S.btn}>Submit a Nomination</a>
            </div>

            <footer style={S.ft}>
                <div>
                    <p style={S.ftt}>Global Innovation Awards</p>
                    <p style={S.ftx}>The UK&apos;s first awards celebrating immigrant innovators.</p>
                </div>
                <div>
                    <p style={S.ftt}>Navigate</p>
                    <p style={S.ftx}>
                        <a href="/" style={footerLinks}>Home</a>
                        <a href="/categories" style={footerLinks}>Categories</a>
                        <a href="/about" style={footerLinks}>About</a>
                        <a href="/tickets" style={footerLinks}>Tickets</a>
                        <a href="/faqs" style={{ ...footerLinks, marginBottom: 0 }}>FAQs</a>
                    </p>
                </div>
                <div>
                    <p style={S.ftt}>Contact</p>
                    <p style={S.ftx}>hello@globalinnovatorawards.com</p>
                </div>
            </footer>
        </div>
    )
}
