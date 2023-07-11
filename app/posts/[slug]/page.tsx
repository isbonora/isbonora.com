import { getFileBySlug } from "../../lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>loading...</div>;
  }

  console.log(post.frontMatter);


  return (
    <div>
      <h1>{post.frontMatter.title}</h1>
      <MDXRemote 
        source={post.content}
      />
    </div>
  );
}
// See example repo here: https://github.dev/MaximeHeckel/blog.maximeheckel.com
async function getPost(slug: string) {
  try {
    const post = await getFileBySlug(slug);
    return { ...post};
  } catch (e) {
    return { notFound: true };
  }
}
