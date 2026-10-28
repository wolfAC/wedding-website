import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Heart, X } from "@/components/icons";
import { content, siteConfig, type SectionKey } from "@/config";

interface HeaderProps {
  onNavigate: (section: SectionKey) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { groom, bride } = siteConfig.monogram;

  return (
    <header className="fixed z-50 w-full border-b border-gold/20 bg-ivory/85 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <button
          type="button"
          onClick={() => onNavigate("home")}
          aria-label={`${siteConfig.groomName} & ${siteConfig.brideName}, back to top`}
          className="notranslate -ml-2 min-h-11 cursor-pointer px-2 font-script text-2xl text-gold-ink"
        >
          {groom} <span className="text-lg">&amp;</span> {bride}
        </button>

        {/* Desktop Nav */}
        <nav aria-label="Main" className="hidden gap-2 font-serif text-lg text-ink md:flex">
          {content.nav.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => onNavigate(item.key)}
              className="min-h-11 cursor-pointer px-3 transition-colors duration-200 hover:text-gold-ink"
            >
              {item.title}
            </button>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="flex size-11 cursor-pointer items-center justify-center text-gold-ink md:hidden"
          onClick={() => {
            if (localStorage.getItem("experienceAccepted") === "true") {
              setIsOpen(!isOpen);
            }
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: 0.15 }}
            >
              {isOpen ? (
                <X className="size-7" />
              ) : (
                <Heart className="size-7" fill="currentColor" />
              )}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            id="mobile-menu"
            aria-label="Main"
            className="overflow-hidden border-t border-gold/20 md:hidden"
          >
            <ul className="flex flex-col items-center gap-1 py-4 font-serif text-ink">
              {content.nav.map((item) => (
                <li key={item.key}>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate(item.key);
                      setIsOpen(false);
                    }}
                    className="min-h-11 px-6 text-xl transition-colors duration-200 hover:text-gold-ink"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
