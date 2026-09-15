import type { SiteContent } from "@/content/types";
import { Block, FluidSection } from "@/components/ui/Fluid";
import { FluidImage } from "@/components/ui/FluidImage";
import { RichText } from "@/components/ui/RichText";
import { Button } from "@/components/ui/Button";

export function Feature({ content }: { content: SiteContent["feature"] }) {
  return (
    <FluidSection id={content.id} rows={[41, 24]} tone="muted">
      <Block m="3/2/5/10" d="4/3/6/15" z={[5, 5]} align={["center", "start"]}>
        <p className="t-eyebrow">
          <RichText text={content.eyebrow} />
        </p>
      </Block>
      <Block m="5/2/8/9" d="8/3/10/20" z={[2, 2]} align="center">
        <h2 className="t-h2">
          <RichText text={content.heading} />
        </h2>
      </Block>
      <Block m="9/2/17/10" d="4/21/22/27" z={[6, 6]}>
        <FluidImage img={content.image} sizes="(min-width: 768px) 25vw, 90vw" />
      </Block>
      <Block m="18/2/28/10" d="11/3/20/11" z={[4, 4]} align={["center", "start"]}>
        <div className="rte">
          <p className="t-eyebrow">
            <RichText text={content.lead} />
          </p>
          {content.body.map((text) => (
            <p key={text}>
              <RichText text={text} />
            </p>
          ))}
        </div>
      </Block>
      <Block m="28/2/38/10" d="11/11/20/19" z={[3, 3]}>
        <div className="rte">
          {content.aside.map((text) => (
            <p key={text}>
              <RichText text={text} />
            </p>
          ))}
        </div>
      </Block>
      <Block m="38/2/40/10" d="21/3/23/19" z={[7, 7]} align={["center", "start"]}>
        <div>
          <Button href={content.cta.href}>{content.cta.label}</Button>
        </div>
      </Block>
    </FluidSection>
  );
}
