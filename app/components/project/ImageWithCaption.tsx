import Image from "next/image";

import Section from "@/components/project/Section";

import postStyles from "@/styles/post.module.scss";


export default function ImageWithCaption({caption, ...props}) {
    return (
        <Section className={postStyles['captioned-image-container']}>
        <Image
          {...props}
          alt={props.alt}
          src={props.src}
          sizes="(min-width: 808px) 50vw, 100vw"
          width={1200}
          height={1000}
        />
        <figcaption className="text-slate-500">
          {caption}
        </figcaption>
      </Section>
    )
}
