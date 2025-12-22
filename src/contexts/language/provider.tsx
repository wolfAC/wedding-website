import { useLanguage } from "@/hooks/useLanguage";
import { LanguageContext } from "./context";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useLanguage();

  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  );
}
