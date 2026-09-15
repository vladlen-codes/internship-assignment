export type Rich = string;

export type Img = {
  src: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
};

export type Cta = { label: string; href: string };

export type NavItem = { label: string; href: string; children?: Cta[] };

export type FooterColumn = {
  title: string;
  lines: (string | Cta)[];
  note?: Rich;
};

export interface SiteContent {
  meta: { title: string; description: string; canonical?: string; noindex?: boolean };
  brand: { name: string; tagline?: string; logo?: Img; href: string };
  nav: NavItem[];
  navCta: Cta;

  hero: { eyebrow: Rich; title: Rich; subtitle: Rich; cta: Cta; images: [Img, Img] };
  intro: { heading: Rich; lead: Rich; body: Rich[]; closing: Rich[]; image: Img };
  cards: { id?: string; heading: Rich; items: { title: string; href?: string; body: Rich; image: Img }[] };
  quote: { text: Rich; image: Img };
  tags: { heading: Rich; items: { label: string; href?: string }[] };
  feature: {
    id?: string;
    eyebrow: Rich;
    heading: Rich;
    lead: Rich;
    body: Rich[];
    aside: Rich[];
    image: Img;
    cta: Cta;
  };
  office?: {
    id?: string;
    eyebrow: Rich;
    heading: Rich;
    body: Rich[];
    details: { icon: "map" | "sofa" | "video" | "leaf"; text: string }[];
    images: Img[];
    cta: Cta;
    secondaryCta?: Cta;
  };
  statement: { text: Rich; image: Img };
  specialties: { id?: string; heading: Rich; items: { title: string; body: Rich; cta?: Cta }[] };
  faq?: { id?: string; heading: Rich; items: { q: string; a: Rich }[] };
  schedule: { id?: string; eyebrow: Rich; heading: Rich; body: Rich[]; cta: Cta; images: [Img, Img] };
  footer: { blurb: Rich; columns: FooterColumn[]; legal: Cta[]; credit?: Cta; crossLink?: Cta };
  schema?: Record<string, unknown>[];
}
