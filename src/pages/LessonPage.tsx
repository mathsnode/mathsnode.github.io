import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { getLessonBySlug } from '../lib/content';
import { loadProgress, saveProgress } from '../lib/progress';

function renderInlineMathSegments(text: string) {
  const parts = text.split(/(\$[^$]+\$)/g).filter(Boolean);
  return parts.map((part, index) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      const expression = part.slice(1, -1);
      return <InlineMath key={`${expression}-${index}`} math={expression} />;
    }
    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

function renderLessonContent(content: string) {
  const sections = content.split(/\n\n/).filter(Boolean);
  return sections.map((section, sectionIndex) => {
    if (section.startsWith('### ')) {
      return <h3 key={sectionIndex} className="mt-6 text-xl font-semibold">{section.replace('### ', '')}</h3>;
    }
    if (section.startsWith('- ')) {
      return <ul key={sectionIndex} className="ml-6 list-disc space-y-2">
        {section.split('\n').filter(Boolean).map((item, itemIndex) => (
          <li key={`${item}-${itemIndex}`}>{renderInlineMathSegments(item.replace('- ', ''))}</li>
        ))}
      </ul>;
    }
    if (section.startsWith('$$')) {
      const math = section.replace(/^\$\$/, '').replace(/\$\$/, '');
      return <BlockMath key={sectionIndex} math={math} />;
    }
    if (section.startsWith('## ')) {
      return <h2 key={sectionIndex} className="mt-8 text-2xl font-semibold">{section.replace('## ', '')}</h2>;
    }
    if (section.startsWith('### Worked example')) {
      return <div key={sectionIndex} className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800"><p className="font-semibold">Worked example</p><p className="mt-2">{renderInlineMathSegments(section.replace('### Worked example', ''))}</p></div>;
    }
    return <p key={sectionIndex} className="leading-8">{renderInlineMathSegments(section)}</p>;
  });
}

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

  const lessonContent = useMemo(() => lesson ? renderLessonContent(lesson.content) : null, [lesson]);

  if (!lesson) return <div className="mx-auto max-w-5xl px-6 py-20">Lesson not found.</div>;

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm prose max-w-none dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">{lesson.area}</p>
        <h1>{lesson.title}</h1>
        <p>{lesson.summary}</p>
        <div className="mt-6 space-y-4">{lessonContent}</div>
      </article>
    </div>
  );
}
