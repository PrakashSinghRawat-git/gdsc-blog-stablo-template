import { getAllAuthors } from "@/lib/sanity/client";
import About from "./about";

export default async function AboutPage() {
  const authors = await getAllAuthors();
  return <About authors={authors} />;
}

// export const revalidate = 60;
