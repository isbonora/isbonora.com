import modclave from "@/public/posts/modclave_hero_square.jpeg";
import dicart from "@/public/projects/dicart_hero.jpg";
// import iwhub from "@/public/projects/iwhub_hero.jpg";
import vector_on_rails from "@/public/projects/vector_on_rails.png";

import Header from "@/components/header";
import About from "@/components/about";
import FeaturedProject from "@/components/featuredProject";

import ProjectsList from "@/components/ProjectsList";

import PhotoGallery from "./components/widgets/ImageGallery";

import styles from "@/styles/styles.module.scss";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.container}>
        <Header />

        <About />
        <div className={styles.sectionContainer}>
          <h3 className={styles.heading3}>Projects</h3>
          <section className={styles.featuredProjectsContainer} id="featured">
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
            {/* <FeaturedProject
              alt="iwhub"
              src={iwhub}
              page="/posts/iwhub-reflection-flag"
              title="iw.hub: Reflection Flag"
              description="A project with BMW Group"
            /> */}
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
        <div className={styles.sectionContainer}>
          <h3 className={styles.heading3}>
            Photography
          </h3>
          <PhotoGallery />
        </div>
      </div>
    </main>
  );
}
