import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ParallaxEffect } from "../parallaxEffect/parallaxEffect";

export default function Footer() {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-[#fffaf0] to-[#faf7f2] px-6 overflow-hidden"
    >
      <motion.span
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
        className="absolute top-1/3 left-6 text-[#d4af37] text-3xl opacity-25"
      >
        ✿
      </motion.span>
      <motion.span
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
        className="absolute top-1/3 right-6 text-[#d4af37] text-3xl opacity-25"
      >
        ✿
      </motion.span>

      <div className="text-center max-w-2xl relative z-10">
        {/* Floral accent */}
        <ParallaxEffect depth={1}>
          <motion.div
            variants={itemVariants}
            className="w-full flex justify-center items-center pt-4"
          >
            <lottie-player
              src="/animations/coupleAnimation.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              style={{ width: "200px", height: "200px" }}
            />
          </motion.div>
        </ParallaxEffect>

        {/* Thank you text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl font-serif text-gray-700 pt-10 mb-6"
        >
          Thank you for being part of our special day. Your presence, blessings,
          and love mean the world to us.
          <br />
          <br />
          We are grateful for the laughter, the memories, and the joy you bring
          to our journey together.
          <br />
        </motion.p>

        {/* Gold heart */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mb-6"
        >
          <span className="text-[#d4af37] text-3xl">❤</span>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="h-px w-24 bg-[#d4af37]/50 mx-auto mb-6 rounded-full origin-center"
        />

        {/* With love */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="font-[cursive] text-2xl md:text-3xl text-[#8b6b3d] mb-2"
        >
          With love,
        </motion.p>

        {/* Names */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-3 text-center font-serif text-gray-900"
        >
          <div className="text-3xl md:text-4xl font-semibold text-[#d4af37]">
            Anbu Chezhiyan
          </div>

          <div className="my-2 text-[#8b6b3d] text-lg">&</div>

          <div className="text-3xl md:text-4xl font-semibold text-[#d4af37]">
            Varshini
          </div>
        </motion.h2>
      </div>
    </motion.section>
  );
}
