import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const parts = Array.from({ length: 6 }, (_, index) =>
  join(
    process.cwd(),
    "assets",
    "walkthrough",
    `part-${String(index).padStart(2, "0")}.txt`,
  ),
);

const encoded = (
  await Promise.all(parts.map((part) => readFile(part, "utf8")))
).join("");

const output = join(
  process.cwd(),
  "public",
  "projects",
  "students-registration",
  "walkthrough.webp",
);

await mkdir(dirname(output), { recursive: true });
await writeFile(output, Buffer.from(encoded, "base64"));

console.log(
  `Prepared Students Registration walkthrough (${encoded.length} base64 chars).`,
);
