import "@/styles/globals.css";
import type { AppProps } from "next/app";
import zipy from "zipyai";
zipy.init("3d8e6403");

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
