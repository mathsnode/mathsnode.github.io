import type { CurriculumItem } from './index';

export const national5Curriculum: CurriculumItem[] = [
  {
    id: 'n5-algebra',
    course: 'National 5',
    area: 'Algebra',
    title: 'Algebraic manipulation',
    description: 'Simplify, expand, factorise and solve algebraic expressions and equations.',
    sourceDocument: 'National 5 Mathematics Course Specification',
    sourcePage: 3,
    lessonIds: ['n5-1'],
    practiceSetIds: ['practice-n5-1'],
    prerequisiteIds: ['foundation-algebra'],
    status: 'covered'
  },
  {
    id: 'n5-equations',
    course: 'National 5',
    area: 'Equations',
    title: 'Equations and inequalities',
    description: 'Solve linear equations and reason clearly about inequalities.',
    sourceDocument: 'National 5 Mathematics Course Specification',
    sourcePage: 3,
    lessonIds: ['n5-2'],
    practiceSetIds: ['practice-n5-2'],
    prerequisiteIds: ['n5-algebra'],
    status: 'covered'
  },
  {
    id: 'n5-straight-line',
    course: 'National 5',
    area: 'Graphs',
    title: 'Straight-line graphs',
    description: 'Use gradient, intercept and equations of lines in familiar and practical contexts.',
    sourceDocument: 'National 5 Mathematics Course Specification',
    sourcePage: 3,
    lessonIds: ['n5-3'],
    practiceSetIds: ['practice-n5-3'],
    prerequisiteIds: ['n4-relationships'],
    status: 'covered'
  },
  {
    id: 'n5-quadratics',
    course: 'National 5',
    area: 'Algebra',
    title: 'Quadratics and factorising',
    description: 'Factorise quadratics and solve equations graphically and algebraically.',
    sourceDocument: 'National 5 Mathematics Course Specification',
    sourcePage: 3,
    lessonIds: ['n5-4'],
    practiceSetIds: ['practice-n5-4'],
    prerequisiteIds: ['n5-equations'],
    status: 'covered'
  },
  {
    id: 'n5-trigonometry',
    course: 'National 5',
    area: 'Trigonometry',
    title: 'Trigonometry and geometry',
    description: 'Use trigonometric ratios and angle reasoning to solve geometric problems.',
    sourceDocument: 'National 5 Mathematics Course Specification',
    sourcePage: 3,
    lessonIds: ['n5-5'],
    practiceSetIds: ['practice-n5-5'],
    prerequisiteIds: ['n4-geometry'],
    status: 'covered'
  },
  {
    id: 'n5-statistics',
    course: 'National 5',
    area: 'Statistics',
    title: 'Statistics and probability',
    description: 'Interpret data and solve elementary probability problems with clear reasoning.',
    sourceDocument: 'National 5 Mathematics Course Specification',
    sourcePage: 3,
    lessonIds: ['n5-6'],
    practiceSetIds: ['practice-n5-6'],
    prerequisiteIds: ['n4-statistics'],
    status: 'covered'
  }
];
