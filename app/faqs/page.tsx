import { buildMetadata } from "../lib/seo"
import FaqsClient from "./FaqsClient"

export const metadata = buildMetadata({
    title: "FAQs | Global Innovator Awards",
    description:
        "Answers on eligibility and qualifying visa routes, the two-stage entry process, judging, key dates, tickets, and what finalists and winners receive.",
    path: "/faqs",
})

export default function Page() {
    return <FaqsClient />
}
