import { motion } from "framer-motion";

export default function Invitation() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-[#faf7f2]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-2xl w-full bg-white/70 backdrop-blur-sm border border-[#d4af37]/70 rounded-xl px-8 py-10 text-center shadow-md"
      >
        {/* Bible Verse */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 italic text-sm md:text-base leading-relaxed"
        >
          “And now these three remain: faith, hope and love. But the greatest of
          these is love.”
          <span className="block mt-1 font-medium text-[#8b6b3d] text-[12px] text-right">
            — 1 Cor 13:13
          </span>
        </motion.p>

        {/* Invitation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-4 text-xs md:text-sm uppercase tracking-wider text-gray-600"
        >
          We invite you to celebrate
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center gap-2 my-3 origin-center"
        >
          <span className="w-10 h-px bg-[#d4af37]" />
          <span className="text-[#d4af37] text-sm">✿</span>
          <span className="w-10 h-px bg-[#d4af37]" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="text-lg md:text-2xl font-serif text-gray-800 tracking-wide"
        >
          The Holy Matrimony of
        </motion.h1>

        {/* Names */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
          className="mt-3 text-center font-serif text-gray-900"
        >
          <div className="text-3xl md:text-4xl font-semibold">
            Anbu Chezhiyan
          </div>

          <div className="my-1 text-[#d4af37] text-lg">&</div>

          <div className="text-3xl md:text-4xl font-semibold">Varshini</div>
        </motion.h2>

        {/* Lottie */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="w-full flex justify-center items-center pt-4"
        >
          <lottie-player
            src="/animations/loveHearts.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style={{ width: "300px", height: "300px" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
