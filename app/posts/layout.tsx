"use client";

//  Layout for project/* pages
import "@/styles/project.css";

import "@/styles/mdx.css";

import Header from "@/components/header";

export default function Layout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-0 lg:px-4 py-12 lg:py-24">
      <div className="flex flex-col gap-16 lg:gap-24">
        <Header />
        {children}
      </div>
    </main>
  );
}
