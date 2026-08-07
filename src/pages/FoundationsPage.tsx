import { Link } from 'react-router-dom';
import { getCourseBySlug } from '../lib/content';

export default function FoundationsPage() {
  const course = getCourseBySlug('foundations');
  if (!course) return null;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">MathsNode Foundations</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Build mathematics from the ground up.</h1>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">{course.description}</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {course.lessons.map((lesson) => (
          <Link key={lesson.id} to={`/foundations/${lesson.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-medium text-brand">{lesson.area}</p>
            <h2 className="mt-2 text-xl font-semibold">{lesson.title}</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{lesson.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
