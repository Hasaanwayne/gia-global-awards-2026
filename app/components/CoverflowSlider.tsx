"use client"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { useBreakpoint } from "../hooks/useBreakpoint"
import type { Photo } from "../lib/gallery-data"
import { altWithoutTime } from "../lib/gallery-meta"
import { Lightbox, IconArrow, IconExpand } from "./PhotoGallery"

const Y = "#DFFF13", W = "#FFFFFF"
const BODY = "'General Sans','Inter',system-ui,sans-serif"
const HEAD = "'Barlow Condensed','Anton',Impact,sans-serif"

/**
 * 3D coverflow: the active photo faces the viewer, neighbours swing back on the
 * Y axis and dim. Auto-advances gently (paused on hover, focus, hidden tab and
 * for reduced motion), swipes on touch, and the centre photo opens the viewer.
 * No capture times are shown here (the full gallery has them).
 */
export default function CoverflowSlider({ photos, interval = 4500 }: { photos: Photo[]; interval?: number }) {
    const bp = useBreakpoint()
    const isMobile = bp === "mobile"
    const isTablet = bp === "tablet"
    const n = photos.length
    const [active, setActive] = useState(0)
    const [paused, setPaused] = useState(false)
    const [open, setOpen] = useState<number | null>(null)
    const [reduced, setReduced] = useState(false)
    const drag = useRef<{ x: number; moved: boolean } | null>(null)

    const go = useCallback((i: number) => setActive(((i % n) + n) % n), [n])
    const next = useCallback(() => go(active + 1), [go, active])
    const prev = useCallback(() => go(active - 1), [go, active])

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
        setReduced(mq.matches)
        const on = () => setReduced(mq.matches)
        mq.addEventListener?.("change", on)
        return () => mq.removeEventListener?.("change", on)
    }, [])

    // Auto-advance
    useEffect(() => {
        if (paused || reduced || open !== null || n < 2) return
        const id = window.setInterval(() => { if (!document.hidden) setActive((a) => (a + 1) % n) }, interval)
        return () => window.clearInterval(id)
    }, [paused, reduced, open, n, interval])

    // Warm the next couple of slides
    useEffect(() => {
        for (const j of [1, 2]) { const p = photos[(active + j) % n]; if (p) { const img = new Image(); img.src = p.large } }
    }, [active, photos, n])

    // Geometry per breakpoint
    const stageH = isMobile ? 300 : isTablet ? 400 : 500
    const slideH = isMobile ? 240 : isTablet ? 320 : 400
    const slideW = Math.round(slideH * (isMobile ? 1.2 : 1.42))
    const spread = isMobile ? slideW * 0.42 : slideW * 0.56
    const visibleSide = isMobile ? 1 : 3
    const angle = isMobile ? 34 : 42

    const offsetOf = (i: number) => {
        let o = i - active
        if (o > n / 2) o -= n
        if (o < -n / 2) o += n
        return o
    }

    const onPointerDown = (e: React.PointerEvent) => { drag.current = { x: e.clientX, moved: false } }
    const onPointerUp = (e: React.PointerEvent) => {
        if (!drag.current) return
        const dx = e.clientX - drag.current.x
        if (Math.abs(dx) > 40) { drag.current.moved = true; dx < 0 ? next() : prev() }
        window.setTimeout(() => { drag.current = null }, 0)
    }


    return (
        <div
            onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
            onKeyDown={(e) => { if (e.key === "ArrowRight") { e.preventDefault(); next() } if (e.key === "ArrowLeft") { e.preventDefault(); prev() } }}
            role="region" aria-roledescription="carousel" aria-label="Photos from the night"
            style={{ position: "relative" }}
        >
            {/* stage */}
            <div
                onPointerDown={onPointerDown} onPointerUp={onPointerUp}
                style={{ position: "relative", height: stageH, perspective: isMobile ? 900 : 1600, perspectiveOrigin: "50% 45%", touchAction: "pan-y", userSelect: "none" }}
            >
                {/* soft lime floor glow under the active slide */}
                <div aria-hidden="true" style={{ position: "absolute", left: "50%", bottom: isMobile ? 6 : 10, width: slideW * 1.3, height: 70, transform: "translateX(-50%)", background: "radial-gradient(ellipse at center, rgba(223,255,19,0.16), transparent 70%)", filter: "blur(6px)", pointerEvents: "none" }} />

                {photos.map((ph, i) => {
                    const o = offsetOf(i)
                    const abs = Math.abs(o)
                    const hidden = abs > visibleSide
                    const isActive = o === 0
                    const tx = o * spread
                    const tz = -abs * (isMobile ? 120 : 170)
                    const ry = o === 0 ? 0 : (o < 0 ? angle : -angle)
                    const scale = isActive ? 1 : 1 - Math.min(abs, 3) * 0.06
                    return (
                        <button
                            key={ph.id}
                            type="button"
                            tabIndex={isActive ? 0 : -1}
                            aria-hidden={hidden || undefined}
                            aria-label={isActive ? `View ${altWithoutTime(ph)} full size` : `Show ${altWithoutTime(ph)}`}
                            onClick={() => { if (drag.current?.moved) return; isActive ? setOpen(i) : go(i) }}
                            className={isActive ? "cf-slide cf-active" : "cf-slide"}
                            style={{
                                position: "absolute", left: "50%", top: (stageH - slideH) / 2,
                                width: slideW, height: slideH, marginLeft: -slideW / 2,
                                padding: 0, border: 0, background: "#0b0b0b", cursor: isActive ? "zoom-in" : "pointer",
                                transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
                                transformStyle: "preserve-3d",
                                zIndex: 100 - abs,
                                opacity: hidden ? 0 : 1,
                                pointerEvents: hidden ? "none" : "auto",
                                transition: reduced ? "none" : "transform 0.75s cubic-bezier(0.22,0.61,0.36,1), opacity 0.5s ease, box-shadow 0.5s ease",
                                boxShadow: isActive ? "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(223,255,19,0.55), 0 0 60px rgba(223,255,19,0.12)" : "0 20px 50px rgba(0,0,0,0.6)",
                                overflow: "hidden",
                            }}
                        >
                            <img src={ph.large} alt="" draggable={false}
                                loading={abs <= 2 ? "eager" : "lazy"}
                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block" }} />
                            {/* dim the side slides */}
                            <span aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", opacity: isActive ? 0 : Math.min(0.25 + abs * 0.22, 0.85), transition: reduced ? "none" : "opacity 0.6s ease" }} />
                            {isActive && (
                                <span aria-hidden="true" className="cf-hint" style={{ position: "absolute", right: 12, top: 12, width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.3)", color: W, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <IconExpand size={15} />
                                </span>
                            )}
                        </button>
                    )
                })}
            </div>

            {/* controls */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: isMobile ? 14 : 22, marginTop: isMobile ? 18 : 26 }}>
                <button type="button" onClick={prev} aria-label="Previous photo" className="cf-btn"
                    style={{ width: isMobile ? 42 : 48, height: isMobile ? 42 : 48, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.22)", background: "transparent", color: W, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <IconArrow dir="left" size={20} />
                </button>

                <div style={{ minWidth: isMobile ? 120 : 200, textAlign: "center" }}>
                    <div style={{ fontFamily: HEAD, fontWeight: 900, fontSize: isMobile ? 18 : 22, letterSpacing: "0.06em", color: W, lineHeight: 1 }}>
                        <span style={{ color: Y }}>{String(active + 1).padStart(2, "0")}</span>
                        <span style={{ color: "rgba(255,255,255,0.35)" }}> / {String(n).padStart(2, "0")}</span>
                    </div>
                    {/* progress */}
                    <div aria-hidden="true" style={{ height: 2, background: "rgba(255,255,255,0.12)", marginTop: 10, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${((active + 1) / n) * 100}%`, background: Y, transition: reduced ? "none" : "width 0.6s ease" }} />
                    </div>
                </div>

                <button type="button" onClick={next} aria-label="Next photo" className="cf-btn"
                    style={{ width: isMobile ? 42 : 48, height: isMobile ? 42 : 48, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.22)", background: "transparent", color: W, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <IconArrow dir="right" size={20} />
                </button>
            </div>

            <span aria-live="polite" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                Photo {active + 1} of {n}
            </span>

            {open !== null && <Lightbox photos={photos} index={open} showTime={false} onClose={() => setOpen(null)} onNav={(i) => { setOpen(i); go(i) }} />}
        </div>
    )
}
