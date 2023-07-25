import "./globals.css";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import StyledComponentsRegistry from "./lib/registry";

import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Isaac Bonora",
  description:
    "The portfolio of Isaac Bonora, a industrial designer based in Munich, Germany.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
