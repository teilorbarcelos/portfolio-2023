import api from "@/lib/api";
import { GetStaticProps } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PageHeaderProps } from "@/components/PageHeader/pageHeader.interface";
import { HomePageContainer } from "@/styles/pages/home.styles";
import { TranslatedProp } from "@/hooks/useTranslation/translations.interface";

export interface HomePageProps {
  id: string;
  createdAt: Date;
  updatedAt: Date;
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

interface StaticHomePageProps {
  props: HomePageProps;
}

const Home = (data: HomePageProps) => {
  return (
    <HomePageContainer data-testid="home-page">
      <PageHeader
        headerTextEN={data.hello_message.EN ?? ""}
        headerTextPT={data.hello_message.PT_BR ?? ""}
        profileImageUrl={data.imageUrl ?? ""}
        profileName={data.name ?? ""}
      />
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
