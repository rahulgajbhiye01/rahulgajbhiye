"use server";

import { db } from "@/lib/db";
import matter from "gray-matter";
import { stringFormatter } from "@/lib/utils";

export const getBlogs = async () => {
  try {
    const blogsData = await db.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return {
      status: 200,
      message: "Blogs fetched successfully",
      data: blogsData,
    };
  } catch (error) {
    console.error("Prisma error in getBlogsData:", error);
    // Handle generic errors
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};

export const getBlog = async (blogId: string) => {
  try {
    const blogData = await db.blog.findFirstOrThrow({
      where: {
        blogId: blogId,
      },
    });

    return {
      status: 200,
      message: "Blog fetched successfully",
      data: blogData,
    };
  } catch (error) {
    console.error("Prisma error in getBlogData:", error);
    // Handle generic errors
    return {
      status: 500,
      error: "Internal server error",
    };
  }
};

export const postBlog = async (blogArticle: string) => {
  const blogMetadata = matter(blogArticle);
  const { data } = blogMetadata;
  const blogId = stringFormatter(data.title) || "";

  try {
    await db.blog.create({
      data: {
        blogId: blogId,
        author: data["author"],
        category: data["category"],
        keywords: data["keywords"],
        title: data["title"],
        imageUrl: data["imageUrl"],
        article: blogArticle,
      },
    });

    return {
      status: 200,
      message: "Blog created successfully",
    };
  } catch (error) {
    console.error("Prisma error in getBlogData:", error);
    // Handle generic errors
    return {
      status: 500,
      error: "Internal server error",
    };
  }
};

export const putBlog = async (blogArticle: string) => {
  const blogMetadata = matter(blogArticle);
  const { data } = blogMetadata;
  const blogId = stringFormatter(data.title) || "";

  try {
    await db.blog.update({
      where: {
        blogId: blogId,
      },
      data: {
        author: data["author"],
        category: data["category"],
        keywords: data["keywords"],
        title: data["title"],
        imageUrl: data["imageUrl"],
        article: blogArticle,
      },
    });
    return {
      status: 200,
      message: "Blog updated successfully",
    };
  } catch (error) {
    console.error("Prisma error in putBlogData:", error);
    // Handle generic errors
    return {
      status: 500,
      error: "Internal server error",
    };
  }
};

export const deleteBlog = async (blogId: string) => {
  try {
    await db.blog.delete({
      where: {
        blogId: blogId,
      },
    });
    return {
      status: 200,
      message: "Blog deleted successfully",
    };
  } catch (error) {
    console.error("Prisma error in deleteBlogData:", error);
    // Handle generic errors
    return {
      status: 500,
      error: "Internal server error",
    };
  }
};
