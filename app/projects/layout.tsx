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
    <main className="flex flex-col items-center justify-between min-h-screen p-4 py-8 lg:pb-24">
      <div className="flex flex-col gap-16 lg:gap-24">
        <Header />
        {children}
      </div>
    </main>
  );
}
