import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechFix",
  description: "Soluções de Software, design, UX/UI e mais para sua empresa se destacar tecnológicamente",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
