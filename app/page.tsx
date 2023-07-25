'use client';

import modclave from "@/public/posts/modclave_hero_square.jpeg";
import dicart from "@/public/projects/dicart_hero.jpg";
import iwhub from "@/public/projects/iwhub_hero.jpg";
import vector_on_rails from "@/public/projects/vector_on_rails.png";

import Header from "@/components/header";
import About from "@/components/about";
import FeaturedProject from "@/components/featuredProject";

import ProjectsList from "@/components/ProjectsList";

import PhotoGallery from "./components/widgets/ImageGallery";

import { MainContainer, Container } from "./styles/Common";

export default function Home() {
  return (
    <MainContainer>
      <Container>
        <div className="flex flex-col gap-4">
          <Header />
        </div>

        <About />
        <div className="flex flex-col gap-6">
          <section
            className="grid col-span-1 gap-6 lg:grid-cols-2 "
            id="featured"
          >
            <h3 className="text-xl font-light lg:col-span-2 text-slate-500">
              Projects
            </h3>
            <FeaturedProject
              alt="modClave"
              src={modclave}
              page="/posts/modclave-store-and-sterilise"
              title="modClave: Store & Sterilise"
              description="The modClave is a modular sterilisation desktop appliance that supports small-to-medium-sized medical practices by reprocessing medical instruments along side patient care."
            />
            <FeaturedProject
              alt="DiCart"
              src={dicart}
              page="/posts/dicart-personalized-sensitive-care"
              title="DiCart"
              description="Empowering individuals with Type 1 Diabetes through seamless integration and holistic management."
            />
            <FeaturedProject
              alt="iwhub"
              src={iwhub}
              page="/posts/iwhub-reflection-flag"
              title="iw.hub: Reflection Flag"
              description="A project with BMW Group"
            />
            <FeaturedProject
              alt="Vector on Rails"
              src={vector_on_rails}
              page="/posts/vector-on-rails-web-design-vectoretch"
              title="Vector on Rails"
              description="Software development project for Vector Etch. Design and developing a order, stock and customer management system."
            />
          </section>

          <ProjectsList />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-light lg:col-span-2 text-slate-500">
            Photography
          </h3>
          <PhotoGallery />
        </div>
      </Container>
    </MainContainer>
  );
}
