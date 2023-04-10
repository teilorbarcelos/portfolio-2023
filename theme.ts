import { themeConstants } from "@/styles/theme.constants";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    singleAmburgerBarColor: string;
    sliderBackgroundColor: string;
    sliderButtonColor: string;
    socialIconContainerColor: string;
    socialIconColor: string;
    menuLinkActiveColor: string;
    menuLinkColor: string;
  }
}

const theme: DefaultTheme = themeConstants.dark;

export default theme;
