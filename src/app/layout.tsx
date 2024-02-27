import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from '../Redux/StoreProvider'
import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eshkon-task",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
    <html lang="en">

      <body className={inter.className}>
        <Header/>
        <main className="mt-5">{children}</main></body>
    </html>
    </StoreProvider>
  );
}
