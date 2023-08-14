import Link from "next/link";
import styles from "@/styles/styles.module.scss";

function BuildTagList({ tags }: { tags: string[] }) {
  return (
    <div className={styles.tagList} id="tag-list">
      {/* Slice limits returned values */}
      {/* Doesn't count from 0. weird */}
      {tags.slice(0, 3).map((tag) => (
        <span key={tag} className={styles.tag} id="tag">
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
    <Link href={href} className={styles.projectLink}>
      <h3>{title}</h3>
      {tags && tags.length > 0 && <BuildTagList tags={tags} />}
      <p>{description}</p>
    </Link>
  );
}
