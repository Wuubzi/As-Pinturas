import Hero from "@/components/hero";
import CommercialMessage from "@/components/commercial-message";
import CTASection from "@/components/cta-section";
import About from "@/components/about";
import Products from "@/components/products";
import Contact from "@/components/contact";
import WhatsAppFloat from "@/components/whatsapp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CommercialMessage />
      <About />
      <Products />
      <Contact />
      <CTASection />
      <WhatsAppFloat />
    </main>
  );
}
