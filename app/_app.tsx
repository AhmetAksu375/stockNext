// pages/_app.tsx
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

import RootLayout from "./layout"; // Genel layout dosyanızı doğru yoldan import edin.
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Sayfanın getLayout fonksiyonu varsa kullan, yoksa RootLayout'u uygula
  const getLayout =
    Component.getLayout || ((page) => <RootLayout>{page}</RootLayout>);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
