"use client";

//  Layout for project/* pages

import Header from "@/components/header";

export default function Layout({ children }) {
  return (
        <div className="flex flex-col w-[48rem]">
            <h1 className='text-5xl font-semibold'>404</h1>
            <p>Ack! This page doesn&apos;t exist!</p>
        </div>
  );
}
