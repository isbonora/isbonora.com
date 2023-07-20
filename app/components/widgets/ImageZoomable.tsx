"use client";

import Image from "next/image";
import { Suspense, useState } from "react";

export default function ImageZoomable({ src, alt, width, height }) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="">
      <Image
        key={src}
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 1200px) 1400px, (max-width: 1000px) 1200px, (max-width: 600px) 800px, 400px"
        onClick={() => setIsZoomed(true)}
        className="cursor-pointer hover:outline outline-4 outline-slate-300"
      />
      {isZoomed && (
        <div
          className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen pl-4 pr-8 bg-black bg-opacity-75"
          onClick={() => setIsZoomed(false)}
        >
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            <Image
              id="large-image"
              src={src}
              alt={alt}
              width={1200}
              height={800}
              className="max-h-[90vh] object-contain cursor-pointer opacity-0  transition-opacity duration-300"
              sizes="(max-width: 1200px) 1400px, (max-width: 1000px) 1200px, (max-width: 600px) 800px"
              onLoad={(event) => {
                event.currentTarget.classList.add("opacity-100");
              }}
            />
          </Suspense>
        </div>
      )}
    </div>
  );
}
