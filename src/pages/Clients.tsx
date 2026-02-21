import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const nostrClients = [
  { name: "Damus", key: "damus", platform: "iOS", url: "https://apps.apple.com/app/damus/id1628663131", color: "#8B5CF6" },
  { name: "Amethyst", key: "amethyst", platform: "Android", url: "https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst", color: "#8B5CF6" },
  { name: "Primal", key: "primal", platform: "iOS / Android / Web", url: "https://primal.net", color: "#8B5CF6" },
];

const matrixClients = [
  { name: "Element", key: "element", platform: "All platforms", url: "https://element.io/download", color: "#0DBD8B" },
  { name: "FluffyChat", key: "fluffychat", platform: "iOS / Android / Web", url: "https://fluffychat.im", color: "#0DBD8B" },
];

const jitsiClients = [
  { name: "Jitsi Meet", key: "jitsiMeet", platform: "iOS / Android", url: "https://jitsi.org/downloads/", color: "#508EF5" },
];

const simplexClients = [
  { name: "SimpleX Chat", key: "simplexChat", platform: "iOS / Android / Desktop", url: "https://simplex.chat/downloads/", color: "#E4405F" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Clients = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      {/* Nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-2xl">🪽</span>
            <span className="text-lg font-bold tracking-tight text-foreground">Raxva</span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            ← {t("nav.services")}
          </Link>
        </div>
      </nav>

      <section className="px-6 pt-28 pb-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center"
          >
            <h1 className="text-gradient mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
              {t("clients.title")}
            </h1>
            <p className="text-lg text-muted-foreground">{t("clients.subtitle")}</p>
          </motion.div>

          {/* Web Client CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 text-center"
          >
            <motion.a
              href="https://nostr.raxva.net"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              🪽 {t("clients.webClient")}
            </motion.a>
          </motion.div>

          {/* Nostr Clients */}
          <ClientSection
            titleKey="clients.nostr.title"
            descKey="clients.nostr.description"
            clients={nostrClients}
            categoryKey="nostr"
          />

          {/* Matrix Clients */}
          <ClientSection
            titleKey="clients.matrix.title"
            descKey="clients.matrix.description"
            clients={matrixClients}
            categoryKey="matrix"
            comingSoon
          />

          {/* Jitsi Clients */}
          <ClientSection
            titleKey="clients.jitsi.title"
            descKey="clients.jitsi.description"
            clients={jitsiClients}
            categoryKey="jitsi"
            comingSoon
          />

          {/* SimpleX Clients */}
          <ClientSection
            titleKey="clients.simplex.title"
            descKey="clients.simplex.description"
            clients={simplexClients}
            categoryKey="simplex"
            comingSoon
          />
        </div>
      </section>
    </div>
  );
};

const ClientSection = ({
  titleKey,
  descKey,
  clients,
  categoryKey,
  comingSoon,
}: {
  titleKey: string;
  descKey: string;
  clients: { name: string; key: string; platform: string; url: string; color: string }[];
  categoryKey: string;
  comingSoon?: boolean;
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="mb-4 flex items-center gap-3">
        <h2 className="text-2xl font-bold text-foreground">{t(titleKey)}</h2>
        {comingSoon && (
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-muted-foreground">
            {t(`clients.${categoryKey}.comingSoon`)}
          </span>
        )}
      </div>
      <p className="mb-6 text-muted-foreground">{t(descKey)}</p>

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-4 sm:grid-cols-2">
        {clients.map((client) => (
          <motion.a
            key={client.key}
            variants={item}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`glass-panel-hover group flex items-center justify-between rounded-xl p-5 ${comingSoon ? "pointer-events-none opacity-50" : ""}`}
          >
            <div>
              <h3 className="mb-1 font-bold text-foreground">{client.name}</h3>
              <p className="text-sm text-muted-foreground">{t(`clients.${categoryKey}.${client.key}`)}</p>
              <span className="mt-2 inline-block rounded-full px-2 py-0.5 text-xs font-medium" style={{ backgroundColor: client.color + "20", color: client.color }}>
                {client.platform}
              </span>
            </div>
            {!comingSoon && (
              <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                {t("clients.download")} →
              </span>
            )}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Clients;
