import { Hero } from "@/components/hero"
import { DlmRibbon } from "@/components/ui/dlm-ribbon"
import { ModernDeliverySection } from "@/components/modern-delivery-section"
import { ServicesOverview } from "@/components/services-overview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ClientStats } from "@/components/client-stats"
import DemoOne from "@/components/ui/demo";
import PackSection from "@/components/ui/pack-section";
import { FeatureStepsDemo } from "../components/ui/feature-section-demo";
import DlmProductSection from "../components/ui/dlm-product-section";
import LogicwerkDeliveryScroll from "../components/ui/logicwerk-delivery-scroll";
import CaseStudiesSection from "../components/ui/case-studies-section";
import { IndustriesServed } from "@/components/industries-served"
import Testimonials from "@/components/ui/testimonials"
import { ProductShowcase } from "@/components/product-showcase"
import { FeaturedCaseStudies } from "@/components/featured-case-studies"
import { ClientLogos } from "@/components/client-logos"
import { AwardsCertificates } from "@/components/awards-certificates"
import { ContactCTA } from "@/components/contact-cta"
import { AnimatedFeatureSpotlight } from "@/components/ui/feature-spotlight"
import { Eye } from "lucide-react"
import StartSprintDialog from "@/components/ui/start-sprint-dialog";
import HowWeWorkSticky from "@/components/ui/how-we-work-sticky"


export default function Home() {
  return (
    <main>
      <Hero />
      <DlmRibbon />
      <LogicwerkDeliveryScroll />
      <PackSection />
      <FeatureStepsDemo />
      <HowWeWorkSticky />
      <DemoOne />
      <DlmProductSection />
      <CaseStudiesSection />
      <IndustriesServed />
      <Testimonials />

      <div className="px-4 py-10">
        <AnimatedFeatureSpotlight
          preheaderIcon={<Eye className="h-4 w-4" />}
          preheaderText="Start Shipping Weekly"
          heading={
            <>
              Ready for IT That <span className="text-[#2563eb] italic">Actually Delivers?</span>
            </>
          }
          description="Skip the delays, budget overruns, and endless meetings. Start shipping in weekly sprints."
          buttonText="Schedule A Discussion Call"
          buttonHref="https://cal.com/logicwerk/30min"
          buttonProps={{ className: "bg-[#2563eb] text-white rounded-none shadow-lg" }}
          secondaryAction={
            <StartSprintDialog
              allowPackSelection={true}
              triggerButtonClassName="border-2 border-white text-white hover:bg-white hover:text-[#2563eb] px-5 py-2.5 text-lg font-semibold rounded-none min-w-[140px] min-h-[44px]"
            />
          }
          imageUrl="https://forecaster.biz/wp-content/uploads/2025/06/screener-1536x993.avif"
          imageAlt="Sprint planning UI"
        />
      </div>

    </main>
  )
}
