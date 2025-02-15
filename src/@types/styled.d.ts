import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      detailBlue: string;
      white: string;
    };
    sizes: {
      fonts: {
        sm: string;
        md: string;
        lg: string;
      };
      spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        lg: string;
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
