import { MetadataRoute } from "next";
import { getBlogs } from "@/lib/server-actions/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogsData = await getBlogs();
  if (blogsData.data) {
    return [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
        changeFrequency: "daily",
        priority: 0.8,
      },
      {
        url: `https://store.rahulgajbhiye.com`,
        changeFrequency: "weekly",
        priority: 0.8,
      },
      ...blogsData.data.map((blog) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog.blogId}`,
      })),
    ];
  } else {
    return [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
        changeFrequency: "daily",
        priority: 0.8,
      },
      {
        url: `https://store.rahulgajbhiye.com`,
        changeFrequency: "weekly",
        priority: 0.8,
      },
    ];
  }
}
