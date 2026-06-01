"use client"
import { useState, useEffect } from "react"
import React from "react"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

const YELLOW = "#DFFF13"
const BLACK = "#000000"
const WHITE = "#FFFFFF"
const PANEL = "#0D0D0D"
const BORDER = "rgba(255,255,255,0.08)"
const MUTED = "rgba(255,255,255,0.60)"
const DEADLINE = new Date("2026-07-15T23:59:00")
const MAXW = 1200
const HEAD = "'Barlow Condensed','Anton',Impact,sans-serif"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

/* ── Countdown hook ── */
function useCountdown(target: Date) {
    const calc = () => {
        const diff = target.getTime() - Date.now()
        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        return {
            days: Math.floor(diff / 86400000),
            hours: Math.floor((diff % 86400000) / 3600000),
            minutes: Math.floor((diff % 3600000) / 60000),
            seconds: Math.floor((diff % 60000) / 1000),
        }
    }
    const [time, setTime] = useState(calc)
    useEffect(() => {
        const id = setInterval(() => setTime(calc()), 1000)
        return () => clearInterval(id)
    }, [])
    return time
}

/* ── Icon components ── */
function Icon({ name }: { name: string }) {
    const c = { width: 30, height: 30, viewBox: "0 0 24 24", fill: "none", stroke: YELLOW, strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
    if (name === "credibility") return <svg {...c}><circle cx="12" cy="8" r="5" /><path d="M8.5 12.5 7 21l5-3 5 3-1.5-8.5" /></svg>
    if (name === "profile") return <svg {...c}><path d="M3 11l18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 0 1-5.8-1" /></svg>
    return <svg {...c}><path d="M8 13l3 3 5-6" /><circle cx="12" cy="12" r="9" /></svg>
}

/* ── Judges data ── */
const JUDGES = [
    { n: "Dr Amara Osei", r: "Investor & GP", o: "Adaverse Fund", bio: "Dr Amara Osei is a leading venture capital investor specialising in African and diaspora-founded deep tech. A former Global Talent Visa recipient, she has backed 40+ startups across the UK and West Africa." },
    { n: "Priya Mehta", r: "Chief Innovation Officer", o: "Innovate UK", bio: "Priya leads innovation strategy at Innovate UK, having overseen £500M+ in grants to high-growth startups. She arrived in the UK under the Tier 1 Exceptional Talent route and is a passionate advocate for immigrant founders." },
    { n: "James Okafor", r: "Partner", o: "Notion Capital", bio: "James is a partner at Notion Capital, one of Europe's leading B2B SaaS-focused VCs. He has backed over 30 companies and is a mentor on multiple UK accelerator programmes." },
    { n: "Keiko Yamamoto", r: "Founder & CEO", o: "Hoshi Robotics", bio: "Keiko founded Hoshi Robotics after arriving in the UK on the Global Talent Visa. The company now employs 120 people and is one of the UK's fastest-growing robotics companies." },
    { n: "Marcus Adebayo", r: "Director", o: "UKRI", bio: "Marcus directs international talent programmes at UKRI, working across government to attract and retain the world's best researchers and innovators in the United Kingdom." },
    { n: "Sofia Marchetti", r: "Co-founder", o: "Cleo AI", bio: "Sofia is a co-founder at Cleo AI, the UK's leading AI-powered financial wellbeing app with 7M+ users. She arrived in the UK under the Innovator Visa route and is an advocate for founder diversity." },
]

/* ── Why Enter data ── */
const REASONS = [
    { ic: "credibility", t: "Build Credibility", d: "Demonstrate to investors, partners and customers that your work has been independently recognised by an expert jury. An award carries real weight." },
    { ic: "profile", t: "Raise Your Profile", d: "Benefit from PR support, media coverage and social amplification through our partner networks. Winners and finalists gain significant national visibility." },
    { ic: "community", t: "Join the Community", d: "Become part of an exclusive alumni network of the UK's most impactful immigrant innovators. Connect, collaborate and grow together." },
]

const wrap: React.CSSProperties = { width: "100%", maxWidth: MAXW, margin: "0 auto", padding: "0 40px", boxSizing: "border-box" }
const btn: React.CSSProperties = { background: YELLOW, color: BLACK, border: "none", padding: "14px 32px", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", textDecoration: "none", display: "inline-block", fontFamily: BODY }
const btnGhost: React.CSSProperties = { background: "transparent", color: WHITE, border: `1px solid rgba(255,255,255,0.4)`, padding: "14px 32px", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", textDecoration: "none", display: "inline-block", fontFamily: BODY }
const kicker: React.CSSProperties = { color: YELLOW, fontSize: 11, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 16, fontFamily: BODY }
const h2style: React.CSSProperties = { fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(36px,5vw,66px)", lineHeight: 1.0, letterSpacing: "-0.01em", margin: 0, textTransform: "uppercase" }

export default function HomePage() {
    const t = useCountdown(DEADLINE)
    const [activeJudge, setActiveJudge] = useState<number | null>(null)

    return (
        <div style={{ fontFamily: BODY, background: BLACK, color: WHITE, width: "100%", overflowX: "hidden", margin: 0 }}>
            <Nav />

            {/* ── HERO ── */}
            <section style={{ ...wrap, paddingTop: 112, paddingBottom: 120, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Tagline — spaced caps, Electric Yellow per brief */}
                <div style={{ color: YELLOW, fontSize: 13, fontWeight: 700, letterSpacing: "0.52em", marginBottom: 32, textTransform: "uppercase", fontFamily: BODY }}>
                    CELEBRATE.&nbsp;&nbsp;SHOWCASE.&nbsp;&nbsp;SPOTLIGHT.
                </div>
                {/* Main headline */}
                <h1 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(52px,10vw,124px)", lineHeight: 0.93, letterSpacing: "-0.015em", margin: 0, textTransform: "uppercase" }}>
                    Global<br />Innovation<br />Awards 2026
                </h1>
                <p style={{ maxWidth: 600, fontSize: 18, lineHeight: 1.7, color: MUTED, marginTop: 32, fontFamily: BODY }}>
                    The UK&apos;s premier awards programme celebrating innovators and founders who arrived on an innovation or talent visa &mdash; and built something extraordinary.
                </p>
                {/* Two CTAs */}
                <div style={{ display: "flex", gap: 14, marginTop: 40, flexWrap: "wrap", justifyContent: "center" }}>
                    <a href="https://form.typeform.com/to/GIA2026" target="_blank" rel="noopener noreferrer" style={btn}>Apply Now</a>
                    <a href="https://form.typeform.com/to/GIA2026nominate" target="_blank" rel="noopener noreferrer" style={btnGhost}>Nominate Someone</a>
                </div>
                {/* Deadline + Countdown */}
                <div style={{ marginTop: 60, fontSize: 11, letterSpacing: "0.2em", color: MUTED, textTransform: "uppercase", fontFamily: BODY }}>
                    Nomination deadline &mdash; 15 July 2026
                </div>
                <div style={{ display: "flex", gap: 32, marginTop: 20, justifyContent: "center" }}>
                    {[["Days", t.days], ["Hours", t.hours], ["Minutes", t.minutes], ["Seconds", t.seconds]].map(([l, v]) => (
                        <div key={l as string} style={{ textAlign: "center", minWidth: 72 }}>
                            <div style={{ fontFamily: HEAD, fontWeight: 900, fontSize: 60, lineHeight: 1, color: WHITE }}>{String(v).padStart(2, "0")}</div>
                            <div style={{ fontSize: 10, letterSpacing: "0.24em", color: MUTED, marginTop: 8, textTransform: "uppercase", fontFamily: BODY }}>{l}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── WHO IT'S FOR ── */}
            <section style={{ ...wrap, paddingTop: 96, paddingBottom: 96, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center" }}>
                <div>
                    <div style={kicker}>Who It&apos;s For</div>
                    <h2 style={h2style}>Built for founders who came, built, and changed things.</h2>
                    <p style={{ fontSize: 17, lineHeight: 1.8, color: MUTED, marginTop: 24 }}>
                        You arrived in the UK under an Innovation Visa, Global Talent Visa, or one of the legacy routes. You took a risk. You built a team, raised funding, won customers &mdash; and created something that matters. <strong style={{ color: WHITE }}>These awards are for you.</strong>
                    </p>
                    <p style={{ fontSize: 17, lineHeight: 1.8, color: MUTED, marginTop: 16 }}>
                        To be eligible, at least one founder must have arrived in the UK under an eligible visa route. Your company must be UK-registered and operating. No entry fee.
                    </p>
                </div>
                {/* Photography placeholder — replace with real founder photography */}
                <div style={{ aspectRatio: "4 / 5", background: "linear-gradient(145deg,#181818,#0a0a0a)", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                    <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 28, marginBottom: 12, opacity: 0.3 }}>📸</div>
                        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontFamily: BODY }}>Founder Photography</span>
                    </div>
                </div>
            </section>

            {/* ── ELECTRIC YELLOW ELIGIBILITY BAR ── */}
            <div style={{ background: YELLOW, color: BLACK, textAlign: "center", padding: "22px 40px", fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(14px,2.2vw,22px)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                INNOVATOR FOUNDER VISA &nbsp;|&nbsp; GLOBAL TALENT VISA &nbsp;|&nbsp; LEGACY INNOVATION ROUTES
            </div>

            {/* ── WHY ENTER ── */}
            <section style={{ ...wrap, paddingTop: 100, paddingBottom: 100, textAlign: "center" }}>
                <div style={kicker}>Why Enter</div>
                <h2 style={h2style}>Three Reasons to Enter</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 56, textAlign: "left" }}>
                    {REASONS.map((r) => (
                        <div key={r.t} style={{ background: PANEL, border: `1px solid ${BORDER}`, padding: "40px 32px" }}>
                            <Icon name={r.ic} />
                            <h3 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: 22, letterSpacing: "0.02em", textTransform: "uppercase", color: YELLOW, margin: "20px 0 10px" }}>{r.t}</h3>
                            <p style={{ fontSize: 15, lineHeight: 1.7, color: MUTED, margin: 0 }}>{r.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── JUDGES ── */}
            <section style={{ background: "#050505", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "96px 40px" }}>
                <div style={{ maxWidth: MAXW, margin: "0 auto", textAlign: "center" }}>
                    <div style={kicker}>The Panel</div>
                    <h2 style={h2style}>Meet the Judges</h2>
                    <p style={{ fontSize: 16, color: MUTED, marginTop: 16, fontFamily: BODY }}>An independent panel of investors, founders and innovation leaders.</p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "56px 32px", marginTop: 60 }}>
                        {JUDGES.map((j, i) => (
                            <div key={j.n} style={{ textAlign: "center" }}>
                                {/* Circular photo frame — non-negotiable per brief */}
                                <div
                                    onClick={() => setActiveJudge(activeJudge === i ? null : i)}
                                    style={{
                                        width: 148, height: 148, borderRadius: "50%",
                                        margin: "0 auto",
                                        background: "linear-gradient(145deg,#1e1e1e,#0c0c0c)",
                                        border: `2px solid ${activeJudge === i ? YELLOW : "rgba(255,255,255,0.12)"}`,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        cursor: "pointer", transition: "border-color 0.2s, transform 0.2s",
                                        transform: activeJudge === i ? "scale(1.04)" : "scale(1)",
                                    }}
                                >
                                    <svg width="52" height="52" viewBox="0 0 24 24" fill="rgba(255,255,255,0.22)">
                                        <circle cx="12" cy="8" r="4" />
                                        <path d="M4 20c0-4 4-6 8-6s8 2 8 6z" />
                                    </svg>
                                </div>
                                <div style={{ fontFamily: HEAD, fontWeight: 900, fontSize: 19, letterSpacing: "0.02em", textTransform: "uppercase", marginTop: 18 }}>{j.n}</div>
                                <div style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>{j.r}</div>
                                <div style={{ fontSize: 13, color: YELLOW, fontWeight: 600, marginTop: 2 }}>{j.o}</div>

                                {/* Bio expand — click to show per brief */}
                                {activeJudge === i && (
                                    <div style={{
                                        marginTop: 16, padding: "16px 20px",
                                        background: "#0a0a0a", border: `1px solid ${BORDER}`,
                                        fontSize: 13, color: MUTED, lineHeight: 1.7,
                                        textAlign: "left", fontFamily: BODY,
                                    }}>
                                        {j.bio}
                                        <button onClick={() => setActiveJudge(null)} style={{ display: "block", background: "none", border: "none", color: YELLOW, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", marginTop: 12, padding: 0, fontFamily: BODY }}>
                                            ✕ Close
                                        </button>
                                    </div>
                                )}
                                {activeJudge !== i && (
                                    <button onClick={() => setActiveJudge(i)} style={{ background: "none", border: "none", color: YELLOW, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", marginTop: 10, padding: 0, fontFamily: BODY }}>
                                        + View Bio
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                    <div style={{ fontSize: 12, color: MUTED, marginTop: 48, letterSpacing: "0.08em", fontFamily: BODY }}>Additional judges announced from July 2026</div>
                </div>
            </section>

            {/* ── CATEGORIES CTA ── */}
            <section style={{ ...wrap, paddingTop: 80, paddingBottom: 80, textAlign: "center" }}>
                <div style={kicker}>Award Categories</div>
                <h2 style={{ ...h2style, fontSize: "clamp(32px,4.8vw,58px)" }}>
                    10 Categories <span style={{ color: YELLOW }}>+ Legacy Award</span>
                </h2>
                <p style={{ maxWidth: 560, margin: "20px auto 0", fontSize: 17, lineHeight: 1.7, color: MUTED, fontFamily: BODY }}>
                    From DeepTech to CleanTech, FinTech to Creative Economy &mdash; find the category that reflects your journey and your impact.
                </p>
                <a href="/categories" style={{ ...btn, marginTop: 36 }}>See All Categories &rarr;</a>
            </section>

            {/* ── AWARDS EVENING — Full-width London aerial nighttime photography ── */}
            <section style={{ position: "relative", minHeight: 640, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                {/* London aerial nighttime photo */}
                <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: "url(https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1600)",
                    backgroundSize: "cover", backgroundPosition: "center 40%",
                    filter: "brightness(0.38) grayscale(0.2)",
                }} />
                {/* Dark gradient overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.65) 100%)" }} />
                {/* Content */}
                <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "100px 40px" }}>
                    <div style={{ color: YELLOW, fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", textTransform: "uppercase", marginBottom: 18, fontFamily: BODY }}>
                        Exclusive Gala Ceremony
                    </div>
                    <h2 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(52px,9vw,100px)", lineHeight: 0.93, letterSpacing: "-0.01em", margin: "0 0 16px", textTransform: "uppercase" }}>
                        Awards Evening
                    </h2>
                    <div style={{ fontSize: 20, letterSpacing: "0.18em", color: WHITE, textTransform: "uppercase", marginBottom: 28, fontFamily: HEAD, fontWeight: 700 }}>
                        October 2026 &middot; London
                    </div>
                    <p style={{ maxWidth: 520, margin: "0 auto 40px", fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.78)", fontFamily: BODY }}>
                        An unforgettable evening celebrating the UK&apos;s most remarkable immigrant innovators. Drinks, dinner, awards — and a community that has your back.
                    </p>
                    <a href="/tickets" style={btn}>Get Tickets</a>
                </div>
            </section>

            <Footer />
        </div>
    )
}
