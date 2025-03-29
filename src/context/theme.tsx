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
    softGray: "#3D3D3D",
    lightGray: "#191919",
    darkGray: "#141414",
    darkBlue: "#111118",
  },
  sizes: {
    fonts: {
      ssm: "0.8rem",
      sm: "1rem",
      md: "1.375rem",
      xmd: "1.75rem",
      lg: "2.265rem",
      xlg: "4.5rem",
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
      paddingHome: "9.37rem",
    },
  },
  weights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  breakpoints: {
    mobile: "max-width: 630px",
    tablet: "max-width: 875px",
    desktop: "max-width: 1024px",
    desktopNumber: 1024,
  },
};

const ClientSideProvider = ({ children }: ClientSideProviderProps) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default ClientSideProvider;
