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
      sm: "1rem",
      md: "1.375rem",
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
  breakpoints: {
    mobile: "480px",
    tablet: "780",
    desktop: "1024px",
  },
};

const ClientSideProvider = ({ children }: ClientSideProviderProps) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default ClientSideProvider;
