import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import IntercomMessenger from "./components/IntercomMessenger";

export const metadata: Metadata = {
    title: "Global Innovator Awards 2026 | UK Innovation Awards",
    description: "The UK's first awards for founders, innovators and talent who came to the UK on an innovation or talent visa. Free to enter, nominations now open.",
    openGraph: {
        title: "Global Innovator Awards 2026",
        description: "The UK's first awards for innovators who came under an innovation or talent visa route and built something significant.",
        url: "https://globalinnovatorawards.com",
        siteName: "Global Innovator Awards",
        images: [{
            url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
            width: 1200, height: 630,
            alt: "Global Innovator Awards 2026 – London Awards Evening",
        }],
        type: "website",
        locale: "en_GB",
    },
    twitter: {
        card: "summary_large_image",
        title: "Global Innovator Awards 2026",
        description: "The UK's first awards for innovators who came under an innovation or talent visa route.",
        images: ["https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"],
    },
    metadataBase: new URL("https://globalinnovatorawards.com"),
    verification: { google: "Qjyj11u0iKN-9Ar3rRaNfTDaMR3gh5kkiHOEprJFt9Q" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <head>
                {/* Barlow Condensed — headline font (Neutral Face Bold fallback per brief) */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&display=swap" rel="stylesheet" />
                {/* General Sans — body font per brief */}
                <link rel="preconnect" href="https://api.fontshare.com" />
                <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet" />
                {/* Structured data (schema.org) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "Organization",
                                    name: "Global Innovator Awards",
                                    url: "https://globalinnovatorawards.com",
                                    logo: "https://globalinnovatorawards.com/gia-logo.png",
                                    sameAs: [
                                        "https://www.linkedin.com/showcase/global-innovator-awards/",
                                        "https://www.instagram.com/globalinnovatorawards",
                                    ],
                                },
                                {
                                    "@type": "WebSite",
                                    name: "Global Innovator Awards 2026",
                                    url: "https://globalinnovatorawards.com",
                                },
                                {
                                    "@type": "Event",
                                    name: "Global Innovator Awards 2026",
                                    startDate: "2026-10",
                                    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                                    eventStatus: "https://schema.org/EventScheduled",
                                    location: {
                                        "@type": "Place",
                                        name: "Central London",
                                        address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
                                    },
                                    image: "https://globalinnovatorawards.com/gia-logo.png",
                                    description: "The UK's first awards for founders, innovators and exceptional talent who came to the UK on an innovation or talent visa.",
                                    organizer: { "@type": "Organization", name: "NEXUS Creative HQ Ltd", url: "https://globalinnovatorawards.com" },
                                },
                            ],
                        }),
                    }}
                />
                {/* Google Analytics 4 */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-XZZGT7LZ1J" />
                <script dangerouslySetInnerHTML={{
                    __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XZZGT7LZ1J');`
                }} />
            </head>
            <body style={{ margin: 0, padding: 0, background: "#000", color: "#fff", fontFamily: "'General Sans','Inter',system-ui,sans-serif" }}>
                {children}
                <CookieBanner />
                <IntercomMessenger />
            </body>
        </html>
    );
}
