// CORRECTED API ROUTE ✅
import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";

// The only change is here: instead of (request, context), it's (request, { params })
export async function GET(request, { params }) {
  try {
    await dbConnect();

    // Now you get the slug directly from params
    const { slug } = params;

    const blog = await Blog.findOne({ "post.metadata.slug": slug });

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}