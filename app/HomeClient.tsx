"use client"

import { useState, useEffect } from "react"

import React from "react"

import Nav from "./components/Nav"

import Footer from "./components/Footer"

import AnimateIn from "./components/AnimateIn"
import { NOMINATE_URL } from "./lib/links"

import { useBreakpoint } from "./hooks/useBreakpoint"



/* ── Brand tokens (PDF non-negotiables) ── */

const Y    = "#DFFF13"

const BK   = "#000000"

const W    = "#FFFFFF"

const DARK = "#0D0D0D"

const BORDER = "#222222"

const MUTED  = "rgba(255,255,255,0.58)"

const HEAD   = "'Barlow Condensed','Anton',Impact,sans-serif"

const BODY   = "'General Sans','Inter',system-ui,sans-serif"

const MAXW   = 1280



/* ── Countdown ── */

const DEADLINE = new Date("2026-06-15T10:00:00+01:00")

function useCountdown(target: Date) {

    const calc = () => {

        const diff = target.getTime() - Date.now()

        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

        return {

            days:    Math.floor(diff / 86400000),

            hours:   Math.floor((diff % 86400000) / 3600000),

            minutes: Math.floor((diff % 3600000)  / 60000),

            seconds: Math.floor((diff % 60000)    / 1000),

        }

    }

    const [time, setTime] = useState(calc)

    useEffect(() => {

        const id = setInterval(() => setTime(calc()), 1000)

        return () => clearInterval(id)

    }, [])

    return time

}



/* ── Style helpers ── */

const wrap: React.CSSProperties = { maxWidth: MAXW, margin: "0 auto", padding: "0 48px", boxSizing: "border-box" }

// responsive wrap applied per-component via bpWrap(bp)



const badge = (extra?: React.CSSProperties): React.CSSProperties => ({

    display: "inline-block",

    background: "rgba(223,255,19,0.08)",

    border: "1px solid rgba(223,255,19,0.22)",

    color: Y, fontSize: 11, fontWeight: 700,

    letterSpacing: "0.28em", textTransform: "uppercase",

    padding: "4px 14px", marginBottom: 20, fontFamily: BODY,

    ...extra,

})



const h2Base: React.CSSProperties = {

    fontFamily: HEAD, fontWeight: 900, textTransform: "uppercase",

    lineHeight: 1.0, margin: 0, color: W,

}



/* ── SVG Icons — BLACK stroke on Yellow boxes ── */

const IconAward = () => (

    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={BK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

        <circle cx="12" cy="8" r="6" />

        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />

    </svg>

)

const IconUsers = () => (

    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={BK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />

        <circle cx="9" cy="7" r="4" />

        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />

        <path d="M16 3.13a4 4 0 0 1 0 7.75" />

    </svg>

)

const IconMegaphone = () => (

    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={BK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

        <path d="m3 11 18-5v12L3 14v-3z" />

        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />

    </svg>

)

const IconArrowRight = () => (

    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">

        <path d="M5 12h14M12 5l7 7-7 7" />

    </svg>

)

const IconCheck = () => (

    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={BK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">

        <path d="M20 6 9 17l-5-5" />

    </svg>

)



/* ── Data ── */

const SHOW_JUDGES = true // First 4 confirmed judges live; more to be announced (targeting 10-12 total)

const HERO_TICKER = [
    "NOMINATIONS OPEN NOW","•","FREE TO ENTER","•","10 AWARD CATEGORIES","•","AWARDS EVENING — 16 NOVEMBER 2026, CENTRAL LONDON","•","ENTRY DEADLINE AUGUST 2026","•",
    "NOMINATIONS OPEN NOW","•","FREE TO ENTER","•","10 AWARD CATEGORIES","•","AWARDS EVENING — 16 NOVEMBER 2026, CENTRAL LONDON","•","ENTRY DEADLINE AUGUST 2026","•",
]

const JUDGES = [

    { name: "Vanessa Fu", role: "Co-CEO of Pall Mall Investments International", img: "/judges/vanessa-fu.webp", linkedin: "https://uk.linkedin.com/in/vanessa-fu-04617231", bio: "With more than 20 years of experience working between the UK and China, Vanessa brings a powerful cross-border perspective on international business, investment and innovation. After beginning her career in corporate law in Beijing, Vanessa joined London & Partners, where she helped attract Chinese investment into London. She later moved into financial services, advising entrepreneurs, investors and businesses on UK and international opportunities, with a particular focus on strengthening commercial links between the UK and Asia. In 2020, Vanessa co-founded Pall Mall Investments International, one of the UK's legacy endorsing bodies for the Innovator Founder visa. Through the firm, she has assessed and mentored hundreds of international entrepreneurs, supporting them to establish, invest and scale in the UK. As a judge, Vanessa will bring her commercial expertise, international outlook and deep understanding of what it takes to build an innovative, viable and impactful business." },

    { name: "Nathan March", role: "Innovation Ecosystems Manager, Barclays Innovation Banking", img: "/judges/nathan-march.webp", linkedin: "https://www.linkedin.com/in/nathanjmarch", bio: "Nathan builds and strengthens relationships across investor networks, universities and spinouts, technology clusters, professional services and government-backed organisations. With a background spanning banking, the public sector and academia, he brings extensive experience in strategic partnership development, business growth and building the ecosystems that enable innovative companies to grow and scale sustainably. Nathan's work is grounded in collaboration: connecting ambitious businesses with the partners, opportunities and expertise that can help turn innovation into measurable commercial and economic impact. His understanding of what growing businesses need and the networks required to support them will bring an important perspective to this year's judging panel." },

    { name: "Alexandra Leader", role: "Head of SME Delivery, City of London Corporation", img: "/judges/alexandra-leader.webp", linkedin: "https://www.linkedin.com/in/alexmleader", bio: "Alex is a senior leader with over 20 years' experience working across both the public and private sectors, where she's built a reputation for bringing people together and turning ideas into action. She currently leads the SME Strategy at the City of London Corporation, where she focuses on supporting business growth, strengthening partnerships, and helping shape a thriving business ecosystem in the City. Throughout her career, Alex has been passionate about creating meaningful connections, whether that is with business leaders, policymakers, or entrepreneurs, and turning those relationships into real, positive outcomes. She is known for her collaborative style and her ability to navigate complex environments while keeping people at the heart of what she does. Alongside her strategic role, Alex is a strong advocate for women in business and inclusive economic growth and plays an active part in the City's Business and Investment Unit." },

    { name: "Afua Basoah", role: "Co-Founder and General Partner, Fern Capital Group", img: "/judges/afua-basoah.webp", linkedin: "https://www.linkedin.com/in/afua-basoah-dphil-frsa-4b58a722", bio: "Afua is a health strategist, investor and ecosystem builder whose career sits at the intersection of healthcare, capital and innovation. As Co-Founder and General Partner of Fern Capital Group, she backs early-stage women's health companies across the UK, Europe and Africa, supporting founders building solutions in one of healthcare's fastest-growing and most underserved sectors. With more than 20 years of experience spanning venture capital, life sciences, commercialisation and growth strategy, Afua brings a unique perspective on identifying innovation with the potential to create lasting impact. Her work advising pharmaceutical, biotech and health organisations, alongside her commitment to advancing inclusive innovation, makes her an outstanding addition to our judging panel." },

]

const judgeInitials = (name: string) => name.split(" ").filter(Boolean).map((w) => w[0]).join("").slice(0, 2).toUpperCase()



const WHY_ENTER = [

    { Icon: IconAward,     num: "01", title: "Credibility & Accreditation", cta: "Prove Trust",       body: "Being selected by an independent panel of industry judges sends a clear signal, to customers, investors and partners, that your work stands up to scrutiny." },

    { Icon: IconUsers,     num: "02", title: "Unrivalled Networking",       cta: "Scale Connections", body: "Spend an evening in a room with fellow innovators, leading venture capital investors, policymakers and government representatives. The connections you make here don't happen anywhere else." },

    { Icon: IconMegaphone, num: "03", title: "National Press & Coverage",   cta: "Command Spotlight", body: "Winners and finalists are featured across our media partner network, reaching mainstream tech channels, innovation publications and our wider partner ecosystem. Additionally, each category winner will be featured on a podcast, spotlighting their success." },

]



const MARQUEE_ITEMS = [

    "INNOVATOR FOUNDER VISA","•","GLOBAL TALENT VISA","•","LEGACY INNOVATION ROUTES",

    "INNOVATOR FOUNDER VISA","•","GLOBAL TALENT VISA","•","LEGACY INNOVATION ROUTES",

]



export default function HomePage() {

    const [activeJudge, setActiveJudge] = useState<number | null>(null)

    const fireCelebration = async () => {
        try {
            const confetti = (await import("canvas-confetti")).default
            const colors = ["#DFFF13", "#FFFFFF"]
            const steps = 10
            for (let i = 0; i < steps; i++) {
                setTimeout(() => {
                    confetti({ particleCount: 48, angle: 90, spread: 78, startVelocity: 60, origin: { x: (i + 0.5) / steps, y: 1.05 }, colors, scalar: 1.05, ticks: 240 })
                }, i * 110)
            }
        } catch {
            // confetti is non-critical
        }
    }

    const bp = useBreakpoint()

    const isMobile  = bp === "mobile"

    const isTablet  = bp === "tablet"

    const isSmall   = isMobile || isTablet

    const hPad      = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 48px"

    const W_OBJ: React.CSSProperties = { maxWidth: MAXW, margin: "0 auto", padding: hPad, boxSizing: "border-box" }

    const secPad    = isMobile ? "72px 20px" : isTablet ? "80px 32px" : "96px 48px"



    useEffect(() => {
        fireCelebration()
    }, [])



    return (

        <div style={{ fontFamily: BODY, background: BK, color: W, width: "100%", overflowX: "hidden" }}>

            {/* Announcement ticker — running banner above the nav */}
            <div style={{ background: Y, padding: "10px 0", overflow: "hidden", borderBottom: `2px solid ${BK}` }}>
                <div className="marquee-track">
                    {HERO_TICKER.map((item, i) => (
                        <span key={i} style={{ color: BK, fontFamily: BODY, fontWeight: 700, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", flexShrink: 0 }}>{item}</span>
                    ))}
                </div>
            </div>

            <Nav />



            {/* ═══════════════════════════════════════

                HERO — Two-column: text left, timer right

                (stacks on mobile/tablet)

            ═══════════════════════════════════════ */}

            <section style={{ position: "relative", minHeight: isSmall ? "auto" : "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: BK }}>



                {/* Subtle background glow */}

                <div style={{ position: "absolute", top: "30%", left: "25%", width: 600, height: 500, background: "radial-gradient(ellipse, rgba(223,255,19,0.045) 0%, transparent 65%)", pointerEvents: "none" }} />

                <div style={{ position: "absolute", top: "20%", right: "10%", width: 400, height: 400, background: "radial-gradient(ellipse, rgba(223,255,19,0.025) 0%, transparent 60%)", pointerEvents: "none" }} />



                <div style={{ ...W_OBJ, display: "grid", gridTemplateColumns: isSmall ? "1fr" : "1.1fr 0.9fr", gap: isSmall ? 48 : 72, alignItems: "center", paddingTop: isSmall ? 80 : 100, paddingBottom: isSmall ? 80 : 100, position: "relative", zIndex: 1 }}>



                    {/* ── LEFT — Text content ── */}

                    <AnimateIn from={isSmall ? "up" : "left"}>

                        <div style={{ textAlign: isSmall ? "center" : "left" }}>



                            {/* Tagline */}

                            <div className="pulse-subtle" style={{ color: Y, fontSize: 12, fontWeight: 700, letterSpacing: "0.20em", marginBottom: 28, textTransform: "uppercase", fontFamily: BODY }}>

                                CELEBRATE.&nbsp; SHOWCASE.&nbsp; SPOTLIGHT.

                            </div>



                            {/* Headline */}

                            <h1 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(48px,7vw,100px)", lineHeight: 0.93, letterSpacing: "-0.015em", margin: "0 0 28px", textTransform: "uppercase" }}>

                                Global<br />Innovator<br />Awards 2026

                            </h1>



                            {/* Yellow accent rule — centered on mobile */}

                            <div style={{ width: 56, height: 3, background: Y, margin: isSmall ? "0 auto 28px" : "0 0 28px", boxShadow: `0 0 12px ${Y}60` }} />



                            {/* Subtitle */}

                            <p style={{ fontSize: 17, lineHeight: 1.82, color: MUTED, margin: "0 0 36px", maxWidth: 520, fontFamily: BODY }}>

                                Recognising the founders, innovators and exceptional talent who chose the UK, and are delivering on their ambition.

                            </p>



                            {/* CTAs */}

                            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28, justifyContent: isSmall ? "center" : "flex-start" }}>

                                <a href={NOMINATE_URL} target="_blank" rel="noopener noreferrer"
                                    className="btn-primary"
                                    style={{ background: Y, color: BK, padding: "15px 36px", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: BODY }}>

                                    NOMINATE | APPLY NOW <IconArrowRight />

                                </a>

                                <a href="/about"

                                    className="btn-ghost"

                                    style={{ background: "transparent", color: W, border: "1px solid rgba(255,255,255,0.28)", padding: "15px 36px", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: BODY }}>

                                    Explore Process

                                </a>

                            </div>



                        </div>

                    </AnimateIn>



                    {/* ── RIGHT — Redesigned horizontal countdown ── */}

                    <AnimateIn from={isSmall ? "up" : "right"} delay={120}>

                        <div style={{ background: "#050505", border: `1px solid ${BORDER}`, boxShadow: "0 32px 80px rgba(0,0,0,0.55)" }}>



                            {/* Card header */}

                            <div style={{ padding: "20px 24px 18px", borderBottom: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>

                                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: Y, boxShadow: `0 0 8px ${Y}, 0 0 18px ${Y}70`, flexShrink: 0 }} />

                                    <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.34em", color: "rgba(255,255,255,0.62)", textTransform: "uppercase", fontFamily: BODY }}>

                                        NOW LIVE

                                    </span>

                                </div>

                                <span style={{ background: Y, color: BK, fontSize: 8, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", padding: "3px 10px", fontFamily: BODY }}>

                                    NOMINATIONS OPEN

                                </span>

                            </div>



                            {/* Celebration */}
                            <div style={{ padding: "44px 28px 40px", textAlign: "center" }}>
                                <div style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(30px,4.5vw,44px)", lineHeight: 1.05, color: W, textTransform: "uppercase", marginBottom: 12 }}>Nominations Are<br />Now Live</div>
                                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, fontFamily: BODY, margin: "0 auto 26px", maxWidth: 320 }}>Put yourself, or someone exceptional, forward.</p>
                                <a href={NOMINATE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: Y, color: BK, padding: "14px 34px", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: BODY }}>NOMINATE | APPLY NOW <IconArrowRight /></a>
                            </div>

                            {/* Card footer - ceremony */}
                            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "14px 24px", display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}>
                                <span style={{ fontSize: 8, color: "rgba(255,255,255,0.62)", letterSpacing: "0.24em", textTransform: "uppercase", fontFamily: BODY }}>Ceremony</span>
                                <span style={{ fontFamily: HEAD, fontWeight: 900, fontSize: 16, letterSpacing: "0.04em", color: Y }}>16 NOV 2026 · LONDON</span>
                            </div>

                        </div>

                    </AnimateIn>



                </div>

            </section>



            {/* ═══════════════════════════════════════

                SECTION 2 — ELIGIBILITY

                London skyscrapers image with Ken Burns motion

            ═══════════════════════════════════════ */}

            <section style={{ background: DARK, padding: secPad, borderTop: `1px solid ${BORDER}`, position: "relative", overflow: "hidden" }}>

                <div style={W_OBJ}>

                    <div style={{ display: "grid", gridTemplateColumns: isSmall ? "1fr" : "5fr 7fr", gap: isSmall ? 40 : 64, alignItems: "center" }}>



                        {/* Left — text */}

                        <AnimateIn from="left">

                            <div>

                                <span style={badge()}>ELIGIBILITY FRAMEWORK</span>

                                <h2 style={{ ...h2Base, fontSize: "clamp(30px,4vw,50px)", marginBottom: 24 }}>

                                    ELIGIBILITY

                                </h2>

                                <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: 1.82, marginBottom: 16, fontFamily: BODY }}>

                                    The Global Innovator Awards is the UK&apos;s first awards programme dedicated to recognising the achievements of founders, innovators, and exceptional talent who came to the UK under a qualifying innovation or talent route.

                                </p>

                                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.82, marginBottom: 32, fontFamily: BODY }}>

                                    Whether you are building a business from the ground up, launching a deep science venture, bringing exceptional creative or technical expertise to a UK organisation, you belong in this room.

                                </p>

                                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                                    {[

                                        { title: "Free to Enter", body: "Entry is free. Both self-nomination and third-party nomination are accepted across all 10 categories." },

                                        { title: "Qualifying Route",   body: "At least one founder, co-founder or named individual must hold, or have previously held, an Innovator Founder Visa, Global Talent Visa, Graduate Visa or an equivalent legacy innovation or talent route." },

                                    ].map((item) => (

                                        <div key={item.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>

                                            <span style={{ background: Y, borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>

                                                <IconCheck />

                                            </span>

                                            <div>

                                                <div style={{ color: W, fontWeight: 700, fontSize: 14, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4, fontFamily: BODY }}>{item.title}</div>

                                                <div style={{ color: MUTED, fontSize: 13, lineHeight: 1.65, fontFamily: BODY }}>{item.body}</div>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </AnimateIn>



                        {/* Right — London Big Ben with Ken Burns motion (no hover effect) */}

                        <AnimateIn from="right" delay={120}>

                            <div style={{ position: "relative", border: `1px solid ${BORDER}`, overflow: "hidden" }}>

                                {/* Ken Burns motion wrapper */}

                                <div style={{ overflow: "hidden", aspectRatio: "4/3" }}>

                                    <img

                                        src="/london-bigben.webp"

                                        alt="Big Ben and a London street with light trails at night"

                                        className="ken-burns-city"

                                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", objectPosition: "center top", filter: "brightness(0.88)", transformOrigin: "center center" }}

                                    />

                                </div>

                                {/* Gradient overlay */}

                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 42%)", pointerEvents: "none" }} />

                                {/* Stat card */}

                                <div style={{ position: "absolute", bottom: 20, left: 18, right: 18, background: "rgba(0,0,0,0.92)", border: `1px solid ${BORDER}`, padding: "18px 22px" }}>

                                    <div style={{ color: Y, fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 8, fontFamily: BODY }}>SUCCESS INSIGHT</div>

                                    <p style={{ color: W, fontSize: 13, lineHeight: 1.65, margin: 0, fontFamily: BODY }}>

                                        Visa-supported startups contribute to the over <strong style={{ color: Y }}>$1.2 trillion</strong> valuation of the UK innovation ecosystem. The Global Innovator Awards ensures these stories are recognised.

                                    </p>

                                </div>

                            </div>

                        </AnimateIn>

                    </div>

                </div>



                {/* Animated marquee slider */}

                <div style={{ marginTop: isSmall ? 48 : 80, width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", background: Y, padding: "16px 0", overflow: "hidden", borderTop: `2px solid ${BK}`, borderBottom: `2px solid ${BK}` }}>

                    <div className="marquee-track">

                        {MARQUEE_ITEMS.map((item, i) => (

                            <span key={i} style={{ color: BK, fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(16px,2.2vw,28px)", letterSpacing: "0.18em", textTransform: "uppercase", flexShrink: 0 }}>

                                {item}

                            </span>

                        ))}

                    </div>

                </div>

            </section>



            {/* ═══════════════════════════════════════

                SECTION 3 — WHY ENTER THE GLOBAL INNOVATOR AWARDS?

                3 cards with correct BLACK SVG icons on yellow

            ═══════════════════════════════════════ */}

            <section style={{ background: BK, padding: secPad, borderTop: `1px solid ${BORDER}` }}>

                <div style={W_OBJ}>

                    <AnimateIn>

                        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 56px" }}>

                            <span style={badge()}>AWARDS IMPACT</span>

                            <h2 style={{ ...h2Base, fontSize: "clamp(40px,5.5vw,72px)", marginBottom: 20 }}>

                                WHY ENTER THE GLOBAL INNOVATOR AWARDS?

                            </h2>

                            <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.75, fontFamily: BODY, maxWidth: 620, margin: "0 auto" }}>

                                Being shortlisted or winning puts you in front of the people, press and organisations that matter.

                            </p>

                        </div>

                    </AnimateIn>



                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)", gap: 20, alignItems: "stretch" }}>

                        {WHY_ENTER.map((card, i) => (

                            <AnimateIn key={card.num} delay={i * 100} style={{ height: "100%" }}>

                                <div

                                    className="card-hover"

                                    style={{ background: "#0d0d0d", border: `1px solid ${BORDER}`, padding: "40px 36px 36px", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}

                                >

                                    <div>

                                        {/* Electric Yellow icon box with BLACK SVG icon */}

                                        <div style={{ width: 56, height: 56, background: Y, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28 }}>

                                            <card.Icon />

                                        </div>

                                        <h3 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: 24, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: 16, color: W, lineHeight: 1.1 }}>

                                            {card.title}

                                        </h3>

                                        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.82, margin: 0, fontFamily: BODY }}>

                                            {card.body}

                                        </p>

                                    </div>

                                    <div style={{ color: Y, fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 32, display: "flex", alignItems: "center", gap: 6, fontFamily: BODY }}>

                                        {card.num} / {card.cta} <IconArrowRight />

                                    </div>

                                </div>

                            </AnimateIn>

                        ))}

                    </div>

                </div>

            </section>



            {/* ═══════════════════════════════════════

                SECTION 5 — EXPLORE THE AWARD CATEGORIES

            ═══════════════════════════════════════ */}

            <section style={{ background: BK, padding: isMobile ? "56px 20px" : isTablet ? "64px 32px" : "80px 48px", borderTop: `1px solid ${BORDER}` }}>

                <AnimateIn>

                    <div style={{ ...W_OBJ, background: DARK, border: `1px solid ${BORDER}`, padding: isSmall ? "40px 28px" : "64px 72px", display: "flex", alignItems: isSmall ? "flex-start" : "center", justifyContent: "space-between", gap: isSmall ? 28 : 48, position: "relative", overflow: "hidden", flexDirection: isSmall ? "column" : "row" }}>

                        <div style={{ position: "absolute", bottom: 0, left: 0, width: 400, height: 280, background: "radial-gradient(circle at bottom left, rgba(223,255,19,0.05), transparent 65%)", pointerEvents: "none" }} />

                        <div style={{ maxWidth: 680, position: "relative" }}>

                            <span style={badge()}>10 DISCIPLINE CATEGORIES</span>

                            <h2 style={{ ...h2Base, fontSize: "clamp(28px,4vw,50px)", marginBottom: 16 }}>

                                EXPLORE THE AWARD CATEGORIES

                            </h2>

                            <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.75, margin: 0, fontFamily: BODY }}>

                                From founders and co-founding teams to global talent, creative innovators and ecosystem builders, find the category that fits and nominate yourself or someone who deserves to be in the room.

                            </p>

                        </div>

                        <a href="/categories"

                            className="btn-primary"

                            style={{ background: Y, color: BK, padding: "16px 40px", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: BODY, flexShrink: 0, boxShadow: `0 4px 24px rgba(223,255,19,0.22)` }}>

                            SEE ALL CATEGORIES <IconArrowRight />

                        </a>

                    </div>

                </AnimateIn>

            </section>



            {/* ═══════════════════════════════════════

                SECTION 5b — MEET THE JUDGES

                Initials avatar, bio expand on click

            ═══════════════════════════════════════ */}

            {SHOW_JUDGES && (
            <section style={{ background: DARK, padding: secPad, borderTop: `1px solid ${BORDER}` }}>

                <div style={W_OBJ}>

                    <AnimateIn>

                        <div style={{ marginBottom: isSmall ? 40 : 56 }}>

                            <span style={badge()}>INDEPENDENT JURY</span>

                            <h2 style={{ ...h2Base, fontSize: "clamp(34px,5vw,60px)", marginBottom: 12 }}>MEET THE JUDGES</h2>

                            <p style={{ color: MUTED, fontSize: 15, maxWidth: 640, fontFamily: BODY, lineHeight: 1.7 }}>

                                Leading investors, ecosystem builders and industry leaders assessing candidates objectively.

                            </p>

                        </div>

                    </AnimateIn>



                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)", gap: isSmall ? 12 : 28, alignItems: "stretch" }}>

                        {JUDGES.map((j, i) => (

                            <AnimateIn key={j.name} delay={i * 90} style={{ height: "100%" }}>

                                <div

                                    className="judge-card"

                                    style={{ background: BK, border: `1px solid ${BORDER}`, padding: isMobile ? "20px 14px" : "28px 24px", textAlign: "center", height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}

                                >

                                    {/* Circular photo, falls back to initials if none supplied */}

                                    <div

                                        onClick={() => setActiveJudge(activeJudge === i ? null : i)}

                                        style={{

                                            width: isMobile ? 88 : 130, height: isMobile ? 88 : 130, borderRadius: "50%",

                                            margin: "0 auto 14px",

                                            border: `2px solid ${activeJudge === i ? Y : "rgba(223,255,19,0.4)"}`,

                                            overflow: "hidden", cursor: "pointer", flexShrink: 0,

                                            display: "flex", alignItems: "center", justifyContent: "center",

                                            background: "rgba(223,255,19,0.06)",

                                            transition: "border-color 0.25s, transform 0.25s, background 0.25s",

                                            transform: activeJudge === i ? "scale(1.06)" : "scale(1)",

                                        }}

                                    >

                                        {j.img ? (

                                            <img

                                                src={j.img} alt={j.name}

                                                style={{ width: "100%", height: "100%", objectFit: "cover", filter: activeJudge === i ? "grayscale(0)" : "grayscale(1)", transition: "filter 0.4s, transform 0.35s", transform: activeJudge === i ? "scale(1.08)" : "scale(1)" }}

                                            />

                                        ) : (

                                            <span style={{ fontFamily: HEAD, fontWeight: 900, fontSize: isMobile ? 26 : 38, color: activeJudge === i ? Y : "rgba(223,255,19,0.55)", transition: "color 0.25s" }}>

                                                {judgeInitials(j.name)}

                                            </span>

                                        )}

                                    </div>

                                    <h4 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: isMobile ? 13 : 17, textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: 5, color: W, lineHeight: 1.15 }}>{j.name}</h4>

                                    <div style={{ color: Y, fontSize: isMobile ? 9 : 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: isMobile ? 10 : 14, fontFamily: BODY, lineHeight: 1.4 }}>{j.role}</div>



                                    {activeJudge === i ? (

                                        <div>

                                            <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.72, fontFamily: BODY, marginBottom: 12, textAlign: "left" }}>{j.bio}</p>

                                            <a href={j.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", color: Y, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", fontFamily: BODY, textDecoration: "underline", textUnderlineOffset: 4, marginBottom: 12 }}>

                                                View LinkedIn

                                            </a>

                                            <br />

                                            <button onClick={() => setActiveJudge(null)} style={{ background: "none", border: `1px solid rgba(223,255,19,0.3)`, color: Y, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer", padding: "6px 16px", fontFamily: BODY, transition: "background 0.2s" }}>

                                                ✕ Close

                                            </button>

                                        </div>

                                    ) : (

                                        <button onClick={() => setActiveJudge(i)} style={{ background: "none", border: "none", color: Y, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer", padding: 0, fontFamily: BODY, textDecoration: "underline", textUnderlineOffset: 4 }}>

                                            Read Bio

                                        </button>

                                    )}

                                </div>

                            </AnimateIn>

                        ))}

                    </div>

                    <p style={{ textAlign: "center", color: MUTED, fontSize: 13, marginTop: isSmall ? 32 : 44, fontFamily: BODY }}>

                        More judges to be announced soon.

                    </p>

                </div>

            </section>

            )}

            {/* ═══════════════════════════════════════

                SECTION 6 — AWARDS EVENING

                London aerial night — Ken Burns motion video effect

            ═══════════════════════════════════════ */}

            <section style={{ position: "relative", minHeight: 660, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>



                {/* ── Big Ben sky view — Ken Burns motion image ── */}

                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden" }}>

                    <img

                        src="/london-skyline.webp"

                        alt="City of London skyline at dusk"

                        className="ken-burns-evening"

                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", transformOrigin: "center center", filter: "brightness(0.50)" }}

                    />

                </div>



                {/* Gradient overlays */}

                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.70) 100%)" }} />

                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 38%, rgba(0,0,0,0.42) 100%)" }} />



                {/* Content */}

                <AnimateIn style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "100px 48px", width: "100%" }}>

                    <div>

                        <span style={{ ...badge({ marginBottom: 20 }) }}>EXCLUSIVE GALA CEREMONY</span>

                        <h2 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(52px,9vw,104px)", lineHeight: 0.92, margin: "0 0 16px", textTransform: "uppercase", letterSpacing: "-0.01em" }}>

                            Awards Evening

                        </h2>

                        <div style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 22, letterSpacing: "0.22em", color: Y, textTransform: "uppercase", marginBottom: 28 }}>

                            16 NOVEMBER 2026 &middot; CENTRAL LONDON

                        </div>

                        <p style={{ maxWidth: 520, margin: "0 auto 40px", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.80)", fontFamily: BODY }}>

                            150 innovators, investors and press. One night. Ten winners.

                        </p>

                        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>

                            <a href="/tickets"

                                className="btn-primary"

                                style={{ background: Y, color: BK, padding: "15px 40px", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: BODY }}>

                                GET TICKETS

                            </a>

                            <a href="/faqs"

                                className="btn-ghost"

                                style={{ background: "transparent", color: W, border: "1px solid rgba(255,255,255,0.30)", padding: "15px 40px", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: BODY }}>

                                EVENT FAQS

                            </a>

                        </div>

                    </div>

                </AnimateIn>

            </section>



            <Footer />

        </div>

    )

}



