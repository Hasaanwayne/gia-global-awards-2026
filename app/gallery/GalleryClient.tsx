"use client"
import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import PhotoGallery from "../components/PhotoGallery"
import { useBreakpoint } from "../hooks/useBreakpoint"
import { PHOTOS } from "../lib/gallery-data"

const Y = "#DFFF13", BK = "#000000", W = "#FFFFFF"
const MUTED = "rgba(255,255,255,0.62)", BORDER = "rgba(255,255,255,0.08)"
const HEAD = "'Barlow Condensed','Anton',Impact,sans-serif"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

export default function GalleryPage() {
    const bp = useBreakpoint()
    const isSmall = bp !== "desktop"
    const hPad = bp === "mobile" ? "0 12px" : bp === "tablet" ? "0 32px" : "0 48px"

    return (
        <div style={{ fontFamily: BODY, background: BK, color: W, width: "100%", overflowX: "hidden" }}>
            <Nav />

            <section style={{ padding: isSmall ? "72px 20px 44px" : "96px 48px 60px", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
                <div style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: Y, background: "rgba(223,255,19,0.08)", border: "1px solid rgba(223,255,19,0.22)", padding: "5px 14px", marginBottom: 22 }}>
                    16 November 2026 &middot; The Dorchester
                </div>
                <h1 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(42px,8vw,88px)", lineHeight: 0.92, margin: 0, textTransform: "uppercase" }}>
                    On the Night
                </h1>
                <p style={{ color: MUTED, fontSize: isSmall ? 15 : 17, maxWidth: 560, margin: "20px auto 0", lineHeight: 1.7 }}>
                    Official photography from the Global Innovator Awards 2026. Select any photo to view it full size or download it.
                </p>
            </section>

            <section style={{ padding: isSmall ? "28px 0 64px" : "48px 0 96px" }}>
                <div style={{ maxWidth: 1440, margin: "0 auto", padding: hPad, boxSizing: "border-box" }}>
                    <PhotoGallery photos={PHOTOS} />
                </div>
            </section>

            <Footer />
        </div>
    )
}
