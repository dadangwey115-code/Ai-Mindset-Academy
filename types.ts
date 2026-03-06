
import React from 'react';

export type Language = 'en' | 'my';
export type PageId = 'home' | 'curriculum' | 'prompting' | 'notebooklm' | 'aistudio' | 'deployment';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface CurriculumModule {
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
