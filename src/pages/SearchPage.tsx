import { useMemo, useState } from 'react';
import { searchIndex } from '../lib/search';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchIndex.filter((entry) => entry.title.toLowerCase().includes(q) || entry.text.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-3xl font-black tracking-tight">Search lessons and practice</h1>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search topics, lessons or practice" className="mt-6 w-full rounded-2xl border border-slate-300 bg-slate-50 p-4 outline-none ring-0 dark:border-slate-700 dark:bg-slate-800" />
      </div>

      <div className="mt-8 space-y-4">
        {results.map((result) => (
          <a key={result.id} href={result.url} className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-medium text-brand">{result.type}</p>
            <h2 className="mt-1 text-lg font-semibold">{result.title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{result.text}</p>
          </a>
        ))}
        {!query && <p className="text-sm text-slate-600 dark:text-slate-300">Start typing to search the site content.</p>}
        {query && results.length === 0 && <p className="text-sm text-slate-600 dark:text-slate-300">No matches yet.</p>}
      </div>
    </div>
  );
}
