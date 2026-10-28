"use client"
import { usePathname } from "next/navigation"
import { useState } from "react"
import React from "react"
import { useBreakpoint } from "../hooks/useBreakpoint"

const Y     = "#DFFF13"
const BK    = "#000000"
const W     = "#FFFFFF"
const BORDER = "rgba(255,255,255,0.08)"
const BODY  = "'General Sans','Inter',system-ui,sans-serif"

const LINKS = [
    { label: "Home",       href: "/" },
    { label: "Finalists",  href: "/finalists" },
    { label: "Categories", href: "/categories" },
    { label: "About",      href: "/about" },
    { label: "Partnerships", href: "/#partners" },
    { label: "FAQs",       href: "/faqs" },
    { label: "Contact",    href: "/contact" },
]

/** Offset so an anchored section clears the sticky nav. */
const ANCHOR_OFFSET = { mobile: 70, tablet: 80, desktop: 90 } as const

/**
 * Scroll the window to `targetY`, easing it ourselves on rAF.
 *
 * We drive this with plain (instant) scroll steps rather than
 * `behavior: "smooth"` so the landing position is always exact, and we fall
 * back to a direct jump for reduced-motion or if the frame loop never ticks
 * (a backgrounded or non-painting tab), so the link can never silently fail.
 */
function animateScrollTo(targetY: number) {
    const startY = window.scrollY
    const distance = targetY - startY
    if (Math.abs(distance) < 2) return

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduced || typeof requestAnimationFrame !== "function") {
        window.scrollTo(0, targetY)
        return
    }

    const duration = Math.min(900, Math.max(420, Math.abs(distance) * 0.22))
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
    let startTime: number | null = null
    let ticked = false

    const step = (now: number) => {
        ticked = true
        if (startTime === null) startTime = now
        const p = Math.min((now - startTime) / duration, 1)
        window.scrollTo(0, Math.round(startY + distance * ease(p)))
        if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)

    // Watchdog: if no frame arrived, just go there.
    window.setTimeout(() => { if (!ticked) window.scrollTo(0, targetY) }, 150)
}

export default function Nav() {
    const pathname  = usePathname()
    const bp        = useBreakpoint()
    const isMobile  = bp !== "desktop"
    const [open, setOpen] = useState(false)

    const hPad = bp === "mobile" ? "16px 20px" : bp === "tablet" ? "16px 32px" : "16px 48px"

    /**
     * Same-page anchors scroll here. From another route we let the href
     * navigate and the browser resolves the fragment natively on arrival.
     */
    const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (!href.startsWith("/#")) return
        if (pathname !== "/") return
        const el = document.getElementById(href.slice(2))
        if (!el) return
        e.preventDefault()
        const top = el.getBoundingClientRect().top + window.scrollY - ANCHOR_OFFSET[bp]
        animateScrollTo(Math.max(0, top))
        history.replaceState(null, "", href)
    }

    return (
        <>
            <nav style={{
                position: "sticky", top: 0, zIndex: 100,
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: hPad,
                background: "rgba(0,0,0,0.95)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderBottom: `1px solid ${BORDER}`,
            }}>
                {/* GIA logo */}
                <a href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }} aria-label="Global Innovator Awards — home">
                    <img src="/gia-logo.webp" alt="Global Innovator Awards" style={{ height: bp === "mobile" ? 36 : 46, width: "auto", display: "block" }} />
                </a>

                {/* Desktop nav links */}
                {!isMobile && (
                    <ul style={{ display: "flex", gap: 24, listStyle: "none", margin: 0, padding: 0, alignItems: "center", flexShrink: 0 }}>
                        {LINKS.map((l) => {
                            const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
                            return (
                                <li key={l.href}>
                                    <a href={l.href} onClick={(e) => handleAnchor(e, l.href)} className={`nav-link${isActive ? " active" : ""}`} style={{
                                        color: isActive ? Y : W,
                                        textDecoration: "none", fontSize: 12, fontWeight: 600,
                                        letterSpacing: "0.1em", textTransform: "uppercase",
                                        opacity: isActive ? 1 : 0.75, fontFamily: BODY, paddingBottom: 2,
                                    }}>{l.label}</a>
                                </li>
                            )
                        })}
                    </ul>
                )}

                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {/* CTA — desktop only */}
                    {!isMobile && (
                        <a href="/tickets"
                            className="btn-primary"
                            style={{ background: Y, color: BK, padding: "11px 28px", fontFamily: BODY, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
                            GET TICKETS
                        </a>
                    )}

                    {/* Hamburger — tablet + mobile */}
                    {isMobile && (
                        <button
                            onClick={() => setOpen(o => !o)}
                            aria-label="Toggle menu"
                            style={{ background: "none", border: "none", cursor: "pointer", padding: "6px 4px", display: "flex", flexDirection: "column", gap: 5, alignItems: "center" }}
                        >
                            <span style={{ display: "block", width: 22, height: 2, background: open ? Y : W, transition: "transform 0.28s ease, background 0.2s", transformOrigin: "center", transform: open ? "rotate(45deg) translate(4px, 5px)" : "none" }} />
                            <span style={{ display: "block", width: 22, height: 2, background: Y, transition: "opacity 0.2s", opacity: open ? 0 : 1 }} />
                            <span style={{ display: "block", width: 22, height: 2, background: open ? Y : W, transition: "transform 0.28s ease, background 0.2s", transformOrigin: "center", transform: open ? "rotate(-45deg) translate(4px, -5px)" : "none" }} />
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile / tablet slide-down menu */}
            {isMobile && (
                <div style={{
                    position: "fixed", top: 57, left: 0, right: 0, zIndex: 99,
                    background: "#030303",
                    borderBottom: `1px solid ${BORDER}`,
                    padding: open ? "12px 24px 28px" : "0 24px",
                    maxHeight: open ? 500 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1), padding 0.25s ease",
                }}>
                    {LINKS.map((l, i) => {
                        const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
                        return (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={(e) => { setOpen(false); handleAnchor(e, l.href) }}
                                style={{
                                    display: "flex", justifyContent: "space-between", alignItems: "center",
                                    padding: "14px 0",
                                    borderBottom: i < LINKS.length - 1 ? `1px solid ${BORDER}` : "none",
                                    color: isActive ? Y : W, textDecoration: "none",
                                    fontSize: 15, fontWeight: 600,
                                    letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: BODY,
                                }}
                            >
                                {l.label}
                                {isActive && <span style={{ color: Y, fontSize: 10 }}>●</span>}
                            </a>
                        )
                    })}
                    <a
                        href="/tickets"
                        onClick={() => setOpen(false)}
                        style={{
                            display: "block", marginTop: 20,
                            background: Y, color: BK,
                            padding: "15px 24px", textAlign: "center",
                            fontFamily: BODY, fontWeight: 700,
                            fontSize: 13, letterSpacing: "0.1em",
                            textTransform: "uppercase", textDecoration: "none",
                        }}
                    >
                        GET TICKETS
                    </a>
                </div>
            )}
        </>
    )
}
