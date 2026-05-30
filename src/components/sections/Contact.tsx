export function Contact() {
  return (
    <section id="contact" className="py-32 bg-gradient-steel">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-ember">
              Reach RMIX
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase">
            Let's Build <br /><span className="text-ember">Together</span>
          </h2>

          <div className="mt-10 space-y-6">
            <Info label="Head Office" value="Hi-Tech City, Madhapur, Hyderabad – 500081" />
            <Info label="Primary Plant" value="Survey No. 42, Shamshabad, Telangana" />
            <Info label="Dispatch" value="+91 99999 99999 · 24/7 Hotline" />
            <Info label="Email" value="orders@rmix.in · quotes@rmix.in" />
            <Info label="Hours" value="Mon–Sat: 7 AM – 10 PM · Sun: On call" />
          </div>
        </div>

        <div className="reveal rounded-2xl overflow-hidden shadow-deep border border-border h-[560px]">
          <iframe
            title="RMIX location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=78.3%2C17.4%2C78.5%2C17.5&layer=mapnik"
            className="h-full w-full grayscale contrast-125"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-xl p-5">
      <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 font-display text-lg uppercase">{value}</div>
    </div>
  );
}
