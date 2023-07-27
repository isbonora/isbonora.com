import { getFileBySlug } from "../../lib/mdx";
import { PostType } from "../../types/post";
import ProjectInfo from "@/components/project/ProjectInfo";
import { notFound } from "next/navigation";

import { Suspense } from "react";

// import "@/styles/project.css";

import postStyles from "@/styles/post.module.scss";

function getFullYear(dateUTC: string) {
  return new Date(dateUTC).getFullYear().toString();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { content, frontmatter, slugNotFound } = (await getPost(
    params.slug
  )) as PostType;

  // If no file is found. show 404 page.
  if (slugNotFound) {
    notFound();
  }

  // Test if content is ready. If not, show a loading indicator.
  if (!content) {
    return <div>loading...</div>;
  }

  return (
    <div className="">
      {/* Header */}
      <section>
        <h1>{frontmatter.title}</h1>
        <p className="lead">{frontmatter.subtitle}</p>
        <ProjectInfo
          clientName={frontmatter.client}
          bodyText={frontmatter.description}
          datePeriod={getFullYear(frontmatter.date)}
          tags={frontmatter.tags}
        />
      </section>
      <article className={postStyles.contentMarkdown}>
        {/* Content from MDX */}
        <Suspense fallback={<div>Loading...</div>}>{content}</Suspense>
      </article>
    </div>
  );
}
// See example repo here: https://github.dev/MaximeHeckel/blog.maximeheckel.com
async function getPost(slug: string) {
  try {
    const post = await getFileBySlug(slug);
    return { ...post };
  } catch (e) {
    console.error(e);
    return { slugNotFound: true };
  }
}
