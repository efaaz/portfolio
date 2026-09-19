export type Book = {
  slug: string;
  title: string;
  author: string;
   isbn: string;
  category: string;
  rating: number;
  description?: string;
};

export const books: Book[] = [
  {
    slug: "thinking-fast-and-slow",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    isbn: "0374275637",
    category: "Psychology",
    rating: 5,
  },
  {
    slug: "antifragile",
    title: "Antifragile",
    author: "Nassim Nicholas Taleb",
    isbn: "0812979680",
    category: "Systems",
    rating: 5,
  },
  {
    slug: "laws-of-human-nature",
    title: "The Laws of Human Nature",
    author: "Robert Greene",
    isbn: "978-0143111375",
    category: "Psychology",
    rating: 5,
  },
  {
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    isbn: "0735211299",
    category: "Behavior",
    rating: 4,
  },
   {
    slug: "think-again",
    title: "Think Again",
    author: "Adam Grant",
    isbn: "1984878107",
    category: "Psychology",
    rating: 5,
  },

  {
    slug: "algorithms-to-live-by",
    title: "Algorithms to Live By",
    author: "Brian Christian & Tom Griffiths",
    isbn: "9780670068319",
    category: "Technology",
    rating: 5,
  },

  {
    slug: "economic-facts-and-fallacies",
    title: "Economic Facts and Fallacies",
    author: "Thomas Sowell",
    isbn: "9780465003495",
    category: "Economics",
    rating: 5,
  },

  {
    slug: "building-a-second-brain",
    title: "Building a Second Brain",
    author: "Tiago Forte",
    isbn: "9781982167387",
    category: "Productivity",
    rating: 4,
  },

  {
    slug: "the-chaos-machine",
    title: "The Chaos Machine",
    author: "Max Fisher",
    isbn: "9781529416404",
    category: "Technology",
    rating: 4,
  },

  {
    slug: "the-anxious-generation",
    title: "The Anxious Generation",
    author: "Jonathan Haidt",
    isbn: "9780593655047",
    category: "Psychology",
    rating: 4,
  },

  {
    slug: "the-organized-mind",
    title: "The Organized Mind",
    author: "Daniel J. Levitin",
    isbn: "9780241965788",
    category: "Psychology",
    rating: 4,
  },

  {
    slug: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    isbn: "9780349411910",
    category: "Productivity",
    rating: 5,
  },

  {
    slug: "the-black-swan",
    title: "The Black Swan",
    author: "Nassim Nicholas Taleb",
    isbn: "9780141034591",
    category: "Systems",
    rating: 5,
  },

  {
    slug: "noise",
    title: "Noise",
    author: "Daniel Kahneman, Olivier Sibony & Cass R. Sunstein",
    isbn: "9780316451406",
    category: "Decision Making",
    rating: 5,
  },

  {
    slug: "thinking-in-systems",
    title: "Thinking in Systems",
    author: "Donella H. Meadows",
    isbn: "9781603580557",
    category: "Systems",
    rating: 5,
  },

  {
    slug: "the-scout-mindset",
    title: "The Scout Mindset",
    author: "Julia Galef",
    isbn: "9780735217553",
    category: "Critical Thinking",
    rating: 4,
  },

  {
    slug: "the-psychology-of-money",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    isbn: "9780857197689",
    category: "Finance",
    rating: 4,
  },
  {
    slug: "psychology-of-money",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    isbn: "0374275637",
    category: "Finance",
    rating: 4,
  },
];