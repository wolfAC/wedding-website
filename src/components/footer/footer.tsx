import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ParallaxEffect } from "../parallaxEffect/parallaxEffect";
import { useLanguageContext } from "@/contexts/language/context";

export default function Footer() {
  const { translations } = useLanguageContext();

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
      className="relative min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-[#fffaf0] to-[#faf7f2] py-20 px-6 overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl md:text-5xl font-serif text-gray-800 mb-16"
      >
        <p
          className="font-sans-modern text-sm tracking-[0.3em] uppercase mb-4"
          style={{ color: "#d4af37" }}
        >
          For Being a Part of Our Love Story
        </p>
        Thank You
        <div className="divider-ornament mt-6">
          <span className="divider-line" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#D4AF37">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="divider-line" />
        </div>
      </motion.h2>

      <motion.span
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
        className="absolute top-1/3 left-6 text-[#d4af37] text-3xl opacity-25 notranslate"
      >
        ✿
      </motion.span>
      <motion.span
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
        className="absolute top-1/3 right-6 text-[#d4af37] text-3xl opacity-25 notranslate"
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
          {translations?.footer?.para1}
          <br />
          <br />
          {translations?.footer?.para2}
          <br />
        </motion.p>

        <div className="divider-ornament mb-8">
          <span className="divider-line" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#D4AF37">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="divider-line" />
        </div>

        {/* With love */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="font-[cursive] text-2xl md:text-3xl text-[#8b6b3d] mb-2"
        >
          {translations?.footer?.withLove},
        </motion.p>

        {/* Names */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-3 text-center font-serif text-gray-900 mb-6"
        >
          <div className="text-3xl md:text-4xl font-semibold text-[#d4af37]">
            {translations?.global?.groomName}
          </div>

          <div className="my-2 text-[#8b6b3d] text-lg">&</div>

          <div className="text-3xl md:text-4xl font-semibold text-[#d4af37]">
            {translations?.global?.brideName}
          </div>
        </motion.h2>
      </div>

      <div className="divider-ornament mb-8">
        <span className="divider-line" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#D4AF37">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <span className="divider-line" />
      </div>

      <div>
        {/* <!-- Social Share --> */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: "rgba(212, 175, 55, 0.1)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#D4AF37">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: "rgba(212, 175, 55, 0.1)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#D4AF37">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: "rgba(212, 175, 55, 0.1)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#D4AF37">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
        <p className="font-sans-modern text-xs" style={{ color: "#b5a99a" }}>
          Made with ♥ for Anbu & Varshini
        </p>
      </div>
    </motion.section>
  );
}
