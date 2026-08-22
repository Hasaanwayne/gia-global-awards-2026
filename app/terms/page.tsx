import LegalPage, { LegalSection } from "../components/LegalPage"
import JsonLd from "../components/JsonLd"
import { buildMetadata, breadcrumbSchema, pageSchema } from "../lib/seo"

const description =
    "Terms and Conditions governing use of the Global Innovator Awards website, nominations, judging, event tickets and participation in the Awards 2026."

export const metadata = buildMetadata({
    title: "Terms and Conditions | Global Innovator Awards",
    description,
    path: "/terms",
})

const sections: LegalSection[] = [
    {
        heading: "1. Introduction",
        blocks: [
            { p: "These Terms and Conditions govern your use of the Global Innovator Awards website at globalinnovatorawards.com (the 'Website') and your participation in the Global Innovator Awards 2026 (the 'Awards'), including the submission of nominations, completion of applications, purchase of event tickets and attendance at the awards evening." },
            { p: "The Awards are organised and operated by NEXUS Creative HQ Ltd, trading as NEXUS ('we', 'us', 'our'), a company registered in England and Wales with company number 12667243, whose registered office is at Kings Parade, Lower Coombe Street, Croydon, CR0 1AA." },
            { p: "By using the Website, submitting a nomination or purchasing a ticket, you confirm that you have read, understood and agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Website or participate in the Awards." },
            { p: "You must be at least 18 years of age to submit a nomination or purchase a ticket. By participating, you confirm that you meet this requirement." },
        ],
    },
    {
        heading: "2. The Global Innovator Awards",
        blocks: [
            { p: "The Global Innovator Awards is an annual awards programme recognising founders, innovators and exceptional talent who have come to the UK under a qualifying innovation or talent route and have made a significant contribution to UK business, innovation or culture." },
            { p: "The Awards currently comprise ten competitive categories and one special Pioneer Award. Details of all categories, eligibility criteria and judging criteria are set out on the Website and may be updated from time to time at our discretion." },
            { p: "Entry to the Awards is free. Attendance at the awards evening is subject to a separate ticket purchase." },
        ],
    },
    {
        heading: "3. Eligibility",
        blocks: [
            { ul: [
                "To be eligible for consideration in any competitive category, the nominee must hold, or have previously held, one of the following qualifying routes: Innovator Founder Visa; Graduate Visa; Global Talent Visa; Innovator Visa (closed 2023); Start-up Visa; Tier 1 Exceptional Talent; or Tier 1 Entrepreneur.",
                "The Global Talent Award category is restricted to current or former holders of the Global Talent Visa (Exceptional Promise or Exceptional Talent endorsement) who are not founders.",
                "The UK SME Global Expansion Award is open to UK-headquartered businesses with fewer than 250 employees where at least one founder or co-founder holds or has held a qualifying route. The business must demonstrate active trading in at least one overseas market.",
                "The Pioneer Award is a nomination-only honorary award and is not open for self-entry. Nominations are accepted only from endorsing bodies, partners or judges. NEXUS reserves the right to conduct due diligence on all Pioneer Award nominations.",
                "Individuals who arrived in the UK as dependants or children and have lived in the UK for the majority of their adult life are not eligible, regardless of visa status.",
                "NEXUS reserves the right to verify eligibility at any stage and to disqualify any nominee or entrant who does not meet the eligibility criteria, including after the announcement of finalists or winners.",
                "Members of the NEXUS team directly involved in organising the Awards, and members of the judging panel, are not eligible to enter.",
            ] },
        ],
    },
    {
        heading: "4. Nominations",
        blocks: [
            { ul: [
                "Nominations may be submitted by the nominee themselves (self-nomination) or by a third party on behalf of a nominee.",
                "Where a third party submits a nomination on behalf of another individual, NEXUS will contact the nominee directly and promptly to inform them of the nomination, explain the process, and invite them to participate or withdraw.",
                "By submitting a nomination on behalf of another person, organisation or business, you confirm that, to the best of your knowledge, the information provided is accurate and that you have the necessary authority to provide that information to NEXUS for the purposes of administering the Awards.",
                "By submitting a nomination, you confirm that all information provided is accurate, truthful and complete to the best of your knowledge. Submitting false or misleading information may result in disqualification.",
                "Nominations must be submitted via the official Typeform nomination form on the Website during the open nominations period. Nominations submitted by any other means will not be accepted.",
                "The nominations window opens on 15th June 2026 and closes August 2026. NEXUS reserves the right to close nominations early if required and will not accept late submissions under any circumstances.",
                "Submission of a nomination does not guarantee longlisting, shortlisting or any other form of recognition.",
                "NEXUS reserves the right to reject any nomination at its discretion, including on grounds of ineligibility, incomplete information, or conduct inconsistent with the values of the Awards.",
            ] },
        ],
    },
    {
        heading: "5. The Two-Stage Entry Process",
        blocks: [
            { ul: [
                "The Awards operate a two-stage entry process. Stage one is an open nominations period. Stage two is a full submission, open only to longlisted nominees.",
                "Following the close of nominations, NEXUS will conduct an internal triage to select up to 30 longlisted nominees per category. This is an eligibility and quality triage, not a judging step. NEXUS's decisions on longlisting are final.",
                "Longlisted nominees will be notified one week after the nominations close and invited to complete a full submission via a unique link. The stage two deadline is at the end of August. No extensions will be granted.",
                "Stage two submissions are reviewed by an independent judge panel. Each judge is allocated one category and ranks their top ten nominees in order. Aggregate rankings determine the ten publicly announced finalists per category.",
                "The winner in each category is determined by the highest aggregate score. Winner identities are held confidentially by the NEXUS awards team and are not disclosed to judges, sponsors or any other party prior to the awards evening.",
                "The shortlist of ten finalists per category will be announced publicly September 2026.",
            ] },
        ],
    },
    {
        heading: "6. Judging",
        blocks: [
            { ul: [
                "The Awards are judged by an independent panel selected by NEXUS. Judges are appointed on the basis of their expertise and relevance to their assigned category.",
                "All judges are required to declare any conflict of interest before receiving submissions. A judge with a direct financial interest in a nominee will be recused from assessing that nominee.",
                "Judges assess submissions independently and do not discuss rankings with one another. Scoring is asynchronous.",
                "All submission content is treated as confidential by judges and is not shared with any third party. Judges may only use submission materials for the purpose of assessing entries and determining award outcomes. NEXUS's decisions in relation to judging, shortlisting and winner selection are final. No correspondence will be entered into regarding judging outcomes.",
                "In the event of a tied aggregate score at the top position, the NEXUS awards director will make the final determination using stage two supporting documents.",
            ] },
        ],
    },
    {
        heading: "7. Finalists and Winners",
        blocks: [
            { ul: [
                "Being announced as a finalist or winner authorises NEXUS to publish and use the finalist's or winner's name, company name, category, business name, approved logo, professional biography, approved photographs and award status in connection with the administration, reporting and promotion of the Awards, including on the Website, social media channels, press releases, event materials and future awards marketing.",
                "NEXUS will not publish submission content or detailed personal information about finalists or winners without their prior written consent.",
                "Finalists and winners may be asked to provide a short biography, photograph and quote for use in awards communications. Participation in this is voluntary but encouraged.",
                "Winners will receive a physical trophy presented at the awards evening. Trophies are non-transferable and have no cash value.",
                "NEXUS reserves the right to withdraw a finalist or winner status at any time if it is established that eligibility criteria were not met, or that information provided was materially inaccurate or misleading.",
                "NEXUS reserves the right to withdraw, suspend or revoke a nomination, finalist position or award where it reasonably considers that continued participation may bring the Awards, NEXUS, its judges, sponsors or partners into disrepute.",
            ] },
        ],
    },
    {
        heading: "8. Event Tickets",
        blocks: [
            { ul: [
                "Tickets to the Global Innovator Awards evening are sold separately and are not included in nomination or entry to the Awards.",
                "Ticket sales are managed via Ticket Tailor. By purchasing a ticket, you agree to Ticket Tailor's terms of service in addition to these Terms and Conditions.",
                "All ticket sales are final. NEXUS does not offer refunds except where an event is cancelled or rescheduled by NEXUS and a replacement date cannot be offered.",
                "Tickets are personal and non-transferable unless NEXUS agrees otherwise in writing.",
                "Finalists receive a unique discount code granting a reduced ticket price. This code is for the finalist's personal use only and may not be shared or transferred.",
                "NEXUS reserves the right to refuse entry to any person whose behaviour at the event is disruptive, abusive or inconsistent with the values of the Awards, without liability for the cost of the ticket.",
                "NEXUS reserves the right to change the date, venue or format of the awards evening. In the event of a significant change, ticket holders will be notified and offered a refund if they are unable to attend the revised event.",
                "NEXUS and its authorised representatives may photograph, record or film the awards evening and associated events. By attending the awards evening, attendees acknowledge that they may appear in photographs, audio recordings or video footage which may be used by NEXUS for promotional, marketing, reporting, event administration and archival purposes in connection with the Awards.",
            ] },
        ],
    },
    {
        heading: "9. Intellectual Property",
        blocks: [
            { ul: [
                "All content on the Website, including text, design, graphics, logos and copy, is the property of NEXUS Creative HQ Ltd or its licensors and is protected by copyright and other intellectual property rights.",
                "You may not reproduce, distribute, modify or use any content from the Website for commercial purposes without our prior written consent.",
                "By submitting a nomination or stage two entry, you grant NEXUS a non-exclusive, worldwide, royalty-free licence to use, reproduce, store, display and communicate nomination materials, photographs, logos, biographies and related submission content solely for the purposes of administering, judging, operating, promoting and reporting on the Awards. NEXUS will not use detailed submission content for unrelated commercial purposes without the relevant participant's consent.",
                "You grant NEXUS a non-exclusive, royalty-free licence to use nomination and submission content solely for the purposes of administering and promoting the Awards. This licence does not extend to commercial use or publication of submission content without your consent.",
            ] },
        ],
    },
    {
        heading: "10. Conduct and Prohibited Use",
        blocks: [
            { p: "You agree not to use the Website or the Awards process for any of the following purposes:" },
            { ul: [
                "Submitting false, misleading or fraudulent information in a nomination or submission",
                "Impersonating another individual or organisation",
                "Attempting to interfere with the judging process or to contact judges directly in connection with a nomination",
                "Uploading or transmitting content that is unlawful, harmful, defamatory, offensive or infringing",
                "Using the Website in any way that could damage, disable or impair its operation",
                "Harvesting or collecting data about other users or nominees without consent",
            ] },
            { p: "NEXUS reserves the right to disqualify any entrant and remove any content that breaches these standards, without prior notice." },
            { p: "Verification: NEXUS reserves the right to request evidence supporting any information contained within a nomination or submission. Entrants remain responsible for ensuring that all information submitted is accurate, truthful, complete and capable of verification. Failure to provide reasonable supporting evidence when requested may result in rejection or disqualification." },
            { p: "Improper influence: offering gifts, incentives, hospitality or other benefits to judges, organisers or representatives of NEXUS with the intention of influencing the Awards process is prohibited and may result in disqualification." },
        ],
    },
    {
        heading: "11. Links to Third-Party Websites",
        blocks: [
            { ul: [
                "The Website may contain links to third-party websites, including Typeform, Ticket Tailor, Mailchimp and other platforms used in connection with the Awards. These links are provided for convenience only.",
                "NEXUS is not responsible for the content, accuracy or availability of third-party websites and does not endorse them. Your use of any linked website is governed by that website's own terms and conditions.",
            ] },
        ],
    },
    {
        heading: "12. Disclaimers and Availability",
        blocks: [
            { ul: [
                "The Website and Awards programme are provided on an 'as is' and 'as available' basis. We make no warranty that the Website will be uninterrupted, error-free or free from viruses or other harmful components.",
                "NEXUS does not guarantee that any nominee will be longlisted, shortlisted or recognised in any way. Entry to the Awards does not confer any right to a particular outcome.",
                "NEXUS reserves the right to amend, suspend or cancel the Awards or any category at any time, including where the volume or quality of nominations received is insufficient to run a category fairly.",
                "Nothing on the Website constitutes legal, financial or professional advice.",
            ] },
        ],
    },
    {
        heading: "13. Limitation of Liability",
        blocks: [
            { ul: [
                "Nothing in these Terms and Conditions limits or excludes liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by law.",
                "NEXUS shall not be liable for any delay, interruption, postponement, modification or cancellation of the Awards or any related event arising from circumstances beyond its reasonable control, including acts of God, epidemic or pandemic, governmental action, war, civil unrest, industrial disputes, venue unavailability, utility failure or technological failure.",
                "To the maximum extent permitted by law, NEXUS accepts no liability for any indirect, special or consequential loss or damage arising from use of the Website or participation in the Awards, including loss of business, revenue, reputation or data.",
                "NEXUS's total liability to you in connection with the Awards or the Website shall not exceed the amount paid by you for a ticket to the awards evening, or £100, whichever is greater.",
            ] },
        ],
    },
    {
        heading: "14. Privacy",
        blocks: [
            { p: "Your use of the Website and participation in the Awards is also governed by our Privacy Policy, which is available at globalinnovatorawards.com and is incorporated into these Terms and Conditions by reference. By using the Website or submitting a nomination, you confirm that you have read and understood the Privacy Policy." },
        ],
    },
    {
        heading: "15. Changes to These Terms",
        blocks: [
            { p: "NEXUS reserves the right to update these Terms and Conditions from time to time. The current version will always be available on the Website. Where changes are material, we will take reasonable steps to bring them to your attention. Your continued use of the Website following any update constitutes your acceptance of the revised terms." },
        ],
    },
    {
        heading: "16. General",
        blocks: [
            { ul: [
                "These Terms and Conditions constitute the entire agreement between you and NEXUS in relation to your use of the Website and participation in the Awards.",
                "If any provision of these Terms and Conditions is found to be invalid or unenforceable by a court of competent jurisdiction, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full force and effect.",
                "No failure or delay by NEXUS in exercising any right under these Terms and Conditions shall constitute a waiver of that right.",
                "You may not transfer any of your rights or obligations under these Terms and Conditions to any other person without our prior written consent.",
                "The Contracts (Rights of Third Parties) Act 1999 does not apply to these Terms and Conditions. No third party has any right to enforce any provision of these Terms and Conditions.",
                "These Terms and Conditions are governed by and construed in accordance with the law of England and Wales. Any dispute arising under or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
            ] },
        ],
    },
    {
        heading: "17. Contact Us",
        blocks: [
            { p: "If you have any questions about these Terms and Conditions or the Awards, please contact us at:" },
            { p: "NEXUS Creative HQ Ltd" },
            { p: "Kings Parade, Lower Coombe Street, Croydon, CR0 1AA" },
            { p: "Company number: 12667243" },
            { p: "or by using the contact method on our website at: globalinnovatorawards.com" },
        ],
    },
]

export default function TermsPage() {
    return (
        <>
            <JsonLd
                data={[
                    pageSchema({ name: "Terms and Conditions", description, path: "/terms" }),
                    breadcrumbSchema([{ name: "Terms and Conditions", path: "/terms" }]),
                ]}
            />
            <LegalPage title="Terms and Conditions" effectiveDate="Effective date: 5th June 2026" sections={sections} />
        </>
    )
}
