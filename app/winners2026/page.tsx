import { buildMetadata, breadcrumbSchema, SITE_URL } from "../lib/seo"
import JsonLd from "../components/JsonLd"
import { AWARDS } from "./winners-data"
import WinnersClient from "./WinnersClient"

const title = "The 2026 Winners | Global Innovator Awards"
const description =
    "Meet the winners and Highly Commended of the Global Innovator Awards 2026, celebrated at The Dorchester, London on 16 November 2026, including the inaugural Pioneer Award."

export const metadata = buildMetadata({ title, description, path: "/winners2026" })

const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "The 2026 Winners",
    description,
    url: `${SITE_URL}/winners2026`,
    mainEntity: {
        "@type": "ItemList",
        name: "Global Innovator Awards 2026 winners",
        numberOfItems: AWARDS.length,
        itemListElement: AWARDS.map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: a.winner,
            description: `Winner, ${a.award}`,
        })),
    },
}

export default function Page() {
    return (
        <>
            <JsonLd data={[collectionSchema, breadcrumbSchema([{ name: "Winners", path: "/winners2026" }])]} />
            <WinnersClient />
        </>
    )
}
