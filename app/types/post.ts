

export interface FrontMatterType {
    title: string;
    subtitle: string;
    //For project info block.
    date: string;
    tags: string[];
    client: string;
    description: string;
    // If a post is featured, it won't be displayed in the standard list of posts.
    // It's assumed that it shows in the top 4 posts, that are done manually.
    // TODO: Make featured posts dynamic.
    featured?: boolean;
    // cover image.
    cover: string;
  }

// Post Type
// filename is the slug.
export interface PostType { 
    // MDX content -> is just a big string.
    content: string;
    // FrontMatter.
    frontmatter: FrontMatterType;

    // Slug wasn't found.
    slugNotFound?: boolean;
  }