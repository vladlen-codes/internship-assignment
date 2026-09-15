import type { SiteContent } from "./types";
import { siteUrl } from "@/lib/site";

const img = (name: string, alt: string, width: number, height: number, position?: string) => ({
  src: `/images/maya/${name}`,
  alt,
  width,
  height,
  position,
});

const ADDRESS = { street: "123th Street 45 W", city: "Santa Monica", region: "CA", postalCode: "90401" };
const ADDRESS_LINE = `${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.region} ${ADDRESS.postalCode}`;
const EMAIL = "hello@mayareynoldspsyd.com"; // placeholder
const PHONE = "(310) 555-0142"; // placeholder
const DIRECTIONS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`;

const schedule = { label: "Schedule a Session", href: "#schedule" };

const services = [
  {
    title: "Anxiety & Panic Therapy",
    body: "Racing thoughts, constant worry, a body that never quite relaxes. Using CBT, mindfulness, and body-oriented tools, we’ll calm your nervous system and loosen the grip of overthinking and panic, so you can rest, focus, and feel like yourself again.",
    image: img(
      "service-anxiety.jpg",
      "Woman resting with her eyes closed in soft window light, taking a slow, calming breath",
      1200,
      1800,
      "50% 35%",
    ),
  },
  {
    title: "Trauma Therapy & EMDR",
    body: "Maybe it was a single overwhelming event, or long-standing patterns rooted in childhood, relationships, or chronic stress. We’ll move at a careful pace that puts safety and stabilization first, using EMDR to help painful memories lose their hold.",
    image: img(
      "service-trauma.jpg",
      "Hands holding a warm cup of tea outdoors among soft green leaves, a quiet grounding moment",
      1200,
      1800,
      "50% 55%",
    ),
  },
  {
    title: "Burnout & Perfectionism Therapy",
    body: "For entrepreneurs, creatives, and professionals who’ve spent years pushing through. Together we’ll ease the high internal pressure, help you reconnect with yourself, and build more sustainable ways of living and working.",
    image: img("service-burnout.jpg", "A calm workspace with a laptop set aside, a notebook, and a cup of coffee", 1200, 1799),
  },
];

const faqs = [
  {
    q: "Who do you work with?",
    a: "Adults, often high-achieving professionals, entrepreneurs, and creatives, who are dealing with anxiety, panic, trauma, burnout, or perfectionism.",
  },
  {
    q: "Do you offer in-person or online therapy?",
    a: "Both. I see clients in person at my Santa Monica office and offer secure telehealth sessions for clients located anywhere in California.",
  },
  {
    q: "Where is your Santa Monica office?",
    a: `${ADDRESS_LINE}. It’s a quiet, private space with natural light, designed to feel calm and grounding.`,
  },
  {
    q: "What types of therapy do you use?",
    a: "An integrative mix of cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, tailored to what you need.",
  },
  {
    q: "What is trauma therapy with you like?",
    a: "Carefully paced. We focus first on safety and stabilization, then work through single-incident or long-standing trauma so you feel more regulated in daily life, not just during sessions.",
  },
  {
    q: "What can I expect in sessions?",
    a: "A warm, collaborative space. Sessions have enough structure to feel supportive while leaving room for reflection and depth, and you stay actively involved in the process.",
  },
  {
    q: "How do I know if we’re a good fit?",
    a: "If you’re looking for a therapist who combines practical tools with depth-oriented work and understands the realities of a fast-paced life, we may be a good fit. Reach out to schedule a session.",
  },
];

const title = "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD";
const description =
  "Licensed clinical psychologist in Santa Monica offering anxiety, trauma, EMDR & burnout therapy for adults. In-person and telehealth across California.";

export const maya: SiteContent = {
  meta: { title, description, canonical: "/" },
  brand: { name: "Maya Reynolds", tagline: "PsyD · Santa Monica", href: "/" },
  nav: [
    { label: "About", href: "#about" },
    {
      label: "Office",
      href: "#office",
      children: [
        { label: "Santa Monica Office", href: "#office" },
        { label: "Telehealth in California", href: "#office" },
        { label: "Get Directions", href: DIRECTIONS },
      ],
    },
    {
      label: "Specialties",
      href: "#services",
      children: services.map((s) => ({ label: s.title.replace(" Therapy", ""), href: "#services" })),
    },
    {
      label: "Methods",
      href: "#approach",
      children: ["CBT", "EMDR", "Mindfulness", "Body-Oriented Therapy"].map((label) => ({ label, href: "#approach" })),
    },
    { label: "FAQs", href: "#faq" },
  ],
  navCta: { label: "Contact", href: "#schedule" },

  hero: {
    eyebrow: "In-person therapy in Santa Monica & telehealth across California",
    title: "Anxiety & trauma therapy in Santa Monica to help you finally feel *at ease*.",
    subtitle: "Warm, grounded therapy for high-achieving adults navigating anxiety, panic, trauma, and burnout.",
    cta: schedule,
    images: [
      img("hero-a.jpg", "A warm cup of coffee on a sunlit windowsill beside sheer linen curtains and eucalyptus", 1600, 2400, "50% 60%"),
      img("hero-b.jpg", "Aerial view of the Santa Monica Pier and beach under a soft pastel sky", 1600, 1200, "30% 60%"),
    ],
  },

  intro: {
    heading: "On the outside, you’re holding it all together. On the inside, you’re exhausted.",
    lead: "You don’t have to keep pushing through on your own.",
    body: [
      "Many of the people I work with are thoughtful, self-aware, and successful by every outside measure, yet quietly struggling with constant worry, overthinking, tension in their body, or trouble sleeping. It can feel like you’re always bracing for something to go wrong.",
    ],
    closing: [
      "As a licensed clinical psychologist in Santa Monica, I help adults understand both the emotional and physical sides of anxiety, trauma, and stress, so you can feel steadier in everyday life, not just during sessions. I see clients in person at my Santa Monica office and through secure telehealth anywhere in California.",
    ],
    image: img("intro.jpg", "Gentle waves washing over pale sand on a quiet beach", 1400, 2103),
  },

  cards: {
    id: "services",
    heading: "How I *help*",
    items: services,
  },

  quote: {
    text: "You don’t have to keep bracing for what might go wrong. _Here, there’s room to slow down, breathe, and come back to yourself._",
    image: img("quote.jpg", "Sheer curtains glowing with warm sunlight beside a leafy plant", 2200, 2933, "50% 45%"),
  },

  tags: {
    heading: "Areas of *focus*",
    items: [
      "Anxiety",
      "Panic attacks",
      "Trauma",
      "Complex trauma",
      "Burnout",
      "Perfectionism",
      "Overthinking",
      "Chronic stress",
      "Trouble sleeping",
      "Relationships",
      "Self-confidence",
      "…and more.",
    ].map((label) => ({ label })),
  },

  feature: {
    id: "about",
    eyebrow: "Meet Dr. Maya Reynolds, PsyD",
    heading: "Practical tools, real depth, and a steady place to land.",
    lead: "I’m a licensed clinical psychologist in Santa Monica, and I understand the realities of living and working in a fast-paced environment.",
    body: [
      "My approach is warm, collaborative, and grounded. Sessions are structured enough to feel supportive, with room left for reflection and depth. I integrate evidence-based methods like CBT, EMDR, mindfulness, and body-oriented techniques, so you can understand both the emotional and physical sides of what you’re experiencing.",
    ],
    aside: [
      "I believe therapy works best when you feel respected, understood, and actively involved. My goal is more than symptom relief: I want to help you build insight, resilience, and a stronger relationship with yourself over time.",
    ],
    image: img("portrait.jpg", "Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica", 1024, 1536, "50% 25%"),
    cta: { label: "More about my approach", href: "#approach" },
  },

  office: {
    id: "office",
    eyebrow: "Our Santa Monica office",
    heading: "A calm, light-filled space to *slow down*",
    body: [
      "My Santa Monica therapy office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered feel. Many clients tell me the space itself helps them feel more at ease the moment they arrive.",
    ],
    details: [
      { icon: "map", text: ADDRESS_LINE },
      { icon: "sofa", text: "In-person sessions in a private, quiet setting" },
      { icon: "video", text: "Secure telehealth for clients anywhere in California" },
      { icon: "leaf", text: "Natural light and a comfortable, uncluttered space" },
    ],
    images: [
      img("office-1.jpg", "Sunlit Santa Monica therapy office with tall windows, exposed brick, and a lounge chair", 1500, 1125),
      img("office-2.jpg", "Calm therapy room with a soft grey sofa, an olive tree, and natural light", 1500, 1125),
    ],
    cta: schedule,
    secondaryCta: { label: "Get directions", href: DIRECTIONS },
  },

  statement: {
    text: "Healing what’s behind you *&* building a steadier way forward.",
    image: img("statement.jpg", "A sunny walking path lined with tall palm trees in Southern California", 2000, 2666, "50% 70%"),
  },

  specialties: {
    id: "approach",
    heading: "Evidence-based therapy, *tailored* to you",
    items: [
      {
        title: "Cognitive Behavioral Therapy (CBT)",
        body: "Practical, evidence-based tools to notice anxious thought patterns, interrupt overthinking, and respond to stress in healthier ways. These are skills you keep using long after a session ends.",
      },
      {
        title: "EMDR Therapy",
        body: "EMDR helps your brain reprocess painful memories so they feel less overwhelming. I pace this work carefully, with an emphasis on safety and stabilization, for both single-incident and complex trauma.",
      },
      {
        title: "Mindfulness-Based Practices",
        body: "Step out of autopilot and constant worry. Mindfulness builds awareness of the present moment and puts more space between you and what you’re feeling.",
      },
      {
        title: "Body-Oriented Techniques",
        body: "Anxiety and trauma live in the body too, as tension, restlessness, and poor sleep. Body-oriented work helps you notice these signals and feel more regulated day to day.",
      },
    ],
  },

  faq: {
    id: "faq",
    heading: "Frequently asked *questions*",
    items: faqs,
  },

  schedule: {
    id: "schedule",
    eyebrow: "Schedule a session",
    heading: "Take the first step toward feeling like *yourself* again.",
    body: [
      "Reaching out takes courage, and finding a therapist you truly connect with makes all the difference. My goal is to help you feel respected, understood, and supported from our very first conversation.",
      "Choose an in-person session at my Santa Monica office or meet online from anywhere in California.",
    ],
    cta: { label: "Schedule a Session", href: `mailto:${EMAIL}?subject=${encodeURIComponent("Scheduling a session")}` },
    images: [
      img("schedule-a.jpg", "Woman in a sage dress writing in a journal", 1200, 1600, "45% 60%"),
      img("schedule-b.jpg", "Dried pampas grass in a white ceramic vase against a warm neutral wall", 1600, 2400),
    ],
  },

  footer: {
    blurb:
      "Getting started should feel simple. Visit my Santa Monica office or meet through secure telehealth from anywhere in California, whichever feels right for you.",
    columns: [
      {
        title: "Navigate",
        lines: [
          { label: "Home", href: "/" },
          { label: "About", href: "#about" },
          { label: "Office", href: "#office" },
          { label: "FAQs", href: "#faq" },
          { label: "Contact", href: "#schedule" },
        ],
      },
      {
        title: "Contact",
        lines: [
          ADDRESS.street,
          `${ADDRESS.city}, ${ADDRESS.region} ${ADDRESS.postalCode}`,
          { label: EMAIL, href: `mailto:${EMAIL}` },
          { label: PHONE, href: "tel:+13105550142" },
        ],
        note: "_Serving Santa Monica in person and adults across California via telehealth_",
      },
      {
        title: "Services",
        lines: services.map((s) => ({ label: s.title.replace(" Therapy", ""), href: "#services" })),
      },
    ],
    legal: [
      { label: "Terms", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Disclaimer", href: "#" },
    ],
    credit: { label: "© 2026 Maya Reynolds, PsyD", href: "/" },
    crossLink: { label: "View template clone →", href: "/clone" },
  },

  schema: [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": `${siteUrl}/#practice`,
      name: "Dr. Maya Reynolds, PsyD",
      description,
      url: siteUrl,
      image: `${siteUrl}/opengraph-image.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.region,
        postalCode: ADDRESS.postalCode,
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Santa Monica" },
        { "@type": "State", name: "California" },
      ],
      medicalSpecialty: "Psychiatric",
      availableService: services.map((s) => ({ "@type": "MedicalTherapy", name: s.title })),
      founder: { "@id": `${siteUrl}/#maya` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteUrl}/#maya`,
      name: "Maya Reynolds",
      honorificPrefix: "Dr.",
      honorificSuffix: "PsyD",
      jobTitle: "Licensed Clinical Psychologist",
      image: `${siteUrl}/images/maya/portrait.jpg`,
      worksFor: { "@id": `${siteUrl}/#practice` },
      knowsAbout: ["Anxiety", "Panic", "Trauma", "EMDR", "Burnout", "Perfectionism", "Cognitive Behavioral Therapy", "Mindfulness"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};
