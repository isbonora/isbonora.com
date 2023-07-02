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
      <div className="max-w-3xl w-full flex flex-col gap-12">
        <Header />

        <About />

        <section className="grid grid-cols-3 gap-6" id="featured">
          <h2 className='text-2xl font-light text-slate-500'>Featured</h2>
          <FeaturedProject
            alt="modClave"
            src={modclave}
            page="/projects/modclave-store-and-sterilise"
            width="3"
          />
          <FeaturedProject alt="DiCart" src={dicart} page="#" width="1" />
          <FeaturedProject alt="iwhub" src={iwhub} page="/projects/iwhub-reflection-flag" width="2" />
        </section>

        <section className="section" id="more">
          <h2>Projects</h2>
          <Link href="#" className="flex text-center gap-3">
            <h3 className="text-xl">Reflection Flag</h3>
            <span className="flex-grow border-b-2 border-blue-100 mb-3 border-dashed"></span>
            <span className="font-light">Project with BMW Group</span>
          </Link>

          <Link href="#" className="flex text-center gap-3">
            <h3 className="text-xl">Reflection Flag</h3>
            <span className="flex-grow border-b-2 border-blue-100 mb-3 border-dashed"></span>
            <span className="font-light">Project with BMW Group</span>
          </Link>

          <Link href="#" className="flex text-center gap-3">
            <h3 className="text-xl">Reflection Flag</h3>
            <span className="flex-grow border-b-2 border-blue-100 mb-3 border-dashed"></span>
            <span className="font-light">Project with BMW Group</span>
          </Link>

          <Link href="#" className="flex text-center gap-3">
            <h3 className="text-xl">Reflection Flag</h3>
            <span className="flex-grow border-b-2 border-blue-100 mb-3 border-dashed"></span>
            <span className="font-light">Project with BMW Group</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
