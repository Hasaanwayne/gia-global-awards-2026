import { buildMetadata, breadcrumbSchema, pageSchema } from "../lib/seo"
import JsonLd from "../components/JsonLd"
import GetInvolvedClient from "./GetInvolvedClient"

const title = "Get Involved | Global Innovator Awards"
const description =
    "The Global Innovator Awards return in 2027. Register your interest as a founder, researcher or exceptional talent, or as a partner or sponsor."

export const metadata = buildMetadata({ title, description, path: "/get-involved" })

export default function Page() {
    return (
        <>
            <JsonLd
                data={[
                    pageSchema({ name: "Get Involved", description, path: "/get-involved" }),
                    breadcrumbSchema([{ name: "Get Involved", path: "/get-involved" }]),
                ]}
            />
            <GetInvolvedClient />
        </>
    )
}
