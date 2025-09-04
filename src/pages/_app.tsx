import "@/styles/globals.css";
import type { AppProps } from "next/app";
import zipy from "zipyai";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    zipy.init("240c8412");
  }, []);

  return <Component {...pageProps} />;
}
