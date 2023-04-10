import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Loading } from "@/components/Loading";
import { useLoadingStore } from "@/lib/contexts/loading";
import { mswServer } from "@/mocks/server";
import { useThemeStore } from "@/lib/contexts/theme";
import { ThemeProvider } from "styled-components";
import { themeConstants } from "@/styles/theme.constants";
import { TopBar } from "@/components/TopBar";
import { NavBar } from "@/components/NavBar";
import { GlobalStyle } from "@/styles/globalStyle";

const App = ({ Component, pageProps }: AppProps) => {
  const { themeState } = useThemeStore();
  const { isLoading } = useLoadingStore();

  if (process.env.NODE_ENV !== "production") mswServer.listen();

  return (
    <ThemeProvider theme={themeConstants[themeState]}>
      {isLoading && <Loading />}
      <GlobalStyle />
      <TopBar />
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
