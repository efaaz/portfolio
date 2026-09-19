import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), '/src/content/writting')

export function getAllSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { slug, frontmatter: data as {
    readingTime: import("react").JSX.Element
    tags: any;
    cover: string; category: string; title: string; description: string; date: string 
}, content }
}

export function getAllPosts() {
  return getAllSlugs()
    .map(getPostBySlug)
    .sort((a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date))
}