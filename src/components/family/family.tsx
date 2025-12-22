import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ParallaxEffect } from "../parallaxEffect/parallaxEffect";
import { useLanguageContext } from "@/contexts/language/context";

/* =======================
   Motion Constants
======================= */
const EASE_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* =======================
   Types
======================= */
type FamilyMember = {
  name: string;
  role: string;
  description: string;
};

/* =======================
   Gold Glow
======================= */
const GoldGlow = () => (
  <motion.div
    className="absolute inset-0 rounded-full bg-[#d4af37]/40 blur-2xl"
    animate={{
      scale: [0.9, 1.2, 0.9],
      opacity: [0.2, 0.45, 0.2],
    }}
    transition={{
      duration: 4.5,
      repeat: Infinity,
      ease: EASE_PREMIUM,
    }}
  />
);

/* =======================
   Family Card
======================= */
const FamilyCard = ({
  member,
  isOpen,
  onToggle,
}: {
  member: FamilyMember;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_PREMIUM }}
      className="text-center"
    >
      <ParallaxEffect depth={1}>
        <motion.div
          onClick={onToggle}
          whileHover={{ scale: 1.05 }}
          className="relative w-52 h-52 mx-auto rounded-full bg-white/60 backdrop-blur-xl border border-[#d4af37]/50 flex items-center justify-center shadow-2xl cursor-pointer overflow-hidden"
        >
          {/* Decorative star */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
            <div className="w-10 h-10 border border-[#d4af37] rounded-full flex items-center justify-center shadow-md">
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

          <GoldGlow />

          <div className="relative z-10 font-serif px-6">
            <p className="text-gray-800 text-lg font-semibold">{member.name}</p>
          </div>
        </motion.div>

        <p className="mt-5 text-sm font-serif text-gray-500">{member.role}</p>

        <AnimatePresence>
          {isOpen && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="mt-4 max-w-sm mx-auto text-sm text-gray-600 italic bg-white/70 backdrop-blur-lg rounded-2xl px-6 py-4 shadow-inner"
            >
              {member.description}
            </motion.p>
          )}
        </AnimatePresence>
      </ParallaxEffect>
    </motion.div>
  );
};

/* =======================
   Family Section
======================= */
const Family = () => {
  const { translations } = useLanguageContext();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative min-h-screen bg-linear-to-b from-[#fffaf0] to-[#f7f4ee] py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#d4af37]/10 blur-3xl rounded-full pointer-events-none" />

      <h2 className="text-center text-4xl md:text-5xl font-serif mb-24 text-gray-800">
        {translations?.family?.title}
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        {/* Groom Family */}
        <div>
          <h3 className="text-center font-serif text-2xl mb-14">
            {translations?.family?.groom?.title}
          </h3>
          <div className="flex flex-col items-center gap-20">
            {translations?.family?.groom?.members?.map((member, index) => (
              <FamilyCard
                key={member.name}
                member={member}
                isOpen={activeIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>

        {/* Bride Family */}
        <div>
          <h3 className="text-center font-serif text-2xl mb-14">
            {translations?.family?.bride?.title}
          </h3>
          <div className="flex flex-col items-center gap-20">
            {translations?.family?.bride?.members?.map((member, index) => {
              const globalIndex =
                index + translations?.family?.groom?.members.length;
              return (
                <FamilyCard
                  key={member.name}
                  member={member}
                  isOpen={activeIndex === globalIndex}
                  onToggle={() => handleToggle(globalIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Family;
