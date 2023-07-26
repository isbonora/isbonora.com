"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

import Clock from "@/components/header/time";
import styles from "@/styles/styles.module.scss";

export default function Header() {
  const pathname = usePathname();

  const isIndex = pathname === "/";

  return (
    <div id="header" className={styles.headerContainer}>
      {isIndex ? (
        <span>🎨🗒️🧑‍💻🇦🇺</span>
      ) : (
        <Link href="/">
          🎨🗒️🧑‍💻🇦🇺 go back 
        </Link>
      )}

      <span>
        <Clock /> GMT+2
      </span>
    </div>
  );
}
