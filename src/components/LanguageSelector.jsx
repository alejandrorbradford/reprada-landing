import { useLocale } from "../contexts/LocaleContext";

export default function LanguageSelector() {
  const { locale, switchLocale } = useLocale();

  return (
    <div className="flex items-center gap-0.5 text-sm">
      <button
        type="button"
        onClick={() => switchLocale("en")}
        className={
          locale === "en"
            ? "font-semibold text-primary px-2 py-1 rounded transition-colors"
            : "text-secondary hover:text-primary px-2 py-1 rounded transition-colors"
        }
      >
        EN
      </button>
      <span className="text-border">|</span>
      <button
        type="button"
        onClick={() => switchLocale("es")}
        className={
          locale === "es"
            ? "font-semibold text-primary px-2 py-1 rounded transition-colors"
            : "text-secondary hover:text-primary px-2 py-1 rounded transition-colors"
        }
      >
        ES
      </button>
    </div>
  );
}
