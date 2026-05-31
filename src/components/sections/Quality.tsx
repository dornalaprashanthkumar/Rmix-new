import labImg from "@/assets/quality-test.jpg";
import { Counter } from "../Counter";

const tests = [
  { t: "Cube Compression", d: "7-day & 28-day strength testing on every batch produced." },
  { t: "Slump Test", d: "Real-time workability verification before discharge at site." },
  { t: "Aggregate Grading", d: "Daily sieve analysis & moisture content monitoring." },
  { t: "Cement Fineness", d: "Blaine & specific gravity tested per IS standards." },
];

export function Quality() {
  return (
    <section id="quality" className="relative py-16 sm:py-24 lg:py-32 bg-gradient-steel overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        {/* Image */}
        <div className="reveal relative order-1 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl shadow-deep">
            <img
              src={labImg}
              alt="RMIX quality testing"
              loading="lazy"
              className="h-64 sm:h-96 lg:h-[620px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/70 to-transparent" />
          </div>
          <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 glass-strong rounded-xl p-3 sm:p-5 hidden sm:block">
            <div className="font-display text-2xl sm:text-3xl text-ember">
              <Counter to={99} suffix=".7%" />
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Strength Compliance
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="reveal order-2 lg:order-2">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-ember">
              Quality & Testing
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase">
            Every Pour, <br />
            <span className="text-ember">Lab Certified</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Our NABL-accredited laboratories test raw materials and finished
            concrete around the clock. Mix designs are validated to IS 10262
            standards — backed by digital traceability from silo to slab.
          </p>

          <div className="mt-6 sm:mt-10 space-y-3 sm:space-y-4">
            {tests.map((t, i) => (
              <div
                key={t.t}
                className="glass rounded-xl p-4 sm:p-5 flex gap-4 sm:gap-5 hover:bg-white/[0.05] transition-colors"
              >
                <div className="font-display text-2xl sm:text-3xl text-ember w-10 sm:w-12 flex-shrink-0">
                  0{i + 1}
                </div>
                <div>
                  <div className="font-display text-lg sm:text-xl uppercase">{t.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{t.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
