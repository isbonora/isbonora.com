import Image from "next/image";
import Link from "next/link";

import Header from "@/components/header";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-2xl w-full flex flex-col gap-12">
        <Header />

        <About />
      </div>
    </main>
  );
}
