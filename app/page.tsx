import { Hero } from "@/components/hero"
import { ModernDeliverySection } from "@/components/modern-delivery-section"
import { ServicesOverview } from "@/components/services-overview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ClientStats } from "@/components/client-stats"
import { Testimonials } from "@/components/testimonials"
import DemoOne from "@/components/ui/demo";
import PackSection from "@/components/ui/pack-section";
import { FeatureStepsDemo } from "../components/ui/feature-section-demo";
import HowWeWorkSection from "../components/ui/how-we-work-section";
import LumeoProductsSection from "../components/ui/lumeo-products-section";
import { IndustriesServed } from "@/components/industries-served"
import { ProductShowcase } from "@/components/product-showcase"
import { FeaturedCaseStudies } from "@/components/featured-case-studies"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"
import { ContactCTA } from "@/components/contact-cta"

export default function Home() {
  return (
    <main>
      <Hero />
      <ModernDeliverySection />
      <PackSection />
      <FeatureStepsDemo />
      <HowWeWorkSection />
      <LumeoProductsSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ClientStats />
      <Testimonials />
      <IndustriesServed />
      <ProductShowcase />
      <FeaturedCaseStudies />
      <ClientLogos />
      <AwardsCertificates />
      <ContactCTA />
    </main>
  )
}
