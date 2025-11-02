"use client";

import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      console.log("📡 Fetching blogs...");
      try {
        const res = await fetch("/api/taking");
        const data = await res.json();

        console.log("✅ API response:", data);

        if (data.success) {
          setContent(data.blogs);
          console.log("📦 Blogs loaded:", data.blogs);
        } else {
          console.error("❌ API returned success=false:", data);
        }
      } catch (error) {
        console.error("🚨 Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // ✨ Helper: shorten long text safely
  const truncateText = (text = "", limit = 12) => {
    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  };

  console.log("🧠 Rendered content:", content);

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          {...fadeInUp}
        >
          Latest Blog Posts
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {content.slice(0, 6).map((blog, index) => (
            <motion.article
              key={index}
              className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              {/* 🧩 Blog Title */}
              <Link href={`/blogs/${blog.post.metadata.slug}`}>
                <motion.h3
                  className="text-xl font-semibold mb-2 hover:text-primary transition-colors line-clamp-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {truncateText(blog.post.metadata.title, 10)}
                </motion.h3>
              </Link>

              {/* 🧾 Blog Description / Excerpt */}
              <motion.p
                className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {truncateText(
                  blog.post.metadata.summary ||
                    blog.excerpt ||
                    "No description available.",
                  20
                )}
              </motion.p>

              {/* 📅 Meta Info */}
              <motion.div
                className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.span
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCalendarAlt className="mr-2" />
                  {new Date(blog.post.metadata.date).toLocaleDateString()}
                </motion.span>

                <motion.span
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaClock className="mr-2" />
                  {blog.post.metadata.readTimeMinutes} min read
                </motion.span>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/blogs"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View All Posts
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
