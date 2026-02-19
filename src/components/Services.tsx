import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const services = [
  {
    key: "nostr",
    color: "#8B5CF6",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l3 3 5-5" />
      </svg>
    ),
  },
  {
    key: "matrix",
    color: "#0DBD8B",
    comingSoon: true,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0DBD8B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01" />
      </svg>
    ),
  },
  {
    key: "jitsi",
    color: "#508EF5",
    comingSoon: true,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#508EF5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.6 11.6L22 7v10l-6.4-4.5v-1z" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-gradient mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground">{t("services.subtitle")}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.key}
              variants={item}
              className="glass-panel-hover group relative rounded-2xl p-8"
            >
              {service.comingSoon && (
                <span className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-muted-foreground">
                  {t(`services.${service.key}.comingSoon`)}
                </span>
              )}
              <div className="mb-5 inline-flex rounded-xl bg-accent/50 p-3 transition-colors group-hover:bg-accent">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {t(`services.${service.key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
