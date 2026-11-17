export const VENUE = "The Dorchester, London"
export const EVENT_DATE = "16 November 2026"

/* ── Post-event assets: dropped in on Tuesday morning ──────────────────────
 * Each block hides itself while its value is empty, so the site is safe to
 * publish whether or not an asset has arrived.
 */

/** YouTube ID of the 30-second highlights film (the part after `v=`). */
export const HIGHLIGHTS_YOUTUBE_ID = ""

/** Event photos, in display order. Files live in /public/gallery. */
export const GALLERY: { src: string; alt: string }[] = []

/**
 * While GALLERY is empty, show the "pictures are on their way" panel instead.
 * Photography lands 11:00 GMT Thursday 19 November 2026.
 */
export const GALLERY_HOLDING = true

/** 2027 registration Typeforms. Empty until the forms are built. */
export const TYPEFORM_TALENT = ""
export const TYPEFORM_PARTNERS = ""

/* Fallbacks used while the Typeforms are pending. */
export const PARTNERSHIP_EMAIL = "partnerships@nexuscreativehq.com"
