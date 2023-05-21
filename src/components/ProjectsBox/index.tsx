import { useTranslation } from "@/hooks/useTranslation";
import { BlockTitle } from "../BlockTitle";
import { BlockText } from "../BlockText/blockText.styles";
import { BlockBox } from "../BlockBox";
import { BlockRedirectButton } from "../BlockRedirectButton";
import { ProjectsGrid } from "./projectsBox.styles";
import { ProjectsBoxProps } from "./projectsBox.interface";
import { ProjectCard } from "./ProjectCard";

export const ProjectsBox = (data: ProjectsBoxProps) => {
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

      <ProjectsGrid>
        {data.projects.map((project) => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </ProjectsGrid>

      <BlockRedirectButton
        href="/projects"
        text={t("moreProjects")}
        testId="more-projects-redirect-button"
      />
    </BlockBox>
  );
};
