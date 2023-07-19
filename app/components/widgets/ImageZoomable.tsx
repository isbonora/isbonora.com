"use client";

import Image from "next/image";
import { Suspense, useState } from "react";

export default function ImageZoomable({ src, alt, width, height }) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="">
      <Image
        id="small-image"
        key={src}
        src={src}
        alt={alt}
        width={250}
        height={500}
        sizes="(max-width: 200px) 100vw, (max-width: 350px) 50vw, 33vw"
        onClick={() => setIsZoomed(true)}
        className="cursor-pointer hover:outline outline-4 outline-slate-300"
      />
      {isZoomed && (
        <div
          className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-75"
          onClick={() => setIsZoomed(false)}
        >
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            <Image
              id="large-image"
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="max-h-[90vh] object-contain cursor-pointer"
              sizes="(max-width: 1200px) 100vw, (max-width: 1000px) 50vw, 33vw"
            />
          </Suspense>
        </div>
      )}
    </div>
  );
}
