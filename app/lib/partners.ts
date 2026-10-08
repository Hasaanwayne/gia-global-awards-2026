/** `maxH` is the rendered logo height in px, tuned per logo so that
 *  wordmarks and marks sit at a consistent optical weight in the grid. */
export type Partner = { name: string; logo: string; maxH: number }
export type PartnerTier = { label: string; partners: Partner[] }

/**
 * Partner tiers, in the order supplied by the client.
 * Logos are white/colour variants chosen to read on the dark section background.
 * NOTE: FounderX is pending a usable logo file; the supplied JPG lost its
 * "Founder" wordmark (black flattened onto black), leaving only the red X.
 */
export const PARTNER_TIERS: PartnerTier[] = [
    {
        label: "Strategic Partners",
        partners: [
            { name: "UK Research and Innovation", logo: "/partners/ukri.webp", maxH: 46 },
            { name: "Tech Nation", logo: "/partners/tech-nation.webp", maxH: 42 },
            { name: "Fern Capital Group", logo: "/partners/fern-capital.webp", maxH: 68 },
        ],
    },
    {
        label: "Academic Partners",
        partners: [
            { name: "The University of Manchester, Masood Entrepreneurship Centre", logo: "/partners/manchester.webp", maxH: 46 },
            { name: "LSE Generate, London School of Economics", logo: "/partners/lse-generate.webp", maxH: 40 },
            { name: "Queen Mary University of London", logo: "/partners/queen-mary.webp", maxH: 46 },
        ],
    },
    {
        label: "Community Partners",
        partners: [
            { name: "Pall Mall Investments International", logo: "/partners/pall-mall.webp", maxH: 56 },
            { name: "Michelle Hua", logo: "/partners/michelle-hua.webp", maxH: 26 },
        ],
    },
]

export const HEADLINE_PARTNER: Partner = {
    name: "Barclays Innovation",
    logo: "/partners/barclays.webp",
    maxH: 54,
}

export const PARTNERS_INTRO =
    "The Global Innovator Awards is built with the organisations backing the UK's international founder, researchers and innovators; the institutions, networks and communities who put their weight behind this talent."
