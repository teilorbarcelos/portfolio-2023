import { TranslatedProp } from "@/hooks/useTranslation/translations.interface";
import { StackProps } from "@/pages";

export interface ProjectProps {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  title: TranslatedProp;
  slug: string;
  imageUrl: string;
  leadingText: TranslatedProp;
  contentText: TranslatedProp;
  stacks: StackProps[];
}

export interface ProjectsBoxProps {
  projects: ProjectProps[];
}
