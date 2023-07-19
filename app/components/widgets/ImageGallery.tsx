import fs from "fs";
import path from "path";
import Image from "next/image";

import ImageZoomable from "./ImageZoomable";

const root = process.cwd();

export default async function ImageGallery() {
  const galleryFiles = (await listGalleryFiles()) as string[];

  return (
    <div className="p-4 bg-slate-100">
      <div className="grid grid-cols-4 gap-6">
        {galleryFiles.map((file) => {
          return (
            <ImageZoomable
            key={file}
            src={`/gallery/${file}`}
            alt="Gallery Image"
            width={1400}
            height={800}
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