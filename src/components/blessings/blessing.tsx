import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Blessing() {
  const blessings = [
    {
      name: "Pastor Samuel",
      message:
        "May the Lord bless your union and guide you in love and faith all your days.",
    },
    {
      name: "Uncle Joseph",
      message: "Wishing you a lifetime of happiness, unity, and God’s grace.",
    },
    {
      name: "Aunt Mary",
      message: "May your home be filled with peace, joy, and endless love.",
    },
  ];

  // Container animation
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // Card animation (IN + OUT)
  const card: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.94,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="min-h-screen bg-[#faf7f2] py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-4xl md:text-5xl font-serif text-gray-800 mb-14"
      >
        Blessings & Wishes
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        {blessings.map((wish, index) => (
          <motion.div
            key={index}
            variants={card}
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#d4af37]/60 p-6 shadow-lg transition-transform duration-500 hover:scale-105 will-change-transform"
          >
            {/* Message */}
            <p className="text-gray-700 leading-relaxed mb-4">
              “{wish.message}”
            </p>

            {/* Name */}
            <p className="text-right font-[cursive] text-xl text-[#8b6b3d]">
              — {wish.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
