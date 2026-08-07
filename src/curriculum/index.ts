export interface CurriculumItem {
  id: string;
  course: 'Foundations' | 'National 4' | 'National 5' | 'Higher';
  area: string;
  title: string;
  description: string;
  sourceDocument: string;
  sourcePage?: number;
  lessonIds: string[];
  practiceSetIds: string[];
  prerequisiteIds: string[];
  status: 'needs-content' | 'in-progress' | 'covered';
}

import { foundationsCurriculum } from './foundations';
import { national4Curriculum } from './national4';
import { national5Curriculum } from './national5';
import { higherCurriculum } from './higher';

export { foundationsCurriculum } from './foundations';
export { national4Curriculum } from './national4';
export { national5Curriculum } from './national5';
export { higherCurriculum } from './higher';

export const curriculumIndex: CurriculumItem[] = [
  ...foundationsCurriculum,
  ...national4Curriculum,
  ...national5Curriculum,
  ...higherCurriculum
];
