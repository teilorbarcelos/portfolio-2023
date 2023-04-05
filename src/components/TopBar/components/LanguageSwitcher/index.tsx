import { useTranslation } from "@/hooks/useTranslation";
import { useLanguageStore } from "@/lib/contexts/language";
import { Language } from "@/lib/contexts/language/language.constants";
import Image from "next/image";
import { LanguageSwitcherContainer } from "./languageSwitcher.styles";

export function LanguageSwitcher() {
  const { setLanguage, language } = useLanguageStore();
  const t = useTranslation();
  const switchLanguage = () => {
    if (language === Language.EN) return setLanguage(Language.PT_BR);
    setLanguage(Language.EN);
  };

  return (
    <LanguageSwitcherContainer
      onClick={switchLanguage}
      data-testid="language-switcher"
    >
      <Image
        width={35}
        height={35}
        src={t("languageImageUrl")}
        title={t("languageImageTitle")}
        alt={t("languageImageAlt")}
      />
    </LanguageSwitcherContainer>
  );
}
