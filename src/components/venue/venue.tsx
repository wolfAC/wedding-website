import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FloatingItem {
  x: number;
  y: number;
  id: number;
  char: string;
}

export default function Venue() {
  const [floatingItems, setFloatingItems] = useState<FloatingItem[]>([]);
  const [counter, setCounter] = useState(0);

  const handleInteraction = (
    e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    let x = 0;
    let y = 0;

    if ("touches" in e) {
      const touch = e.touches[0];
      x = touch.clientX - rect.left;
      y = touch.clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    const newItem: FloatingItem = {
      x,
      y,
      id: counter,
      char: Math.random() > 0.5 ? "❤" : "✿",
    };

    setFloatingItems((prev) => [...prev, newItem]);
    setCounter((prev) => prev + 1);

    setTimeout(() => {
      setFloatingItems((prev) => prev.filter((f) => f.id !== newItem.id));
    }, 1200);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
      className="relative min-h-screen bg-linear-to-b from-[#fffaf0] to-[#faf7f2] py-20 px-6 overflow-hidden cursor-pointer"
    >
      {/* Click floating hearts / petals */}
      <AnimatePresence>
        {floatingItems.map((item) => (
          <motion.span
            key={item.id}
            initial={{ opacity: 1, y: 0, scale: 1 }}
            animate={{ opacity: 0, y: -80, scale: 1.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute text-[#d4af37] text-3xl pointer-events-none"
            style={{ left: item.x, top: item.y }}
          >
            {item.char}
          </motion.span>
        ))}
      </AnimatePresence>

      {/* Background floating elements */}
      <motion.span
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-10 left-1/4 text-[#d4af37] text-6xl opacity-20"
      >
        ✿
      </motion.span>

      <motion.span
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-20 right-1/3 text-[#d4af37] text-8xl opacity-15"
      >
        ❦
      </motion.span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl md:text-5xl font-serif text-gray-800 mb-16"
      >
        Venue & Location
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Venue Details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-lg"
        >
          <span className="absolute inset-0 flex items-center justify-center text-[120px] text-[#d4af37]/10 pointer-events-none">
            ✿
          </span>

          <h3 className="font-serif text-2xl text-gray-800 mb-4 relative">
            Sri Lakshmi Narayan Mahal
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6 relative">
            No. 93, C.T.H Road,
            <br />
            Next to Sevvapet Police Station,
            <br />
            Thiruvallur – 602025
          </p>

          <div className="flex flex-wrap gap-4 relative">
            <a
              href="https://maps.app.goo.gl/67m1XDrmg4t6py9T8"
              target="_blank"
              className="px-6 py-3 border border-[#d4af37] rounded-full text-[#8b6b3d] hover:bg-[#d4af37]/20 hover:scale-110 transition-transform duration-300"
            >
              Open in Google Maps
            </a>

            <a
              href="tel:+918825726717"
              className="px-6 py-3 border border-[#d4af37] rounded-full text-[#8b6b3d] hover:bg-[#d4af37]/20 hover:scale-110 transition-transform duration-300"
            >
              Call Organizer
            </a>
          </div>
        </motion.div>

        {/* Right: Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="border border-[#d4af37] rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            title="Sri Lakshmi Narayan Mahal"
            src="https://www.google.com/maps?q=Sri+Lakshmi+Narayan+Mahal+Sevvapet&z=18&output=embed"
            className="w-full h-96 border-0 rounded-lg transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
