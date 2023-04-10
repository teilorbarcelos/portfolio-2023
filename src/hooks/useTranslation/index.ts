import { useLanguageStore } from "@/lib/contexts/language";
import { translations } from "@/hooks/useTranslation/translations";

export const useTranslation = () => {
  const { language } = useLanguageStore();

  return (key: string): string => {
    return translations[key][language];
  };
};
