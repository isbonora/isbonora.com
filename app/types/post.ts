

export interface FrontMatterType {
    title: string;
    subtitle: string;
    //For project info block.
    year: string;
    tags: string[];
    client: string;
    description: string;
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