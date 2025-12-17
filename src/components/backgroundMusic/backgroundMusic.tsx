import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayIcon, PauseIcon } from "../../assets/assets.tsx";

interface BackgroundMusicProps {
  autoPlay?: boolean;
  loop?: boolean;
}

interface PulseBarsProps {
  isPlaying: boolean;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
  autoPlay = true,
  loop = true,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const holdTimeout = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [showInfo, setShowInfo] = useState(false);
  const [collapsedWidth, setCollapsedWidth] = useState<number | null>(null);

  const songs = [
    {
      src: "/music/perfect.webm",
      title: "Perfect",
      artist: "Ed Sheeran",
    },
  ];

  /*  Play / Pause */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.02;
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying, currentIndex]);

  /* Track ended */
  const handleEnded = () => {
    if (currentIndex < songs.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else if (loop) {
      setCurrentIndex(0);
    } else {
      setIsPlaying(false);
    }
  };

  /*  Press & Hold */
  const startHold = () => {
    holdTimeout.current = window.setTimeout(() => {
      setShowInfo(true);
    }, 400);
  };

  const endHold = () => {
    if (holdTimeout.current) {
      clearTimeout(holdTimeout.current);
      holdTimeout.current = null;
    }
    setShowInfo(false);
  };

  /*  Measure initial collapsed width */
  useEffect(() => {
    if (containerRef.current && collapsedWidth === null) {
      setCollapsedWidth(containerRef.current.getBoundingClientRect().width);
    }
  }, [collapsedWidth]);

  return (
    <motion.div
      onPointerDown={(e) => {
        e.preventDefault();
        startHold();
      }}
      onPointerUp={endHold}
      onPointerLeave={endHold}
      onPointerCancel={endHold}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-6 right-4 z-50 select-none"
    >
      <motion.div
        ref={containerRef}
        animate={{
          width: showInfo && collapsedWidth ? "70vw" : collapsedWidth ?? "fit",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        style={{ transformOrigin: "right center" }}
        className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-2 rounded-full shadow-md overflow-hidden"
      >
        {/*  Song Info */}
        <AnimatePresence>
          {showInfo && (
            <motion.div
              key="info"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
              className="flex items-center pl-3 pr-1 text-black whitespace-nowrap shrink-0 gap-2"
            >
              <PulseBars isPlaying={isPlaying} />
              <div>
                <p className="text-sm font-semibold leading-tight">
                  {songs[currentIndex].title}
                </p>
                <p className="text-xs opacity-70">
                  {songs[currentIndex].artist}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/*  Controls */}
        <div className="flex items-center gap-3 ml-auto shrink-0">
          <audio
            ref={audioRef}
            src={songs[currentIndex].src}
            onEnded={handleEnded}
            autoPlay={autoPlay}
          />

          <motion.div
            role="button"
            tabIndex={0}
            onClick={() => setIsPlaying((p) => !p)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#d4af37]/70 hover:bg-[#d4af37] cursor-pointer"
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="pause"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <PauseIcon color="black" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <PlayIcon color="black" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* <span className="text-gray-800 text-sm pr-2 select-none">
            {currentIndex + 1} / {songs.length}
          </span> */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BackgroundMusic;

const PulseBars: React.FC<PulseBarsProps> = ({ isPlaying }) => {
  const bars = [0, 1, 2, 3];
  return (
    <div className="flex gap-1 items-end pr-2 h-full">
      {bars.map((i) => (
        <motion.div
          key={i}
          className="w-1 bg-[#d4af37] rounded-sm"
          style={{ height: 16, transformOrigin: "bottom" }} // fixed height
          animate={{
            scaleY: isPlaying ? [0.3, 1, 0.3] : 0.3, // animates relative to height
          }}
          transition={{
            duration: 0.6,
            repeat: isPlaying ? Infinity : 0,
            repeatType: "mirror",
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
};
