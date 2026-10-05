import type { Metadata } from "next";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechFix",
  description: "Soluções de Software, design, UX/UI e mais para sua empresa se destacar tecnológicamente",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        <ToastContainer autoClose={1000} theme="dark" />
        {children}
      </body>
      <Script src="https://kit.fontawesome.com/ba7c57d421.js"></Script>
    </html>
  );
}
