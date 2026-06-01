"use client"
import { useState, useEffect } from "react"
import React from "react"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import AnimateIn from "./components/AnimateIn"

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
const DEADLINE = new Date("2026-07-15T23:59:00")
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
const JUDGES = [
    { name: "Dame Helena Vance", role: "Chair of Innovate UK",    img: "https://i.pravatar.cc/150?img=33", bio: "Vance has guided over £2.4B in venture-backed grants and innovation pathways across UK institutions. A former Global Talent recipient and one of the UK's most influential voices in the innovation ecosystem." },
    { name: "Dr. Aris Thorne",   role: "GP, DeepTech Labs",       img: "https://i.pravatar.cc/150?img=11", bio: "Former Global Talent recipient, venture backer, and leading AI systems engineer from Oxford. Dr Thorne has invested in over 25 deeptech companies across the UK and Europe." },
    { name: "Siddharth Patel",   role: "Co-Founder, Aegis AI",    img: "https://i.pravatar.cc/150?img=12", bio: "Innovator Founder alum. Successfully scaled his fintech venture to £80M valuation in London. Now a board advisor to multiple UK startups and a NEXUS founding supporter." },
    { name: "Chantal de Clercq", role: "Partner, Apex Ventures",  img: "https://i.pravatar.cc/150?img=47", bio: "Over 15 years backing early-stage enterprise SaaS and border-free technologies worldwide. Chantal sits on the boards of 8 UK-based startups and is a frequent speaker on immigrant founder journeys." },
]

const WHY_ENTER = [
    { Icon: IconAward,     num: "01", title: "Credibility & Accreditation", cta: "Prove Trust",       body: "Signal to customers, institutional investors, and talent that your venture has been thoroughly vetted and approved by an expert judging panel." },
    { Icon: IconUsers,     num: "02", title: "Unrivalled Networking",       cta: "Scale Connections", body: "Connect immediately with fellow innovators, top-tier venture capital funds, policy makers, and representatives from government innovation departments during our flagship evening." },
    { Icon: IconMegaphone, num: "03", title: "National Press & Coverage",   cta: "Command Spotlight", body: "Gain immediate exposure across mainstream tech channels, innovation blogs, national news publications, and our extensive partner ecosystem." },
]

const MARQUEE_ITEMS = [
    "INNOVATOR FOUNDER VISA","•","GLOBAL TALENT VISA","•","LEGACY INNOVATION ROUTES",
    "INNOVATOR FOUNDER VISA","•","GLOBAL TALENT VISA","•","LEGACY INNOVATION ROUTES",
]

export default function HomePage() {
    const t = useCountdown(DEADLINE)
    const [activeJudge, setActiveJudge] = useState<number | null>(null)
    const [prevSec, setPrevSec] = useState(t.seconds)
    const [secKey, setSecKey] = useState(0)

    useEffect(() => {
        if (t.seconds !== prevSec) {
            setPrevSec(t.seconds)
            setSecKey(k => k + 1)
        }
    }, [t.seconds])

    return (
        <div style={{ fontFamily: BODY, background: BK, color: W, width: "100%", overflowX: "hidden" }}>
            <Nav />

            {/* ═══════════════════════════════════════
                HERO — Centered, tagline + countdown
            ═══════════════════════════════════════ */}
            <section style={{ ...wrap, paddingTop: 108, paddingBottom: 112, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>

                {/* Tagline — reduced letter-spacing per request */}
                <AnimateIn delay={0}>
                    <div className="pulse-subtle" style={{ color: Y, fontSize: 13, fontWeight: 700, letterSpacing: "0.20em", marginBottom: 30, textTransform: "uppercase", fontFamily: BODY }}>
                        CELEBRATE.&nbsp; SHOWCASE.&nbsp; SPOTLIGHT.
                    </div>
                </AnimateIn>

                <AnimateIn delay={80}>
                    <h1 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(52px,10vw,124px)", lineHeight: 0.93, letterSpacing: "-0.015em", margin: 0, textTransform: "uppercase" }}>
                        Global<br />Innovation<br />Awards 2026
                    </h1>
                </AnimateIn>

                <AnimateIn delay={160}>
                    <p style={{ maxWidth: 600, fontSize: 18, lineHeight: 1.75, color: MUTED, marginTop: 32, fontFamily: BODY }}>
                        The UK&apos;s premier awards programme celebrating innovators and founders who arrived on an innovation or talent visa &mdash; and built something extraordinary.
                    </p>
                </AnimateIn>

                {/* CTAs with premium hover animation */}
                <AnimateIn delay={240}>
                    <div style={{ display: "flex", gap: 14, marginTop: 40, flexWrap: "wrap", justifyContent: "center" }}>
                        <a href="https://form.typeform.com/to/GIA2026" target="_blank" rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ background: Y, color: BK, padding: "15px 38px", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: BODY }}>
                            Apply &amp; Nominate Now <IconArrowRight />
                        </a>
                        <a href="https://form.typeform.com/to/GIA2026nominate" target="_blank" rel="noopener noreferrer"
                            className="btn-ghost"
                            style={{ background: "transparent", color: W, border: "1px solid rgba(255,255,255,0.30)", padding: "15px 38px", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: BODY }}>
                            Nominate Someone
                        </a>
                    </div>
                </AnimateIn>

                {/* ── Premium countdown timer ── */}
                <AnimateIn delay={320} style={{ width: "100%" }}>
                    <div style={{ marginTop: 64 }}>
                        <div style={{ fontSize: 10, letterSpacing: "0.38em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: 20, fontFamily: BODY }}>
                            NOMINATIONS CLOSE IN
                        </div>

                        {/* Timer container */}
                        <div style={{ display: "inline-flex", alignItems: "stretch", background: "#080808", border: `1px solid ${BORDER}`, boxShadow: `0 0 60px rgba(223,255,19,0.04), inset 0 1px 0 rgba(255,255,255,0.04)` }}>
                            {[["Days", t.days], ["Hours", t.hours], ["Mins", t.minutes], ["Secs", t.seconds]].map(([label, value], i) => (
                                <React.Fragment key={label as string}>
                                    <div style={{ padding: "28px 36px", textAlign: "center", minWidth: 100, position: "relative" }}>
                                        {/* Top accent line */}
                                        <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 2, background: `linear-gradient(90deg, transparent, ${Y}, transparent)` }} />
                                        {/* Number */}
                                        <div
                                            key={label === "Secs" ? secKey : undefined}
                                            className={label === "Secs" ? "digit-pop" : undefined}
                                            style={{
                                                fontFamily: HEAD, fontWeight: 900,
                                                fontSize: 64, lineHeight: 1, color: W,
                                                textShadow: `0 0 30px rgba(223,255,19,0.18), 0 0 60px rgba(223,255,19,0.08)`,
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            {String(value).padStart(2, "0")}
                                        </div>
                                        {/* Label */}
                                        <div style={{ fontSize: 9, letterSpacing: "0.32em", color: Y, marginTop: 10, textTransform: "uppercase", fontFamily: BODY, fontWeight: 700 }}>
                                            {label}
                                        </div>
                                    </div>
                                    {/* Blinking colon separator */}
                                    {i < 3 && (
                                        <div className="colon-blink" style={{ display: "flex", alignItems: "center", padding: "0 2px", fontFamily: HEAD, fontWeight: 900, fontSize: 40, color: Y, opacity: 0.7, userSelect: "none" }}>
                                            :
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Deadline line */}
                        <div style={{ marginTop: 18, display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                            <div style={{ width: 32, height: 1, background: `linear-gradient(90deg, transparent, ${BORDER})` }} />
                            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.30)", letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: BODY }}>
                                Deadline: 15 July 2026 &nbsp;·&nbsp; Extended entries not permitted
                            </span>
                            <div style={{ width: 32, height: 1, background: `linear-gradient(90deg, ${BORDER}, transparent)` }} />
                        </div>
                    </div>
                </AnimateIn>
            </section>

            {/* ═══════════════════════════════════════
                SECTION 2 — WHO IS ELIGIBLE FOR NEXUS 2026?
                London skyscrapers image with Ken Burns motion
            ═══════════════════════════════════════ */}
            <section style={{ background: DARK, padding: "96px 48px", borderTop: `1px solid ${BORDER}`, position: "relative", overflow: "hidden" }}>
                <div style={wrap}>
                    <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 64, alignItems: "center" }}>

                        {/* Left — text */}
                        <AnimateIn from="left">
                            <div>
                                <span style={badge()}>ELIGIBILITY FRAMEWORK</span>
                                <h2 style={{ ...h2Base, fontSize: "clamp(30px,4vw,50px)", marginBottom: 24 }}>
                                    WHO IS ELIGIBLE FOR NEXUS 2026?
                                </h2>
                                <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, lineHeight: 1.82, marginBottom: 16, fontFamily: BODY }}>
                                    NEXUS is the UK&apos;s first awards scheme designed specifically to spotlight the achievements of founders, technologists, and scientific leaders who moved to the UK under dedicated visa pathways.
                                </p>
                                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.82, marginBottom: 32, fontFamily: BODY }}>
                                    Whether you are a solo innovator raising a Seed round, a scientific co-founder commercialising research, or a scaling tech venture contributor — if your entrepreneurial journey started with a UK Visa, this stage is yours.
                                </p>
                                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                    {[
                                        { title: "UK Registered Entities", body: "Registered active business with Companies House, incorporated within the last 7 years." },
                                        { title: "Eligible Visa Backing",   body: "At least one key founder/co-founder must have held or currently holds an Innovator, Global Talent, or equivalent tier-1 legacy visa." },
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

                        {/* Right — London skyscrapers with Ken Burns motion */}
                        <AnimateIn from="right" delay={120}>
                            <div style={{ position: "relative", border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                                {/* Ken Burns motion wrapper */}
                                <div style={{ overflow: "hidden", aspectRatio: "4/3" }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200"
                                        alt="London Canary Wharf skyscrapers"
                                        className="ken-burns-city"
                                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "grayscale(1)", transformOrigin: "center center" }}
                                        onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0)")}
                                        onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(1)")}
                                    />
                                </div>
                                {/* Gradient overlay */}
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 45%)", pointerEvents: "none" }} />
                                {/* Stat card */}
                                <div style={{ position: "absolute", bottom: 20, left: 18, right: 18, background: "rgba(0,0,0,0.92)", border: `1px solid ${BORDER}`, padding: "18px 22px" }}>
                                    <div style={{ color: Y, fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 8, fontFamily: BODY }}>SUCCESS INSIGHT</div>
                                    <p style={{ color: W, fontSize: 13, lineHeight: 1.65, margin: 0, fontFamily: BODY }}>
                                        Visa-supported startups generated over <strong style={{ color: Y }}>£1.2B</strong> in UK economic value in 2025 alone. NEXUS ensures these stories are showcased nationwide.
                                    </p>
                                </div>
                            </div>
                        </AnimateIn>
                    </div>
                </div>

                {/* Animated marquee slider */}
                <div style={{ marginTop: 80, background: Y, padding: "18px 0", overflow: "hidden", borderTop: `2px solid ${BK}`, borderBottom: `2px solid ${BK}` }}>
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
                SECTION 3 — WHY ENTER THE NEXUS AWARDS?
                3 cards with correct BLACK SVG icons on yellow
            ═══════════════════════════════════════ */}
            <section style={{ background: BK, padding: "96px 48px", borderTop: `1px solid ${BORDER}` }}>
                <div style={wrap}>
                    <AnimateIn>
                        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 56px" }}>
                            <span style={badge()}>AWARDS IMPACT</span>
                            <h2 style={{ ...h2Base, fontSize: "clamp(40px,5.5vw,72px)", marginBottom: 20 }}>
                                WHY ENTER THE NEXUS AWARDS?
                            </h2>
                            <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.75, fontFamily: BODY, maxWidth: 620, margin: "0 auto" }}>
                                Winning or placing as a finalist at the UK&apos;s premier talent visa awards unlocks significant commercial, operational, and PR leverage for your venture.
                            </p>
                        </div>
                    </AnimateIn>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                        {WHY_ENTER.map((card, i) => (
                            <AnimateIn key={card.num} delay={i * 100}>
                                <div
                                    className="card-hover"
                                    style={{ background: "#0d0d0d", border: `1px solid ${BORDER}`, padding: "40px 36px 36px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 340 }}
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
                SECTION 4 — MEET THE JUDGES
                Circular photo frames, bio expand on click
            ═══════════════════════════════════════ */}
            <section style={{ background: DARK, padding: "96px 48px", borderTop: `1px solid ${BORDER}` }}>
                <div style={wrap}>
                    <AnimateIn>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
                            <div>
                                <span style={badge()}>INDEPENDENT JURY</span>
                                <h2 style={{ ...h2Base, fontSize: "clamp(34px,5vw,60px)" }}>MEET THE JUDGES</h2>
                                <p style={{ color: MUTED, fontSize: 15, marginTop: 10, fontFamily: BODY }}>
                                    Leading investors, policy architects, and former visa founders assessing candidates objectively.
                                </p>
                            </div>
                            <a href="/about"
                                className="btn-ghost"
                                style={{ background: "transparent", color: W, border: "1px solid rgba(255,255,255,0.25)", padding: "11px 22px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", fontFamily: BODY }}>
                                LEARN ABOUT JUDGING PROTOCOL
                            </a>
                        </div>
                    </AnimateIn>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
                        {JUDGES.map((j, i) => (
                            <AnimateIn key={j.name} delay={i * 90}>
                                <div
                                    className="judge-card"
                                    style={{ background: BK, border: `1px solid ${BORDER}`, padding: "28px 24px", textAlign: "center" }}
                                >
                                    {/* Circular photo — non-negotiable per PDF */}
                                    <div
                                        onClick={() => setActiveJudge(activeJudge === i ? null : i)}
                                        style={{
                                            width: 130, height: 130, borderRadius: "50%",
                                            margin: "0 auto 18px",
                                            border: `2px solid ${activeJudge === i ? Y : "rgba(223,255,19,0.4)"}`,
                                            overflow: "hidden", cursor: "pointer",
                                            transition: "border-color 0.25s, transform 0.25s",
                                            transform: activeJudge === i ? "scale(1.06)" : "scale(1)",
                                        }}
                                    >
                                        <img
                                            src={j.img} alt={j.name}
                                            style={{ width: "100%", height: "100%", objectFit: "cover", filter: activeJudge === i ? "grayscale(0)" : "grayscale(1)", transition: "filter 0.4s, transform 0.35s", transform: activeJudge === i ? "scale(1.08)" : "scale(1)" }}
                                        />
                                    </div>
                                    <h4 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: 17, textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: 6, color: W, lineHeight: 1.1 }}>{j.name}</h4>
                                    <div style={{ color: Y, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14, fontFamily: BODY }}>{j.role}</div>

                                    {activeJudge === i ? (
                                        <div>
                                            <p style={{ color: MUTED, fontSize: 12, lineHeight: 1.72, fontFamily: BODY, marginBottom: 12 }}>{j.bio}</p>
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
                </div>
            </section>

            {/* ═══════════════════════════════════════
                SECTION 5 — EXPLORE THE AWARD CATEGORIES
            ═══════════════════════════════════════ */}
            <section style={{ background: BK, padding: "80px 48px", borderTop: `1px solid ${BORDER}` }}>
                <AnimateIn>
                    <div style={{ ...wrap, background: DARK, border: `1px solid ${BORDER}`, padding: "64px 72px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 48, position: "relative", overflow: "hidden", flexWrap: "wrap" }}>
                        <div style={{ position: "absolute", bottom: 0, left: 0, width: 400, height: 280, background: "radial-gradient(circle at bottom left, rgba(223,255,19,0.05), transparent 65%)", pointerEvents: "none" }} />
                        <div style={{ maxWidth: 680, position: "relative" }}>
                            <span style={badge()}>10 DISCIPLINE CATEGORIES</span>
                            <h2 style={{ ...h2Base, fontSize: "clamp(28px,4vw,50px)", marginBottom: 16 }}>
                                EXPLORE THE AWARD CATEGORIES
                            </h2>
                            <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.75, margin: 0, fontFamily: BODY }}>
                                From Deeptech Pioneers to fintech innovators and Climate champions — find the exact category matching your industry or nominate a high-growth founder you back.
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
                SECTION 6 — AWARDS EVENING
                London aerial night — Ken Burns motion video effect
            ═══════════════════════════════════════ */}
            <section style={{ position: "relative", minHeight: 660, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>

                {/* Ken Burns motion on London aerial night image */}
                <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                    <img
                        src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=85&w=1800"
                        alt="London aerial night"
                        className="ken-burns-evening"
                        style={{ width: "100%", height: "100%", objectFit: "cover", transformOrigin: "center center", filter: "brightness(0.38) grayscale(0.1)" }}
                    />
                </div>

                {/* Overlays */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.72) 100%)" }} />
                {/* Subtle vignette */}
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)" }} />

                {/* Content */}
                <AnimateIn style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "100px 48px", width: "100%" }}>
                    <div>
                        <span style={{ ...badge({ marginBottom: 20 }) }}>EXCLUSIVE GALA CEREMONY</span>
                        <h2 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(52px,9vw,104px)", lineHeight: 0.92, margin: "0 0 16px", textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                            Awards Evening
                        </h2>
                        <div style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 22, letterSpacing: "0.22em", color: Y, textTransform: "uppercase", marginBottom: 28 }}>
                            OCTOBER 2026 &middot; CENTRAL LONDON
                        </div>
                        <p style={{ maxWidth: 520, margin: "0 auto 40px", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.80)", fontFamily: BODY }}>
                            An elite gathering of global trailblazers, early-stage sponsors, government stakeholders, and national media. Tickets are strictly limited.
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
