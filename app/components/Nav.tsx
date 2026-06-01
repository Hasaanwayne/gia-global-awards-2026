"use client"
import { usePathname } from "next/navigation"
import React from "react"

const YELLOW = "#DFFF13"
const BLACK = "#000000"
const WHITE = "#FFFFFF"
const BORDER = "rgba(255,255,255,0.08)"
const HEAD = "'Barlow Condensed','Anton',Impact,sans-serif"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

const LINKS = [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/categories" },
    { label: "About", href: "/about" },
    { label: "Tickets", href: "/tickets" },
    { label: "FAQs", href: "/faqs" },
]

export default function Nav() {
    const pathname = usePathname()

    return (
        <nav style={{
            position: "sticky", top: 0, zIndex: 100,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "16px 48px",
            background: "rgba(0,0,0,0.94)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: `1px solid ${BORDER}`,
        }}>
            {/* NEXUS Logo */}
            <a href="/" style={{ textDecoration: "none" }}>
                <div style={{ fontFamily: HEAD, fontWeight: 900, fontSize: 26, color: YELLOW, letterSpacing: "0.05em", lineHeight: 1, textTransform: "uppercase" }}>NEXUS</div>
                <div style={{ fontSize: 8, letterSpacing: "0.3em", color: "rgba(255,255,255,0.45)", marginTop: 3, fontWeight: 700, textTransform: "uppercase", fontFamily: BODY }}>GLOBAL INNOVATION AWARDS 2026</div>
            </a>

            {/* Nav Links */}
            <ul style={{ display: "flex", gap: 36, listStyle: "none", margin: 0, padding: 0, alignItems: "center" }}>
                {LINKS.map((l) => {
                    const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
                    return (
                        <li key={l.href}>
                            <a href={l.href} style={{
                                color: isActive ? YELLOW : WHITE,
                                textDecoration: "none",
                                fontSize: 12,
                                fontWeight: 600,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                opacity: isActive ? 1 : 0.75,
                                fontFamily: BODY,
                                borderBottom: isActive ? `1px solid ${YELLOW}` : "1px solid transparent",
                                paddingBottom: 2,
                                transition: "all 0.15s ease",
                            }}>{l.label}</a>
                        </li>
                    )
                })}
            </ul>

            {/* CTA */}
            <a
                href="https://form.typeform.com/to/GIA2026"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    background: YELLOW, color: BLACK,
                    padding: "11px 28px",
                    fontFamily: BODY,
                    fontWeight: 700, fontSize: 12,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    display: "inline-block",
                    transition: "background 0.15s ease",
                }}
            >
                Apply Now
            </a>
        </nav>
    )
}
