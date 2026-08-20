import { buildMetadata } from "../lib/seo"
import AboutClient from "./AboutClient"

export const metadata = buildMetadata({
    title: "About the Awards | Global Innovator Awards 2026",
    description:
        "Why the Global Innovator Awards were created, who is eligible to enter, the two-stage judging process, and how NEXUS supports founders on UK innovation and talent routes.",
    path: "/about",
})

export default function Page() {
    return <AboutClient />
}
