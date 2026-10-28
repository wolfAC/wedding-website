import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Clock, Sparkle } from "@/components/icons";
import { Lottie } from "@/components/shared/lottie";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { content, siteConfig } from "@/config";
import { cn } from "@/lib/utils";

type Duration = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

/** Time until the wedding, or time since it once the date has passed. */
const getDuration = (): { isMarried: boolean; time: Duration } => {
  const diff = siteConfig.weddingDate.getTime() - Date.now();
  const abs = Math.abs(diff);

  const pad = (n: number) => n.toString().padStart(2, "0");
  return {
    isMarried: diff <= 0,
    time: {
      days: Math.floor(abs / (1000 * 60 * 60 * 24)).toString(),
      hours: pad(Math.floor((abs / (1000 * 60 * 60)) % 24)),
      minutes: pad(Math.floor((abs / (1000 * 60)) % 60)),
      seconds: pad(Math.floor((abs / 1000) % 60)),
    },
  };
};

const CORNERS = ["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"];

export default function Countdown() {
  const copy = content.countdown;
  const [{ isMarried, time }, setDuration] = useState(getDuration);

  useEffect(() => {
    const timer = setInterval(() => setDuration(getDuration()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      aria-labelledby="countdown-title"
      className="flex min-h-dvh items-center justify-center bg-ivory px-4 pt-24 pb-12 md:px-6"
    >
      <Reveal className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-gold/30 bg-white/70 px-6 py-12 text-center backdrop-blur-sm md:p-12">
        {/* Decorative Background Gradient Circle */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -left-20 size-60 rounded-full bg-linear-to-tr from-gold/30 to-gold/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-20 size-72 rounded-full bg-linear-to-br from-gold/20 to-gold/5 blur-3xl"
        />
        {/* Floral Corners */}
        {CORNERS.map((pos) => (
          <Sparkle
            key={pos}
            fill="currentColor"
            className={cn("absolute size-5 text-gold", pos)}
          />
        ))}

        <SectionHeading
          id="countdown-title"
          eyebrow={isMarried ? copy.marriedEyebrow : copy.eyebrow}
          title={isMarried ? copy.marriedTitle : copy.title}
          className="relative mb-12"
          icon={<Clock className="size-6" />}
        />

        <div
          role="timer"
          aria-label={`${time.days} ${isMarried ? copy.marriedTimerLabel : copy.timerLabel}`}
          className="relative grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
        >
          {copy.units.map((unit) => (
            <div key={unit.key} aria-hidden="true">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.p
                  key={time[unit.key]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="notranslate font-serif text-5xl font-semibold text-ink tabular-nums md:text-6xl"
                >
                  {time[unit.key]}
                </motion.p>
              </AnimatePresence>

              <p className="mt-2 font-sans text-xs tracking-[0.2em] text-ink-muted uppercase md:text-sm">
                {unit.title}
              </p>
            </div>
          ))}
        </div>

        <div className="relative flex w-full items-center justify-center pt-8">
          <Lottie src="/animations/catAnimation.json" />
        </div>
      </Reveal>
    </section>
  );
}
