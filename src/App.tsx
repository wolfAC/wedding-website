import { useRef, useState } from "react";
import BackgroundMusic from "./components/backgroundMusic/backgroundMusic";
import Countdown from "./components/countdown/countdown";
import ExperienceGate from "./components/experienceGate/experienceGate";
import FloatingHeartsOverlay from "./components/floatingHeartsOverlay/floatingHeartsOverlay";
import Footer from "./components/footer/footer";
import Gallery from "./components/gallery/gallery";
import Header from "./components/header/header";
import Landing from "./components/landing/landing";
import Story from "./components/story/story";
import Venue from "./components/venue/venue";
import type { SectionKey } from "./config";
import { cn } from "./lib/utils";

// import Events from "./components/events/events";
// import Invitation from "./components/Invitation/invitation";
// import WeddingQRCard from "./components/weddingQr/weddingQr";
// import Family from "./components/family/family";
// import Blessing from "./components/blessings/blessing";

interface Heart {
  x: number;
  y: number;
  id: number;
}

const SNAP_SECTION = "min-h-dvh snap-start snap-always";

export default function App() {
  const [entered, setEntered] = useState(
    localStorage.getItem("experienceAccepted") === "true",
  );
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const scrollToSection = (key: SectionKey) => {
    document.getElementById(key)?.scrollIntoView({ behavior: "smooth" });
  };

  const [hearts, setHearts] = useState<Heart[]>([]);
  const heartIdRef = useRef(0);

  const addHeart = (x: number, y: number) => {
    const id = heartIdRef.current++;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const clampedX = Math.max(0, Math.min(x, vw));
    const clampedY = Math.max(0, Math.min(y, vh));

    setHearts((h) => [...h, { x: clampedX, y: clampedY, id }]);

    setTimeout(() => {
      setHearts((h) => h.filter((i) => i.id !== id));
    }, 1500);
  };

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <a
        href="#main-content"
        className="sr-only z-60 rounded-full bg-ink px-4 py-2 text-ivory focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>

      <Header onNavigate={scrollToSection} />

      <BackgroundMusic loop audioRef={audioRef} />

      {/* HEART OVERLAY */}
      <FloatingHeartsOverlay hearts={hearts} />

      {/* MAIN SCROLL CONTAINER */}
      <main
        id="main-content"
        tabIndex={-1}
        className="h-dvh snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth"
        onPointerDownCapture={(e) => {
          if (e.pointerType === "touch") {
            addHeart(e.clientX, e.clientY);
          }
        }}
      >
        {entered ? (
          <>
            <div id="home" className={cn(SNAP_SECTION, "flex items-center justify-center bg-ivory")}>
              <Landing />
            </div>
            <div id="story" className={SNAP_SECTION}>
              <Story />
            </div>
            <div id="venue" className={SNAP_SECTION}>
              <Venue />
            </div>
            <div id="gallery" className={SNAP_SECTION}>
              <Gallery />
            </div>
            <div id="countdown" className={SNAP_SECTION}>
              <Countdown />
            </div>
            <div id="contact" className={SNAP_SECTION}>
              <Footer />
            </div>
          </>
        ) : (
          <div className="flex min-h-dvh snap-start items-center justify-center">
            <ExperienceGate
              onEnter={() => {
                localStorage.setItem("experienceAccepted", "true");
                setEntered(true);
              }}
            />
          </div>
        )}
      </main>
    </div>
  );
}
