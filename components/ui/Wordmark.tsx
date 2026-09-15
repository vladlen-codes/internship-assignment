import clsx from "clsx";
import type { SiteContent } from "@/content/types";

export function Wordmark({ brand, large }: { brand: SiteContent["brand"]; large?: boolean }) {
  return (
    <span className={clsx("wordmark", large && "wordmark--lg")}>
      <span className="wordmark-name">{brand.name}</span>
      {brand.tagline && <span className="wordmark-tagline">{brand.tagline}</span>}
    </span>
  );
}
