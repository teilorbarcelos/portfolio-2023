import { act, render, renderHook, waitFor } from "@testing-library/react";
import Home from "@/pages/index";
import { headerMock } from "@/../__tests__/src/components/PageHeader/pageHeader.mock";
import { getStaticProps } from "@/pages/index";
import { GetStaticPropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import { homePageMock } from "./home.mock";
import { getNextImageUrl } from "../../hooks/getNextImageUrl";
import { useLanguageStore } from "@/lib/contexts/language";
import { Language } from "@/lib/contexts/language/language.constants";

describe("Home", () => {
  test("renders the Home", () => {
    const { getByTestId } = render(<Home {...homePageMock} />);

    const home = getByTestId("home-page");

    expect(home).toBeInTheDocument();
  });

  test("Should have the right texts in header", () => {
    const {result} = renderHook(() => useLanguageStore())
    const { getByTestId } = render(<Home {...homePageMock} />);

    const headerText = getByTestId("header-text");
    const profileImage = getByTestId("profile-image");
    const profileName = getByTestId("profile-name");

    expect(headerText).toContainHTML(homePageMock.hello_message.EN as string);
    expect(getNextImageUrl(profileImage.getAttribute("src") as string)).toBe(homePageMock.imageUrl);
    expect(profileName).toContainHTML(homePageMock.name as string);

    act(() => result.current.setLanguage(Language.PT_BR))

    expect(headerText).toContainHTML(homePageMock.hello_message.PT_BR as string);
  });

  test("Should getStaticProps to get the right props", async () => {
    const context: GetStaticPropsContext<ParsedUrlQuery, PreviewData> = {};
    const props = await getStaticProps(context);
    await waitFor(() =>
      expect(props).toStrictEqual({ props: { header: headerMock } })
    );
  });
});
