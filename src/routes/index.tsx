import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { FloatingActions } from "@/components/FloatingActions";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Clients } from "@/components/sections/Clients";
import { Projects } from "@/components/sections/Projects";
import { Quality } from "@/components/sections/Quality";
import { Fleet } from "@/components/sections/Fleet";
import { Testimonials } from "@/components/sections/Testimonials";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "RMIX — Premium Ready Mix Concrete Supplier in India" },
      {
        name: "description",
        content:
          "RMIX delivers engineering-grade ready mix concrete from automated batching plants — M10 to M80, GPS-tracked fleet, NABL-certified quality. Get a quote in 30 minutes.",
      },
      { property: "og:title", content: "RMIX — Strength That Builds the Future" },
      {
        property: "og:description",
        content:
          "Premium ready mix concrete supplier trusted by India's top builders. Lab-tested mixes, 24/7 dispatch, modern fleet.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "RMIX Ready Mix Concrete",
          description:
            "Premium ready mix concrete supplier delivering engineered strength to residential, commercial, infrastructure and industrial projects across India.",
          url: "/",
          telephone: "+91-99999-99999",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Hi-Tech City, Madhapur",
            addressLocality: "Hyderabad",
            postalCode: "500081",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Clients />
        
        <Quality />
        <Fleet />
        <Testimonials />
        <QuoteForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
