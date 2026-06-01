"use client"
import { useState, useEffect } from "react"
import React from "react"

const YELLOW = "#DFFF13"
const BLACK = "#000000"
const MUTED = "rgba(255,255,255,0.65)"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

export default function CookieBanner() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem("gia_cookie_consent")
        if (!consent) {
            setTimeout(() => setVisible(true), 800)
        }
    }, [])

    const accept = () => {
        localStorage.setItem("gia_cookie_consent", "accepted")
        setVisible(false)
    }

    const decline = () => {
        localStorage.setItem("gia_cookie_consent", "declined")
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div style={{
            position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999,
            background: "#0d0d0d",
            borderTop: `1px solid rgba(223,255,19,0.25)`,
            padding: "20px 48px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 24, flexWrap: "wrap",
            fontFamily: BODY,
            boxShadow: "0 -4px 32px rgba(0,0,0,0.6)",
        }}>
            <p style={{ fontSize: 13, color: MUTED, margin: 0, lineHeight: 1.65, maxWidth: 680 }}>
                We use cookies to improve your experience and analyse site traffic. By clicking <strong style={{ color: "#fff" }}>Accept All</strong>, you consent to our use of cookies per our{" "}
                <a href="#" style={{ color: YELLOW, textDecoration: "none" }}>Privacy Policy</a>
                . You can manage preferences at any time.
            </p>
            <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
                <button
                    onClick={decline}
                    style={{
                        background: "transparent",
                        border: "1px solid rgba(255,255,255,0.18)",
                        color: MUTED, padding: "10px 22px",
                        cursor: "pointer", fontSize: 11,
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        fontWeight: 600, fontFamily: BODY,
                    }}
                >
                    Decline
                </button>
                <button
                    onClick={accept}
                    style={{
                        background: YELLOW, border: "none",
                        color: BLACK, padding: "10px 28px",
                        cursor: "pointer", fontSize: 11,
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        fontWeight: 700, fontFamily: BODY,
                    }}
                >
                    Accept All
                </button>
            </div>
        </div>
    )
}
