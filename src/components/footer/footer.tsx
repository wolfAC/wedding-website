import { Flower, Heart } from "@/components/icons";
import { Divider } from "@/components/shared/divider";
import { Lottie } from "@/components/shared/lottie";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { content, siteConfig } from "@/config";

export default function Footer() {
  const copy = content.footer;
  const heart = <Heart className="size-6" fill="currentColor" />;

  return (
    <footer
      aria-labelledby="footer-title"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-linear-to-b from-cream to-ivory px-6 pt-28 pb-[max(2.5rem,env(safe-area-inset-bottom))]"
    >
      <SectionHeading
        id="footer-title"
        eyebrow={copy.eyebrow}
        title={copy.title}
        className="mb-8"
        icon={heart}
      />

      <Flower className="absolute top-1/3 left-6 size-8 text-gold opacity-25" />
      <Flower className="absolute top-1/3 right-6 size-8 text-gold opacity-25" />

      <div className="relative z-10 max-w-2xl text-center">
        <div className="flex w-full items-center justify-center">
          <Lottie src="/animations/coupleAnimation.json" className="size-50" />
        </div>

        <Reveal
          delay={0.2}
          className="mb-8 space-y-5 pt-6 font-serif text-xl leading-relaxed text-pretty text-ink-soft md:text-2xl"
        >
          {copy.paragraphs.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </Reveal>

        <Reveal delay={0.4} y={12}>
          <p className="mb-2 font-script text-3xl text-bronze md:text-4xl">
            {copy.withLove},
          </p>

          <p className="mt-3 mb-8 text-center font-serif">
            <span className="block text-3xl font-semibold text-gold-ink md:text-4xl">
              {siteConfig.groomName}
            </span>
            <span className="my-1 block font-script text-2xl text-bronze">&amp;</span>
            <span className="block text-3xl font-semibold text-gold-ink md:text-4xl">
              {siteConfig.brideName}
            </span>
          </p>
        </Reveal>
      </div>

      <Divider icon={heart} className="mb-8" />

      <p className="text-center font-sans text-xs text-ink-muted">{copy.madeWith}</p>
    </footer>
  );
}
