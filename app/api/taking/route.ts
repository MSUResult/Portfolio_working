import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";

// GET /api/blogs → get all blogs
export async function GET() {
  try {
    await dbConnect();

    const blogs = await Blog.find(); // Fetch all blogs

    return NextResponse.json({
      success: true,
      count: blogs.length,         
      blogs,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
