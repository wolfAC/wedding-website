import React from "react";
import { motion } from "framer-motion";
import { useLanguageContext } from "@/contexts/language/context";

interface WeddingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  place: string;
  highlight?: boolean;
  badge?: string;
  delay: string;
  icon: React.ReactNode;
}

const Events: React.FC = () => {
  const { translations } = useLanguageContext();

  const events: WeddingEvent[] = [
    {
      id: "Opening Prayer",
      title: "Starting Prayer",
      date: "March 5, 2026",
      time: "6:00 PM onwards",
      place: translations?.venue?.place,
      delay: "0.4s",
      icon: (
        <svg
          viewBox="0 0 512 512"
          enableBackground="new 0 0 512 512"
          width="24"
          height="24"
        >
          <g>
            <path
              fill="none"
              stroke="#D4AF37"
              strokeWidth={15}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="&#10;&#9;&#9;M199.411,329.405c6.426-10.283,10.11-19.939,10.11-29.311v-42.755c0-12.761,10.452-23.187,23.218-23.187l0,0&#10;&#9;&#9;c12.794,0,23.247,10.425,23.247,23.187v47.74"
            />
            <path
              fill="none"
              stroke="#D4AF37"
              strokeWidth={15}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="&#10;&#9;&#9;M228.113,234.608l26.474-100.665c9.424-30.023-31.043-42.385-41.181-8.289l-45.322,121.459&#10;&#9;&#9;c-7.454,19.939-28.044,47.797-21.39,79.529l2.542,15.809 M154.203,373.328l4.198,26.035c2.456,24.184-7.197,35.207-17.021,47.228&#10;&#9;&#9;L80.066,504.5 M201.896,504.5l36.526-55.83c15.736-22.389,17.563-37.457,17.563-58.878V257.339"
            />
            <path
              fill="none"
              stroke="#D4AF37"
              strokeWidth={15}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="&#10;&#9;&#9;M312.589,329.405c-6.426-10.283-10.11-19.939-10.11-29.311v-42.755c0-12.761-10.452-23.187-23.247-23.187l0,0&#10;&#9;&#9;c-12.766,0-23.247,10.425-23.247,23.187v47.74"
            />
            <path
              fill="none"
              stroke="#D4AF37"
              strokeWidth={15}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="&#10;&#9;&#9;M283.887,234.608l-26.474-100.665c-9.424-30.023,31.014-42.385,41.153-8.289l45.351,121.459&#10;&#9;&#9;c7.454,19.939,28.044,47.797,21.39,79.529l-2.57,15.866 M357.797,373.328l-4.198,26.035c-2.456,24.184,7.168,35.207,17.021,47.228&#10;&#9;&#9;l61.315,57.909 M310.075,504.5l-36.526-55.83c-15.707-22.389-17.563-37.457-17.563-58.878V257.339"
            />
          </g>
        </svg>
      ),
    },
    {
      id: "ceremony",
      title: "Wedding Ceremony",
      date: "March 5, 2026",
      time: "7:00 PM onwards",
      place: translations?.venue?.place,
      highlight: true,
      badge: "Holy Matrimony",
      delay: "0.2s",
      icon: (
        <>
          <path d="M12 2v20" />
          <path d="M6 7h12" />
        </>
      ),
    },
    {
      id: "reception",
      title: "Reception",
      date: "March 5, 2026",
      time: "8:00 PM onwards",
      place: translations?.venue?.place,
      delay: "0.4s",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#D4AF37"
          stroke-width="1.5"
        >
          <path d="M8 21h8M12 17v4M17 5H7l1 12h8l1-12zM7 5V3h10v2" />
          <path d="M12 8v4" />
        </svg>
      ),
    },
  ];

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
        <p
          className="font-sans-modern text-sm tracking-[0.3em] uppercase mb-4"
          style={{ color: "#d4af37" }}
        >
          SAVE THE DATES
        </p>
        Events
        <div className="divider-ornament mt-6">
          <span className="divider-line" />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#D4AF37">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
          </svg>
          <span className="divider-line" />
        </div>
      </motion.h2>

      {/* Events */}
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {events.map((event) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            key={event.id}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className={`rounded-2xl p-8 text-center shadow-lg ${
                event.highlight ? "shadow-xl" : ""
              }`}
              style={
                event.highlight
                  ? {
                      background: "linear-gradient(135deg, #d4af37, #f4e4bc)",
                    }
                  : { border: "1px solid rgba(212, 175, 55, 0.2)" }
              }
            >
              <div
                className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  event.highlight ? "bg-white/30" : ""
                }`}
                style={
                  event.highlight
                    ? undefined
                    : {
                        background:
                          "linear-gradient(135deg, rgba(212,175,55,0.1), rgba(244,228,188,0.3))",
                      }
                }
              >
                <svg
                  width={36}
                  height={36}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={event.highlight ? "#5C4A3D" : "#D4AF37"}
                  strokeWidth={1.5}
                >
                  {event.icon}
                </svg>
              </div>

              <h3
                className="font-serif-elegant text-2xl mb-2"
                style={{ color: "#5c4a3d" }}
              >
                {event.title}
              </h3>

              <div className="divider-ornament my-4">
                <span className="divider-line" style={{ width: 30 }} />
              </div>

              <p
                className="font-sans-modern text-sm font-medium mb-1"
                style={{
                  color: event.highlight ? "#5c4a3d" : "#d4af37",
                }}
              >
                {event.date}
              </p>

              <p
                className="font-sans-modern text-sm"
                style={{ color: event.highlight ? "#6b5b4f" : "#9b8b7d" }}
              >
                {event.time}
              </p>

              <p
                className="font-sans-modern text-xs mt-4"
                style={{ color: "#7d6e63" }}
              >
                {event.place}
              </p>

              {event.badge && (
                <span
                  className="inline-block mt-3 px-4 py-1 rounded-full text-xs bg-white/50"
                  style={{ color: "#5c4a3d" }}
                >
                  {event.badge}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Events;
