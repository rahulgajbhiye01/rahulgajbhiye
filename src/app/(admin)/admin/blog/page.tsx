import { Suspense } from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

import Loading from "@/components/ui/custom/Loading";
import Blog from "@/components/pages/blogs";
import { getBlogs } from "@/lib/server-actions/blog";

export const dynamic = "force-dynamic";

export default async function DashboardBlogPage() {
  const response = (await getBlogs()) || [];

  if (response.status === 200 && response.data) {
    return (
      <Suspense fallback={<Loading />}>
        <Link
          href={`/admin/blog/new-blog`}
          className="m-14 flex items-center justify-center"
        >
          <div className="flex flex-row gap-4">
            <FaPlus className="size-10" />
            <div className="text-4xl">New Blog</div>
          </div>
        </Link>
        <Blog blogsData={response.data} base="admin" />
      </Suspense>
    );
  }
}
