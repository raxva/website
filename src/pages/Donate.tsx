import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BITCOIN_ADDRESS = "bc1qYOUR_ADDRESS_HERE";
const LIGHTNING_ADDRESS = "lnurl1YOUR_LNURL_HERE";

const Donate = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="px-6 pt-28 pb-20">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h1 className="text-gradient mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
              {t("donate.title")}
            </h1>
            <p className="text-lg text-muted-foreground">{t("donate.subtitle")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Bitcoin On-Chain */}
            <DonationCard
              icon="₿"
              iconColor="#F7931A"
              title={t("donate.onchain.title")}
              description={t("donate.onchain.description")}
              value={BITCOIN_ADDRESS}
            />

            {/* Lightning */}
            <DonationCard
              icon="⚡"
              iconColor="#F7931A"
              title={t("donate.lightning.title")}
              description={t("donate.lightning.description")}
              value={LIGHTNING_ADDRESS}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center text-sm text-muted-foreground"
          >
            {t("donate.thanks")}
          </motion.p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const DonationCard = ({
  icon,
  iconColor,
  title,
  description,
  value,
}: {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
  value: string;
}) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-panel rounded-2xl p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-2xl" style={{ color: iconColor }}>{icon}</span>
        <div>
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-xl bg-accent/50 p-3">
        <code className="flex-1 truncate text-xs text-muted-foreground">{value}</code>
        <button
          onClick={copy}
          className="shrink-0 rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
        >
          {copied ? t("donate.copied") : t("donate.copy")}
        </button>
      </div>
    </div>
  );
};

export default Donate;
