import Image from "next/image";
import type { SiteContent } from "@/content/types";
import { Block, FluidSection } from "@/components/ui/Fluid";
import { RichText } from "@/components/ui/RichText";

export function QuoteBanner({ content }: { content: SiteContent["quote"] }) {
  return (
    <FluidSection
      rows={[2, 10]}
      tone="dark"
      pad={6.6}
      minH={66}
      background={
        <div className="absolute inset-0">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="100vw"
            className="object-cover"
            style={content.image.position ? { objectPosition: content.image.position } : undefined}
          />
          <div className="bg-overlay absolute inset-0" />
        </div>
      }
    >
      <Block m="1/2/3/10" d="5/3/11/19" z={[1, 1]}>
        <p className="t-h2 text-on-dark">
          <RichText text={content.text} />
        </p>
      </Block>
    </FluidSection>
  );
}
