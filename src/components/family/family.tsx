import { motion } from "framer-motion";

type FamilyMember = {
  name: string;
  role: string;
};

const groomFamily: FamilyMember[] = [
  { name: "Mr. Malar Chezhiyan", role: "Father of Groom" },
  { name: "Mrs. Kalpana", role: "Mother of Groom" },
];

const brideFamily: FamilyMember[] = [
  { name: "Mr. Ranganathan", role: "Father of Bride" },
  { name: "Mrs. Durgavathi", role: "Mother of Bride" },
];

interface FamilyCardProps {
  member: FamilyMember;
}

const FamilyCard: React.FC<FamilyCardProps> = ({ member }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="text-center"
  >
    <div className="relative w-48 h-48 mx-auto rounded-full bg-linear-to-br from-[#fff4e6] to-[#fdeedd] border-4 border-[#d4af37] flex items-center justify-center mb-4 shadow-lg shadow-[#d4af37]/30 transition-transform hover:scale-110 hover:shadow-xl">
      {/* Decorative petals */}
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#d4af37] text-2xl animate-pulse">
        ✿
      </span>
      <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[#d4af37] text-2xl animate-pulse">
        ✿
      </span>
      <span className="absolute top-1/2 -right-3 -translate-y-1/2 text-[#d4af37] text-2xl animate-ping">
        ✿
      </span>
      <span className="absolute top-1/2 -left-3 -translate-y-1/2 text-[#d4af37] text-2xl animate-ping">
        ✿
      </span>

      <div className="font-serif text-center">
        <p className="text-gray-800 text-lg font-semibold">{member.name}</p>
      </div>
    </div>

    <motion.p
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15, duration: 0.4 }}
      className="font-serif text-sm text-gray-500"
    >
      {member.role}
    </motion.p>
  </motion.div>
);

const Family: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen bg-linear-to-b from-[#fffaf0] to-[#faf7f2] flex flex-col items-center justify-center px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center text-4xl md:text-5xl font-serif mb-16 text-gray-800"
      >
        Our Family
      </motion.h2>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Groom Family */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-center font-serif text-2xl text-gray-800 mb-8">
            Groom Family
          </h3>

          <div className="flex flex-col items-center gap-6">
            {groomFamily.map((member) => (
              <FamilyCard key={member.name} member={member} />
            ))}
          </div>
        </motion.div>

        {/* Bride Family */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-center font-serif text-2xl text-gray-800 mb-8">
            Bride Family
          </h3>

          <div className="flex flex-col items-center gap-6">
            {brideFamily.map((member) => (
              <FamilyCard key={member.name} member={member} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Family;
