import LegalPage, { LegalSection } from "../components/LegalPage"
import JsonLd from "../components/JsonLd"
import { buildMetadata, breadcrumbSchema, pageSchema } from "../lib/seo"

const description =
    "How NEXUS Creative HQ Ltd collects, uses and protects personal data for the Global Innovator Awards, including cookies, data retention and your UK GDPR rights."

export const metadata = buildMetadata({
    title: "Privacy & Cookies | Global Innovator Awards",
    description,
    path: "/privacy",
})

const sections: LegalSection[] = [
    {
        heading: "1. Who We Are",
        blocks: [
            { p: "The Global Innovator Awards is organised by NEXUS Creative HQ Ltd, trading as NEXUS." },
            { p: "Registered office: Kings Parade, Lower Coombe Street, Croydon, CR0 1AA" },
            { p: "Company registration number: 12667243" },
            { p: "ICO registration number: ZB645413" },
            { p: "Contact method via our website at www.globalinnovatorawards.com" },
            { p: "NEXUS is the data controller for personal data collected through the Global Innovator Awards website and related activities." },
        ],
    },
    {
        heading: "2. What Personal Data We Collect",
        blocks: [
            { p: "Depending on how you interact with us, we may collect the following categories of personal data:" },
            { ul: [
                "Full name and contact details, including email address and telephone number",
                "Organisation or company name and job title",
                "Nomination details, including information about your business, venture, research or professional achievements",
                "Event registration details",
                "Information you provide voluntarily through forms, correspondence or enquiries",
                "Website usage data, including pages visited, time spent on the site, and device or browser information collected via cookies or analytics tools",
            ] },
            { p: "We do not knowingly collect personal data from individuals under the age of 18." },
        ],
    },
    {
        heading: "3. How We Collect Personal Data",
        blocks: [
            { p: "We collect personal data through the following means:" },
            { ul: [
                "Nomination and application forms submitted via our website or third-party form platforms",
                "Email sign-up and interest registration forms",
                "Event ticket registration and attendance",
                "Direct correspondence by email or other written communication",
                "Website analytics tools and cookies, which may collect data automatically when you visit our site",
            ] },
        ],
    },
    {
        heading: "3a. Information Provided by Third Parties",
        blocks: [
            { p: "In some cases, nominations may be submitted by individuals, organisations or businesses on behalf of another person, team, project or organisation. Where this occurs, we may receive personal data about nominees from the individual submitting the nomination. This may include contact details, professional information, biographical information, details of achievements, business information and supporting materials relevant to the awards process. We process this information for the purposes of administering, assessing and operating the Global Innovator Awards programme." },
        ],
    },
    {
        heading: "4. How We Use Personal Data",
        blocks: [
            { p: "We use the personal data we collect for the following purposes:" },
            { ul: [
                "Processing and assessing nominations submitted to the Global Innovator Awards",
                "Communicating with nominees, finalists, winners and ticket holders about the awards",
                "Managing event registration, attendance and logistics",
                "Sending updates, announcements and relevant information about the awards programme",
                "Responding to enquiries and providing support",
                "Improving our website and understanding how visitors use it",
                "Meeting our legal and regulatory obligations",
                "Publicity: where an individual or organisation is shortlisted, selected as a finalist or announced as a winner, we may publish and use relevant information including names, company names, biographies, approved photographs, logos and award outcomes for the purposes of administering and promoting the Awards.",
                "Event photography: we may collect and use photographs, video recordings and audio recordings captured during awards events for promotional, reporting, event administration and archival purposes.",
            ] },
        ],
    },
    {
        heading: "5. Legal Basis for Processing",
        blocks: [
            { p: "Under UK GDPR, we rely on the following legal bases for processing your personal data:" },
            { ul: [
                "Consent: where you have opted in to receive marketing communications or submitted a form with clear consent wording.",
                "Legitimate interests: where processing is necessary for the purposes of running the awards programme, including contacting nominees and managing event activities, where those interests are not overridden by your rights.",
                "Contractual necessity: where processing is required to fulfil a commitment to you, such as processing a ticket purchase.",
                "Legal obligation: where we are required to process or retain data to comply with applicable law.",
            ] },
        ],
    },
    {
        heading: "6. Marketing Communications",
        blocks: [
            { p: "If you have registered your interest, submitted a nomination, or otherwise indicated that you would like to receive updates, we may contact you with information about the Global Innovator Awards, including announcements, shortlist notifications and future editions." },
            { p: "You can unsubscribe from marketing communications at any time by clicking the unsubscribe link in any email or by contacting us directly. Opting out of marketing will not affect any communications required to administer your nomination or event attendance." },
        ],
    },
    {
        heading: "7. Sharing Personal Data",
        blocks: [
            { p: "We do not sell your personal data. We may share it with trusted third parties only where necessary, including:" },
            { ul: [
                "Website hosting and technical infrastructure providers",
                "Email marketing and communication platforms",
                "Form and survey tools used to collect nominations and registrations",
                "Event management and ticketing platforms",
                "Members of the independent judging panel, for the purpose of assessing nominations",
                "Professional advisers, including legal and financial advisers, where required",
                "Regulatory or law enforcement bodies, where we are legally required to do so",
            ] },
            { p: "All third-party providers are required to handle your data securely and in accordance with applicable data protection law." },
        ],
    },
    {
        heading: "8. Awards Nominations and Judging",
        blocks: [
            { p: "Information submitted as part of a nomination, including details about an individual's professional background, business or achievements, will be reviewed by the NEXUS organising team for eligibility and triage purposes." },
            { p: "Nominations that progress to the judging stage will be shared with the relevant independent judges solely for the purpose of assessing entries. Judges are required to treat all submission information as confidential and will not share it with any third party." },
            { p: "Nomination information will not be shared with sponsors, media partners or any other party without the nominee's prior consent." },
        ],
    },
    {
        heading: "9. International Transfers",
        blocks: [
            { p: "Some of the third-party tools and platforms we use to operate the awards, including form tools, email platforms and analytics services, may store or process personal data outside the United Kingdom." },
            { p: "Where this is the case, we take steps to ensure that appropriate safeguards are in place, such as using services covered by the UK's adequacy regulations or standard contractual clauses approved for use in the UK." },
        ],
    },
    {
        heading: "10. Data Retention",
        blocks: [
            { p: "We retain personal data only for as long as necessary for the purposes for which it was collected, including:" },
            { ul: [
                "Nomination and judging records: retained for up to three years following the conclusion of the relevant awards cycle unless a longer retention period is required by law or for the establishment, exercise or defence of legal claims.",
                "Event registration data: retained for the period required to administer the event and meet any legal obligations",
                "Marketing and communications data: retained until you unsubscribe or request deletion",
                "Legal and financial records: retained for the period required by applicable law",
            ] },
        ],
    },
    {
        heading: "11. Cookies and Analytics",
        blocks: [
            { p: "Our website may use cookies and analytics tools to understand how visitors use the site and to improve the user experience. This may include tools such as Google Analytics or similar services." },
            { p: "Cookies are small text files stored on your device when you visit a website. You can control cookie settings through your browser at any time." },
            { p: "A separate cookie notice or banner may be displayed on the website where required by law. Please refer to that notice for further detail on the specific cookies we use." },
        ],
    },
    {
        heading: "12. Your Rights",
        blocks: [
            { p: "Under UK GDPR, you have the following rights in relation to your personal data:" },
            { ul: [
                "Right of access: you can request a copy of the personal data we hold about you",
                "Right to rectification: you can ask us to correct inaccurate or incomplete data",
                "Right to erasure: you can ask us to delete your personal data in certain circumstances",
                "Right to object: you can object to processing based on legitimate interests or for direct marketing",
                "Right to restriction: you can ask us to restrict processing of your data in certain circumstances",
                "Right to data portability: you can ask us to provide your data in a commonly used, machine-readable format where applicable",
                "Right to withdraw consent: where processing is based on consent, you can withdraw it at any time without affecting the lawfulness of prior processing",
            ] },
            { p: "We do not undertake automated decision-making or profiling that produces legal effects or similarly significant effects in relation to individuals." },
            { p: "To exercise any of these rights, please contact us using the details in Section 13 below. We will respond within one calendar month." },
        ],
    },
    {
        heading: "13. How to Contact Us",
        blocks: [
            { p: "If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at:" },
            { p: "Global Innovator Awards, Privacy Enquiries" },
            { p: "NEXUS Creative HQ Ltd, Kings Parade, Lower Coombe Street, Croydon, CR0 1AA" },
            { p: "or via the contact method on our website at www.globalinnovatorawards.com" },
        ],
    },
    {
        heading: "14. Complaints",
        blocks: [
            { p: "If you are unhappy with how we have handled your personal data, please contact us in the first instance and we will do our best to resolve your concern." },
            { p: "You also have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK's data protection supervisory authority:" },
            { p: "Website: ico.org.uk   |   Helpline: 0303 123 1113" },
        ],
    },
    {
        heading: "15. Updates to This Policy",
        blocks: [
            { p: "We may update this Privacy Policy from time to time to reflect changes in our practices, the awards programme, or applicable law. Where changes are material, we will take reasonable steps to bring them to your attention." },
            { p: "The current version of this policy will always be available on our website at globalinnovatorawards.com." },
        ],
    },
]

export default function PrivacyPage() {
    return (
        <>
            <JsonLd
                data={[
                    pageSchema({ name: "Privacy & Cookies", description, path: "/privacy" }),
                    breadcrumbSchema([{ name: "Privacy & Cookies", path: "/privacy" }]),
                ]}
            />
            <LegalPage title="Privacy & Cookies" effectiveDate="Effective 5th June 2026" sections={sections} />
        </>
    )
}
