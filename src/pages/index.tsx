import api from "@/lib/api";
import { GetStaticProps } from "next";
import { PageHeader } from "@/components/PageHeader";
import { HomePageContainer } from "@/styles/pages/home.styles";
import { TranslatedProp } from "@/hooks/useTranslation/translations.interface";
import { ProjectsBox } from "@/components/ProjectsBox";

interface ProfileReturnProps {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  name: string | null;
  job: TranslatedProp;
  phone_number: string | null;
  github_url: string | null;
  linkedin_url: string | null;
  twitter_url: string | null;
  medium_url: string | null;
  stack_overflow_url: string | null;
  email: string | null;
  website: string | null;
  hello_message: TranslatedProp;
  about_me: TranslatedProp;
  imageUrl: string | null;
}

export interface StackProps {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  name: string;
  image: string;
}

interface ProjectReturnProps {
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

export interface HomePageProps {
  profile: ProfileReturnProps;
  projects: ProjectReturnProps[];
}

interface StaticHomePageProps {
  props: HomePageProps;
}

const Home = (data: HomePageProps) => {
  return (
    <HomePageContainer data-testid="home-page">
      <PageHeader
        headerTextEN={data.profile.hello_message.EN ?? ""}
        headerTextPT={data.profile.hello_message.PT_BR ?? ""}
        profileImageUrl={data.profile.imageUrl ?? ""}
        profileName={data.profile.name ?? ""}
      />

      <ProjectsBox projects={data.projects} />
    </HomePageContainer>
  );
};

export default Home;

export const getStaticProps: GetStaticProps =
  async (): Promise<StaticHomePageProps> => {
    const { data } = await api.get<HomePageProps>("/home");
    return {
      props: data,
    };
  };
