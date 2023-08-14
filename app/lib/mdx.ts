import fs from "fs";
import path from "path";

import { compileMDX } from "next-mdx-remote/rsc";
import sectionize from "remark-sectionize";
import MDXComponents from "@/components/MDXComponents";
import { FrontMatterType } from "app/types/post";

// import react element for typing
import type { ReactElement } from "react";

const postContent = "content";

const root = process.cwd();

export const getFiles = async () => {
  return fs.readdirSync(path.join(root, "app", postContent));
};

// Get file by their slug.
export const getFileBySlug = async (slug: string) => {
  // Read the MDX file from file system.
  const mdxContent = fs.readFileSync(
    path.join(root, "app", postContent, `${slug}.mdx`),
    "utf-8"
  );

  // Compile MDX to JSX.
  // This is the main part of the code.
  // This will generate the JSX HTML code that will be displayed.
  // Includes, components and any rehype/remark plugins as shown.
  const { frontmatter, content } = (await compileMDX({
    source: mdxContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [],
      },
    },
    components: {
      ...MDXComponents,
    },
  })) as { content: ReactElement; frontmatter: FrontMatterType };
  return { content, frontmatter };
};

export const getSortedPosts = async () => {
  const files = await getFiles();

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");

      const { frontmatter } = await getFileBySlug(slug);

      return { slug, frontmatter };
    })
  );
  return posts.sort(
    (a, b) =>
      Number(new Date(b.frontmatter.date)) -
      Number(new Date(a.frontmatter.date))
  );
};
