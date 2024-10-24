"use client";

import { createContext, ReactNode, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "@/components/theme/theme";
import { GlobalStyle } from "./globalStyles";

const ThemeContext = createContext(theme);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return(
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export const useTheme = () => useContext(ThemeContext);
