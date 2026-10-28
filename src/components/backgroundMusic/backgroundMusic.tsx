import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CirclePause, CirclePlay } from "@/components/icons";
import { siteConfig } from "@/config";
import { isSafari } from "@/utils/constant.tsx";

interface BackgroundMusicProps {
  autoPlay?: boolean;
  loop?: boolean;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

interface PulseBarsProps {
  isPlaying: boolean;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
  autoPlay = true,
  loop = true,
  audioRef,
}) => {
  const holdTimeout = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [showInfo, setShowInfo] = useState(false);
  const [collapsedWidth, setCollapsedWidth] = useState<number | null>(null);

  const songs = siteConfig.music;

  /*  Play / Pause */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    if (!isSafari) {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
    // eslint-disable-next-line
  }, []);

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
      className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-4 z-50 select-none"
    >
      <motion.div
        ref={containerRef}
        animate={{
          width:
            showInfo && collapsedWidth ? "70vw" : (collapsedWidth ?? "fit"),
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className="origin-right flex items-center gap-3 bg-white/70 backdrop-blur-sm p-1.5 rounded-full shadow-md border border-gold/30 overflow-hidden"
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
              className="flex items-center pl-3 pr-1 text-ink whitespace-nowrap shrink-0 gap-2"
            >
              <PulseBars isPlaying={isPlaying} />
              <div>
                <p className="text-sm font-semibold leading-tight">
                  {songs[currentIndex].title}
                </p>
                <p className="text-xs text-ink-muted">
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
          />

          <motion.button
            type="button"
            onClick={() => {
              const audio = audioRef.current;
              if (!audio) return;

              if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
              } else {
                audio
                  .play()
                  .then(() => {
                    setIsPlaying(true);
                  })
                  .catch(() => {
                    setIsPlaying(false);
                  });
              }
            }}
            aria-label={isPlaying ? "Pause audio" : "Play audio"}
            className="size-11 flex items-center justify-center rounded-full bg-gold/80 hover:bg-gold transition-colors duration-200 cursor-pointer"
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
                  <CirclePause className="size-6 text-ink" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <CirclePlay className="size-6 text-ink" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

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
          className="h-4 w-1 origin-bottom rounded-sm bg-gold"
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
