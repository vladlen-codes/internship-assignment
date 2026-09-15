import { chromium, expect } from "@playwright/test";

const url = process.argv[2] ?? "http://localhost:3000/clone";
const folderLabel = process.argv[3] ?? "Our Team";

async function run() {
  const browser = await chromium.launch();
  const results: string[] = [];
  const check = async (name: string, fn: () => Promise<void>) => {
    try {
      await fn();
      results.push(`✓ ${name}`);
    } catch (e) {
      results.push(`✗ ${name}: ${(e as Error).message.split("\n")[0]}`);
    }
  };

  const desk = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desk.goto(url, { waitUntil: "networkidle" });
  const folderBtn = desk.getByRole("navigation", { name: "Main" }).getByRole("button", { name: folderLabel });
  await check("desktop: dropdown opens on hover", async () => {
    await folderBtn.hover();
    await expect(folderBtn.locator("xpath=following-sibling::ul")).toBeVisible();
  });
  await check("desktop: dropdown toggles on click + aria-expanded", async () => {
    await folderBtn.click();
    await expect(folderBtn).toHaveAttribute("aria-expanded", "true");
    await desk.keyboard.press("Escape");
    await expect(folderBtn).toHaveAttribute("aria-expanded", "false");
  });
  await check("desktop: no horizontal overflow", async () => {
    const overflow = await desk.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    expect(overflow).toBe(false);
  });
  await check("desktop: burger hidden", async () => {
    await expect(desk.getByRole("button", { name: "Open menu" })).toBeHidden();
  });

  const mob = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await mob.goto(url, { waitUntil: "networkidle" });
  const burger = mob.getByRole("button", { name: "Open menu" });
  const dialog = mob.getByRole("dialog", { name: "Menu" });
  await check("mobile: menu opens, close button focused", async () => {
    await burger.click();
    await expect(dialog).toBeVisible();
    await expect(mob.getByRole("button", { name: "Close menu" })).toBeFocused();
  });
  await check("mobile: page behind menu is inert and scroll-locked", async () => {
    expect(await mob.evaluate(() => document.getElementById("page-content")?.hasAttribute("inert"))).toBe(true);
    expect(await mob.evaluate(() => document.documentElement.style.overflow)).toBe("hidden");
  });
  await check("mobile: folder opens and Back returns", async () => {
    await dialog.getByRole("button", { name: folderLabel }).click();
    await expect(dialog.getByRole("button", { name: /Back/ })).toBeVisible();
    await expect(dialog.getByRole("navigation").getByRole("link").first()).toBeVisible();
    await dialog.getByRole("button", { name: /Back/ }).click();
    await expect(dialog.getByRole("button", { name: folderLabel })).toBeVisible();
  });
  await check("mobile: Esc closes and focus returns to burger", async () => {
    await mob.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(burger).toBeFocused();
  });
  await check("mobile: no horizontal overflow at 320px", async () => {
    await mob.setViewportSize({ width: 320, height: 700 });
    const overflow = await mob.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    expect(overflow).toBe(false);
  });
  await check("skip link is the first focusable element", async () => {
    await mob.reload({ waitUntil: "networkidle" });
    await mob.keyboard.press("Tab");
    await expect(mob.getByRole("link", { name: "Skip to content" })).toBeFocused();
  });

  console.log(results.join("\n"));
  await browser.close();
  if (results.some((r) => r.startsWith("✗"))) process.exit(1);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
