"use client";

import React, { useState } from 'react';
import Image from 'next/image';
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
import { LumeoProductDialog } from "@/components/ui/lumeo-product-dialog";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
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
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
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
// Helper for logo rendering
function ProductLogo({ product }: { product: Product }) {
  // Always use the correct logo and label beside it, never duplicated elsewhere
  let logoSrc = "/logos/Lumeo1.png";
  let productLabel = "Lumeo Suite";
  if (
    product.name === "Lumeo Procure" || product.name === "Lumeo Suites"
  ) {
    logoSrc = "/logos/lumeo-suite-logo_darkbg.png";
    productLabel = product.name;
  } else if (
    product.name === "Logicwerk Cloud & Storage" || product.name === "Lumeo Cloud"
  ) {
    logoSrc = "/logos/LumeoCloud.png";
    productLabel = "Lumeo Cloud";
  }
  return (
    <div className="flex items-center gap-2 py-2 overflow-hidden w-full">
  <Image src={logoSrc} alt={productLabel + ' Logo'} width={64} height={64} className="w-16 h-16 object-contain flex-shrink-0" loading="lazy" />
  <span className="font-garet text-xl text-white whitespace-nowrap overflow-hidden text-ellipsis tracking-tighter">
  <span className="font-normal">Lumeo </span><span className="font-bold">{productLabel.replace('Lumeo ', '')}</span>
</span>
</div>
  );
}


// Product data
interface Product {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  pricing: {
    pro?: string;
    proAI?: string;
    vps?: string;
    storage?: string;
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
    icon: (props: { className?: string }) => (
      <Image src="/logos/lumeo-suite-logo_darkbg.png" alt="Lumeo Suites Logo" width={48} height={48} className={props.className || "w-12 h-12"} loading="lazy" />
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
      pro: "$19",
      proAI: "$49"
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
      <Image src="/logos/lumeo-suite-logo_darkbg.png" alt="Lumeo Procure Logo" width={48} height={48} className={props.className || "w-12 h-12"} loading="lazy" />
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
      pro: "$15",
      proAI: "$35"
    },
    category: 'invoicing',
    gradient: "from-green-500 to-emerald-600",
    rating: 4.8,
    users: "25K+"
  },
  {
    id: 3,
    name: "Lumeo Cloud",
    description: "Cloud hosting and storage platform with blazing fast VPS and secure object storage.",
    icon: (props: { className?: string }) => (
      <Image src="/logos/LumeoCloud.png" alt="Lumeo Cloud Logo" width={64} height={64} className={props.className || "w-16 h-16"} loading="lazy" />
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
      vps: "$4 VPS",
      storage: "$3 Storage"
    },
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
      {icons.map(({ Icon, delay }, index) => {
        // Hydration-safe: deterministic SSR, random only after mount
        const [[initialX, initialY], setInitial] = React.useState(() => [50 + index * 40, 50 + index * 40]);
        const [[animateX, animateY], setAnimate] = React.useState(() => [300 - index * 20, 300 - index * 20]);
        React.useEffect(() => {
          setInitial([Math.random() * 400, Math.random() * 400]);
          setAnimate([Math.random() * 400, Math.random() * 400]);
        }, []);
        return (
          <motion.div
            key={index}
            className="absolute"
            initial={{ 
              x: initialX,
              y: initialY,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              x: animateX,
              y: animateY,
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
        );
      })}
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
  return (
    <motion.div
      layout
      onClick={onClick}
      className={cn(
        "relative cursor-pointer rounded-none border border-white bg-[#181d24] text-white shadow-lg transition-all duration-300",
        isActive 
          ? "border-[#4FC3F7] bg-[#181d24] shadow-2xl scale-105" 
          : "border-gray-700 bg-[#181d24] hover:border-[#4FC3F7] hover:shadow-lg"
      )}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <ProductLogo product={product} />
          <div className="text-right">
            <div className="flex items-center gap-1 flex-nowrap min-w-0">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-xs text-gray-300">({product.users} users)</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          
          <p className="text-sm text-gray-300 mb-1 font-semibold">
            {product.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between pt-2">
          {(product.category === 'suite' || product.category === 'invoicing') && (
  <div>
    <span className="text-xs text-gray-300">Pro</span>
    <span className="text-lg font-bold text-[#4FC3F7] ml-1">{product.pricing.pro}</span>
    <span className="text-xs text-gray-300 mx-2">| Pro+AI</span>
    <span className="text-lg font-bold text-[#4FC3F7]">{product.pricing.proAI}</span>
  </div>
)}
{product.category === 'cloud' && (
  <div className="flex items-center gap-2">
    <span className="text-xs text-gray-300">VPS</span>
<span className="text-lg font-bold text-[#4FC3F7] ml-1">{product.pricing.vps}</span>
<span className="text-xs text-gray-400 mx-2">|</span>
<span className="text-xs text-gray-300">Storage</span>
<span className="text-lg font-bold text-[#4FC3F7] ml-1">{product.pricing.storage}</span>
  </div>
)}
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
          className="absolute inset-0 rounded-none border-2 border-[#4FC3F7]"
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
        <div className="flex items-center gap-2">
  <Image src={product.name === 'Logicwerk Cloud & Storage' || product.name === 'Lumeo Cloud' ? '/logos/LumeoCloud.png' : '/logos/lumeo-suite-logo_darkbg.png'} alt={product.name + ' Logo'} width={product.name === 'Logicwerk Cloud & Storage' || product.name === 'Lumeo Cloud' ? 64 : 48} height={product.name === 'Logicwerk Cloud & Storage' || product.name === 'Lumeo Cloud' ? 64 : 48} className={product.name === 'Logicwerk Cloud & Storage' || product.name === 'Lumeo Cloud' ? 'w-16 h-16 object-contain flex-shrink-0' : 'w-12 h-12 object-contain flex-shrink-0'} loading="lazy" />
  <span className="font-garet text-2xl text-white whitespace-nowrap tracking-tighter">
  <span className="font-normal">Lumeo </span><span className="font-bold">{product.name === 'Logicwerk Cloud & Storage' ? 'Cloud' : product.name === 'Lumeo Suites' ? 'Suite' : product.name.replace('Lumeo ', '')}</span>
</span>
</div>
        <div className="mt-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 flex-nowrap min-w-0">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-medium">{product.rating}</span>
              <span className="text-xs text-gray-300">({product.users} users)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-lg text-gray-300 leading-relaxed">
        {product.description}
      </p>

      {/* Features */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {product.features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-none bg-[#10141a]"
            >
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">Pricing Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#181d24] border border-[#4FC3F7] p-8 flex flex-col gap-6">
            {product.category === 'suite' && (
              <div className="flex flex-col gap-2">
                <div className="p-4 rounded-md border border-primary/50 bg-primary/5">
                  <h4 className="font-semibold">Pro</h4>
                  <div className="text-2xl font-bold text-[#4FC3F7]">{product.pricing.pro}</div>
                  <p className="text-sm text-muted-foreground">For teams and SMBs</p>
                </div>
              </div>
            )}
            {product.category === 'invoicing' && (
              <div className="flex flex-col gap-2">
                <div className="p-4 rounded-md border border-primary/50 bg-primary/5">
                  <h4 className="font-semibold">Pro</h4>
                  <div className="text-2xl font-bold text-[#4FC3F7]">{product.pricing.pro}</div>
                  <p className="text-sm text-muted-foreground">For procurement teams</p>
                </div>
              </div>
            )}
            {product.category === 'cloud' && (
              <div className="flex flex-col gap-2">
                <div className="p-4 rounded-md border border-primary/50 bg-primary/5">
                  <h4 className="font-semibold">VPS</h4>
                  <div className="text-2xl font-bold text-[#4FC3F7]">{product.pricing.vps}</div>
                  <p className="text-sm text-muted-foreground">Blazing fast compute</p>
                </div>
              </div>
            )}
          </div>
          <div className="bg-[#181d24] border border-[#4FC3F7] p-8 flex flex-col gap-6">
            {product.category === 'suite' && (
              <div className="flex flex-col gap-2">
                <div className="p-4 rounded-md border border-primary/50 bg-primary/5">
                  <h4 className="font-semibold">Pro+AI</h4>
                  <div className="text-2xl font-bold text-[#4FC3F7]">{product.pricing.proAI}</div>
                  <p className="text-sm text-muted-foreground">AI-powered automation</p>
                </div>
              </div>
            )}
            {product.category === 'invoicing' && (
              <div className="flex flex-col gap-2">
                <div className="p-4 rounded-md border border-primary/50 bg-primary/5">
                  <h4 className="font-semibold">Pro+AI</h4>
                  <div className="text-2xl font-bold text-[#4FC3F7]">{product.pricing.proAI}</div>
                  <p className="text-sm text-muted-foreground">AI-powered workflows</p>
                </div>
              </div>
            )}
            {product.category === 'cloud' && (
              <div className="flex flex-col gap-2">
                <div className="p-4 rounded-md border border-primary/50 bg-primary/5">
                  <h4 className="font-semibold">Storage</h4>
                  <div className="text-2xl font-bold text-[#4FC3F7]">{product.pricing.storage}</div>
                  <p className="text-sm text-muted-foreground">Secure object storage</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        {/* Only show Start Free Trial for Suites and Invoicing */}
        {product.category !== 'cloud' && (
          <Button size="lg" className="flex-1 bg-[#4FC3F7] text-black font-bold border-none hover:bg-white hover:text-[#0073e6] transition-colors duration-200">
  Subscribe Now
</Button>
        )}
        <LumeoProductDialog
  title={product.name === 'Logicwerk Cloud & Storage' ? 'Lumeo Cloud' : product.name}
  description={product.description}
  features={product.features}
  accentColor={product.category === 'suite' ? '#2563eb' : product.category === 'invoicing' ? '#06b6d4' : '#4FC3F7'}
  triggerLabel="View Details"
  triggerClassName="flex-1 bg-transparent border-white text-white hover:bg-[#232b39] hover:text-[#4FC3F7] transition-colors duration-200 rounded-md font-bold py-3 px-6 text-lg border-2 size-lg"
/>
      </div>
    </motion.div>
  );
};

// Main component
const LumeoProductsSection: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<Product>(products[0]);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-black text-gray-100">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <FloatingIcons />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-mona-sans font-bold mb-4" style={{ fontSize: '48px', lineHeight: '1.1' }}>
  <span className="text-white">Lumeo Products</span>
  <span className="text-[#4FC3F7] font-normal ml-4">Built for Growth</span>
</h1>
<p className="font-mona-sans text-white max-w-3xl mx-auto font-normal" style={{ fontSize: '18px', lineHeight: '1.5' }}>
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


      </div>
    </section>
  );
};

export default LumeoProductsSection;
