import { getFileBySlug } from "../../lib/mdx";
import { PostType } from "../../types/post";
import ProjectInfo from "@/components/project/ProjectInfo";
import { notFound } from "next/navigation";

import Image from "next/image";

import { Suspense } from "react";

// import "@/styles/project.css";

import postStyles from "@/styles/post.module.scss";
import { Libre_Caslon_Text  } from 'next/font/google'

const libreCaslonText = Libre_Caslon_Text({ subsets: ['latin'], weight: "400", variable: '--font-libre-caslon-text' })


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
    <div className="border-t">
      <section>
        <Image
          src={frontmatter.cover}
          alt={frontmatter.title}
          width={1920}
          height={1080}
          className='max-h-[80vh]'
        />
        <div className="flex justify-between px-12 py-6 bg-slate-50 h-[20vh]">
          <div className="flex flex-col">

          <h1 className={`${libreCaslonText.className} text-4xl`}>{frontmatter.title}</h1>
          <p className="w-[32rem]">{frontmatter.subtitle}</p>
          </div>
          <div>
            some tags
          </div>
        </div>
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
