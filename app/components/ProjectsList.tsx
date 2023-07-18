import MediumLink from "@/components/MediumLink";
import { getSortedPosts } from "app/lib/mdx";

import { ArrowDownRightIcon } from "@heroicons/react/24/outline";

export default async function ProjectList() {
  // Toggle view more state
  const posts = await getSortedPosts();

  // Exclude featured projects from posts list
  const otherPosts = posts.filter((post) => {
    return !post.frontmatter.featured;
  });

  return (
    <div className="grid gap-6 grid-cols-2 lg:grid-cols-3" id="more">
      {/* Iterate over top 5 latest, unfeatured, posts */}

      {otherPosts.slice(0, 5).map((post) => (
        <MediumLink
          key={post.slug}
          href={`/posts/` + post.slug}
          title={post.frontmatter.title}
          description={post.frontmatter.subtitle.slice(0, 75) + "..."}
          tags={post.frontmatter.tags}
        />
      ))}

      {/* View More shows when 5 posts already exists */}
      {otherPosts.length > 5 && (
        <a
          href="/posts"
          type="button"
          className="flex gap-2 px-4 pt-2 pb-16 lg:pb-8 pr-8 cursor-pointer text-black lg:aspect-square bg-gray-100 hover:outline outline-gray-200 hover:text-black hover:no-underline"
        >
          <span className="text-xl">View More</span>
          <ArrowDownRightIcon className="h-6 w-6" />
        </a>
      )}
    </div>
  );
}
