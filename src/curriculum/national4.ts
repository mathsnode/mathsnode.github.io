import type { CurriculumItem } from './index';

export const national4Curriculum: CurriculumItem[] = [
  {
    id: 'n4-numeracy',
    course: 'National 4',
    area: 'Numeracy',
    title: 'Numerical skills and calculations',
    description: 'Carry out calculations using integers, fractions, decimals and percentages in familiar contexts.',
    sourceDocument: 'CfE Course Unit Support Notes (National 4 Mathematics)',
    sourcePage: 15,
    lessonIds: ['n4-1'],
    practiceSetIds: ['practice-n4-1'],
    prerequisiteIds: ['foundation-fractions'],
    status: 'covered'
  },
  {
    id: 'n4-expressions',
    course: 'National 4',
    area: 'Algebra',
    title: 'Expressions and formulae',
    description: 'Simplify expressions and evaluate formulae in practical contexts.',
    sourceDocument: 'CfE Course Unit Support Notes (National 4 Mathematics)',
    sourcePage: 15,
    lessonIds: ['n4-2'],
    practiceSetIds: ['practice-n4-2'],
    prerequisiteIds: ['foundation-algebra'],
    status: 'covered'
  },
  {
    id: 'n4-relationships',
    course: 'National 4',
    area: 'Relationships',
    title: 'Linear relationships',
    description: 'Use tables, graphs and equations to interpret straight-line relationships.',
    sourceDocument: 'CfE Course Unit Support Notes (National 4 Mathematics)',
    sourcePage: 15,
    lessonIds: ['n4-3'],
    practiceSetIds: ['practice-n4-3'],
    prerequisiteIds: ['foundation-functions'],
    status: 'covered'
  },
  {
    id: 'n4-geometry',
    course: 'National 4',
    area: 'Geometry',
    title: 'Geometry and measures',
    description: 'Reason about perimeter, area, volume and angle in practical settings.',
    sourceDocument: 'CfE Course Unit Support Notes (National 4 Mathematics)',
    sourcePage: 15,
    lessonIds: ['n4-4'],
    practiceSetIds: ['practice-n4-4'],
    prerequisiteIds: ['foundation-language'],
    status: 'covered'
  },
  {
    id: 'n4-statistics',
    course: 'National 4',
    area: 'Statistics',
    title: 'Statistics and data handling',
    description: 'Collect, present and interpret data with suitable methods and reasoning.',
    sourceDocument: 'CfE Course Unit Support Notes (National 4 Mathematics)',
    sourcePage: 15,
    lessonIds: ['n4-5'],
    practiceSetIds: ['practice-n4-5'],
    prerequisiteIds: ['n4-numeracy'],
    status: 'covered'
  }
];
