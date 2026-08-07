export interface SearchEntry {
  id: string;
  title: string;
  type: 'lesson' | 'topic' | 'curriculum' | 'practice';
  text: string;
  url: string;
}

export const searchIndex: SearchEntry[] = [
  { id: 'lesson-foundations-1', title: 'Mathematical language and logic', type: 'lesson', text: 'Foundations lesson about definitions, statements, equality and proof.', url: '/foundations/mathematical-language-and-logic' },
  { id: 'lesson-foundations-3', title: 'Addition and multiplication from first principles', type: 'lesson', text: 'Foundations lesson that builds number operations from recursion and successor.', url: '/foundations/addition-and-multiplication' },
  { id: 'lesson-n4-2', title: 'Expressions and formulae', type: 'lesson', text: 'National 4 lesson on simplifying expressions and evaluating formulae.', url: '/national-4/expressions-and-formulae' },
  { id: 'lesson-n5-4', title: 'Quadratics and factorising', type: 'lesson', text: 'National 5 lesson on factorising quadratics and solving quadratic equations.', url: '/national-5/quadratics-and-factorising' },
  { id: 'lesson-higher-1', title: 'Differentiation from first principles', type: 'lesson', text: 'Higher calculus lesson introducing the derivative from the difference quotient.', url: '/higher/differentiation-from-first-principles' },
  { id: 'lesson-higher-3', title: 'Integration and area', type: 'lesson', text: 'Higher lesson connecting integration to accumulation and area under a curve.', url: '/higher/integration-and-area' }
];
