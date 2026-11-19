"use client"
import React, { useCallback, useEffect, useState } from "react"
import { useBreakpoint } from "../hooks/useBreakpoint"
import type { Photo } from "../lib/gallery-data"

const Y = "#DFFF13", BK = "#000000", W = "#FFFFFF"
const BORDER = "rgba(255,255,255,0.08)"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

const IconDownload = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 4v11m0 0 4.5-4.5M12 15l-4.5-4.5M5 19h14" />
    </svg>
)
const IconArrow = ({ dir }: { dir: "left" | "right" }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {dir === "left" ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
    </svg>
)

/** Full-screen viewer with previous/next, keyboard control and a download button.
 *  Sits above the cookie banner (9999) and the Ask Fin launcher (2147483000). */
function Lightbox({ photos, index, onClose, onNav }: { photos: Photo[]; index: number; onClose: () => void; onNav: (i: number) => void }) {
    const p = photos[index]
    const bp = useBreakpoint()
    const isMobile = bp === "mobile"
    const prev = useCallback(() => onNav((index - 1 + photos.length) % photos.length), [index, photos.length, onNav])
    const next = useCallback(() => onNav((index + 1) % photos.length), [index, photos.length, onNav])

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
            else if (e.key === "ArrowLeft") prev()
            else if (e.key === "ArrowRight") next()
        }
        window.addEventListener("keydown", onKey)
        const overflow = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = overflow }
    }, [onClose, prev, next])

    // Warm the neighbours so stepping through feels instant.
    useEffect(() => {
        for (const j of [index - 1, index + 1]) {
            const n = photos[(j + photos.length) % photos.length]
            if (n) { const img = new Image(); img.src = n.large }
        }
    }, [index, photos])

    const navBtn: React.CSSProperties = { position: "absolute", top: "50%", transform: "translateY(-50%)", width: isMobile ? 42 : 52, height: isMobile ? 42 : 52, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(0,0,0,0.55)", color: W, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 2 }

    return (
        <div role="dialog" aria-modal="true" aria-label={`Photo ${index + 1} of ${photos.length}`} onClick={onClose}
            className="lightbox-in"
            style={{ position: "fixed", inset: 0, zIndex: 2147483600, background: "rgba(0,0,0,0.94)", display: "flex", flexDirection: "column" }}>
            {/* top bar */}
            <div onClick={(e) => e.stopPropagation()} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: isMobile ? "12px 14px" : "16px 24px", fontFamily: BODY }}>
                <span style={{ fontSize: 12, letterSpacing: "0.2em", color: "rgba(255,255,255,0.6)", fontWeight: 700 }}>
                    {index + 1} / {photos.length}
                </span>
                <div style={{ display: "flex", gap: 10 }}>
                    <a href={p.full} download={p.fileName} className="btn-primary"
                        style={{ background: Y, color: BK, padding: isMobile ? "10px 16px" : "11px 20px", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                        <IconDownload size={15} /> Download
                    </a>
                    <button type="button" onClick={onClose} aria-label="Close"
                        style={{ width: 42, height: 42, border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: W, cursor: "pointer", fontSize: 22, lineHeight: 1 }}>
                        ×
                    </button>
                </div>
            </div>

            {/* image */}
            <div style={{ position: "relative", flex: 1, minHeight: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "0 8px 16px" : "0 88px 28px" }}>
                <button type="button" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); prev() }} style={{ ...navBtn, left: isMobile ? 8 : 24 }}><IconArrow dir="left" /></button>
                <img key={p.large} src={p.large} alt={p.alt} onClick={(e) => e.stopPropagation()}
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block", boxShadow: "0 30px 90px rgba(0,0,0,0.6)" }} />
                <button type="button" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); next() }} style={{ ...navBtn, right: isMobile ? 8 : 24 }}><IconArrow dir="right" /></button>
            </div>
        </div>
    )
}

/**
 * Masonry grid of event photos (no cropping, so portraits stay whole).
 * Each tile opens the lightbox; the corner button downloads the watermarked file.
 */
export default function PhotoGallery({ photos, all }: { photos: Photo[]; all?: Photo[] }) {
    const bp = useBreakpoint()
    const cols = bp === "mobile" ? 2 : bp === "tablet" ? 3 : 4
    const gap = bp === "mobile" ? 8 : 12
    const source = all ?? photos
    const [open, setOpen] = useState<number | null>(null)

    return (
        <>
            <div style={{ columnCount: cols, columnGap: gap }}>
                {photos.map((p) => {
                    const idx = source.indexOf(p)
                    return (
                        <figure key={p.id} className="photo-tile" style={{ breakInside: "avoid", margin: `0 0 ${gap}px`, position: "relative", background: "#0a0a0a", border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                            <button type="button" onClick={() => setOpen(idx)} aria-label={`Open ${p.alt}`}
                                style={{ display: "block", width: "100%", padding: 0, border: 0, background: "none", cursor: "zoom-in" }}>
                                <img src={p.thumb} alt={p.alt} loading="lazy" width={p.w} height={p.h}
                                    style={{ width: "100%", height: "auto", aspectRatio: `${p.w} / ${p.h}`, display: "block" }} />
                            </button>
                            <a href={p.full} download={p.fileName} aria-label={`Download ${p.alt}`} className="photo-dl"
                                style={{ position: "absolute", right: 8, bottom: 8, width: 36, height: 36, borderRadius: "50%", background: Y, color: BK, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                                <IconDownload />
                            </a>
                        </figure>
                    )
                })}
            </div>
            {open !== null && <Lightbox photos={source} index={open} onClose={() => setOpen(null)} onNav={setOpen} />}
        </>
    )
}
