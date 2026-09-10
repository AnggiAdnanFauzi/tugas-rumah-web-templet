import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatesPath = path.join(__dirname, '../src/data/templates.js');
let content = fs.readFileSync(templatesPath, 'utf8');

// Regex to find slug and image
// It looks like:
// slug: "blossom-aesthetic",
// ...
// image: "https://...",
const slugRegex = /slug:\s*"([^"]+)",[\s\S]*?image:\s*"[^"]+",/g;

content = content.replace(slugRegex, (match, slug) => {
  return match.replace(/image:\s*"[^"]+",/, `image: "/images/templates/${slug}.jpg",`);
});

fs.writeFileSync(templatesPath, content, 'utf8');
console.log('templates.js updated with local images.');
