"use server";
import fs from "fs";
import path from "path";

import ImageZoomable from "./ImageZoomable";

const root = process.cwd();

export default async function ImageGallery() {
  const galleryFiles = (await listGalleryFiles()) as string[];

  return (
    <div className="p-4 bg-slate-100">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryFiles.map((file) => {
          return (
            <ImageZoomable
              key={file}
              src={`/gallery/${file}`}
              alt="Gallery Image"
              width={250}
              height={250}
              sizes="(max-width: 400px) 100vw, (max-width: 600px) 50vw, 33vw"
              className="hover:outline outline-4 outline-slate-300"
            />
          );
        })}
      </div>
    </div>
  );
}

// This means the file is now a 'use server' function.
const listGalleryFiles = async () => {
  const files = fs.readdirSync(path.join(root, "public", "gallery"));
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];

  return files.filter((file) => {
    const extension = path.extname(file).toLowerCase();
    return imageExtensions.includes(extension);
  });
};
