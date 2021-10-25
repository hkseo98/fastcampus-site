import "../styles/globals.css";
import "../styles/home.css";

import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import wrapper from "../store/configureStore";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  <QueryClientProvider client={queryClient}></QueryClientProvider>;
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(MyApp);
