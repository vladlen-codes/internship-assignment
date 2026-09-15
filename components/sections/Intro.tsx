import type { SiteContent } from "@/content/types";
import { Block, FluidSection } from "@/components/ui/Fluid";
import { FluidImage } from "@/components/ui/FluidImage";
import { RichText } from "@/components/ui/RichText";

export function Intro({ content }: { content: SiteContent["intro"] }) {
  return (
    <FluidSection rows={[28, 17]} tone="soft" pad={7} minH={70}>
      <Block m="1/2/5/10" d="4/3/8/16" z={[1, 0]} align={["start", "center"]}>
        <h2 className="t-h2">
          <RichText text={content.heading} />
        </h2>
      </Block>
      <Block m="5/2/13/10" d="9/3/16/10" z={[2, 1]} align={["center", "start"]}>
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
      <Block m="14/2/21/10" d="1/19/17/27" z={[3, 3]}>
        <FluidImage img={content.image} sizes="(min-width: 768px) 32vw, 90vw" />
      </Block>
      <Block m="22/2/29/10" d="9/10/17/17" z={[4, 2]}>
        <div className="rte">
          {content.closing.map((text) => (
            <p key={text}>
              <RichText text={text} />
            </p>
          ))}
        </div>
      </Block>
    </FluidSection>
  );
}
