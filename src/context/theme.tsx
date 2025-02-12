"use client";

import { ThemeProvider, DefaultTheme } from "styled-components";

interface ClientSideProviderProps {
  children: React.ReactNode;
}

export const darkTheme: DefaultTheme = {
  colors: {
    backgroundColor: "#111118",
    detailBlue: "#006688",
    white: "#FFFFFF",
  },
  sizes: {
    fonts: {
      sm: "2.265rem",
      md: "2.265rem",
      lg: "2.265rem",
    },
    spacing: {
      xs: ".7080rem",
      sm: ".80rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "2rem",
    },
  },
  weights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
};

const ClientSideProvider = ({ children }: ClientSideProviderProps) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default ClientSideProvider;
