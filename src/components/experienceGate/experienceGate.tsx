import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Heart, Sparkle } from "@/components/icons";
import { content, siteConfig } from "@/config";
import BackgroundMusic from "../backgroundMusic/backgroundMusic";

/* ===========================
   ADD ALL YOUR FILES HERE
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
   Preload Helpers
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

export default function ExperienceGate({ onEnter }: { onEnter: () => void }) {
  const [loading, setLoading] = useState(false);
  const [playMusic, setPlayMusic] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const copy = content.experienceGate;

  /* ===========================
     Preload On Mount
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
  }, []);

  /* ===========================
     Enter Handler
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
     UI
     =========================== */

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden bg-linear-to-b from-ivory via-sand to-linen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Falling flowers */}
      {flowers.map((flower) => (
        <motion.span
          key={flower.id}
          aria-hidden="true"
          className="absolute -top-28 left-(--x) text-gold/40"
          style={{ "--x": `${flower.left}%` } as React.CSSProperties}
          animate={{ y: ["-7rem", "110vh"], rotate: [0, 360] }}
          transition={{
            duration: flower.duration,
            repeat: Infinity,
            delay: flower.delay,
            ease: "linear",
          }}
        >
          <Sparkle
            fill="currentColor"
            strokeWidth={0}
            className="size-(--s)"
            style={{ "--s": `${flower.size}rem` } as React.CSSProperties}
          />
        </motion.span>
      ))}

      <motion.div
        className="relative z-10 mx-4 max-w-md rounded-3xl border border-gold/50 bg-white/75 px-6 py-12 text-center shadow-xl backdrop-blur-md sm:px-8"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Decorative glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -left-20 size-60 rounded-full bg-linear-to-tr from-gold/20 to-gold/5 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -bottom-24 size-72 rounded-full bg-linear-to-br from-gold/10 to-gold/5 blur-3xl"
        />

        {/* Heart */}
        <motion.div
          aria-hidden="true"
          className="mb-6 flex justify-center text-gold"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart className="size-16" fill="currentColor" strokeWidth={0} />
        </motion.div>

        <p className="notranslate mb-1 font-script text-3xl text-bronze">
          {siteConfig.groomName.split(" ")[0]} <span className="mx-1">&amp;</span>{" "}
          {siteConfig.brideName}
        </p>
        <h1 className="mb-4 font-serif text-3xl font-medium text-balance text-ink md:text-4xl">
          {copy.title}
        </h1>

        {/* Music toggle */}
        <div className="mb-4 flex items-center justify-center gap-4">
          <label className="flex min-h-11 cursor-pointer items-center gap-3 px-2 font-sans text-sm text-ink-soft">
            <input
              type="checkbox"
              checked={playMusic}
              onChange={() => setPlayMusic((p) => !p)}
              className="size-5 cursor-pointer accent-gold-ink"
            />
            {copy.music}
          </label>
        </div>

        <p className="mb-8 font-serif text-lg leading-relaxed text-pretty text-ink-soft">
          {copy.description}
        </p>

        <motion.button
          disabled={loading || !isReady}
          onClick={handleEnter}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          aria-busy={!isReady || loading}
          className="relative min-h-12 cursor-pointer overflow-hidden rounded-full bg-gold px-10 py-3 font-sans text-lg font-medium text-ink shadow-md disabled:cursor-wait"
        >
          {!isReady && (
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-(--progress) bg-white/30 transition-[width] duration-300"
              style={{ "--progress": `${progress}%` } as React.CSSProperties}
            />
          )}
          <span className="relative">
            {!isReady
              ? `${copy.loading} ${progress}%`
              : loading
                ? copy.entering
                : copy.enter}
          </span>
        </motion.button>

        <p className="mt-6 font-sans text-xs text-ink-muted">{copy.footer}</p>
      </motion.div>

      {playMusic && <BackgroundMusic loop audioRef={audioRef} />}
    </motion.div>
  );
}
