import type { Metadata } from "next";
import { Babylonica, Mulish, Spectral } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const heading = Spectral({
  variable: "--font-heading-face",
  subsets: ["latin"],
  weight: "200",
  style: ["normal", "italic"],
  display: "swap",
});

const body = Mulish({
  variable: "--font-body-face",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const script = Babylonica({
  variable: "--font-script-face",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dr. Maya Reynolds, PsyD",
  description: "Licensed clinical psychologist in Santa Monica, CA.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
