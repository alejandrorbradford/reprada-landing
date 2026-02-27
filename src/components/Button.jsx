import { Link } from "react-router-dom";

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:3000";

const base = "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-[15px] font-medium transition-colors";

const variants = {
  primary: `${base} bg-primary text-white hover:bg-black`,
  secondary: `${base} bg-transparent text-primary border border-border hover:bg-subtle`,
  ghost: `${base} bg-transparent text-primary hover:bg-subtle`,
};

export default function Button({ variant = "primary", href, type, children, className = "" }) {
  const to = href ?? `${APP_URL}/login`;
  const classes = `${variants[variant]} ${className}`.trim();
  const isInternal = typeof to === "string" && to.startsWith("/");

  if (type === "submit") {
    return (
      <button type="submit" className={classes}>
        {children}
      </button>
    );
  }

  if (isInternal) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={to} className={classes}>
      {children}
    </a>
  );
}
