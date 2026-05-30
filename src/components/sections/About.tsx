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
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-ember">
              About RMIX
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase">
            Concrete <span className="text-ember">Engineered</span>
            <br />For Generations
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            RMIX is a premium ready mix concrete supplier serving India's
            most demanding builders. Our fully automated batching plants,
            laboratory-tested mixes, and GPS-tracked transit fleet ensure
            every pour meets engineering-grade specifications — on time,
            every time.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {segments.map((s) => (
              <div
                key={s}
                className="glass rounded-lg px-4 py-3 text-sm font-medium flex items-center gap-3"
              >
                <span className="h-2 w-2 rounded-full bg-ember" />
                {s}
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["M-Grade", "M7.5 – M50"],
              ["Plants", "Fully Automated"],
              ["Testing", "NABL Lab"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-display text-3xl text-ember">{v}</div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">
                  {k}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-2xl shadow-deep">
            <img
              src={plantImg}
              alt="RMIX batching plant"
              loading="lazy"
              width={1600}
              height={1000}
              className="h-[640px] w-full object-cover hover:scale-105 transition-transform duration-[1.2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-xl p-5">
              <div className="font-mono text-xs uppercase tracking-widest text-ember">
                Live Plant · Hyderabad
              </div>
              <div className="font-display text-xl mt-1">
                Capacity: 60 m³ / hour
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 glass-strong rounded-xl p-4 hidden md:block">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              ISO 9001:2015
            </div>
            <div className="font-display text-lg text-ember">Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
}
