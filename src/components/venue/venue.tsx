import { LocationIcon } from "@/assets/assets";
import { motion } from "framer-motion";

export default function Venue() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen bg-linear-to-b from-[#fffaf0] to-[#faf7f2] py-20 px-6 overflow-hidden cursor-pointer"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl md:text-5xl font-serif text-gray-800 mb-16"
      >
        Venue & Location
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-0">
        {/* Left: Venue Details */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/40 backdrop-blur-3xl border border-[#d4af37]/30 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-shadow duration-500 max-w-md mx-auto overflow-hidden"
        >
          {/* Decorative Background Circles */}
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-linear-to-tr from-[#d4af37]/20 to-[#d4af37]/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-linear-to-br from-[#d4af37]/10 to-[#d4af37]/5 blur-3xl pointer-events-none" />

          {/* Floating Icon half-outside */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -top-24 left-1/2 -translate-x-1/2 flex justify-center w-full"
          >
            <span className="text-[180px] text-[#d4af37]/20 pointer-events-none">
              <LocationIcon size={180} />
            </span>
          </motion.div>

          {/* Spacer */}
          <div className="h-25" />

          {/* Title */}
          <h3 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4 text-center">
            Sri Lakshmi Narayan Mahal
          </h3>

          {/* Address */}
          <p className="text-gray-700 leading-relaxed mb-8 text-center text-sm md:text-base">
            No. 93, C.T.H Road, <br />
            Next to Sevvapet Police Station, <br />
            Thiruvallur – 602025
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://maps.app.goo.gl/67m1XDrmg4t6py9T8"
              target="_blank"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-6 py-3 rounded-full text-white bg-linear-to-r from-[#d4af37] via-[#e6c670] to-[#d4af37] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Open in Google Maps
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative border border-[#d4af37]/40 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500"
        >
          <iframe
            title="Sri Lakshmi Narayan Mahal"
            src="https://www.google.com/maps?q=Sri+Lakshmi+Narayan+Mahal+Sevvapet&z=18&t=k&output=embed"
            className="w-full h-96 md:h-full border-0 rounded-3xl transition-transform duration-500"
            loading="lazy"
          />
          {/* Optional floating decorative circle */}
          <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-linear-to-tr from-[#d4af37]/20 to-[#d4af37]/5 blur-2xl pointer-events-none" />
        </motion.div>
      </div>
    </motion.section>
  );
}
