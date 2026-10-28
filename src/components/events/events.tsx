import { Calendar } from "@/components/icons";
import { Divider } from "@/components/shared/divider";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { content } from "@/config";
import { cn } from "@/lib/utils";

const Events: React.FC = () => {
  const { eyebrow, title, items } = content.events;

  return (
    <section
      aria-labelledby="events-title"
      className="relative min-h-dvh overflow-hidden bg-linear-to-b from-cream to-ivory px-6 pt-28 pb-20"
    >
      <SectionHeading
        id="events-title"
        eyebrow={eyebrow}
        title={title}
        icon={<Calendar className="size-5" />}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-6 md:grid-cols-3 md:gap-8">
        {items.map(({ icon: Icon, ...event }, index) => (
          <Reveal key={event.id} delay={index * 0.08}>
            <article
              className={cn(
                "rounded-2xl p-8 text-center",
                event.highlight
                  ? "bg-linear-135 from-gold to-gold-soft shadow-xl md:py-12"
                  : "border border-gold/20 bg-white/60 shadow-sm",
              )}
            >
              <div
                aria-hidden="true"
                className={cn(
                  "mx-auto mb-6 flex size-20 items-center justify-center rounded-full",
                  event.highlight
                    ? "bg-white/30 text-ink-soft"
                    : "bg-linear-135 from-gold/10 to-gold-soft/30 text-gold",
                )}
              >
                <Icon className="size-9" strokeWidth={1.5} />
              </div>

              <h3 className="mb-2 font-serif text-3xl font-medium text-ink-soft">
                {event.title}
              </h3>

              <Divider className="my-4" lineClassName="w-7.5" />

              <p
                className={cn(
                  "mb-1 font-sans text-sm font-medium tracking-wide",
                  event.highlight ? "text-ink" : "text-gold-ink",
                )}
              >
                {event.date}
              </p>

              <p className="font-sans text-base text-ink-soft">{event.time}</p>

              <p
                className={cn(
                  "mt-4 font-serif text-lg",
                  event.highlight ? "text-ink-soft" : "text-ink-muted",
                )}
              >
                {event.place}
              </p>

              {event.badge && (
                <span className="mt-3 inline-block rounded-full bg-white/60 px-4 py-1 font-sans text-xs font-medium tracking-wide text-ink-soft">
                  {event.badge}
                </span>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Events;
