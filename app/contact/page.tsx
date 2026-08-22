import { buildMetadata, breadcrumbSchema, pageSchema } from "../lib/seo"
import JsonLd from "../components/JsonLd"
import ContactClient from "./ContactClient"

const title = "Contact Us | Global Innovator Awards"
const description =
    "Get in touch about sponsorship opportunities, partnerships, media and press enquiries, or group and table bookings for the Global Innovator Awards 2026."

export const metadata = buildMetadata({ title, description, path: "/contact" })

export default function Page() {
    return (
        <>
            <JsonLd
                data={[
                    pageSchema({ type: "ContactPage", name: "Contact Us", description, path: "/contact" }),
                    breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
                ]}
            />
            <ContactClient />
        </>
    )
}
