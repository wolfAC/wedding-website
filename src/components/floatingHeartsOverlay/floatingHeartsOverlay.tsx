import { AnimatePresence, motion } from "motion/react";
import { Heart as HeartIcon } from "@/components/icons";
interface Heart {
  x: number;
  y: number;
  id: number;
}

export default function FloatingHeartsOverlay({ hearts }: { hearts: Heart[] }) {
  return (
    <div className="fixed inset-0 z-9999 pointer-events-none" aria-hidden="true">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.span
            key={heart.id}
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: -100 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1.5 }}
            className="absolute top-(--y) left-(--x) text-gold"
            style={{ "--x": `${heart.x}px`, "--y": `${heart.y}px` } as React.CSSProperties}
          >
            <HeartIcon className="size-8" fill="currentColor" strokeWidth={0} />
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
