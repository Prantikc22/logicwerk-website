"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, 
  Target, 
  Cog, 
  Rocket, 
  CheckCircle, 
  ArrowRight,
  Play,
  Users,
  TrendingUp,
  Zap
} from 'lucide-react';

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface StepCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  isActive: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ icon: Icon, title, description, index, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "relative p-6 rounded-xl border transition-all duration-500",
        isActive 
          ? "bg-primary/5 border-primary/30 shadow-lg" 
          : "bg-background border-border hover:border-primary/20"
      )}
    >
      <div className="flex items-start space-x-4">
        <div className={cn(
          "flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300",
          isActive 
            ? "bg-primary text-primary-foreground" 
            : "bg-muted text-muted-foreground"
        )}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      
      {isActive && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-1"
        >
          <CheckCircle className="h-4 w-4" />
        </motion.div>
      )}
    </motion.div>
  );
};

const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery Call",
      description: "Align on goals, scope, and outcomes"
    },
    {
      icon: Cog,
      title: "Weekly Sprints",
      description: "AI + Humans build and ship, fast"
    },
    {
      icon: CheckCircle,
      title: "Check-ins",
      description: "Weekly reviews to refine and reprioritize"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            Weekly Sprints. No billable hours. Transparent Costs.
          </p>
          <div className="text-base text-primary font-semibold mb-10">
            Just focused outcome, every week.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              {...step}
              index={index}
              isActive={index === activeStep}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function HowItWorksDemo() {
  return (
    <div className="bg-background">
      <HowItWorksSection />
    </div>
  );
}
