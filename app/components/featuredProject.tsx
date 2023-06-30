// defines the featured project component that goes on the home page /
// Include the props:
// - alt: string
// - src: string
// - page: string
// - width: number

import Image from "next/image";
import Link from "next/link";

// Fixes the error: "Type 'StaticImageData' is not assignable to type 'string'.ts(2322)"
// When passing an imported image in to a prop like we are doing here.
type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

export default function FeaturedProject({ alt, src, page, width }: { alt: string, src: StaticImageData, page: string, width: string }) {
  return (
      <Link href={page}
        className={`bg-gray-50 card-${width}-1 outline outline-gray-100 rounded-md p-4 overflow-hidden relative hover:shadow-xl hover:-translate-y-0.5 transition duration-300`}
      >
        <Image
          alt={alt}
          src={src}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover", // cover, contain, none
          }}
        />
    </Link>
  );
}
