export type BookType = {
  slug: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  rating: number;
  status: "read" | "reading" | "want-to-read";
  year?: number;
  cover?: string;
  readingYear?: number;

  description?: string;
  thoughts?: string;
  whyIRead?: string;

  relatedWritingSlugs?: string[];

  featured?: boolean;
};

export const books: BookType[] = [
  {
    slug: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    isbn: "0374275637",
    category: "Psychology",
    rating: 5,
    status: "read",
    year: 2011,
    readingYear: 2026,
  },
  {
    slug: "antifragile",
    title: "Antifragile",
    author: "Nassim Nicholas Taleb",
    isbn: "0812979680",
    category: "Systems",
    rating: 5,
    status: "read",
    year: 2012,
    readingYear: 2026,

    description:
      "A book about systems that can benefit from volatility, randomness, and stress.",

    whyIRead:
      "I wanted to understand how systems behave under uncertainty and what makes some structures stronger when exposed to stress.",

    thoughts:
      "The idea that stayed with me most was that resilience isn't always about resisting uncertainty. Some systems can actually improve because of it.",

    relatedWritingSlugs: [
      "what-i-learned-from-antifragile",
    ],

    featured: true,
  },
  {
    slug: "laws-of-human-nature",
    title: "The Laws of Human Nature",
    author: "Robert Greene",
    isbn: "978-0143111375",
    category: "Psychology",
    rating: 5,
    status: "read",
    year: 2012,
    readingYear: 2025,
  },
  {
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    isbn: "0735211299",
    category: "Behavior",
    rating: 4,
    status: "read",
    year: 2018,
    readingYear: 2023,
  },
   {
    slug: "think-again",
    title: "Think Again",
    author: "Adam Grant",
    isbn: "1984878107",
    category: "Psychology",
    rating: 5,
    status: "read",
    year: 2021,
    readingYear: 2024,
    
    description:
      "Exploring the value of rethinking assumptions, opinions, and decisions.",

    whyIRead:
      "I was interested in how people update beliefs and make better decisions.",

    thoughts:
      "Good thinking isn't only about knowing more. It also requires being willing to reconsider what you already believe.",

    relatedWritingSlugs: [
      "rethinking-engineering-decisions",
    ],

    featured: true,
  },

  {
    slug: "algorithms-to-live-by",
    title: "Algorithms to Live By",
    author: "Brian Christian & Tom Griffiths",
    isbn: "1250118360",
    category: "Technology",
    rating: 5,
    status: "reading",
    year: 2016,
    readingYear: 2026,
  },

  {
    slug: "economic-facts-and-fallacies",
    title: "Economic Facts and Fallacies",
    author: "Thomas Sowell",
    isbn: "9780465003495",
    category: "Economics",
    rating: 5,
    status: "reading",
    year: 2008,
    readingYear: 2026,
  },

  {
    slug: "building-a-second-brain",
    title: "Building a Second Brain",
    author: "Tiago Forte",
    isbn: "9781982167387",
    category: "Productivity",
    rating: 4,
    status: "reading",
    year: 2019,
    readingYear: 2026,
  },

  {
    slug: "the-chaos-machine",
    title: "The Chaos Machine",
    author: "Max Fisher",
    isbn: "0316703303",
    category: "Technology",
    rating: 4,
    status: "reading",
    year: 2023,
    readingYear: 2026,
  },

  {
    slug: "the-anxious-generation",
    title: "The Anxious Generation",
    author: "Jonathan Haidt",
    isbn: "9780593655047",
    category: "Psychology",
    rating: 4,
    status: "read",
    year: 2023,
    readingYear: 2026,
  },

  {
    slug: "the-organized-mind",
    title: "The Organized Mind",
    author: "Daniel J. Levitin",
    isbn: "9780241965788",
    category: "Psychology",
    rating: 4,
    status: "want-to-read",
    year: 2014,
    readingYear: 2026,
  },

  {
    slug: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    isbn: "9780349411910",
    category: "Productivity",
    rating: 5,
    status: "read",
    year: 2016,
    readingYear: 2023,
  },

  {
    slug: "the-black-swan",
    title: "The Black Swan",
    author: "Nassim Nicholas Taleb",
    isbn: "9780141034591",
    category: "Systems",
    rating: 5,
    status: "want-to-read",
    year: 2007,
    readingYear: 2026,
  },

  {
    slug: "noise",
    title: "Noise",
    author: "Daniel Kahneman, Olivier Sibony & Cass R. Sunstein",
    isbn: "9780316451406",
    category: "Decision Making",
    rating: 5,
    status: "want-to-read",
    year: 2019,
    readingYear: 2026,
  },

  {
    slug: "thinking-in-systems",
    title: "Thinking in Systems",
    author: "Donella H. Meadows",
    isbn: "9781603580557",
    category: "Systems",
    rating: 5,
    status: "want-to-read",
    year: 2008,
    readingYear: 2026,
  },

  {
    slug: "the-psychology-of-money",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    isbn: "9780857197689",
    category: "Finance",
    rating: 4,
    status: "read",
    year: 2020,
    readingYear: 2024,
  },
];