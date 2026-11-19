import type { MetadataRoute } from "next"

const BASE = "https://globalinnovatorawards.com"

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()
    const routes: { path: string; priority: number }[] = [
        { path: "", priority: 1 },
        { path: "/winners2026", priority: 0.95 },
        { path: "/gallery", priority: 0.9 },
        { path: "/finalists", priority: 0.9 },
        { path: "/categories", priority: 0.9 },
        { path: "/about", priority: 0.8 },
        { path: "/get-involved", priority: 0.8 },
        { path: "/faqs", priority: 0.7 },
        { path: "/contact", priority: 0.6 },
        { path: "/terms", priority: 0.3 },
        { path: "/privacy", priority: 0.3 },
    ]
    return routes.map((r) => ({
        url: `${BASE}${r.path}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: r.priority,
    }))
}
