"use client"
import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import AnimateIn from "../components/AnimateIn"
import { useBreakpoint } from "../hooks/useBreakpoint"
import { AWARDS, initialsOf, type Award } from "./winners-data"

const Y = "#DFFF13", BK = "#000000", W = "#FFFFFF"
const MUTED = "rgba(255,255,255,0.62)", BORDER = "rgba(255,255,255,0.08)"
const HEAD = "'Barlow Condensed','Anton',Impact,sans-serif"
const BODY = "'General Sans','Inter',system-ui,sans-serif"
const MAXW = 1280

const label: React.CSSProperties = { fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", fontFamily: BODY }

function Headshot({ a, size }: { a: Award; size: number }) {
    return (
        <div style={{ width: size, height: size, borderRadius: "50%", flexShrink: 0, overflow: "hidden", border: `2px solid ${Y}`, background: "rgba(223,255,19,0.07)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 6px rgba(223,255,19,0.06)" }}>
            {a.img
                ? <img src={a.img} alt={a.winner} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                : <span aria-hidden="true" style={{ fontFamily: HEAD, fontWeight: 900, fontSize: size * 0.34, color: Y, letterSpacing: "0.02em" }}>{initialsOf(a.winner)}</span>}
        </div>
    )
}

function WinnerBadge() {
    return (
        <span style={{ ...label, display: "inline-block", background: Y, color: BK, padding: "5px 12px", fontWeight: 800, letterSpacing: "0.24em" }}>
            Winner
        </span>
    )
}

function HighlyCommended({ names }: { names: string[] }) {
    if (!names.length) return null
    return (
        <div style={{ marginTop: 22, paddingTop: 18, borderTop: `1px solid ${BORDER}` }}>
            <div style={{ ...label, color: "rgba(255,255,255,0.5)", marginBottom: 10 }}>Highly Commended</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                {names.map((n) => (
                    <li key={n} style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,0.86)", fontFamily: BODY }}>{n}</li>
                ))}
            </ul>
        </div>
    )
}

export default function WinnersPage() {
    const bp = useBreakpoint()
    const isMobile = bp === "mobile"
    const isSmall = bp !== "desktop"
    const hPad = isMobile ? "0 20px" : bp === "tablet" ? "0 32px" : "0 48px"
    const wrap: React.CSSProperties = { maxWidth: MAXW, margin: "0 auto", padding: hPad, boxSizing: "border-box" }

    const grid = AWARDS.filter((a) => !a.featured)
    const pioneer = AWARDS.find((a) => a.featured)

    return (
        <div style={{ fontFamily: BODY, background: BK, color: W, width: "100%", overflowX: "hidden" }}>
            <Nav />

            {/* Hero */}
            <section style={{ position: "relative", padding: isSmall ? "76px 20px 56px" : "100px 48px 76px", textAlign: "center", borderBottom: `1px solid ${BORDER}`, overflow: "hidden" }}>
                <div aria-hidden="true" style={{ position: "absolute", top: -160, left: "50%", transform: "translateX(-50%)", width: 980, height: 460, background: "radial-gradient(ellipse at center, rgba(223,255,19,0.09), transparent 68%)", pointerEvents: "none" }} />
                <div style={{ position: "relative" }}>
                    <div style={{ ...label, display: "inline-block", color: Y, background: "rgba(223,255,19,0.08)", border: "1px solid rgba(223,255,19,0.22)", padding: "5px 14px", marginBottom: 22 }}>
                        16 November 2026 &middot; The Dorchester
                    </div>
                    <h1 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(44px,9vw,96px)", lineHeight: 0.92, letterSpacing: "-0.01em", margin: 0, textTransform: "uppercase" }}>
                        The 2026 Winners
                    </h1>
                    <p style={{ color: MUTED, fontSize: isSmall ? 15 : 18, maxWidth: 640, margin: "22px auto 0", lineHeight: 1.7 }}>
                        Ten categories. Ten winners, plus the inaugural Pioneer Award. One unforgettable night at The Dorchester.
                    </p>
                </div>
            </section>

            {/* Category winners */}
            <section style={{ padding: isSmall ? "56px 0" : "88px 0" }}>
                <div style={{ ...wrap, display: "grid", gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr", gap: isSmall ? 18 : 26 }}>
                    {grid.map((a, i) => (
                        <AnimateIn key={a.id} delay={(i % 2) * 80} style={{ height: "100%" }}>
                            <article id={a.id} className="winner-card" style={{
                                height: "100%", boxSizing: "border-box",
                                background: "linear-gradient(165deg, rgba(223,255,19,0.06) 0%, rgba(255,255,255,0.015) 38%, #070707 100%)",
                                border: "1px solid rgba(223,255,19,0.18)",
                                padding: isMobile ? "28px 22px" : "36px 34px",
                                scrollMarginTop: 96,
                            }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 14, marginBottom: 24 }}>
                                    <h2 style={{ ...label, color: Y, margin: 0, lineHeight: 1.6, maxWidth: "75%" }}>{a.award}</h2>
                                    <WinnerBadge />
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 16 : 22, marginBottom: 20 }}>
                                    <Headshot a={a} size={isMobile ? 72 : 92} />
                                    <div style={{ minWidth: 0 }}>
                                        <div style={{ fontFamily: HEAD, fontWeight: 900, fontSize: isMobile ? 24 : 30, lineHeight: 1.05, textTransform: "uppercase" }}>{a.winner}</div>
                                        {a.org && <div style={{ ...label, color: "rgba(255,255,255,0.55)", marginTop: 8, letterSpacing: "0.2em" }}>{a.org}</div>}
                                    </div>
                                </div>

                                <p style={{ margin: 0, fontSize: isMobile ? 14 : 15, lineHeight: 1.75, color: MUTED }}>{a.line}</p>

                                <HighlyCommended names={a.highlyCommended} />
                            </article>
                        </AnimateIn>
                    ))}
                </div>
            </section>

            {/* Pioneer Award — featured */}
            {pioneer && (
                <section style={{ padding: isSmall ? "0 0 64px" : "0 0 104px" }}>
                    <div style={wrap}>
                        <AnimateIn>
                            <article id={pioneer.id} style={{
                                position: "relative", overflow: "hidden", scrollMarginTop: 96,
                                background: "linear-gradient(150deg, rgba(223,255,19,0.10) 0%, rgba(223,255,19,0.02) 45%, #050505 100%)",
                                border: "1px solid rgba(223,255,19,0.26)",
                                padding: isMobile ? "36px 24px" : bp === "tablet" ? "48px 44px" : "60px 64px",
                                display: "grid", gridTemplateColumns: isSmall ? "1fr" : "auto 1fr", gap: isSmall ? 26 : 52, alignItems: "center",
                                textAlign: isSmall ? "center" : "left",
                            }}>
                                <span aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: 48, height: 1, background: Y }} />
                                <span aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: 1, height: 48, background: Y }} />
                                <span aria-hidden="true" style={{ position: "absolute", bottom: 0, right: 0, width: 48, height: 1, background: Y }} />
                                <span aria-hidden="true" style={{ position: "absolute", bottom: 0, right: 0, width: 1, height: 48, background: Y }} />

                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Headshot a={pioneer} size={isMobile ? 120 : 168} />
                                </div>
                                <div>
                                    <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", justifyContent: isSmall ? "center" : "flex-start", marginBottom: 18 }}>
                                        <h2 style={{ ...label, color: Y, margin: 0 }}>{pioneer.award}</h2>
                                        <WinnerBadge />
                                    </div>
                                    <div style={{ fontFamily: HEAD, fontWeight: 900, fontSize: isMobile ? 32 : 46, lineHeight: 1, textTransform: "uppercase" }}>{pioneer.winner}</div>
                                    {pioneer.org && <div style={{ ...label, color: "rgba(255,255,255,0.55)", marginTop: 10, letterSpacing: "0.2em" }}>{pioneer.org}</div>}
                                    <p style={{ margin: "20px 0 0", fontSize: isMobile ? 15 : 16, lineHeight: 1.8, color: MUTED, maxWidth: 720, marginLeft: isSmall ? "auto" : 0, marginRight: isSmall ? "auto" : 0 }}>{pioneer.line}</p>
                                </div>
                            </article>
                        </AnimateIn>
                    </div>
                </section>
            )}

            {/* Onward links */}
            <section style={{ background: "#050505", borderTop: `1px solid ${BORDER}`, padding: isSmall ? "60px 20px" : "80px 48px", textAlign: "center" }}>
                <h2 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(28px,5vw,46px)", textTransform: "uppercase", margin: "0 0 14px" }}>Meet All 100 Finalists</h2>
                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 520, margin: "0 auto 30px" }}>
                    The full 2026 shortlist across all ten categories.
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                    <a href="/finalists" className="btn-primary" style={{ background: Y, color: BK, padding: "14px 34px", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
                        See the Finalists
                    </a>
                    <a href="/#register" className="btn-ghost" style={{ background: "transparent", color: W, border: "1px solid rgba(255,255,255,0.28)", padding: "14px 34px", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
                        Register for 2027
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    )
}
