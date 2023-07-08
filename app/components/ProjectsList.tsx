'use client';

import MediumLink from "@/components/MediumLink";

import { ArrowDownRightIcon, ArrowSmallUpIcon } from "@heroicons/react/24/outline";

import { useState } from "react";

export default function ProjectList() {
  // Toggle view more state
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className="grid gap-6 lg:grid-cols-3" id="more">
            <MediumLink
              href="#"
              title="Lazer.Grub"
              description="
              Predecessor to Vector on Rails"
              tags={["Rails", "Ruby", "Web Design", "UX"]}
            />

            <MediumLink
              href="#"
              title="My Life in Music: 2014-2022"
              description="
              Data visualisation of the music I listen to everyday from 2014 to
              2022"
              tags={["Data", "Visualisation", "Graphic Design", "Python"]}
            />

            <MediumLink
              href="#"
              title="Grey Cycle: Water Unwasted"
              description="
              Recycling and reusing grey water for a more sustainable garden."
              tags={[
                "Industrial Design",
                "CAD",
                "System Design",
                "Mapping",
                "Research",
              ]}
            />

            <MediumLink
              href="#"
              title="Energiser Torch Remodel"
              description="
              Redesign of an everyday touch for a better hiking experience."
              tags={["Industrial Design", "CAD", "Materials"]}
            />

            <MediumLink
              href="#"
              title="KIT: Autonomous Transport System"
              description="
              50 year vision of the BNE international and domestic airport."
              tags={["Industrial Design", "CAD", "System Design", "Future"]}
            />

            {/* View More. Drops down */}
            <button type='button' onClick={() => setViewMore(!viewMore)} className="flex gap-2 px-4 pt-2 pb-4 pr-8 cursor-pointer text-black lg:aspect-square bg-slate-100 hover:outline outline-slate-200 hover:text-black hover:no-underline">
              <span className="text-xl">{ viewMore ? 'View Less' : 'View More'}</span>
              { viewMore ? <ArrowSmallUpIcon className="h-6 w-6" /> : <ArrowDownRightIcon className="h-6 w-6" />}
              
            </button>

            { viewMore && (
              <div className="grid gap-6 lg:grid-cols-3 lg:col-span-3">
                <MediumLink
              href="#"
              title="Grey Cycle: Water Unwasted"
              description="
              Recycling and reusing grey water for a more sustainable garden."
              tags={[
                "Industrial Design",
                "CAD",
                "System Design",
                "Mapping",
                "Research",
              ]}
            />

            <MediumLink
              href="#"
              title="Energiser Torch Remodel"
              description="
              Redesign of an everyday touch for a better hiking experience."
              tags={["Industrial Design", "CAD", "Materials"]}
            />

            <MediumLink
              href="#"
              title="KIT: Autonomous Transport System"
              description="
              50 year vision of the BNE international and domestic airport."
              tags={["Industrial Design", "CAD", "System Design", "Future"]}
            />
              </div>
            )}
          </div>
  );
}
