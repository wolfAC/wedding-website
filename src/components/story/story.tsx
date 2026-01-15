import { motion, AnimatePresence } from "framer-motion";
import { ParallaxEffect } from "../parallaxEffect/parallaxEffect";

interface TimelineItem {
  title: string;
  desc: string;
  date: string;
  side: "left" | "right";
}

const timelineData: TimelineItem[] = [
  {
    title: "First Meet",
    desc: "A simple introduction that quietly marked the beginning of something meaningful, guided by God’s plan.",
    date: "2 Feb 2025",
    side: "left",
  },
  {
    title: "First Talk",
    desc: "An honest and comfortable conversation that brought clarity, peace, and mutual respect.",
    date: "15 Feb 2025",
    side: "right",
  },
  {
    title: "Families Connected",
    desc: "Two families met in faith and understanding, laying the foundation for a shared future.",
    date: "10 Mar 2025",
    side: "left",
  },
  {
    title: "Warmth",
    desc: "Time spent in conversations and prayer strengthened trust, values, and companionship.",
    date: "18 Apr 2025",
    side: "right",
  },
  {
    title: "Engagement",
    desc: "A promise made with blessings, faith, and the joy of togetherness.",
    date: "7 July 2025",
    side: "left",
  },
  {
    title: "Preparing Together",
    desc: "Planning life ahead with patience, support, and gratitude for every shared moment.",
    date: "22 Nov 2025",
    side: "right",
  },
  {
    title: "Journey to Forever",
    desc: "Stepping into marriage with love, faith, and a shared commitment to walk together always.",
    date: "5 March 2026",
    side: "left",
  },
];

export default function Story() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen bg-linear-to-b from-[#fffaf0] to-[#faf7f2] py-20 px-6 overflow-hidden cursor-pointer"
    >
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
          How It All Began
        </p>
        Our Story
        <div className="divider-ornament mt-6">
          <span className="divider-line" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#D4AF37">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="divider-line" />
        </div>
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#d4af37]/60 -translate-x-1/2" />

        <AnimatePresence>
          {timelineData.map((item, idx) => (
            <ParallaxEffect depth={1}>
              <motion.div
                key={idx}
                className="relative flex items-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
              >
                {/* Left Content */}
                <div
                  className={`w-1/2 ${
                    item.side === "left" ? "pr-12 text-right" : "pr-12"
                  }`}
                >
                  {item.side === "left" && (
                    <>
                      <h3 className="font-[cursive] text-3xl text-[#8b6b3d] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 font-serif">{item.desc}</p>
                    </>
                  )}
                </div>

                {/* Timeline Icon */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="w-10 h-10 bg-white border border-[#d4af37] rounded-full flex items-center justify-center shadow-md">
                    <motion.span
                      className="text-[#d4af37] text-lg md:text-2xl notranslate"
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "linear",
                      }}
                    >
                      ✦
                    </motion.span>
                  </div>
                </div>

                {/* Right Content */}
                <div
                  className={`w-1/2 ${
                    item.side === "right" ? "pl-12 text-left" : "pl-12"
                  }`}
                >
                  {item.side === "right" && (
                    <>
                      <h3 className="font-[cursive] text-3xl text-[#8b6b3d] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </>
                  )}
                </div>
              </motion.div>
            </ParallaxEffect>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
