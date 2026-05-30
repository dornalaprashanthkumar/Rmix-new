import commercial from "@/assets/project-commercial.jpg";
import infra from "@/assets/project-infra.jpg";
import residential from "@/assets/project-residential.jpg";
import industrial from "@/assets/project-industrial.jpg";

const projects = [
  { img: commercial, cat: "Commercial", t: "Skyline Tower, Hyderabad", v: "48,000 m³ · M60" },
  { img: infra, cat: "Infrastructure", t: "Outer Ring Expressway", v: "120,000 m³ · M40" },
  { img: residential, cat: "Residential", t: "Aurum Villa Estate", v: "8,200 m³ · M30" },
  { img: industrial, cat: "Industrial", t: "Logistics Mega Hub", v: "62,000 m³ · M35" },
];

export function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-ember" />
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-ember">
                Selected Projects
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl uppercase max-w-2xl">
              Concrete That <br />
              <span className="text-ember">Shapes Skylines</span>
            </h2>
          </div>
          <div className="flex gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {["Residential", "Commercial", "Infrastructure", "Industrial"].map(
              (c) => (
                <span key={c} className="glass rounded-full px-4 py-2">
                  {c}
                </span>
              )
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.t}
              className={`reveal group relative overflow-hidden rounded-2xl shadow-deep ${
                i % 3 === 0 ? "md:row-span-2 md:min-h-[640px]" : "md:min-h-[310px]"
              }`}
            >
              <img
                src={p.img}
                alt={p.t}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-[1.4s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-8 min-h-[310px]">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-ember">
                  {p.cat}
                </div>
                <h3 className="mt-3 font-display text-3xl md:text-4xl uppercase">
                  {p.t}
                </h3>
                <div className="mt-2 text-sm text-muted-foreground font-mono">
                  {p.v}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
