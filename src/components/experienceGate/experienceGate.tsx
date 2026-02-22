import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BackgroundMusic from "../backgroundMusic/backgroundMusic";
import { useLanguageContext } from "@/contexts/language/context";

export default function ExperienceGate({ onEnter }: { onEnter: () => void }) {
  const [loading, setLoading] = useState(false);
  const [playMusic, setPlayMusic] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);

  const { translations } = useLanguageContext();

  /* ===========================
     🔹 ADD ALL YOUR FILES HERE
     =========================== */
  const ASSETS = [
    // Images
    "/images/Bike.webp",
    "/images/Eng.webp",
    "/images/Heart.webp",
    "/images/LilHer.webp",
    "/images/LilHim.webp",
    "/images/Together.webp",

    // Music
    "/music/perfect.webm",

    // Animations
    "/animations/catAnimation.json",
    "/animations/coupleAnimation.json",
    "/animations/loveHearts.json",

    // Videos
    "/video/BikeRide.webm",
    "/video/Diwali.webm",
    "/video/Invitation.webm",
  ];

  /* ===========================
     🔹 Preload Helpers
     =========================== */

  function preloadImage(src: string) {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve();
      img.onerror = reject;
    });
  }

  function preloadVideo(src: string) {
    return new Promise<void>((resolve, reject) => {
      const video = document.createElement("video");
      video.src = src;
      video.preload = "auto";
      video.muted = true;
      video.onloadeddata = () => resolve();
      video.onerror = reject;
    });
  }

  /* ===========================
     🔹 Preload On Mount
     =========================== */

  useEffect(() => {
    let loaded = 0;
    const total = ASSETS.length;

    function updateProgress() {
      loaded++;
      setProgress(Math.round((loaded / total) * 100));
      if (loaded === total) {
        setIsReady(true);
      }
    }

    ASSETS.forEach((src) => {
      if (src.endsWith(".webm")) {
        preloadVideo(src).then(updateProgress).catch(updateProgress);
      } else {
        preloadImage(src).then(updateProgress).catch(updateProgress);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ===========================
     🔹 Enter Handler
     =========================== */

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
    }),
  );

  /* ===========================
     🔹 UI
     =========================== */

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
      <motion.div
        className="relative text-center max-w-md mx-6 px-8 py-12 bg-white/70 backdrop-blur-md rounded-3xl border border-[#d4af37]/60 shadow-xl z-10"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
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
        <motion.h1 className="font-serif text-3xl text-gray-800 mb-4">
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

        <motion.p className="text-gray-700 mb-6 text-sm md:text-base">
          {translations?.experienceGate?.description}
        </motion.p>

        <motion.button
          disabled={loading || !isReady}
          onClick={handleEnter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 rounded-full bg-[#d4af37] text-black text-lg font-medium shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {!isReady
            ? `Loading ${progress}%`
            : loading
              ? translations?.experienceGate?.entering
              : translations?.experienceGate?.enter}
        </motion.button>

        <motion.p className="mt-6 text-xs text-gray-600">
          {translations?.experienceGate?.footer}
        </motion.p>
      </motion.div>

      {playMusic && <BackgroundMusic autoPlay loop />}
    </motion.div>
  );
}
