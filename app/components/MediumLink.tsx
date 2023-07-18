import Link from "next/link";

function BuildTagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 text-xs" id="tag-list">
      {/* Slice limits returned values */}
      {/* Doesn't count from 0. weird */}
      {tags.slice(0, 3).map((tag) => (
        <span
          key={tag}
          className="px-2 text-slate-500 text-xs bg-slate-200 py-0.5"
          id="tag"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
export default function SimpleLink({
  href,
  title,
  description,
  tags,
}: {
  href: string;
  title: string;
  description: string;
  tags?: string[];
}) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-2 px-4 pt-2 pb-4 pr-8 text-black lg:aspect-square bg-slate-100 hover:outline outline-slate-200 hover:text-black hover:no-underline"
    >
      <h3 className="text-base lg:text-lg">{title}</h3>
      {tags && tags.length > 0 && <BuildTagList tags={tags} />}
      <span className="text-xs lg:text-sm font-light text-slate-600">{description}</span>
    </Link>
  );
}
