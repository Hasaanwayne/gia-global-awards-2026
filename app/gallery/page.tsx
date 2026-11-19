import { buildMetadata, breadcrumbSchema, SITE_URL } from "../lib/seo"
import JsonLd from "../components/JsonLd"
import { PHOTOS } from "../lib/gallery-data"
import GalleryClient from "./GalleryClient"

const title = "Gallery | Global Innovator Awards"
const description =
    "Official photography from the Global Innovator Awards 2026 at The Dorchester, London on 16 November 2026. View and download photos from the night."

export const metadata = buildMetadata({ title, description, path: "/gallery" })

const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Global Innovator Awards 2026: On the Night",
    description,
    url: `${SITE_URL}/gallery`,
    image: PHOTOS.slice(0, 24).map((p) => `${SITE_URL}${p.large}`),
}

export default function Page() {
    return (
        <>
            <JsonLd data={[gallerySchema, breadcrumbSchema([{ name: "Gallery", path: "/gallery" }])]} />
            <GalleryClient />
        </>
    )
}
