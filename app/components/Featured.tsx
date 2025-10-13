"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Featured = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = (slug) => {
    router.push(`/Blogs/${slug}`);
  };

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/taking");
        const data = await res.json();
        if (data.success) {
          setBlogs(data.blogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white">
        <p>Loading blogs...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0C0C0C] py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Posts
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Hand-picked insights and guides to boost your real estate journey
          </p>
        </div>

        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogs.map((cur) => (
            <motion.div
              key={cur._id}
              className="bg-[#111827] rounded-xl overflow-hidden cursor-pointer group border border-gray-800/50 hover:border-cyan-400/50 transition-colors duration-300"
              onClick={() => handleClick(cur.post.metadata.slug)}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="overflow-hidden">
                <img
                  src={cur.post.metadata.featuredImage.url}
                  alt={cur.post.metadata.title}
                  className="w-full h-40 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>

              <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-3">
                <p className="text-cyan-400 font-semibold text-xs sm:text-sm">
                  {cur.post.metadata.category}
                </p>
                <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                  {cur.post.metadata.title}
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {cur.post.metadata.date} &bull;{" "}
                  {cur.post.metadata.readTimeMinutes} min read
                </p>
              </div>
            </motion.div>
          ))}
        </motion.section>

        <div className="mt-12 sm:mt-16 text-center">
          <button className="w-full sm:w-auto text-white font-semibold py-3 px-6 sm:px-8 bg-transparent border-2 border-gray-700 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 text-sm sm:text-base">
            Explore More Articles
          </button>
        </div>
      </div>
    </main>
  );
};

export default Featured;
