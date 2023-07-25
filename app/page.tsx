import modclave from "@/public/posts/modclave_hero_square.jpeg";
import blurred_bg from "@/public/soft-bg.png";
// import iwhub from "@/public/projects/iwhub_hero.jpg";
import vector_on_rails from "@/public/projects/vector_on_rails.png";

import Header from "@/components/header";
import About from "@/components/about";
import FeaturedProject from "@/components/featuredProject";
import Image from "next/image";

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
          <section
            className={styles.featuredProjectGrid}
            id="featured-projects"
          >
            <FeaturedProject
              alt="modClave"
              src={modclave}
              page="/posts/modclave-store-and-sterilise"
              title="modClave: Store & Sterilise"
              description="An affordable and compact sterilisation device that addresses waste mismanagement in healthcare by enabling clinics to reprocess instruments, promoting sustainability and emphasizing the importance of waste reduction during product development."
              tags={["Medical", "Product Design", "UX"]}
            />
            <Image
              className={styles.featuredProjectBackgroundImage}
              alt="blurred_bg"
              src={blurred_bg}
            />
          </section>

          <h3 className={styles.heading3}>Projects</h3>
          <section id="projects">
            <ProjectsList />
          </section>
        </div>
        <section className={styles.sectionContainer} id="foto-gallery">
          <h3 className={styles.heading3}>Photography</h3>
          <PhotoGallery />
        </section>
      </div>
    </main>
  );
}
