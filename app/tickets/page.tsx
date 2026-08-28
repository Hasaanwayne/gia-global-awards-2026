import { buildMetadata, breadcrumbSchema, eventSchema } from "../lib/seo"
import JsonLd from "../components/JsonLd"
import TicketsClient from "./TicketsClient"

const title = "Tickets | Global Innovator Awards"
const description =
    "Join 150+ founders, investors, judges and press at the Global Innovator Awards evening in Central London on 16 November 2026. Tickets on sale September 2026, register now."

export const metadata = buildMetadata({ title, description, path: "/tickets" })

export default function Page() {
    return (
        <>
            <JsonLd
                data={[eventSchema, breadcrumbSchema([{ name: "Tickets", path: "/tickets" }])]}
            />
            <TicketsClient />
        </>
    )
}
