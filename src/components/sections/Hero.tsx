import heroImg from "@/assets/hero-pour.jpg";
import { Counter } from "../Counter";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Concrete pour at construction site"
          className="h-full w-full object-cover scale-105 animate-[fade-in_1.2s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-lines opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-20 min-h-screen flex flex-col justify-between">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8 animate-[fade-in_0.8s_ease-out]">
            <span className="h-px w-12 bg-ember" />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-ember">
              Est. 2008 · Engineering Trust Since
            </span>
          </div>

          <h1 className="font-display text-[clamp(3rem,9vw,8rem)] uppercase leading-[0.92] tracking-tight animate-[fade-in_1s_ease-out]">
            Strength
            <br />
            That Builds
            <br />
            <span className="text-stroke">The Future</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-cement/90 leading-relaxed animate-[fade-in_1.4s_ease-out]">
            Premium ready mix concrete engineered in state-of-the-art batching
            plants. From skylines to highways — RMIX delivers strength on
            schedule, every cubic meter.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-[fade-in_1.6s_ease-out]">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-ember px-7 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-ember hover:scale-[1.04] transition-transform"
            >
              Get Instant Quote →
            </a>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 rounded-md glass px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Call Now
            </a>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-md border border-border px-7 py-4 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              Book Supply
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-xl overflow-hidden glass">
          {[
            { v: 3, s: "+", l: "Years of Experience" },
            { v: 200000, s: "+", l: "Cubic Meters Supplied" },
            { v: 25, s: "+", l: "Projects Completed" },
            { v: 150, s: "+", l: "Satisfied Clients" },
          ].map((stat) => (
            <div key={stat.l} className="bg-background/60 p-6 md:p-8">
              <div className="font-display text-4xl md:text-5xl text-ember">
                <Counter to={stat.v} suffix={stat.s} />
              </div>
              <div className="mt-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {stat.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
