import type { SiteContent } from "@/content/types";
import { Block, FluidSection } from "@/components/ui/Fluid";
import { RichText } from "@/components/ui/RichText";

export function Faq({ content }: { content: NonNullable<SiteContent["faq"]> }) {
  return (
    <FluidSection id={content.id} rows={[20, 12]} pad={6.6} aria-labelledby="faq-title">
      <Block m="1/2/3/10" d="1/3/5/10" align={["center", "start"]}>
        <h2 id="faq-title" className="t-h3">
          <RichText text={content.heading} />
        </h2>
      </Block>
      <Block m="4/2/21/10" d="1/11/13/26">
        <div className="faq-list">
          {content.items.map((item, i) => (
            <details key={item.q} className="faq-item" open={i === 0}>
              <summary className="faq-summary">
                <h3 className="t-h4">{item.q}</h3>
                <span aria-hidden className="faq-icon" />
              </summary>
              <div className="faq-answer">
                <p>
                  <RichText text={item.a} />
                </p>
              </div>
            </details>
          ))}
        </div>
      </Block>
    </FluidSection>
  );
}
