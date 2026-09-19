export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-erp",
    title: "AI ERP System",
    description:
      "AI-powered ERP for small and medium businesses to manage operations, finance, inventory and reports.",
    image: "/images/projects/ai-erp.png",
    technologies: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Tailwind",
    ],
    featured: true,
  },

  {
    slug: "finance-tracker",
    title: "Finance Tracker",
    description:
      "Personal finance tracking and analytics with useful insights and visualizations.",
    image: "/images/projects/finance-tracker.png",
    technologies: [
      "Next.js",
      "Zustand",
      "Chart.js",
      "PostgreSQL",
    ],
    featured: true,
  },

  {
    slug: "travel-platform",
    title: "Travel Platform",
    description:
      "Full-stack travel platform with a modern user experience and secure booking workflows.",
    image: "/images/projects/travel-platform.png",
    technologies: [
      "Next.js",
      "MongoDB",
      "Tailwind",
      "Stripe",
    ],
    featured: true,
  },
];