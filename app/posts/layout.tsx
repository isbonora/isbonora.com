"use client";

//  Layout for project/* pages
import "@/styles/project.css";

import "@/styles/mdx.css";

import Header from "@/components/header";

import styles from "@/styles/styles.module.scss";

export default function Layout({ children }) {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.container}>
        <Header />
        {children}
      </div>
    </main>
  );
}
