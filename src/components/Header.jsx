import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

const megaMenus = [
  {
    label: "Solutions",
    columns: [
      [
        {
          icon: Mic2,
          title: "For Sales Reps",
          subtitle: "Get scored on every call",
          href: "/for-sales-reps",
        },
        {
          icon: Crown,
          title: "For Teams & Leaders",
          subtitle: "Visibility on performance",
          href: "/for-teams-leaders",
        },
        {
          icon: Shield,
          title: "Enterprise",
          subtitle: "Custom deployment",
          href: "/enterprise",
        },
      ],
    ],
  },
  {
    label: "Resources",
    columns: [
      [
        {
          icon: LifeBuoy,
          title: "Help",
          subtitle: "FAQs and support",
          href: "/help",
        },
        {
          icon: PenLine,
          title: "Blog",
          subtitle: "Tips and updates",
          href: "/blog",
        },
      ],
    ],
  },
];

function MegaMenuDropdown({ menu, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        aria-hidden="true"
        onClick={onClose}
      />
      <div className="absolute left-0 top-full mt-0 pt-2 z-50">
        <div className="bg-white border border-border rounded-xl shadow-lg py-6 px-8 min-w-[320px]">
          <div className="grid gap-y-4">
            {menu.columns.map((col, colIdx) => (
              <div key={colIdx} className="space-y-4">
                {col.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={onClose}
                      className="flex gap-4 group block py-2 -mx-2 px-2 rounded-lg hover:bg-subtle/80 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/10 group-hover:to-primary/15 transition-all border border-primary/5">
                        <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-semibold text-primary text-[15px]">
                          {item.title}
                        </p>
                        <p className="text-sm text-secondary mt-0.5">{item.subtitle}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Header() {
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
      <div className="bg-primary text-white text-center py-2 text-sm font-medium">
        <Link to="/#features" className="hover:underline">
          RepRadar — AI-powered sales call analysis. Start for free →
        </Link>
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
              to="/"
              className="font-display font-semibold text-xl text-primary tracking-tight flex-shrink-0"
            >
              RepRadar
            </Link>

            {/* Center-left: Mega-menus + Pricing */}
            <nav className="hidden lg:flex items-center gap-1">
              {megaMenus.map((menu) => (
                <div
                  key={menu.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(menu.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className="px-4 py-2 text-[15px] font-medium text-border-dark hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {menu.label}
                  </button>
                  <MegaMenuDropdown
                    menu={menu}
                    isOpen={openMenu === menu.label}
                    onClose={() => setOpenMenu(null)}
                  />
                </div>
              ))}
              <Link
                to="/pricing"
                className="px-4 py-2 text-[15px] font-medium text-border-dark hover:text-primary transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 text-[15px] font-medium text-border-dark hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Far right: Sign in + Get started (desktop) / Hamburger (mobile) */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-4">
                <Button variant="ghost">Sign in</Button>
                <Button variant="primary">Get started</Button>
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
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white px-5 py-4 space-y-2">
            <Link to="/for-sales-reps" className="block py-2 text-[15px] font-medium text-primary" onClick={() => setMobileOpen(false)}>For Sales Reps</Link>
            <Link to="/for-teams-leaders" className="block py-2 text-[15px] font-medium text-primary" onClick={() => setMobileOpen(false)}>For Teams & Leaders</Link>
            <Link to="/enterprise" className="block py-2 text-[15px] font-medium text-primary" onClick={() => setMobileOpen(false)}>Enterprise</Link>
            <Link to="/pricing" className="block py-2 text-[15px] font-medium text-primary" onClick={() => setMobileOpen(false)}>Pricing</Link>
            <Link to="/help" className="block py-2 text-[15px] font-medium text-primary" onClick={() => setMobileOpen(false)}>Help</Link>
            <Link to="/blog" className="block py-2 text-[15px] font-medium text-primary" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link to="/contact" className="block py-2 text-[15px] font-medium text-primary" onClick={() => setMobileOpen(false)}>Contact</Link>
            <div className="pt-4 flex gap-3">
              <Button variant="ghost" className="flex-1">Sign in</Button>
              <Button variant="primary" className="flex-1">Get started</Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
