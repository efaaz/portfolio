import { StaticImageData } from "next/image";
import finxDashboard from "@/assets/images/projects/finx/dashboard.png";
import finxTransection from "@/assets/images/projects/finx/transaction.png";
import finxCategories from "@/assets/images/projects/finx/categories.png";
import finxLanding from "@/assets/images/projects/finx/landing.png";

export type Project = {
  slug: string;
  title: string;
  description: string;

  image: StaticImageData | string;
  year: number;
  type: string;

  technologies: string[];

  featured?: boolean;

  liveUrl?: string;
  githubUrl?: string;

  githubFrontendUrl?: string;
  githubBackendUrl?: string;

  overview?: string;
  problem?: string;
  approach?: string;

  architecture?: string;

  frontend?: {
    title?: string;
    description?: string;
  };

  backend?: {
    title?: string;
    description?: string;
  };
  orm?: {
    title?: string;
    description?: string;
  };
  db?: {
    title?: string;
    description?: string;
  };

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
    src: StaticImageData;
    alt: string;
  }[];
};
export const projects: Project[] = [
  {
    slug: "FinX",
    title: "FinX Personal Finanace Tracker",
    description:
      "A personal finance software for note keeping your financial data, organizing spending, and understanding financial habits. Instead of treating finance management as just recording numbers, I wanted to build something that makes the data easier to understand and useful for making everyday financial decisions.",
    image: finxLanding,

    year: 2025,
    type: "Web Application / Personal Finance",

    technologies: [
      "TypeScript",
      "Next.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "TanStack Query",
      "ZOD",
    ],

    featured: true,

    liveUrl: "https://finx-fawn.vercel.app",
    githubUrl: "",
    githubFrontendUrl: "https://github.com/efaaz/finx-v2",
    githubBackendUrl: "https://github.com/efaaz/finance-management-server",

    overview:
      "FinX is a web application where users can record their financial activities, including income, expenses, daily spending, and other financial records. The dashboard gives an overview of the user's financial situation and helps them understand where their money is going through summaries and spending analytics. I also designed the application around the idea that financial data should be easy to record first and easy to understand later, rather than forcing users to deal with complicated finance tools.",
    problem:
      "FinX was born out of a personal need. I have always been quite careful about my money, and for years I tracked my expenses and income using Notes and Microsoft Excel. It worked, but managing everything manually became repetitive, time-consuming, and difficult to maintain as the amount of data increased. I also tried several existing finance management applications, but many of them either felt too complicated for everyday use or did not fit the way I wanted to manage my finances. That made me think about building my own system, starting from the way I personally track money and gradually turning it into a proper software application.",

    approach:
      "I started by focusing on the basic problem instead of thinking about a large number of features. The first goal was to make recording a transaction quick and simple. From there, I structured the application around the information that becomes useful after enough records are collected: monthly summaries, spending by category, financial trends, and eventually budgeting and other insights. I also wanted the application to remain flexible, so the underlying data model could grow without making the whole system difficult to maintain.",

    architecture:
      "FinX uses a separate frontend and backend architecture. The frontend is built with Next.js and TypeScript, while the backend is developed with Express.js and MongoDB. The backend exposes REST APIs for authentication, transactions, spending records, categories, and other financial operations. Authentication is handled using JWT-based access and refresh tokens stored in HTTP-only cookies instead of keeping sensitive tokens in browser storage. On the frontend, TanStack Query is used for server-state management and API communication, while React Hook Form and Zod are used to handle and validate forms.",

    frontend: {
      title: "Next.js",
      description: "Frontend framework ",
    },

    backend: {
      title: "Express.js",
      description: "Backend API / business logic",
    },
    orm: {
      title: "Mongoose",
      description: "Object Document Mapper",
    },
    db: {
      title: "MongoDB",
      description: "NoSQL database",
    },
    features: [
      {
        title: "Financial Records",
        description:
          "Users can record their income and expenses with relevant details such as amount, category, date, and description, creating a structured history of their financial activity.",
      },
      {
        title: "Dashboard & Analytics",
        description:
          "The dashboard provides a quick overview of the user's finances through monthly income, spending, net cash flow, savings-related information, and category-based spending analysis.",
      },
      {
        title: "Category Management",
        description:
          "Transactions can be organized using categories so that users can understand which areas consume most of their money and keep their financial records structured.",
      },
      {
        title: "Budget Management",
        description:
          "Users can define spending limits for different categories and use their recorded transactions to compare actual spending against their planned budget.",
      },
      {
        title: "Authentication Security",
        description:
          "The application includes user authentication with protected routes and HTTP-only cookie-based tokens, keeping authentication information away from client-side storage.",
      },
      {
        title: "Cloud Image Support",
        description:
          "User profile images are handled through Cloudinary rather than storing image files directly inside the application server.",
      },
    ],

    technicalDecisions: [
      {
        title: "Separate Backend Architecture",
        description:
          "I decided to keep the Express backend separate from the Next.js frontend instead of using Next.js API routes. This gave me a clearer separation between the client application and the API and made the backend easier to structure and evolve independently.",
      },
      {
        title: "MongoDB Modelling",
        description:
          "I chose MongoDB because the financial records and related data fit naturally into a document-based model, while still allowing me to organize users, categories, transactions, and spending records as separate collections.",
      },
      {
        title: "TypeScript",
        description:
          "I used TypeScript on the frontend to make the application easier to maintain as the number of components, forms, and API responses grew. It also helped me catch data-shape problems earlier during development.",
      },
      {
        title: "State Managemnt (TanStack Query)",
        description:
          "For client-side data, I use TanStack Query rather than trying to manage API data manually through React state. It gives the application a more consistent way to handle fetching, caching, loading states, mutations, and refetching.",
      },
    ],

    challenges:
      "One of the biggest challenges was deciding how the data should be structured before building more features on top of it. Financial applications look simple from the outside, but a small decision about how transactions, categories, and spending records are related can affect future queries and analytics. Authentication was another important part because I wanted to avoid keeping tokens in localStorage and instead use a more secure cookie-based approach. I also spent a lot of time simplifying the frontend architecture after realizing that adding too many libraries and patterns could make a relatively straightforward application harder to understand and maintain.",

    lessons:
      "FinX taught me that building good software is not only about making more features. A large part of the process is deciding what features should exist in the first place and how today's decisions will affect the application later on. This is because building features is easy, but maintaining them is hard, and having too many features can degrade user experience. As this is day to day application so financial data should be easy to record rather than forcing users to deal with complicated workflows and gave up on the application.",

    screenshots: [
      {
        src: finxDashboard,
        alt: "FinX dashboard",
      },
      {
        src: finxTransection,
        alt: "FinX transactions",
      },
      {
        src: finxCategories,
        alt: "FinX categories",
      },
    ],
  },
  {
    slug: "ai-erp",
    title: "AI ERP",
    description:
      "An AI-powered ERP platform designed around real business workflows for small and medium businesses.",

    image:
      "https://images.pexels.com/photos/38984789/pexels-photo-38984789.jpeg",

    year: 2026,
    type: "Business / SaaS",

    technologies: ["Next.js", "FastAPI", "PostgreSQL", "Tailwind CSS"],

    featured: true,

    liveUrl: "",
    githubUrl: "https://github.com/efaaz",

    githubFrontendUrl: "",
    githubBackendUrl: "",

    overview:
      "AI ERP is a business management platform designed to bring common operational workflows into one system while leaving room for AI-assisted functionality.",

    problem:
      "Small and medium businesses often rely on disconnected spreadsheets, manual processes, and separate tools for managing inventory, sales, customers, and operations. The goal of this project was to think about those workflows as one connected system rather than a collection of isolated CRUD screens.",

    approach:
      "The system is designed around domain modules and business workflows first. The frontend is built with Next.js while FastAPI provides the backend API and PostgreSQL handles relational business data.",

    architecture:
      "The frontend communicates with a modular FastAPI backend through HTTP APIs. PostgreSQL acts as the primary relational data store, while domain modules are separated so industry-specific functionality can evolve without rewriting the common ERP foundation.",
    frontend: {
      title: "Next.js",
      description: "Frontend framework ",
    },

    backend: {
      title: "FastAPI",
      description: "Backend API / business logic",
    },
    orm: {
      title: "SQLAlchemy",
      description: "Object Relational Mapper",
    },
    db: {
      title: "PostgreSQL",
      description: "Relational database (SQL)",
    },

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

  
  },
  {
    slug: "servicesphere",
    title: "ServiceSphere",
    description:
      "A service-sharing platform where instructors can publish services, manage bookings, and track completed work.",
    image:
      "https://images.pexels.com/photos/34803998/pexels-photo-34803998.jpeg",
    year: 2025,
    type: "Full-Stack Platform",
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    featured: false,
  },
];
