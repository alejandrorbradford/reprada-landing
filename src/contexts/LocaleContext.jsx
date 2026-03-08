import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import i18n from "../i18n";

const LOCALE_STORAGE_KEY = "repradar-locale";

function isSpanishPreferred() {
  const lang = navigator.language || navigator.userLanguage || "";
  const langs = navigator.languages || [lang];
  return langs.some((l) => (l || "").toLowerCase().startsWith("es"));
}

function getStoredLocale() {
  try {
    return localStorage.getItem(LOCALE_STORAGE_KEY);
  } catch {
    return null;
  }
}

function setStoredLocale(locale) {
  try {
    if (locale) {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } else {
      localStorage.removeItem(LOCALE_STORAGE_KEY);
    }
  } catch {}
}

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [locale, setLocaleState] = useState("en");
  const [ready, setReady] = useState(false);

  const pathname = location.pathname;
  const isEsPath = pathname.startsWith("/es");
  const pathWithoutLocale = isEsPath ? pathname.slice(3) || "/" : pathname;

  const switchLocale = useCallback(
    (newLocale) => {
      setStoredLocale(newLocale);
      i18n.changeLanguage(newLocale);
      setLocaleState(newLocale);

      if (newLocale === "es") {
        const newPath = pathWithoutLocale === "/" ? "/es" : `/es${pathWithoutLocale}`;
        navigate(newPath);
      } else {
        navigate(pathWithoutLocale || "/");
      }
    },
    [navigate, pathWithoutLocale]
  );

  const localizePath = useCallback(
    (path) => {
      if (locale === "es") {
        const clean = path.startsWith("/") ? path : `/${path}`;
        return clean === "/" ? "/es" : `/es${clean}`;
      }
      return path.startsWith("/") ? path : `/${path}`;
    },
    [locale]
  );

  useEffect(() => {
    i18n.changeLanguage(isEsPath ? "es" : "en");
    setLocaleState(isEsPath ? "es" : "en");
    if (isEsPath) {
      setStoredLocale("es");
    }
    setReady(true);
  }, [isEsPath]);

  const value = {
    locale: isEsPath ? "es" : "en",
    basePath: isEsPath ? "/es" : "",
    localizePath,
    switchLocale,
    pathWithoutLocale,
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function LocaleGate({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const [didRedirect, setDidRedirect] = useState(false);

  useEffect(() => {
    if (pathname.startsWith("/es")) return;

    const stored = getStoredLocale();
    if (stored === "es") {
      const newPath = pathname === "/" ? "/es" : `/es${pathname}`;
      navigate(newPath, { replace: true });
      setDidRedirect(true);
      return;
    }
    if (stored === "en") return;

    if (isSpanishPreferred()) {
      const newPath = pathname === "/" ? "/es" : `/es${pathname}`;
      setStoredLocale("es");
      navigate(newPath, { replace: true });
      setDidRedirect(true);
    }
  }, [pathname, navigate]);

  return children;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
