import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface HeaderProps {
  onNavigate: (id: string) => void;
}

const navItems = ["Home", "Our Story", "Family", "Gallery", "From The Couple"];

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-[cursive] font-semibold text-gray-800 tracking-wide">
          <span className="text-[#d4af37]">Anbu</span>{" "}
          <span className="text-gray-800">&</span>{" "}
          <span className="text-[#d4af37]">Varshini</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-serif text-gray-800">
          {navItems.map((item) => {
            const id = item.toLowerCase().replaceAll(" ", "-");
            return (
              <button
                key={item}
                onClick={() => onNavigate(id)}
                className="hover:text-[#d4af37] transition-colors"
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* Hamburger */}

        <div
          className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // X for open state
            <div className="relative w-8 h-8">
              <motion.span
                className="absolute w-full h-0.5 bg-[#d4af37] top-1/2 left-0 origin-center"
                animate={{ rotate: 45 }}
              />
              <motion.span className="absolute w-full h-0.5 bg-[#d4af37] top-1/2 left-0 -translate-y-1/2 opacity-0" />
              <motion.span
                className="absolute w-full h-0.5 bg-[#d4af37] top-1/2 left-0 origin-center"
                animate={{ rotate: -45 }}
              />
            </div>
          ) : (
            // Heart loop when menu is closed
            <motion.div
              className="text-[#d4af37] text-4xl"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              ❤
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md shadow-md"
          >
            <ul className="flex flex-col items-center py-6 space-y-4 font-serif">
              {navItems.map((item) => {
                const id = item.toLowerCase().replace(" ", "-");
                return (
                  <li key={item}>
                    <button
                      onClick={() => {
                        onNavigate(id);
                        setIsOpen(false);
                      }}
                      className="text-lg hover:text-[#d4af37]"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
