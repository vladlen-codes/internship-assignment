import type { SiteContent } from "@/content/types";
import { Block, FluidSection } from "@/components/ui/Fluid";
import { FluidImage } from "@/components/ui/FluidImage";
import { RichText } from "@/components/ui/RichText";

export function StatementBanner({ content }: { content: SiteContent["statement"] }) {
  return (
    <FluidSection rows={[13, 14]} pad={6.6} minH={66}>
      <Block m="1/2/10/11" d="1/1/15/15" z={[1, 1]}>
        <FluidImage img={content.image} sizes="(min-width: 768px) 55vw, 95vw" />
      </Block>
      <Block m="10/2/14/10" d="9/16/15/26" z={[2, 2]}>
        <p className="t-h2">
          <RichText text={content.text} />
        </p>
      </Block>
    </FluidSection>
  );
}
