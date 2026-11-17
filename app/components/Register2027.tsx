"use client"
import React from "react"
import AnimateIn from "./AnimateIn"
import { useBreakpoint } from "../hooks/useBreakpoint"
import { TYPEFORM_TALENT, TYPEFORM_PARTNERS, PARTNERSHIP_EMAIL } from "../lib/event"

const Y = "#DFFF13", BK = "#000000", W = "#FFFFFF"
const MUTED = "rgba(255,255,255,0.62)", BORDER = "rgba(255,255,255,0.08)"
const HEAD = "'Barlow Condensed','Anton',Impact,sans-serif"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

type Card = { title: string; body: string; cta: string; href: string; external: boolean }

/*
 * While the Typeforms are pending, the talent card points at the footer
 * newsletter (same promise: first to know when nominations open) and the
 * partner card emails the partnerships lead.
 */
const CARDS: Card[] = [
    {
        title: "For Founders, Innovators & Talent",
        body: "Founder, researcher, or exceptional talent inside a high-performing team. Be first to know when 2027 nominations open, plus the spotlights, stories and opportunities in between.",
        cta: "Register Your Interest",
        href: TYPEFORM_TALENT || "#newsletter",
        external: Boolean(TYPEFORM_TALENT),
    },
    {
        title: "For Partners & Sponsors",
        body: "Put your organisation behind the UK’s platform for international innovators. Partnership and sponsorship opportunities for 2027 are open now. Register your interest and we’ll be in touch to shape how you’re involved.",
        cta: "Become a 2027 Partner",
        href: TYPEFORM_PARTNERS || `mailto:${PARTNERSHIP_EMAIL}?subject=${encodeURIComponent("2027 partnership enquiry")}`,
        external: Boolean(TYPEFORM_PARTNERS),
    },
]

export default function Register2027({ headingAs = "h2" }: { headingAs?: "h1" | "h2" }) {
    const bp = useBreakpoint()
    const isMobile = bp === "mobile"
    const isSmall = bp !== "desktop"
    const Heading = headingAs

    return (
        <section id="register" style={{ position: "relative", background: BK, borderTop: `1px solid ${BORDER}`, padding: isMobile ? "72px 0 80px" : isSmall ? "88px 0 96px" : "112px 0 120px", overflow: "hidden", scrollMarginTop: isMobile ? 70 : 90 }}>
            <div aria-hidden="true" style={{ position: "absolute", bottom: -200, left: "50%", transform: "translateX(-50%)", width: 1000, height: 460, background: "radial-gradient(ellipse at center, rgba(223,255,19,0.07), transparent 68%)", pointerEvents: "none" }} />

            <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: isMobile ? "0 20px" : isSmall ? "0 32px" : "0 48px", boxSizing: "border-box" }}>
                <AnimateIn>
                    <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto", marginBottom: isSmall ? 44 : 64 }}>
                        <span style={{ display: "inline-block", background: "rgba(223,255,19,0.08)", border: "1px solid rgba(223,255,19,0.22)", color: Y, fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", padding: "4px 14px", marginBottom: 20, fontFamily: BODY }}>
                            The Awards Return in 2027
                        </span>
                        <Heading style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(36px,6vw,68px)", lineHeight: 0.95, textTransform: "uppercase", margin: "0 0 18px", color: W }}>
                            Be Part of What’s Next
                        </Heading>
                        <p style={{ color: MUTED, fontSize: isSmall ? 15 : 17, lineHeight: 1.75, margin: 0, fontFamily: BODY }}>
                            Global Innovator Awards 2026 is a wrap, and we’re already building what comes next. Register your interest now.
                        </p>
                    </div>
                </AnimateIn>

                <div style={{ display: "grid", gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr", gap: isSmall ? 18 : 26 }}>
                    {CARDS.map((c, i) => (
                        <AnimateIn key={c.title} delay={80 + i * 90} style={{ height: "100%" }}>
                            <div className="winner-card" style={{
                                height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column",
                                background: "linear-gradient(165deg, rgba(223,255,19,0.055) 0%, rgba(255,255,255,0.015) 40%, #070707 100%)",
                                border: "1px solid rgba(223,255,19,0.18)",
                                padding: isMobile ? "30px 24px" : "42px 40px",
                            }}>
                                <span aria-hidden="true" style={{ width: 32, height: 3, background: Y, marginBottom: 22 }} />
                                <h3 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: isMobile ? 24 : 30, lineHeight: 1.05, textTransform: "uppercase", margin: "0 0 16px", color: W }}>
                                    {c.title}
                                </h3>
                                <p style={{ color: MUTED, fontSize: isMobile ? 14 : 15, lineHeight: 1.8, margin: "0 0 30px", fontFamily: BODY, flex: 1 }}>
                                    {c.body}
                                </p>
                                <div>
                                    <a
                                        href={c.href}
                                        {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        className={i === 0 ? "btn-primary" : "btn-ghost"}
                                        style={i === 0
                                            ? { background: Y, color: BK, padding: "15px 32px", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", fontFamily: BODY }
                                            : { background: "transparent", color: W, border: `1px solid ${Y}`, padding: "15px 32px", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", fontFamily: BODY }}
                                    >
                                        {c.cta}
                                    </a>
                                </div>
                            </div>
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
