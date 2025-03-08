"use client"; // Make this a client component

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-select/dist/css/bootstrap-select.min.css";
import "@/styles/fontawesome.css";
import "@/styles/globals.scss";
import "@/styles/flaticon.css";
import { Lato } from "next/font/google";
import { useEffect } from "react";
import $ from "jquery";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js").then(() => {
        console.log("Bootstrap JS loaded");
      });

      import("bootstrap-select").then(() => {
        console.log("Bootstrap Select loaded");
        $(".selectpicker").selectpicker();
      });

      // Ensure jQuery is globally available
      (window as any).$ = (window as any).jQuery = $;
    }
  }, []);

  return (
    <html lang="en" className={lato.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
