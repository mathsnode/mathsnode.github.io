import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const outputPath = path.join(repoRoot, 'public', 'search-index.json');

const data = [
  {
    id: 'lesson-foundations-1',
    title: 'Mathematical language and logic',
    type: 'lesson',
    text: 'Foundations lesson about mathematical language, definitions, statements and equality.',
    url: '/foundations/mathematical-language-and-logic'
  },
  {
    id: 'lesson-n4-1',
    title: 'Numerical skills and calculations',
    type: 'lesson',
    text: 'National 4 lesson on arithmetic, decimals, percentages and estimation.',
    url: '/national-4/numerical-skills'
  },
  {
    id: 'lesson-n5-1',
    title: 'Algebraic manipulation',
    type: 'lesson',
    text: 'National 5 lesson on algebraic manipulation, expansion and factorising.',
    url: '/national-5/algebraic-manipulation'
  },
  {
    id: 'lesson-higher-1',
    title: 'Differentiation from first principles',
    type: 'lesson',
    text: 'Higher calculus lesson introducing the derivative from the difference quotient.',
    url: '/higher/differentiation-from-first-principles'
  }
];

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
console.log('Search index generated');
