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
          <section className={styles.featuredProjectGrid} id="featured-projects">
            <FeaturedProject
              alt="modClave"
              src={modclave}
              page="/posts/modclave-store-and-sterilise"
              title="modClave: Store & Sterilise"
              description="Simple reprocessing of medical instruments along side patient care."
            />
            <FeaturedProject
              alt="DiCart"
              src={dicart}
              page="/posts/dicart-personalized-sensitive-care"
              title="DiCart"
              description="Empowering young individuals with Type 1 Diabetes."
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
              description="Design and development of a order, stock and customer management system."
            />
          </section>
          <section id='projects'>
            <ProjectsList />
          </section>
        </div>
        <section className={styles.sectionContainer} id='foto-gallery'>
          <h3 className={styles.heading3}>
            Photography
          </h3>
          <PhotoGallery />
        </section>
      </div>
    </main>
  );
}
