import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:3000";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic2,
  Crown,
  Shield,
  LifeBuoy,
  PenLine,
  Menu,
  X,
} from "lucide-react";
import Button from "./Button";
import LanguageSelector from "./LanguageSelector";
import { useLocale } from "../contexts/LocaleContext";

const megaMenus = [
  {
    labelKey: "header.solutions",
    columns: [
      [
        {
          icon: Mic2,
          titleKey: "header.forSalesReps",
          subtitleKey: "header.forSalesRepsSub",
          href: "/for-sales-reps",
        },
        {
          icon: Crown,
          titleKey: "header.forTeamsLeaders",
          subtitleKey: "header.forTeamsLeadersSub",
          href: "/for-teams-leaders",
        },
        {
          icon: Shield,
          titleKey: "header.enterprise",
          subtitleKey: "header.enterpriseSub",
          href: "/enterprise",
        },
      ],
    ],
  },
  {
    labelKey: "header.resources",
    columns: [
      [
        {
          icon: LifeBuoy,
          titleKey: "header.help",
          subtitleKey: "header.helpSub",
          href: "/help",
        },
        {
          icon: PenLine,
          titleKey: "header.blog",
          subtitleKey: "header.blogSub",
          href: "/blog",
        },
      ],
    ],
  },
];

function MegaMenuDropdown({ menu, isOpen, onClose, t, localizePath }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40"
            aria-hidden="true"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-full mt-0 pt-2 z-50"
          >
            <div className="bg-white border border-border rounded-xl shadow-lg py-6 px-8 min-w-[320px]">
          <div className="grid gap-y-4">
                {menu.columns.map((col, colIdx) => (
              <div key={colIdx} className="space-y-4">
                {col.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.titleKey}
                      to={localizePath(item.href)}
                      onClick={onClose}
                      className="flex gap-4 group block py-2 -mx-2 px-2 rounded-lg hover:bg-subtle/80 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/10 group-hover:to-primary/15 transition-all border border-primary/5">
                        <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-semibold text-primary text-[15px]">
                          {t(item.titleKey)}
                        </p>
                        <p className="text-sm text-secondary mt-0.5">{t(item.subtitleKey)}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const { t } = useTranslation();
  const { localizePath, basePath } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-primary text-white text-center py-2 text-sm font-medium overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link to={localizePath("/") + "#features"} className="hover:underline">
            {t("header.announcement")}
          </Link>
        </motion.div>
      </div>

      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-[0_1px_0_0_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[62px]">
            {/* Logo */}
            <Link
              to={localizePath("/")}
              className="font-display font-semibold text-xl text-primary tracking-tight flex-shrink-0"
            >
              RepRadar
            </Link>

            {/* Center-left: Mega-menus + Pricing */}
            <nav className="hidden lg:flex items-center gap-1">
              {megaMenus.map((menu) => (
                <div
                  key={menu.labelKey}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(menu.labelKey)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className="px-4 py-2 text-[15px] font-medium text-border-dark hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {t(menu.labelKey)}
                  </button>
                  <MegaMenuDropdown
                    menu={menu}
                    isOpen={openMenu === menu.labelKey}
                    onClose={() => setOpenMenu(null)}
                    t={t}
                    localizePath={localizePath}
                  />
                </div>
              ))}
              <Link
                to={localizePath("/pricing")}
                className="px-4 py-2 text-[15px] font-medium text-border-dark hover:text-primary transition-colors"
              >
                {t("header.pricing")}
              </Link>
              <Link
                to={localizePath("/contact")}
                className="px-4 py-2 text-[15px] font-medium text-border-dark hover:text-primary transition-colors"
              >
                {t("header.contact")}
              </Link>
            </nav>

            {/* Far right: Language selector + Sign in + Get started (desktop) / Hamburger (mobile) */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-4">
                <LanguageSelector />
                <Button variant="ghost" href={`${APP_URL}${basePath || ""}/login`}>{t("header.signIn")}</Button>
                <a
                  href={`${APP_URL}${basePath || ""}/register`}
                  className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-[15px] font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-primary text-white hover:bg-black"
                >
                  {t("header.getStarted")}
                </a>
              </div>
              <button
                className="lg:hidden p-2 text-primary hover:bg-subtle rounded-lg transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden border-t border-border bg-white px-5 py-4 space-y-2 overflow-hidden"
            >
            <Link to={localizePath("/for-sales-reps")} className="block py-2 text-[15px] font-medium text-primary" onClick={() => setMobileOpen(false)}>{t("header.forSalesReps")}</Link>
            <Link to={localizePath("/for-teams-leaders")} className="block py-2 text-[15px] font-medium text-primary" onClick={() => setMobileOpen(false)}>{t("header.forTeamsLeaders")}</Link>
            <Link to={localizePath("/enterprise")} className="block py-2 text-[15px] font-medium text-primary" onClick={() => setMobileOpen(false)}>{t("header.enterprise")}</Link>
            <Link to={localizePath("/pricing")} className="block py-2 text-[15px] font-medium text-primary" onClick={() => setMobileOpen(false)}>{t("header.pricing")}</Link>
            <Link to={localizePath("/help")} className="block py-2 text-[15px] font-medium text-primary" onClick={() => setMobileOpen(false)}>{t("header.help")}</Link>
            <Link to={localizePath("/blog")} className="block py-2 text-[15px] font-medium text-primary" onClick={() => setMobileOpen(false)}>{t("header.blog")}</Link>
            <Link to={localizePath("/contact")} className="block py-2 text-[15px] font-medium text-primary" onClick={() => setMobileOpen(false)}>{t("header.contact")}</Link>
            <div className="pt-4 flex gap-3 items-center">
              <LanguageSelector />
              <Button variant="ghost" className="flex-1" href={`${APP_URL}${basePath || ""}/login`}>{t("header.signIn")}</Button>
              <a
                href={`${APP_URL}${basePath || ""}/register`}
                className="flex-1 inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-[15px] font-medium transition-all duration-200 bg-primary text-white hover:bg-black"
              >
                {t("header.getStarted")}
              </a>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
