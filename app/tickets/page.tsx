import { buildMetadata } from "../lib/seo"
import TicketsClient from "./TicketsClient"

export const metadata = buildMetadata({
    title: "Tickets | Global Innovator Awards",
    description:
        "Join 150+ founders, investors, judges and press at the Global Innovator Awards evening in Central London on 16 November 2026. Tickets available from August 2026.",
    path: "/tickets",
})

export default function Page() {
    return <TicketsClient />
}
