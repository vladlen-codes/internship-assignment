import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const url = process.argv[2] ?? "https://www.conejovalleycounseling.com/home";
const outDir = process.argv[3] ?? "qa/original";
const widths = [1440, 768, 375];

const pick = (el: Element) => {
  const cs = getComputedStyle(el);
  return {
    fontFamily: cs.fontFamily,
    fontSize: cs.fontSize,
    fontWeight: cs.fontWeight,
    fontStyle: cs.fontStyle,
    lineHeight: cs.lineHeight,
    letterSpacing: cs.letterSpacing,
    textTransform: cs.textTransform,
    color: cs.color,
    backgroundColor: cs.backgroundColor,
    padding: cs.padding,
    margin: cs.margin,
    borderRadius: cs.borderRadius,
    border: cs.border,
    textAlign: cs.textAlign,
  };
};

async function run() {
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();
  const result: Record<number, unknown> = {};
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.addInitScript("window.__name = (f) => f");
    await page.goto(url, { waitUntil: "networkidle" });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 400) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1200);
    await page.screenshot({ path: `${outDir}/${width}.png`, fullPage: true });

    result[width] = await page.evaluate(
      ({ pickSrc }) => {
        const pick = new Function(`return (${pickSrc})`)() as (el: Element) => Record<string, string>;
        const root = getComputedStyle(document.documentElement);
        const vars = Object.fromEntries(
          [
            "--sqs-site-max-width",
            "--sqs-site-gutter",
            "--sqs-mobile-site-gutter",
            "--white-hsl",
            "--black-hsl",
            "--accent-hsl",
            "--lightAccent-hsl",
            "--darkAccent-hsl",
            "--heading-font-font-family",
            "--body-font-font-family",
          ].map((v) => [v, root.getPropertyValue(v).trim()]),
        );
        const rect = (el: Element) => {
          const r = el.getBoundingClientRect();
          return { x: Math.round(r.x), y: Math.round(r.y + scrollY), w: Math.round(r.width), h: Math.round(r.height) };
        };
        const header = document.querySelector("header");
        const sections = [...document.querySelectorAll("section.page-section")].map((sec, i) => {
          const content = sec.querySelector(".content-wrapper, .fluid-engine");
          const blocks = [...sec.querySelectorAll(".fe-block")].map((b) => {
            const txt = b.querySelector("h1,h2,h3,h4,p,a");
            return {
              kind: [...(b.querySelector(".sqs-block")?.classList ?? [])].find((c) => c.endsWith("-block") && c !== "sqs-block"),
              rect: rect(b),
              text: (b.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 60),
              firstText: txt ? { tag: txt.tagName, ...pick(txt) } : undefined,
            };
          });
          return {
            i,
            theme: sec.getAttribute("data-section-theme"),
            rect: rect(sec),
            bg: getComputedStyle(sec.querySelector(".section-background") ?? sec).backgroundColor,
            contentPadding: content ? getComputedStyle(content).padding : null,
            contentRect: content ? rect(content) : null,
            blocks,
          };
        });
        const typo = Object.fromEntries(
          [
            "h1",
            "h2",
            "h3",
            "h4",
            "p",
            ".sqs-block-button-element",
            ".header-nav-item a",
            ".header-title-logo img",
            "footer p",
            "footer h3",
            "footer h4",
          ].map((sel) => {
            const el = document.querySelector(sel);
            return [sel, el ? { ...pick(el), rect: rect(el), text: (el.textContent ?? "").trim().slice(0, 40) } : null];
          }),
        );
        return {
          vars,
          docHeight: document.body.scrollHeight,
          header: header ? { rect: rect(header), ...pick(header) } : null,
          typo,
          sections,
        };
      },
      { pickSrc: pick.toString() },
    );
    await page.close();
    console.log(`captured ${width}px`);
  }
  await writeFile(`${outDir}/measurements.json`, JSON.stringify(result, null, 2));
  await browser.close();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
