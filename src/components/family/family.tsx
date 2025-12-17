import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Transition, TargetAndTransition } from "framer-motion";

/* =======================
   Motion Constants
======================= */
const EASE_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_LINEAR: [number, number, number, number] = [0, 0, 1, 1];

/* =======================
   Types
======================= */
type FamilyMember = {
  name: string;
  role: string;
  description: string;
};

type MonogramAnimation = {
  animate: TargetAndTransition;
  transition: Transition;
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
const monogramVariants: MonogramAnimation[] = [
  // {
  //   animate: {
  //     rotate: [0, 14, -14, 0],
  //     scale: [1, 1.1, 1],
  //     opacity: [0.45, 0.85, 0.45],
  //   },
  //   transition: {
  //     duration: 6,
  //     repeat: Infinity,
  //     ease: EASE_PREMIUM,
  //   },
  // },
  // {
  //   animate: {
  //     y: [0, -18, 0],
  //     scale: [1, 1.12, 1],
  //     opacity: [0.4, 0.8, 0.4],
  //   },
  //   transition: {
  //     duration: 5.5,
  //     repeat: Infinity,
  //     ease: EASE_PREMIUM,
  //   },
  // },
  {
    animate: {
      rotate: [0, 360],
      scale: [1, 1.06, 1],
      opacity: [0.35, 0.7, 0.35],
    },
    transition: {
      duration: 18,
      repeat: Infinity,
      ease: EASE_LINEAR,
    },
  },
  // {
  //   animate: {
  //     x: [-14, 14, -14],
  //     scale: [1, 1.1, 1],
  //     opacity: [0.4, 0.75, 0.4],
  //   },
  //   transition: {
  //     duration: 6,
  //     repeat: Infinity,
  //     ease: EASE_PREMIUM,
  //   },
  // },
];

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
const Monogram = ({ index = 0 }: { index?: number }) => {
  const variant = monogramVariants[index % monogramVariants.length];

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <GoldGlow />

      <motion.svg
        viewBox="0 0 120 120"
        className="w-30 h-30 text-[#d4af37]"
        style={{
          transformBox: "fill-box",
          transformOrigin: "center",
          filter: "drop-shadow(0 0 18px rgba(212,175,55,0.6))",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={variant.animate}
        transition={variant.transition}
      >
        <g transform="translate(97 58) scale(1.6)">
          <path
            d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
            fill="#d4af37"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </g>
      </motion.svg>
    </div>
  );
};

/* =======================
   Family Card
======================= */
const FamilyCard = ({
  member,
  index,
}: {
  member: FamilyMember;
  index: number;
}) => {
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
        <Monogram index={index} />

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
