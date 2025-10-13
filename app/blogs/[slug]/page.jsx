// CORRECTED PAGE COMPONENT ✅
"use client";

// 1. Import 'useParams' from next/navigation
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

// 2. Remove 'params' from the component's props
const SingleBlog = () => {
  // 3. Get the slug using the hook. This is the fix!
  const { slug } = useParams();

  const [curData, setCurData] = useState(null);
  const [loading, setLoading] = useState(true);

  // This useEffect and fetch logic is perfect and does NOT need to change.
  useEffect(() => {
    // Make sure slug is available before fetching
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/taking/${slug}`);
        const data = await res.json();
        if (data.success) {
          setCurData(data.blog);
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white">
        <p>Loading...</p>
      </main>
    );
  }

  if (!curData) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white">
        <p>Blog not found.</p>
      </main>
    );
  }

  const { metadata, body } = curData.post;

  // The rest of your component (animations and JSX) stays EXACTLY THE SAME.
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0c1a2b] to-[#0a0a0f] text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center justify-center flex-col gap-4 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-4 py-1 rounded-full text-sm font-medium shadow-md backdrop-blur"
          >
            {metadata.category}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mt-2 max-w-4xl"
          >
            {metadata.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-400 mt-4">
            {new Date(metadata.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            • {metadata.readTimeMinutes} min read
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="w-full max-w-6xl my-8 md:my-12"
          >
            <Image
              src={metadata.featuredImage.url}
              alt={metadata.featuredImage.altText || ""}
              width={1200}
              height={600}
              className="rounded-xl w-full object-cover aspect-video shadow-lg hover:shadow-cyan-500/30 transition duration-500"
              priority
            />
          </motion.div>
        </motion.section>
        <section className="w-full flex flex-col md:flex-row gap-12 lg:gap-16 py-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="w-full md:w-2/3 flex flex-col gap-10"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {metadata.summary}
            </p>
            {body.map((cur, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
                  {cur.heading}
                </h2>
                <div className="space-y-5 text-gray-300 leading-loose text-base">
                  {cur.content.map((te, inde) => (
                    <p key={inde}>{te.text}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default SingleBlog;
