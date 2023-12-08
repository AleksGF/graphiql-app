import { ReactNode, useState } from 'react';
import { LanguageContext } from '@/components/context';
import { getDefaultLanguage } from '@/utils/getDefaultLanguage';
import { Langs } from '@/constants/dictionaries';

interface LanguageContextProviderProps {
  children: ReactNode;
}

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Langs>(getDefaultLanguage());

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
