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
  ];

  // Framer Motion variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen bg-[#faf7f2] py-20 px-6">
      <h2 className="text-center text-4xl md:text-5xl font-serif text-gray-800 mb-14">
        Blessings & Wishes
      </h2>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {blessings.map((wish, index) => (
          <motion.div
            key={index}
            variants={card}
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#d4af37]/60 p-6 shadow-lg hover:scale-105 transform transition-transform duration-500"
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
