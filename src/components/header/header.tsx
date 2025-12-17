import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface HeaderProps {
  onNavigate: (id: string) => void;
}

const navItems = ["Home", "Our Story", "Family", "Gallery", "Contact"];

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <img className="w-10 h-10" src="/icons/logo.png" alt="logo" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-serif text-gray-800">
          {navItems.map((item) => {
            const id = item.toLowerCase().replace(" ", "-");
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
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer space-y-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-8 h-0.5 bg-[#d4af37] ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-8 h-0.5 bg-[#d4af37] ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-8 h-0.5 bg-[#d4af37] ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
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
            className="md:hidden bg-white shadow-md"
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
