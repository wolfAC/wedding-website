import { LocationIcon } from "@/assets/assets";
import { motion } from "framer-motion";
import { ParallaxEffect } from "../parallaxEffect/parallaxEffect";
import { useLanguageContext } from "@/contexts/language/context";

export default function Venue() {
  const { translations } = useLanguageContext();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen bg-linear-to-b from-[#fffaf0] to-[#faf7f2] py-20 px-6 overflow-hidden cursor-pointer"
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
          JOIN US AT
        </p>

        {translations?.venue?.title}

        <div className="divider-ornament mt-6">
          <span className="divider-line" />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#D4AF37">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="divider-line" />
        </div>
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-0">
        {/* Left: Venue Details */}
        <ParallaxEffect depth={1}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/40 backdrop-blur-3xl border border-[#d4af37]/30 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-shadow duration-500 max-w-md mx-auto overflow-hidden"
          >
            {/* Decorative Background Circles */}
            <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-linear-to-tr from-[#d4af37]/20 to-[#d4af37]/5 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-linear-to-br from-[#d4af37]/10 to-[#d4af37]/5 blur-3xl pointer-events-none" />

            {/* Floating Icon half-outside */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-18 left-1/2 -translate-x-1/2 flex justify-center w-full"
            >
              <span className="text-[180px] text-[#d4af37]/20 pointer-events-none">
                <LocationIcon size={180} />
              </span>
            </motion.div>

            {/* Spacer */}
            <div className="h-20" />

            {/* Title */}
            <h3 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4 text-center">
              {translations?.venue?.place}
            </h3>

            {/* Address */}
            <p className="text-gray-700 leading-relaxed mb-8 text-center text-sm md:text-base">
              {translations?.venue?.address1}, <br />
              {translations?.venue?.address2}, <br />
              {translations?.venue?.address3}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={translations?.venue?.mapLocationLink}
                target="_blank"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-6 py-3 rounded-full text-white bg-linear-to-r from-[#d4af37] via-[#e6c670] to-[#d4af37] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {translations?.venue?.openGMaps}
              </motion.a>
            </div>
          </motion.div>
        </ParallaxEffect>

        {/* Right: Map */}
        <ParallaxEffect depth={1}>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="relative border h-full border-[#d4af37]/40 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500"
          >
            <iframe
              title={translations?.venue?.place}
              src={translations?.venue?.iFrameMapLocationLink}
              className="w-full h-96 md:h-full border-0 rounded-3xl transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        </ParallaxEffect>
      </div>
    </motion.section>
  );
}
