"use client"
import React, { useMemo, useState } from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import AnimateIn from "../components/AnimateIn"
import PhotoGallery from "../components/PhotoGallery"
import CoverflowSlider from "../components/CoverflowSlider"
import { useBreakpoint } from "../hooks/useBreakpoint"
import { PHOTOS } from "../lib/gallery-data"
import { CHAPTERS, FEATURED_IDS, inChapter, type ChapterKey } from "../lib/gallery-meta"

const Y = "#DFFF13", BK = "#000000", W = "#FFFFFF"
const MUTED = "rgba(255,255,255,0.62)", BORDER = "rgba(255,255,255,0.08)"
const HEAD = "'Barlow Condensed','Anton',Impact,sans-serif"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

const FEATURED = FEATURED_IDS.map((id) => PHOTOS.find((p) => p.id === id)).filter((p): p is (typeof PHOTOS)[number] => Boolean(p))

export default function GalleryPage() {
    const bp = useBreakpoint()
    const isMobile = bp === "mobile"
    const isSmall = bp !== "desktop"
    const hPad = isMobile ? "0 14px" : bp === "tablet" ? "0 32px" : "0 48px"
    const [chapter, setChapter] = useState<ChapterKey>("all")

    const counts = useMemo(() => Object.fromEntries(CHAPTERS.map((c) => [c.key, PHOTOS.filter((p) => inChapter(p, c.key)).length])), [])
    const shown = useMemo(() => PHOTOS.filter((p) => inChapter(p, chapter)), [chapter])

    return (
        <div style={{ fontFamily: BODY, background: BK, color: W, width: "100%", overflowX: "hidden" }}>
            <Nav />

            {/* Hero + 3D slider */}
            <section style={{ position: "relative", overflow: "hidden", padding: isSmall ? "64px 0 56px" : "88px 0 80px", borderBottom: `1px solid ${BORDER}` }}>
                <div aria-hidden="true" style={{ position: "absolute", top: -180, left: "50%", transform: "translateX(-50%)", width: 1100, height: 520, background: "radial-gradient(ellipse at center, rgba(223,255,19,0.09), transparent 68%)", pointerEvents: "none" }} />
                <div style={{ position: "relative", textAlign: "center", padding: "0 20px", marginBottom: isSmall ? 34 : 50 }}>
                    <div style={{ display: "inline-block", fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: isMobile ? "0.14em" : "0.28em", textTransform: "uppercase", color: Y, background: "rgba(223,255,19,0.08)", border: "1px solid rgba(223,255,19,0.22)", padding: "5px 14px", marginBottom: 22, whiteSpace: "nowrap" }}>
                        16 November 2026 &middot; The Dorchester
                    </div>
                    <h1 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(44px,8.5vw,96px)", lineHeight: 0.92, margin: 0, textTransform: "uppercase" }}>
                        On the Night
                    </h1>
                    <p style={{ color: MUTED, fontSize: isSmall ? 15 : 17, maxWidth: 560, margin: "20px auto 0", lineHeight: 1.7 }}>
                        Official photography from the Global Innovator Awards 2026. Select any photo to view it full size or download it.
                    </p>
                </div>
                <div style={{ position: "relative", maxWidth: 1400, margin: "0 auto", padding: isMobile ? "0 8px" : "0 24px" }}>
                    <CoverflowSlider photos={FEATURED} />
                </div>
            </section>

            {/* Full set */}
            <section style={{ padding: isSmall ? "48px 0 72px" : "72px 0 110px" }}>
                <div style={{ maxWidth: 1440, margin: "0 auto", padding: hPad, boxSizing: "border-box" }}>
                    <AnimateIn>
                        <div style={{ display: "flex", flexDirection: isSmall ? "column" : "row", alignItems: isSmall ? "flex-start" : "flex-end", justifyContent: "space-between", gap: isSmall ? 18 : 24, marginBottom: isSmall ? 24 : 36 }}>
                            <div>
                                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: Y, marginBottom: 10 }}>Every Photo</div>
                                <h2 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(30px,4.5vw,48px)", lineHeight: 0.95, textTransform: "uppercase", margin: 0 }}>The Full Gallery</h2>
                            </div>
                            {/* chapter filter */}
                            <div role="tablist" aria-label="Filter by part of the evening" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                                {CHAPTERS.map((c) => {
                                    const on = chapter === c.key
                                    return (
                                        <button key={c.key} type="button" role="tab" aria-selected={on} onClick={() => setChapter(c.key)} className="chip"
                                            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: isMobile ? "8px 12px" : "9px 16px", borderRadius: 999, border: `1px solid ${on ? Y : "rgba(255,255,255,0.18)"}`, background: on ? Y : "transparent", color: on ? BK : W, fontFamily: BODY, fontWeight: 700, fontSize: isMobile ? 11 : 12, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" }}>
                                            {c.label}
                                            <span style={{ fontSize: 10, fontWeight: 700, opacity: on ? 0.7 : 0.5 }}>{counts[c.key]}</span>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </AnimateIn>

                    {/* keyed so the grid re-mounts (and re-animates) per chapter */}
                    <PhotoGallery key={chapter} photos={shown} />
                </div>
            </section>

            <Footer />
        </div>
    )
}
