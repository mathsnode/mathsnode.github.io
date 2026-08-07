import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const contentDir = path.join(repoRoot, 'src/content');
const entries = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && entry.name.endsWith('.mdx')) entries.push(full);
  }
}

walk(contentDir);
if (entries.length === 0) {
  console.error('Content validation failed: no MDX files found');
  process.exit(1);
}

console.log(`Content validation passed with ${entries.length} MDX file(s)`);
