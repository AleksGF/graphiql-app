import { Langs } from '@/constants/dictionaries';

export const getDefaultLanguage = (): Langs => {
  type Result = Langs | '';

  const resultLanguage: Langs | '' = navigator.languages.reduce(
    (acc: Result, userLanguage: string): Result => {
      if (acc.length) return acc;

      for (const language of Object.values(Langs)) {
        if (userLanguage.toLowerCase().startsWith(language.toLowerCase()))
          return language;
      }

      return '';
    },
    '',
  );

  return resultLanguage || Langs.EN;
};
