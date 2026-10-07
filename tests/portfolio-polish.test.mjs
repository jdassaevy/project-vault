import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const read = (path) => readFileSync(path, "utf8");

test("home exposes a recruiter-friendly contact path", () => {
  const home = read("components/portfolio-home.tsx");

  assert.match(home, /id="contact"/);
  assert.match(home, /https:\/\/www\.linkedin\.com\/in\/juliodassaevy/);
  assert.match(home, /mailto:dassaevyj@gmail\.com/);
  assert.match(home, />\s*CONTACT\s*</);
});

test("profile presents concrete capabilities instead of self-scored percentages", () => {
  const home = read("components/portfolio-home.tsx");

  assert.doesNotMatch(home, /CAPABILITY MATRIX/);
  assert.doesNotMatch(home, /level="(?:90|84|86|88)"/);
  assert.match(home, /CORE CAPABILITIES/);
  assert.match(home, /Automation & Integrations/);
});

test("root metadata has a canonical production origin", () => {
  const layout = read("app/layout.tsx");

  assert.match(layout, /metadataBase:\s*new URL\("https:\/\/project-vault-rho\.vercel\.app"\)/);
  assert.match(layout, /alternates:\s*\{\s*canonical:\s*"\/"/s);
});

test("project pages generate project-specific metadata", () => {
  const page = read("app/projects/[slug]/page.tsx");

  assert.match(page, /export async function generateMetadata/);
  assert.match(page, /openGraph/);
  assert.match(page, /project\.title/);
});

test("portfolio exposes sitemap and robots metadata routes", () => {
  assert.equal(existsSync("app/sitemap.ts"), true, "app/sitemap.ts should exist");
  assert.equal(existsSync("app/robots.ts"), true, "app/robots.ts should exist");

  if (existsSync("app/sitemap.ts")) {
    assert.match(read("app/sitemap.ts"), /students-registration/);
  }

  if (existsSync("app/robots.ts")) {
    assert.match(read("app/robots.ts"), /sitemap/);
  }
});
