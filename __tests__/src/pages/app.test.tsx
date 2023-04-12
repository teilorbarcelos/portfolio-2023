import { useLoadingStore } from "@/lib/contexts/loading";
import App from "@/pages/_app";
import { render, renderHook, screen } from "@testing-library/react";
import { Router, useRouter } from "next/router";

describe("App component", () => {
  test("renders without crashing", () => {
    const { result } = renderHook(() => useLoadingStore());
    render(
      <App
        Component={() => <div>Test</div>}
        pageProps={{}}
        router={useRouter() as Router}
      />
    );

    result.current.showLoading();

    const headerElement = screen.getByTestId("top-bar");
    const navBarElement = screen.getByTestId("nav-bar");
    const loadingElement = screen.queryByTestId("loading");

    expect(headerElement).toBeInTheDocument();
    expect(navBarElement).toBeInTheDocument();
    expect(loadingElement).not.toBeInTheDocument();
  });
});
