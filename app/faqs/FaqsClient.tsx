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

import { FAQS } from "./faqs-data"

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
                <h2 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(32px,6vw,52px)", textTransform: "uppercase", margin: "0 0 16px" }}>Nominations Now Closed</h2>
                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 32px", fontFamily: BODY }}>Awards Gala &ndash; 16th November 2026</p>
                <a href="/tickets" className="btn-primary"
                    style={{ background: Y, color: BK, padding: "14px 40px", fontFamily: BODY, fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
                    GET TICKETS
                </a>
            </div>

            <Footer />
        </div>
    )
}
