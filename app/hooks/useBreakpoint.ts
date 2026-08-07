"use client"
import { useState, useLayoutEffect } from "react"

export type BP = "mobile" | "tablet" | "desktop"

// useLayoutEffect runs synchronously after DOM mutation but before the
// browser paints, so the mobile/tablet correction lands before the user
// ever sees the (server-rendered) desktop layout — avoiding a visible
// reflow / layout shift on first load.
export function useBreakpoint(): BP {
    // Default "desktop" on SSR so initial render matches hydration
    const [bp, setBp] = useState<BP>("desktop")

    useLayoutEffect(() => {
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
