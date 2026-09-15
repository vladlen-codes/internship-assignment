import { chromium } from "playwright";
import { mkdir, readFile, writeFile } from "node:fs/promises";

const url = process.argv[2] ?? "http://localhost:3000/clone";
const outDir = process.argv[3] ?? "qa/clone";
const widths = [1440, 768, 375];

type Rect = { y: number; h: number };

async function run() {
  await mkdir(outDir, { recursive: true });
  const original = JSON.parse(await readFile("qa/original/measurements.json", "utf8")) as Record<
    string,
    { header: { rect: Rect }; docHeight: number; sections: { rect: Rect; theme: string }[] }
  >;
  const browser = await chromium.launch();
  const report: Record<number, unknown> = {};

  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.addInitScript("window.__name = (f) => f");
    await page.goto(url, { waitUntil: "networkidle" });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 400) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 80));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(800);
    await page.screenshot({ path: `${outDir}/${width}.png`, fullPage: true });

    const ours = await page.evaluate(() => {
      const rect = (el: Element) => {
        const r = el.getBoundingClientRect();
        return { y: Math.round(r.y + scrollY), h: Math.round(r.height) };
      };
      return {
        header: rect(document.querySelector("header")!),
        sections: [...document.querySelectorAll("section")].map(rect),
        docHeight: document.documentElement.scrollHeight,
        overflowX: document.documentElement.scrollWidth > window.innerWidth,
      };
    });

    const orig = original[width];
    const rows = [
      { name: "header", orig: orig.header.rect.h, ours: ours.header.h },
      ...orig.sections.map((s, i) => ({ name: `S${i} ${s.theme}`, orig: s.rect.h, ours: ours.sections[i]?.h ?? NaN })),
      { name: "document", orig: orig.docHeight, ours: ours.docHeight },
    ].map((r) => ({ ...r, diff: r.ours - r.orig }));

    console.log(`\n${width}px${ours.overflowX ? "  ⚠ horizontal overflow" : ""}`);
    console.table(rows);
    report[width] = { rows, overflowX: ours.overflowX };
    await page.close();
  }

  await writeFile(`${outDir}/report.json`, JSON.stringify(report, null, 2));
  await browser.close();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
