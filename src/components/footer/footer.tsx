import { motion } from "framer-motion";

export default function Footer() {
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
        className="absolute top-1/3 right-1/4 text-[#d4af37] text-3xl opacity-25"
      >
        ❤
      </motion.span>

      <div className="text-center max-w-2xl relative z-10">
        {/* Floral accent */}
        <motion.div
          className="text-[#d4af37] text-7xl mb-6"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 15, -15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ❤
        </motion.div>

        {/* Thank you text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl font-serif text-gray-700 mb-6"
        >
          Thank you for being part of our special day. Your presence, blessings,
          and love mean the world to us.
          <br />
          <br />
          We are grateful for the laughter, the memories, and the joy you bring
          to our journey together.
          <br />
          <br />
          May this day be as beautiful and magical as the love we share, and may
          you carry happiness with you always.
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
