import { Leaf, MapPin, Sofa, Video } from "lucide-react";
import type { SiteContent } from "@/content/types";
import { Block, FluidSection } from "@/components/ui/Fluid";
import { FluidImage } from "@/components/ui/FluidImage";
import { RichText } from "@/components/ui/RichText";
import { Button } from "@/components/ui/Button";

const ICONS = { map: MapPin, sofa: Sofa, video: Video, leaf: Leaf };

export function Office({ content }: { content: NonNullable<SiteContent["office"]> }) {
  const [main, detail, accent] = content.images;
  return (
    <FluidSection id={content.id} rows={[36, 20]} tone="soft" pad={6.6} minH={66} aria-labelledby="office-title">
      <Block m="1/1/10/8" d="2/1/17/12" z={[1, 1]}>
        <FluidImage img={main} sizes="(min-width: 768px) 45vw, 88vw" />
      </Block>
      {detail && (
        <Block m="7/6/13/11" d="11/8/20/15" z={[2, 2]}>
          <FluidImage img={detail} sizes="(min-width: 768px) 28vw, 55vw" className="image-mat" />
        </Block>
      )}
      {accent && (
        <Block m="1/9/4/11" d="1/12/6/15" z={[3, 3]} className="max-md:hidden">
          <FluidImage img={accent} sizes="12vw" className="image-mat" />
        </Block>
      )}

      <Block m="14/2/16/10" d="3/17/5/26" z={[4, 4]} align={["center", "end"]}>
        <p className="t-eyebrow">
          <RichText text={content.eyebrow} />
        </p>
      </Block>
      <Block m="16/2/19/10" d="5/17/8/26" z={[4, 4]} align="center">
        <h2 id="office-title" className="t-h2">
          <RichText text={content.heading} />
        </h2>
      </Block>
      <Block m="19/2/26/10" d="8/17/12/26" z={[4, 4]}>
        <div className="rte">
          {content.body.map((text) => (
            <p key={text}>
              <RichText text={text} />
            </p>
          ))}
        </div>
      </Block>
      <Block m="26/2/32/10" d="12/17/17/26" z={[4, 4]}>
        <ul className="office-details">
          {content.details.map((detailItem) => {
            const Icon = ICONS[detailItem.icon];
            return (
              <li key={detailItem.text}>
                <Icon aria-hidden strokeWidth={1.25} className="office-icon" />
                <span>{detailItem.text}</span>
              </li>
            );
          })}
        </ul>
      </Block>
      <Block m="32/2/34/10" d="17/17/19/26" z={[4, 4]} align="center">
        <div className="flex flex-wrap items-center gap-x-[2.5em] gap-y-4">
          <Button href={content.cta.href} variant="secondary">
            {content.cta.label}
          </Button>
          {content.secondaryCta && (
            <Button href={content.secondaryCta.href} target="_blank" rel="noopener noreferrer">
              {content.secondaryCta.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </Button>
          )}
        </div>
      </Block>
    </FluidSection>
  );
}
