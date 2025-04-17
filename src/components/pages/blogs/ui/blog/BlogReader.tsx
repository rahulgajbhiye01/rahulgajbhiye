import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

import { Cabin } from "next/font/google";

const cabin = Cabin({ subsets: ["latin"] });

// Plugins Import
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import TimeAgo from "@/components/ui/time-ago";

// Components Import
import { components } from "@/components/pages/admin/ui/blog/components";
import blogImage from "@/constants/assets/default-blog-image.svg";
import { IBlog } from "../../types";

interface Props {
  blogData: IBlog;
}

const BlogReader = ({ blogData }: Props) => {
  return (
    <div className="prose flex flex-col items-start pt-10">
      <div className="flex w-full flex-col gap-10">
        {/* Title */}
        <div
          className={`Cabin relative text-3xl font-bold text-foreground md:text-5xl ${cabin.className}`}
        >
          {blogData.title}
        </div>
        {/* Meta */}
        <div className="flex flex-col gap-2">
          <div className="h-px w-full bg-neutral-100"></div>
          <div className="flex flex-row justify-start gap-4 px-2 md:ml-0.5">
            <span className="font-medium">{blogData.category}</span>
            <span className="font-normal">
              <TimeAgo date={`${blogData.createdAt}`} />
            </span>
          </div>
          <div className="h-px w-full bg-neutral-100"></div>
        </div>
        {/* Image */}
        <div className="aspect-video h-min">
          {blogData.imageUrl === "blank" ? (
            <Image
              src={blogImage}
              alt={blogData.title ?? "rahul gajbhiye blog's"}
              className="w-full"
            />
          ) : (
            <img
              src={blogData.imageUrl ?? ""}
              alt={blogData.title ?? "rahul gajbhiye blog's"}
              className="w-full"
            />
          )}
        </div>
      </div>
      <article className="markdown">
        <MDXRemote
          source={blogData.article}
          components={components}
          options={{
            // made available to the arguments of any custom MDX component
            scope: {},
            // MDX's available options, see the MDX docs for more info.
            // https://mdxjs.com/packages/mdx/#compilefile-options
            mdxOptions: {
              remarkPlugins: [
                remarkGfm,
                remarkDirective,
                remarkDirectiveRehype,
                remarkToc,
              ],
              rehypePlugins: [
                rehypePrettyCode,
                rehypeAutolinkHeadings,
                rehypeSlug,
              ],
              format: "mdx",
            },
            // Indicates whether or not to parse the frontmatter from the MDX source
            parseFrontmatter: true,
          }}
        />
      </article>
    </div>
  );
};

export default BlogReader;
