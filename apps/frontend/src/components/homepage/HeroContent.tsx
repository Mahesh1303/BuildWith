"use client";
import { motion } from "framer-motion";

const HeroContent = () => {
  const latestPicks = [
    {
      title:
        "Just launched my new AI project! Check out the demo and let me know what you think 🚀",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title:
        "Looking for collaborators for my open-source project. DM if interested! #opensource #collaboration",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title:
        "Just hit 10k followers! Thanks everyone for the support. AMA session this weekend! 🎉",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative pt-24 mt-3 pb-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-orange-800"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 mx-auto max-w-7xl relative">
        <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-12 lg:gap-x-20 gap-y-16 lg:max-w-none">
          <div className="self-center lg:col-span-5">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight tracking-tight"
            >
              Connect, Share,{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Build Together
              </span>{" "}
              🚀
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="mt-8 text-lg sm:text-xl font-normal leading-relaxed text-gray-600"
            >
              A social platform for developers and tech enthusiasts to share
              ideas, showcase projects, and connect with like-minded
              individuals. Follow creators, engage with their content, and build
              meaningful connections in the tech community.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <a
                href="#"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                role="button"
              >
                Connect with BuildWith
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                role="button"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          <div className="self-end lg:order-last lg:pb-20 lg:col-span-3">
            <p className="text-sm font-bold tracking-widest text-gray-900 uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Latest Stories
            </p>
            <div className="mt-8 space-y-6">
              {latestPicks.map((pick, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <a
                    href="#"
                    className="block p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          className="object-cover w-full h-full"
                          src={pick.image}
                          alt=""
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-medium leading-relaxed text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-3">
                          {pick.title}
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="self-end lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                className="relative w-full rounded-2xl shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02]"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop"
                alt="Team collaboration"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
