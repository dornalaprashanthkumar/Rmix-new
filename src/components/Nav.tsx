import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#why", label: "Why RMIX" },
  { href: "#projects", label: "Projects" },
  { href: "#quality", label: "Quality" },
  { href: "#fleet", label: "Fleet" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white shadow-lg border-b border-gray-200 ${
        scrolled ? "py-0" : "py-1"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-16 sm:h-auto sm:py-2">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <img
            src="/logo.png"
            alt="RMIX Logo"
            className="h-10 sm:h-14 w-auto object-contain"
          />
          <div className="leading-tight">
            <h1 className="font-display text-base sm:text-xl tracking-[0.12em] text-gray-700">
              MIX CONCRETE
            </h1>
            <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] text-gray-500">
              QUALITY IN EVERY MIX
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-widest text-gray-600 hover:text-orange-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:flex flex-col items-start leading-tight">
            <a
              href="tel:+917032190500"
              className="text-xs font-semibold text-stone-600 hover:text-orange-500 transition-colors"
            >
              +91 70321 90500
            </a>
            <a
              href="tel:+918500041166"
              className="text-xs font-semibold text-stone-600 hover:text-orange-500 transition-colors"
            >
              +91 85000 41166
            </a>
          </div>
          <a
            href="#quote"
            className="inline-flex items-center rounded-md bg-gradient-ember px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-ember hover:scale-[1.03] active:scale-95 transition-transform whitespace-nowrap"
          >
            Get Quote
          </a>
          {/* Hamburger */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md glass flex-col gap-1.5 px-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-all duration-200 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-all duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-all duration-200 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 px-2 text-sm uppercase tracking-widest text-gray-700 hover:text-orange-500 border-b border-gray-50 last:border-0 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-1 text-sm text-gray-600">
            <a href="tel:+917032190500" className="py-1 font-medium hover:text-orange-500">
              📞 +91 70321 90500
            </a>
            <a href="tel:+918500041166" className="py-1 font-medium hover:text-orange-500">
              📞 +91 85000 41166
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
