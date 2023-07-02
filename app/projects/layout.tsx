//  Layout for project/* pages
import "@/styles/project.css";

import Header from "@/components/header";

export default function ProjectLayout({
     // will be a page or nested layout
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2 lg:px-4 py-12 lg:py-24">
      <div className="flex flex-col gap-16 lg:gap-24">
        <Header />
        {children}
      </div>
    </main>
  );
}
