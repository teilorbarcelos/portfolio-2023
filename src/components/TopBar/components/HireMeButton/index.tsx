import { useTranslation } from "@/hooks/useTranslation";
import { HireMeButtonContainer } from "@/components/TopBar/components/HireMeButton/hireMeButton.styles";
import Link from "next/link";

export const HireMeButton = () => {
  const t = useTranslation();
  return (
    <HireMeButtonContainer data-testid="hire-me-button">
      <Link href="/contact">{t("hireMe")}</Link>
    </HireMeButtonContainer>
  );
};
