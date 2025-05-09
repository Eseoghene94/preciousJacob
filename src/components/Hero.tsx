import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set loaded state after a small delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (profileRef.current) {
        observer.unobserve(profileRef.current);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  const backgroundBlobAnimation = {
    scale: [1, 1.05, 1],
    rotate: [0, 5, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className={`absolute inset-0 opacity-10 ${
            darkMode
              ? "bg-gradient-to-br from-purple-700 via-teal-500 to-gray-800"
              : "bg-gradient-to-br from-purple-400 via-teal-300 to-gray-200"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>

        <motion.div
          className={`absolute top-20 right-20 w-72 h-72 rounded-full filter blur-3xl ${
            darkMode ? "bg-purple-600" : "bg-teal-400"
          } opacity-0`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        ></motion.div>

        <motion.div
          className={`absolute bottom-20 left-20 w-96 h-96 rounded-full filter blur-3xl ${
            darkMode ? "bg-teal-500" : "bg-purple-400"
          } opacity-0`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 1.5, delay: 0.7, repeatType: "reverse" }}
        ></motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-500 rounded-full"
          animate={floatingAnimation}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-teal-500 rounded-full"
          animate={{
            ...floatingAnimation,
            transition: {
              ...floatingAnimation.transition,
              delay: 1,
              repeatType: "reverse" as "reverse",
            },
          }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 right-1/4 w-3 h-3 bg-yellow-400 rounded-full"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 0.5 },
          }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500 inline-block">
                Precious Jacob
              </span>
            </motion.h1>

            <motion.div
              className="h-1 w-20 md:w-32 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto md:mx-0"
              variants={itemVariants}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "8rem", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>

            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 dark:text-gray-300"
              variants={itemVariants}
            >
              UI/UX Designer & Visual Artist
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-xl"
              variants={itemVariants}
            >
              Crafting beautiful and intuitive digital experiences. Transforming
              complex problems into elegant solutions with a focus on
              user-centered design.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="#portfolio"
                className="px-8 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all shadow-lg transform"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 rounded-full bg-transparent border-2 border-teal-500 text-teal-600 dark:text-teal-400 font-medium hover:bg-teal-500 hover:text-white dark:hover:text-white transition-all"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            ref={profileRef}
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.8,
            }}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80"
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-teal-500"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.div>
              <motion.img
                src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Precious Jacob"
                className="relative w-full h-full object-cover rounded-full p-1"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 1,
                }}
                whileHover={{ scale: 1.05 }}
              />

              {/* Decorative circles around the profile image */}
              <motion.div
                className="absolute -inset-4 border-2 border-dashed border-purple-400 dark:border-purple-600 rounded-full"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 0.5, rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              ></motion.div>

              <motion.div
                className="absolute -inset-8 border border-teal-300 dark:border-teal-500 rounded-full"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 0.3, rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-purple-500 dark:bg-teal-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
          ></motion.div>
        </motion.div>
        <motion.p
          className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll Down
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
