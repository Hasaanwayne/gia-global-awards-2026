"use client"
import React, { useState } from "react"
import AnimateIn from "./AnimateIn"
import { useBreakpoint } from "../hooks/useBreakpoint"
import { HIGHLIGHTS_YOUTUBE_ID, GALLERY_HOLDING } from "../lib/event"
import { PHOTOS, HOME_PREVIEW_IDS } from "../lib/gallery-data"
import PhotoGallery from "./PhotoGallery"

const Y = "#DFFF13", BK = "#000000"
const BORDER = "rgba(255,255,255,0.08)"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

export const HAS_VIDEO = Boolean(HIGHLIGHTS_YOUTUBE_ID)
export const HAS_GALLERY = PHOTOS.length > 0
/** Holding panel shows in the gallery slot until the photos land. */
export const SHOW_GALLERY_HOLDING = !HAS_GALLERY && GALLERY_HOLDING

/** Thumbnail first; the YouTube player only loads once someone presses play. */
function Video({ id }: { id: string }) {
    const [playing, setPlaying] = useState(false)
    return (
        <div style={{ position: "relative", aspectRatio: "16 / 9", background: "#050505", border: `1px solid ${BORDER}`, overflow: "hidden" }}>
            {playing ? (
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
                    title="Global Innovator Awards 2026 highlights"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                />
            ) : (
                <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    aria-label="Play the highlights video"
                    className="video-poster"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", padding: 0, border: 0, cursor: "pointer", background: BK }}
                >
                    <img src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: 0.78 }} />
                    <span aria-hidden="true" className="video-play" style={{ position: "absolute", left: "50%", top: "50%", width: 84, height: 84, marginLeft: -42, marginTop: -42, borderRadius: "50%", background: Y, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 10px rgba(223,255,19,0.16)" }}>
                        <svg width="26" height="26" viewBox="0 0 24 24" fill={BK} style={{ marginLeft: 4 }}><path d="M8 5v14l11-7z" /></svg>
                    </span>
                </button>
            )}
        </div>
    )
}

/** Home-page selection; the full set lives on /gallery. */
function Gallery() {
    const bp = useBreakpoint()
    const preview = HOME_PREVIEW_IDS.map((id) => PHOTOS.find((p) => p.id === id)).filter((p): p is (typeof PHOTOS)[number] => Boolean(p))
    return (
        <>
            <PhotoGallery photos={preview} all={PHOTOS} />
            <div style={{ textAlign: "center", marginTop: bp === "mobile" ? 24 : 36 }}>
                <a href="/gallery" className="btn-primary"
                    style={{ background: Y, color: BK, padding: "15px 36px", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", fontFamily: BODY }}>
                    View the Full Gallery ({PHOTOS.length} Photos)
                </a>
            </div>
        </>
    )
}

/** Placeholder for the gallery while the official photography is on its way. */
function GalleryHolding() {
    const bp = useBreakpoint()
    const isMobile = bp === "mobile"
    const cols = isMobile ? 2 : bp === "tablet" ? 3 : 4
    const ghosts = cols * 2
    return (
        <div style={{ position: "relative", overflow: "hidden" }}>
            {/* faint ghost of the grid the photos will fill */}
            <div aria-hidden="true" style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: isMobile ? 8 : 12 }}>
                {Array.from({ length: ghosts }).map((_, i) => (
                    <div key={i} style={{ aspectRatio: "4 / 3", background: "rgba(255,255,255,0.022)", border: "1px solid rgba(255,255,255,0.05)" }} />
                ))}
            </div>
            <div style={{
                position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                textAlign: "center", padding: isMobile ? "0 20px" : "0 40px",
                background: "radial-gradient(ellipse at center, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 45%, rgba(0,0,0,0.35) 100%)",
            }}>
                <span aria-hidden="true" className="holding-pulse" style={{ width: isMobile ? 48 : 58, height: isMobile ? 48 : 58, borderRadius: "50%", border: `1px solid rgba(223,255,19,0.45)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: isMobile ? 18 : 24 }}>
                    <svg width={isMobile ? 20 : 24} height={isMobile ? 20 : 24} viewBox="0 0 24 24" fill="none" stroke={Y} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.8l1.4-2h6.6l1.4 2h1.8A2.5 2.5 0 0 1 21 8.5v9A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z" />
                        <circle cx="12" cy="12.5" r="3.6" />
                    </svg>
                </span>
                <h3 style={{ fontFamily: "'Barlow Condensed','Anton',Impact,sans-serif", fontWeight: 900, fontSize: isMobile ? 26 : 40, lineHeight: 1, textTransform: "uppercase", letterSpacing: "0.01em", color: "#FFFFFF", margin: "0 0 12px" }}>
                    The Pictures Are on Their Way
                </h3>
                <p style={{ margin: 0, fontSize: isMobile ? 14 : 16, lineHeight: 1.65, color: "rgba(255,255,255,0.66)", maxWidth: 460, fontFamily: BODY }}>
                    Official photography goes live here at 11am Thursday 19 November.
                </p>
            </div>
        </div>
    )
}

/** Awards Evening recap: highlights film, then the photo gallery. Hidden until either exists. */
export default function Highlights() {
    const bp = useBreakpoint()
    const isMobile = bp === "mobile"
    if (!HAS_VIDEO && !HAS_GALLERY && !SHOW_GALLERY_HOLDING) return null

    return (
        <section id="highlights" style={{ background: BK, borderTop: `1px solid ${BORDER}`, padding: isMobile ? "56px 0 64px" : "88px 0 96px", scrollMarginTop: isMobile ? 70 : 90 }}>
            <div style={{ maxWidth: 1180, margin: "0 auto", padding: isMobile ? "0 20px" : bp === "tablet" ? "0 32px" : "0 48px", boxSizing: "border-box" }}>
                {HAS_VIDEO && (
                    <AnimateIn>
                        <div style={{ marginBottom: HAS_GALLERY || SHOW_GALLERY_HOLDING ? (isMobile ? 32 : 48) : 0 }}>
                            <Video id={HIGHLIGHTS_YOUTUBE_ID} />
                        </div>
                    </AnimateIn>
                )}
                {(HAS_GALLERY || SHOW_GALLERY_HOLDING) && (
                    <AnimateIn delay={80}>
                        <div>
                            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 18, fontFamily: BODY }}>
                                On the Night
                            </div>
                            {HAS_GALLERY ? <Gallery /> : <GalleryHolding />}
                        </div>
                    </AnimateIn>
                )}
            </div>
        </section>
    )
}
