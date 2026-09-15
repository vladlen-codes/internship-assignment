import Link from "next/link";
import { Fragment } from "react";
import clsx from "clsx";
import type { SiteContent } from "@/content/types";
import { Block, FluidSection } from "@/components/ui/Fluid";
import { RichText } from "@/components/ui/RichText";

export function TagCloud({ content }: { content: SiteContent["tags"] }) {
  const { items } = content;
  const perColumn = Math.ceil(items.length / 2);

  return (
    <FluidSection rows={[27, 12]} pad={8} minH={80}>
      <Block m="1/2/3/10" d="1/3/4/9" align={["center", "start"]}>
        <h2 className="t-h3">
          <RichText text={content.heading} />
        </h2>
      </Block>
      {items.map((item, i) => {
        const column = i < perColumn ? 0 : 1;
        const j = i - column * perColumn;
        const colStart = column === 0 ? 10 : 18;
        const dRow = 2 * j + 1;
        const ruleOnDesktop = j < perColumn - 1 && i < items.length - 1;
        const ruleOnMobile = i < items.length - 2;
        return (
          <Fragment key={item.label}>
            <Block m={`${4 + 2 * i}/2/${6 + 2 * i}/10`} d={`${dRow}/${colStart}/${dRow + 2}/${colStart + 8}`} z={[2, 2]}>
              <p className="t-eyebrow">{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</p>
            </Block>
            {(ruleOnDesktop || ruleOnMobile) && (
              <Block
                m={`${5 + 2 * i}/2/${6 + 2 * i}/10`}
                d={`${dRow + 1}/${colStart}/${dRow + 2}/${colStart + 7}`}
                z={[3, 3]}
                align="center"
                className={clsx(!ruleOnDesktop && "md:hidden", !ruleOnMobile && "max-md:hidden")}
              >
                <hr className="rule" />
              </Block>
            )}
          </Fragment>
        );
      })}
    </FluidSection>
  );
}
