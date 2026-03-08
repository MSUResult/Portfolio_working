import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import Blogs from "./Blogs";

export const revalidate = 604800;

async function getBlogs() {
  await dbConnect();

  const blogs = await Blog.find({}).sort({ createdAt: -1 }).limit(6).lean();

  // ✅ Convert Mongo stuff to plain JS
  return blogs.map((blog: any) => ({
    ...blog,
    _id: blog._id.toString(),
    createdAt: blog.createdAt?.toISOString(),
    updatedAt: blog.updatedAt?.toISOString(),
    post: {
      ...blog.post,
      metadata: {
        ...blog.post.metadata,
        date: blog.post.metadata.date,
      },
    },
  }));
}

export default async function BlogsWrapper() {
  const blogs = await getBlogs();
  return <Blogs content={blogs} />;
}
