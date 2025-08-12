'use client';
import React from 'react';
import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
  {
    title: 'AI-Augmented Teams',
    icon: Cpu,
    description: 'Human experts enhanced by AI agents for maximum efficiency',
  },
  {
    title: 'Weekly Sprints',
    icon: Zap,
    description: 'Clear deliverables every 7 days with transparent progress tracking',
  },
  {
    title: 'Fixed-Price Packs',
    icon: Settings2,
    description: 'No hourly billing surprises, predictable costs from day one',
  },
  {
    title: 'Full IP Ownership',
    icon: Fingerprint,
    description: 'You own everything we build, complete intellectual property rights',
  },
];

export default function DemoOne() {
	return (
		<section className="py-0">
			<div className="mx-auto w-full max-w-5xl space-y-8 px-4">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<h2 className="font-mona text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
  Built on <span className="text-[#2563eb] font-light">Four Foundational Pillars</span>
</h2>
          <p className="text-muted-foreground mt-4 text-base tracking-wide text-balance flex items-center justify-center gap-2">

            
          </p>
				</AnimatedContainer>

				{/* Four connected cards in a row, no gap */}
				<AnimatedContainer
					delay={0.4}
					className="grid grid-cols-1 md:grid-cols-4 border border-dashed rounded-lg overflow-hidden"
				>
					{features.slice(0, 4).map((feature, i) => (
						<FeatureCard key={i} feature={feature} className="border-0 rounded-none" />
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function LiveCounter({ start }: { start: number }) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let frame: number;
    let current = 0;
    const step = () => {
      if (current < start) {
        current += Math.ceil((start - current) / 10);
        if (current > start) current = start;
        setCount(current);
        frame = requestAnimationFrame(step);
      } else {
        setCount(start);
      }
    };
    step();
    return () => cancelAnimationFrame(frame);
  }, [start]);
  return <span className="text-cyan-600 font-mono tabular-nums text-xl md:text-2xl font-bold">{count}</span>;
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <>{children}</>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
