import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
          <span className="text-2xl">🪽</span>
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
            <Link to="/clients" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t("nav.clients")}
            </Link>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
