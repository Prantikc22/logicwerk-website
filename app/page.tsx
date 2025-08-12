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
import StartSprintDialog from "@/components/ui/start-sprint-dialog";


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
        primaryAction={
  <StartSprintDialog
    allowPackSelection={true}
    triggerButtonClassName="bg-[#2563eb] text-white px-5 py-2.5 text-lg font-semibold rounded-none shadow-lg hover:bg-[#1749b1] transition-all duration-300 border-none min-w-[140px] min-h-[44px] flex items-center justify-center"
  />
}
secondaryAction={
  <a
    href="https://cal.com/logicwerk/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="border-2 border-white text-white hover:bg-white hover:text-[#2563eb] px-5 py-2.5 text-lg font-semibold rounded-none min-w-[140px] min-h-[44px] flex items-center justify-center transition-all duration-300 bg-transparent"
  >
    Schedule A Discussion Call
  </a>
}
      />

    </main>
  )
}
