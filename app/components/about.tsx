import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import styles from "@/styles/styles.module.scss";

export default function About() {
  return (
    <section id="about" className="">
      <p className="font-light leading-loose tracking-wides text-md">
        <span className="text-sm uppercase">This is the website</span> of{" "}
        <span className="font-semibold">Isaac Bonora</span>, an{" "}
        <Link
          className="inline-flex items-center"
          href="https://wikipedia.org/wiki/Industrial_design"
          target="_blank"
        >
          Industrial Designer <ArrowUpRightIcon className="w-3" />
        </Link>
        , programmer and graphic artist based in Munich, Germany. I graduated
        with honours in Industrial Design at{" "}
        <Link
          className="inline-flex items-center"
          href="https://www.qut.edu.au/"
          target="_blank"
        >
          Queensland University of Technology{" "}
          <ArrowUpRightIcon className="w-3" />
        </Link>{" "}
        with a strong interest in solving users’ problems with design thinking.
        I am currently Interning at{" "}
        <Link className="inline-flex items-center" href="#">
          Idealworks <ArrowUpRightIcon className="w-3" />
        </Link>
        , a{" "}
        <Link className="inline-flex items-center" href="#">
          BMW Group <ArrowUpRightIcon className="w-3" />
        </Link>{" "}
        company, applying human-centred design techniques to support teams
        internally with web-based solutions to improve customer satisfaction.
      </p>
      <div className="flex gap-4 mt-5 lg:mt-0">
        <Link
          href="https://www.instagram.com/isbonora.design/"
          target="_blank"
          className={styles.socialLink}
        >
          Instagram
        </Link>
        /
        <Link
          href="https://www.linkedin.com/in/isbonora/"
          target="_blank"
          className={styles.socialLink}
        >
          Linkedin
        </Link>
        /
        <Link
          href="https://github.com/isbonora"
          target="_blank"
          className={styles.socialLink}
        >
          GitHub
        </Link>
        /
        <Link
          href="https://read.cv/isbonora"
          target="_blank"
          className={styles.socialLink}
        >
          read.cv
        </Link>
      </div>

      {/* <p className="mt-3">
          Recent projects include the <Link href="#">modClave</Link>, a
          module-based sterilisation medical appliance enabling medical
          practices to reuse their medical instruments. The{" "}
          <Link href="#">DiCart</Link>, a healthcare system for young people
          with T1D to improve management, social integration, and emotional
          well-being. And the <Link href="#">iw.hub</Link>{" "}
          <Link href="#">Reflection Flag</Link>, improving interactions workers
          have with mobile robots in warehouses, enhancing understanding and
          safety.
        </p> */}
    </section>
  );
}
