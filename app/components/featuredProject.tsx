// defines the featured project component that goes on the home page /
// Include the props:
// - alt: string
// - src: string
// - page: string
// - width: number

import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/styles.module.scss";

// Fixes the error: "Type 'StaticImageData' is not assignable to type 'string'.ts(2322)"
// When passing an imported image in to a prop like we are doing here.
type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

export default function FeaturedProject({
  alt,
  src,
  page,
  title,
  description,
}: {
  alt: string;
  src: StaticImageData;
  page: string;
  title: string;
  description: string;
}) {
  return (
    <Link href={page} className={styles.featuredProject}>
      <div className={styles.featuredProjectImage}>
        <Image
          alt={alt}
          src={src}
          fill
          placeholder="blur"
          sizes="(min-width: 808px) 50vw, 100vw"
        />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}
