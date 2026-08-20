"use client"
import React, { useState } from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import AnimateIn from "../components/AnimateIn"
import { useBreakpoint } from "../hooks/useBreakpoint"

const Y = "#DFFF13", BK = "#000000", W = "#FFFFFF"
const MUTED = "rgba(255,255,255,0.58)", BORDER = "rgba(255,255,255,0.14)"
const HEAD = "'Barlow Condensed','Anton',Impact,sans-serif"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

const CONTACT_EMAIL = "grace@nexuscreativehq.com"
const WEB3FORMS_ACCESS_KEY = "f784cc6f-a401-4855-a38d-2d71644c1c04"
const MAX_WORDS = 75
const REASONS = [
    "Sponsorship opportunities",
    "Partnerships and community collaborations",
    "Media and press enquiries",
    "Group / Table Bookings",
    "Other",
]

const wordCount = (s: string) => s.trim().split(/\s+/).filter(Boolean).length

const fieldLabel: React.CSSProperties = { display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: W, marginBottom: 8, fontFamily: BODY }
const fieldBase: React.CSSProperties = { width: "100%", background: "#111", border: `1px solid ${BORDER}`, color: W, padding: "13px 14px", fontSize: 14, outline: "none", fontFamily: BODY, boxSizing: "border-box" }

export default function ContactPage() {
    const bp = useBreakpoint()
    const isSmall = bp !== "desktop"

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [reason, setReason] = useState("")
    const [message, setMessage] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [sending, setSending] = useState(false)
    const [error, setError] = useState("")

    const words = wordCount(message)
    const overLimit = words > MAX_WORDS
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const valid = name.trim() && emailValid && reason && message.trim() && !overLimit

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!valid) {
            setError("Please complete all fields. Your message must be 75 words or fewer.")
            return
        }
        setError("")
        setSending(true)
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: `Global Innovator Awards enquiry: ${reason}`,
                from_name: "Global Innovator Awards Website",
                name,
                email,
                reason,
                message,
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                if (data.success) {
                    setSubmitted(true)
                } else {
                    setSending(false)
                    setError("Something went wrong sending your enquiry. Please email us directly at " + CONTACT_EMAIL + ".")
                }
            })
            .catch(() => {
                setSending(false)
                setError("Something went wrong sending your enquiry. Please email us directly at " + CONTACT_EMAIL + ".")
            })
    }

    return (
        <div style={{ fontFamily: BODY, background: BK, color: W, width: "100%", overflowX: "hidden" }}>
            <Nav />

            {/* Hero */}
            <div style={{ background: BK, padding: isSmall ? "72px 20px 40px" : "96px 48px 56px", textAlign: "center", borderBottom: `1px solid rgba(255,255,255,0.08)` }}>
                <div style={{ display: "inline-block", background: "rgba(223,255,19,0.08)", border: "1px solid rgba(223,255,19,0.22)", color: Y, fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", padding: "4px 14px", marginBottom: 20, fontFamily: BODY }}>Contact</div>
                <h1 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(38px,8vw,80px)", lineHeight: 0.95, letterSpacing: "-0.01em", margin: "0 0 18px", textTransform: "uppercase" }}>Get in Touch</h1>
                <p style={{ color: MUTED, fontSize: isSmall ? 15 : 17, maxWidth: 560, margin: "0 auto", lineHeight: 1.7, fontFamily: BODY }}>
                    For sponsorship, partnerships, press or anything else, send us a note and a member of the team will get back to you.
                </p>
            </div>

            {/* Form */}
            <div style={{ padding: isSmall ? "48px 20px 72px" : "72px 48px 104px" }}>
                <div style={{ maxWidth: 600, margin: "0 auto" }}>
                    {submitted ? (
                        <AnimateIn>
                            <div style={{ background: "#0a0a0a", border: `1px solid rgba(223,255,19,0.3)`, padding: isSmall ? "40px 24px" : "56px 48px", textAlign: "center" }}>
                                <div style={{ width: 52, height: 52, borderRadius: "50%", background: Y, color: BK, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 26, fontWeight: 900 }}>✓</div>
                                <p style={{ fontSize: 17, lineHeight: 1.7, color: W, margin: 0, fontFamily: BODY }}>
                                    Thank you, your enquiry has been received and a member of the team will get back to you.
                                </p>
                            </div>
                        </AnimateIn>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate>
                            <div style={{ marginBottom: 22 }}>
                                <label htmlFor="c-name" style={fieldLabel}>Name</label>
                                <input id="c-name" type="text" value={name} onChange={(e) => setName(e.target.value)} required style={fieldBase} />
                            </div>

                            <div style={{ marginBottom: 22 }}>
                                <label htmlFor="c-email" style={fieldLabel}>Email Address</label>
                                <input id="c-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={fieldBase} />
                            </div>

                            <div style={{ marginBottom: 22 }}>
                                <label htmlFor="c-reason" style={fieldLabel}>Reason for Enquiry</label>
                                <select id="c-reason" value={reason} onChange={(e) => setReason(e.target.value)} required
                                    style={{ ...fieldBase, appearance: "none", WebkitAppearance: "none", color: W, cursor: "pointer" }}>
                                    <option value="" hidden>Select an option</option>
                                    {REASONS.map((r) => (
                                        <option key={r} value={r} style={{ color: W, background: "#111" }}>{r}</option>
                                    ))}
                                </select>
                            </div>

                            <div style={{ marginBottom: 8 }}>
                                <label htmlFor="c-message" style={fieldLabel}>Message</label>
                                <textarea id="c-message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={5}
                                    style={{ ...fieldBase, resize: "vertical", lineHeight: 1.6 }} />
                            </div>
                            <div style={{ textAlign: "right", fontSize: 12, color: overLimit ? "#ff6b6b" : MUTED, marginBottom: 24, fontFamily: BODY }}>
                                {words} / {MAX_WORDS} words
                            </div>

                            {error && (
                                <div style={{ color: "#ff6b6b", fontSize: 13, marginBottom: 18, fontFamily: BODY }}>{error}</div>
                            )}

                            <button type="submit" disabled={sending} className="btn-primary"
                                style={{ background: Y, color: BK, border: "none", padding: "15px 40px", fontFamily: BODY, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", cursor: sending ? "wait" : "pointer", width: isSmall ? "100%" : "auto", opacity: sending ? 0.7 : 1 }}>
                                {sending ? "Sending…" : "Send Enquiry"}
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    )
}
