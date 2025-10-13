"use client"; // This is crucial because it uses Framer Motion

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

// This component receives the data as props and handles the rendering and animations
const BlogContent = ({ metadata, body }) => {
  // Variants for animations
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
        {/* --- HEADER SECTION --- */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center justify-center flex-col gap-4 text-center"
        >
          {/* Category Badge */}
          <motion.p
            variants={fadeUp}
            className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-4 py-1 rounded-full text-sm font-medium shadow-md backdrop-blur"
          >
            {metadata.category}
          </motion.p>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mt-2 max-w-4xl"
          >
            {metadata.title}
          </motion.h1>

          {/* Date + Read time */}
          <motion.p variants={fadeUp} className="text-gray-400 mt-4">
            {metadata.date} &bull; {metadata.readTimeMinutes} min read
          </motion.p>

          {/* Featured Image */}
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

        {/* --- BODY + SIDEBAR --- */}
        <section className="w-full flex flex-col md:flex-row gap-12 lg:gap-16 py-4">
          {/* Main Content */}
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

          {/* Sidebar */}
          <motion.aside
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="w-full md:w-1/3"
          >
            <div className="sticky top-24 flex flex-col gap-8">
              {/* Newsletter Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-[#111827] to-[#1a1a2e] p-6 rounded-xl flex flex-col gap-4 shadow-md hover:shadow-cyan-500/20 transition-all duration-500"
              >
                <p className="font-bold text-lg text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Subscribe To Our Newsletter
                </p>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="px-4 py-2 bg-white/90 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-2 rounded-md transition-all duration-300 shadow-md">
                  Subscribe
                </button>
              </motion.div>

              {/* Share Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-[#111827] to-[#1a1a2e] p-6 rounded-xl flex flex-col gap-4 shadow-md hover:shadow-purple-500/20 transition-all duration-500"
              >
                <p className="font-bold text-white">Share It On:</p>
                <div className="flex items-center gap-4">
                  {[FaFacebookF, FaTwitter, FaLink].map((Icon, idx) => (
                    <motion.a
                      key={idx}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="bg-gray-700 p-3 rounded-full text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all"
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.aside>
        </section>
      </div>
    </main>
  );
};

export default BlogContent;