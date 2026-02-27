import { Link } from "react-router-dom";

const links = {
  Product: [
    { label: "Features", to: { pathname: "/", hash: "features" } },
    { label: "Pricing", to: "/pricing" },
  ],
  Company: [
    { label: "Contact", to: "/contact" },
  ],
  Legal: [
    { label: "Privacy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="py-24 border-t border-border bg-white">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display font-semibold text-lg text-primary mb-4">
              RepRadar
            </p>
            <p className="text-label text-secondary max-w-xs">
              AI-powered sales call analysis. Turn every call into a coaching moment.
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
          © {new Date().getFullYear()} RepRadar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
