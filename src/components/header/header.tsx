// import { LanguagesIcon, RestIcon } from "@/assets/assets";
import { useLanguageContext } from "@/contexts/language/context";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface HeaderProps {
  onNavigate: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    translations,
    //  changeLanguage,
    //  language
  } = useLanguageContext();

  return (
    <header className="fixed w-full bg-white/10 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div
          onClick={() => onNavigate("home")}
          className="text-2xl md:text-2xl font-[cursive] font-semibold text-gray-800 tracking-wide cursor-pointer"
        >
          <span className="text-[#d4af37] notranslate">Anbu</span>{" "}
          <span className="text-gray-800 notranslate">&</span>{" "}
          <span className="text-[#d4af37] notranslate">Varshini</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-serif text-gray-800">
          {translations?.headers?.navItems?.map((item) => (
            <button
              key={item?.key}
              onClick={() => onNavigate(item.key)}
              className="hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              {item?.title}
            </button>
          ))}
        </nav>

        <div
          className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={() => {
            if (localStorage.getItem("experienceAccepted") === "true") {
              setIsOpen(!isOpen);
            }
          }}
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
              className="text-[#d4af37] text-4xl notranslate"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              &#10084;&#65038;
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
            className="md:hidden bg-white/10 backdrop-blur-md shadow-md"
          >
            <ul className="flex flex-col items-center py-6 space-y-4 font-serif">
              {translations?.headers?.navItems?.map((item) => (
                <li key={item?.key}>
                  <button
                    onClick={() => {
                      onNavigate(item?.key);
                      setIsOpen(false);
                    }}
                    className="text-lg hover:text-[#d4af37]"
                  >
                    {item?.title}
                  </button>
                </li>
              ))}
            </ul>

            {/* <div className="flex items-center justify-center space-x-3">
              <HeaderAction
                label="Change Language"
                icon={<LanguagesIcon />}
                onClick={() =>
                  language === "english"
                    ? changeLanguage("english")
                    : changeLanguage("tamil")
                }
              />

              <HeaderAction
                label="Reset"
                icon={<RestIcon />}
                onClick={() => {
                  localStorage.setItem("experienceAccepted", "false");
                  window.location.reload();
                }}
              />
            </div> */}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

// const HeaderAction: React.FC<{
//   icon: React.ReactNode;
//   label: string;
//   onClick: () => void;
// }> = ({ icon, label, onClick }) => (
//   <button
//     onClick={onClick}
//     aria-label={label}
//     className="group relative w-9 h-9 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-[#d4af37]/20 transition-all"
//   >
//     <span className="text-lg text-[#d4af37] select-none">{icon}</span>

//     {/* Tooltip (desktop only) */}
//     <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs bg-black/70 text-white px-2 py-1 rounded transition pointer-events-none whitespace-nowrap">
//       {label}
//     </span>
//   </button>
// );
