"use client";

//  Layout for project/* pages
// import "@/styles/project.css";

// import "@/styles/mdx.css";

import Header from "@/components/header";

import postStyles from "@/styles/post.module.scss";

export default function Layout({ children }) {
  return (
    <main className={postStyles.container}>
        <Header />
        {children}
    </main>
  );
}
