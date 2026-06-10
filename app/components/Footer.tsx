"use client"
import { useState } from "react"
import React from "react"
import { useBreakpoint } from "../hooks/useBreakpoint"

const YELLOW = "#DFFF13"
const BLACK = "#000000"
const WHITE = "#FFFFFF"
const MUTED = "rgba(255,255,255,0.48)"
const BORDER = "rgba(255,255,255,0.08)"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/showcase/global-innovator-awards/", icon: "in" },
    { label: "Instagram", href: "https://www.instagram.com/globalinnovatorawards", icon: "◎" },
]

const navLinks = [
    ["Home", "/"], ["Categories", "/categories"], ["About", "/about"], ["Tickets", "/tickets"], ["FAQs", "/faqs"], ["Contact", "/contact"],
]

const legalLinks: [string, string][] = [
    ["Privacy & Cookies", "/privacy"],
    ["Terms & Conditions", "/terms"],
]

export default function Footer() {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const bp = useBreakpoint()
    const isMobile = bp === "mobile"
    const isTablet = bp === "tablet"
    const hPad = isMobile ? "48px 20px 32px" : isTablet ? "64px 32px 32px" : "72px 48px 40px"
    const gridCols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1.8fr 0.8fr 0.8fr 1.2fr"

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Connect to Mailchimp API endpoint
        setSubmitted(true)
    }

    return (
        <footer style={{ background: "#050505", borderTop: `1px solid ${BORDER}`, padding: hPad, fontFamily: BODY }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: gridCols, gap: isMobile ? 36 : 48, paddingBottom: 48, borderBottom: `1px solid ${BORDER}` }}>

                    {/* Brand Column */}
                    <div>
                        <img src="/gia-logo.png" alt="Global Innovator Awards" style={{ height: 88, width: "auto", display: "block", marginBottom: 22 }} />
                        <p style={{ fontSize: 14, lineHeight: 1.75, color: MUTED, maxWidth: 300, marginBottom: 28, margin: "0 0 28px" }}>
                            The UK&apos;s first awards programme recognising innovators and exceptional talent who chose the UK, and are delivering on their ambition.
                        </p>
                        {/* Social Icons */}
                        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                            {socialLinks.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label} style={{
                                    width: 36, height: 36,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    border: `1px solid rgba(255,255,255,0.12)`,
                                    color: MUTED,
                                    textDecoration: "none",
                                    fontSize: 13, fontWeight: 700,
                                    transition: "border-color 0.15s, color 0.15s",
                                }}>{s.icon}</a>
                            ))}
                        </div>
                    </div>

                    {/* Navigate */}
                    <div>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", color: WHITE, textTransform: "uppercase", marginBottom: 20 }}>Navigate</div>
                        {navLinks.map(([l, h]) => (
                            <a key={l} href={h} style={{ display: "block", fontSize: 14, color: MUTED, textDecoration: "none", marginBottom: 12 }}>{l}</a>
                        ))}
                    </div>

                    {/* Legal + Contact */}
                    <div>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", color: WHITE, textTransform: "uppercase", marginBottom: 20 }}>Legal</div>
                        {legalLinks.map(([l, h]) => (
                            <a key={l} href={h} style={{ display: "block", fontSize: 14, color: MUTED, textDecoration: "none", marginBottom: 12 }}>{l}</a>
                        ))}
                    </div>

                    {/* Mailchimp Newsletter Signup */}
                    <div>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", color: WHITE, textTransform: "uppercase", marginBottom: 12 }}>Stay Updated</div>
                        <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.65, marginBottom: 20 }}>
                            Get the finalist shortlist, ticket release and event updates direct to your inbox.
                        </p>
                        {submitted ? (
                            <div style={{ display: "flex", alignItems: "center", gap: 10, color: YELLOW, fontSize: 14, fontWeight: 600, letterSpacing: "0.06em" }}>
                                <span>✓</span> <span>You&apos;re on the list!</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    required
                                    style={{
                                        width: "100%", background: "#111",
                                        border: `1px solid rgba(255,255,255,0.12)`,
                                        color: WHITE, padding: "11px 14px",
                                        fontSize: 13, outline: "none",
                                        fontFamily: BODY, boxSizing: "border-box",
                                        marginBottom: 8, display: "block",
                                    }}
                                />
                                <button type="submit" style={{
                                    width: "100%", background: YELLOW, color: BLACK,
                                    border: "none", padding: "12px 24px",
                                    fontFamily: BODY, fontWeight: 700, fontSize: 12,
                                    letterSpacing: "0.1em", textTransform: "uppercase",
                                    cursor: "pointer", display: "block",
                                }}>
                                    Subscribe
                                </button>
                                <p style={{ fontSize: 11, color: MUTED, marginTop: 8, lineHeight: 1.5 }}>
                                    No spam. Unsubscribe anytime. GDPR compliant.
                                </p>
                            </form>
                        )}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{ paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                    <span style={{ fontSize: 12, color: MUTED }}>&copy; 2026 Global Innovator Awards. All rights reserved.</span>
                    <span style={{ fontSize: 12, color: MUTED }}>globalinnovatorawards.com</span>
                </div>
            </div>
        </footer>
    )
}
