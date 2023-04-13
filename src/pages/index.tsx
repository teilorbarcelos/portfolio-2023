import { HomePageContainer } from "@/pages/home.styles";
import { HomePageProps, StaticHomePageProps } from "./home.interface";
import api from "@/lib/api";
import { GetStaticProps } from "next";
import { PageHeader } from "@/components/PageHeader";

const Home = ({ header }: HomePageProps) => {
  return (
    <HomePageContainer data-testid="home-page">
      <PageHeader {...header} />
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
