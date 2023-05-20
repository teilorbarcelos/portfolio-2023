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
  },
  about: {
    [Language.EN]: "About",
    [Language.PT_BR]: "Sobre",
  },
  projects: {
    [Language.EN]: "Projects",
    [Language.PT_BR]: "Projetos",
  },
  blog: {
    [Language.EN]: "Blog",
    [Language.PT_BR]: "Blog",
  },
  resume: {
    [Language.EN]: "Resume",
    [Language.PT_BR]: "Resumo",
  },
  contact: {
    [Language.EN]: "Contact",
    [Language.PT_BR]: "Contato",
  },
  viewResume: {
    [Language.EN]: "View Resume",
    [Language.PT_BR]: "Ver Resumo",
  },
  projectsHomeTitle: {
    [Language.EN]: "Featured Projects",
    [Language.PT_BR]: "Projetos em destaque",
  },
  projectsHomeLeading: {
    [Language.EN]: "Here you will be able to see my study and own projects, thus knowing a little of my work.",
    [Language.PT_BR]: "Aqui você poderá ver meus projetos próprios e de estudo, conhecendo, assim, um pouco do meu trabalho.",
  },
  moreProjects: {
    [Language.EN]: "More Projects",
    [Language.PT_BR]: "Mais Projetos",
  },
};
