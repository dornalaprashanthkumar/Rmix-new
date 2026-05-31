const clients = [
  "Hall mark",
  "EIPL",
  "SARK",
  "MEGA",
  "Balaji Infra",
  "CIPL",
  "Park Hayat Hotel",
  "HMDA Works",
];

export function Clients() {
  const row = [...clients, ...clients];
  return (
    <section className="py-16 sm:py-24 border-y border-border/60 bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal text-center">
          <div className="font-mono text-xs uppercase tracking-[0.4em] text-ember">
            Trusted By Industry Leaders
          </div>
          <h2 className="mt-3 sm:mt-4 font-display text-3xl sm:text-4xl md:text-5xl uppercase">
            Built With India's <span className="text-ember">Top Builders</span>
          </h2>
        </div>

        <div className="mt-10 sm:mt-14 relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
          <div className="flex w-max gap-4 sm:gap-6 marquee">
            {row.map((c, i) => (
              <div
                key={i}
                className="glass rounded-lg px-6 sm:px-8 py-4 sm:py-6 min-w-[160px] sm:min-w-[240px] flex items-center justify-center group hover:bg-white/[0.06] transition-colors"
              >
                <span className="font-display text-sm sm:text-lg uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
