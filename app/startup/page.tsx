"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaPlayCircle,
  FaBook,
  FaClock,
  FaUsers,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

// --- 1. Sub-Component: Landing (Hero Section) ---

export function Landing() {
  // Animation variants
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const scrollToForm = () => {
    const formSection = document.getElementById("demo-form");
    if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={container}
      // *** MODIFICATION 1: Changed background to white with shadow, removed image/overlay ***
      className="relative bg-white shadow-xl min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-gray-900 overflow-hidden"
    >
      {/* Removed Gradient Overlay and Floating Glow Effect */}

      {/* Content */}
      <motion.div
        variants={container}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl gap-8"
      >
        {/* Badge */}
        <motion.p
          variants={item}
          className="flex items-center gap-2 rounded-full px-6 py-2 text-sm font-semibold text-yellow-800 bg-yellow-100 border border-yellow-400/30 shadow-md"
        >
          <FaBook className="text-yellow-600 animate-pulse" />
          **100+ Students Trained | 15+ Workshops Delivered**
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight text-gray-900" // text-gray-900 for visibility
        >
          Learn <span className="text-blue-600 drop-shadow-lg">React</span> &{" "}
          <span className="text-indigo-600 drop-shadow-lg">JavaScript</span>{" "}
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent animate-gradient">
            1-to-1 from a Real Developer
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed" // text-gray-600 for visibility
        >
          Master modern web development with{" "}
          <span className="text-blue-600 font-semibold">
            personalized mentorship
          </span>
          . From beginner to advanced, I’ll guide you step-by-step with real
          projects and career-ready skills.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-6 mt-4"
        >
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
            }}
            whileTap={{ scale: 0.96 }}
            onClick={scrollToForm}
            className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            <FaRocket className="text-lg" />
            Book Free Demo
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 20px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-8 py-3 rounded-2xl border border-gray-300 bg-gray-50 hover:bg-gray-100 transition-all duration-300 font-semibold text-gray-800"
          >
            <FaPlayCircle className="text-lg text-blue-600" />
            View Course
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}

// --- 2. Sub-Component: CoursesPricing (Course Options) ---
const courses = [
  {
    level: "All Levels",
    title: "1-to-1 Personal Mentorship",
    popular: true,
    desc: "Completely personalized learning experience tailored to your goals",
    duration: "Flexible",
    max: "1",
    features: [
      "Personalized curriculum",
      "Flexible scheduling",
      "Live coding sessions",
      "Code reviews & feedback",
      "Career guidance",
      "Lifetime support",
    ],
    button: "Enroll Now",
  },
  {
    level: "Beginner",
    title: "Beginner to Advanced React",
    desc: "Master React from fundamentals to advanced concepts",
    duration: "12 weeks",
    max: "Max 4",
    features: [
      "React fundamentals",
      "Hooks & State Management",
      "React Router",
      "API Integration",
      "Real-world projects",
      "Recorded sessions",
    ],
    button: "Enroll Now",
  },
  {
    level: "Intermediate",
    title: "Full-Stack Development Path",
    desc: "Become a complete full-stack developer",
    duration: "16 weeks",
    max: "Max 4",
    features: [
      "Frontend: React + TypeScript",
      "Backend: Node.js",
      "Database: MongoDB/PostgreSQL",
      "Authentication & Security",
      "Deployment & DevOps",
      "Portfolio projects",
    ],
    button: "Enroll Now",
  },
];

const CoursesPricing = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("demo-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="font-bold text-4xl mb-3">
          Choose the learning path that fits your goals
        </h1>
        <p className="text-gray-600">
          Learn web development the practical way — with real projects and
          mentorship.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition p-8 flex flex-col ${
              course.popular ? "border-blue-500" : ""
            }`}
          >
            {course.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
                Most Popular
              </div>
            )}

            <p className="text-sm text-gray-500 mb-2">{course.level}</p>
            <h2 className="text-2xl font-semibold mb-3">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.desc}</p>

            <div className="flex items-center text-gray-600 gap-4 mb-6">
              <div className="flex items-center gap-1">
                <FaClock size={16} />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaUsers size={16} />
                <span>{course.max}</span>
              </div>
            </div>

            <ul className="space-y-2 mb-6">
              {course.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-blue-600" size={18} />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className="mt-auto bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              onClick={scrollToForm}
            >
              {course.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- 3. Sub-Component: StudentSuccessStories (Testimonials) ---
const testimonials = [
  {
    quote:
      "Best investment in my career! Went from zero coding knowledge to landing my first job as a React developer in just 6 months. The mentorship was incredibly personalized.",
    name: "Priya Sharma",
    title: "Frontend Developer at TCS",
  },
  {
    quote:
      "The practical approach to teaching made all the difference. Every concept was explained with real-world examples. Now I'm confidently taking on freelance projects.",
    name: "Rahul Kumar",
    title: "Freelance Developer",
  },
  {
    quote:
      "Workshop sessions at our college were amazing! Clear explanations, hands-on practice, and patient guidance. Highly recommend for anyone serious about web development.",
    name: "Anjali Verma",
    title: "Engineering Student",
  },
];

const TestimonialCard = ({ quote, name, title }) => {
  // Function to render 5 gold stars
  const renderStars = () => {
    return (
      <div className="flex text-yellow-500 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="h-5 w-5" />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 h-full flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
      <div>
        {renderStars()}
        <p className="text-gray-700 text-lg italic mb-6">"{quote}"</p>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <p className="font-semibold text-gray-900 text-lg">{name}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
};

function StudentSuccessStories() {
  return (
    <section className="py-20 md:py-28 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading Section */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
          Student Success Stories
        </h1>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Don't just take my word for it - hear from students who've transformed
          their careers
        </p>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={index}
              quote={t.quote}
              name={t.name}
              title={t.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 4. Sub-Component: PricingSection (Pricing Plans) ---
const pricingPlans = [
  {
    title: "Demo Class",
    subtitle: "Try before you commit",
    price: "Free",
    period: "",
    features: [
      "1 hour session",
      "Course overview",
      "Learning path discussion",
      "Q&A session",
      "No obligations",
    ],
    buttonText: "Book Free Demo",
    highlight: false,
  },
  {
    title: "1-to-1 Mentorship",
    subtitle: "Complete personalized attention",
    price: "₹8,999",
    period: "/per month",
    features: [
      "8 sessions per month",
      "Flexible scheduling",
      "Personalized curriculum",
      "Code reviews",
      "Lifetime support",
      "Career guidance",
      "Portfolio building",
    ],
    buttonText: "Get Started",
    highlight: true,
  },
  {
    title: "Small Group Batch",
    subtitle: "Learn with peers (max 4 students)",
    price: "₹4,999",
    period: "/per month",
    features: [
      "12 sessions per month",
      "Fixed schedule",
      "Structured curriculum",
      "Group projects",
      "Recorded sessions",
      "Community support",
      "Certificate on completion",
    ],
    buttonText: "Join Batch",
    highlight: false,
  },
];

const PricingSection = () => {
  const handleClickk = () => {
    const formSection = document.getElementById("demo-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="font-bold text-4xl mb-3 text-blue-800">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-600">
          Choose a plan that works for your learning style and budget
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white border rounded-2xl shadow-sm hover:shadow-xl transition p-8 flex flex-col ${
              plan.highlight ? "border-blue-500" : "border-gray-200"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
                Best Value
              </div>
            )}

            <h2 className="text-xl font-semibold mb-1 text-gray-800">
              {plan.title}
            </h2>
            <p className="text-gray-500 mb-4">{plan.subtitle}</p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">
                {plan.price}
              </span>
              <span className="text-gray-500">{plan.period}</span>
            </div>

            <ul className="space-y-2 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-blue-600" size={16} />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-auto py-3 rounded-md text-center font-medium transition ${
                plan.highlight
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border border-gray-400 text-gray-700 hover:bg-gray-100"
              }`}
              onClick={handleClickk}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center mt-12 text-gray-600 text-sm">
        <p>
          💡 **Flexible payment options available** — EMI, monthly
          installments, or full payment.
        </p>
        <p className="mt-2">
          All prices are in **Indian Rupees (INR)**. International
          students, please contact for pricing.
        </p>
      </div>
    </section>
  );
};

// --- 5. Sub-Component: DemoForm (Contact Form) ---
const DemoForm = () => {
  const [contact, setContact] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const res = Object.fromEntries(formData.entries());
    setContact(res);
    console.log(res);

    // *** MODIFICATION 2: API call enabled (uncommented) ***
    try {
      const data = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(res),
      });

      const result = await data.json();
      if (result.success) {
        console.log("✅ Email sent successfully");
        alert("Thank you! Your demo request has been sent.");
      } else {
        console.log("❌ Email sending failed");
        alert("Failed to send request. Please try WhatsApp or call.");
      }
    } catch (error) {
      console.error("Error while sending data:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleClick = () => {
    const message = encodeURIComponent(
      "Hi, I'm interested in your demo class!"
    );
    // Assumes the WhatsApp number +917618550475 is correct.
    window.open(`https://wa.me/917618550475?text=${message}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-3">
          {/* FORM SECTION */}
          <section id="demo-form" className="md:col-span-2 p-8 bg-white">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
              Ready To Start Learning? 🚀
            </h1>
            <p className="text-gray-600 mb-6">
              Book your **free demo class** or get in touch for any
              questions.
            </p>

            <form
              className="flex flex-col gap-5"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium mb-1 text-gray-700"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-medium mb-1 text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="number"
                    className="block font-medium mb-1 text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    placeholder="+91 8978675643"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="interested"
                  className="block font-medium mb-1 text-gray-700"
                >
                  Select a Course
                </label>
                <select
                  name="interested"
                  id="interested"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                >
                  <option value="">Choose a course</option>
                  <option value="1 to 1 Mentorship">1 to 1 Mentorship</option>
                  <option value="Beginner to Advanced React">
                    Beginner to Advanced React
                  </option>
                  <option value="Full-Stack Development">
                    Full-Stack Development
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-medium mb-1 text-gray-700"
                >
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell me about your goals and experience"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition"
              >
                Submit
              </button>
            </form>
          </section>

          {/* QUICK CONTACT */}
          <section
            id="quick-contact"
            className="bg-gradient-to-br from-indigo-50 to-blue-100 p-8 flex flex-col justify-center items-center text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Quick Connect 💬
            </h2>
            <p className="text-gray-600 mb-6">
              Prefer chatting instantly? Reach out on WhatsApp!
            </p>

            <button
              id="whatsapp-button"
              onClick={handleClick}
              className="flex items-center justify-center gap-2 w-full md:w-auto bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 shadow-md transition"
            >
              💬 Message on WhatsApp
            </button>
          </section>
        </div>
      </div>
    </main>
  );
};

// --- 6. Main Page Component (Default Export) ---
export default function MergedPage() {
  return (
    <div className="min-h-screen">
      <Landing />
      <CoursesPricing />
      <StudentSuccessStories />
      <PricingSection />
      <DemoForm />
    </div>
  );
}