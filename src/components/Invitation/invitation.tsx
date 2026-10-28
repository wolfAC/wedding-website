import { motion, type Variants } from "motion/react";
import { Heart } from "@/components/icons";
import { Divider } from "@/components/shared/divider";
import { content, siteConfig } from "@/config";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Invitation() {
  const copy = content.invitation;

  return (
    <section
      aria-labelledby="invitation-title"
      className="flex min-h-dvh items-center justify-center bg-ivory px-6"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-gold/50 bg-white/60 px-10 py-12 text-center shadow-2xl backdrop-blur-2xl"
      >
        {/* Decorative Background Gradient Circle */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -left-20 size-60 rounded-full bg-linear-to-tr from-gold/30 to-gold/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-20 size-72 rounded-full bg-linear-to-br from-gold/20 to-gold/5 blur-3xl"
        />

        <motion.h2
          id="invitation-title"
          variants={itemVariants}
          className="relative mt-6 mb-6 font-serif text-xl text-ink-soft md:text-4xl"
        >
          {copy.title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="relative mb-8 font-sans text-base leading-relaxed font-light text-ink-muted md:text-lg"
        >
          {copy.body}
        </motion.p>

        <Divider icon={<Heart className="size-6" fill="currentColor" />} className="mb-8" />

        <p className="relative font-serif text-xl text-gold-ink">
          {siteConfig.groomName}
          <br />
          &amp;
          <br />
          {siteConfig.brideName}
        </p>
      </motion.div>
    </section>
  );
}
