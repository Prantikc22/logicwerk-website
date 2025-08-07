"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, 
  FileText, 
  Cloud, 
  Users, 
  BarChart3, 
  Calendar,
  Database,
  Shield,
  Zap,
  ArrowRight,
  Check,
  Star
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm shadow-black/5 hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm shadow-black/5 hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-10 rounded-lg px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

// Product data
interface Product {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  pricing: {
    starter: string;
    professional: string;
  };
  category: 'suite' | 'invoicing' | 'cloud';
  gradient: string;
  rating: number;
  users: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Lumeo Suites",
    description: "Complete business management solution combining ERP, CRM, and Work Management in one powerful platform.",
    // Use custom SVG if present, else fallback to icon
    icon: (props: { className?: string }) => (
      <img src="/lumeo-suites.svg" alt="Lumeo Suites Logo" className={props.className || "w-6 h-6"} onError={(e) => { (e.target as HTMLImageElement).style.display='none'; }} />
    ),
    features: [
      "Integrated ERP System",
      "Advanced CRM Tools", 
      "Project Management",
      "Team Collaboration",
      "Real-time Analytics",
      "Custom Workflows"
    ],
    pricing: {
      starter: "$19/month",
      professional: "$49/month"
    },
    category: 'suite',
    gradient: "from-blue-500 to-purple-600",
    rating: 4.9,
    users: "10K+"
  },
  {
    id: 2,
    name: "Lumeo Procure",
    description: "Modern procurement and billing platform for streamlined purchasing, vendor management, and automated invoicing.",
    icon: (props: { className?: string }) => (
      <img src="/lumeo-procure.svg" alt="Lumeo Procure Logo" className={props.className || "w-6 h-6"} onError={(e) => { (e.target as HTMLImageElement).style.display='none'; }} />
    ),
    features: [
      "Smart Invoice Generation",
      "Payment Processing",
      "Expense Tracking",
      "Tax Calculations",
      "Client Portal",
      "Multi-currency Support"
    ],
    pricing: {
      starter: "$10/month",
      professional: "$29/month"
    },
    category: 'invoicing',
    gradient: "from-green-500 to-emerald-600",
    rating: 4.8,
    users: "25K+"
  },
  {
    id: 3,
    name: "Logicwerk Cloud & Storage",
    description: "Secure cloud infrastructure and storage solutions with enterprise-grade security and scalability.",
    icon: (props: { className?: string }) => (
      <img src="/lumeo-cloud.svg" alt="Logicwerk Cloud Logo" className={props.className || "w-6 h-6"} onError={(e) => { (e.target as HTMLImageElement).style.display='none'; }} />
    ),
    features: [
      "Unlimited Cloud Storage",
      "Advanced Security",
      "Auto Backup & Sync",
      "Team Collaboration",
      "API Integration",
      "24/7 Support"
    ],
    pricing: {
      starter: "$5/month",
      professional: "$19/month"
    },
    features: [
      "Unlimited Cloud Storage",
      "Advanced Security",
      "Auto Backup & Sync",
      "Team Collaboration",
      "API Integration",
      "24/7 Support",
      "Powered by Green Energy"
    ],
    category: 'cloud',
    gradient: "from-cyan-500 to-blue-600",
    rating: 4.7,
    users: "50K+"
  }
];

// Floating icons component
const FloatingIcons = () => {
  const icons = [
    { Icon: Users, delay: 0 },
    { Icon: Database, delay: 0.5 },
    { Icon: Shield, delay: 1 },
    { Icon: Calendar, delay: 1.5 },
    { Icon: Zap, delay: 2 },
    { Icon: Server, delay: 2.5 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ 
            x: Math.random() * 400,
            y: Math.random() * 400,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: Math.random() * 400,
            y: Math.random() * 400,
            opacity: [0, 0.3, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <Icon className="w-8 h-8 text-muted-foreground/30" />
        </motion.div>
      ))}
    </div>
  );
};

// Product card component
interface ProductCardProps {
  product: Product;
  isActive: boolean;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isActive, onClick }) => {
  const IconComponent = product.icon;

  return (
    <motion.div
      layout
      onClick={onClick}
      className={cn(
        "relative cursor-pointer rounded-2xl border transition-all duration-300",
        isActive 
          ? "border-primary/50 bg-card shadow-2xl scale-105" 
          : "border-border/50 bg-card/50 hover:border-primary/30 hover:shadow-lg"
      )}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className={cn(
            "p-3 rounded-xl bg-gradient-to-r",
            product.gradient
          )}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
            <div className="text-xs text-muted-foreground">{product.users} users</div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <div className="text-xs text-muted-foreground">Starting at</div>
            <div className="text-lg font-bold text-primary">{product.pricing.starter}</div>
          </div>
          <ArrowRight className={cn(
            "w-5 h-5 transition-transform duration-300",
            isActive ? "translate-x-1" : ""
          )} />
        </div>
      </div>

      {/* Active indicator */}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute inset-0 rounded-2xl border-2 border-primary/50"
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.div>
  );
};

// Product details component
interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const IconComponent = product.icon;

  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className={cn(
          "p-4 rounded-2xl bg-gradient-to-r",
          product.gradient
        )}>
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-medium">{product.rating}</span>
              <span className="text-muted-foreground">({product.users} users)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-lg text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Features */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {product.features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
            >
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Pricing Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-border bg-card">
            <div className="space-y-2">
              <h4 className="font-semibold">Starter</h4>
              <div className="text-2xl font-bold text-primary">{product.pricing.starter}</div>
              <p className="text-sm text-muted-foreground">Perfect for small teams</p>
            </div>
          </div>
          <div className="p-4 rounded-xl border border-primary/50 bg-primary/5">
            <div className="space-y-2">
              <h4 className="font-semibold">Professional</h4>
              <div className="text-2xl font-bold text-primary">{product.pricing.professional}</div>
              <p className="text-sm text-muted-foreground">For growing businesses</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        {/* Only show Start Free Trial for Suites and Invoicing */}
        {product.category !== 'cloud' && (
          <Button size="lg" className="flex-1">
            Start Free Trial
          </Button>
        )}
        <Button variant="outline" size="lg" className="flex-1">
          View Details
        </Button>
      </div>
    </motion.div>
  );
};

// Main component
const LumeoProductsSection: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<Product>(products[0]);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      <FloatingIcons />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Lumeo Products
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Built for Growth
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No user based pricing. Simplicity at the core. Quality at the heart.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Product Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {products.map((product, idx) => (
              <div key={product.id} className={idx !== products.length - 1 ? "border-b border-border" : ""}>
                <ProductCard
                  product={product}
                  isActive={activeProduct.id === product.id}
                  onClick={() => setActiveProduct(product)}
                />
              </div>
            ))}
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="sticky top-8">
              <AnimatePresence mode="wait">
                <ProductDetails product={activeProduct} />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA removed as per user request */}
      </div>
    </section>
  );
};

export default LumeoProductsSection;
