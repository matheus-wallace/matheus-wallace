import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      detailBlue: string;
      white: string;
      gray: string;
    };
    sizes: {
      fonts: {
        ssm: string;
        sm: string;
        md: string;
        lg: string;
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
    };
  }
}
