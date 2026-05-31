export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-gradient-steel">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 sm:gap-12">
        {/* Info */}
        <div className="reveal">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-ember">
              Reach RMIX
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase">
            Let's Build <br /><span className="text-ember">Together</span>
          </h2>

          <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-6">
            <Info label="Head Office" value="5-21/1 Himayath Sagar, Rajendra Nagar Road, Gandhi Nagar, Hyderabad – 500030" />
            <Info label="Primary Plant" value="Kothwalguda, ORR Exit No-17, Shamshabad, Hyderabad-501218, Telangana" />
            <Info label="Dispatch" value="+91 7032190500 · +91 8500041166 · 24/7 Hotline" />
            <Info label="Email" value="concerte2026@gmail.com" />
            <Info label="Hours" value="Mon–Sat: 7 AM – 10 PM · Sun: On call" />
          </div>
        </div>

        {/* Map */}
        <div className="reveal rounded-2xl overflow-hidden shadow-deep border border-border h-72 sm:h-[420px] lg:h-[560px] lg:mt-32">
          <iframe
            title="RMIX location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.341496935075!2d78.3844397!3d17.2990647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbd005eb49e9b%3A0xd0aa7b371b7d88c6!2sR%20MIX%20CONCRETE!5e0!3m2!1sen!2sin!4v1780125613546!5m2!1sen!2sin"
            className="h-full w-full grayscale-[20%] contrast-125 brightness-95"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-xl p-4 sm:p-5">
      <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 font-display text-base sm:text-lg uppercase leading-snug">{value}</div>
    </div>
  );
}
