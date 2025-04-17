import React from "react";
import Image from "next/image";
import Link from "next/link";
import TimeAgo from "@/components/ui/time-ago";

import { Cabin } from "next/font/google";

const cabin = Cabin({ subsets: ["latin"] });
import { columns } from "./ui/columns";

import { IBlog } from "@/types";
import blogImage from "@/constants/assets/default-blog-image.svg";
import DataTable from "./ui/data-table";

interface BlogsProps {
  blogsData: IBlog[];
  base?: string;
}

const Blogs: React.FC<BlogsProps> = ({ blogsData, base }) => {
  return (
    // <section className="flex min-h-custom flex-col items-center">
    //       <div className="flex w-11/12 flex-col gap-4 pt-10 md:w-7/12">
    //   {blogsData.map((blogData) => {
    //     return (
    //       <React.Fragment key={blogData.id}>
    //         <Link
    //           className="flex flex-col justify-start gap-4 md:p-4"
    //           href={`${base === "admin" ? "/admin/blog" : "/blog"}/${blogData.blogId}`}
    //         >
    //           {/* Meta */}
    //           <span className="text-sm md:text-base md:font-normal">
    //             {blogData.category}
    //           </span>
    //           {/* Image & Title */}
    //           <div className="flex flex-row items-center justify-between gap-4 md:gap-8">
    //             <div
    //               className={`w-7/12 text-2xl font-bold text-foreground md:text-4xl ${cabin.className}`}
    //             >
    //               {blogData.title}
    //             </div>
    //             <div className="flex aspect-video h-16 w-4/12 justify-center md:h-28">
    //               {blogData.imageUrl === "blank" ? (
    //                 <Image
    //                   src={blogImage}
    //                   alt={blogData.title ?? "rahul gajbhiye blog's"}
    //                   className="h-full"
    //                 />
    //               ) : (
    //                 <img
    //                   src={blogData.imageUrl ?? ""}
    //                   alt={blogData.title ?? "rahul gajbhiye blog's"}
    //                   className="h-full"
    //                 />
    //               )}
    //             </div>
    //           </div>
    //           {/* Time */}
    //           <span className="text-sm md:text-base md:font-normal">
    //             <TimeAgo date={`${blogData.createdAt}`} />
    //           </span>
    //         </Link>
    //         {/* Breaker */}
    //         <div className="h-px w-full bg-neutral-200"></div>
    //       </React.Fragment>
    //     );
    //   })}
    // </div>
    //     </section>

    <>
      <DataTable data={blogsData} columns={columns} />
    </>
  );
};

export default Blogs;
