import type { Metadata } from "next";
import { PT_Sans as Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

const sans = Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Neony",
  description: "A Neon Web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={sans.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
