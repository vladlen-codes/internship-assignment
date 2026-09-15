import type { SiteContent } from "@/content/types";
import { Block, FluidSection } from "@/components/ui/Fluid";
import { FluidImage } from "@/components/ui/FluidImage";
import { RichText } from "@/components/ui/RichText";
import { Button } from "@/components/ui/Button";

export function ScheduleCta({ content }: { content: SiteContent["schedule"] }) {
  const [left, right] = content.images;
  return (
    <FluidSection id={content.id} rows={[31, 16]} tone="soft" pad={6.6} minH={66}>
      <Block m="1/1/7/6" d="4/1/16/4" z={[5, 5]}>
        <FluidImage img={left} sizes="(min-width: 768px) 12vw, 50vw" />
      </Block>
      <Block m="8/2/10/10" d="1/6/3/16" z={[0, 0]} align={["center", "start"]}>
        <p className="t-eyebrow">
          <RichText text={content.eyebrow} />
        </p>
      </Block>
      <Block m="10/2/13/10" d="4/6/8/16" z={[3, 3]}>
        <h2 className="t-h2">
          <RichText text={content.heading} />
        </h2>
      </Block>
      <Block m="13/2/21/10" d="8/6/14/16" z={[1, 1]}>
        <div className="rte">
          {content.body.map((text) => (
            <p key={text}>
              <RichText text={text} />
            </p>
          ))}
        </div>
      </Block>
      <Block m="21/2/23/10" d="14/6/16/16" z={[2, 2]} align="center">
        <div>
          <Button href={content.cta.href} variant="secondary">
            {content.cta.label}
          </Button>
        </div>
      </Block>
      <Block m="24/3/32/11" d="1/18/16/27" z={[4, 4]}>
        <FluidImage img={right} sizes="(min-width: 768px) 35vw, 85vw" />
      </Block>
    </FluidSection>
  );
}
