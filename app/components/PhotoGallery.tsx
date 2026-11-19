"use client"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { useBreakpoint } from "../hooks/useBreakpoint"
import AnimateIn from "./AnimateIn"
import type { Photo } from "../lib/gallery-data"

const Y = "#DFFF13", BK = "#000000", W = "#FFFFFF"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

/** Lightboxes currently mounted; lets a remount (e.g. React Strict Mode) keep the same history entry. */
let openLightboxes = 0

export const IconDownload = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 4v11m0 0 4.5-4.5M12 15l-4.5-4.5M5 19h14" />
    </svg>
)
export const IconExpand = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
    </svg>
)
export const IconArrow = ({ dir, size = 22 }: { dir: "left" | "right"; size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {dir === "left" ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
    </svg>
)

/**
 * Full-screen viewer with previous/next, keyboard control and a download button.
 * Sits above the cookie banner (9999) and, when enabled, the Ask Fin launcher (2147483000).
 */
export function Lightbox({ photos, index, onClose, onNav }: { photos: Photo[]; index: number; onClose: () => void; onNav: (i: number) => void }) {
    const p = photos[index]
    const closeRef = useRef(onClose)
    closeRef.current = onClose

    /*
     * Back gesture closes the viewer, not the page. Opening adds one history
     * entry; the iOS edge swipe, Android back button or browser Back pop it,
     * which closes the viewer and leaves you on the gallery. Closing any other
     * way (×, Esc, tapping outside) removes that entry again so history stays
     * clean. Next.js supports native pushState without a reload.
     */
    useEffect(() => {
        openLightboxes++
        if (!window.history.state?.giaLightbox) {
            window.history.pushState({ ...(window.history.state ?? {}), giaLightbox: true }, "")
        }
        let poppedByUser = false
        const onPop = () => { poppedByUser = true; closeRef.current() }
        window.addEventListener("popstate", onPop)
        return () => {
            window.removeEventListener("popstate", onPop)
            openLightboxes--
            if (poppedByUser) return
            window.setTimeout(() => {
                if (openLightboxes === 0 && window.history.state?.giaLightbox) window.history.back()
            }, 0)
        }
    }, [])
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

    if (!p) return null
    const navBtn: React.CSSProperties = { position: "absolute", top: "50%", transform: "translateY(-50%)", width: isMobile ? 42 : 52, height: isMobile ? 42 : 52, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(0,0,0,0.55)", color: W, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 2 }

    return (
        <div role="dialog" aria-modal="true" aria-label={`Photo ${index + 1} of ${photos.length}`} onClick={onClose}
            className="lightbox-in"
            style={{ position: "fixed", inset: 0, zIndex: 2147483600, background: "rgba(0,0,0,0.95)", display: "flex", flexDirection: "column" }}>
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
 * Spaced masonry grid (no cropping, portraits stay whole). Tiles fade up as they
 * scroll in; hovering shows the capture time with view and download actions.
 */
export default function PhotoGallery({ photos }: { photos: Photo[] }) {
    const bp = useBreakpoint()
    const cols = bp === "mobile" ? 2 : bp === "tablet" ? 3 : 4
    const gap = bp === "mobile" ? 10 : bp === "tablet" ? 16 : 20
    const [open, setOpen] = useState<number | null>(null)

    return (
        <>
            <div style={{ columnCount: cols, columnGap: gap }}>
                {photos.map((p, i) => (
                    <AnimateIn key={p.id} delay={(i % cols) * 70} style={{ breakInside: "avoid", marginBottom: gap }}>
                        <figure className="photo-tile" style={{ margin: 0, position: "relative", overflow: "hidden", background: "#0b0b0b", boxShadow: "0 10px 30px rgba(0,0,0,0.35)" }}>
                            <button type="button" onClick={() => setOpen(i)} aria-label={`View ${p.alt}`}
                                style={{ display: "block", width: "100%", padding: 0, border: 0, background: "none", cursor: "zoom-in" }}>
                                <img src={p.thumb} alt={p.alt} width={p.w} height={p.h}
                                    loading={i < cols * 2 ? "eager" : "lazy"}
                                    {...(i < cols ? { fetchPriority: "high" as const } : {})}
                                    style={{ width: "100%", height: "auto", aspectRatio: `${p.w} / ${p.h}`, display: "block" }} />
                            </button>
                            <figcaption className="photo-overlay" style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: bp === "mobile" ? "26px 8px 8px" : "40px 14px 12px", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", gap: 8, background: "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))", pointerEvents: "none" }}>
                                <span style={{ display: "flex", gap: 6, pointerEvents: "auto" }}>
                                    {bp !== "mobile" && (
                                        <button type="button" onClick={() => setOpen(i)} aria-label={`View ${p.alt} full size`} className="tile-action"
                                            style={{ width: 34, height: 34, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.35)", background: "rgba(0,0,0,0.45)", color: W, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                                            <IconExpand size={14} />
                                        </button>
                                    )}
                                    <a href={p.full} download={p.fileName} aria-label={`Download ${p.alt}`} className="tile-action"
                                        style={{ width: 34, height: 34, borderRadius: "50%", background: Y, color: BK, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                                        <IconDownload size={15} />
                                    </a>
                                </span>
                            </figcaption>
                        </figure>
                    </AnimateIn>
                ))}
            </div>
            {open !== null && <Lightbox photos={photos} index={open} onClose={() => setOpen(null)} onNav={setOpen} />}
        </>
    )
}
