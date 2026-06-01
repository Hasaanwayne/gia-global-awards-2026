"use client"
import { useState, useEffect } from "react"
import React from "react"

const YELLOW = "#DFFF13"
const BLACK = "#000000"
const WHITE = "#FFFFFF"
const PANEL = "#0D0D0D"
const BORDER = "rgba(255,255,255,0.10)"
const MUTED = "rgba(255,255,255,0.62)"
const DEADLINE = new Date("2026-07-15T23:59:00")
const MAXW = 1200
const HEAD = "'Barlow Condensed', 'Anton', Impact, sans-serif"
const BODY = "'General Sans', 'Inter', system-ui, sans-serif"
const NAV = ["Home", "Categories", "About", "Tickets", "FAQs"]

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

function Icon({ name }: { name: string }) {
    const common = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: YELLOW, strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
    if (name === "credibility") return <svg {...common}><circle cx="12" cy="8" r="5" /><path d="M8.5 12.5 7 21l5-3 5 3-1.5-8.5" /></svg>
    if (name === "profile") return <svg {...common}><path d="M3 11l18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 0 1-5.8-1" /></svg>
    return <svg {...common}><path d="M8 13l3 3 5-6" /><circle cx="12" cy="12" r="9" /></svg>
}

const DEFAULT_JUDGES = [
    { n: "Dr Amara Osei", r: "Investor & GP", o: "Adaverse Fund" },
    { n: "Priya Mehta", r: "Chief Innovation Officer", o: "Innovate UK" },
    { n: "James Okafor", r: "Partner", o: "Notion Capital" },
    { n: "Keiko Yamamoto", r: "Founder & CEO", o: "Hoshi Robotics" },
    { n: "Marcus Adebayo", r: "Director", o: "UKRI" },
    { n: "Sofia Marchetti", r: "Co-founder", o: "Cleo AI" },
]

const reasons = [
    { ic: "credibility", t: "Build Credibility", d: "Demonstrate to investors, partners and customers that your work has been independently recognised. An award carries weight." },
    { ic: "profile", t: "Raise Your Profile", d: "Benefit from PR support, media coverage and social amplification through our networks. Winners gain significant visibility." },
    { ic: "community", t: "Join the Community", d: "Become part of an exclusive alumni network of the UK's most impactful immigrant innovators. Connect, collaborate and grow." },
]

export default function HomePage() {
    const t = useCountdown(DEADLINE)
    const [judge, setJudge] = useState<number | null>(null)

    const S: Record<string, React.CSSProperties> = {
        page: { fontFamily: BODY, background: BLACK, color: WHITE, width: "100%", overflowX: "hidden", margin: 0 },
        wrap: { width: "100%", maxWidth: MAXW, margin: "0 auto", padding: "0 32px", boxSizing: "border-box" },
        nav: { position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 32px", background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${BORDER}` },
        logo: { fontFamily: HEAD, fontWeight: 700, fontSize: 22, letterSpacing: "0.04em", color: YELLOW, lineHeight: 1 },
        logoSub: { fontSize: 9, letterSpacing: "0.32em", color: MUTED, marginTop: 3, fontWeight: 600 },
        navLinks: { display: "flex", gap: 30, listStyle: "none", margin: 0, padding: 0 },
        navLink: { color: WHITE, textDecoration: "none", fontSize: 13, fontWeight: 500, letterSpacing: "0.04em", opacity: 0.85 },
        btn: { background: YELLOW, color: BLACK, border: "none", padding: "12px 24px", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", textDecoration: "none", display: "inline-block" },
        btnGhost: { background: "transparent", color: WHITE, border: `1px solid ${WHITE}`, padding: "12px 24px", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", textDecoration: "none", display: "inline-block" },
        kicker: { color: YELLOW, fontSize: 13, fontWeight: 700, letterSpacing: "0.34em", textTransform: "uppercase", marginBottom: 18 },
        h2: { fontFamily: HEAD, fontWeight: 700, fontSize: "clamp(34px,5vw,64px)", lineHeight: 1.02, letterSpacing: "-0.01em", margin: 0, textTransform: "uppercase" },
    }

    return (
        <div style={S.page}>
            <nav style={S.nav}>
                <div>
                    <div style={S.logo}>GIA</div>
                    <div style={S.logoSub}>GLOBAL INNOVATION AWARDS</div>
                </div>
                <ul style={S.navLinks}>
                    {NAV.map((l) => (
                        <li key={l}><a href={l === "Home" ? "/" : "/" + l.toLowerCase()} style={S.navLink}>{l}</a></li>
                    ))}
                </ul>
                <a href="#apply" style={S.btn}>Apply Now</a>
            </nav>

            <section style={{ ...S.wrap, paddingTop: 96, paddingBottom: 110, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ color: YELLOW, fontSize: 15, fontWeight: 600, letterSpacing: "0.45em", marginBottom: 28 }}>CELEBRATE.&nbsp;&nbsp;SHOWCASE.&nbsp;&nbsp;SPOTLIGHT.</div>
                <h1 style={{ fontFamily: HEAD, fontWeight: 700, fontSize: "clamp(48px,9vw,118px)", lineHeight: 0.95, letterSpacing: "-0.015em", margin: 0, textTransform: "uppercase" }}>
                    Global<br />Innovation<br />Awards 2026
                </h1>
                <p style={{ maxWidth: 620, fontSize: 18, lineHeight: 1.6, color: MUTED, marginTop: 30 }}>
                    The UK&apos;s premier awards programme celebrating innovators and founders who arrived on an innovation or talent visa &mdash; and built something extraordinary.
                </p>
                <div style={{ display: "flex", gap: 16, marginTop: 38, flexWrap: "wrap", justifyContent: "center" }}>
                    <a href="#apply" style={S.btn}>Apply Now</a>
                    <a href="#nominate" style={S.btnGhost}>Nominate Someone</a>
                </div>
                <div style={{ marginTop: 56, fontSize: 13, letterSpacing: "0.14em", color: MUTED, textTransform: "uppercase" }}>Nomination deadline &mdash; 15 July 2026</div>
                <div style={{ display: "flex", gap: 28, marginTop: 22, justifyContent: "center" }}>
                    {[["Days", t.days], ["Hours", t.hours], ["Minutes", t.minutes], ["Seconds", t.seconds]].map(([l, v]) => (
                        <div key={l as string} style={{ minWidth: 78 }}>
                            <div style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 56, lineHeight: 1, color: WHITE }}>{String(v).padStart(2, "0")}</div>
                            <div style={{ fontSize: 11, letterSpacing: "0.22em", color: MUTED, marginTop: 8, textTransform: "uppercase" }}>{l}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ ...S.wrap, paddingTop: 90, paddingBottom: 90, display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}>
                <div>
                    <div style={S.kicker}>Who It&apos;s For</div>
                    <h2 style={S.h2}>Built for founders who came, built, and changed things.</h2>
                    <p style={{ fontSize: 17, lineHeight: 1.7, color: MUTED, marginTop: 24 }}>You arrived in the UK under an Innovation Visa, Global Talent Visa, or one of the legacy routes. You took a risk. You built a team, raised funding, won customers &mdash; and created something that matters. These awards are for you.</p>
                </div>
                <div style={{ aspectRatio: "4 / 5", borderRadius: 4, background: "linear-gradient(145deg,#161616,#0a0a0a)", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "rgba(255,255,255,0.22)", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase" }}>Photography</span>
                </div>
            </section>

            <div style={{ background: YELLOW, color: BLACK, textAlign: "center", padding: "20px 24px", fontFamily: HEAD, fontWeight: 700, fontSize: "clamp(15px,2vw,22px)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                Innovator Founder Visa &nbsp;|&nbsp; Global Talent Visa &nbsp;|&nbsp; Legacy Innovation Routes
            </div>

            <section style={{ ...S.wrap, paddingTop: 96, paddingBottom: 96, textAlign: "center" }}>
                <div style={S.kicker}>Why Enter</div>
                <h2 style={S.h2}>Three Reasons to Enter</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 52, textAlign: "left" }}>
                    {reasons.map((r) => (
                        <div key={r.t} style={{ background: PANEL, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "38px 30px" }}>
                            <Icon name={r.ic} />
                            <h3 style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 24, letterSpacing: "0.01em", textTransform: "uppercase", color: YELLOW, margin: "22px 0 12px" }}>{r.t}</h3>
                            <p style={{ fontSize: 15, lineHeight: 1.65, color: MUTED, margin: 0 }}>{r.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ ...S.wrap, paddingTop: 60, paddingBottom: 96, textAlign: "center" }}>
                <div style={S.kicker}>The Panel</div>
                <h2 style={S.h2}>Meet the Judges</h2>
                <p style={{ fontSize: 16, color: MUTED, marginTop: 16 }}>An independent panel of investors, founders and innovation leaders.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "44px 24px", marginTop: 54 }}>
                    {DEFAULT_JUDGES.map((j, i) => (
                        <div key={j.n} onClick={() => setJudge(judge === i ? null : i)} style={{ cursor: "pointer", textAlign: "center" }}>
                            <div style={{ width: 150, height: 150, borderRadius: "50%", margin: "0 auto", background: "linear-gradient(145deg,#1c1c1c,#0c0c0c)", border: `2px solid ${judge === i ? YELLOW : BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color .2s" }}>
                                <svg width="56" height="56" viewBox="0 0 24 24" fill="rgba(255,255,255,0.28)"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6z" /></svg>
                            </div>
                            <div style={{ fontFamily: HEAD, fontWeight: 700, fontSize: 20, letterSpacing: "0.02em", textTransform: "uppercase", marginTop: 18 }}>{j.n}</div>
                            <div style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>{j.r}</div>
                            <div style={{ fontSize: 13, color: YELLOW, fontWeight: 600, marginTop: 2 }}>{j.o}</div>
                        </div>
                    ))}
                </div>
                <div style={{ fontSize: 13, color: MUTED, marginTop: 44, letterSpacing: "0.06em" }}>Additional judges announced from July 2026</div>
            </section>

            <section style={{ ...S.wrap, paddingTop: 70, paddingBottom: 110, textAlign: "center" }}>
                <div style={S.kicker}>Award Categories</div>
                <h2 style={{ ...S.h2, fontSize: "clamp(32px,4.6vw,58px)" }}>10 Categories <span style={{ color: YELLOW }}>+ Legacy Award</span></h2>
                <p style={{ maxWidth: 560, margin: "20px auto 0", fontSize: 17, lineHeight: 1.6, color: MUTED }}>From DeepTech to Climate, Fintech to Creative Economy &mdash; find the category that reflects your journey and your impact.</p>
                <a href="/categories" style={{ ...S.btn, marginTop: 34 }}>See All Categories</a>
            </section>

            <section style={{ position: "relative", background: "linear-gradient(180deg,#0a0a0a,#000)", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "110px 32px", textAlign: "center" }}>
                <div style={{ color: YELLOW, fontSize: 12, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase" }}>London, United Kingdom</div>
                <h2 style={{ fontFamily: HEAD, fontWeight: 700, fontSize: "clamp(46px,8vw,96px)", lineHeight: 0.96, letterSpacing: "-0.01em", margin: "16px 0 10px", textTransform: "uppercase" }}>Awards Evening</h2>
                <div style={{ fontSize: 17, letterSpacing: "0.16em", color: WHITE, textTransform: "uppercase" }}>October 2026 &mdash; London</div>
                <p style={{ maxWidth: 540, margin: "26px auto 0", fontSize: 16, lineHeight: 1.6, color: MUTED }}>An unforgettable evening celebrating the UK&apos;s most remarkable immigrant innovators. Drinks, dinner, awards and a community that has your back.</p>
                <a href="/tickets" style={{ ...S.btn, marginTop: 34 }}>Get Tickets</a>
            </section>

            <footer style={{ ...S.wrap, paddingTop: 80, paddingBottom: 48 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40 }}>
                    <div>
                        <div style={S.logo}>GIA</div>
                        <div style={S.logoSub}>GLOBAL INNOVATION AWARDS</div>
                        <p style={{ fontSize: 14, lineHeight: 1.6, color: MUTED, marginTop: 18, maxWidth: 280 }}>The UK&apos;s first awards programme for founders who came under an innovation or talent visa route and built something significant.</p>
                    </div>
                    {[["Navigate", NAV], ["Enter", ["Apply Now", "Nominate Someone", "See All Categories", "Judging Process"]], ["Connect", ["LinkedIn", "Twitter / X", "Instagram", "hello@globalinnovatorawards.com"]]].map(([h, items]) => (
                        <div key={h as string}>
                            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", color: WHITE, textTransform: "uppercase", marginBottom: 16 }}>{h as string}</div>
                            {(items as string[]).map((it) => <a key={it} href="#" style={{ display: "block", fontSize: 14, color: MUTED, textDecoration: "none", marginBottom: 11 }}>{it}</a>)}
                        </div>
                    ))}
                </div>
                <div style={{ borderTop: `1px solid ${BORDER}`, marginTop: 48, paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                    <span style={{ fontSize: 13, color: MUTED }}>&copy; 2026 Global Innovation Awards. All rights reserved.</span>
                    <span style={{ fontSize: 13, color: MUTED }}>Privacy Policy &nbsp;|&nbsp; Terms & Conditions &nbsp;|&nbsp; Cookie Settings</span>
                </div>
            </footer>
        </div>
    )
}
