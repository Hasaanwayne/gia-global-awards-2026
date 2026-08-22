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
/** Breadcrumb trail; Home is prepended automatically. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{ name: "Home", path: "/" }, ...trail].map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
        })),
    }
}

/** A basic WebPage/AboutPage/ContactPage node for a route. */
export function pageSchema({
    type = "WebPage",
    name,
    description,
    path,
}: {
    type?: string
    name: string
    description: string
    path: string
}) {
    return {
        "@context": "https://schema.org",
        "@type": type,
        name,
        description,
        url: `${SITE_URL}${path === "/" ? "" : path}`,
        isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
        publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    }
}

/** The awards evening. Used on the pages that actually describe the event. */
export const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Global Innovator Awards 2026",
    startDate: "2026-11-16",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    url: `${SITE_URL}/tickets`,
    image: `${SITE_URL}/gia-logo.webp`,
    description:
        "The UK's first awards for founders, innovators and exceptional talent who came to the UK on an innovation or talent visa. An evening of 150 innovators, investors and press, with ten winners announced.",
    location: {
        "@type": "Place",
        name: "Central London",
        address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
    },
    organizer: {
        "@type": "Organization",
        name: "NEXUS Creative HQ Ltd",
        url: SITE_URL,
    },
}

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
