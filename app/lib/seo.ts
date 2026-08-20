import type { Metadata } from "next"

export const SITE_URL = "https://globalinnovatorawards.com"
export const SITE_NAME = "Global Innovator Awards"

const OG_IMAGE = {
    url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    width: 1200,
    height: 630,
    alt: "Global Innovator Awards 2026, London Awards Evening",
}

/**
 * Builds per-page metadata with a unique title/description and canonical,
 * while preserving the shared Open Graph image, site name and locale.
 * (Next.js replaces the whole `openGraph` object per route rather than
 * deep-merging it, so those shared fields must be repeated here.)
 */
export function buildMetadata({
    title,
    description,
    path,
}: {
    title: string
    description: string
    path: string
}): Metadata {
    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            title,
            description,
            url: path,
            siteName: SITE_NAME,
            images: [OG_IMAGE],
            type: "website",
            locale: "en_GB",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [OG_IMAGE.url],
        },
    }
}
