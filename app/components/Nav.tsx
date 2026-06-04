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
    { label: "Categories", href: "/categories" },
    { label: "About",      href: "/about" },
    { label: "Tickets",    href: "/tickets" },
    { label: "FAQs",       href: "/faqs" },
]

export default function Nav() {
    const pathname  = usePathname()
    const bp        = useBreakpoint()
    const isMobile  = bp !== "desktop"
    const [open, setOpen] = useState(false)

    const hPad = bp === "mobile" ? "16px 20px" : bp === "tablet" ? "16px 32px" : "16px 48px"

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
                    <img src="/gia-logo.png" alt="Global Innovator Awards" style={{ height: bp === "mobile" ? 36 : 46, width: "auto", display: "block" }} />
                </a>

                {/* Desktop nav links */}
                {!isMobile && (
                    <ul style={{ display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0, alignItems: "center" }}>
                        {LINKS.map((l) => {
                            const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
                            return (
                                <li key={l.href}>
                                    <a href={l.href} className={`nav-link${isActive ? " active" : ""}`} style={{
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
                        <a href="https://form.typeform.com/to/GIA2026" target="_blank" rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ background: Y, color: BK, padding: "11px 28px", fontFamily: BODY, fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
                            Apply Now
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
                                onClick={() => setOpen(false)}
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
                        href="https://form.typeform.com/to/GIA2026"
                        target="_blank" rel="noopener noreferrer"
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
                        Apply Now
                    </a>
                </div>
            )}
        </>
    )
}
