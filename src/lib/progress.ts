export interface ProgressState {
  completedLessons: string[];
  practiceAttempts: number;
  accuracy: number;
  streak: number;
  recentlyStudied: string[];
}

export function loadProgress(): ProgressState {
  if (typeof window === 'undefined') return { completedLessons: [], practiceAttempts: 0, accuracy: 0, streak: 0, recentlyStudied: [] };
  const raw = localStorage.getItem('mathsnode-progress');
  if (!raw) return { completedLessons: [], practiceAttempts: 0, accuracy: 0, streak: 0, recentlyStudied: [] };
  try {
    return JSON.parse(raw);
  } catch {
    return { completedLessons: [], practiceAttempts: 0, accuracy: 0, streak: 0, recentlyStudied: [] };
  }
}

export function saveProgress(state: ProgressState) {
  if (typeof window !== 'undefined') localStorage.setItem('mathsnode-progress', JSON.stringify(state));
}
