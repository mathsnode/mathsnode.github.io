import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { renderLessonContent } from './LessonPage';

describe('renderLessonContent', () => {
  it('preserves inline math segments from lesson content', () => {
    render(<div>{renderLessonContent('## Why this matters\nA quadratic has the form $ax^2 + bx + c$.\n\n### Worked example\nSolve $x^2 = 4$.')}</div>);

    expect(screen.getByText(/quadratic/i)).toBeInTheDocument();
    expect(screen.getByText(/ax/)).toBeInTheDocument();
  });
});
