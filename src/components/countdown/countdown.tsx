import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxEffect } from "../parallaxEffect/parallaxEffect";
import { useLanguageContext } from "@/contexts/language/context";

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export default function Countdown() {
  const { translations } = useLanguageContext();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const weddingDate = new Date("2026-03-05T10:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();

      if (diff <= 0) return clearInterval(timer);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)).toString(),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24).toString(),
        minutes: Math.floor((diff / (1000 * 60)) % 60).toString(),
        seconds: Math.floor((diff / 1000) % 60).toString(),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ParallaxEffect depth={1}>
      <section className="min-h-screen bg-[#faf7f2] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-4xl w-full text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12"
        >
          {/* Decorative Background Gradient Circle */}
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-linear-to-tr from-[#d4af37]/30 to-[#d4af37]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-linear-to-br from-[#d4af37]/20 to-[#d4af37]/5 blur-3xl pointer-events-none" />
          {/* Floral Corners */}
          {[
            "top-4 left-4",
            "top-4 right-4",
            "bottom-4 left-4",
            "bottom-4 right-4",
          ].map((pos, i) => (
            <span
              key={i}
              className={`absolute ${pos} text-[#d4af37] text-2xl animate-pulse notranslate`}
            >
              ✦
            </span>
          ))}

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
              Together Begins
            </p>
            Our Big Day
            <div className="divider-ornament mt-6">
              <span className="divider-line" />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d4af37"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 6v6l-4 2" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span className="divider-line" />
            </div>
          </motion.h2>

          {/* Countdown */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {translations?.countDown?.units?.map((unit, index) => {
              const key = unit.key as keyof TimeLeft;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={timeLeft?.[key]}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="text-5xl md:text-6xl font-bold text-gray-800 notranslate"
                    >
                      {timeLeft?.[key]}
                    </motion.p>
                  </AnimatePresence>

                  <p className="uppercase tracking-widest text-sm text-gray-600 mt-2">
                    {unit.title}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Lottie */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="w-full flex justify-center items-center py-10"
          >
            <lottie-player
              src="/animations/catAnimation.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              style={{ width: "250px", height: "250px" }}
            />
          </motion.div>
        </motion.div>
      </section>
    </ParallaxEffect>
  );
}
