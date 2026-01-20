import { AnimatePresence, motion } from "framer-motion";
interface Heart {
  x: number;
  y: number;
  id: number;
}

export default function FloatingHeartsOverlay({ hearts }: { hearts: Heart[] }) {
  return (
    <div className="fixed inset-0 z-9999 pointer-events-none">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.span
            key={heart.id}
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: -100 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1.5 }}
            className="absolute text-[#d4af37] text-3xl"
            style={{ left: heart.x, top: heart.y }}
          >
            &#10084; &#65038;
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
