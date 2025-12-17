import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BackgroundMusicProps {
  autoPlay?: boolean; // optional autoplay
  loop?: boolean; // loop all songs
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
  autoPlay = true,
  loop = true,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const songs = [
    "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => console.log("Autoplay prevented by browser"));
    } else {
      audio.pause();
    }
  }, [isPlaying, currentIndex]);

  const handleEnded = () => {
    if (currentIndex < songs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (loop) {
      setCurrentIndex(0);
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <AnimatePresence>
      {
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white/50 backdrop-blur-sm p-2 rounded-full shadow-md"
          >
            <audio
              ref={audioRef}
              src={songs[currentIndex]}
              onEnded={handleEnded}
              autoPlay={autoPlay}
            />
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 py-1 rounded-full bg-[#d4af37]/70 text-white font-semibold hover:bg-[#d4af37] transition"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
            <span className="text-gray-800 text-sm">
              {currentIndex + 1} / {songs.length}
            </span>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  );
};

export default BackgroundMusic;
