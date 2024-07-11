"use client";

import FcForwardRefEditor from "@/components/pages/blog-editor/mdx-editor";
import { updateBlog, createBlog, deleteBlog } from "@/lib/server/actions/blog";
import { useEffect, useState, useRef } from "react";
import { useBlogContext } from "@/contexts/blogContext";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { IBlog } from "@/types";

interface Props {
  blogId: string;
  rawBlogData: IBlog[];
}

const BlogEditor = ({ blogId, rawBlogData }: Props) => {
  // Blog Context
  const { blogUpdatedData, saveBlogArticleData } = useBlogContext();

  // To update blog content
  const [blogContent, setBlogContent] = useState(rawBlogData[0].article);

  // Utility
  const isMounted = useRef(false);
  const { toast } = useToast();

  const router = useRouter();

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    saveBlogArticleData({
      article: blogContent,
    });
  }, [blogContent]);

  const handleChange = (e: string) => {
    if (isMounted.current) {
      setBlogContent(e);
    }
  };

  return (
    <div className="prose flex flex-col items-start gap-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{rawBlogData[0].indexedTitle}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex w-screen flex-col gap-4 px-4 md:w-full">
        <div className="flex flex-row gap-4">
          {/* Blog save button*/}
          <Button
            onClick={async () => {
              if (blogId !== "new-blog") {
                const res = await updateBlog(blogId, blogUpdatedData);
                toast({
                  description: res.message,
                });
                router.refresh();
              } else {
                const res = await createBlog(blogUpdatedData);
                toast({
                  description: res.message,
                });
                router.push("/dashboard");
                router.refresh();
              }
            }}
          >
            Save
          </Button>
          {/* Blog delete button*/}
          <Dialog>
            <DialogTrigger className="h-9 rounded-md bg-primary px-4 text-white">
              Delete
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete the
                  blog from the DB.
                </DialogDescription>
                <Button
                  onClick={async () => {
                    if (blogId) {
                      const res = await deleteBlog(blogId);
                      toast({
                        description: res.message,
                      });
                      router.push("/dashboard");
                      router.refresh();
                    }
                  }}
                >
                  Sure
                </Button>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <FcForwardRefEditor
          markdown={`${rawBlogData[0].article}`}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default BlogEditor;
