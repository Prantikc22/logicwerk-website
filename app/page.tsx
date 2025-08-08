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
import CaseStudiesSection from "../components/ui/case-studies-section";
import { IndustriesServed } from "@/components/industries-served"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { ProductShowcase } from "@/components/product-showcase"
import { FeaturedCaseStudies } from "@/components/featured-case-studies"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"
import { ContactCTA } from "@/components/contact-cta"
import EnhancedBackgroundPaths from "@/components/ui/modern-background-paths"
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <main>
      <Hero />
      <ModernDeliverySection />
      <PackSection />
      <FeatureStepsDemo />
      <HowWeWorkSection />
      <LumeoProductsSection />
      <CaseStudiesSection />
      <IndustriesServed />
      <StaggerTestimonials />

      <EnhancedBackgroundPaths
        title="Ready for IT That Actually Delivers?"
        subheading="Skip the delays, budget overruns, and endless meetings. Start shipping in weekly sprints."
        primaryAction={<Button size="lg" variant="default">Start Sprint</Button>}
        secondaryAction={<Button size="lg" variant="outline">Book A Call</Button>}
      />

    </main>
  )
}
