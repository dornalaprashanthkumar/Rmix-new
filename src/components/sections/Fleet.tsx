import truck from "@/assets/transit-mixer.jpg";

const fleet = [
  { t: "Transit Mixers", v: "12", d: "7 m³ & 9 m³ drum capacity" },
  { t: "Boom Pumps", v: "1", d: "Up to 52m vertical reach" },
  { t: "Stationary Pumps", v: "3", d: "High-pressure for long horizontal runs" },
  { t: "Batching Plants", v: "2", d: "Across telangana, Hyderabad" },
];

export function Fleet() {
  return (
    <section id="fleet" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={truck}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-ember">
              Fleet & Machinery
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase">
            India's Most <span className="text-ember">Mobilized</span> Fleet
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Every vehicle GPS-tracked. Every pump pressure-tested. Every plant
            digitally controlled. RMIX runs the rolling stock that keeps your
            schedule moving.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {fleet.map((f) => (
            <div
              key={f.t}
              className="reveal glass rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="font-display text-6xl text-ember leading-none">
                {f.v}
              </div>
              <div className="mt-5 font-display text-xl uppercase">{f.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{f.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
