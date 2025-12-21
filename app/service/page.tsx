"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaLaptopCode,
  FaMobileAlt,
  FaGoogle,
  FaShoppingCart,
  FaCheckCircle,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";

// --- 1. Sub-Component: Landing (Hero Section) ---

export function Landing() {
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
    const formSection = document.getElementById("contact-form");
    if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={container}
      className="relative bg-white shadow-xl min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-gray-900 overflow-hidden"
    >
      <motion.div
        variants={container}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl gap-8"
      >
        {/* Badge - Changed for Trust */}
        <motion.p
          variants={item}
          className="flex items-center gap-2 rounded-full px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100 border border-blue-400/30 shadow-md"
        >
          <FaCheckCircle className="text-blue-600 animate-pulse" />
          Web Developer in Saharanpur | 100% Client Satisfaction**
        </motion.p>

        {/* Headline - Selling Services now */}
        <motion.h1
          variants={item}
          className="font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight text-gray-900"
        >
          Grow Your Business with a <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent animate-gradient">
            High-Performance Website
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
        >
          I build modern, fast, and mobile-friendly websites that help you{" "}
          <span className="text-blue-600 font-bold">get more customers</span> in
          Saharanpur & beyond. From simple portfolios to online stores.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-6 mt-4"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(37, 211, 102, 0.6)", // WhatsApp Green Glow
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() =>
              window.open(
                "https://wa.me/917618550475?text=I%20want%20to%20make%20a%20website",
                "_blank"
              )
            }
            className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-green-500 font-bold text-white shadow-lg hover:bg-green-600 transition-all duration-300"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={scrollToForm}
            className="flex items-center gap-2 px-8 py-3 rounded-2xl border border-gray-300 bg-gray-50 hover:bg-gray-100 transition-all duration-300 font-semibold text-gray-800"
          >
            <FaRocket className="text-lg text-blue-600" />
            Get a Quote
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}

// --- 2. Sub-Component: ServicesList (Was CoursesPricing) ---
// Changed to show WHAT you build
const services = [
  {
    category: "Best Seller",
    title: "Business Website",
    popular: true,
    desc: "Perfect for Schools, Hospitals, Showrooms, and Agencies.",
    time: "Delivered in 5 Days",
    items: [
      "5-7 Pages (Home, About, Services...)",
      "Mobile Friendly Design",
      "Contact Form with Email",
      "Google Map Integration",
      "Social Media Links",
      "1 Year Free Hosting Support",
    ],
    button: "Order Now",
  },
  {
    category: "E-Commerce",
    title: "Online Store (Shop)",
    desc: "Sell your products online anywhere in India.",
    time: "Delivered in 10 Days",
    items: [
      "Unlimited Products Listing",
      "Add to Cart & Checkout",
      "Admin Panel to Manage Orders",
      "Payment Gateway Integration",
      "WhatsApp Order System",
      "Inventory Management",
    ],
    button: "Start Selling",
  },
  {
    category: "Growth",
    title: "SEO & Digital Identity",
    desc: "Get your business ranked on Google Search.",
    time: "Monthly Service",
    items: [
      "Google My Business Setup",
      "Local SEO (Saharanpur Ranking)",
      "Keyword Optimization",
      "Fast Loading Speed Optimization",
      "Facebook/Instagram Ad Setup",
      "Monthly Performance Report",
    ],
    button: "Get Ranked",
  },
];

const ServicesList = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="font-bold text-4xl mb-3 text-gray-900">
          What kind of website do you need?
        </h1>
        <p className="text-gray-600">
          Tailored digital solutions for every business size.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition p-8 flex flex-col ${
              service.popular ? "border-blue-500 ring-1 ring-blue-500" : ""
            }`}
          >
            {service.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm px-4 py-1 rounded-full font-bold shadow-md">
                Most Popular
              </div>
            )}

            <p className="text-sm text-blue-600 font-bold mb-2 uppercase tracking-wide">
              {service.category}
            </p>
            <h2 className="text-2xl font-bold mb-3 text-gray-800">
              {service.title}
            </h2>
            <p className="text-gray-600 mb-4 h-12">{service.desc}</p>

            <div className="flex items-center text-gray-500 gap-2 mb-6 text-sm bg-gray-100 p-2 rounded-lg w-fit">
              <FaRocket />
              <span>{service.time}</span>
            </div>

            <ul className="space-y-3 mb-8">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <FaCheckCircle
                    className="text-green-500 mt-1 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button
              className="mt-auto bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition shadow-lg"
              onClick={scrollToForm}
            >
              {service.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- 3. Sub-Component: ClientTestimonials (Was StudentSuccessStories) ---
const testimonials = [
  {
    quote:
      "Shivansh built a fantastic website for my shop. My customers can now see my catalog online, and I get orders directly on WhatsApp. Highly professional!",
    name: "Amit Gupta",
    title: "Owner, Gupta Garments",
  },
  {
    quote:
      "I wanted a simple portfolio but got a premium design. The speed is amazing, and it looks great on mobile phones. Best developer in Saharanpur.",
    name: "Dr. Rakesh Verma",
    title: "Virat Academy",
  },
  {
    quote:
      "He helped us setup our Google Business profile and website. Now when people search for 'Furniture in Saharanpur', our shop comes up first!",
    name: "Suresh & Sons",
    title: "Furniture Showroom",
  },
];

const TestimonialCard = ({ quote, name, title }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
      <div>
        <div className="flex text-yellow-400 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="h-5 w-5" />
          ))}
        </div>
        <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
          "{quote}"
        </p>
      </div>
      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
          {name[0]}
        </div>
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500 uppercase tracking-wide">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

function ClientTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Trusted by Local Businesses
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Real results for real business owners.
        </p>
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

// --- 4. Sub-Component: PricingPlans (Was PricingSection) ---
const pricingPlans = [
  {
    title: "Basic Profile",
    subtitle: "For Personal or Small Info Sites",
    price: "₹4,999",
    features: [
      "3 Page Website",
      "Mobile Responsive",
      "Contact Form",
      "Social Media Links",
      "2 Days Delivery",
    ],
    buttonText: "Choose Basic",
    highlight: false,
  },
  {
    title: "Business Pro",
    subtitle: "Complete Solution for Companies",
    price: "₹11,999",
    features: [
      "8 Page Professional Website",
      "Google Map & SEO Basic",
      "Fast Loading Speed",
      "1 Year Free Hosting",
      "Admin Dashboard Access",
      "WhatsApp Chat Button",
    ],
    buttonText: "Choose Pro",
    highlight: true,
  },
  {
    title: "E-Commerce",
    subtitle: "Full Online Store",
    price: "₹24,999",
    features: [
      "Unlimited Products",
      "Payment Gateway (UPI/Card)",
      "Customer Login System",
      "Order Management Panel",
      "Premium SEO Package",
      "3 Months Free Support",
    ],
    buttonText: "Go Premium",
    highlight: false,
  },
];

const PricingPlans = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="font-bold text-4xl mb-3 text-blue-900">
          Affordable Web Development Packages
        </h1>
        <p className="text-gray-600">One-time payment. No hidden charges.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white border rounded-2xl shadow-sm hover:shadow-xl transition p-8 flex flex-col ${
              plan.highlight
                ? "border-blue-500 transform scale-105 z-10"
                : "border-gray-200"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm px-4 py-1 rounded-full shadow-lg">
                Best Value
              </div>
            )}

            <h2 className="text-xl font-bold mb-1 text-gray-800">
              {plan.title}
            </h2>
            <p className="text-gray-500 mb-4">{plan.subtitle}</p>

            <div className="mb-6 border-b border-gray-100 pb-6">
              <span className="text-4xl font-extrabold text-gray-900">
                {plan.price}
              </span>
              <span className="text-gray-500 text-sm ml-2">/one-time</span>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-700 font-medium"
                >
                  <FaCheckCircle
                    className={
                      plan.highlight ? "text-blue-600" : "text-gray-400"
                    }
                    size={16}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-auto py-3 rounded-xl text-center font-bold transition shadow-md ${
                plan.highlight
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-900 hover:text-gray-900"
              }`}
              onClick={scrollToForm}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- 5. Sub-Component: ContactForm (Was DemoForm) ---
// UPDATED: merged WhatsApp prominently as requested
const ContactForm = () => {
  const [contact, setContact] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = Object.fromEntries(formData.entries());

    // Construct WhatsApp Message from Form Data
    const text = `Hello Shivansh, I have an enquiry.%0AName: ${res.name}%0APhone: ${res.number}%0AService: ${res.interested}%0AMessage: ${res.message}`;
    window.open(`https://wa.me/917618550475?text=${text}`, "_blank");
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/917618550475?text=Hi,%20I%20need%20a%20website`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900 py-12 px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Left Side: Direct Action */}
        <div className="md:w-1/3 bg-blue-600 p-8 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Let's Build Something Great
            </h2>
            <p className="text-blue-100 mb-8">
              Don't want to fill the form? Just chat with me directly.
            </p>

            <button
              onClick={openWhatsApp}
              className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition shadow-lg"
            >
              <FaWhatsapp size={24} />
              Chat on WhatsApp
            </button>
          </div>

          <div className="mt-12 relative z-10">
            <p className="text-sm text-blue-200 uppercase tracking-wide mb-2">
              Contact Info
            </p>
            <p className="font-semibold text-lg">+91 7618550475</p>
            <p className="text-blue-200 text-sm">Saharanpur, Uttar Pradesh</p>
          </div>

          {/* Decorative Circle */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500 rounded-full opacity-50"></div>
        </div>

        {/* Right Side: Form */}
        <section id="contact-form" className="md:w-2/3 p-8 md:p-12 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send a Message
          </h2>
          <form className="space-y-5 " onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 bg-white border border-gray-200 text-black rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
              <input
                type="tel"
                name="number"
                placeholder="Phone Number"
                required
                className="w-full p-4 text-black bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>

            <select
              name="interested"
              className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-gray-600"
            >
              <option value="General Inquiry">
                What services are you interested in?
              </option>
              <option value="Business Website">
                Business Website (₹5k - ₹12k)
              </option>
              <option value="E-Commerce">Online Store / Shop</option>
              <option value="SEO/Marketing">SEO & Google Ranking</option>
            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Tell me about your business..."
              className="w-full text-black p-4 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition shadow-lg flex items-center justify-center gap-2"
            >
              <FaRocket /> Send Enquiry
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

// --- 6. Main Page Component ---
export default function ServicesPage() {
  return (
    <div className="min-h-screen font-sans">
      <Landing />
      <ServicesList />
      <PricingPlans />
      <ClientTestimonials />
      <ContactForm />
    </div>
  );
}
