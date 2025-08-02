import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Runk - Corri, conquista, domina",
  description:
    "Trasforma ogni corsa in una sfida strategica. Chiudi i tuoi percorsi, conquista territori reali e sfida altri runner per il controllo della mappa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
