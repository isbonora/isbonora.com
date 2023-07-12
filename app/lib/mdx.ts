import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const postContent = "content";

const root = process.cwd();

export const getFiles = async () => {
  return fs.readdirSync(path.join(root, postContent));
};

export const getFileBySlug = async (slug: string) => {
  const mdxContent = fs.readFileSync(
    path.join(root, "app", postContent, `${slug}.mdx`),
    "utf-8"
  );

  const parsedMdx = matter(mdxContent);

  // FIXME: Fix types.
  const frontMatter: Object = parsedMdx.data;
  const content: Object = parsedMdx.content;

  return { content, frontMatter };
};
