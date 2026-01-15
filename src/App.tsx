import { useEffect, useRef, useState } from "react";
import "./App.css";
import BackgroundMusic from "./components/backgroundMusic/backgroundMusic";
// import Blessing from "./components/blessings/blessing";
import Countdown from "./components/countdown/countdown";
// import Family from "./components/family/family";
import FloatingHearts from "./components/floatingHeart/floatingHeart";
import Footer from "./components/footer/footer";
import Gallery from "./components/gallery/gallery";
import Header from "./components/header/header";
// import Invitation from "./components/Invitation/invitation";
import Landing from "./components/landing/landing";
import Story from "./components/story/story";
import Venue from "./components/venue/venue";
// import WeddingQRCard from "./components/weddingQr/weddingQr";
import ExperienceGate from "./components/experienceGate/experienceGate";
import Events from "./components/events/Events";

function App() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const storyRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const eventsRef = useRef<HTMLDivElement | null>(null);
  // const familyRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [entered, setEntered] = useState<boolean>(() => {
    return localStorage.getItem("experienceAccepted") === "true";
  });

  const scrollToSection = (id: string) => {
    const map: Record<string, React.RefObject<HTMLDivElement | null>> = {
      home: homeRef,
      "our-story": storyRef,
      gallery: galleryRef,
      // family: familyRef,
      events: eventsRef,
      "from-the-couple": contactRef,
    };

    const element = map[id]?.current;

    console.log(element, "element");

    if (!element) {
      return;
    }

    const container = document.querySelector("#root");

    if (!container) {
      return;
    }

    const headerOffset = 80;

    const elementPosition =
      element.getBoundingClientRect().top + container.scrollTop;

    const offsetPosition = elementPosition - headerOffset;

    container.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = document.querySelector("#root");
    if (container) container.scrollTo({ top: 0 });
  }, []);

  if (entered === null) {
    return null;
  }

  return (
    <div className="relative">
      <div ref={headerRef}>
        <Header onNavigate={scrollToSection} />
      </div>
      <BackgroundMusic />
      <div
        className="w-full min-h-screen overflow-y-auto snap-y snap-mandatory"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {entered ? (
          <FloatingHearts>
            <div
              className="h-full w-full lg:flex bg-[#faf7f2] justify-center items-center scroll-mt-20 snap-start"
              ref={homeRef}
            >
              <Landing />
            </div>

            {/* <div className="scroll-mt-20 snap-start">
              <Invitation />
            </div> */}

            <div className="scroll-mt-20 snap-start">
              <Venue />
            </div>

            <div className="scroll-mt-20 snap-start" ref={storyRef}>
              <Story />
            </div>

            <div className="scroll-mt-20 snap-start" ref={eventsRef}>
              <Events />
            </div>

            {/* <div className="scroll-mt-20 snap-start" ref={familyRef}>
              <Family />
            </div> */}

            <div className="scroll-mt-20 snap-start" ref={galleryRef}>
              <Gallery />
            </div>

            {/* <div className="scroll-mt-20 snap-start">
              <Blessing />
            </div> */}

            <div className="scroll-mt-20 snap-start">
              <Countdown />
            </div>
            {/* <div
              className="scroll-mt-20  w-full flex items-center justify-center bg-[#faf7f2] pb-20"
              ref={contactRef}
            >
              <WeddingQRCard qrSrc={"/icons/weddingQR.png"} />
            </div> */}
            <div className="scroll-mt-20 snap-start" ref={contactRef}>
              <Footer />
            </div>
          </FloatingHearts>
        ) : (
          <FloatingHearts>
            <ExperienceGate
              onEnter={() => {
                localStorage.setItem("experienceAccepted", "true");
                setEntered(true);
              }}
            />
          </FloatingHearts>
        )}
      </div>
    </div>
  );
}

export default App;

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
