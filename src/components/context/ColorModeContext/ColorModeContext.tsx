import { createContext, useContext } from 'react';

export interface IColorModeContext {
  toggleColorMode: VoidFunction;
}

export const ColorModeContext = createContext<IColorModeContext | null>(null);

export const useColorModeContext = (): IColorModeContext => {
  const context = useContext(ColorModeContext);

  if (context === null) {
    throw new Error('ColorMode context was not provided');
  }

  return context;
};
