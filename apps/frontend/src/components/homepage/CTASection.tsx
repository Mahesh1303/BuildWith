"use client";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950"></div>
      </div>
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white">
            Join the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-300">
              Tech Community
            </span>
            ?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with thousands of developers, share your journey, and grow
            your network in the most vibrant tech community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-8 py-3.5 bg-white text-slate-900 rounded-lg text-lg font-medium hover:bg-slate-100 transition-all"
            >
              Create Account
            </motion.button>
           
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
