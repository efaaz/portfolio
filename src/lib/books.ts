import { books } from "@/data/books";
export function getBookCover(isbn: string) {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
}
export function getBookBySlug(slug: string) {
  return books.find((book) => book.slug === slug);
}

export function getBooks() {
  return books;
}
