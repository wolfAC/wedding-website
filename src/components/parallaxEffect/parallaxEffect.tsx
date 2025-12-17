import { useParallax } from "@/hooks/useParallax";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";

export function ParallaxEffect({
  children,
  depth = 20,
}: {
  children: React.ReactNode;
  depth?: number;
}) {
  const { x, y } = useParallax();

  // Transform MotionValues by depth
  const xScaled = useTransform(x, (val) => val * depth);
  const yScaled = useTransform(y, (val) => val * depth);

  return (
    <motion.div
      style={{
        x: xScaled,
        y: yScaled,
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}
