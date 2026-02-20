import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="px-6 py-10">
      <div className="glass-panel mx-auto max-w-6xl rounded-2xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg">🪽</span>
            <span className="text-sm font-semibold text-foreground">Raxva</span>
          </div>
          <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
          <div className="flex items-center gap-4">
            {/* Telegram */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#26A5E4"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
            {/* X / Twitter */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-foreground"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* Nostr */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#8B5CF6"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" fill="none"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/donate" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t("nav.donate")}
            </Link>
            <Link to="/clients" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {t("nav.clients")}
            </Link>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">© 2025 Raxva. {t("footer.rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
