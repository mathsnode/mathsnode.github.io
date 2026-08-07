import { courseCatalog } from '../lib/content';

export default function PracticePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-black tracking-tight">Practice studio</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Every significant topic includes warm-up, core, developing, challenge and exam-style questions.</p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {courseCatalog.flatMap((course) => course.practiceSets.map((set) => (
          <div key={set.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-medium text-brand">{course.title}</p>
            <h2 className="mt-2 text-xl font-semibold">{set.title}</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{set.summary}</p>
            <ul className="mt-4 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
              <li>Warm-up</li>
              <li>Core</li>
              <li>Developing</li>
              <li>Challenge</li>
              <li>Exam-style</li>
            </ul>
          </div>
        )))}
      </div>
    </div>
  );
}
