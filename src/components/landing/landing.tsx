import { content } from "@/config";
import useWindowSize from "@/hooks/useWindowSize";

export default function Landing() {
  const { width } = useWindowSize();
  return (
    <section aria-labelledby="landing-title" className="relative min-h-dvh w-full pt-16">
      <h1 id="landing-title" className="sr-only">
        {content.landing.title}
      </h1>
      {width < 1024 ? (
        <video
          src="/video/Invitation.webm"
          aria-label={content.landing.imageAlt}
          autoPlay
          muted
          playsInline
          controls={false}
          draggable={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          onContextMenu={(e) => e.preventDefault()}
          className="pointer-events-none absolute top-16 left-0 h-[calc(100dvh-64px)] w-full object-cover"
        />
      ) : (
        <div className="flex h-[calc(100dvh-64px)] w-full items-center justify-center">
          <img
            src="/images/Invitation.webp"
            alt={content.landing.imageAlt}
            fetchPriority="high"
            className="absolute top-16 h-full scale-110"
          />
        </div>
      )}
    </section>
  );
}
