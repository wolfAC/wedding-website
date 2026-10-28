import { MapPin } from "@/components/icons";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { content } from "@/config";

export default function Venue() {
  const venue = content.venue;

  return (
    <section
      aria-labelledby="venue-title"
      className="relative min-h-dvh overflow-hidden bg-linear-to-b from-cream to-ivory px-6 pt-28 pb-20"
    >
      <SectionHeading
        id="venue-title"
        eyebrow={venue.eyebrow}
        title={venue.title}
        icon={<MapPin className="size-5" />}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-0">
        {/* Left: Venue Details */}
        <Reveal className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-gold/30 bg-white/60 px-8 py-10 shadow-xl backdrop-blur-xl md:p-12">
          {/* Decorative Background Circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -left-20 size-60 rounded-full bg-linear-to-tr from-gold/20 to-gold/5 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-24 size-72 rounded-full bg-linear-to-br from-gold/10 to-gold/5 blur-3xl"
          />

          <div aria-hidden="true" className="mb-6 flex justify-center text-gold">
            <span className="flex size-16 items-center justify-center rounded-full bg-gold/10">
              <MapPin className="size-7.5" />
            </span>
          </div>

          <h3 className="mb-4 text-center font-serif text-3xl font-medium text-balance text-ink md:text-4xl">
            {venue.place}
          </h3>

          <address className="mb-8 text-center font-serif text-lg leading-relaxed text-ink-soft not-italic">
            {venue.address.map((line, i) => (
              <span key={line} className="block">
                {line}
                {i < venue.address.length - 1 && ","}
              </span>
            ))}
          </address>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={venue.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full bg-linear-to-r from-gold via-gold-light to-gold px-7 font-sans font-medium text-ink shadow-md transition duration-200 hover:shadow-lg hover:brightness-105 active:scale-[0.98]"
            >
              <MapPin className="size-4.5" />
              {venue.directions}
              <span className="sr-only">{venue.directionsHint}</span>
            </a>
          </div>
        </Reveal>

        {/* Right: Map */}
        <Reveal
          delay={0.1}
          className="relative h-full min-h-80 overflow-hidden rounded-3xl border border-gold/40 shadow-xl"
        >
          <iframe
            title={venue.place}
            src={venue.mapEmbed}
            className="h-80 w-full border-0 md:h-full"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
