import { Link } from 'react-router-dom';
import { getCourseBySlug } from '../lib/content';

export default function CoursePage({ courseSlug }: { courseSlug: string }) {
  const course = getCourseBySlug(courseSlug);
  if (!course) return null;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">{course.title}</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{course.subtitle}</h1>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">{course.description}</p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {course.lessons.map((lesson) => (
          <Link key={lesson.id} to={`/${course.slug}/${lesson.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-medium text-brand">{lesson.area}</p>
            <h2 className="mt-2 text-xl font-semibold">{lesson.title}</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{lesson.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-500 dark:border-slate-700">{lesson.prerequisites.length} prereqs</span>
              <span className="rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-500 dark:border-slate-700">{lesson.practiceIds.length} practice sets</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-xl font-semibold">Practice pathway</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Every lesson links to focused practice that supports the course strand and broader curriculum checkpoints.</p>
      </div>
    </div>
  );
}
