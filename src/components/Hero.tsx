import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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
            <WingLogoLarge />
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
          className="mb-4 font-persian text-3xl font-bold text-muted-foreground sm:text-4xl"
        >
          {t("hero.titlePersian")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          {t("hero.description")}
        </motion.p>

        <motion.a
          href="#learn"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass-panel-hover inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-foreground"
        >
          <PlayIcon />
          {t("hero.cta")}
        </motion.a>
      </div>
    </section>
  );
};

const WingLogoLarge = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
    <path d="M2 12c1-3 4-8 10-8 3 0 5 1.5 6 3s1.5 4 1 7c-2-1-4-2-7-2-4 0-7 2-10 4 0-2 0-3 0-4z" />
    <path d="M12 4c2 2 3 5 3 8" />
    <path d="M8 8c1.5 1 2.5 3 3 5" />
    <path d="M5 11c1 .5 2 2 2.5 4" />
  </svg>
);

const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

export default Hero;
