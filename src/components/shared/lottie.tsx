import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const LOTTIE_SRC =
  "https://unpkg.com/@lottiefiles/lottie-player@2.0.12/dist/lottie-player.js";

let scriptPromise: Promise<void> | null = null;

const loadPlayer = () => {
  scriptPromise ??= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = LOTTIE_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return scriptPromise;
};

interface LottieProps {
  src: string;
  className?: string;
}

/** Loads the lottie-player script only once the animation nears the viewport. */
export function Lottie({ src, className }: LottieProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        loadPlayer()
          .then(() => setReady(true))
          .catch(() => setReady(false));
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className={cn("size-55", className)}>
      {ready && (
        <lottie-player
          src={src}
          background="transparent"
          speed="1"
          loop
          autoplay
          className="block size-full"
        />
      )}
    </div>
  );
}
