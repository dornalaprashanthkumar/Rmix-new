import plantImg from "@/assets/batching-plant.jpg";

const segments = [
  "Residential Towers",
  "Commercial Buildings",
  "Infrastructure & Roads",
  "Luxury Villas",
  "Industrial Plants",
  "Bridges & Metros",
];

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        {/* Text */}
        <div className="reveal order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-ember">
              About RMIX
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase">
            Concrete <span className="text-ember">Engineered</span>
            <br />For Generations
          </h2>
          <p className="mt-4 sm:mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
            RMIX is a premium ready mix concrete supplier serving India's
            most demanding builders. Our fully automated batching plants,
            laboratory-tested mixes, and GPS-tracked transit fleet ensure
            every pour meets engineering-grade specifications — on time,
            every time.
          </p>

          <div className="mt-6 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4">
            {segments.map((s) => (
              <div
                key={s}
                className="glass rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm font-medium flex items-center gap-2 sm:gap-3"
              >
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-ember" />
                <span className="text-xs sm:text-sm leading-tight">{s}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6 border-t border-border pt-6 sm:pt-8">
            {[
              ["M-Grade", "M7.5 – M50"],
              ["Plants", "Fully Automated"],
              ["Testing", "NABL Lab"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-display text-xl sm:text-3xl text-ember leading-tight">{v}</div>
                <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">
                  {k}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="reveal relative order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl shadow-deep">
            <img
              src={plantImg}
              alt="RMIX batching plant"
              loading="lazy"
              width={1600}
              height={1000}
              className="h-64 sm:h-96 lg:h-[640px] w-full object-cover hover:scale-105 transition-transform duration-[1.2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 glass-strong rounded-xl p-3 sm:p-5">
              <div className="font-mono text-xs uppercase tracking-widest text-ember">
                Live Plant · Hyderabad
              </div>
              <div className="font-display text-base sm:text-xl mt-1">
                Capacity: 60 m³ / hour
              </div>
            </div>
          </div>
          <div className="absolute -top-4 sm:-top-6 -right-2 sm:-right-6 glass-strong rounded-xl p-3 sm:p-4 hidden sm:block">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              ISO 9001:2015
            </div>
            <div className="font-display text-base sm:text-lg text-ember">Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
}
