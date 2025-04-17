import { Metadata } from "next";
import { getBlog } from "@/lib/server-actions/blog";

interface Params {
  params: { blogId: string };
}

// Dynamic metadata
export async function generateMetadata({
  params: { blogId },
}: Params): Promise<Metadata> {
  const blogData = await getBlog(blogId);
  if (blogData.data) {
    return {
      title: blogData.data.title,
      openGraph: {
        images: [{ url: blogData.data.imageUrl }],
      },
    };
  } else {
    return {
      title: "Blog not found",
    };
  }
}

export default function DashboardBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-custom flex-col items-center gap-4 md:justify-center">
      <div className="w-11/12 md:w-auto">{children}</div>
    </section>
  );
}
