export const siteConfig = {
  name: "Wasifur Rahman Efaz",
  title: "Wasifur Rahman Efaz — Software Engineer",
  description:
    "Software engineer building web applications and exploring systems, technology, business, psychology, and human behavior.",

  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000",

  locale: "en_US",

  author: {
    name: "Wasifur Rahman Efaz",
    url:
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
      "http://localhost:3000",
  },

  social: {
    github: "https://github.com/efaaz",
    linkedin: "https://www.linkedin.com/in/wasifur-rahman-efaz/",
  },
} as const;

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}
