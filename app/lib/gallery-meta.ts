import type { Photo } from "./gallery-data"

/** Capture time, read from the photographer's filename (…-1830-… = 18:30). */
export function minutesOf(p: Photo): number | null {
    const m = p.fileName.match(/-(\d{2})(\d{2})-/)
    return m ? Number(m[1]) * 60 + Number(m[2]) : null
}

/** Parts of the evening: drinks reception from 6:30pm, then dinner and awards from 7:30pm (the
 *  late celebration photos are folded into Dinner & Awards, at the client's request). */
export const CHAPTERS = [
    { key: "all", label: "All" },
    { key: "reception", label: "Drinks Reception", from: 0, to: 19 * 60 + 30 },
    { key: "dinner", label: "Dinner & Awards", from: 19 * 60 + 30, to: 24 * 60 },
] as const

export type ChapterKey = (typeof CHAPTERS)[number]["key"]

export function inChapter(p: Photo, key: ChapterKey): boolean {
    if (key === "all") return true
    const c = CHAPTERS.find((x) => x.key === key)
    const mins = minutesOf(p)
    if (!c || !("from" in c) || mins === null) return false
    return mins >= c.from && mins < c.to
}

/** Slider selection: venue, room, music, detail, guests, stage, fireside, trophies, band, winners. */
export const FEATURED_IDS = ["100", "001", "016", "017", "029", "037", "043", "063", "075", "055", "092", "101"]
