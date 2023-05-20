import { useTranslation } from "@/hooks/useTranslation";
import { BlockTitle } from "../BlockTitle";
import { BlockText } from "../BlockText/blockText.styles";
import { BlockBox } from "../BlockBox";
import { BlockRedirectButton } from "../BlockRedirectButton";

export const ProjectsGrid = () => {
  const t = useTranslation();
  return (
    <BlockBox marginTop="40px">
      <BlockTitle>{t("projectsHomeTitle")}</BlockTitle>

      <BlockText
        data-testid="Home-projects-block-text"
        dangerouslySetInnerHTML={{
          __html: `<p>${t("projectsHomeLeading")}</p>`,
        }}
      />

      <BlockRedirectButton
        href="/projects"
        text={t("moreProjects")}
        testId="more-projects-redirect-button"
      />
    </BlockBox>
  );
};
