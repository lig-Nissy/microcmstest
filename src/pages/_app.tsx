import "@/styles/globals.scss";
import "@/styles/_base.scss";
import "@/styles/_editor.scss"

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
