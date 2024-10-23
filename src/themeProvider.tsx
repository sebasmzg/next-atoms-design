'use client';

import { createContext, ReactNode, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '@/app/theme';

const ThemeContext = createContext(theme);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);