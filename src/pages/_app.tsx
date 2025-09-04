import "@/styles/globals.css";
import type { AppProps } from "next/app";
import zipy from "zipyai";
import { useEffect } from "react";
import Clarity from "@microsoft/clarity";
const projectId = "t5fz4gga1d";
Clarity.init(projectId);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
