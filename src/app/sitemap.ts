import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { projects } from "@/data/projects";
import { books } from "@/data/books";
import { getAllPosts } from "@/lib/post";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
    },
    {
      url: absoluteUrl("/about"),
    },
    {
      url: absoluteUrl("/work"),
    },
    {
      url: absoluteUrl("/writing"),
    },
    {
      url: absoluteUrl("/bookshelf"),
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map(
    (project) => ({
      url: absoluteUrl(`/work/${project.slug}`),
    }),
  );

  const bookPages: MetadataRoute.Sitemap = books.map((book) => ({
    url: absoluteUrl(`/bookshelf/${book.slug}`),
  }));

  const writingPages: MetadataRoute.Sitemap = getAllPosts()
    .filter((post) => !post.frontmatter.draft)
    .map((post) => ({
      url: absoluteUrl(`/writing/${post.slug}`),
      lastModified: post.frontmatter.date
        ? new Date(post.frontmatter.date)
        : undefined,
    }));

  return [
    ...staticPages,
    ...projectPages,
    ...writingPages,
    ...bookPages,
  ];
}