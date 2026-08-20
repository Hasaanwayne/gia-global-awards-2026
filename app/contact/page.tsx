import { buildMetadata } from "../lib/seo"
import ContactClient from "./ContactClient"

export const metadata = buildMetadata({
    title: "Contact Us | Global Innovator Awards 2026",
    description:
        "Get in touch about sponsorship opportunities, partnerships, media and press enquiries, or group and table bookings for the Global Innovator Awards 2026.",
    path: "/contact",
})

export default function Page() {
    return <ContactClient />
}
