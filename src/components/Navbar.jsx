import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "Our Story" },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sand/95 backdrop-blur border-b border-line">
      <div className="container-content flex items-center justify-between h-16">
        <Link to="/" className="group flex items-center gap-2 font-display text-lg tracking-tight text-ink">
          <span className="relative inline-block w-3.5 h-3.5 rounded-full bg-maroon rotate-0 group-hover:rotate-45 transition-transform duration-300" />
          STRAIT<span className="text-maroon">&amp;</span>CO
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-maroon" : "text-ink/70 hover:text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="relative flex items-center gap-2 text-sm font-medium text-ink"
            aria-label="Cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6h15l-1.5 9h-12z" />
              <path d="M6 6L4.5 3H2" />
              <circle cx="9" cy="20" r="1.3" fill="currentColor" stroke="none" />
              <circle cx="18" cy="20" r="1.3" fill="currentColor" stroke="none" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-maroon text-sand text-[11px] font-semibold rounded-full h-4 w-4 flex items-center justify-center animate-fade-in">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line bg-sand">
          <div className="container-content py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? "text-maroon" : "text-ink/70"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
