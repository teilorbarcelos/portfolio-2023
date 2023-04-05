import { useAuthStore } from "@/lib/contexts/auth";
import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Loading } from "@/components/Loading";
import { useLoadingStore } from "@/lib/contexts/loading";
import { mswServer } from "@/mocks/server";

export default function App({ Component, pageProps }: AppProps) {
  const { isLoading } = useLoadingStore();
  const router = useRouter();
  const { loggedIn } = useAuthStore();

  if (process.env.NODE_ENV !== "production") mswServer.listen();

  useEffect(() => {
    if (!loggedIn && router.asPath !== "/login") {
      router.push("/login");
    }
  }, [loggedIn, router]);

  return (
    <>
      {isLoading && <Loading />}
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
