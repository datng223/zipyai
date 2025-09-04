import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

const projectId = "t5fz4gga1d";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Khởi tạo Microsoft Clarity khi component mount
    if (typeof window !== "undefined") {
      import("@microsoft/clarity")
        .then((Clarity) => {
          Clarity.default.init(projectId);
        })
        .catch((error) => {
          console.warn("Failed to load Microsoft Clarity:", error);
        });
    }
  }, []);

  useEffect(() => {
    // Khởi tạo Google Analytics
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", "G-4XTZ789FND");
    }
  }, []);

  return <Component {...pageProps} />;
}
