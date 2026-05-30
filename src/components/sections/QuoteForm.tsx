import { useState } from "react";

const grades = ["M10", "M15", "M20", "M25", "M30", "M35", "M40", "M50", "M60", "M70", "M80"];

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `New Quote Request%0A%0AName: ${data.get("name")}%0APhone: ${data.get("phone")}%0ALocation: ${data.get("location")}%0AQuantity: ${data.get("qty")} m³%0AGrade: ${data.get("grade")}%0ADate: ${data.get("date")}`;
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section id="quote" className="relative py-32 bg-gradient-steel overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2 reveal lg:sticky lg:top-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-ember" />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-ember">
              Live Enquiry
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase">
            Get Your <br />
            <span className="text-ember">Concrete Quote</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Tell us your project. We'll respond within 30 minutes with grade
            recommendations, scheduling, and locked pricing.
          </p>
          <div className="mt-10 space-y-3 text-sm font-mono">
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-ember" /> 30-min response SLA
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-ember" /> No-obligation pricing
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-ember" /> Direct engineer consultation
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 reveal glass-strong rounded-2xl p-8 md:p-10 shadow-deep space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Full Name" name="name" placeholder="Rajesh Kumar" required />
            <Field label="Phone Number" name="phone" placeholder="+91 99999 99999" required type="tel" />
          </div>
          <Field label="Project Location" name="location" placeholder="Site address or area" required />
          <div className="grid sm:grid-cols-3 gap-5">
            <Field label="Quantity (m³)" name="qty" placeholder="50" required type="number" />
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Concrete Grade
              </label>
              <select
                name="grade"
                required
                className="w-full rounded-md bg-input border border-border px-4 py-3 text-sm focus:outline-none focus:border-ember transition-colors"
              >
                {grades.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
            <Field label="Required Date" name="date" type="date" required />
          </div>
          <Field label="Notes (optional)" name="notes" placeholder="Pump required? Site access constraints?" />

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-gradient-ember px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-ember hover:scale-[1.01] active:scale-[0.99] transition-transform"
          >
            {sent ? "Sent — Check WhatsApp" : "Submit Enquiry →"}
          </button>
          <p className="text-xs text-muted-foreground text-center">
            By submitting you agree to be contacted by our team. Your data stays with RMIX.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
        {label}{required && <span className="text-ember"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={200}
        className="w-full rounded-md bg-input border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-ember transition-colors"
      />
    </div>
  );
}
