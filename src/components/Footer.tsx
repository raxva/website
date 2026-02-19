import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
            <path d="M2 12c1-3 4-8 10-8 3 0 5 1.5 6 3s1.5 4 1 7c-2-1-4-2-7-2-4 0-7 2-10 4 0-2 0-3 0-4z" />
            <path d="M12 4c2 2 3 5 3 8" />
            <path d="M8 8c1.5 1 2.5 3 3 5" />
            <path d="M5 11c1 .5 2 2 2.5 4" />
          </svg>
          <span className="text-sm font-semibold text-foreground">Raxva</span>
        </div>
        <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
        <p className="text-xs text-muted-foreground">© 2025 Raxva. {t("footer.rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
