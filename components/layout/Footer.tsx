import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import type { Cta, SiteContent } from "@/content/types";
import { Block, FluidSection } from "@/components/ui/Fluid";
import { RichText } from "@/components/ui/RichText";
import { Wordmark } from "@/components/ui/Wordmark";

const COLUMNS = [
  { m: "10/3/15/9", d: "1/12/6/16" },
  { m: "15/3/23/9", d: "1/21/10/26" },
  { m: "23/3/30/9", d: "1/16/10/21" },
];

function Line({ line }: { line: string | Cta }) {
  if (typeof line === "string") return <>{line}</>;
  return /^(mailto:|tel:|https?:)/.test(line.href) ? <a href={line.href}>{line.label}</a> : <Link href={line.href}>{line.label}</Link>;
}

export function Footer({ brand, content }: { brand: SiteContent["brand"]; content: SiteContent["footer"] }) {
  return (
    <footer>
      <FluidSection rows={[29, 9]} pad={4.5} minH={45}>
        <Block m="2/2/5/10" d="1/2/5/9" z={[6, 6]} align={["center", "start"]}>
          <Link href={brand.href} className="block">
            {brand.logo ? (
              <Image
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={brand.logo.width}
                height={brand.logo.height}
                className="h-auto w-full max-w-[323px]"
              />
            ) : (
              <Wordmark brand={brand} large />
            )}
          </Link>
        </Block>
        <Block m="5/2/10/10" d="4/2/9/10" z={[5, 5]}>
          <p>
            <RichText text={content.blurb} />
          </p>
        </Block>
        {content.columns.slice(0, 3).map((column, i) => (
          <Block key={column.title} m={COLUMNS[i].m} d={COLUMNS[i].d} z={[2, 2]} align={["center", "start"]}>
            <div className="rte">
              <h2 className="t-eyebrow">{column.title}</h2>
              <p className="t-small">
                {column.lines.map((line, j) => (
                  <Fragment key={j}>
                    {j > 0 && <br />}
                    <Line line={line} />
                  </Fragment>
                ))}
              </p>
              {column.note && (
                <p className="t-small">
                  <RichText text={column.note} />
                </p>
              )}
            </div>
          </Block>
        ))}
      </FluidSection>

      <FluidSection rows={[2, 1]} tone="legal" pad={0.5} minH={5}>
        <Block m="1/2/3/10" d="1/2/2/26" align={["start", "center"]}>
          <p className="t-small text-on-legal">
            {content.legal.map((link, i) => (
              <Fragment key={link.label}>
                {i > 0 && " | "}
                <Link href={link.href}>{link.label}</Link>
              </Fragment>
            ))}
            {content.credit && (
              <>
                {" | "}
                <Link href={content.credit.href}>{content.credit.label}</Link>
              </>
            )}
            {content.crossLink && (
              <>
                {" | "}
                <Link href={content.crossLink.href}>{content.crossLink.label}</Link>
              </>
            )}
          </p>
        </Block>
      </FluidSection>
    </footer>
  );
}
