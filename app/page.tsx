import Image from "next/image";
import Link from "next/link";

import modclave from "@/public/projects/modclaveHero.jpg";
import dicart from "@/public/projects/dicart_hero.jpg";

import iwhub from "@/public/projects/iwhub_hero.jpg";

import Header from "@/components/header";
import About from "@/components/about";
import FeaturedProject from "@/components/featuredProject";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 py-12 lg:py-24">
      <div className="max-w-2xl w-full flex flex-col gap-12">
        <Header />

        <About />

        <section className="grid grid-cols-3 gap-6" id="featured">
          <div className="col-span-3">
            <h2 className="text-secondary">Featured</h2>
          </div>
          <FeaturedProject alt="modClave" src={modclave} page="#" width="3" />
          <FeaturedProject alt="DiCart" src={dicart} page="#" width="1" />
          <FeaturedProject alt="iwhub" src={iwhub} page="#" width="2" />
        </section>
      </div>
    </main>
  );
}
