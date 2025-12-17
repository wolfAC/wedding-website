import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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
   Data
======================= */
const groomFamily: FamilyMember[] = [
  {
    name: "Mr. Malar Chezhiyan",
    role: "Father of Groom",
    description:
      "A humble and respected gentleman, admired for his wisdom, integrity, and lifelong commitment to family values.",
  },
  {
    name: "Mrs. Kalpana",
    role: "Mother of Groom",
    description:
      "A graceful and caring soul whose warmth, patience, and devotion create a loving foundation for the family.",
  },
];

const brideFamily: FamilyMember[] = [
  {
    name: "Mr. Ranganathan",
    role: "Father of Bride",
    description:
      "A dignified personality known for his discipline, guidance, and deep sense of responsibility.",
  },
  {
    name: "Mrs. Durgavathi",
    role: "Mother of Bride",
    description:
      "A compassionate and nurturing presence, admired for her strength, kindness, and unconditional love.",
  },
];

/* =======================
   Monogram Animations
======================= */

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
   Monogram
======================= */

/* =======================
   Family Card
======================= */
const FamilyCard = ({ member }: { member: FamilyMember; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_PREMIUM }}
      className="text-center"
    >
      <motion.div
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        className="relative w-52 h-52 mx-auto rounded-full bg-white/60 backdrop-blur-xl border border-[#d4af37]/50 flex items-center justify-center shadow-2xl cursor-pointer overflow-hidden"
      >
        {/* ✦ at the bottom */}
        <span className="absolute -bottom-2  text-[#d4af37] text-2xl">✦</span>
        {/* Name in center */}
        <GoldGlow />
        <div className="relative z-10 font-serif px-6">
          <p className="text-gray-800 text-lg font-semibold">{member.name}</p>
        </div>
      </motion.div>

      <p className="mt-5 text-sm font-serif text-gray-500">{member.role}</p>

      <AnimatePresence>
        {open && (
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
    </motion.div>
  );
};

/* =======================
   Family Section
======================= */
const Family = () => {
  return (
    <section className="relative min-h-screen bg-linear-to-b from-[#fffaf0] to-[#f7f4ee] py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#d4af37]/10 blur-3xl rounded-full pointer-events-none" />

      <h2 className="text-center text-4xl md:text-5xl font-serif mb-24 text-gray-800">
        Our Family
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h3 className="text-center font-serif text-2xl mb-14">
            Groom’s Family
          </h3>
          <div className="flex flex-col items-center gap-20">
            {groomFamily.map((m, i) => (
              <FamilyCard key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-center font-serif text-2xl mb-14">
            Bride’s Family
          </h3>
          <div className="flex flex-col items-center gap-20">
            {brideFamily.map((m, i) => (
              <FamilyCard key={m.name} member={m} index={i + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Family;
