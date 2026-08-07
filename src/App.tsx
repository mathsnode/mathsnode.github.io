import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import HomePage from './pages/HomePage';
import FoundationsPage from './pages/FoundationsPage';
import CoursePage from './pages/CoursePage';
import LessonPage from './pages/LessonPage';
import PracticePage from './pages/PracticePage';
import SearchPage from './pages/SearchPage';
import AboutPage from './pages/AboutPage';
import CurriculumAuditPage from './pages/CurriculumAuditPage';
import { courseCatalog, getLessonById, getPracticeSetById, getCourseBySlug } from './lib/content';
import { searchIndex } from './lib/search';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('mathsnode-theme', theme);
  }, [theme]);

  const navItems = [
    { to: '/foundations', label: 'Foundations' },
    { to: '/national-4', label: 'National 4' },
    { to: '/national-5', label: 'National 5' },
    { to: '/higher', label: 'Higher' },
    { to: '/practice', label: 'Practice' },
    { to: '/search', label: 'Search' },
    { to: '/about', label: 'About' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white">MN</span>
            <span>MathsNode</span>
          </Link>
          <nav className="hidden gap-4 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-brand' : 'text-slate-600 dark:text-slate-300'}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="rounded-full border border-slate-300 px-3 py-2 text-sm font-medium dark:border-slate-700">
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/foundations" element={<FoundationsPage />} />
          <Route path="/national-4" element={<CoursePage courseSlug="national-4" />} />
          <Route path="/national-5" element={<CoursePage courseSlug="national-5" />} />
          <Route path="/higher" element={<CoursePage courseSlug="higher" />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dev/curriculum-audit" element={<CurriculumAuditPage />} />
          <Route path="/:courseSlug/:lessonSlug" element={<LessonPage />} />
          <Route path="*" element={<div className="mx-auto max-w-5xl px-6 py-20">Not found</div>} />
        </Routes>
      </main>

      <footer className="border-t border-slate-200 bg-white/70 py-8 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <p>MathsNode follows the supplied SQA specifications and is not an SQA product.</p>
          <p>Progress is stored locally on this device.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
