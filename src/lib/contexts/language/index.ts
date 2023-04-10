import { create } from "zustand";
import { Language } from "@/lib/contexts/language/language.constants";

interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: Language.EN,
  setLanguage: (language: Language) => set({ language }),
}));
