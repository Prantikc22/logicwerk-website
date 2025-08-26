"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { posts } from "../posts"
import Footer4Col from "@/components/ui/footer-column"
import Link from "next/link"

export default function InsightPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-16">
        <Link href="/insights" className="text-blue-400 hover:text-blue-600 underline mb-8 block">← Back to Insights</Link>
        {/* Hero Image */}
        {post.image && (
          <div className="w-full aspect-[2.6/1] rounded-2xl overflow-hidden shadow-lg border border-gray-800 mb-10">
            <Image
  src={post.image}
  alt={post.title}
  width={832}
  height={320}
  className="w-full h-full object-cover"
  sizes="100vw"
  priority={true}
/>
          </div>
        )}
        {/* Metadata */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-2">
          <h1 className="text-4xl md:text-5xl font-extrabold font-mona text-white leading-tight">{post.title}</h1>
          <div className="flex flex-row items-center gap-4 text-sm text-gray-400 font-mono mt-2 md:mt-0">
            <span className="px-2 py-1 rounded bg-gray-800/80 border border-gray-700 uppercase tracking-wide">{post.type === 'blog' ? 'Blog Post' : 'Case Study'}</span>
            <span className="px-2 py-1 rounded bg-gray-800/80 border border-gray-700">{post.date}</span>
          </div>
        </div>
        {/* Summary */}
        <div className="bg-gray-900/80 border border-blue-900 rounded-xl p-6 mb-10 shadow-md">
          <p className="text-xl text-blue-200 font-light font-mona">{post.summary}</p>
        </div>
        {/* Full article content */}
        <article className="prose prose-invert max-w-none text-lg text-gray-200 mb-10 prose-h2:text-2xl prose-h2:font-bold prose-h2:text-blue-300 prose-h3:text-xl prose-h3:font-semibold prose-h3:text-blue-200 prose-ul:pl-6 prose-li:marker:text-blue-400 prose-ol:pl-6 prose-a:text-blue-400 prose-blockquote:border-blue-400 prose-blockquote:text-blue-200">
          {(() => {
            switch (post.slug) {
              case 'ai-powered-productivity':
                return (
                  <>
                    <h2>AI-Powered Productivity: Transforming Modern Workflows</h2>
                    <p>In today's digital-first business environment, artificial intelligence is rapidly becoming the cornerstone of productivity and operational excellence. Organizations are leveraging AI to automate repetitive tasks, streamline communication, and empower teams to focus on high-value, creative work.</p>
                    <h3>Key Benefits of AI in the Workplace</h3>
                    <ul>
                      <li><strong>Smart Automation:</strong> AI tools can automate routine emails, schedule meetings, and handle document processing, freeing up valuable human time.</li>
                      <li><strong>Predictive Analytics:</strong> Machine learning models analyze project data to forecast bottlenecks and suggest optimal resource allocation.</li>
                      <li><strong>Enhanced Collaboration:</strong> AI-powered project management platforms boost team productivity by providing real-time insights and automating status updates.</li>
                    </ul>
                    <h3>Business Impact</h3>
                    <p>Companies that embrace AI-driven productivity solutions report significant improvements in efficiency, employee satisfaction, and bottom-line results. As AI adoption accelerates, staying ahead of these trends is crucial for maintaining a competitive edge and driving sustainable growth.</p>
                  </>
                );
              case 'devops-best-practices':
                return (
                  <>
                    <h2>DevOps Best Practices for Rapid Software Delivery</h2>
                    <p>DevOps is the backbone of modern software engineering, enabling teams to deliver high-quality features at speed and scale. By fostering a culture of collaboration and leveraging automation, organizations can streamline their release cycles and reduce operational risk.</p>
                    <h3>Core DevOps Principles</h3>
                    <ol>
                      <li><strong>Automate CI/CD Pipelines:</strong> Use tools like Jenkins, GitHub Actions, or GitLab CI to automate builds, tests, and deployments.</li>
                      <li><strong>Monitor Everything:</strong> Implement end-to-end monitoring for infrastructure, application performance, and user experience.</li>
                      <li><strong>Infrastructure as Code:</strong> Manage infrastructure with code for repeatable, scalable environments.</li>
                      <li><strong>Continuous Feedback:</strong> Foster a culture of learning and improvement through regular retrospectives and metrics tracking.</li>
                    </ol>
                    <h3>Business Outcomes</h3>
                    <p>Organizations that adopt DevOps best practices achieve faster release cycles, lower failure rates, and greater customer satisfaction—key drivers of success in the digital age.</p>
                  </>
                );
              case 'future-of-cloud':
                return (
                  <>
                    <h2>The Future of Cloud: Trends to Watch in 2025</h2>
                    <p>Cloud computing is undergoing a major transformation, with new paradigms like serverless, multi-cloud, and AI-driven infrastructure management redefining how software is built and delivered.</p>
                    <h3>Emerging Cloud Trends</h3>
                    <ul>
                      <li><strong>Serverless Computing:</strong> Reduces operational overhead and allows teams to focus on code and business logic.</li>
                      <li><strong>Multi-Cloud Strategies:</strong> Enhance resilience, flexibility, and vendor independence.</li>
                      <li><strong>AI-Driven Infrastructure:</strong> Uses machine learning to optimize resource allocation, cost, and performance.</li>
                    </ul>
                    <h3>Strategic Recommendations</h3>
                    <p>To stay competitive, organizations must embrace these trends, invest in cloud-native skills, and continuously evaluate their cloud architecture for scalability and security.</p>
                  </>
                );
              case 'design-systems-at-scale':
                return (
                  <>
                    <h2>Design Systems at Scale: Lessons from Logicwerk</h2>
                    <p>At Logicwerk, we recognized that a scalable design system is essential for rapid product development and consistent user experiences. Our journey began with a vision for centralized, reusable components and evolved into a robust system that empowers every team.</p>
                    <h3>How We Built Our Design System</h3>
                    <ul>
                      <li><strong>Centralized Component Libraries:</strong> Shared UI libraries ensure consistency and accelerate development.</li>
                      <li><strong>Automated Documentation:</strong> Living documentation keeps teams aligned and reduces onboarding friction.</li>
                      <li><strong>Design Tokens:</strong> Consistent theming and branding across all products.</li>
                      <li><strong>Governance & Contribution:</strong> Clear processes for proposing, reviewing, and adopting new patterns.</li>
                    </ul>
                    <h3>Key Takeaways</h3>
                    <p>Scaling a design system requires investment in tooling, culture, and cross-team collaboration. The payoff: faster releases, fewer bugs, and a cohesive brand experience.</p>
                  </>
                );
              case 'ai-ethics-in-delivery':
                return (
                  <>
                    <p>Ethical AI is about more than compliance—it's about building trust. We prioritize transparency, fairness, and accountability in every AI-powered project.</p>
                    <ul>
                      <li>Bias detection and mitigation</li>
                      <li>Explainable AI models</li>
                      <li>Continuous monitoring for unintended consequences</li>
                    </ul>
                    <p>By putting ethics at the core of our process, we deliver responsible innovation for our clients.</p>
                  </>
                );
              case 'case-lumeo-cloud':
                return (
                  <>
                    <p>Lumeo Cloud partnered with Logicwerk to accelerate their SaaS launch. Using our AI-augmented delivery process, we reduced their time-to-market by 70% and enabled weekly feature releases.</p>
                    <ul>
                      <li>Automated infrastructure provisioning</li>
                      <li>Continuous integration and delivery</li>
                      <li>AI-powered monitoring for reliability</li>
                    </ul>
                    <p>The result: a robust, scalable platform delivered ahead of schedule.</p>
                  </>
                );
              case 'case-edu-ai':
                return (
                  <>
                    <p>EduAI scaled from MVP to 1M users with Logicwerk’s help. Our agile sprints and cloud expertise enabled rapid iteration and robust infrastructure.</p>
                    <ul>
                      <li>Personalized learning experiences powered by AI</li>
                      <li>Scalable cloud backend for global reach</li>
                      <li>Automated testing and deployment</li>
                    </ul>
                    <p>EduAI now delivers personalized education to learners worldwide.</p>
                  </>
                );
              case 'case-retail-automation':
                return (
                  <>
                    <p>We helped a global retailer deploy AI-driven inventory management, reducing stockouts by 40%. Our solution integrated real-time data and predictive analytics for optimal inventory levels.</p>
                    <ul>
                      <li>AI-powered demand forecasting</li>
                      <li>Automated replenishment</li>
                      <li>Seamless ERP integration</li>
                    </ul>
                    <p>The retailer achieved significant cost savings and improved customer satisfaction.</p>
                  </>
                );
              case 'case-healthplus':
                return (
                  <>
                    <p>HealthPlus partnered with Logicwerk to deliver telemedicine at scale. We built a secure, user-friendly platform that improved patient outcomes and operational efficiency.</p>
                    <ul>
                      <li>HIPAA-compliant video consultations</li>
                      <li>Automated appointment scheduling</li>
                      <li>Integrated EHR system</li>
                    </ul>
                    <p>HealthPlus now serves thousands of patients with digital-first care.</p>
                  </>
                );
              case 'case-finance-ml':
                return (
                  <>
                    <p>FinAI needed a secure, compliant ML platform for risk analysis and fraud detection. We delivered a robust solution with automated data pipelines and real-time monitoring.</p>
                    <ul>
                      <li>End-to-end ML workflow automation</li>
                      <li>Real-time anomaly detection</li>
                      <li>Regulatory compliance built-in</li>
                    </ul>
                    <p>FinAI now automates risk analysis with confidence and speed.</p>
                  </>
                );
              default:
                return <p>Full article coming soon.</p>;
            }
          })()}
        </article>
      </main>
    </div>
  )
}
