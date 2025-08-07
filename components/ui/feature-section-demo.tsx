import { FeatureSteps } from "@/components/ui/feature-section"

const features = [
  {
    step: "Coding Agent",
    title: "Coding Agent",
    content: "Writes production-ready code 5x faster",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: "Test Agent",
    title: "Test Agent",
    content: "Generates comprehensive test suites automatically",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: "PM Agent",
    title: "PM Agent",
    content: "Manages sprints and tracks deliverables 24/7",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: "Analytics Agent",
    title: "Analytics Agent",
    content: "Turns business questions into actionable insights",
    image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=800&q=80"
  }
]

export function FeatureStepsDemo() {
  return (
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto w-full text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          Meet Our In-house AI-Augmented Team
        </h2>
        <p className="text-base md:text-lg text-gray-400 mb-10 font-medium">
          We don’t just talk AI – we use it to deliver faster.
        </p>
      </div>
      <FeatureSteps
        features={features}
        title={undefined}
        autoPlayInterval={4000}
        imageHeight="h-[400px]"
      />
    </div>
  )
}
