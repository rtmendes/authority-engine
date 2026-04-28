import { useState, useCallback } from 'react';

const STORAGE_KEY = 'authority-engine-progress';

interface ProgressState {
  completed: Record<string, boolean>;
  scores: Record<string, number>;
  notes: Record<string, string>;
}

function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { completed: {}, scores: {}, notes: {} };
  } catch { return { completed: {}, scores: {}, notes: {} }; }
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(loadProgress);

  const save = useCallback((next: ProgressState) => {
    setState(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }, []);

  const toggleLesson = useCallback((lessonId: string) => {
    const next = { ...state, completed: { ...state.completed, [lessonId]: !state.completed[lessonId] } };
    save(next);
  }, [state, save]);

  const setScore = useCallback((key: string, value: number) => {
    const next = { ...state, scores: { ...state.scores, [key]: value } };
    save(next);
  }, [state, save]);

  const setNote = useCallback((key: string, value: string) => {
    const next = { ...state, notes: { ...state.notes, [key]: value } };
    save(next);
  }, [state, save]);

  const completedCount = Object.values(state.completed).filter(Boolean).length;
  const totalLessons = 40;

  return { ...state, toggleLesson, setScore, setNote, completedCount, totalLessons, pct: Math.round((completedCount / totalLessons) * 100) };
}
