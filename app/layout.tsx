import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"; 
import Header from "./ui/header";
import Footer from "./ui/footer";
import "@/app/globals.css";

// Fonte monoespaçada
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Reel Movies",
  description: "Sua Biblioteca de Filmes e Séries Pessoal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <body className={jetbrains.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
