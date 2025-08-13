"use client";
import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Building2, Heart, Plane, ShoppingCart, Landmark, Factory, Zap, Truck } from "lucide-react";

export interface IndustryData {
  key: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  impact: string;
  image: string;
  solutions: string[];
  stats: string[];
  customers: string[];
}

const INDUSTRIES: IndustryData[] = [
  // --- Existing industries above ---
  // --- Consumer Goods ---
  {
    key: "consumer-goods",
    name: "Consumer Goods",
    icon: <ShoppingCart className="w-8 h-8 text-orange-400" />,
    description: "Digitally transforming FMCG and CPG brands with AI-powered supply chain, demand forecasting, and retail analytics.",
    impact: "250+ brands optimized, 20% reduction in stockouts, 15% faster time-to-shelf.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop&crop=center",
    solutions: [
      "AI demand forecasting",
      "Retail analytics dashboards",
      "Supply chain automation",
      "Trade promotion optimization",
      "Omnichannel consumer engagement"
    ],
    stats: [
      "250+ Brands",
      "20% Fewer Stockouts",
      "15% Faster to Shelf"
    ],
    customers: []
  },
  // --- Insurance ---
  {
    key: "insurance",
    name: "Insurance",
    icon: <Landmark className="w-8 h-8 text-indigo-500" />,
    description: "Reinventing insurance with automated claims, digital onboarding, and AI-driven risk assessment.",
    impact: "120+ insurers modernized, 40% faster claims, 99.9% compliance.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&crop=center",
    solutions: [
      "Automated claims processing",
      "Risk analytics & scoring",
      "Digital customer onboarding",
      "Fraud detection AI",
      "Policy management portals"
    ],
    stats: [
      "120+ Insurers",
      "40% Faster Claims",
      "99.9% Compliance"
    ],
    customers: []
  },
  // --- Entertainment & Media ---
  {
    key: "entertainment-media",
    name: "Entertainment & Media",
    icon: <Zap className="w-8 h-8 text-pink-400" />,
    description: "Empowering studios and publishers with content automation, audience analytics, and streaming innovation.",
    impact: "80+ studios scaled, 3x faster content delivery, 10M+ viewers reached.",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop&crop=center",
    solutions: [
      "Automated content workflows",
      "Audience segmentation & analytics",
      "OTT streaming platforms",
      "Digital rights management",
      "Personalized recommendations"
    ],
    stats: [
      "80+ Studios",
      "3x Faster Delivery",
      "10M+ Viewers"
    ],
    customers: []
  },
  // --- Education ---
  {
    key: "education",
    name: "Education",
    icon: <Heart className="w-8 h-8 text-blue-400" />,
    description: "Modernizing education with AI-driven learning, analytics, and digital campus solutions.",
    impact: "200+ schools transformed, 98% digital adoption, 30% improved outcomes.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=600&fit=crop&crop=center",
    solutions: [
      "AI-powered learning management",
      "Student analytics dashboards",
      "Digital campus automation",
      "Personalized education pathways",
      "Remote & hybrid learning"
    ],
    stats: [
      "200+ Schools",
      "98% Digital Adoption",
      "30% Better Outcomes"
    ],
    customers: []
  },
  {
    key: "banking-finance",
    name: "Banking & Finance",
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    description: "Transforming financial institutions with secure, scalable, and innovative digital solutions.",
    impact: "300+ banks modernized, $2.4B+ value generated, 99.99% uptime delivered.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    solutions: [
      "Core banking modernization",
      "AI-driven fraud detection",
      "RegTech and compliance automation",
      "Mobile and digital banking apps",
      "Customer 360 analytics"
    ],
    stats: [
      "300+ Banks",
      "$2.4B+ Value Generated",
      "99.99% Uptime"
    ],
    customers: []
  },
  {
    key: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    icon: <Heart className="w-8 h-8 text-pink-500" />,
    description: "Empowering healthcare organizations with AI-driven diagnostics, patient engagement, and compliance.",
    impact: "45% faster diagnosis, 70+ hospitals served, 100% HIPAA compliance.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
    solutions: [
      "AI diagnostics & imaging",
      "Patient engagement platforms",
      "HIPAA-compliant cloud migration",
      "EHR/EMR integration",
      "Remote health monitoring"
    ],
    stats: [
      "70+ Hospitals",
      "45% Faster Diagnosis",
      "100% HIPAA Compliance"
    ],
    customers: ["Apollo Hospitals", "Mayo Clinic", "Sun Pharma"]
  },
  {
    key: "aviation-travel",
    name: "Aviation & Travel",
    icon: <Plane className="w-8 h-8 text-cyan-500" />,
    description: "Optimizing airline operations and travel experiences through automation and predictive analytics.",
    impact: "99.5% on-time performance, 1M+ travelers impacted annually.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&crop=center",
    solutions: [
      "Flight operations automation",
      "Predictive maintenance",
      "Smart booking and personalization",
      "Loyalty program analytics",
      "Real-time travel alerts"
    ],
    stats: [
      "1M+ Travelers",
      "99.5% On-Time",
      "30+ Airlines"
    ],
    customers: []
  },
  {
    key: "retail-ecommerce",
    name: "Retail & Ecommerce",
    icon: <ShoppingCart className="w-8 h-8 text-green-600" />,
    description: "Boosting retail growth with omnichannel commerce, personalization, and inventory intelligence.",
    impact: "25% sales lift, 50+ global brands empowered.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
    solutions: [
      "Omnichannel commerce",
      "Personalized recommendations",
      "Inventory optimization",
      "Mobile shopping apps",
      "Customer loyalty solutions"
    ],
    stats: [
      "50+ Brands",
      "25% Sales Lift",
      "500+ Stores"
    ],
    customers: []
  },
  {
    key: "government-public-sector",
    name: "Government & Public Sector",
    icon: <Landmark className="w-8 h-8 text-yellow-500" />,
    description: "Delivering digital transformation for governments with security, transparency, and citizen engagement.",
    impact: "10M+ citizens served, 99.9% digital service uptime.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
    solutions: [
      "Citizen service portals",
      "E-governance automation",
      "Smart city analytics",
      "Secure cloud infrastructure",
      "Transparency dashboards"
    ],
    stats: [
      "10M+ Citizens",
      "99.9% Uptime",
      "50+ Agencies"
    ],
    customers: []
  },
  {
    key: "manufacturing",
    name: "Manufacturing",
    icon: <Factory className="w-8 h-8 text-gray-500" />,
    description: "Driving smart factories with IoT, robotics, and real-time analytics.",
    impact: "35% efficiency gain, 100+ plants automated.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop&crop=center",
    solutions: [
      "Smart factory automation",
      "IoT device integration",
      "Predictive maintenance",
      "Supply chain analytics",
      "Robotics process automation"
    ],
    stats: [
      "100+ Plants",
      "35% Efficiency Gain",
      "200+ Deployments"
    ],
    customers: []
  },
  {
    key: "energy-utilities",
    name: "Energy & Utilities",
    icon: <Zap className="w-8 h-8 text-amber-500" />,
    description: "Modernizing energy infrastructure with smart grids, renewables, and sustainability analytics.",
    impact: "50% grid reliability improvement, 30% more renewables integrated.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&crop=center",
    solutions: [
      "Smart grid solutions",
      "Renewable energy analytics",
      "Energy consumption forecasting",
      "Sustainability dashboards",
      "Grid automation"
    ],
    stats: [
      "50+ Plants",
      "30% More Renewables",
      "50% Grid Reliability"
    ],
    customers: []
  },
  {
    key: "healthcare",
    name: "Healthcare",
    icon: <Heart className="w-8 h-8 text-pink-500" />,
    description: "AI-powered healthcare solutions and patient care",
    impact: "150+ hospitals, 99.99% uptime, 45% faster diagnosis",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
    solutions: [
      "AI diagnostics",
      "Patient engagement platforms",
      "EHR/EMR integration",
      "Remote health monitoring",
      "Healthcare analytics"
    ],
    stats: [
      "150+ Hospitals",
      "99.99% Uptime",
      "45% Faster Diagnosis"
    ],
    customers: ["Apollo Hospitals", "Mayo Clinic", "Sun Pharma"]
  }
];

interface IndustryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  industryKey: string | null;
}

export default function IndustryDialog({ open, onOpenChange, industryKey }: IndustryDialogProps) {
  const industry = React.useMemo(() => INDUSTRIES.find(i => i.key === industryKey), [industryKey]);
  if (!industry) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl w-full rounded-2xl p-0 overflow-hidden bg-white/95 shadow-2xl border-0 max-h-[90vh] flex flex-col">
  <div className="overflow-y-auto flex-1">
        {/* Top Image */}
        <div className="w-full h-48 md:h-56 relative overflow-hidden">
          <img
            src={industry.image}
            alt={industry.name}
            className="w-full h-full object-cover object-center"
            style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
          />
        </div>
        <div className="p-8 pt-6">
          <DialogHeader className="flex flex-row items-center gap-4 mb-4">
            {industry.icon}
            <div>
              <DialogTitle className="text-2xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                {industry.name}
                <Badge className="ml-2 bg-blue-100 text-blue-700 font-semibold px-2 py-1 text-xs">Industry</Badge>
              </DialogTitle>
              <DialogDescription className="text-base text-gray-600">
                {industry.description}
              </DialogDescription>
            </div>
          </DialogHeader>

          {/* Solutions List */}
          <div className="my-4">
            <div className="text-gray-800 font-semibold mb-2">Solutions we provide:</div>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {(industry.solutions || []).map((sol, i) => (
                <li key={i}>{sol}</li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 my-4">
            {(industry.stats || []).map((stat, i) => (
              <span key={i} className="inline-block bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-blue-100">{stat}</span>
            ))}
          </div>

          {/* Impact */}
          <div className="my-4">
            <div className="text-gray-800 font-semibold mb-1">Our Impact:</div>
            <div className="text-blue-700 font-bold text-lg">{industry.impact}</div>
          </div>

        {/* Footer */}
        <div className="w-full px-8 min-h-20 flex flex-row items-center justify-end gap-3 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-b-2xl">
          <span className="text-sm text-gray-500">Want to transform your {industry.name}?</span>
          <a href="#contact" className="inline-block px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">Get in Touch</a>
        </div>
      </div>
</div>
      </DialogContent>
    </Dialog>
  );
}

export { INDUSTRIES };
