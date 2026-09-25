import { buildMetadata, eventSchema } from "./lib/seo"
import JsonLd from "./components/JsonLd"
import HomeClient from "./HomeClient"

export const metadata = buildMetadata({
    title: "Global Innovator Awards | UK Innovation Awards",
    description:
        "The UK's first awards for founders, innovators and exceptional talent who chose the UK on an innovation or talent visa. Finalists announced. Join us at The Dorchester in London, 16th November 2026.",
    path: "/",
})

export default function Page() {
    return (
        <>
            <JsonLd data={eventSchema} />
            <HomeClient />
        </>
    )
}
