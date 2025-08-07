"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Search,
  FileText,
  BarChart3,
  Megaphone,
  Shield,
  Heart,
  Building2,
  Code,
  Zap,
  Users,
  Clock,
  CheckCircle,
  Play,
} from "lucide-react"
import Link from "next/link"

const agentCategories = [
  {
    id: "planning",
    name: "Planning & Resources",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    count: 16,
    agents: [
      {
        name: "Search",
        description: "Retrieves relevant information from files, tools, or the web",
        industries: ["All"],
      },
      {
        name: "Categorizer",
        description: "Classifies intents or documents into predefined categories",
        industries: ["Legal", "Healthcare"],
      },
      {
        name: "External Tool Caller",
        description: "Executes actions across 100+ external apps",
        industries: ["Tech", "Sales"],
      },
      { name: "Web Search", description: "Gets real-time info from the web", industries: ["All"] },
      {
        name: "Document Classifier",
        description: "Auto-categorizes docs (invoices, contracts)",
        industries: ["Legal", "Finance"],
      },
      {
        name: "Knowledge Graph Generator",
        description: "Builds knowledge graphs from documents",
        industries: ["Healthcare", "Legal"],
      },
      {
        name: "Supply Chain Optimizer",
        description: "Identifies inefficiencies and suggests improvements",
        industries: ["Manufacturing"],
      },
      { name: "Productivity Optimizer", description: "Analyzes workflows and productivity data", industries: ["All"] },
      {
        name: "ArXiv Search",
        description: "Searches scientific papers from ArXiv",
        industries: ["Healthcare", "Tech"],
      },
      { name: "Wikipedia Search", description: "Fetches verified summaries from Wikipedia", industries: ["All"] },
      {
        name: "Google Scholar Search",
        description: "Retrieves academic papers and citations",
        industries: ["Healthcare", "Legal"],
      },
      {
        name: "Price Comparison",
        description: "Compares product prices across retailers",
        industries: ["Retail", "Finance"],
      },
      {
        name: "Combine Search Results",
        description: "Reranks results from different agentic searches",
        industries: ["All"],
      },
      {
        name: "External App Search",
        description: "Runs analytical queries in apps like Salesforce, Jira",
        industries: ["Sales", "Tech"],
      },
      {
        name: "Conversation to Search Query",
        description: "Converts conversations into structured search queries",
        industries: ["All"],
      },
      { name: "Tag Extractor", description: "Pulls key tags from context for refined searches", industries: ["All"] },
    ],
  },
  {
    id: "generation",
    name: "Generation",
    icon: FileText,
    color: "from-emerald-500 to-teal-500",
    count: 16,
    agents: [
      { name: "Email Writer", description: "Writes professional, context-aware emails", industries: ["Sales", "All"] },
      { name: "Respond using Search Results", description: "Answers questions using search data", industries: ["All"] },
      {
        name: "Create Charts",
        description: "Generates visual charts from structured data",
        industries: ["Finance", "Analytics"],
      },
      {
        name: "Cybersecurity Expert",
        description: "Provides expert security insights",
        industries: ["Tech", "Finance"],
      },
      { name: "Technical Support", description: "Helps with software/hardware troubleshooting", industries: ["Tech"] },
      { name: "PRD Writer", description: "Creates structured Product Requirement Documents", industries: ["Tech"] },
      { name: "FAQ Creator", description: "Converts long content into FAQs", industries: ["All"] },
      {
        name: "SOP Builder",
        description: "Builds Standard Operating Procedures",
        industries: ["Manufacturing", "Healthcare"],
      },
      { name: "Training Material Generator", description: "Creates role-based training content", industries: ["All"] },
      { name: "Employee Onboarding Customizer", description: "Personalizes onboarding plans", industries: ["All"] },
      {
        name: "Citation Generator",
        description: "Formats citations in APA, MLA, etc.",
        industries: ["Legal", "Healthcare"],
      },
      {
        name: "Visualization Advisor",
        description: "Suggests charts based on CSV analysis",
        industries: ["Analytics", "Finance"],
      },
      { name: "Study Plan Generator", description: "Builds custom study plans", industries: ["Education"] },
      { name: "Respond", description: "Answers queries based on instructions", industries: ["All"] },
      { name: "Fixed Response", description: "Pre-defined responses for common scenarios", industries: ["All"] },
      {
        name: "Combine Text with Sources",
        description: "Merges response with cited sources",
        industries: ["Legal", "Healthcare"],
      },
    ],
  },
  {
    id: "evaluation",
    name: "Evaluation & Formatting",
    icon: CheckCircle,
    color: "from-purple-500 to-pink-500",
    count: 6,
    agents: [
      {
        name: "Rule Validation",
        description: "Applies complex rules to documents or data",
        industries: ["Legal", "Finance"],
      },
      { name: "Markdown Formatter", description: "Formats text into clean Markdown", industries: ["Tech"] },
      { name: "JSON Formatter", description: "Cleans and formats JSON", industries: ["Tech"] },
      { name: "HTML Formatter", description: "Neatly formats HTML code", industries: ["Tech"] },
      { name: "Query Refinement Assistant", description: "Enhances and optimizes queries", industries: ["All"] },
      { name: "Meeting Summarizer", description: "Summarizes meeting transcripts", industries: ["All"] },
    ],
  },
  {
    id: "analytics",
    name: "Analytics",
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
    count: 6,
    agents: [
      { name: "Internal Job Mobility Matcher", description: "Suggests internal career moves", industries: ["All"] },
      { name: "Insight Extractor", description: "Pulls insights from docs, data, or chats", industries: ["All"] },
      {
        name: "Sentiment Analyzer",
        description: "Detects sentiment and emotion in text",
        industries: ["Sales", "Marketing"],
      },
      {
        name: "Financial Risk Assessor",
        description: "Evaluates financial threats and risks",
        industries: ["Finance"],
      },
      { name: "Market Trend Analyzer", description: "Detects emerging trends", industries: ["Sales", "Marketing"] },
      {
        name: "Predictive Maintenance Insights",
        description: "Predicts maintenance needs",
        industries: ["Manufacturing"],
      },
    ],
  },
  {
    id: "sales",
    name: "Sales & Marketing",
    icon: Megaphone,
    color: "from-pink-500 to-rose-500",
    count: 13,
    agents: [
      { name: "Newsletter Writer", description: "Drafts audience-specific newsletters", industries: ["Marketing"] },
      { name: "Sales Contract Summarizer", description: "Summarizes sales agreements", industries: ["Sales", "Legal"] },
      { name: "Brand Tone Consistency Checker", description: "Ensures tone matches brand", industries: ["Marketing"] },
      { name: "SEO Content Optimizer", description: "Improves SEO while keeping quality", industries: ["Marketing"] },
      {
        name: "Personalized Content Generator",
        description: "Creates industry-specific marketing content",
        industries: ["Marketing"],
      },
      { name: "Investor Pitch Enhancer", description: "Enhances pitch decks", industries: ["Finance", "Sales"] },
      {
        name: "Social Media Content Creator",
        description: "Generates content for LinkedIn, Twitter, etc.",
        industries: ["Marketing"],
      },
      {
        name: "Sales Battle Card Generator",
        description: "Creates competitive sales documents",
        industries: ["Sales"],
      },
      {
        name: "Creative Idea Generator",
        description: "Suggests innovative product/content ideas",
        industries: ["Marketing"],
      },
      { name: "Suno.AI Prompt Generator", description: "Generates prompts for Suno videos", industries: ["Marketing"] },
      {
        name: "Sora Video Prompt Generator",
        description: "Generates prompts for Sora videos",
        industries: ["Marketing"],
      },
      { name: "Blocklist Reformatter", description: "Replaces blocklisted words", industries: ["Marketing"] },
      { name: "Brand Content Checker", description: "Validates multi-modal content", industries: ["Marketing"] },
    ],
  },
  {
    id: "legal",
    name: "Legal & Compliance",
    icon: Shield,
    color: "from-indigo-500 to-purple-500",
    count: 11,
    agents: [
      { name: "Legal Expert", description: "Provides legal guidance using cited laws", industries: ["Legal"] },
      {
        name: "Compliance Document Analyzer",
        description: "Reviews compliance docs for gaps",
        industries: ["Legal", "Finance"],
      },
      {
        name: "International Transaction Compliance Checker",
        description: "Checks global transactions",
        industries: ["Legal", "Finance"],
      },
      {
        name: "Redact Guard",
        description: "Redacts sensitive info from documents",
        industries: ["Legal", "Healthcare"],
      },
      {
        name: "Real Estate Compliance Assessment",
        description: "Reviews legal aspects of real estate deals",
        industries: ["Legal"],
      },
      {
        name: "Regulatory Filing Assistant",
        description: "Automates regulatory submissions",
        industries: ["Legal", "Finance"],
      },
      { name: "Legal Compliance Summarizer", description: "Summarizes complex legal documents", industries: ["Legal"] },
      { name: "Sustainability Compliance Advisor", description: "Evaluates green compliance", industries: ["Legal"] },
      { name: "Contract Risk Identifier", description: "Flags risky or vague contract terms", industries: ["Legal"] },
      {
        name: "AI Policy & Ethics Consultant",
        description: "Guides on ethical AI practices",
        industries: ["Legal", "Tech"],
      },
      { name: "Legal Precedent Analyser", description: "Finds and explains case law relevance", industries: ["Legal"] },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: Heart,
    color: "from-green-500 to-emerald-500",
    count: 9,
    agents: [
      {
        name: "Patient Insights Analyzer",
        description: "Analyzes patient data for treatment insights",
        industries: ["Healthcare"],
      },
      {
        name: "Medical Evidence Summarizer",
        description: "Summarizes clinical literature",
        industries: ["Healthcare"],
      },
      {
        name: "Medical Research Organizer",
        description: "Structures research for easy access",
        industries: ["Healthcare"],
      },
      { name: "Medical Record Summarizer", description: "Summarizes medical records", industries: ["Healthcare"] },
      {
        name: "Medical Procedure Evaluator",
        description: "Assesses procedure eligibility",
        industries: ["Healthcare"],
      },
      {
        name: "Medical Assessment Creator",
        description: "Creates structured medical assessments",
        industries: ["Healthcare"],
      },
      {
        name: "Medical Procedure Payment Calculator",
        description: "Calculates Medicare-based payment estimates",
        industries: ["Healthcare"],
      },
      {
        name: "Medical Conversation to EHR Converter",
        description: "Converts doctor-patient talk into EHR format",
        industries: ["Healthcare"],
      },
      {
        name: "Health & Medical Search",
        description: "Pulls info from trusted sources like PubMed, WebMD",
        industries: ["Healthcare"],
      },
    ],
  },
  {
    id: "finance",
    name: "Banking & Finance",
    icon: Building2,
    color: "from-yellow-500 to-orange-500",
    count: 12,
    agents: [
      {
        name: "Audit Evidence Verifier",
        description: "Verifies financial transactions and evidence",
        industries: ["Finance"],
      },
      {
        name: "Financial Statement Analyzer",
        description: "Extracts insights from financial statements",
        industries: ["Finance"],
      },
      { name: "Tax Advisor", description: "Gives up-to-date tax guidance", industries: ["Finance"] },
      { name: "Auto Claim Analyzer", description: "Reviews insurance claims", industries: ["Finance"] },
      {
        name: "PnC Underwriter",
        description: "Evaluates property and casualty insurance risks",
        industries: ["Finance"],
      },
      { name: "Securities Trading Strategist", description: "Recommends trading strategies", industries: ["Finance"] },
      { name: "Purchase Order Validator", description: "Validates procurement documents", industries: ["Finance"] },
      { name: "Insurance Claim Summarizer", description: "Summarizes insurance claims", industries: ["Finance"] },
      {
        name: "Cash Receipts Reconciliation",
        description: "Matches bank receipts with invoices",
        industries: ["Finance"],
      },
      {
        name: "General and Sub-Ledger Reconciliation",
        description: "Ensures ledger accuracy",
        industries: ["Finance"],
      },
      { name: "Vehicle Finance Analyst", description: "Analyzes vehicle financing data", industries: ["Finance"] },
      {
        name: "Contribution Margin & Loss Low Report Generator",
        description: "Flags low-margin or loss-making products",
        industries: ["Finance"],
      },
    ],
  },
  {
    id: "technology",
    name: "Technology",
    icon: Code,
    color: "from-slate-500 to-gray-500",
    count: 3,
    agents: [
      {
        name: "Ticket Dashboard Summarizer",
        description: "Summarizes Jira/Zendesk system issues",
        industries: ["Tech"],
      },
      {
        name: "Cybersecurity Threat Summarizer",
        description: "Summarizes security reports into action steps",
        industries: ["Tech"],
      },
      { name: "Phishing Email Detector", description: "Flags suspicious or phishing emails", industries: ["Tech"] },
    ],
  },
]

const industryStats = [
  {
    name: "Healthcare",
    improvement: "85%",
    metric: "Patient Processing Speed",
    description: "Faster patient data analysis and treatment recommendations",
  },
  {
    name: "Finance",
    improvement: "92%",
    metric: "Compliance Accuracy",
    description: "Automated regulatory compliance and risk assessment",
  },
  {
    name: "Sales",
    improvement: "78%",
    metric: "Lead Conversion Rate",
    description: "AI-powered lead scoring and personalized outreach",
  },
  {
    name: "Technology",
    improvement: "90%",
    metric: "Issue Resolution Time",
    description: "Automated ticket analysis and solution recommendations",
  },
  {
    name: "Legal",
    improvement: "88%",
    metric: "Document Review Speed",
    description: "Intelligent contract analysis and compliance checking",
  },
]

export default function IntelliwerkAIPage() {
  const [activeCategory, setActiveCategory] = useState("planning")
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null)

  const activeAgents = agentCategories.find((cat) => cat.id === activeCategory)?.agents || []

  return (
    <main className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

          {/* Network Visualization */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 800 600">
              <defs>
                <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              {/* Network connections */}
              <g stroke="url(#networkGradient)" strokeWidth="1" fill="none">
                <line x1="100" y1="100" x2="300" y2="200" className="animate-pulse" />
                <line x1="300" y1="200" x2="500" y2="150" className="animate-pulse delay-500" />
                <line x1="500" y1="150" x2="700" y2="300" className="animate-pulse delay-1000" />
                <line x1="200" y1="400" x2="400" y2="350" className="animate-pulse delay-300" />
                <line x1="400" y1="350" x2="600" y2="450" className="animate-pulse delay-700" />
              </g>
              {/* Network nodes */}
              <g fill="url(#networkGradient)">
                <circle cx="100" cy="100" r="4" className="animate-pulse" />
                <circle cx="300" cy="200" r="6" className="animate-pulse delay-200" />
                <circle cx="500" cy="150" r="5" className="animate-pulse delay-400" />
                <circle cx="700" cy="300" r="4" className="animate-pulse delay-600" />
                <circle cx="200" cy="400" r="5" className="animate-pulse delay-800" />
                <circle cx="400" cy="350" r="6" className="animate-pulse delay-1000" />
                <circle cx="600" cy="450" r="4" className="animate-pulse delay-1200" />
              </g>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-4 py-2 text-sm font-medium">
                Intelliwerk AI Platform
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Your Intelligent Team of{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI Agents
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Automate, generate, and optimize across industries using Intelliwerk AI. Deploy 100+ pre-built AI agents
              or create custom solutions with our low-code platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-sm text-lg"
              >
                <Play className="mr-2 w-5 h-5" />
                Start with 1 Agent
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 rounded-sm text-lg bg-transparent"
              >
                View Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="mt-8 text-sm text-slate-400">Trusted by 300+ enterprise clients worldwide</div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Started in{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                3 Simple Steps
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Deploy your first AI agent in minutes, not months. No coding required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Agent",
                description: "Browse 100+ pre-built agents or describe your use case",
                icon: Search,
              },
              {
                step: "02",
                title: "Deploy Instantly",
                description: "One-click deployment with enterprise-grade security",
                icon: Zap,
              },
              {
                step: "03",
                title: "See Results",
                description: "Monitor performance and scale across your organization",
                icon: BarChart3,
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-cyan-400 font-bold text-sm mb-2">STEP {item.step}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-slate-400">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Agent Categories */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI Agent Library
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              100+ specialized AI agents organized by function and industry. Each agent is ready to deploy and can be
              customized for your specific needs.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {agentCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                  <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                    {category.count}
                  </Badge>
                </button>
              )
            })}
          </div>

          {/* Agent Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeAgents.map((agent, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                onClick={() =>
                  setExpandedAgent(expandedAgent === `${activeCategory}-${index}` ? null : `${activeCategory}-${index}`)
                }
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">{agent.name}</h3>
                    <div className="flex flex-wrap gap-1">
                      {agent.industries.slice(0, 2).map((industry, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-cyan-500/30 text-cyan-400">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">{agent.description}</p>

                  {expandedAgent === `${activeCategory}-${index}` && (
                    <div className="border-t border-slate-700 pt-4 mt-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                          <ul className="text-xs text-slate-400 space-y-1">
                            <li>• Automated workflow processing</li>
                            <li>• Real-time data analysis</li>
                            <li>• Integration with existing systems</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Deployment:</h4>
                          <div className="flex items-center space-x-2 text-xs text-slate-400">
                            <Clock className="w-3 h-3" />
                            <span>5 minutes setup</span>
                            <Users className="w-3 h-3 ml-2" />
                            <span>Multi-user ready</span>
                          </div>
                        </div>
                        <Button size="sm" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-sm">
                          Deploy Agent
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Impact */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How Intelliwerk AI Helps{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Different Industries
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Real impact across sectors with measurable improvements in efficiency, accuracy, and cost savings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {industryStats.map((stat, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.improvement}
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">{stat.metric}</div>
                  <div className="text-xs text-cyan-400 font-medium mb-3">{stat.name}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-sm"
              >
                Start Your AI Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
