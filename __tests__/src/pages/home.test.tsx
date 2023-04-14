import { render, waitFor } from "@testing-library/react";
import Home from "@/pages/index";
import { headerMock } from "@/../__tests__/src/components/PageHeader/pageHeader.mock";
import { getStaticProps } from "@/pages/index";
import { GetStaticPropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

describe("Home", () => {
  test("renders the Home", () => {
    const { getByTestId } = render(<Home header={headerMock} />);

    const home = getByTestId("home-page");

    expect(home).toBeInTheDocument();
  });

  test("Should getStaticProps to get the right props", async () => {
    const context: GetStaticPropsContext<ParsedUrlQuery, PreviewData> = {};
    const props = await getStaticProps(context);
    await waitFor(() =>
      expect(props).toStrictEqual({ props: { header: headerMock } })
    );
  });
});
