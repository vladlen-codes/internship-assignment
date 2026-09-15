"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import type { SiteContent } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";

type Props = Pick<SiteContent, "brand" | "nav" | "navCta">;

function Brand({ brand, onClick }: { brand: SiteContent["brand"]; onClick?: () => void }) {
  return (
    <Link href={brand.href} onClick={onClick} className="block shrink-0">
      {brand.logo ? (
        <Image
          src={brand.logo.src}
          alt={brand.logo.alt}
          width={brand.logo.width}
          height={brand.logo.height}
          loading="eager"
          className="header-logo"
        />
      ) : (
        <span className="header-logo flex items-center">
          <Wordmark brand={brand} />
        </span>
      )}
    </Link>
  );
}

export function Header({ brand, nav, navCta }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuFolder, setMenuFolder] = useState<string | null>(null);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setMenuFolder(null);
  };

  const openFolder = (label: string | null) => {
    setMenuFolder(label);
    requestAnimationFrame(() => mobileNavRef.current?.querySelector<HTMLElement>("a, button")?.focus());
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const page = document.getElementById("page-content");
    const burger = burgerRef.current;
    const desktop = window.matchMedia("(min-width: 960px)");
    const close = () => {
      setMenuOpen(false);
      setMenuFolder(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const onChange = () => desktop.matches && close();

    page?.setAttribute("inert", "");
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onChange);
    return () => {
      page?.removeAttribute("inert");
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onChange);
      burger?.focus();
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!dropdown) return;
    const onDown = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setDropdown(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDropdown(null);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [dropdown]);

  const folder = nav.find((item) => item.label === menuFolder);

  return (
    <header className="site-header-wrap bg-bg-soft" data-scrolled={scrolled || undefined}>
      <div className="site-header flex items-center justify-between" inert={menuOpen}>
        <Brand brand={brand} />

        <nav ref={navRef} aria-label="Main" className="nav:flex hidden items-center">
          <ul className="flex items-center">
            {nav.map((item) => (
              <li key={item.label} className="nav-item relative ml-[2.5vw] first:ml-0">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="t-nav nav-link"
                      aria-expanded={dropdown === item.label}
                      onClick={() => setDropdown((d) => (d === item.label ? null : item.label))}
                    >
                      {item.label}
                      <ChevronDown aria-hidden strokeWidth={1.5} className="nav-chevron" />
                    </button>
                    <ul className={clsx("nav-dropdown t-nav", dropdown === item.label && "is-open")}>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link href={child.href} className="nav-dropdown-link" onClick={() => setDropdown(null)}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={item.href} className="t-nav nav-link">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Button href={navCta.href} variant="secondary" className="ml-[2.5vw]">
            {navCta.label}
          </Button>
        </nav>

        <button
          ref={burgerRef}
          type="button"
          className="burger nav:hidden -mr-[6px]"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
        >
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
      </div>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!menuOpen}
        className="bg-bg-soft nav:hidden fixed inset-0 z-50 flex flex-col overflow-y-auto"
      >
        <div className="site-header flex items-center justify-between">
          <Brand brand={brand} onClick={closeMenu} />
          <button ref={closeRef} type="button" className="burger is-open -mr-[6px]" aria-label="Close menu" onClick={closeMenu}>
            <span className="burger-line" />
            <span className="burger-line" />
          </button>
        </div>

        <nav ref={mobileNavRef} aria-label="Mobile" className={clsx("flex flex-1 flex-col px-[10vw]", !folder && "justify-center")}>
          {folder?.children ? (
            <>
              <button type="button" className="mobile-link text-ink-muted" onClick={() => openFolder(null)}>
                <ChevronLeft aria-hidden strokeWidth={1} className="mobile-chevron" />
                Back
              </button>
              <ul>
                {folder.children.map((child) => (
                  <li key={child.label}>
                    <Link href={child.href} className="mobile-link" onClick={closeMenu}>
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <ul>
              {nav.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <button type="button" className="mobile-link" onClick={() => openFolder(item.label)}>
                      {item.label}
                      <ChevronRight aria-hidden strokeWidth={1} className="mobile-chevron" />
                    </button>
                  ) : (
                    <Link href={item.href} className="mobile-link" onClick={closeMenu}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </nav>

        <div className="px-[6vw] pt-[15px] pb-[6vw]">
          <Button href={navCta.href} variant="secondary" className="min-w-[56vw] text-center" onClick={closeMenu}>
            {navCta.label}
          </Button>
        </div>
      </div>
    </header>
  );
}
