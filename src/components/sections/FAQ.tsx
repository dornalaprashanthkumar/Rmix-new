const items = [
  { q: "What is the minimum order quantity?", a: "Minimum dispatch is 3 m³ per transit mixer. For partial loads, we can adjust scheduling to minimise downtime charges." },
  { q: "How quickly can RMIX deliver to site?", a: "Standard dispatch within 2 hours of confirmation in metro zones. Scheduled pours are typically booked 24–48 hours in advance." },
  { q: "Do you provide concrete pumps?", a: "Yes — boom pumps up to 52m and stationary line pumps for high-rise and long-distance pours." },
  { q: "Which grades do you supply?", a: "M10 through M80, including high-performance, self-compacting, and fly-ash blended mixes." },
  { q: "Are mix designs certified?", a: "All mix designs are validated to IS 10262 and tested in our NABL-accredited laboratories." },
];

export function FAQ() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal text-center mb-14">
          <div className="font-mono text-xs uppercase tracking-[0.4em] text-ember">
            Common Questions
          </div>
          <h2 className="mt-4 font-display text-5xl uppercase">
            Need to Know <span className="text-ember">More?</span>
          </h2>
        </div>
        <div className="reveal divide-y divide-border glass rounded-2xl overflow-hidden">
          {items.map((it) => (
            <details key={it.q} className="group">
              <summary className="cursor-pointer list-none p-6 flex items-center justify-between gap-4 hover:bg-white/[0.03] transition-colors">
                <span className="font-display text-lg uppercase">{it.q}</span>
                <span className="text-ember text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                {it.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
