"use client";
import React from "react";
import { service } from "../../../data/Service";
import Link from "next/link";
import { motion } from "framer-motion";

const HomepageServices = () => {
  // 1. Defined clear 'hidden' and 'show' states for the container
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Faster, snappier feel
      },
    },
  };

  // 2. Matching 'hidden' and 'show' states for the cards
  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main className="relative py-20 overflow-hidden">
      <div className="relative flex justify-center items-center">
        <span className="absolute text-[90px] md:text-[140px] lg:text-[180px] font-extrabold tracking-widest text-gray-200 dark:text-gray-800 opacity-40 select-none pointer-events-none">
          SERVICES
        </span>

        <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 text-transparent bg-clip-text z-10 ">
          Services
        </h2>
      </div>

      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }} // Added margin so it triggers slightly before coming into view
        className="py-8 mt-22 grid grid-cols-1 md:grid-cols-4 max-w-5xl mx-auto gap-6 px-4"
      >
        {/* Intro Card */}
        <motion.div
          variants={cardVariants}
          className="relative w-60 h-80 flex flex-col items-center justify-center px-4 overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 bg-[url('/profil.avif')] bg-cover bg-top"></div>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div className="relative z-10 text-white">
            <p className="font-bold text-lg">
              Best of <br /> Our Features
            </p>
            <Link
              href={"/service"}
              className="mt-3 inline-block px-3 py-2 border border-white font-bold tracking-wide hover:bg-white hover:text-black transition"
            >
              See all Services
            </Link>
          </div>
        </motion.div>

        {/* Dynamic Service Cards */}
        {service.map((serv, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="w-60 h-80 [perspective:1000px]"
          >
            <motion.div
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.7 }}
              className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
            >
              {/* FRONT */}
              <div
                className="absolute inset-0 rounded-2xl p-6 
        bg-white/80 dark:bg-gray-900/80 
        backdrop-blur-xl
        border border-gray-200/50 dark:border-gray-700/50
        shadow-xl
        flex flex-col items-center justify-center
        [backface-visibility:hidden]"
              >
                <h3
                  className="text-xl font-bold text-center 
          bg-gradient-to-r from-black to-gray-600 
          dark:from-white dark:to-gray-400 
          bg-clip-text text-transparent"
                >
                  {serv.title[0]} <br />
                  {serv.title[1]}
                </h3>

                <p className="text-sm mt-3 text-center text-gray-600 dark:text-gray-400">
                  {serv.excerpt}
                </p>
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 rounded-2xl p-6
        bg-gradient-to-br from-gray-900 to-black 
        dark:from-white dark:to-gray-200
        shadow-2xl
        flex items-center justify-center
        [transform:rotateY(180deg)]
        [backface-visibility:hidden]"
              >
                <p className="text-sm text-center text-white dark:text-black leading-relaxed">
                  {serv.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
};

export default HomepageServices;
