import type { Metadata } from "next";
import { Suspense } from "react";

// Components
import Loading from "@/components/ui/loading";
import Blog from "@/components/pages/blogs";
import { getBlogs } from "@/lib/server-actions/blog";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s | Rahul Gajbhiye",
  },
};

export default async function BlogPage() {
  const { status, data } = await getBlogs();
  
  if (status === 200 && data) {
    return (
      <Suspense fallback={<Loading />}>
        <Blog blogsData={data} />
      </Suspense>
    );
  }
}
