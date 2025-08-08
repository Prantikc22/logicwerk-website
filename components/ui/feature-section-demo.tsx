import { FeatureSteps } from "@/components/ui/feature-section"

const features = [
  {
    step: "Coding Agent",
    title: "Coding Agent",
    content: "Writes production-ready code 5x faster",
    image: "/agents/coding-agent.webp"
  },
  {
    step: "Test Agent",
    title: "Test Agent",
    content: "Generates comprehensive test suites automatically",
    image: "/agents/test-agent.webp"
  },
  {
    step: "PM Agent",
    title: "PM Agent",
    content: "Manages sprints and tracks deliverables 24/7",
    image: "/agents/pm-agent.webp"
  },
  {
    step: "Deployment Agent",
    title: "Deployment Agent",
    content: "Automates and accelerates reliable software releases",
    image: "/agents/deployment-agent.webp"
  }
];

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
