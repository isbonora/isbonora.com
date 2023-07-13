import fs from "fs";
import path from "path";

import { compileMDX } from "next-mdx-remote/rsc";
import sectionize from 'remark-sectionize'
import MDXComponents from "@/components/MDXComponents";

const postContent = "content";

const root = process.cwd();

export const getFiles = async () => {
  return fs.readdirSync(path.join(root, postContent));
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
  const { frontmatter, content } = await compileMDX({
    source: mdxContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [
          sectionize,
        ],
      },
    },
    components: {
      ...MDXComponents,
    },
  });

  return { content, frontmatter };
};
