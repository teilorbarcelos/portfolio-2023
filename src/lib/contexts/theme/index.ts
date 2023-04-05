import { create } from "zustand";

export enum ThemeType {
  DARK = "dark",
  LIGHT = "light",
}

type ThemeState = {
  theme: ThemeType;
  setLight: () => void;
  setDark: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: ThemeType.DARK,
  setLight: () => set(() => ({ theme: ThemeType.LIGHT })),
  setDark: () => set(() => ({ theme: ThemeType.DARK })),
}));
