import { Image as ImageIcon } from "@/components/icons";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { content } from "@/config";

const MEDIA_CLASS =
  "h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]";

export default function Gallery() {
  const { eyebrow, title, items } = content.gallery;

  return (
    <section aria-labelledby="gallery-title" className="min-h-dvh bg-ivory px-6 pt-28 pb-20">
      <SectionHeading
        id="gallery-title"
        eyebrow={eyebrow}
        title={title}
        className="mb-14"
        icon={<ImageIcon className="size-5" />}
      />

      <div className="mx-auto max-w-6xl columns-1 gap-6 space-y-6 sm:columns-2 md:columns-3">
        {items.map(({ src, alt }, index) => {
          const isVideo = src.endsWith(".webm") || src.endsWith(".mp4");

          return (
            <Reveal
              key={src}
              delay={(index % 3) * 0.06}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl bg-gold-soft/40"
            >
              {isVideo ? (
                <video
                  src={src}
                  aria-label={alt}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  disablePictureInPicture
                  draggable={false}
                  controls={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className={MEDIA_CLASS}
                />
              ) : (
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className={MEDIA_CLASS}
                />
              )}

              {/* Gold Hover Outline */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl border border-gold/50 transition-colors duration-300 group-hover:border-gold"
              />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
