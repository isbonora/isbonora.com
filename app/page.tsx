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
    <main className="flex flex-col items-center justify-between min-h-screen p-4 py-12 lg:py-24">
      <div className="flex flex-col w-full max-w-3xl gap-12">
        <Header />

        <About />

        <section
          className="grid col-span-1 gap-6 lg:grid-cols-2 "
          id="featured"
        >
          <h3 className="col-span-1 text-xl font-light text-slate-500 lg:col-span-2">
            Featured
          </h3>
          <FeaturedProject
            alt="modClave"
            src={modclave}
            page="/projects/modclave-store-and-sterilise"
            title="modClave: Store & Sterilise"
            description="The modClave is a modular sterilisation desktop appliance that supports small-to-medium-sized medical practices by reprocessing medical instruments along side patient care."
          />
          <FeaturedProject
            alt="DiCart"
            src={dicart}
            page="#"
            title="DiCart"
            description="A dicart solution to solve all the things"
          />
          <FeaturedProject
            alt="iwhub"
            src={iwhub}
            page="/projects/iwhub-reflection-flag"
            title="iw.hub: Reflection Flag"
            description="A project with BMW Group"
          />
        </section>

        <div className="section" id="more">
          <h3 className="text-xl font-light text-slate-500">Projects</h3>
          <Link href="#" className="flex gap-3 text-center">
            <h3 className="">Reflection Flag</h3>
            <span className="flex-grow mb-3 border-b-2 border-blue-100 border-dashed"></span>
            <span className="font-light">Project with BMW Group</span>
          </Link>

          <Link href="#" className="flex gap-3 text-center">
            <h3 className="">Reflection Flag</h3>
            <span className="flex-grow mb-3 border-b-2 border-blue-100 border-dashed"></span>
            <span className="font-light">Project with BMW Group</span>
          </Link>

          <Link href="#" className="flex gap-3 text-center">
            <h3 className="">Reflection Flag</h3>
            <span className="flex-grow mb-3 border-b-2 border-blue-100 border-dashed"></span>
            <span className="font-light">Project with BMW Group</span>
          </Link>

          <Link href="#" className="flex gap-3 text-center">
            <h3 className="">Reflection Flag</h3>
            <span className="flex-grow mb-3 border-b-2 border-blue-100 border-dashed"></span>
            <span className="font-light">Project with BMW Group</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
