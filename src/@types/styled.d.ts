import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      detailBlue: string;
      white: string;
      gray: string;
      softGray: string;
      lightGray: string;
      darkGray: string;
      darkBlue: string;
      black: string;
    };
    sizes: {
      fonts: {
        ssm: string;
        sm: string;
        md: string;
        xmd: string;
        lg: string;
        xlg: string;
      };
      spacing: {
        sm: string;
        xsm: string;
        md: string;
        xmd: string;
        xxmd: string;
        lg: string;
        lg: string;
        xxlg: string;
        xxxlg: string;
        paddingHome: string;
      };
    };
    weights: {
      normal: number;
      medium: number;
      bold: number;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      desktopNumber: number;
    };
  }
}
