import { curriculumIndex } from '../curriculum';

export default function CurriculumAuditPage() {
  const courses = ['National 4', 'National 5', 'Higher'] as const;
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-black tracking-tight">MATHSNODE CURRICULUM COVERAGE</h1>
        {courses.map((course) => {
          const items = curriculumIndex.filter((item) => item.course === course);
          const percent = Math.round((items.filter((item) => item.status === 'covered').length / items.length) * 100);
          return (
            <div key={course} className="mt-8">
              <h2 className="text-xl font-semibold">{course}</h2>
              <div className="mt-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700">
                <div className="h-3 rounded-full bg-brand" style={{ width: `${percent}%` }} />
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{percent}% covered</p>
              <div className="mt-4 space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                    <p className="text-sm font-semibold text-brand">{item.area}</p>
                    <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Source: {item.sourceDocument}{item.sourcePage ? ` • Page ${item.sourcePage}` : ''}</p>
                    <p className="mt-2 text-sm">Status: {item.status}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
