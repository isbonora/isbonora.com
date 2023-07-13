import { getFileBySlug } from "../../lib/mdx";
import { PostType } from "../../types/post";
import ProjectInfo from "@/components/project/ProjectInfo";

import { Suspense } from "react";

import "@/styles/project.css";

export default async function Page({ params }: { params: { slug: string } }) {
  const {content, frontmatter, notFound} = (await getPost(params.slug)) as PostType;

  // TODO: Redirect to a 404 page. Not just a return
  if (notFound) {
    return <div className='project-body px-auto'>404 - Page not found</div>;
  }

  // Test if content is ready. If not, show a loading indicator.
  if (!content) {
    return <div>loading...</div>;
  }

  return (
    <div className="prose project-body">
      {/* Header */}
      <section>
        <h1>{frontmatter.title}</h1>
        <p className="lead">{frontmatter.subtitle}</p>
        <ProjectInfo
          clientName={frontmatter.client}
          bodyText={frontmatter.description}
          datePeriod={frontmatter.year}
          tags={frontmatter.tags}
        />
      </section>

      {/* Content from MDX */}
      <Suspense fallback={<div>Loading...</div>}>
        {content}
      </Suspense>
    </div>
  );
}
// See example repo here: https://github.dev/MaximeHeckel/blog.maximeheckel.com
async function getPost(slug: string) {
  try {
    const post = await getFileBySlug(slug);
    return { ...post };
  } catch (e) {
    return { notFound: true };
  }
}
