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

const FAQS = [
    { q: "What are the Global Innovator Awards?", a: "The Global Innovator Awards is the UK's first awards programme dedicated to recognising founders, innovators and exceptional talent who came to the UK under a qualifying innovation or talent route, and are delivering on their ambition here. The awards are free to enter, independently judged, and cover 10 competitive categories plus the honorary Pioneer Award. The awards evening takes place in Central London in October 2026." },
    { q: "Who is eligible to enter?", a: "The awards are open to founders, innovators and exceptional talent who made an active decision to come to the UK under one of the following qualifying routes: Global Talent Visa (current); Innovator Founder Visa (current); Innovator Visa (previous route, closed 2023); Start-up Visa (legacy); Tier 1 Exceptional Talent (legacy); or Tier 1 Entrepreneur (legacy). Eligibility is based on the route taken, not your country of birth or nationality. You do not need to be on the visa now, previous holders are eligible." },
    { q: "Is there a fee to enter?", a: "No. Entry and nomination are completely free. There is no fee at any stage of the awards process. Attending the awards evening as a ticket holder is subject to a separate ticket purchase, but entering and nominating cost nothing." },
    { q: "Can I nominate myself, or does someone else need to nominate me?", a: "Both are welcome. Self-nomination is actively encouraged, many of the founders and innovators who have achieved the most will not be nominated by others unless they put themselves forward. Third-party nominations are equally accepted. If someone nominates you without your prior knowledge, we will contact you promptly to let you know and give you the option to proceed or withdraw." },
    { q: "How does the entry process work?", a: "The awards use a two-stage process. Stage one is an open nominations period, free, quick, and under five minutes to complete. After nominations close on 15 July 2026, we select up to 30 longlisted nominees per category. Longlisted nominees are notified by 17 July and invited to complete a full stage two submission by 31 July. Stage two submissions go to our independent judging panel, who rank their top ten. Ten finalists per category are announced publicly on or around 20 August 2026. Winners are revealed at the awards evening in October." },
    { q: "What are the key dates?", a: "Nominations open: 15 June 2026. Nominations close: 15 July 2026 (hard deadline, no extensions). Longlist notifications: by 17 July 2026. Stage two deadline: 31 July 2026. Shortlist announced: on or around 20 August 2026. Awards evening: October 2026, Central London." },
    { q: "How many categories are there and which one should I enter?", a: "There are 10 competitive categories plus the honorary Pioneer Award (nomination only). The categories are: Founder of the Year; Tech & Deep Science Innovation; Global Talent Award; Scale-Up of the Year; Co-Founding Team of the Year; Rising Star; Creative & Cultural Innovation; UK SME Global Expansion; Breakthrough Innovation of the Year; and Ecosystem Builder of the Year. Start by reading the category descriptions on the website to find the best fit. You can enter more than one category if you meet the criteria for each." },
    { q: "I'm on the Global Talent Visa but I'm not a founder. Can I enter?", a: "Yes. The Global Talent Award category is specifically for current or former Global Talent Visa holders, Exceptional Promise or Exceptional Talent endorsement, who have made an exceptional contribution to UK innovation, culture, science, technology or business as an employee, researcher, artist, designer or independent expert. You do not need to be a founder to enter this category." },
    { q: "I previously held a qualifying visa but it has since lapsed or I've become a British citizen. Am I still eligible?", a: "Yes. You do not need to be on the visa at the time of nomination. The key criterion is that you originally came to the UK under one of the qualifying routes. Previous holders, settled residents, and those who have since become British citizens are all eligible, provided they made an active adult decision to come to the UK under a qualifying route." },
    { q: "How are finalists and winners selected?", a: "Finalists are selected by an independent judge panel. Each judge is allocated to one category and ranks their top ten nominees from the stage two submissions. Aggregate rankings across all judges determine the ten publicly announced finalists per category. The highest-scoring nominee in each category is the winner, but this is not disclosed until the awards evening. Judging decisions are final." },
    { q: "Do sponsors influence the judging?", a: "No. Sponsors have absolutely no access to submissions, judge rankings, or winner decisions at any stage. Sponsoring a category gives naming rights and commercial visibility, it has no bearing on the judging outcome. All submission content is confidential and accessible only to the awards team and the relevant category judges." },
    { q: "Will my submission be kept confidential?", a: "Yes. Submission content submitted as part of your stage two entry will not be published or shared publicly without your prior written consent. Your submission is shared only with the awards team and the relevant category judge(s) for assessment purposes. It will not be shared with sponsors, media partners or any other third party." },
    { q: "What do finalists and winners receive?", a: "Finalists are featured on the awards website, in press communications and on social media. They receive a finalist digital badge and social media kit, issued within three working days of the shortlist announcement, and a discounted ticket to the awards evening. Winners receive a physical trophy presented on the night, a winner digital badge and social media kit (issued within 24 hours of the ceremony), coverage across our media partner network, and a podcast feature spotlighting their story. There is no cash prize." },
    { q: "How do I buy a ticket to the awards evening?", a: "Tickets go on sale in July 2026 via the website. Join the waitlist on globalinnovatorawards.com now for priority access and an early bird discount. Finalists receive a unique discounted ticket code communicated directly to them by the events team after the shortlist announcement. All ticket sales are final. Refunds are available only if the event is cancelled or rescheduled with no alternative date offered." },
    { q: "How do I contact the team if I have a question not answered here?", a: "The quickest way to reach us is via the live chat on globalinnovatorawards.com. You can also use the contact form on the website. We aim to respond within 24 hours." },
]

export default function FAQsPage() {
    const [open, setOpen] = useState<number | null>(null)
    const bp = useBreakpoint()
    const isMobile = bp === "mobile"
    const isTablet = bp === "tablet"
    const isSmall = isMobile || isTablet
    const hPad = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px"

    return (
        <div style={{ fontFamily: BODY, background: BK, color: W, width: "100%", overflowX: "hidden" }}>
            <Nav />

            {/* Hero */}
            <div style={{ background: BK, padding: isSmall ? "72px 20px 48px" : "88px 48px 64px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
                <div style={{ display: "inline-block", background: "rgba(223,255,19,0.08)", border: "1px solid rgba(223,255,19,0.22)", color: Y, fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", padding: "4px 14px", marginBottom: 20, fontFamily: BODY }}>Have Questions?</div>
                <h1 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(36px,8vw,80px)", lineHeight: 0.95, letterSpacing: "-0.01em", margin: 0, textTransform: "uppercase" }}>
                    {isMobile ? <>Frequently Asked<br />Questions</> : "Frequently Asked Questions"}
                </h1>
                <p style={{ color: MUTED, fontSize: isSmall ? 14 : 16, maxWidth: 620, margin: "20px auto 0", lineHeight: 1.7, fontFamily: BODY }}>
                    Can&apos;t find your answer here? Use the live chat on this page to speak to our team directly, we aim to respond within 24 hours.
                </p>
            </div>

            {/* Accordion */}
            <div style={{ maxWidth: 880, margin: "0 auto", padding: isSmall ? "48px 20px" : "72px 48px" }}>
                <AnimateIn>
                    <div>
                        {FAQS.map((f, i) => (
                            <div key={i} style={{ borderBottom: `1px solid ${BORDER}` }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: isSmall ? "18px 0" : "22px 0", cursor: "pointer", gap: 16 }}
                                    onClick={() => setOpen(open === i ? null : i)}>
                                    <span style={{ fontSize: isSmall ? 14 : 16, fontWeight: 500, lineHeight: 1.5, fontFamily: BODY, flex: 1 }}>{f.q}</span>
                                    <button style={{ color: Y, fontSize: 22, background: "none", border: "none", cursor: "pointer", flexShrink: 0, width: 28, textAlign: "center", padding: 0 }}>
                                        {open === i ? "−" : "+"}
                                    </button>
                                </div>
                                {open === i && (
                                    <div style={{ paddingBottom: 20, color: MUTED, fontSize: 14, lineHeight: 1.8, fontFamily: BODY }}>
                                        {f.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </AnimateIn>
            </div>

            {/* CTA */}
            <div style={{ background: "#050505", borderTop: `1px solid ${BORDER}`, padding: isSmall ? "64px 20px" : "80px 48px", textAlign: "center" }}>
                <h2 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(32px,6vw,52px)", textTransform: "uppercase", margin: "0 0 16px" }}>Ready to Nominate?</h2>
                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 32px", fontFamily: BODY }}>Nominations are open until 15 July 2026. No entry fee required.</p>
                <a href="https://form.typeform.com/to/GIA2026" target="_blank" rel="noopener noreferrer" className="btn-primary"
                    style={{ background: Y, color: BK, padding: "14px 40px", fontFamily: BODY, fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
                    NOMINATE | APPLY NOW
                </a>
            </div>

            <Footer />
        </div>
    )
}
