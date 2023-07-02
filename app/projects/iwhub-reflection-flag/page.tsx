import Image from "next/image";
import Link from "next/link";

import iwhub from "@/public/projects/iwhub_hero.jpg";
import bmw_production from "./bmw_production.jpg";
import proxemics from "./proxemics.png";

import Section from "@/components/project/Section";
import InlineSection from "@/components/project/InlineSection";
import ProjectInfo from "@/components/project/ProjectInfo";
import ExternalLink from "@/components/project/ExternalLink";

export default function Home() {
  return (
    <div className="project-body">
      <Section>
        <h1>Reflection Flag</h1>
        <p className="lead">
          The Reflection Flag enhances interaction between warehouse workers and
          autonomous mobile robots, improving understanding, control,
          satisfaction, safety, efficiency, and offering a unique working
          experience.
        </p>

        <ProjectInfo
          clientName="Queensland University of Technology | BMW Group | Idealworks"
          datePeriod="2021"
          bodyText="This project was completed as apart of a capstone unit at QUT. The project was completed in collaboration with Idealworks and the BMW Group..."
          tags={[
            "Industrial Applications",
            "Safety",
            "Research",
            "Human-centered Design",
            "Model Making",
            "Arduino",
          ]}
        />
      </Section>

      <Image
        alt="hero image of the iwhub by idealworks with the reflection flag attached"
        src={iwhub}
        sizes="(min-width: 808px) 50vw, 100vw"
        className="off-width"
        placeholder="blur"
      />

      <Section>
        <h3>Introduction</h3>
        <p>
          The Reflection Flag was developed in collaboration with the BMW Group
          and Idealworks from Munich, Germany.
        </p>
        <p>
          This industry-linked project led by the Idealworks’ design team,
          enabled an advanced discovery process into how warehouse workers
          interact with autonomous mobile robots (AMR) in the manufacturing
          environment. Enabling a unique learning experience, interviewing
          professionals in their field outside of my normal design practice and
          experience.
        </p>
      </Section>
      
      <InlineSection>
        <p>
          Research identified a need for observers of an AMR to be able to
          understand what the robot is “thinking” and be able to better predict
          its movements so that humans in the same space as AMR’s may work more
          harmoniously.
        </p>

        <div className="flex flex-col items-center">
          <Image
            alt="image of workers on a bmw production line."
            src={bmw_production}
            sizes="(min-width: 800px) 50vw, 100vw"
            placeholder="blur"
          />
          <p className=" text-xs font-light text-slate-500 max-w-md leading-loose">
            Men in a BMW production line (
            <Link href="https://www.press.bmwgroup.com/global/article/detail/T0318827EN/first-of-its-kind-and-innovation-driver-for-sustainable-mobility:-200-000-bmw-i3-produced-to-date?language=en">
              BMW Group, source
            </Link>
            )
          </p>
        </div>
      </InlineSection>

      <Section>
        <h3>Solution</h3>
        <p>
          The Reflection Flag addresses the research findings by providing a
          peripheral device to AMR’s that offers real time feedback to users and
          observers around the AMR’s local space. The mast head takes in
          existing LiDAR information and reflects back the AMR’s perception to
          the observer through the use of an 360 degree LED matrix. Mimicking
          the user’s position relative to the AMR on the LED matrix as a method
          of understanding. This displayed understanding allows users local to
          the AMR to work more efficiently where there are now clear
          expectations that the robot sees the user and that they can expect it
          to behave normally. In addition to the reflection function of the
          peripheral, an interface in the centre of the mast allows for manual
          override of the AMR without the need for external equipment.
        </p>
        <div className="flex flex-col items-center">
          <Image
            alt="Proxemics diagram showing the different zones of personal space around the reflection flag"
            src={proxemics}
            sizes="(min-width: 800px) 50vw, 100vw"
            placeholder="blur"
          />
          <p className=" text-xs font-light text-slate-500 max-w-md leading-loose">
            Proxemics diagram showing the different zones of personal space
          </p>
        </div>
        {/* FIXME: #3 Make lazy and include image fallback */}
        <video autoPlay loop>
          <source src="./proxemics.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </Section>

      {/* 
      <Section className="items-center">
        <Image
          alt="hero image of the modclave"
          src={instruments_stockphoto}
          sizes="(min-width: 808px) 50vw, 100vw"
          placeholder="blur"
        />
        <p className="caption">
          Example of single-use instruments that are often used once and
          disposed of in medical practices. (
          <Link href="https://unsplash.com/photos/pV5arhEZHiA" target="_blank">
            source: Ibrahim Boran, Unsplash
          </Link>
          )
        </p>
      </Section>

      <Section>
        <h3>Problem</h3>
        <p>
          While healthcare professionals express their intentions to be
          sustainable, the reality is that the industry heavily relies on a
          pay-per-use model, resulting in the disposal of large volumes of
          single-use instruments. This wasteful approach is particularly
          prominent in smaller practices, where sustainable alternatives are
          deemed too expensive and time-consuming, exacerbating the issue of
          excess waste.
        </p>
      </Section>

      <InlineSection>
        <div className="flex flex-col items-center">
          <Image
            alt="example of a room layout with a traditional autoclave"
            src={autoclave_requirements}
            sizes="(min-width: 800px) 50vw, 100vw"
            placeholder="blur"
          />
          <p className=" text-xs font-light text-slate-500 max-w-md leading-loose">
            Extracted from Infection prevention and control standards: for
            general practices and other office-based and community-based
            practices (RACGP, 2014)
          </p>
        </div>
        <p>
          Traditionally, autoclaves have been the gold standard for
          sterilisation in the medical industry. However, their high cost, space
          requirements, and inefficiency for smaller practices have limited
          their accessibility and effectiveness. The modClave revolutionises
          waste management practices by providing an affordable and compact
          solution for clinics that are currently priced out of sustainability.
        </p>
      </InlineSection>

      <Section>
        <h3>Solution</h3>
        <p>
          By enabling small to medium-sized medical practices to reprocess
          reusable instruments such as scissors, tweezers, and forceps, the
          modClave effectively addresses the pain points identified during the
          research phase. It alleviates the financial burden associated with
          traditional autoclaves, which have forced clinics to rely on
          single-use instruments that contribute to waste stream.
        </p>
      </Section>

      <Image
        alt="modclave module closeup with instruments shown"
        src={module_closeup}
        sizes="(min-width: 808px) 50vw, 100vw"
        className="off-width"
        placeholder="blur"
      />

      <Section>
        <h3>Outcome</h3>
        <p>
          With its potential to promote sustainable practices across various
          facets of the medical industry, the modClave represents a significant
          advancement in addressing waste mismanagement. This project has not
          only enhanced my skills as a graduate of industrial design has
          emphasised for myself the importance of addressing waste during
          product development and understanding the need to know explicitly what
          my users problems are.
        </p>
      </Section> */}

      <Section>
        <h3>Read More</h3>
        <ExternalLink
          href="https://www.dropbox.com/s/ks2ap17jhnmhhqg/modClave%20Designed%20Document%20with%20Justification%20Chapter%201-11-2022.pdf?dl=0"
          emoji="📁"
          description="Read the full thesis"
        />
        <ExternalLink
          href="https://www.youtube.com/watch?v=l13PFV3bYVM"
          emoji="📺"
          description="Watch the introduction video"
        />
        <ExternalLink
          href="https://www.dropbox.com/s/zmsqbazodajv42t/Capstone%20DDR%2C%20ID7%202.pdf?dl=0"
          emoji="📒"
          description="Explore the DDR"
        />
      </Section>
    </div>
  );
}
