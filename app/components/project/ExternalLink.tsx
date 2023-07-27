import Link from "next/link";

import postStyles from "@/styles/post.module.scss";

export default function ExternalLink({
  href,
  emoji,
  description,
}: {
  href: string;
  emoji: string;
  description: string;
}) {
  return (
    <Link
      id="file_link"
      href={href}
      target="_blank"
      className={postStyles["external-link"]}
    >
      <span>{emoji}</span>
      <p>{description}</p>
    </Link>
  );
}
