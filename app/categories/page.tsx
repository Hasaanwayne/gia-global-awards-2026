import { buildMetadata, breadcrumbSchema, SITE_URL } from "../lib/seo"
import JsonLd from "../components/JsonLd"
import { CATEGORIES } from "./categories-data"
import CategoriesClient from "./CategoriesClient"

const title = "Award Categories | Global Innovator Awards"
const description =
    "Ten competitive categories plus the honorary Pioneer Award, from Founder of the Year to Ecosystem Builder of the Year. See the judging criteria and nominate for free."

export const metadata = buildMetadata({ title, description, path: "/categories" })

const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Award Categories",
    description,
    url: `${SITE_URL}/categories`,
    mainEntity: {
        "@type": "ItemList",
        name: "Global Innovator Awards categories",
        numberOfItems: CATEGORIES.length,
        itemListElement: CATEGORIES.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            description: c.description,
        })),
    },
}

export default function Page() {
    return (
        <>
            <JsonLd
                data={[collectionSchema, breadcrumbSchema([{ name: "Categories", path: "/categories" }])]}
            />
            <CategoriesClient />
        </>
    )
}
