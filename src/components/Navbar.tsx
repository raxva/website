import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-3">
          <WingLogo />
          <span className="text-lg font-bold tracking-tight text-foreground">Raxva</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t("nav.services")}
            </a>
            <a href="#learn" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t("nav.learn")}
            </a>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </motion.nav>
  );
};

const WingLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
    <path d="M2 12c1-3 4-8 10-8 3 0 5 1.5 6 3s1.5 4 1 7c-2-1-4-2-7-2-4 0-7 2-10 4 0-2 0-3 0-4z" />
    <path d="M12 4c2 2 3 5 3 8" />
    <path d="M8 8c1.5 1 2.5 3 3 5" />
    <path d="M5 11c1 .5 2 2 2.5 4" />
  </svg>
);

export default Navbar;
