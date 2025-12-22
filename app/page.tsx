import dbConnect from "@/lib/db";
import Blogs from "./components//Blogs";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ImpactMetrics from "./components/ImpactMetrics";

export default function Home() {
  dbConnect();
  return (
    <>
      <Hero />
      <ImpactMetrics />
      <Projects />
      <Testimonials />
      <Blogs />
      <Newsletter />
    </>
  );
}
