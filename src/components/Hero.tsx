import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Liquid orbs */}
      <div className="liquid-orb -top-40 -left-40 h-[500px] w-[500px] animate-float" style={{ background: "var(--orb-1)" }} />
      <div className="liquid-orb -bottom-40 -right-40 h-[600px] w-[600px] animate-float-slow" style={{ background: "var(--orb-2)" }} />
      <div className="liquid-orb top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-pulse-soft" style={{ background: "var(--orb-1)" }} />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-panel mx-auto mb-8 inline-flex items-center gap-3 rounded-full px-5 py-2.5">
            <span className="text-lg">🪽</span>
            <span className="text-sm font-medium text-muted-foreground">{t("hero.subtitle")}</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-gradient mb-2 text-7xl font-black tracking-tighter sm:text-8xl md:text-9xl"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mb-2 font-persian text-3xl font-bold text-muted-foreground sm:text-4xl"
        >
          {t("hero.titlePersian")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 text-xl font-semibold tracking-wide text-foreground/70 uppercase"
        >
          {t("hero.motto")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <motion.a
            href="#learn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-panel-hover inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-foreground"
          >
            <PlayIcon />
            {t("hero.cta")}
          </motion.a>

          <Link to="/clients">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              🪽 {t("hero.webClient")}
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

export default Hero;
