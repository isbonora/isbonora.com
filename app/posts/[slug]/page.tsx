import { getFileBySlug } from "../../lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

import Image from "next/image";
import { Suspense } from "react";


// TODO: Expand and put in to it's own file.

// Post Type
// filename is the slug.
interface Post { 
  // MDX content.
  content: string;
  frontMatter: {
    title: string;
    subtitle: string;
    //For project info block.
    year: string;
    tags: string[];
    client: string;
    description: string;
  }
  // Slug wasn't found.
  notFound?: boolean;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post  = await getPost(params.slug) as Post;

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
        <MDXRemote 
          source={post.content}
          components={{
            img: (props: {src: string, alt: string}) => (
              // FIXME: This doesn't support auto width/height, blur from imported images.
              <Image
                {...props}
                width={600}
                height={400}
                sizes="(min-width: 808px) 50vw, 100vw"
                className="off-width"
                alt={props.alt}
              />
            ),
          }}
        />
      </Suspense>
    </div>
  );
}
// See example repo here: https://github.dev/MaximeHeckel/blog.maximeheckel.com
async function getPost(slug: string) {
  try {
    // TODO: Add a type for this 'post' object

    const post = await getFileBySlug(slug);
    return { ...post};
  } catch (e) {
    return { notFound: true };
  }
}
