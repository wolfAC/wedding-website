import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { ReactNode } from "react";
interface Heart {
  x: number;
  y: number;
  id: number;
}

interface FloatingHeartsWrapperProps {
  children: ReactNode;
}

export default function FloatingHearts({
  children,
}: FloatingHeartsWrapperProps) {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [counter, setCounter] = useState(0);

  const addHeart = (x: number, y: number) => {
    const newHeart: Heart = { x, y, id: counter };
    setHearts((prev) => [...prev, newHeart]);
    setCounter((prev) => prev + 1);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1500);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    addHeart(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const touch = e.touches[0];
    addHeart(touch.clientX - rect.left, touch.clientY - rect.top);
  };

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      onClick={handleClick}
      onTouchStart={handleTouch}
    >
      {/* Floating Hearts - above everything */}
      <div className="absolute inset-0 pointer-events-none z-9999">
        <AnimatePresence>
          {hearts.map((heart) => (
            <motion.span
              key={heart.id}
              initial={{ opacity: 0, scale: 0.5, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: -100 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute text-[#d4af37] text-3xl"
              style={{ left: heart.x, top: heart.y }}
            >
              ❤
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* Page Content */}
      {children}
    </div>
  );
}
