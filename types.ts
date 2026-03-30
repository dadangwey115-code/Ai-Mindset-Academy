
import React from 'react';

export type Language = 'en' | 'my';
export type PageId = 'home' | 'curriculum' | 'ailevels' | 'prompting' | 'notebooklm' | 'aistudio' | 'deployment' | 'trainer' | 'taste' | 'vision' | 'care' | 'director';

export interface Module {
  id: PageId;
  title: string;
  titleMy: string;
  description: string;
  descriptionMy: string;
  icon: string;
  duration: string;
  durationMy: string;
}

export interface NavItem {
  id: PageId;
  label: string;
}

export interface CurriculumModule {
  id: PageId;
  icon: React.ElementType;
  title: string;
  titleMy: string;
  description: string;
  descriptionMy: string;
  points: string[];
  pointsMy: string[];
  extendedContent?: {
    title: string;
    titleMy: string;
    body: string;
    bodyMy: string;
  };
}

export interface QuizQuestion {
  q: string;
  qMy: string;
  options: {
    text: string;
    textMy: string;
    value: number;
  }[];
  hint?: string;
  hintMy?: string;
  explanation?: string;
  explanationMy?: string;
}

export interface QuizSet {
  id: string;
  title: string;
  titleMy: string;
  questions: QuizQuestion[];
}

export interface Message {
  role: 'user' | 'ai';
  text: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  completed_lessons: string[];
}
