import { Libre_Caslon_Text } from "next/font/google";

const libreCaslonText = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-libre-caslon-text",
});

function BuildTagList({ tags }: { tags: string[] }) {
  return (
    <div
      className="relative flex flex-wrap gap-2 bg-slate-100 p-3 text-sm"
      id="tag-list"
    >
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-slate-200 px-2 py-0.5 text-sm text-slate-600 rounded"
          id="tag"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function ProjectInfoSection({
  title,
  subtitle,
  tags,
}: {
  title: string;
  subtitle: string;
  tags: string[];
}) {
  return (
    <div className="flex justify-between px-12 py-6 h-[20vh] w-full absolute bottom-0 left-0 z-1">
      <div className="flex flex-col gap-2">
        <h1 className={`${libreCaslonText.className} text-4xl`}>{title}</h1>
        <p className="w-[32rem] font-light">{subtitle}</p>
      </div>
      {/* <BuildTagList tags={tags} /> */}
    </div>
  );
}
