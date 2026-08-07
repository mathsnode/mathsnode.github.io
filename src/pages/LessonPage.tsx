import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getLessonBySlug } from '../lib/content';
import { loadProgress, saveProgress } from '../lib/progress';

export default function LessonPage() {
  const { courseSlug, lessonSlug } = useParams();
  const lesson = getLessonBySlug(courseSlug ?? '', lessonSlug ?? '');

  useEffect(() => {
    if (!lesson) return;
    const progress = loadProgress();
    const completedLessons = progress.completedLessons.includes(lesson.id) ? progress.completedLessons : [...progress.completedLessons, lesson.id];
    const next = { ...progress, completedLessons, recentlyStudied: [lesson.title, ...progress.recentlyStudied].slice(0, 5) };
    saveProgress(next);
  }, [lesson]);

  if (!lesson) return <div className="mx-auto max-w-5xl px-6 py-20">Lesson not found.</div>;

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm prose max-w-none dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">{lesson.area}</p>
        <h1>{lesson.title}</h1>
        <p>{lesson.summary}</p>
        <div dangerouslySetInnerHTML={{ __html: lesson.content.replace(/\n/g, '<br />') }} />
      </article>
    </div>
  );
}
