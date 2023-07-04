import Image from "next/image";
import Link from "next/link";

import iwhub from "@/public/projects/iwhub_hero.jpg";
import bmw_production from "./bmw_production.jpg";
import proxemics from "./proxemics.png";

import Section from "@/components/project/Section";
import InlineSection from "@/components/project/InlineSection";
import ProjectInfo from "@/components/project/ProjectInfo";
import ExternalLink from "@/components/project/ExternalLink";

import ModelViewer from "@/components/project/ModelViewer";

export default function Home() {
  return (
    <div className="project-body">
      <Section>
        <h1>Reflection Flag</h1>
        <p className="lead">
          Enhances the interaction between warehouse workers and autonomous
          mobile robots, improving understanding, control, satisfaction, safety,
          efficiency, and offering a unique working experience.
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
          <p className="max-w-md text-xs font-light leading-loose text-slate-500">
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
          <p className="max-w-md text-xs font-light leading-loose text-slate-500">
            Proxemics diagram showing the different zones of personal space
          </p>
        </div>
        {/* FIXME: #3 Make lazy and include image fallback */}
        {/* <video autoPlay loop width="1280" height="720">
          <source src="./proxemics.webm" type="video/webm" />
          <source src="./proxemics.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </Section>
      <Section>
        <ModelViewer
          className="off-width bg-slate-50 h-[80vh]"
          model_path="/projects/reflection_flag_compressed.glb"
          annotations={[
            {
              position: [-0.12, 2.2, -0.7],
              title: "Mast",
              body: "The mast is the main body of the device. It houses the LED matrix that reflects the AMR's perception of the user.",
            },
            {
              position: [-0.12, 1.32, -0.7],
              title: "Handle",
              body: "The handle provides quick and manual overide in the event of device confusion or failure.",
            },
          ]}
        />
      </Section>
      <Section>
        <h3>Summary</h3>
        <p>
          The peripheral works as an effective tool to improve satisfaction and
          reduce chances of accidents in the workplace. Through the use of
          mimicry in the LED matrix, and swift manual override in the handle,
          the Reflection Flag has clear benefits for any AMR found in
          warehouses.
        </p>
      </Section>
      <Section>
        <h3>Read More</h3>
        <ExternalLink
          href="https://www.dropbox.com/s/qc31gbp5kmqrtqx/Final%20Research%20Report%20Designed%20Document-C.pdf?dl=0"
          emoji="📁"
          description="Read the research report"
        />
        <ExternalLink
          href="https://www.dropbox.com/s/7fciujqt3b122vl/CapstoneVideo-Render-Final.mp4?dl=0"
          emoji="📺"
          description="Watch the video"
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
