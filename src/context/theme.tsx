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
    gray: "#262626",
  },
  sizes: {
    fonts: {
      ssm: "0.8rem",
      sm: "1rem",
      md: "1.375rem",
      lg: "2.265rem",
    },
    spacing: {
      sm: ".7080rem",
      xsm: ".80rem",
      md: "1rem",
      xmd: "1.25rem",
      xxmd: "1.875rem",
      lg: "2rem",
      xxlg: "6rem",
      xxxlg: "12rem",
    },
  },
  weights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  breakpoints: {
    mobile: "max-width: 480px",
    tablet: "max-width: 780px",
    desktop: "max-width: 1024px",
  },
};

const ClientSideProvider = ({ children }: ClientSideProviderProps) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default ClientSideProvider;
