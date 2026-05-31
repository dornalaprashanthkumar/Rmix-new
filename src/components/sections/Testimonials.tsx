const reviews = [
  {
    n: "Ravi Kumar",
    r: "Project Director, Park Hayat Hotel",
    q: "RMIX has been our concrete partner for three skyscrapers. Strength results never disappoint and delivery is military-precise.",
  },
  {
    n: "Anita Reddy",
    r: "Chief Engineer, Orjitha",
    q: "The lab certifications and on-site support team are best-in-class. We've moved 80% of our pour volume to RMIX.",
  },
  {
    n: "Vikram Shah",
    r: "MD, SARK",
    q: "From M40 highway grade to M70 high-rise — one supplier, zero compromise. RMIX is the gold standard.",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal max-w-3xl">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-ember">
              Client Voices
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase">
            Trusted Where It <br /><span className="text-ember">Matters Most</span>
          </h2>
        </div>

        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((r) => (
            <article
              key={r.n}
              className="reveal glass rounded-2xl p-6 sm:p-8 flex flex-col hover:-translate-y-1 transition-transform"
            >
              <div className="flex gap-1 text-ember">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                    <path d="M10 15.27 16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-foreground/90">
                "{r.q}"
              </p>
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border flex items-center gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 rounded-full bg-gradient-ember font-display text-lg sm:text-xl flex items-center justify-center text-primary-foreground shadow-ember">
                  {r.n[0]}
                </div>
                <div>
                  <div className="font-display text-sm sm:text-base uppercase">{r.n}</div>
                  <div className="text-xs font-mono text-muted-foreground">{r.r}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
