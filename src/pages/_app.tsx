import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { Loading } from "@/components/Loading";
import { useLoadingStore } from "@/lib/contexts/loading";
import { mswServer } from "@/mocks/server";
import { Background } from "@/components/Background";
import { useThemeStore } from "@/lib/contexts/theme";
import { ThemeProvider } from "styled-components";
import { themeConstants } from "@/styles/theme.constants";

export default function App({ Component, pageProps }: AppProps) {
  const { theme } = useThemeStore();
  const { isLoading } = useLoadingStore();

  if (process.env.NODE_ENV !== "production") mswServer.listen();

  return (
    <ThemeProvider theme={themeConstants[theme]}>
      {isLoading && <Loading />}
      <Background>
        <Component {...pageProps} />
      </Background>
    </ThemeProvider>
  );
}
