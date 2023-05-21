import Image from "next/image";
import { ProjectProps } from "../projectsBox.interface";
import { useLanguageStore } from "@/lib/contexts/language";
import { ProjectCardContainer } from "./projectCard.styles";

export const ProjectCard = (data: ProjectProps) => {
  const { language } = useLanguageStore();
  return (
    <ProjectCardContainer>
      <Image
        src={data.imageUrl}
        alt={data.title[language] as string}
        width={270}
        height={180}
        className="project-image"
      />

      <h3>{data.title[language]}</h3>

      <p>{data.leadingText[language]}</p>
    </ProjectCardContainer>
  );
};
