import { useState } from "react";
import { motion } from "framer-motion";
import BackgroundMusic from "../backgroundMusic/backgroundMusic";
import { useLanguageContext } from "@/contexts/language/context";

export default function ExperienceGate({ onEnter }: { onEnter: () => void }) {
  const [loading, setLoading] = useState(false);
  const [playMusic, setPlayMusic] = useState(true);

  const {
    translations,
    //  changeLanguage,
    // language
  } = useLanguageContext();

  const handleEnter = async () => {
    setLoading(true);

    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      // @ts-expect-error iOS permission
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      try {
        // @ts-expect-error iOS permission
        await DeviceOrientationEvent.requestPermission();
      } catch (error) {
        console.error(error);
      }
    }

    localStorage.setItem("experienceAccepted", "true");
    localStorage.setItem("playMusic", playMusic ? "true" : "false");
    onEnter();
  };

  // Generate flowers once
  const [flowers] = useState(() =>
    Array.from({ length: 20 }, (_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const size = Math.random() * 2 + 2;
      const duration = 6 + Math.random() * 4;
      return { id: i, left, delay, size, duration };
    })
  );

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-linear-to-b from-[#faf7f2] via-[#f5efe6] to-[#eee6d8] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Falling flowers */}
      {flowers.map((flower) => (
        <motion.span
          key={flower.id}
          className="absolute text-[#d4af37]/40 notranslate"
          style={{
            left: `${flower.left}%`,
            fontSize: `${flower.size}rem`,
            top: "-7rem",
          }}
          animate={{ y: ["-7rem", "110vh"], rotate: [0, 360] }}
          transition={{
            duration: flower.duration,
            repeat: Infinity,
            delay: flower.delay,
            ease: "linear",
          }}
        >
          ✦
        </motion.span>
      ))}

      {/* Card */}
      <motion.div
        className="relative text-center max-w-md mx-6 px-8 py-12 bg-white/70 backdrop-blur-md rounded-3xl border border-[#d4af37]/60 shadow-xl z-10"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Language Switch */}
        {/* <div className="absolute top-4 right-4 flex rounded-full border border-[#d4af37]/50 bg-white/70 backdrop-blur-md overflow-hidden shadow-sm">
          <button
            onClick={() => changeLanguage("english")}
            className={`px-4 py-1 text-xs font-medium transition ${
              language === "english"
                ? "bg-[#d4af37] text-black"
                : "text-gray-700 hover:bg-[#d4af37]/20"
            }`}
          >
            ENG
          </button>
          <button
            onClick={() => changeLanguage("tamil")}
            className={`px-4 py-1 text-xs font-medium transition ${
              language === "tamil"
                ? "bg-[#d4af37] text-black"
                : "text-gray-700 hover:bg-[#d4af37]/20"
            }`}
          >
            தமிழ்
          </button>
        </div> */}

        {/* Decorative glows */}
        <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-linear-to-tr from-[#d4af37]/20 to-[#d4af37]/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-linear-to-br from-[#d4af37]/10 to-[#d4af37]/5 blur-3xl pointer-events-none" />

        {/* Heart */}
        <motion.div
          className="text-[#d4af37] text-7xl mb-6 notranslate"
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
          &#10084;&#65038;
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-serif text-3xl text-gray-800 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {translations?.experienceGate?.title}
        </motion.h1>

        {/* Music toggle */}
        <div className="mb-4 flex items-center justify-center gap-4">
          <label className="flex items-center gap-2 text-gray-700 text-sm">
            <input
              type="checkbox"
              checked={playMusic}
              onChange={() => setPlayMusic((p) => !p)}
              className="w-4 h-4 accent-[#d4af37]"
            />
            {translations?.experienceGate?.music}
          </label>
        </div>

        {/* Description */}
        <motion.p
          className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {translations?.experienceGate?.description}
        </motion.p>

        {/* Enter button */}
        <motion.button
          disabled={loading}
          onClick={handleEnter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 rounded-full bg-[#d4af37] text-black text-lg font-medium tracking-wide shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading
            ? translations?.experienceGate?.entering
            : translations?.experienceGate?.enter}
        </motion.button>

        {/* Footer note */}
        <motion.p
          className="mt-6 text-xs text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {translations?.experienceGate?.footer}
        </motion.p>
      </motion.div>

      {/* Background music */}
      {playMusic && <BackgroundMusic autoPlay loop />}
    </motion.div>
  );
}
