import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-black tracking-tight">About MathsNode</h1>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">MathsNode is a modern mathematics platform built to help learners understand ideas first, build fluency through practice and connect topics through clear progression.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800">
            <h2 className="text-xl font-semibold">Curriculum philosophy</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">We use the supplied SQA course documentation as the reference point for the structure and coverage.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800">
            <h2 className="text-xl font-semibold">Local progress</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Progress is stored locally on the device for a private, account-free learning experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
