import { projects } from "@/data/projects";

export function getAllProjects() {
  return projects;
}

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
