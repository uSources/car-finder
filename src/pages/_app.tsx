import "$/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextAdapter } from "next-query-params";
import type { AppProps } from "next/app";
import { QueryParamProvider } from "use-query-params";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryParamProvider adapter={NextAdapter}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </QueryParamProvider>
  );
}
