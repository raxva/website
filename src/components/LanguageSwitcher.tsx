import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="glass-panel rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/50"
    >
      {isRtl ? "EN" : "فا"}
    </motion.button>
  );
};

export default LanguageSwitcher;
