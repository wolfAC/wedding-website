import { motion, type Variants } from "motion/react";
import { content } from "@/config";

// Container animation
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Card animation (IN + subtle rotation)
const card: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.94,
    rotate: -2,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Blessing() {
  const { title, items } = content.blessings;

  return (
    <section aria-labelledby="blessings-title" className="min-h-dvh bg-ivory px-6 py-20">
      <motion.h2
        id="blessings-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-14 text-center font-serif text-4xl text-ink md:text-5xl"
      >
        {title}
      </motion.h2>

      <motion.div
        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {items.map((wish) => (
          <motion.figure
            key={wish.name}
            variants={card}
            whileHover={{ rotate: 1.5, scale: 1.03 }}
            className="relative overflow-hidden rounded-2xl border border-gold/60 bg-white/80 p-6 shadow-xl backdrop-blur-sm"
          >
            {/* Decorative Background Circles */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -left-20 size-60 rounded-full bg-linear-to-tr from-gold/20 to-gold/5 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -bottom-24 size-72 rounded-full bg-linear-to-br from-gold/10 to-gold/5 blur-3xl"
            />

            <blockquote className="relative mb-4 font-serif text-lg leading-relaxed text-ink-soft">
              “{wish.message}”
            </blockquote>

            <figcaption className="relative text-right font-script text-2xl text-bronze">
              — {wish.name}
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
