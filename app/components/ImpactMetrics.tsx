"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowUp, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";

// REPLACE THESE WITH YOUR EDITED SCREENSHOTS
const moneyImg = "/images/adsense-roi.png";
const trafficImg = "/images/analytics-graph.png";
const speedImg = "/images/web-vitals.png";

const ImpactDashboard = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white flex flex-col justify-center items-center py-12 px-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 pointer-events-none" />

      {/* HEADER */}
      <div className="text-center mb-10 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 text-xs font-bold mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Live Data
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
          I Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Websites
          </span>{" "}
          That Turn <br className="hidden md:block" />
          Traffic Into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            Paying Clients.
          </span>
        </h2>
      </div>

      {/* THE BENTO GRID - FIXED FOR MOBILE */}
      {/* h-auto on mobile allows it to grow. md:h-[600px] fixes it on desktop. */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-7xl relative z-10 h-auto md:h-[600px] pb-10">
        
        {/* IMAGE 1: THE MONEY (ROI) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7 bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden flex flex-col group hover:border-green-500/50 transition-all duration-500 shadow-2xl min-h-[450px] md:min-h-0"
        >
          <div className="p-6 pb-2 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 text-green-400 font-bold mb-1 text-sm uppercase tracking-wider">
                <FaMoneyBillWave /> <span>Ad Performance</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Profitable Campaigns
              </h3>
            </div>
            <div className="text-right">
              <span className="text-3xl md:text-4xl font-bold text-white block">
                +240%
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">
                ROAS Return
              </span>
            </div>
          </div>

          <div className="relative w-full flex-grow mt-4 min-h-[250px]">
            <Image
              src="/adsence.png"
              alt="AdSense ROI"
              fill
              className="object-contain object-center hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* RIGHT COLUMN STACK */}
        <div className="md:col-span-5 flex flex-col gap-6 h-auto md:h-full">
          
          {/* IMAGE 2: SPEED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden flex flex-col group hover:border-blue-500/50 transition-all duration-500 relative min-h-[300px] md:min-h-0"
          >
            <div className="absolute top-6 left-6 z-10 bg-gray-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-gray-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                <FaCheckCircle /> <span>Core Web Vitals</span>
              </div>
            </div>

            <div className="relative w-full h-full min-h-[200px]">
              <Image
                src="/webvitals.png"
                alt="Lighthouse Score"
                fill
                className="object-contain object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* IMAGE 3: TRAFFIC */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden flex flex-col group hover:border-purple-500/50 transition-all duration-500 relative min-h-[300px] md:min-h-0"
          >
            <div className="absolute top-6 left-6 z-10 bg-gray-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-gray-700">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                <FaArrowUp /> <span>Google Analytics Growth</span>
              </div>
            </div>

            <div className="relative w-full h-full min-h-[200px]">
              <Image
                src="/realpro.png"
                alt="Analytics Graph"
                fill
                className="object-contain object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;