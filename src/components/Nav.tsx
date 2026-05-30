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
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
  <img
  src="/logo.png"
  alt="RMIX Logo"
  className="h-18 w-auto object-contain"
/>

  <div className="leading-tight">
    <h1 className="font-display text-2xl tracking-[0.15em] text-gray-600">
  MIX CONCRETE
</h1>

    <p className="text-[10px] uppercase tracking-[0.35em] text-gray-600">
  QUALITY IN EVERY MIX
</p>
  </div>
</a>

        <nav className="hidden md:flex items-center gap-8">
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

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex flex-col items-start leading-tight">
  <a
    href="tel:+917032190500"
    className="text-sm font-semibold text-stone-600 hover:text-orange-500 transition-colors"
  >
    +91 70321 90500
  </a>

  <a
    href="tel:+918500041166"
    className="text-sm font-semibold text-stone-600 hover:text-orange-500 transition-colors"
  >
    +91 85000 41166
  </a>
</div>
          <a
            href="#quote"
            className="inline-flex items-center rounded-md bg-gradient-ember px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-ember hover:scale-[1.03] active:scale-95 transition-transform"
          >
            Get Quote
          </a>
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md glass"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className="block h-0.5 w-4 bg-black" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-3 mx-6 glass rounded-xl p-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
