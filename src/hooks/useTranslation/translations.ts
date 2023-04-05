import { Translations } from "@/hooks/useTranslation/translations.interface";
import { Language } from "@/lib/contexts/language/language.constants";

export const translations: Translations = {
  helloWorld: {
    [Language.EN]: "Hello world!",
    [Language.PT_BR]: "Olá Mundo!",
  },
  login: {
    [Language.EN]: "SignIn",
    [Language.PT_BR]: "Login",
  },
  switchLanguage: {
    [Language.EN]: "Switch Language",
    [Language.PT_BR]: "Alternar Idioma",
  },
  hireMe: {
    [Language.EN]: "Hire Me",
    [Language.PT_BR]: "Contrate-me",
  },
  languageImageUrl: {
    [Language.EN]: "/icons/brasil-flag.png",
    [Language.PT_BR]: "/icons/eua-flag.png",
  },
  languageImageTitle: {
    [Language.EN]: "Alternar para português!",
    [Language.PT_BR]: "Switch to english!",
  },
  languageImageAlt: {
    [Language.EN]: "Brazil Flag",
    [Language.PT_BR]: "Bandeira americana",
  }
};
