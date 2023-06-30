import Image from "next/image";
import Link from "next/link";

import modclave from "@/public/projects/modclaveHero.jpg";
import Header from "@/components/header";

import "@/styles/project.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 py-12 lg:py-24">
      <div className="max-w-2xl w-full flex flex-col gap-12 leading-loose">
        <Header />
        <h1 className="left-0">modClave: Store & Sterilise</h1>

        <p className="bg-gray-200 rounded-xl p-4">
          The modClave is an sterilisation device designed to tackle waste
          mismanagement in the healthcare industry. It provides an affordable
          and compact platform for clinics that cannot afford common autoclaves,
          allowing them to reprocess instruments. By addressing the issue of
          excessive waste from inadequate processes, the modClave promotes
          sustainability in healthcare. This project has emphasised for myself
          the importance of addressing waste during product development and
          understanding my users needs.
        </p>

        <Image
          alt="modclave store and sterilise"
          src={modclave}
          sizes="(min-width: 808px) 50vw, 100vw"
        />

        <p className="leading-loose">
          The modClave, a module-based steam sterilisation desktop appliance, is
          a groundbreaking solution that addresses the issues of waste
          mismanagement and sustainability in the healthcare industry. Developed
          through extensive research involving healthcare professionals in
          south-east Queensland, the modClave tackles the prevalent problem of
          excessive waste generated by poor waste practices.
        </p>

        <Image
          alt="modclave store and sterilise"
          src={modclave}
          sizes="(min-width: 808px) 50vw, 100vw"
        />

        <p className="leading-loose">
          While healthcare professionals express their intentions to be
          sustainable, the reality is that the industry heavily relies on a
          pay-per-use model, resulting in the disposal of large volumes of
          single-use instruments. This wasteful approach is particularly
          prominent in smaller practices, where sustainable alternatives are
          deemed too expensive and time-consuming, exacerbating the issue of
          excess waste.
        </p>

        <p className="leading-loose">
          Traditionally, autoclaves have been the gold standard for
          sterilisation in the medical industry. However, their high cost, space
          requirements, and inefficiency for smaller practices have limited
          their accessibility and effectiveness. The modClave revolutionises
          waste management practices by providing an affordable and compact
          solution for clinics that are currently priced out of sustainability.
        </p>
      </div>
    </main>
  );
}
