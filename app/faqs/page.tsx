"use client"
import { useState } from "react"
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

/* 15 questions per brief */
const FAQS = [
    { q: "Who is eligible for a Global Innovation Award?", a: "You must have founded or co-founded a UK-based company and arrived in the UK under one of the following routes: Global Talent Visa, Innovator Founder Visa, Innovator Visa (legacy), Startup Visa (legacy), Tier 1 Exceptional Talent, or Tier 1 Entrepreneur." },
    { q: "Can I nominate someone else?", a: "Yes. Anyone can nominate a founder — including self-nomination. Colleagues, investors, mentors, advisors and the public are all welcome to nominate." },
    { q: "What is the nomination deadline?", a: "Nominations open 15 May 2026 and close 15 July 2026 at 23:59 BST. No nominations are accepted after the deadline." },
    { q: "How are nominees judged?", a: "An independent panel of judges assesses nominees against published criteria for each category. Judges include investors, founders and innovation leaders. Sponsors have no influence over judging." },
    { q: "When is the shortlist announced?", a: "Five finalists per category are announced on 20 August 2026. Finalists are notified directly and profiles published on this site." },
    { q: "How many categories are there?", a: "11 awards total: 10 open categories (Deep Tech, FinTech, HealthTech, CleanTech, EdTech, and more) plus one special Legacy Innovation Award." },
    { q: "Do I need to be the sole founder?", a: "No. Co-founders are eligible. At least one co-founder must have arrived under an eligible visa route." },
    { q: "My company is based outside the UK. Can I still apply?", a: "Your primary company must be incorporated and operating in the UK. Purely overseas companies are not eligible." },
    { q: "My visa was from 2015. Am I still eligible?", a: "Yes. There is no cap on how long ago you arrived. If you came on an eligible route and built something significant, you are eligible." },
    { q: "What happens if I win?", a: "Winners receive a trophy and public recognition at the Awards Evening in London in October 2026, plus media coverage through our partner network." },
    { q: "When and where is the Awards Evening?", a: "October 2026 in London. The exact venue and date will be announced in September 2026. Tickets go on sale in July 2026." },
    { q: "Can sponsors influence the judging?", a: "No. Sponsors and judges operate entirely separately with no contact. All judging is fully independent." },
    { q: "How is NEXUS involved?", a: "NEXUS organises the Global Innovation Awards as its flagship recognition programme for founders who arrived on an innovation or talent visa route." },
    { q: "What does the nomination form ask for?", a: "Nominee name and company, visa route used, award category, description of their innovation, and why they deserve to win." },
    { q: "I have a question not covered here. How do I get in touch?", a: "Email us at hello@globalinnovatorawards.com. We aim to respond within 2 business days." },
]

export default function FAQsPage() {
    const [open, setOpen] = useState<number | null>(null)

    return (
        <div style={{ fontFamily: BODY, background: BLACK, color: WHITE, width: "100%", overflowX: "hidden" }}>
            <Nav />

            {/* Hero */}
            <div style={{ background: BLACK, padding: "88px 48px 64px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
                <div style={{ color: YELLOW, fontSize: 11, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 16, fontFamily: BODY }}>Have Questions?</div>
                <h1 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(48px,9vw,80px)", lineHeight: 0.95, letterSpacing: "-0.01em", margin: 0, textTransform: "uppercase" }}>
                    Frequently Asked<br />Questions
                </h1>
            </div>

            {/* Accordion — 15 questions per brief */}
            <div style={{ maxWidth: 880, margin: "0 auto", padding: "72px 48px" }}>
                {FAQS.map((f, i) => (
                    <div key={i} style={{ borderBottom: `1px solid ${BORDER}` }}>
                        <div
                            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 0", cursor: "pointer", gap: 24 }}
                            onClick={() => setOpen(open === i ? null : i)}
                        >
                            <span style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.5, fontFamily: BODY, flex: 1 }}>{f.q}</span>
                            <button style={{ color: YELLOW, fontSize: 22, background: "none", border: "none", cursor: "pointer", flexShrink: 0, width: 28, textAlign: "center", padding: 0 }}>
                                {open === i ? "−" : "+"}
                            </button>
                        </div>
                        {open === i && (
                            <div style={{ paddingBottom: 22, color: MUTED, fontSize: 15, lineHeight: 1.8, fontFamily: BODY }}>
                                {f.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div style={{ background: "#050505", borderTop: `1px solid ${BORDER}`, padding: "80px 48px", textAlign: "center" }}>
                <h2 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(36px,6vw,56px)", textTransform: "uppercase", margin: "0 0 16px" }}>Ready to Nominate?</h2>
                <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 36px", fontFamily: BODY }}>Nominations are open until 15 July 2026. No entry fee required.</p>
                <a href="https://form.typeform.com/to/GIA2026" target="_blank" rel="noopener noreferrer" style={{ background: YELLOW, color: BLACK, padding: "14px 40px", fontFamily: BODY, fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
                    Submit a Nomination
                </a>
            </div>

            <Footer />
        </div>
    )
}
