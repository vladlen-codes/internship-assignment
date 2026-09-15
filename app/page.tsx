import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { maya } from "@/content/maya";

const { title, description } = maya.meta;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: "Dr. Maya Reynolds, PsyD", locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Home() {
  return (
    <div data-theme="maya">
      <HomePage content={maya} />
    </div>
  );
}
