import { create } from "zustand";

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

type ThemeState = {
  theme: Theme;
  setLight: () => void;
  setDark: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: Theme.DARK,
  setLight: () => set(() => ({ theme: Theme.LIGHT })),
  setDark: () => set(() => ({ theme: Theme.DARK })),
}));
