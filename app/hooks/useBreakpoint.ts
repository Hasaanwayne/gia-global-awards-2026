"use client"
import { useState, useEffect } from "react"

export type BP = "mobile" | "tablet" | "desktop"

export function useBreakpoint(): BP {
    // Default "desktop" on SSR so initial render matches hydration
    const [bp, setBp] = useState<BP>("desktop")

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth
            setBp(w < 768 ? "mobile" : w < 1080 ? "tablet" : "desktop")
        }
        update()
        window.addEventListener("resize", update)
        return () => window.removeEventListener("resize", update)
    }, [])

    return bp
}
