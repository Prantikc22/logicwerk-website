export type InsightPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  type: 'blog' | 'case-study';
  image?: string;
};

export const posts: InsightPost[] = [
  // New 2025 posts (SEO-focused)
  {
    slug: 'agentic-ai-software-delivery-2025',
    title: 'Agentic AI in 2025: Shipping Software 10x Faster With Safety & Control',
    summary: `Agentic AI is moving from demos to production. This deep guide explains how delivery teams can deploy AI agents to automate backlog grooming, code generation, testing and ops—without losing governance. We cover secure prompt design, policy-guardrails, RAG for private codebases, and KPI frameworks that tie agent output to cycle time, lead time and change failure rate (DORA). Includes a reference architecture for SOC2-ready agent workflows on AWS/GCP, plus a checklist to pilot in under 30 days.`,
    date: '2025-11-15',
    type: 'blog',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'ai-governance-iso-42001-checklist',
    title: 'AI Governance for CTOs: ISO/IEC 42001 Readiness Checklist (Practical)',
    summary: `With AI regulations tightening, enterprises need auditable processes. This post provides a practical ISO/IEC 42001-aligned checklist covering model inventory, data lineage, bias testing, human-in-the-loop controls, incident response, vendor risk and continuous monitoring. Downloadable templates help engineering leaders operationalize AI governance without slowing delivery.`,
    date: '2025-11-10',
    type: 'blog',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'finops-llm-cost-optimization',
    title: 'FinOps for LLMs: 9 Tactics to Cut GenAI Costs by 40–70%',
    summary: `GenAI spend is exploding. Learn proven tactics to reduce inference cost: prompt caching, token budgeting, small model routing, distillation, batch + streaming, multi-tenant gateway, autoscaling, GPU/TPU rightsizing and cost SLOs. Includes a calculator spreadsheet and reference configs for OpenAI, Claude, and open-source models running on Kubernetes.`,
    date: '2025-11-05',
    type: 'blog',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  },
  // New case study
  {
    slug: 'case-support-genai-telecom',
    title: 'Case Study: TelecomGen — Cutting Support TTR by 62% With GenAI Agents',
    summary: `A Tier-1 telecom struggled with 48h ticket backlogs. Logicwerk implemented secure RAG-based support agents grounded in internal KB + Jira/Confluence, added guardrails and human review, and integrated with Zendesk. Results in 8 weeks: 62% faster time-to-resolution, 37% reduction in escalations, and $1.2M annualized savings. This case study details architecture, evaluation metrics, prompt + tool design, and the rollout playbook.`,
    date: '2025-10-28',
    type: 'case-study',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  // Blog posts
  {
    slug: 'ai-powered-productivity',
    title: 'AI-Powered Productivity: Transforming Modern Workflows',
    summary: `Discover how AI tools are reshaping productivity, automating routine tasks, and empowering teams to focus on high-impact work. In today's fast-paced digital landscape, businesses are increasingly turning to artificial intelligence to streamline workflows, reduce manual errors, and unlock new levels of efficiency. 

From intelligent scheduling assistants that optimize meetings to advanced document processing that extracts and analyzes data in seconds, AI is revolutionizing how organizations operate. Teams can now automate repetitive emails, manage complex projects with predictive analytics, and leverage natural language processing for smarter customer interactions. 

By embracing AI-powered productivity solutions, companies not only boost output but also enhance employee satisfaction by allowing staff to focus on creative, strategic initiatives. As AI adoption accelerates, staying ahead of these trends will be crucial for maintaining a competitive edge and driving sustainable business growth.`,
    date: '2025-07-15',
    type: 'blog',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'devops-best-practices',
    title: 'DevOps Best Practices for Rapid Software Delivery',
    summary: `A practical guide to implementing DevOps in your organization for faster, more reliable releases. DevOps has become the gold standard for high-performing software teams, enabling continuous delivery, rapid iteration, and robust system reliability. 

This comprehensive guide covers the essentials of building a DevOps culture: automating CI/CD pipelines, integrating real-time monitoring, and fostering collaboration between development and operations. Learn how to implement infrastructure as code, leverage containerization, and use cloud-native tools for scalable deployments. 

By adopting DevOps best practices, organizations can reduce deployment times, minimize outages, and respond quickly to market demands—key factors for success in today's digital economy.`,
    date: '2025-06-28',
    type: 'blog',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'future-of-cloud',
    title: 'The Future of Cloud: Trends to Watch in 2025',
    summary: `Explore emerging trends in cloud technology and how they will impact software delivery in the coming years. The cloud is evolving at breakneck speed, driven by innovations in serverless computing, multi-cloud strategies, and AI-powered infrastructure management. 

This article delves into the future of cloud: how serverless platforms are reducing operational overhead, why multi-cloud adoption is essential for resilience, and how AI is optimizing resource allocation and cost management. 

Discover actionable strategies for leveraging these trends to accelerate software delivery, improve scalability, and maintain a competitive edge in 2025 and beyond.`,
    date: '2025-06-10',
    type: 'blog',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'design-systems-at-scale',
    title: 'Design Systems at Scale: Lessons from Logicwerk',
    summary: `How we built and scaled a robust design system to support rapid product development across teams. At Logicwerk, our design system journey began with a clear goal: enable consistency and speed without sacrificing creativity. 

We centralized our component libraries, automated documentation, and established governance processes to ensure every team could contribute and benefit. Learn how we overcame scaling challenges, integrated design tokens, and fostered a culture of shared ownership. 

This deep dive offers practical lessons for organizations looking to scale design systems, improve cross-team collaboration, and deliver cohesive user experiences at scale.`,
    date: '2025-05-22',
    type: 'blog',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'ai-ethics-in-delivery',
    title: 'AI Ethics in Software Delivery',
    summary: `Balancing innovation and responsibility: our approach to ethical AI in client projects. As AI becomes integral to software delivery, ethical considerations are more important than ever. 

This post explores Logicwerk's framework for responsible AI: transparent data usage, bias mitigation, and ongoing monitoring. We discuss real-world scenarios where ethical dilemmas arise and share our strategies for maintaining trust, fairness, and compliance. 

Learn how to balance rapid innovation with ethical responsibility—ensuring your AI solutions drive value while upholding the highest standards of integrity and accountability.`,
    date: '2025-05-01',
    type: 'blog',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  },
  // Case studies
  {
    slug: 'case-lumeo-cloud',
    title: 'Case Study: Lumeo Cloud – Accelerating SaaS Launches',
    summary: `How Logicwerk helped Lumeo Cloud cut their launch timeline by 70% using our AI-augmented delivery process. Lumeo Cloud faced a critical challenge: accelerate their SaaS launch without compromising on quality or security. 

Our team deployed a tailored blend of AI-driven automation, agile sprints, and cloud-native infrastructure. We implemented automated testing, continuous integration, and real-time monitoring—enabling Lumeo Cloud to reduce manual bottlenecks and respond instantly to issues. 

The result: a 70% faster go-to-market, robust platform stability, and a scalable foundation for future growth. This case study details the strategies, tools, and lessons learned along the way.`,
    date: '2025-04-18',
    type: 'case-study',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'case-edu-ai',
    title: 'Case Study: EduAI – Personalized Learning at Scale',
    summary: `Scaling EduAI from MVP to 1M users with robust cloud infrastructure and agile sprints. EduAI's vision was to make personalized learning accessible to millions, but rapid growth brought infrastructure and delivery challenges. 

Logicwerk partnered with EduAI to design a scalable, secure cloud architecture and implement agile sprint cycles. We automated deployments, integrated AI-powered analytics, and optimized for cost and performance at every stage. 

This case study covers the technical and organizational strategies that enabled EduAI to scale from MVP to 1M users—delivering personalized learning at unprecedented speed and scale.`,
    date: '2025-03-30',
    type: 'case-study',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'case-retail-automation',
    title: 'Case Study: Retail Automation – AI in Action',
    summary: `Deploying AI-driven inventory management for a global retailer, reducing stockouts by 40%. Inventory management is a perennial challenge for global retailers, often resulting in lost sales and customer dissatisfaction. 

Logicwerk implemented a custom AI solution that predicted demand, optimized stock levels, and automated replenishment. The result: a 40% reduction in stockouts, improved cash flow, and happier customers. 

This case study explores the end-to-end process, from business analysis to AI deployment, and the measurable ROI achieved.`,
    date: '2025-03-15',
    type: 'case-study',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'case-healthplus',
    title: 'Case Study: HealthPlus – Digital Health Transformation',
    summary: `Enabling HealthPlus to deliver telemedicine at scale, improving patient outcomes and operational efficiency. HealthPlus needed to modernize its digital health platform to meet surging patient demand and regulatory requirements. 

Logicwerk designed and delivered a secure, scalable telemedicine solution—integrating EHR systems, automating appointment scheduling, and ensuring HIPAA compliance. 

This case study details the transformation journey, highlighting key technical decisions, change management best practices, and the impact on both patient care and operational efficiency.`,
    date: '2025-02-22',
    type: 'case-study',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd23?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'case-finance-ml',
    title: 'Case Study: FinAI – Machine Learning in Finance',
    summary: 'Building a secure, compliant ML platform for FinAI to automate risk analysis and fraud detection.',
    date: '2025-01-30',
    type: 'case-study',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
  },
];