import { useRef, useState } from "react";
import "./App.css";
import BackgroundMusic from "./components/backgroundMusic/backgroundMusic";
// import Blessing from "./components/blessings/blessing";
import Countdown from "./components/countdown/countdown";
// import Family from "./components/family/family";
import Footer from "./components/footer/footer";
import Gallery from "./components/gallery/gallery";
import Header from "./components/header/header";
// import Invitation from "./components/Invitation/invitation";
import Landing from "./components/landing/landing";
import Story from "./components/story/story";
import Venue from "./components/venue/venue";
// import WeddingQRCard from "./components/weddingQr/weddingQr";
import Events from "./components/events/events";
import ExperienceGate from "./components/experienceGate/experienceGate";
import FloatingHeartsOverlay from "./components/floatingHeartsOverlay/FloatingHeartsOverlay";

export default function App() {
  const [entered, setEntered] = useState(
    localStorage.getItem("experienceAccepted") === "true",
  );

  const headerRef = useRef(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const storyRef = useRef<HTMLDivElement | null>(null);
  const eventsRef = useRef<HTMLDivElement | null>(null);
  const venueRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  type SectionKey = keyof typeof sectionRefs;
  const sectionRefs = {
    home: homeRef,
    story: storyRef,
    events: eventsRef,
    venue: venueRef,
    gallery: galleryRef,
    contact: contactRef,
  };

  const scrollToSection = (key: SectionKey) => {
    sectionRefs?.[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  interface Heart {
    x: number;
    y: number;
    id: number;
  }
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
    <div className="relative w-full h-screen overflow-hidden">
      <div ref={headerRef}>
        <Header onNavigate={scrollToSection} />
      </div>

      <BackgroundMusic />

      {/* HEART OVERLAY */}
      <FloatingHeartsOverlay hearts={hearts} />

      {/* MAIN SCROLL CONTAINER */}
      <div
        className="h-screen overflow-y-scroll  overflow-x-hidden snap-y snap-mandatory scroll-smooth"
        onPointerDownCapture={(e) => {
          if (e.pointerType === "touch") {
            addHeart(e.clientX, e.clientY);
          }
        }}
      >
        {entered ? (
          <>
            <section
              ref={homeRef}
              className="min-h-screen snap-start snap-always flex items-center justify-center bg-[#faf7f2]"
            >
              <Landing />
            </section>

            <section
              ref={storyRef}
              className="min-h-screen snap-start snap-always"
            >
              <Story />
            </section>

            <section
              ref={eventsRef}
              className="min-h-screen snap-start snap-always"
            >
              <Events />
            </section>

            <section
              ref={venueRef}
              className="min-h-screen snap-start snap-always"
            >
              <Venue />
            </section>

            <section
              ref={galleryRef}
              className="min-h-screen snap-start snap-always"
            >
              <Gallery />
            </section>

            <section className="min-h-screen snap-start snap-always">
              <Countdown />
            </section>

            <section
              ref={contactRef}
              className="min-h-screen snap-start snap-always"
            >
              <Footer />
            </section>
          </>
        ) : (
          <section className="min-h-screen snap-start flex items-center justify-center">
            <ExperienceGate
              onEnter={() => {
                localStorage.setItem("experienceAccepted", "true");
                setEntered(true);
              }}
            />
          </section>
        )}
      </div>
    </div>
  );
}

{
  /* <button
            onClick={() => {
              localStorage.removeItem("experienceAccepted");
              window.location.reload();
            }}
            className="fixed bottom-4 right-4 px-4 py-2 text-xs rounded-full
             bg-[#d4af37]/80 text-black shadow-md
             hover:bg-[#d4af37] transition"
          >
            Reset Experience
          </button> */
}
