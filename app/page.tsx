import { buildMetadata } from "./lib/seo"
import HomeClient from "./HomeClient"

export const metadata = buildMetadata({
    title: "Global Innovator Awards | UK Innovation Awards",
    description:
        "The UK's first awards for founders, innovators and exceptional talent who came to the UK on an innovation or talent visa. Free to enter, nominations now open.",
    path: "/",
})

export default function Page() {
    return <HomeClient />
}
