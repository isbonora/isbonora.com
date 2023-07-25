import Link from "next/link";
import styles from "@/styles/styles.module.scss";


function BuildTagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 text-xs" id="tag-list">
      {/* Slice limits returned values */}
      {/* Doesn't count from 0. weird */}
      {tags.slice(0, 3).map((tag) => (
        <span
          key={tag}
          className={styles.tag}
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
      className="flex flex-col gap-2 px-4 pt-2 pb-4 h-64 pr-8 text-black lg:aspect-square bg-slate-100 hover:outline outline-slate-200 hover:text-black hover:no-underline"
    >
      <h3 className="text-base lg:text-lg">{title}</h3>
      {tags && tags.length > 0 && <BuildTagList tags={tags} />}
      <span className="text-xs lg:text-sm font-light text-slate-600">{description}</span>
    </Link>
  );
}
