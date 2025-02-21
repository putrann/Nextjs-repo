import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js",
  description: "Nextjs",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />   
      <Pricing />
      <HomeBlogSection posts={posts} />
    
    </main>
  );
}
