import type { SiteContent } from "./types";

const img = (name: string, alt: string, width: number, height: number, position?: string) => ({
  src: `/images/clone/${name}`,
  alt,
  width,
  height,
  position,
});

const team = [
  "Jennifer Anderson, LMFT",
  "Candace Bletscher, AMFT",
  "Heather Williams-Baumgart, AMFT",
  "Michaela Gorospe, AMFT",
  "Samantha Johnson, AMFT",
  "Autumn Bodily, AMFT",
  "Andrea Watkins, APCC",
  "Rosa Gomez, AMFT",
  "Chad Flores, AMFT",
];

const link = (label: string) => ({ label, href: "#" });

export const clone: SiteContent = {
  meta: {
    title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling (template clone)",
    description: "Front-end recreation of the Conejo Valley Family Counseling homepage template.",
    noindex: true,
  },
  brand: {
    name: "Conejo Valley Family Counseling",
    href: "/clone",
    logo: img("logo.png", "Conejo Valley Family Counseling", 1500, 438),
  },
  nav: [
    { label: "About", href: "#" },
    { label: "Our Team", href: "#", children: team.map(link) },
    {
      label: "Specialties",
      href: "#",
      children: [
        "Dissociation",
        "Trauma",
        "Special Needs Parenting",
        "Couples",
        "Children & Teens",
        "Anxiety & Depression",
        "Adoption",
      ].map(link),
    },
    { label: "Methods", href: "#", children: ["EMDR", "Brainspotting", "Somatic Therapy", "Parts Work Therapy"].map(link) },
    { label: "FAQs", href: "#" },
  ],
  navCta: { label: "Contact", href: "#" },

  hero: {
    eyebrow: "Online & in-person counseling in Newbury Park & across CA",
    title: "Rebuild your foundation on solid ground and finally begin to *thrive*.",
    subtitle: "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.",
    cta: { label: "Book an Appointment", href: "#" },
    images: [
      img("hero-a.jpg", "A family walking together along the beach", 1365, 1246),
      img("hero-b.jpg", "Gentle waves on the shoreline", 1365, 1246, "87% 56%"),
    ],
  },

  intro: {
    heading: "You’re holding onto hope that life can be better than it is right now.",
    lead: "At Conejo Valley Family Counseling we want to make that hope a reality.",
    body: [
      "Whether you're an adult seeking personal growth,  looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.",
    ],
    closing: [
      "First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.",
    ],
    image: img("intro.jpg", "Waves washing over pale sand", 1104, 1632),
  },

  cards: {
    heading: "Who we *help*",
    items: [
      {
        title: "Adults",
        body: "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
        image: img("card-adults.jpg", "Two friends sitting by a lake", 1104, 1632, "51% 65%"),
      },
      {
        title: "Couples",
        body: "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
        image: img("card-couples.jpg", "A smiling couple embracing on the beach", 1104, 1632),
      },
      {
        title: "Children & Teens",
        body: "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
        image: img("card-children.jpg", "Two children playing at the water’s edge", 1105, 1683),
      },
    ],
  },

  quote: {
    text: "You deserve a place where your story is heard, valued, and understood. _Nothing will be too heavy for us to carry together._",
    image: img("quote.jpg", "Children running across a wide beach", 1500, 927),
  },

  tags: {
    heading: "Our areas of *expertise*",
    items: [
      "Dissociation",
      "Trauma",
      "Family conflict",
      "Special needs parenting",
      "Depression",
      "marriage",
      "anxiety",
      "relationships",
      "children",
      "teens",
      "intimacy & connection",
      "…and more.",
    ].map((label) => ({ label })),
  },

  feature: {
    eyebrow: "How we work",
    heading: "We’re here to make a difference.",
    lead: "The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.",
    body: [
      " Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.",
    ],
    aside: [
      "Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.",
    ],
    image: img("feature.jpg", "A mother and daughter dancing on the sand", 1104, 1632, "22% 46%"),
    cta: { label: "Learn more about us", href: "#" },
  },

  statement: {
    text: "Honoring where you’ve been *&* helping shape where you’re headed.",
    image: img("statement.jpg", "A family holding hands at the water’s edge", 1500, 927),
  },

  specialties: {
    heading: "Our *specialties* include…",
    items: [
      {
        title: "Trauma",
        body: "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
        cta: link("Learn more"),
      },
      {
        title: "Dissociation",
        body: "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
        cta: link("Learn more"),
      },
      {
        title: "EMDR",
        body: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
        cta: link("Learn more"),
      },
      {
        title: "Special Needs Parenting",
        body: "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
        cta: link("Learn more"),
      },
    ],
  },

  schedule: {
    eyebrow: "Schedule an appointment",
    heading: "Find a therapist who is the right fit for *you*.",
    body: [
      "Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.",
      "Click the button below to schedule an appointment.",
    ],
    cta: { label: "Book now", href: "#" },
    images: [
      img("schedule-a.jpg", "A hand gathering shells in the sand", 1500, 927),
      img("schedule-b.jpg", "Drawing in the sand beside bare feet", 1500, 927, "63% 53%"),
    ],
  },

  footer: {
    blurb:
      "We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.",
    columns: [
      { title: "Navigate", lines: ["Home", "About", "FAQs", "Contact"].map(link) },
      {
        title: "Contact",
        lines: [
          "925 Broadbeck Dr",
          "Suites 200 and 225",
          "Newbury Park, CA 91320",
          { label: "info@conejovalleycounseling.com", href: "mailto:info@conejovalleycounseling.com" },
          { label: "805.242.3120", href: "tel:+18052423120" },
        ],
        note: "_Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley_",
      },
      {
        title: "Our Team",
        lines: [
          "Jennifer Anderson",
          "Heather Williams-Baumgart",
          "Autumn Bodily",
          "Michaela Gorospe",
          "Candace Bletscher",
          "Samantha Johnson",
          "Andrea Watkins",
          "Rosa Gomez",
          "Chad Flores",
        ].map(link),
      },
    ],
    legal: ["Terms", "Privacy Policy", "Disclaimer"].map(link),
    credit: link("Website by Walker Strategy Co."),
    crossLink: { label: "View redesign →", href: "/" },
  },
};
