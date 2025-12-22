import { createContext, useContext } from "react";
import { useLanguage } from "@/hooks/useLanguage";

type LanguageContextType = ReturnType<typeof useLanguage>;

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguageContext = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguageContext must be used inside LanguageProvider");
  }
  return ctx;
};
