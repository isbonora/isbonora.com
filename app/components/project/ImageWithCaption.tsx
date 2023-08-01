import Image from "next/image";

import Section from "@/components/project/Section";

export default function ImageWithCaption({caption, ...props}) {
    return (
        <Section className="flex flex-col gap-0 items-center">
        <Image
          {...props}
          alt={props.alt}
          src={props.src}
          sizes="(min-width: 808px) 50vw, 100vw"
          width={1200}
          height={1000}
        />
        <span className="text-slate-500">
          {caption}
        </span>
      </Section>
    )
}
