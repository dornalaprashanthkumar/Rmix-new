const features = [
  { n: "01", t: "Superior Strength", d: "Engineered mix designs delivering consistent M10–M80 grade performance." },
  { n: "02", t: "Advanced Batching", d: "Fully automated plants with real-time moisture correction & weigh batching." },
  { n: "03", t: "On-Time Delivery", d: "GPS-tracked transit mixers and zone-based dispatch — zero downtime pours." },
  { n: "04", t: "24/7 Site Support", d: "Dedicated technical engineers on call for every pour, day or night." },
  { n: "05", t: "Lab-Tested Quality", d: "NABL-accredited in-house labs running cube & slump tests on every batch." },
  { n: "06", t: "Experienced Crew", d: "Operators averaging 12+ years on plant, pump, and transit operations." },
  { n: "07", t: "Modern Fleet", d: "New-generation transit mixers and 52m boom pumps for high-rise reach." },
  { n: "08", t: "Transparent Pricing", d: "No hidden charges. Lock rates with seasonal contracts and bulk slabs." },
];

export function WhyChoose() {
  return (
    <section id="why" className="relative py-16 sm:py-24 lg:py-32 bg-gradient-steel">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-3xl">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-ember">
              Why Choose RMIX
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase">
            Eight Reasons <br />
            Builders <span className="text-ember">Choose Us</span>
          </h2>
        </div>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden">
          {features.map((f) => (
            <div
              key={f.n}
              className="reveal group relative bg-card p-6 sm:p-8 hover:bg-background transition-colors duration-300 cursor-default"
            >
              <div className="font-mono text-xs text-muted-foreground">{f.n}</div>
              <div className="mt-4 sm:mt-6 h-10 w-10 sm:h-12 sm:w-12 rounded-md bg-gradient-ember flex items-center justify-center shadow-ember group-hover:rotate-6 transition-transform">
                <span className="font-display text-lg sm:text-xl text-primary-foreground">◆</span>
              </div>
              <h3 className="mt-4 sm:mt-6 font-display text-xl sm:text-2xl uppercase">{f.t}</h3>
              <p className="mt-2 sm:mt-3 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ember to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
