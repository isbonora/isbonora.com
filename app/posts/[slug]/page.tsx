import { getFileBySlug } from "../../lib/mdx";
import { PostType } from "../../types/post";

import { MDXRemote } from "next-mdx-remote/rsc";

import MDXComponents from "../../components/MDXComponents";
import { Suspense } from "react";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = (await getPost(params.slug)) as PostType;

  if (!post) {
    return <div>loading...</div>;
  }

  // TODO: Redirect to a 404 page. Not just a return
  if (post.notFound) {
    return <div>404 - Page not found</div>;
  }

  

  return (
    <div>
      <h1>{post.frontMatter.title}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MDXRemote source={post.content} components={{...MDXComponents, ...{}}} />
      </Suspense>
    </div>
  );
}
// See example repo here: https://github.dev/MaximeHeckel/blog.maximeheckel.com
async function getPost(slug: string) {
  try {
    // TODO: Add a type for this 'post' object

    const post = await getFileBySlug(slug);
    return { ...post };
  } catch (e) {
    return { notFound: true };
  }
}
