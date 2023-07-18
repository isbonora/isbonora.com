"use client";

//  Layout for project/* pages
import "@/styles/project.css";

import "@/styles/mdx.css";

import Header from "@/components/header";

export default function Layout({ children }) {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-4 py-8 lg:pb-24">
      <div className="flex flex-col w-full max-w-3xl gap-12">
        <Header />
        {children}
      </div>
    </main>
  );
}
