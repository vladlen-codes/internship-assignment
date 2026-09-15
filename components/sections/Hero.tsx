import type { SiteContent } from "@/content/types";
import { Block, FluidSection } from "@/components/ui/Fluid";
import { FluidImage } from "@/components/ui/FluidImage";
import { RichText } from "@/components/ui/RichText";
import { Button } from "@/components/ui/Button";

export function Hero({ content }: { content: SiteContent["hero"] }) {
  const [primary, secondary] = content.images;
  return (
    <FluidSection rows={[24, 18]} tone="soft" aria-labelledby="hero-title">
      <Block m="2/2/5/10" d="2/12/4/20" z={[4, 7]} align="center">
        <p className="t-eyebrow">
          <RichText text={content.eyebrow} />
        </p>
      </Block>
      <Block m="5/2/12/10" d="7/12/15/24" z={[3, 6]} align={["start", "center"]}>
        <div className="rte">
          <h1 id="hero-title" className="t-h1">
            <RichText text={content.title} />
          </h1>
          <p>
            <RichText text={content.subtitle} />
          </p>
        </div>
      </Block>
      <Block m="12/2/14/10" d="15/12/17/24" z={[1, 2]} align="center">
        <div>
          <Button href={content.cta.href}>{content.cta.label}</Button>
        </div>
      </Block>
      <Block m="15/1/24/8" d="2/1/17/10" z={[5, 5]}>
        <FluidImage img={primary} sizes="(min-width: 768px) 35vw, 72vw" eager />
      </Block>
      <Block m="18/9/24/11" d="7/25/17/27" z={[2, 4]}>
        <FluidImage img={secondary} sizes="(min-width: 768px) 10vw, 16vw" />
      </Block>
    </FluidSection>
  );
}
