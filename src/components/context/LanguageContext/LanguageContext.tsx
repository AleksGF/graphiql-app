import { createContext, useContext } from 'react';
import { Langs } from '@/constants/dictionaries';

export interface ILanguageContext {
  language: Langs;
  setLanguage: (newLanguage: Langs) => void;
}

export const LanguageContext = createContext<ILanguageContext | null>(null);

export const useLanguageContext = (): ILanguageContext => {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error('Language context was not provided');
  }

  return context;
};
