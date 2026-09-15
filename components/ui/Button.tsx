import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export function Button({ href, variant = "primary", className, children, ...rest }: Props) {
  const cls = clsx(variant === "primary" ? "btn-line" : "btn-oval", className);
  const external = /^(https?:|mailto:|tel:)/.test(href);
  if (external) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
