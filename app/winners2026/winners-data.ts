export type Award = {
    /** Anchor id on /winners2026. */
    id: string
    award: string
    winner: string
    org?: string
    /** One-line description, programme wording. */
    line: string
    /** Headshot in /public/winners; initials are shown until it exists. */
    img?: string
    /** Several people sharing one award: shown as an overlapping pair. */
    imgs?: { src: string; alt: string }[]
    highlyCommended: string[]
    featured?: boolean
}

/** 2026 winners and Highly Commended, in programme order. */
export const AWARDS: Award[] = [
    {
        id: "global-talent",
        award: "Global Talent Award",
        winner: "Ravneet Kaur",
        org: "National Grid",
        line: "Supported more than 250 renewable energy start-ups at the Offshore Renewable Energy Catapult and led more than £25m in successful R&D bids.",
        img: "/winners/ravneet-kaur.webp",
        highlyCommended: ["Lyubov Guk", "Paige Zeigler"],
    },
    {
        id: "creative-cultural",
        award: "Creative & Cultural Innovation Award",
        winner: "Chandni Dangson",
        org: "WWE",
        line: "Director, Digital & Social at WWE, leading strategy across the UK and India; WWE UK’s channels have gained 8.4 million followers and 8 billion impressions since 2024.",
        img: "/winners/chandni-dangson.webp",
        highlyCommended: ["Yuxin He", "Tiffany Chiu"],
    },
    {
        id: "ecosystem-builder",
        award: "Ecosystem Builder of the Year Award",
        winner: "Cansu Deniz Bayrak",
        line: "Ran the UK’s first IoT accelerator, raised more than £30m to invest in underserved founders, and now helps researchers turn their work into companies.",
        img: "/winners/cansu-deniz-bayrak.webp",
        highlyCommended: ["Lyubov Guk", "Michelle Hua"],
    },
    {
        id: "founder",
        award: "Founder of the Year Award",
        winner: "Artem Sokolov",
        org: "Humanoid",
        line: "Founder CEO of AI and robotics company Humanoid, building safe and reliable humanoid robots for industry, with partners including Schaeffler, Bosch and NVIDIA.",
        img: "/winners/artem-sokolov.webp",
        highlyCommended: ["Ahmed Adnan Elsharkawy", "Danyi Chen"],
    },
    {
        id: "tech-deep-science",
        award: "Tech & Deep Science Innovation Award",
        winner: "David Sikharulidze",
        org: "Mavis Technologies",
        line: "Builds AI smart glasses for blind and partially sighted people, designed and made in Northampton, with two products launched in 2026 and a granted UK patent.",
        img: "/winners/david-sikharulidze.webp",
        highlyCommended: ["Cheng Li", "Dr Mae Mansoubi, Prof Helen Dawes, Prof Sallie Lamb & Dr Kourosh Norouzi"],
    },
    {
        id: "emerging-founder",
        award: "Emerging Founder of the Year Award",
        winner: "Mary-Brenda Akoda",
        org: "GenScan AI",
        line: "Turned her Imperial College research into GenMRI, AI software that makes MRI scans up to 90% faster on the scanners hospitals already own.",
        img: "/winners/mary-brenda-akoda.webp",
        highlyCommended: ["Aswath Ganesan Indra", "Maria Sergeeva"],
    },
    {
        id: "co-founding-team",
        award: "Co-Founding Team of the Year Award",
        winner: "Edmund Moyo & Dalumuzi ‘Muzi’ Dube",
        org: "Sentian Aerospace",
        line: "Engineering partners for more than a decade, they design a family of long-endurance drones for defence, security and infrastructure missions.",
        imgs: [
            { src: "/winners/edmund-moyo.webp", alt: "Edmund Moyo" },
            { src: "/winners/muzi-dube.webp", alt: "Dalumuzi ‘Muzi’ Dube" },
        ],
        highlyCommended: ["Sonakshi Senthil & Dr Nikhit Anilbhai", "Maya Adina Mehrara & Agnese Enricha Picchio"],
    },
    {
        id: "rising-star",
        award: "Rising Star of the Year Award",
        winner: "Sanzhar Taizhan",
        org: "Taisan",
        line: "Building safer, lighter sodium-ion batteries for e-bikes, scooters, drones and light electric vehicles, from Coventry.",
        img: "/winners/sanzhar-taizhan.webp",
        highlyCommended: ["Danyi Chen", "Mary-Brenda Akoda"],
    },
    {
        id: "uk-sme-global-expansion",
        award: "UK SME Global Expansion Award",
        winner: "Mustafa Khanwala",
        org: "MishiPay",
        line: "Founded MishiPay at the University of Manchester; its self-checkout technology now runs in more than 2,000 stores for 35 brands across North America, Europe and the Middle East.",
        img: "/winners/mustafa-khanwala.webp",
        highlyCommended: ["Tiffany Chiu", "Sonakshi Senthil & Dr Nikhit Anilbhai"],
    },
    {
        id: "breakthrough",
        award: "Breakthrough Innovation of the Year Award",
        winner: "Artem Sokolov",
        org: "Humanoid",
        line: "Founder CEO of AI and robotics company Humanoid, building safe and reliable humanoid robots for industry, with partners including Schaeffler, Bosch and NVIDIA.",
        img: "/winners/artem-sokolov.webp",
        highlyCommended: ["Cheng Li", "Balamurugan Balasubramanian"],
    },
    {
        id: "pioneer",
        award: "The Pioneer Award (Inaugural)",
        winner: "Kelu ‘Eric’ Liu",
        org: "HungryPanda",
        line: "Founder and CEO of HungryPanda, the global delivery platform connecting overseas Asian communities with authentic food and groceries; since 2017 he has raised over $275m and scaled it to more than six million users across ten countries.",
        img: "/winners/kelu-eric-liu.webp",
        highlyCommended: [],
        featured: true,
    },
]

export const initialsOf = (name: string) =>
    name
        .replace(/[‘’'"]/g, "")
        .split(/\s+|&/)
        .filter((w) => /^[A-Za-z]/.test(w) && !/^(Dr|Prof)$/i.test(w))
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
