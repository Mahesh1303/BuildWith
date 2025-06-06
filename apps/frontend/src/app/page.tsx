"use client";
import { motion } from "framer-motion";
import Header from "@/components/homepage/Header";
import HeroSection from "@/components/homepage/HeroSection";
import FeatureGrid from "@/components/homepage/FeatureGrid";
import HeroContent from "@/components/homepage/HeroContent";
import CTASection from "@/components/homepage/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative">
        <HeroContent />

        <section className="relative py-16 sm:py-32 bg-slate-100 -mt-8 sm:-mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-12 sm:mb-16 tracking-tight text-slate-800"
            >
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-600 to-red-500 font-cursive italic">
                Our Platform
              </span>
              <HeroSection />
            </motion.h2>
            <FeatureGrid />
            <div className="h-16"></div>
          </div>
          {/* Curved Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-40 md:h-64 overflow-hidden">
            <svg
              className="absolute bottom-0 left-0 w-full h-full"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="#f8fafc"
                fillOpacity="1"
                d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>
        <CTASection />
      </main>
    </div>
  );
}
