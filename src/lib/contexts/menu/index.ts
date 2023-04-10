import { create } from "zustand";

type MenuState = {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

export const useMenuStore = create<MenuState>((set) => ({
  isOpen: true,
  openMenu: () => set(() => ({ isOpen: true })),
  closeMenu: () => set(() => ({ isOpen: false })),
}));
