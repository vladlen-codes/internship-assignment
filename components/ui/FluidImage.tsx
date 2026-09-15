import Image from "next/image";
import clsx from "clsx";
import type { Img } from "@/content/types";

type Props = {
  img: Img;
  sizes: string;
  eager?: boolean;
  className?: string;
};

export function FluidImage({ img, sizes, eager, className }: Props) {
  return (
    <div className={clsx("relative min-h-0 flex-1 overflow-hidden", className)}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        className="object-cover"
        style={img.position ? { objectPosition: img.position } : undefined}
      />
    </div>
  );
}
