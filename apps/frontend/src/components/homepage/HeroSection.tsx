"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import FeatureGrid from "./FeatureGrid";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div className="relative min-h-screen mb-5 ">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute  w-[250%] h-[200%] bg-gradient-to-br from-gray-50 to-white rounded-full animate-spin-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16  sm:pb-24 mt-6 ">
        <div className="relative min-h-[200px] grid grid-cols-1 sm:grid-cols-3 grid-rows-[auto] sm:grid-rows-3 gap-8 sm:gap-0.5 ">
          {/* Top Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: -40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden sm:block sm:col-start-1 sm:row-start-1 w-full aspect-square max-w-[280px] mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-gray-100 to-white rounded-full blur-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop"
                alt="Developer working on laptop"
                className="relative rounded-full shadow-lg w-full h-full object-cover aspect-square"
              />
            </div>
          </motion.div>

          {/* Top Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: -40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden sm:block sm:col-start-3 sm:row-start-1 w-full aspect-square max-w-[280px] mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-gray-100 to-white rounded-full blur-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                alt="Team collaboration meeting"
                className="relative rounded-full shadow-lg w-full h-full object-cover aspect-square"
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <div className="col-span-1 sm:col-start-2 sm:row-start-2 text-center max-w-2xl mx-auto relative z-10 flex flex-col justify-center items-center px-4 sm:px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-2 tracking-tight"
            >
              Connect{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                Together
              </span>
              .
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 max-w-lg mx-auto"
            >
              Join a vibrant community of developers and tech enthusiasts
              sharing ideas and building the future together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-2 justify-center mt-2 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 bg-gray-900 text-white rounded-full text-base sm:text-lg font-medium shadow-md hover:shadow-lg transition-all"
              >
                Start Following
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 bg-transparent text-gray-900 border-2 border-gray-900 rounded-full text-base sm:text-lg font-medium hover:bg-gray-900 hover:text-white transition-all"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden sm:block sm:col-start-1 sm:row-start-3 w-full aspect-square max-w-[280px] mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-gray-100 to-white rounded-full blur-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop"
                alt="Modern office workspace"
                className="relative rounded-full shadow-lg w-full h-full object-cover aspect-square"
              />
            </div>
          </motion.div>

          {/* Bottom Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden sm:block sm:col-start-3 sm:row-start-3 w-full aspect-square max-w-[280px] mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-gray-100 to-white rounded-full blur-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2669&auto=format&fit=crop"
                alt="Social media interaction"
                className="relative rounded-full shadow-lg w-full h-full object-cover aspect-square"
              />
            </div>
          </motion.div>
        </div>
        <div className="relative min-h-[300px] pt-20 sm:gap-0 ">
          <FeatureGrid />
        </div>
      </div>

      {/* Curved Divider */}
    </div>
  );
};

export default HeroSection;
