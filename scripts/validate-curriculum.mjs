import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const curriculumFiles = [
  'src/curriculum/foundations.ts',
  'src/curriculum/national4.ts',
  'src/curriculum/national5.ts',
  'src/curriculum/higher.ts'
];
const contentFile = 'src/lib/content.ts';

const curriculumText = curriculumFiles.map((file) => fs.readFileSync(path.join(repoRoot, file), 'utf8')).join('\n');
const contentText = fs.readFileSync(path.join(repoRoot, contentFile), 'utf8');
const issues = [];

const lessonIds = [...contentText.matchAll(/id: '([^']+)'/g)].map((match) => match[1]);
const practiceIds = [...contentText.matchAll(/id: '([^']+)'/g)].map((match) => match[1]);
const lessonRefs = [...curriculumText.matchAll(/lessonIds: \[(.*?)\]/g)].flatMap((match) => match[1].match(/'([^']+)'/g) || []).map((value) => value.slice(1, -1));
const practiceRefs = [...curriculumText.matchAll(/practiceSetIds: \[(.*?)\]/g)].flatMap((match) => match[1].match(/'([^']+)'/g) || []).map((value) => value.slice(1, -1));
const courseRefs = [...curriculumText.matchAll(/course: '([^']+)'/g)].map((match) => match[1]);
const ids = [...curriculumText.matchAll(/id: '([^']+)'/g)].map((match) => match[1]);

if (!courseRefs.includes('National 4')) issues.push('National 4 curriculum entry missing');
if (!courseRefs.includes('National 5')) issues.push('National 5 curriculum entry missing');
if (!courseRefs.includes('Higher')) issues.push('Higher curriculum entry missing');
if (!curriculumText.includes("course: 'National 4'")) issues.push('National 4 course tag missing');
if (!curriculumText.includes("course: 'National 5'")) issues.push('National 5 course tag missing');
if (!curriculumText.includes("course: 'Higher'")) issues.push('Higher course tag missing');

for (const ref of lessonRefs) {
  if (!lessonIds.includes(ref)) issues.push(`Missing lesson mapping for ${ref}`);
}
for (const ref of practiceRefs) {
  if (!practiceIds.includes(ref)) issues.push(`Missing practice mapping for ${ref}`);
}

const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicateIds.length) issues.push(`Duplicate curriculum ids: ${[...new Set(duplicateIds)].join(', ')}`);

if (issues.length) {
  console.error('Curriculum validation failed:');
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log('Curriculum validation passed');
