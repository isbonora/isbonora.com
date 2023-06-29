import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="">
      <p className="leading-loose tracking-wides text-md font-light">
        <span className="text-sm uppercase">This is the website</span> of{" "}
        <span className="font-semibold">Isaac Bonora</span>, an{" "}
        <Link
          href="https://wikipedia.org/wiki/Industrial_design"
          target="_blank"
        >
          Industrial Design 🡕
        </Link>
        , programmer and graphic artist based in Munich, Germany. I graduated
        with honours in Industrial Design at{" "}
        <Link href="https://www.qut.edu.au/" target="_blank">
          Queensland University of Technology 🡕
        </Link>{" "}
        with a strong interest in solving users’ problems with design thinking.
        I am currently Interning at <Link href="#">Idealworks 🡕</Link>, a{" "}
        <Link href="#">BMW Group 🡕</Link> company, applying human-centred design
        techniques to support teams internally with web-based solutions to
        improve customer satisfaction.
      </p>
      <div className="mt-5 flex flex-wrap gap-4">
        <Link href="#" className="button">
          Instagram
        </Link>
        <Link href="#" className="button">
          Linkedin
        </Link>
        <Link href="#" className="button">
          GitHub
        </Link>
        <Link
          href="https://docs.google.com/spreadsheets/d/1r6yXxNRnAWpy8E9hcNJVzMdt4hY5n5QvVtYqNK--Hhw/edit?usp=sharing"
          target="_blank"
          className="button"
        >
          CV
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
