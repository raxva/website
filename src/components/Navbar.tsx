import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-4 right-4 z-50"
    >
      <div className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-3 py-2.5 sm:px-5 sm:py-3">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <span className="text-xl sm:text-2xl">🪽</span>
          <span className="text-base font-bold tracking-tight text-foreground sm:text-lg">Raxva</span>
        </Link>

        {/* Desktop links */}
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
          <Link to="/donate" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t("nav.donate")}
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-2 sm:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-5 bg-foreground"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-5 bg-foreground"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-5 bg-foreground"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass-panel mx-auto mt-2 max-w-6xl rounded-2xl px-5 py-4"
          >
            <div className="flex flex-col gap-4">
              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("nav.services")}
              </a>
              <a
                href="#learn"
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("nav.learn")}
              </a>
              <Link to="/clients" onClick={() => setOpen(false)} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {t("nav.clients")}
              </Link>
              <Link to="/donate" onClick={() => setOpen(false)} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {t("nav.donate")}
              </Link>
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
