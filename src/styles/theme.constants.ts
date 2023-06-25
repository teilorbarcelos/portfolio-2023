import { DefaultTheme } from "styled-components";

interface ThemesConstantsProps {
  dark: DefaultTheme;
  light: DefaultTheme;
}

export const colorVariables = {
  COLOR001: "#19202E",
  COLOR002: "#D7DDE9",
  COLOR003: "#A5B3CE",
  COLOR004: "#FE655C",
  COLOR005: "#f5f7fa",
  COLOR006: "#354765",
  COLOR007: "#fff",
  COLOR008: "#4f6591",
  COLOR009: "rgba(0,0,0,0.1)",
  COLOR010: "rgba(0,0,0,0.9)",
  COLOR011: "#121822",
  COLOR012: "#1E2738",
  COLOR013: "#629FEB",
  COLOR014: "#465981",
  COLOR015: "#8fa5c7"
};

export const themeConstants: ThemesConstantsProps = {
  dark: {
    backgroundColor: colorVariables.COLOR001,
    singleAmburgerBarColor: colorVariables.COLOR002,
    sliderBackgroundColor: colorVariables.COLOR003,
    sliderButtonColor: colorVariables.COLOR002,
    socialIconContainerColor: colorVariables.COLOR009,
    socialIconColor: colorVariables.COLOR003,
    menuLinkActiveColor: colorVariables.COLOR004,
    menuLinkColor: colorVariables.COLOR003,
    navBarMobileContainer: colorVariables.COLOR010,
    titlesColor: colorVariables.COLOR007,
    boxesColor: colorVariables.COLOR012,
    pTextColor: colorVariables.COLOR003,
    aLinksColor: colorVariables.COLOR013,
    clientIconColor: colorVariables.COLOR003,
    clientIconContainerColor: colorVariables.COLOR009
  },
  light: {
    backgroundColor: colorVariables.COLOR005,
    singleAmburgerBarColor: colorVariables.COLOR006,
    sliderBackgroundColor: colorVariables.COLOR006,
    sliderButtonColor: colorVariables.COLOR006,
    socialIconContainerColor: colorVariables.COLOR007,
    socialIconColor: colorVariables.COLOR008,
    menuLinkActiveColor: colorVariables.COLOR004,
    menuLinkColor: colorVariables.COLOR006,
    navBarMobileContainer: colorVariables.COLOR007,
    titlesColor: colorVariables.COLOR011,
    boxesColor: colorVariables.COLOR007,
    pTextColor: colorVariables.COLOR006,
    aLinksColor: colorVariables.COLOR013,
    clientIconColor: colorVariables.COLOR007,
    clientIconContainerColor: colorVariables.COLOR015
  },
};
