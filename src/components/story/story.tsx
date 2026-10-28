import { Heart, Sparkle } from "@/components/icons";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { content } from "@/config";
import { cn } from "@/lib/utils";

export default function Story() {
  const { eyebrow, title, timeline } = content.story;

  return (
    <section
      aria-labelledby="story-title"
      className="relative min-h-dvh overflow-hidden bg-linear-to-b from-cream to-ivory px-6 pt-28 pb-20"
    >
      <SectionHeading
        id="story-title"
        eyebrow={eyebrow}
        title={title}
        icon={<Heart className="size-6" fill="currentColor" />}
      />

      <ol className="relative mx-auto max-w-4xl">
        {/* Vertical Line */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-5 h-full w-px bg-gold/60 md:left-1/2 md:-translate-x-1/2"
        />

        {timeline.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <li key={item.title} className="relative mb-12 md:mb-16">
              <Reveal delay={idx * 0.05} className="flex md:items-center">
                {/* Timeline marker */}
                <div
                  aria-hidden="true"
                  className="absolute top-1 left-5 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border border-gold bg-white text-gold shadow-sm md:top-auto md:left-1/2"
                >
                  <Sparkle className="size-5" fill="currentColor" />
                </div>

                <div
                  className={cn(
                    "pl-16 md:w-1/2 md:pl-0",
                    isLeft ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14",
                  )}
                >
                  <p className="mb-1 font-sans text-xs font-medium tracking-[0.2em] text-gold-ink uppercase">
                    <time>{item.date}</time>
                  </p>
                  <h3 className="mb-2 font-script text-3xl text-bronze md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="font-serif text-lg leading-relaxed text-pretty text-ink-soft">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
