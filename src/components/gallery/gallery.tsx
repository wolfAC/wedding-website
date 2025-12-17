import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section className="min-h-screen bg-[#faf7f2] py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-4xl md:text-5xl font-serif text-gray-800 mb-14"
      >
        Photo Gallery
      </motion.h2>

      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {[
          "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
        ].map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: index * 0.06,
            }}
            className="relative overflow-hidden rounded-2xl group bg-white/60 backdrop-blur-sm will-change-transform"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90"
            />

            {/* Gold Hover Outline */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#d4af37] transition duration-700 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
