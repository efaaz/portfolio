export type Project = {
  slug: string;
  title: string;
  description: string;

  image: string;
  year: number;
  type: string;

  technologies: string[];

  featured?: boolean;

  liveUrl?: string;
  githubUrl?: string;

  overview?: string;
  problem?: string;
  approach?: string;

  architecture?: string;

  features?: {
    title: string;
    description: string;
  }[];

  technicalDecisions?: {
    title: string;
    description: string;
  }[];

  challenges?: string;
  lessons?: string;

  screenshots?: {
    src: string;
    alt: string;
  }[];
};
export const projects: Project[] = [
  {
    slug: "ai-erp",
    title: "AI ERP",
    description:
      "An AI-powered ERP platform designed around real business workflows for small and medium businesses.",

    image: "https://images.pexels.com/photos/38984789/pexels-photo-38984789.jpeg",

    year: 2026,
    type: "Business / SaaS",

    technologies: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Tailwind CSS",
    ],

    featured: true,

    liveUrl: "",
    githubUrl: "",

    overview:
      "AI ERP is a business management platform designed to bring common operational workflows into one system while leaving room for AI-assisted functionality.",

    problem:
      "Small and medium businesses often rely on disconnected spreadsheets, manual processes, and separate tools for managing inventory, sales, customers, and operations. The goal of this project was to think about those workflows as one connected system rather than a collection of isolated CRUD screens.",

    approach:
      "The system is designed around domain modules and business workflows first. The frontend is built with Next.js while FastAPI provides the backend API and PostgreSQL handles relational business data.",

    architecture:
      "The frontend communicates with a modular FastAPI backend through HTTP APIs. PostgreSQL acts as the primary relational data store, while domain modules are separated so industry-specific functionality can evolve without rewriting the common ERP foundation.",

    features: [
      {
        title: "Business Operations",
        description:
          "Core workflows for managing products, customers, inventory, transactions, and operational records.",
      },
      {
        title: "Industry-aware Architecture",
        description:
          "The system is designed so common ERP modules can be shared while industry-specific capabilities can be introduced independently.",
      },
      {
        title: "Analytics",
        description:
          "Operational data can be transformed into useful reports and business insights.",
      },
    ],

    technicalDecisions: [
      {
        title: "Why Next.js?",
        description:
          "Next.js provides a strong foundation for building a structured React application with server rendering, routing, and a mature frontend ecosystem.",
      },
      {
        title: "Why FastAPI?",
        description:
          "FastAPI provides a clean Python API layer with strong typing, automatic documentation, and a natural path for future AI-related services.",
      },
      {
        title: "Why PostgreSQL?",
        description:
          "ERP data contains many relationships and business constraints, making a relational database a natural fit for the domain.",
      },
    ],

    challenges:
      "The difficult part was not building individual screens. It was deciding how the software should represent real business processes while keeping the architecture flexible enough for multiple industries.",

    lessons:
      "This project changed how I think about software architecture. Once the domain becomes complex, the quality of the model behind the interface matters more than how quickly individual features can be implemented.",

    screenshots: [
      {
        src: "/images/projects/ai-erp/dashboard.png",
        alt: "AI ERP dashboard",
      },
      {
        src: "/images/projects/ai-erp/inventory.png",
        alt: "AI ERP inventory interface",
      },
      {
        src: "/images/projects/ai-erp/reports.png",
        alt: "AI ERP reports interface",
      },
    ],
  },
  {
    slug: "finance-tracker",
    title: "Finance Tracker",
    description:
      "A personal finance application for tracking transactions, organizing spending, and understanding financial habits.",
    image: "https://images.pexels.com/photos/38984789/pexels-photo-38984789.jpeg",
    year: 2025,
    type: "Web Application",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Zustand",
      "Express.js",
    ],
    featured: true,
  },

  {
    slug: "servicesphere",
    title: "ServiceSphere",
    description:
      "A service-sharing platform where instructors can publish services, manage bookings, and track completed work.",
    image: "https://images.pexels.com/photos/38984789/pexels-photo-38984789.jpeg",
    year: 2025,
    type: "Full-Stack Platform",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
    ],
    featured: true,
  },
];