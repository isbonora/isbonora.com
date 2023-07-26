import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import styles from "@/styles/styles.module.scss";
//
export default function About() {
  return (
    <section id="about" className="">
      <p className={styles.aboutParagraph}>
        <strong>Isaac Bonora</strong>, an{" "}
        <Link
          href="https://wikipedia.org/wiki/Industrial_design"
          target="_blank"
        >
          Industrial Designer <ArrowUpRightIcon style={{ width: "0.75rem" }} />
        </Link>
        , programmer and graphic artist based in Munich, Germany. I graduated
        with honours in Industrial Design at{" "}
        <Link
          href="https://wikipedia.org/wiki/Queensland_University_of_Technology"
          target="_blank"
        >
          Queensland University of Technology{" "}
          <ArrowUpRightIcon style={{ width: "0.75rem" }} />
        </Link>{" "}
        with a strong interest in solving users’ problems with design thinking.
        I am currently Interning at{" "}
        <Link href="https://idealworks.com/" target="_blank">
          Idealworks <ArrowUpRightIcon style={{ width: "0.75rem" }} />
        </Link>
        , a{" "}
        <Link href="https://wikipedia.org/wiki/BMW" target="_blank">
          BMW Group <ArrowUpRightIcon style={{ width: "0.75rem" }} />
        </Link>{" "}
        company, applying
        <Link
          href="https://www.interaction-design.org/literature/topics/human-centered-design"
          target="_blank"
        >
          human-centred design <ArrowUpRightIcon style={{ width: "0.75rem" }} />
        </Link>{" "}
        techniques to support teams internally with web-based solutions to
        improve customer satisfaction.
      </p>
      <div className={styles.aboutSocialLinks}>
        <Link
          href="https://www.instagram.com/isbonora.design/"
          target="_blank"
        >
          Instagram
        </Link>
        /
        <Link
          href="https://www.linkedin.com/in/isbonora/"
          target="_blank"
        >
          Linkedin
        </Link>
        /
        <Link
          href="https://github.com/isbonora"
          target="_blank"
        >
          GitHub
        </Link>
        /
        <Link
          href="https://read.cv/isbonora"
          target="_blank"
        >
          read.cv
        </Link>
      </div>
    </section>
  );
}
