"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "@/utils/animations";

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Startup Founder",
    feedback:
      "shivansh delivered a blazing fast landing page for our startup, complete with animations and mobile responsiveness. Highly recommended!",
    initials: "RV",
  },
  {
    name: "Sneha Patel",
    role: "College Peer",
    feedback:
      "He built a full portfolio site for me during finals week. Super fast, clean design, and helped me deploy on Vercel too!",
    initials: "SP",
  },
  {
    name: "Ahmed Khan",
    role: "Local Business Owner",
    feedback:
      "I needed a simple site for my tuition center and shivansh handled everything – SEO, design, and Google ranking setup!",
    initials: "AK",
  },
];

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="mb-16"
      {...fadeIn}
      transition={{ delay: 0.3 }}
    >
      <motion.h2 className="section-title text-center" {...fadeInUp}>
        Testimonials
      </motion.h2>
      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mt-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-300"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-primary">{t.name}</p>
                <p className="text-sm text-secondary">{t.role}</p>
              </div>
            </div>
            <p className="text-secondary leading-relaxed text-sm">
              {t.feedback}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
