import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { clone } from "@/content/clone";

export const metadata: Metadata = {
  title: clone.meta.title,
  description: clone.meta.description,
  robots: { index: false, follow: false },
};

export default function ClonePage() {
  return (
    <div data-theme="clone">
      <HomePage content={clone} />
    </div>
  );
}
