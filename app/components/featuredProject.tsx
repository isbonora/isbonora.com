// defines the featured project component that goes on the home page /
// Include the props:
// - alt: string
// - src: string
// - page: string
// - width: number

import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/styles.module.scss";

function BuildTagList({ tags }: { tags: string[] }) {
  return (
    <div className={styles.tagList} id="tag-list">
      {/* Slice limits returned values */}
      {/* Doesn't count from 0. weird */}
      {tags.slice(0, 3).map((tag) => (
        <span
          key={tag}
          className={styles.tag}
          id="tag"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

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
  tags,
}: {
  alt: string;
  src: StaticImageData;
  page: string;
  title: string;
  description: string;
  tags?: string[];
}) {
  return (
    <Link href={page} className={styles.featuredProject}>
      <div className={styles.featuredProjectImage}>
        <Image
          alt={alt}
          src={src}
          
          placeholder="blur"
          sizes="(min-width: 808px) 50vw, 100vw"
        />
      </div>
      <div>
        <h2>{title}</h2>
        {tags && tags.length > 0 && <BuildTagList tags={tags} />}
        <p>{description}</p>
      </div>
    </Link>
  );
}
