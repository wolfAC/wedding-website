import type { MotionValue } from "framer-motion";
import type { ReactNode } from "react";
import { createContext } from "react";

export interface ParallaxContextType {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export const ParallaxContext = createContext<ParallaxContextType>({
  // Provide dummy MotionValues for default
  x: { get: () => 0 } as MotionValue<number>,
  y: { get: () => 0 } as MotionValue<number>,
});

export interface ParallaxProviderProps {
  children: ReactNode;
}
