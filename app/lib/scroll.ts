/** Offset so an anchored section clears the sticky nav. */
export const ANCHOR_OFFSET = { mobile: 70, tablet: 80, desktop: 90 } as const

/**
 * Scroll the window to `targetY`, easing it ourselves on rAF.
 *
 * We drive this with plain (instant) scroll steps rather than
 * `behavior: "smooth"` so the landing position is always exact, and we fall
 * back to a direct jump for reduced-motion or if the frame loop never ticks
 * (a backgrounded or non-painting tab), so a link can never silently fail.
 */
export function animateScrollTo(targetY: number) {
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

/**
 * Click handler for "/#id" links. On the home page it scrolls in place;
 * anywhere else it lets the href navigate and the browser resolves the hash.
 */
export function handleHashLink(
    e: { preventDefault: () => void },
    href: string,
    pathname: string,
    bp: keyof typeof ANCHOR_OFFSET,
) {
    if (!href.startsWith("/#") || pathname !== "/") return
    const el = document.getElementById(href.slice(2))
    if (!el) return
    e.preventDefault()
    const top = el.getBoundingClientRect().top + window.scrollY - ANCHOR_OFFSET[bp]
    animateScrollTo(Math.max(0, top))
    history.replaceState(null, "", href)
}
