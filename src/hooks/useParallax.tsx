import { ParallaxContext } from "@/contexts/parallaxContext";
import { useContext } from "react";

export const useParallax = () => useContext(ParallaxContext);
