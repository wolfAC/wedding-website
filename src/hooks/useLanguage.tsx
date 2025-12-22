import { useCallback, useEffect, useState } from "react";
import english from "../languages/english.json";
import tamil from "../languages/tamil.json";

export type Language = "english" | "tamil";

const LANGUAGES = { english, tamil };

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem("language") as Language) || "english";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const translations = LANGUAGES[language];

  const changeLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);

  return {
    language,
    changeLanguage,
    translations,
  };
}
