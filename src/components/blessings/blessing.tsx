import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

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
    {
      name: "Grandma Esther",
      message:
        "May your love grow stronger each day and bring light to all around you.",
    },
    {
      name: "Cousin Daniel",
      message:
        "Wishing you laughter, love, and a lifetime of cherished memories.",
    },
    {
      name: "Friend Clara",
      message:
        "May your journey together be filled with endless joy and warmth.",
    },
  ];

  // Container animation
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card animation (IN + subtle rotation)
  const card: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.94,
      rotate: -2,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
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
            whileHover={{ rotate: 1.5, scale: 1.03 }}
            className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-[#d4af37]/60 p-6 shadow-xl transition-transform duration-500 will-change-transform"
          >
            {/* Decorative Background Circles */}
            <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-linear-to-tr from-[#d4af37]/20 to-[#d4af37]/5 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-linear-to-br from-[#d4af37]/10 to-[#d4af37]/5 blur-3xl pointer-events-none" />

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
