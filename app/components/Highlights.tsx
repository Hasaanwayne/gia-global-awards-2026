"use client"
import React, { useState } from "react"
import AnimateIn from "./AnimateIn"
import { useBreakpoint } from "../hooks/useBreakpoint"
import { HIGHLIGHTS_YOUTUBE_ID, GALLERY } from "../lib/event"

const Y = "#DFFF13", BK = "#000000"
const BORDER = "rgba(255,255,255,0.08)"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

export const HAS_VIDEO = Boolean(HIGHLIGHTS_YOUTUBE_ID)
export const HAS_GALLERY = GALLERY.length > 0

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

function Gallery() {
    const bp = useBreakpoint()
    const cols = bp === "mobile" ? 2 : bp === "tablet" ? 3 : 4
    return (
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: bp === "mobile" ? 8 : 12 }}>
            {GALLERY.map((g, i) => (
                <a key={g.src} href={g.src} target="_blank" rel="noopener noreferrer" className="gallery-tile"
                    style={{ display: "block", aspectRatio: "4 / 3", overflow: "hidden", background: "#0a0a0a", border: `1px solid ${BORDER}` }}
                    aria-label={`Open photo ${i + 1}: ${g.alt}`}>
                    <img src={g.src} alt={g.alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </a>
            ))}
        </div>
    )
}

/** Awards Evening recap: highlights film, then the photo gallery. Hidden until either exists. */
export default function Highlights() {
    const bp = useBreakpoint()
    const isMobile = bp === "mobile"
    if (!HAS_VIDEO && !HAS_GALLERY) return null

    return (
        <section id="highlights" style={{ background: BK, borderTop: `1px solid ${BORDER}`, padding: isMobile ? "56px 0 64px" : "88px 0 96px", scrollMarginTop: isMobile ? 70 : 90 }}>
            <div style={{ maxWidth: 1180, margin: "0 auto", padding: isMobile ? "0 20px" : bp === "tablet" ? "0 32px" : "0 48px", boxSizing: "border-box" }}>
                {HAS_VIDEO && (
                    <AnimateIn>
                        <div style={{ marginBottom: HAS_GALLERY ? (isMobile ? 32 : 48) : 0 }}>
                            <Video id={HIGHLIGHTS_YOUTUBE_ID} />
                        </div>
                    </AnimateIn>
                )}
                {HAS_GALLERY && (
                    <AnimateIn delay={80}>
                        <div>
                            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 18, fontFamily: BODY }}>
                                On the Night
                            </div>
                            <Gallery />
                        </div>
                    </AnimateIn>
                )}
            </div>
        </section>
    )
}
