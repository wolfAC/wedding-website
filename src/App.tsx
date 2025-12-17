import { useEffect, useRef, useState } from "react";
import "./App.css";
import Blessing from "./components/blessings/blessing";
import Countdown from "./components/countdown/countdown";
import Family from "./components/family/family";
import Footer from "./components/footer/footer";
import Gallery from "./components/gallery/gallery";
import Header from "./components/header/header";
import FloatingHearts from "./components/floatingHeart/floatingHeart";
import Invitation from "./components/Invitation/invitation";
import Landing from "./components/landing/landing";
import Story from "./components/story/story";
import Venue from "./components/venue/venue";
import FallBack from "./components/fallBack/fallBack";
import BackgroundMusic from "./components/backgroundMusic/backgroundMusic";

function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const storyRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const familyRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);

  console.log("Body scrollTop:", document.body.scrollTop);
  console.log("HTML scrollTop:", document.documentElement.scrollTop);

  const scrollToSection = (id: string) => {
    const map: Record<string, React.RefObject<HTMLDivElement | null>> = {
      home: homeRef,
      "our-story": storyRef,
      gallery: galleryRef,
      family: familyRef,
      contact: contactRef,
    };

    const element = map[id]?.current;
    if (!element) return;

    const container = document.querySelector("#root"); // or your scrollable wrapper

    const headerOffset = 80;
    const elementPosition =
      element.getBoundingClientRect().top + container.scrollTop;
    const offsetPosition = elementPosition - headerOffset;

    console.log("Scrolling inside container to:", offsetPosition);

    container.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const container = document.querySelector("#root"); // or your scrollable div
    if (container) container.scrollTo({ top: 0 });
  }, []);

  // if (loading) return <LoadingScreen />;
  return (
    <div
      className="w-full min-h-screen overflow-y-auto"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {/* <div className="hidden md:block">
        <FallBack />
      </div> */}
      {/* <div className="block md:hidden"> */}
      <FloatingHearts>
        <Header onNavigate={scrollToSection} />
        <BackgroundMusic />{" "}
        <div
          className="lg:flex justify-center items-center scroll-mt-20"
          ref={homeRef}
        >
          <Landing />
        </div>
        <div className="scroll-mt-20">
          <Invitation />
        </div>
        <div className="scroll-mt-20">
          <Venue />
        </div>
        <div className="scroll-mt-20" ref={storyRef}>
          <Story />
        </div>
        <div className="scroll-mt-20" ref={familyRef}>
          <Family />
        </div>
        <div className="scroll-mt-20" ref={galleryRef}>
          <Gallery />
        </div>
        <div className="scroll-mt-20">
          <Blessing />
        </div>
        <div className="scroll-mt-20">
          <Countdown />
        </div>
        <div className="scroll-mt-20" ref={contactRef}>
          <Footer />
        </div>
      </FloatingHearts>
      {/* </div> */}
    </div>
  );
}

export default App;
