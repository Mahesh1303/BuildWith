"use client";
import { motion } from "framer-motion";

const FeatureGrid = () => {
  const features = [
    {
      title: "Follow Creators",
      description:
        "Connect with developers, entrepreneurs, and tech enthusiasts. Follow their journey and get real-time updates on their projects and insights.",
      image:
        "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "Real-time Feed",
      description:
        "Stay updated with instant notifications and live updates from people you follow. Never miss important announcements or project launches.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    },
    {
      title: "Engage & Collaborate",
      description:
        "Like, comment, and share posts. Join discussions, participate in polls, and collaborate on projects with other community members.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 px-2 sm:px-4 lg:px-8 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="group relative overflow-hidden rounded-3xl shadow-xl bg-white transition-all duration-300 hover:shadow-2xl mx-1 sm:mx-4"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={feature.image}
              alt={feature.title}
              className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
            />
          </div>
          <div className="p-4 sm:p-6 bg-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
