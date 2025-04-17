"use client";

import { Suspense, useRef } from "react";
import { useRouter } from "next/navigation";

import { MDXEditorMethods } from "@mdxeditor/editor";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import FcForwardRefEditor from "@/components/pages/admin/ui/blog/mdx-editor";
import LoadingSpinner from "@/components/ui/custom/Loading";
import { postBlog, putBlog, deleteBlog } from "@/lib/server-actions/blog";

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
  blogData: IBlog;
}

const BlogEditor = ({ blogId, blogData }: Props) => {
  // MDX Ref
  const ref = useRef<MDXEditorMethods>(null);

  // Utility
  const { toast } = useToast();
  const router = useRouter();

  const handleSaveUpdate = async () => {
    // Get the updated data
    const blogArticle = ref.current?.getMarkdown();

    if (blogArticle) {
      if (blogId === "new-blog") {
        // New blog
        const response = await postBlog(blogArticle);
        toast({
          description: response.message,
        });
      } else {
        // Update blog
        const response = await putBlog(blogArticle);
        toast({
          description: response.message,
        });
      }
      router.push("/admin/blog");
      router.refresh();
    }
  };

  const handleDelete = async () => {
    if (blogId) {
      const response = await deleteBlog(blogId);
      toast({
        description: response.message,
      });
      router.push("/admin/blog");
      router.refresh();
    }
  };

  return (
    <Suspense fallback={<LoadingSpinner />}>
      {/* MDX Editor*/}
      <FcForwardRefEditor
        ref={ref}
        markdown={blogData.article}
        contentEditableClassName=" "
        className=""
      />
      <div className="flex flex-row gap-4">
        {/* Save blog */}
        <Button onClick={handleSaveUpdate}>Save</Button>
        {/* Delete blog */}
        <Dialog>
          <DialogTrigger className="h-9 rounded-md bg-primary px-4 text-white">
            Delete
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete the
                blog from the Database.
              </DialogDescription>
              <Button onClick={handleDelete}>Sure</Button>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </Suspense>
  );
};

export default BlogEditor;
