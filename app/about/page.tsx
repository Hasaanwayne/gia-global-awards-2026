import { buildMetadata, breadcrumbSchema, pageSchema } from "../lib/seo"
import JsonLd from "../components/JsonLd"
import AboutClient from "./AboutClient"

const title = "About the Awards | Global Innovator Awards"
const description =
    "Why the Global Innovator Awards were created, who is eligible to enter, the two-stage judging process, and how NEXUS supports founders on UK innovation and talent routes."

export const metadata = buildMetadata({ title, description, path: "/about" })

export default function Page() {
    return (
        <>
            <JsonLd
                data={[
                    pageSchema({ type: "AboutPage", name: "About the Awards", description, path: "/about" }),
                    breadcrumbSchema([{ name: "About", path: "/about" }]),
                ]}
            />
            <AboutClient />
        </>
    )
}
