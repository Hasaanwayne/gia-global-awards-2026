import { buildMetadata } from "../lib/seo"
import CategoriesClient from "./CategoriesClient"

export const metadata = buildMetadata({
    title: "Award Categories | Global Innovator Awards",
    description:
        "Ten competitive categories plus the honorary Pioneer Award, from Founder of the Year to Ecosystem Builder of the Year. See the judging criteria and nominate for free.",
    path: "/categories",
})

export default function Page() {
    return <CategoriesClient />
}
