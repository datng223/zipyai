import "@/styles/globals.css";
import type { AppProps } from "next/app";
import zipy from "zipyai";
import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function App({ Component, pageProps }: AppProps) {
  const projectId = "t5fz4gga1d";
  useEffect(() => {
    Clarity.init(projectId);
  }, []);

  return <Component {...pageProps} />;
}
