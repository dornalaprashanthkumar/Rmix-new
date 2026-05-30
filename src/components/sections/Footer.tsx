export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-ember font-display text-primary-foreground text-lg shadow-ember">
              R
            </span>
            <span className="font-display text-3xl tracking-wider">RMIX</span>
          </div>
          <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
            Premium ready mix concrete for India's most ambitious projects.
            Engineered strength. Delivered on schedule.
          </p>
          <div className="mt-6 flex gap-3">
            {["in", "x", "ig", "yt"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="h-10 w-10 inline-flex items-center justify-center rounded-md glass text-xs uppercase font-mono hover:bg-ember hover:text-primary-foreground transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <Col
          title="Services"
          links={["Ready Mix Concrete", "Boom Pumping", "High-Strength Mixes", "Bulk Contracts"]}
        />
        <Col
          title="Company"
          links={["About RMIX", "Quality & Testing", "Careers", "Sustainability", "Safety Standards"]}
        />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
          <div>© {new Date().getFullYear()} RMIX Ready Mix Concrete. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">ISO 9001:2015</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="font-display text-sm uppercase tracking-widest text-ember">
        {title}
      </div>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
