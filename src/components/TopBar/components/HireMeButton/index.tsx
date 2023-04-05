import { useTranslation } from "@/hooks/useTranslation";
import { HireMeButtonContainer } from "./hireMeButton.styles";
import Link from "next/link";

export function HireMeButton() {
  const t = useTranslation();
  return (
    <HireMeButtonContainer data-testid="hire-me-button">
      <Link href="/contact">{t("hireMe")}</Link>
    </HireMeButtonContainer>
  );
}
