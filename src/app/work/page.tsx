import { Metadata } from 'next';
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "http://localhost:3000",
  ),
  title: {
    default: "Work | Efaz",
    template: "%s | Efaz",
  },
  description:
    "A collection of my work, projects, and experiences.",
};

function page() {
  return (
    <div>page</div>
  )
}

export default page