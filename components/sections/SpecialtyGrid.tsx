import { Fragment } from "react";
import type { SiteContent } from "@/content/types";
import { Block, FluidSection } from "@/components/ui/Fluid";
import { RichText } from "@/components/ui/RichText";
import { Button } from "@/components/ui/Button";

const PLACEMENT = [
  { text: ["6/2/13/10", "4/11/11/18"], cta: ["13/2/15/10", "11/11/13/18"] },
  { text: ["16/2/23/10", "15/11/22/18"], cta: ["23/2/25/10", "22/11/24/18"] },
  { text: ["26/2/33/10", "4/19/11/26"], cta: ["33/2/35/10", "11/19/13/26"] },
  { text: ["36/2/42/10", "15/19/22/26"], cta: ["42/2/44/10", "22/19/24/26"] },
];

export function SpecialtyGrid({ content }: { content: SiteContent["specialties"] }) {
  return (
    <FluidSection id={content.id} rows={[44, 25]}>
      <Block m="3/2/5/10" d="3/3/7/10" z={[6, 9]} align={["start", "center"]}>
        <h2 className="t-h3">
          <RichText text={content.heading} />
        </h2>
      </Block>
      {content.items.slice(0, 4).map((item, i) => {
        const place = PLACEMENT[i];
        return (
          <Fragment key={item.title}>
            <Block m={place.text[0]} d={place.text[1]} z={[3, 3]}>
              <div className="rte">
                <h3 className="t-h4">{item.title}</h3>
                <p>
                  <RichText text={item.body} />
                </p>
              </div>
            </Block>
            {item.cta && (
              <Block m={place.cta[0]} d={place.cta[1]} z={[4, 7]} align={["center", "start"]}>
                <div>
                  <Button href={item.cta.href} aria-label={`${item.cta.label} about ${item.title}`}>
                    {item.cta.label}
                  </Button>
                </div>
              </Block>
            )}
          </Fragment>
        );
      })}
    </FluidSection>
  );
}
