import type { SiteContent } from "@/content/types";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { CardTrio } from "@/components/sections/CardTrio";
import { QuoteBanner } from "@/components/sections/QuoteBanner";
import { TagCloud } from "@/components/sections/TagCloud";
import { Feature } from "@/components/sections/Feature";
import { StatementBanner } from "@/components/sections/StatementBanner";
import { SpecialtyGrid } from "@/components/sections/SpecialtyGrid";
import { ScheduleCta } from "@/components/sections/ScheduleCta";
import { Office } from "@/components/sections/Office";
import { Faq } from "@/components/sections/Faq";
import { JsonLd } from "@/components/seo/JsonLd";

export function HomePage({ content }: { content: SiteContent }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header brand={content.brand} nav={content.nav} navCta={content.navCta} />
      <div id="page-content">
        <main id="main">
          <Hero content={content.hero} />
          <Intro content={content.intro} />
          <CardTrio content={content.cards} />
          <QuoteBanner content={content.quote} />
          <TagCloud content={content.tags} />
          <Feature content={content.feature} />
          {content.office && <Office content={content.office} />}
          <StatementBanner content={content.statement} />
          <SpecialtyGrid content={content.specialties} />
          {content.faq && <Faq content={content.faq} />}
          <ScheduleCta content={content.schedule} />
        </main>
        <Footer brand={content.brand} content={content.footer} />
      </div>
      {content.schema?.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}
    </>
  );
}
