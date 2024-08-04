import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/nav/navbar";
import SessionProvider from "@/components/sessionprovider";
import React from "react";
import { Toaster } from "../components/ui/toaster"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL!),
  title: {
    template: "%s | Esports Blog",
    default: "Esports Blog",
  },
  description: "Stay updated with the latest news, tournaments, and strategies in the world of esports. Discover player profiles, game reviews, and industry insights at Esports Blog.",
  openGraph: {
    title: "Esports Blog",
    url: process.env.SITE_URL,
    siteName: "Esports Blog",
    images: `${process.env.SITE_URL}/og.png`, // Use absolute URL
    type: "website",
  },
  keywords: ["Esports", "Sports Blog"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-7xl mx-auto lg:py-10 space-y-10 p-5 lg:p-0">
            <Navbar />
            {children}
          </main>
          <Toaster /> 
        </ThemeProvider>
        <SessionProvider />
      </body>
    </html>
  );
}
