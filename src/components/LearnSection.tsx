import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const LearnSection = () => {
  const { t } = useTranslation();

  return (
    <section id="learn" className="relative px-6 py-32">
      <div className="liquid-orb -right-60 top-0 h-[400px] w-[400px] animate-float-slow" style={{ background: "var(--orb-2)" }} />

      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel-hover rounded-3xl p-10 text-center sm:p-16"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/50">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-foreground">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>

          <h2 className="text-gradient mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {t("learn.title")}
          </h2>
          <p className="mb-3 text-lg font-medium text-secondary-foreground">
            {t("learn.subtitle")}
          </p>
          <p className="mx-auto mb-8 max-w-lg leading-relaxed text-muted-foreground">
            {t("learn.description")}
          </p>

          <motion.a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            {t("learn.cta")}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default LearnSection;
