import { buildMetadata, breadcrumbSchema, SITE_URL } from "../lib/seo"
import JsonLd from "../components/JsonLd"
import { FINALISTS } from "./finalists-data"
import FinalistsClient from "./FinalistsClient"

const TOTAL = FINALISTS.reduce((n, g) => n + g.names.length, 0)

const title = "The 2026 Finalists | Global Innovator Awards"
const description =
    `The ${TOTAL} finalists of the Global Innovator Awards 2026, selected by our independent judging panel across ten categories. Winners announced 16th November at The Dorchester, London.`

export const metadata = buildMetadata({ title, description, path: "/finalists" })

const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "The 2026 Finalists",
    description,
    url: `${SITE_URL}/finalists`,
    mainEntity: {
        "@type": "ItemList",
        name: "Global Innovator Awards 2026 finalists",
        numberOfItems: TOTAL,
        itemListElement: FINALISTS.flatMap((g, gi) =>
            g.names.map((n, ni) => ({
                "@type": "ListItem",
                position: gi * 10 + ni + 1,
                name: n,
                description: `Finalist, ${g.category}`,
            })),
        ),
    },
}

export default function Page() {
    return (
        <>
            <JsonLd data={[collectionSchema, breadcrumbSchema([{ name: "Finalists", path: "/finalists" }])]} />
            <FinalistsClient />
        </>
    )
}
