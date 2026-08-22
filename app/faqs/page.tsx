import { buildMetadata, breadcrumbSchema } from "../lib/seo"
import JsonLd from "../components/JsonLd"
import { FAQS } from "./faqs-data"
import FaqsClient from "./FaqsClient"

const title = "FAQs | Global Innovator Awards"
const description =
    "Answers on eligibility and qualifying visa routes, the two-stage entry process, judging, key dates, tickets, and what finalists and winners receive."

export const metadata = buildMetadata({ title, description, path: "/faqs" })

// Built from the same FAQS data the page renders, so the markup can never
// drift from the visible content.
const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
}

export default function Page() {
    return (
        <>
            <JsonLd data={[faqPageSchema, breadcrumbSchema([{ name: "FAQs", path: "/faqs" }])]} />
            <FaqsClient />
        </>
    )
}
