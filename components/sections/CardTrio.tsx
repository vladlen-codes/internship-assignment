import Link from "next/link";
import { Fragment } from "react";
import type { SiteContent } from "@/content/types";
import { Block, FluidSection } from "@/components/ui/Fluid";
import { FluidImage } from "@/components/ui/FluidImage";
import { RichText } from "@/components/ui/RichText";

const COLUMNS = [5, 12, 19];
const MOBILE_STEP = 17;

export function CardTrio({ content }: { content: SiteContent["cards"] }) {
  return (
    <FluidSection id={content.id} rows={[53, 21]} pad={6.6} minH={66}>
      <Block m="1/2/3/10" d="1/2/3/10" z={[7, 2]} align="center">
        <h2 className="t-h2">
          <RichText text={content.heading} />
        </h2>
      </Block>
      {content.items.slice(0, 3).map((item, i) => {
        const col = COLUMNS[i];
        const r = MOBILE_STEP * i;
        return (
          <Fragment key={item.title}>
            <Block m={`${4 + r}/2/${13 + r}/10`} d={`4/${col}/15/${col + 7}`} z={[8 + i, 1 + i]}>
              <FluidImage img={item.image} sizes="(min-width: 768px) 26vw, 90vw" />
            </Block>
            <Block m={`${14 + r}/2/${20 + r}/10`} d={`16/${col}/${i === 0 ? 21 : 22}/${col + 7}`} z={[11 + i, 5 + i]}>
              <div className="rte">
                <h3 className="t-h4">{item.href ? <Link href={item.href}>{item.title}</Link> : item.title}</h3>
                <p>
                  <RichText text={item.body} />
                </p>
              </div>
            </Block>
          </Fragment>
        );
      })}
    </FluidSection>
  );
}
