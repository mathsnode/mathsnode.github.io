import type { CurriculumItem } from './index';

export const higherCurriculum: CurriculumItem[] = [
  {
    id: 'higher-differentiation',
    course: 'Higher',
    area: 'Calculus',
    title: 'Differentiation from first principles',
    description: 'Develop the derivative from the gradient of a curve and the difference quotient.',
    sourceDocument: 'Higher Mathematics Course Specification',
    sourcePage: 19,
    lessonIds: ['higher-1'],
    practiceSetIds: ['practice-higher-1'],
    prerequisiteIds: ['n5-algebra'],
    status: 'covered'
  },
  {
    id: 'higher-power-rule',
    course: 'Higher',
    area: 'Calculus',
    title: 'Power rule and applications',
    description: 'Apply the derivative rule efficiently and interpret graph behaviour.',
    sourceDocument: 'Higher Mathematics Course Specification',
    sourcePage: 19,
    lessonIds: ['higher-2'],
    practiceSetIds: ['practice-higher-2'],
    prerequisiteIds: ['higher-differentiation'],
    status: 'covered'
  },
  {
    id: 'higher-integration',
    course: 'Higher',
    area: 'Calculus',
    title: 'Integration and area',
    description: 'Connect integration to accumulation and the calculation of area.',
    sourceDocument: 'Higher Mathematics Course Specification',
    sourcePage: 19,
    lessonIds: ['higher-3'],
    practiceSetIds: ['practice-higher-3'],
    prerequisiteIds: ['higher-power-rule'],
    status: 'covered'
  },
  {
    id: 'higher-logarithms',
    course: 'Higher',
    area: 'Functions',
    title: 'Exponential and logarithmic functions',
    description: 'Interpret growth, decay and the inverse relationship between exponentials and logarithms.',
    sourceDocument: 'Higher Mathematics Course Specification',
    sourcePage: 19,
    lessonIds: ['higher-4'],
    practiceSetIds: ['practice-higher-4'],
    prerequisiteIds: ['n5-quadratics'],
    status: 'covered'
  },
  {
    id: 'higher-trig',
    course: 'Higher',
    area: 'Trigonometry',
    title: 'Trigonometric functions and calculus',
    description: 'Use identities and calculus with trigonometric functions carefully and accurately.',
    sourceDocument: 'Higher Mathematics Course Specification',
    sourcePage: 19,
    lessonIds: ['higher-5'],
    practiceSetIds: ['practice-higher-5'],
    prerequisiteIds: ['n5-trigonometry'],
    status: 'covered'
  },
  {
    id: 'higher-sequences',
    course: 'Higher',
    area: 'Algebra',
    title: 'Algebra and sequences',
    description: 'Reason about algebraic structure and general terms in sequences.',
    sourceDocument: 'Higher Mathematics Course Specification',
    sourcePage: 19,
    lessonIds: ['higher-6'],
    practiceSetIds: ['practice-higher-6'],
    prerequisiteIds: ['n5-algebra'],
    status: 'covered'
  }
];
