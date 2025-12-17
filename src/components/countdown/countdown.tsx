import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

type Unit = keyof TimeLeft;

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const units: Unit[] = ["days", "hours", "minutes", "seconds"];

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
    <section className="min-h-screen bg-[#faf7f2] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-4xl w-full text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12"
      >
        {/* Floral Corners */}
        {[
          "top-4 left-4",
          "top-4 right-4",
          "bottom-4 left-4",
          "bottom-4 right-4",
        ].map((pos, i) => (
          <span
            key={i}
            className={`absolute ${pos} text-[#d4af37] text-2xl animate-pulse`}
          >
            ✿
          </span>
        ))}

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-[cursive] text-3xl md:text-4xl text-[#8b6b3d] mb-10"
        >
          Counting down to our forever
        </motion.h2>

        {/* Countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {units.map((unit, index) => (
            <motion.div
              key={unit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={timeLeft[unit]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="text-5xl md:text-6xl font-bold text-gray-800"
                >
                  {timeLeft[unit]}
                </motion.p>
              </AnimatePresence>

              <p className="uppercase tracking-widest text-sm text-gray-600 mt-2">
                {unit}
              </p>
            </motion.div>
          ))}
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
            style={{ width: "300px", height: "300px" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
