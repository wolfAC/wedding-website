import { ParallaxContext } from "@/contexts/parallax/context";
import { useContext } from "react";

export const useParallax = () => useContext(ParallaxContext);
