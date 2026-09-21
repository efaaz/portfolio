import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(
  process.cwd(),
  '/src/content/writting'
);

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  tags: string[];
  cover?: string;
  featured?: boolean;
  draft?: boolean;
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
};

/**
 * Get all MDX filenames without the .mdx extension.
 */
export function getAllSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Get a single post by slug.
 */
export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const frontmatter: PostFrontmatter = {
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    category: String(data.category ?? ""),
    readingTime: String(data.readingTime ?? ""),
    tags: Array.isArray(data.tags)
      ? data.tags.map(String)
      : [],
    cover: data.cover
      ? String(data.cover)
      : undefined,
    featured: Boolean(data.featured),
    draft: Boolean(data.draft),
  };

  return {
    slug,
    frontmatter,
    content,
  };
}

/**
 * Get all published posts sorted newest first.
 */
export function getAllPosts(): Post[] {
  return getAllSlugs()
    .map(getPostBySlug)
    .filter((post): post is Post => post !== null)
    .filter((post) => !post.frontmatter.draft)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );
}

/**
 * Get all published post slugs.
 *
 * Useful for generateStaticParams().
 */
export function getPublishedSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

/**
 * Get only featured published posts.
 */
export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter(
    (post) => post.frontmatter.featured,
  );
}