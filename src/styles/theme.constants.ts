import { DefaultTheme } from "styled-components";

interface ThemesConstantsProps {
  dark: DefaultTheme;
  light: DefaultTheme;
}

export const themeConstants: ThemesConstantsProps = {
  dark: {
    backgroundColor: "#19202E",
    singleAmburgerBarColor: "#D7DDE9",
    sliderBackgroundColor: "#A5B3CE",
    socialIconContainerColor: "rgba(0,0,0,.1)",
    socialIconColor: "#a5b3ce",
    menuLinkActiveColor: "#FE655C",
    menuLinkColor: "#a5b3ce",
  },
  light: {
    backgroundColor: "#f5f7fa",
    singleAmburgerBarColor: "#354765",
    sliderBackgroundColor: "#354765",
    socialIconContainerColor: "#fff",
    socialIconColor: "#4f6591",
    menuLinkActiveColor: "#FE655C",
    menuLinkColor: "#4f6591",
  },
};
