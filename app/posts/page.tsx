import { getSortedPosts } from "app/lib/mdx";

import MediumLink from "@/components/MediumLink";

export default async function Page() {
  const posts = await getSortedPosts();

  return (
    <div className="flex flex-col gap-12">
      <h1>Archive</h1>
      <div className="grid grid-cols-2 gap-16">
        {posts.map((post) => (
          <MediumLink
            key={post.slug}
            href={`/posts/` + post.slug}
            title={post.frontmatter.title}
            description={post.frontmatter.description.slice(0, 100) + "..."}
            tags={post.frontmatter.tags}
          />
        ))}
      </div>
    </div>
  );
}
