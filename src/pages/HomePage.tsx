import { Link } from 'react-router-dom';

const journey = [
  { title: 'Foundations', to: '/foundations' },
  { title: 'National 4', to: '/national-4' },
  { title: 'National 5', to: '/national-5' },
  { title: 'Higher', to: '/higher' }
];

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-[1.25fr_0.75fr] lg:p-12">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">MathsNode</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Maths, from the ground up.</h1>
          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Clear explanations, carefully structured course notes and serious practice — from mathematical foundations through National 4, National 5 and Higher.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/foundations" className="rounded-full bg-brand px-5 py-3 font-semibold text-white">Start learning</Link>
            <Link to="/higher" className="rounded-full border border-slate-300 px-5 py-3 font-semibold dark:border-slate-700">Explore Higher</Link>
            <Link to="/practice" className="rounded-full border border-slate-300 px-5 py-3 font-semibold dark:border-slate-700">Practice questions</Link>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-100 p-8 dark:bg-slate-800">
          <h2 className="text-xl font-semibold">Course journey</h2>
          <div className="mt-6 space-y-4">
            {journey.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">{index + 1}</div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <Link to={item.to} className="text-sm text-brand">Open course</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          { title: 'Foundational understanding', text: 'Every lesson starts with definitions, examples and core ideas before procedures.' },
          { title: 'Course pathways', text: 'Foundations, National 4, National 5 and Higher are all linked into one clear progression.' },
          { title: 'Structured practice', text: 'Each topic includes warm-up, core, developing and challenge-style questions.' }
        ].map((card) => (
          <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{card.text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold">What you can study now</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            'Mathematical language and logic',
            'Natural numbers and successor',
            'Fractions, decimals and percentages',
            'Linear relationships',
            'Quadratics and factorising',
            'Differentiation from first principles'
          ].map((topic) => (
            <div key={topic} className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">{topic}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
