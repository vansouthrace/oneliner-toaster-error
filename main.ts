import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Toaster Error Message: the toaster gives up, politely.
const entry =
  "E01: Bagel jammed. I tried nothing and I'm out of ideas. Unplug me and tell no one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(entry);
