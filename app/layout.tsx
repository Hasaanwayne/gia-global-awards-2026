import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import IntercomMessenger from "./components/IntercomMessenger";

export const metadata: Metadata = {
    title: "Global Innovator Awards | UK Innovation Awards",
    description: "The UK's first awards for founders, innovators and talent who came to the UK on an innovation or talent visa. Free to enter, nominations now open.",
    openGraph: {
        title: "Global Innovator Awards",
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
        title: "Global Innovator Awards",
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
                {/* Self-hosted fonts — preload the critical weights (defined in globals.css) */}
                <link rel="preload" href="/fonts/GeneralSans-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/GeneralSans-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/BarlowCondensed-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                {/* Site-wide structured data. Page-specific schema lives on each route. */}
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
                                    logo: "https://globalinnovatorawards.com/gia-logo.webp",
                                    sameAs: [
                                        "https://www.linkedin.com/showcase/global-innovator-awards/",
                                        "https://www.instagram.com/globalinnovatorawards",
                                    ],
                                },
                                {
                                    "@type": "WebSite",
                                    name: "Global Innovator Awards",
                                    url: "https://globalinnovatorawards.com",
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
                {/* Endorsement bar */}
                <div style={{ background: "#050505", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "8px 16px", display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>Endorsed by</span>
                    <img src="/endorsed-gep-great.webp" alt="Endorsed by the Global Entrepreneur Programme, GREAT Britain & Northern Ireland" style={{ height: 30, width: "auto", display: "block", borderRadius: 3 }} />
                </div>
                <main>{children}</main>
                <CookieBanner />
                <IntercomMessenger />
            </body>
        </html>
    );
}
