import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocale } from "../contexts/LocaleContext";

export default function Footer() {
  const { t } = useTranslation();
  const { localizePath } = useLocale();

  const links = {
    [t("footer.product")]: [
      { label: t("footer.features"), to: localizePath("/") + "#features" },
      { label: t("footer.pricing"), to: localizePath("/pricing") },
    ],
    [t("footer.company")]: [
      { label: t("footer.contact"), to: localizePath("/contact") },
    ],
    [t("footer.legal")]: [
      { label: t("footer.privacy"), to: localizePath("/privacy") },
      { label: t("footer.terms"), to: localizePath("/terms") },
    ],
  };

  return (
    <footer id="contact" className="py-24 border-t border-border bg-white">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display font-semibold text-lg text-primary mb-4">
              RepRadar
            </p>
            <p className="text-label text-secondary max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <p className="text-label text-secondary font-medium mb-4 uppercase tracking-wide">
                {title}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-label text-secondary hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-16 text-center text-label text-secondary">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
