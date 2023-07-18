import Image from "next/image";

import Section from "@/components/project/Section";

export default function ImageWithCaption({caption, ...props}) {
    return (
        <Section className="items-center">
        <Image
          {...props}
          alt={props.alt}
          src={props.src}
          sizes="(min-width: 808px) 50vw, 100vw"
          width={1200}
          height={1000}
        />
        <p className="caption">
          {caption}
        </p>
      </Section>
    )
}
