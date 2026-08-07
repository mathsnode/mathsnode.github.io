import type { CurriculumItem } from './index';

export const foundationsCurriculum: CurriculumItem[] = [
  {
    id: 'foundation-language',
    course: 'Foundations',
    area: 'Reasoning',
    title: 'Mathematical language and logic',
    description: 'Use precise definitions, statements, equality and proof to build the grammar of mathematics.',
    sourceDocument: 'MathsNode Foundations',
    lessonIds: ['foundations-1'],
    practiceSetIds: ['practice-foundations-1'],
    prerequisiteIds: [],
    status: 'covered'
  },
  {
    id: 'foundation-natural-numbers',
    course: 'Foundations',
    area: 'Number',
    title: 'Natural numbers and successor',
    description: 'Build the counting system from zero, succession and recursive structure.',
    sourceDocument: 'MathsNode Foundations',
    lessonIds: ['foundations-2'],
    practiceSetIds: ['practice-foundations-2'],
    prerequisiteIds: ['foundation-language'],
    status: 'covered'
  },
  {
    id: 'foundation-operations',
    course: 'Foundations',
    area: 'Operations',
    title: 'Addition and multiplication from first principles',
    description: 'Define addition and multiplication recursively and connect them to arithmetic properties.',
    sourceDocument: 'MathsNode Foundations',
    lessonIds: ['foundations-3'],
    practiceSetIds: ['practice-foundations-3'],
    prerequisiteIds: ['foundation-natural-numbers'],
    status: 'covered'
  },
  {
    id: 'foundation-fractions',
    course: 'Foundations',
    area: 'Number',
    title: 'Fractions, decimals and percentages',
    description: 'Treat fractions, decimals and percentages as linked representations of quantity.',
    sourceDocument: 'MathsNode Foundations',
    lessonIds: ['foundations-4'],
    practiceSetIds: ['practice-foundations-4'],
    prerequisiteIds: ['foundation-operations'],
    status: 'covered'
  },
  {
    id: 'foundation-algebra',
    course: 'Foundations',
    area: 'Algebra',
    title: 'Variables, expressions and equations',
    description: 'Move from arithmetic to general relationships using variables and equations.',
    sourceDocument: 'MathsNode Foundations',
    lessonIds: ['foundations-5'],
    practiceSetIds: ['practice-foundations-5'],
    prerequisiteIds: ['foundation-fractions'],
    status: 'covered'
  },
  {
    id: 'foundation-functions',
    course: 'Foundations',
    area: 'Functions',
    title: 'Coordinates, graphs and functions',
    description: 'Interpret relationships through coordinates, graphs and functions.',
    sourceDocument: 'MathsNode Foundations',
    lessonIds: ['foundations-6'],
    practiceSetIds: ['practice-foundations-6'],
    prerequisiteIds: ['foundation-algebra'],
    status: 'covered'
  }
];
