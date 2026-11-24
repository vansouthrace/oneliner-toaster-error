import fs from 'node:fs';
const ENTRY = "ERROR 404: Bread not found. Please insert something that believes in itself.";
fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', ENTRY, 'utf8');
