import { motion } from "framer-motion";
import { ParallaxEffect } from "../parallaxEffect/parallaxEffect";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Invitation() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-[#faf7f2]">
      <ParallaxEffect depth={1}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          className="max-w-2xl w-full bg-white/60 backdrop-blur-2xl border border-[#d4af37]/50 rounded-3xl px-10 py-12 text-center shadow-2xl mx-auto relative overflow-hidden"
        >
          {/* Decorative Background Gradient Circle */}
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-linear-to-tr from-[#d4af37]/30 to-[#d4af37]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-linear-to-br from-[#d4af37]/20 to-[#d4af37]/5 blur-3xl pointer-events-none" />

          {/* Bible Verse */}
          <motion.p
            variants={itemVariants}
            className="text-gray-700 italic text-sm md:text-base leading-relaxed font-light"
          >
            “And now these three remain: faith, hope and love. But the greatest
            of these is love.”
            <span className="block mt-2 font-medium text-[#8b6b3d] text-[13px] md:text-sm text-right">
              — 1 Cor 13:13
            </span>
          </motion.p>

          {/* Invitation */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-xs md:text-sm uppercase tracking-widest text-gray-600 letter-spacing-wider"
          >
            We warmly invite you to celebrate
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 my-4"
          >
            <span className="w-12 h-px bg-linear-to-r from-[#d4af37] via-[#e6c670] to-[#d4af37]" />
            <span className="text-[#d4af37] text-lg md:text-xl">✿</span>
            <span className="w-12 h-px bg-linear-to-r from-[#d4af37] via-[#e6c670] to-[#d4af37]" />
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-lg md:text-2xl font-serif text-gray-800 tracking-wider"
          >
            The Holy Matrimony of
          </motion.h1>

          {/* Names */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-4 text-center font-serif text-gray-900"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-[#d4af37] tracking-tight">
              Anbu Chezhiyan
            </div>

            <div className="my-2 text-[#8b6b3d] text-lg md:text-xl font-medium">
              &
            </div>

            <div className="text-4xl md:text-5xl font-extrabold text-[#d4af37] tracking-tight">
              Varshini
            </div>
          </motion.h2>

          {/* Lottie */}
          <motion.div
            variants={itemVariants}
            className="w-full flex justify-center items-center pt-6"
          >
            <lottie-player
              src="/animations/loveHearts.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              style={{ width: "320px", height: "320px" }}
            />
          </motion.div>
        </motion.div>
      </ParallaxEffect>
    </section>
  );
}
