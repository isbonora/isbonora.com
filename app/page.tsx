import modclave from "@/public/projects/modclaveHero.jpg";
import dicart from "@/public/projects/dicart_hero.jpg";

import iwhub from "@/public/projects/iwhub_hero.jpg";
import vector_on_rails from "@/public/projects/vector_on_rails.png";

import Header from "@/components/header";
import About from "@/components/about";
import FeaturedProject from "@/components/featuredProject";

import MediumLink from "./components/MediumLink";
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
          <FeaturedProject
            alt="Vector on Rails"
            src={vector_on_rails}
            page="/projects/vector-on-rails-vectoretch-erp"
            title="Vector on Rails"
            description="Software development project for Vector Etch. Design and developing a order, stock and customer management system."
          />
        </section>

        <div className="grid gap-6 lg:grid-cols-3" id="more">
          <h3 className="lg:col-span-3 text-xl font-light text-slate-500">
            Projects
          </h3>

          <MediumLink
            href="#"
            title="Lazer.Grub"
            description="
              Predecessor to Vector on Rails"
            tags={["Rails", "Ruby", "Web Design", "UX"]}
          />

          <MediumLink
            href="#"
            title="My Life in Music: 2014-2022"
            description="
              Data visualisation of the music I listen to everyday from 2014 to
              2022"
            tags={["Data", "Visualisation", "Graphic Design", "Python"]}
          />

          <MediumLink
            href="#"
            title="Grey Cycle: Water Unwasted"
            description="
              Recycling and reusing grey water for a more sustainable garden."
            tags={[
              "Industrial Design",
              "CAD",
              "System Design",
              "Mapping",
              "Research",
            ]}
          />

          <MediumLink
            href="#"
            title="Energiser Torch Remodel"
            description="
              Redesign of an everyday touch for a better hiking experience."
            tags={["Industrial Design", "CAD", "Materials"]}
          />

          <MediumLink
            href="#"
            title="KIT: Autonomous Transport System"
            description="
              50 year vision of the BNE international and domestic airport."
            tags={["Industrial Design", "CAD", "System Design", "Future"]}
          />
          <MediumLink
            href="#"
            title="Technics SL-1200 Poster"
            description="
              Research investigation into technics SL-1200 Series turntable."
            tags={["Research", "Graphic Design"]}
          />
        </div>
      </div>
    </main>
  );
}
