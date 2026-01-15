import { motion } from "framer-motion";
import { ParallaxEffect } from "../parallaxEffect/parallaxEffect";
import type { Variants } from "framer-motion";
// import { useLanguageContext } from "@/contexts/language/context";

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
  // const { translations } = useLanguageContext();

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
          {/* <motion.p
            variants={itemVariants}
            className="text-gray-700 italic text-sm md:text-base leading-relaxed font-light"
          >
            <div
              className="p-4 rounded-xl"
              style={{
                background: "rgba(212, 175, 55, 0.05)",
                border: "1px solid rgba(212, 175, 55, 0.2)",
              }}
            >
              <p
                id="story-text"
                className="font-serif-elegant text-lg italic leading-relaxed text-[12px]"
                style={{ color: "#6b5b4f" }}
              >
                "{translations?.invitation?.verse}"
                <span className="block mt-2 font-medium text-[#8b6b3d] text-[10px] md:text-sm text-right">
                  — {translations?.invitation?.chapter}
                </span>
              </p>
            </div>
          </motion.p> */}

          {/* Invitation */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-xs md:text-sm uppercase tracking-widest text-gray-600 letter-spacing-wider"
          >
            {/* {translations?.invitation.invite} */}
            <h2
              className="font-serif-elegant text-xl md:text-4xl mb-6"
              style={{ color: "#5c4a3d" }}
            >
              You're Warmly Invited
            </h2>
          </motion.p>

          {/* Divider */}
          {/* <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 my-4"
          >
            <span className="w-12 h-px bg-linear-to-r from-[#d4af37] via-[#e6c670] to-[#d4af37]" />
            <span className="text-[#d4af37] text-lg md:text-xl notranslate">
              ✿
            </span>
            <span className="w-12 h-px bg-linear-to-r from-[#d4af37] via-[#e6c670] to-[#d4af37]" />
          </motion.div> */}

          {/* Lottie */}
          {/* <motion.div
            variants={itemVariants}
            className="w-full flex justify-center items-center"
          >
            <lottie-player
              src="/animations/loveHearts.json"
              background="transparent"
              speed="2"
              loop
              autoplay
              style={{ width: "200px", height: "200px" }}
            />
          </motion.div> */}

          {/* Title */}
          {/* <motion.h1
            variants={itemVariants}
            className="text-lg md:text-2xl font-serif text-gray-800 tracking-wider"
          >
            The Holy Matrimony of
          </motion.h1> */}

          {/* Names */}
          {/* <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-4 text-center font-serif text-gray-900"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-[#d4af37] tracking-tight">
              {translations?.global?.groomName}
            </div>

            <div className="my-2 text-[#8b6b3d] text-lg md:text-xl font-medium">
              &
            </div>

            <div className="text-4xl md:text-5xl font-extrabold text-[#d4af37] tracking-tight">
              {translations?.global?.brideName}
            </div>
          </motion.h2> */}

          <p
            className="font-sans-modern text-base md:text-lg font-light leading-relaxed mb-8"
            style={{ color: "#7d6e63" }}
          >
            With hearts full of joy and gratitude, we invite you to witness and
            bless our union. Your presence would make our special day even more
            meaningful. Together with our beloved families, we look forward to
            celebrating this beautiful journey with you.
          </p>

          <div className="divider-ornament mb-8">
            <span className="divider-line" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#D4AF37">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="divider-line" />
          </div>
          <p
            className="font-serif-elegant text-xl"
            style={{ color: "#d4af37" }}
          >
            Anbu Chezhiyan
            <br />
            &amp;
            <br />
            Varshini
          </p>
        </motion.div>
      </ParallaxEffect>
    </section>
  );
}
