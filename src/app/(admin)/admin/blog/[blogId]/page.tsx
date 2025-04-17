import { notFound } from "next/navigation";
import BlogEditor from "@/components/pages/admin/ui/blog";
import { getBlog } from "@/lib/server-actions/blog";

interface Params {
  params: { blogId: string };
}

const newBlogData = {
  author: "",
  blogId: "",
  category: "",
  imageUrl: "",
  keywords: "",
  title: "",
  article: `---
author: 'Rahul Gajbhiye'
category: 'blank'
keywords: 'blank'
title: 'blank'
imageUrl: 'blank'
---
New Blog`,
};

export default async function BlogPage({ params: { blogId } }: Params) {
  // New Blog
  if (blogId === "new-blog") {
    return <BlogEditor blogId={blogId} blogData={newBlogData} />;
  }
  // Else fetch blog data
  const response = await getBlog(blogId);

  if (response.status === 200 && response.data) {
    return <BlogEditor blogId={blogId} blogData={response.data} />;
  } else {
    notFound();
  }
}
