import { motion, AnimatePresence } from "framer-motion";

interface TimelineItem {
  title: string;
  desc: string;
  side: "left" | "right";
}

const timelineData: TimelineItem[] = [
  {
    title: "First Meet",
    desc: "A divine moment where two hearts met by God’s perfect plan.",
    side: "left",
  },
  {
    title: "Engagement",
    desc: "A promise sealed in faith, love, and joyful togetherness.",
    side: "right",
  },
  {
    title: "Journey to Forever",
    desc: "Walking hand in hand towards a lifetime blessed by God.",
    side: "left",
  },
];

export default function Story() {
  return (
    <section className="min-h-screen bg-[#faf7f2] py-20 px-6">
      <h2 className="text-center text-4xl md:text-5xl font-serif mb-16 text-gray-800">
        Our Story
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#d4af37]/60 -translate-x-1/2" />

        <AnimatePresence>
          {timelineData.map((item, idx) => (
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
                    <p className="text-gray-700">{item.desc}</p>
                  </>
                )}
              </div>

              {/* Timeline Icon */}
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="w-10 h-10 bg-white border border-[#d4af37] rounded-full flex items-center justify-center">
                  <span className="text-[#d4af37]">✿</span>
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
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
