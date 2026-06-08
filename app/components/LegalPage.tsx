import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"

const Y = "#DFFF13", BK = "#000000", W = "#FFFFFF"
const MUTED = "rgba(255,255,255,0.66)", BORDER = "rgba(255,255,255,0.08)"
const HEAD = "'Barlow Condensed','Anton',Impact,sans-serif"
const BODY = "'General Sans','Inter',system-ui,sans-serif"

export type LegalBlock = { p: string } | { ul: string[] }
export type LegalSection = { heading: string; blocks: LegalBlock[] }

export default function LegalPage({
    title,
    effectiveDate,
    intro,
    sections,
}: {
    title: string
    effectiveDate: string
    intro?: string
    sections: LegalSection[]
}) {
    return (
        <div style={{ fontFamily: BODY, background: BK, color: W, width: "100%", overflowX: "hidden" }}>
            <Nav />

            {/* Hero */}
            <div style={{ background: BK, padding: "clamp(72px,10vw,104px) 24px clamp(36px,5vw,52px)", textAlign: "center", borderBottom: `1px solid ${BORDER}` }}>
                <div style={{ fontSize: 11, letterSpacing: "0.28em", color: Y, textTransform: "uppercase", marginBottom: 16, fontWeight: 700, fontFamily: BODY }}>Global Innovator Awards</div>
                <h1 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(34px,7vw,64px)", lineHeight: 0.98, letterSpacing: "-0.01em", margin: "0 0 14px", textTransform: "uppercase" }}>{title}</h1>
                <div style={{ color: MUTED, fontSize: 13, letterSpacing: "0.06em" }}>{effectiveDate}</div>
            </div>

            {/* Body */}
            <div style={{ maxWidth: 820, margin: "0 auto", padding: "clamp(44px,6vw,72px) 24px clamp(72px,9vw,104px)" }}>
                {intro && (
                    <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(255,255,255,0.78)", margin: "0 0 40px", fontFamily: BODY }}>{intro}</p>
                )}
                {sections.map((s) => (
                    <section key={s.heading} style={{ marginBottom: 38 }}>
                        <h2 style={{ fontFamily: HEAD, fontWeight: 900, fontSize: "clamp(21px,3vw,28px)", textTransform: "uppercase", color: W, margin: "0 0 14px", letterSpacing: "0.01em" }}>{s.heading}</h2>
                        {s.blocks.map((b, i) =>
                            "ul" in b ? (
                                <ul key={i} style={{ margin: "0 0 16px", paddingLeft: 22, color: MUTED }}>
                                    {b.ul.map((li, j) => (
                                        <li key={j} style={{ fontSize: 15.5, lineHeight: 1.8, marginBottom: 9, fontFamily: BODY }}>{li}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p key={i} style={{ fontSize: 15.5, lineHeight: 1.85, color: MUTED, margin: "0 0 16px", fontFamily: BODY }}>{b.p}</p>
                            )
                        )}
                    </section>
                ))}
            </div>

            <Footer />
        </div>
    )
}
