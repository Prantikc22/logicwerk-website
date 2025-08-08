"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Our previous IT vendor quoted 12 months for our cloud migration. Logicwerk’s SmartCloud Pack got us live in just 5 weeks—and for 40% less than the old estimate.",
    by: "CTO, Fintech Startup",
    imgSrc: "/headshots/man1.webp"
  },
  {
    tempId: 1,
    testimonial: "We burned through half our budget with a legacy provider and had nothing to show after 6 months. Logicwerk’s weekly sprints delivered working features every Friday. I finally felt in control.",
    by: "VP Engineering, E-commerce",
    imgSrc: "/headshots/man2.webp"
  },
  {
    tempId: 2,
    testimonial: "Our SAP upgrade with a traditional firm was a nightmare—missed deadlines, endless change orders. Logicwerk’s Enterprise Engine team finished the job in 4 sprints, no surprises.",
    by: "IT Director, Manufacturing",
    imgSrc: "/headshots/man3.webp"
  },
  {
    tempId: 3,
    testimonial: "We used to wait months for analytics dashboards. With Analytics Pulse, we had actionable BI in 3 weeks. The fixed price meant no more invoice shocks.",
    by: "Head of Data, Healthcare",
    imgSrc: "/headshots/man4.webp"
  },
  {
    tempId: 4,
    testimonial: "Every IT project used to spiral out of scope. Logicwerk’s AI PowerPack kept us on track, and we launched our chatbot in 2 sprints. Communication was night and day compared to our last vendor.",
    by: "Chief Digital Officer, Insurance",
    imgSrc: "/headshots/man5.webp"
  },
  {
    tempId: 5,
    testimonial: "Legacy firms threw huge teams at simple problems. Logicwerk’s lean crew delivered our IoT backend in 4 weeks—just three people, all experts. We saved over $60k.",
    by: "VP Product, Smart Devices",
    imgSrc: "/headshots/man6.webp"
  },
  {
    tempId: 6,
    testimonial: "We’d been burned by scope creep and endless status meetings. Logicwerk’s weekly sprint check-ins and fixed pricing made everything predictable. We’ll never go back.",
    by: "COO, SaaS Platform",
    imgSrc: "/headshots/man7.webp"
  },
  {
    tempId: 7,
    testimonial: "Our last provider took 9 months to deliver a basic web app. Logicwerk’s App & Web Blitz gave us a cross-platform MVP in 4 sprints. We hit our launch window for the first time.",
    by: "Head of Digital, Retail",
    imgSrc: "/headshots/man8.webp"
  },
  {
    tempId: 8,
    testimonial: "We used to dread change requests. With Logicwerk, every new feature was a new sprint—no drama, no hidden fees. Our exec team loved the transparency.",
    by: "COO, Logistics",
    imgSrc: "/headshots/man9.webp"
  },
  {
    tempId: 9,
    testimonial: "Our analytics vendor ran 3x over budget and missed every milestone. Logicwerk’s Analytics Pulse team delivered dashboards in 3 weeks. We finally trust our data.",
    by: "CFO, Manufacturing",
    imgSrc: "/headshots/man10.webp"
  },
  {
    tempId: 10,
    testimonial: "We wasted months on DevOps with a big consulting firm. Logicwerk’s SmartCloud Pack automated our CI/CD in just two sprints. Our developers are thrilled.",
    by: "Engineering Manager, Fintech",
    imgSrc: "/headshots/woman1.webp"
  },
  {
    tempId: 11,
    testimonial: "Our legacy IT partner billed by the hour and always ran late. Logicwerk’s fixed price per sprint made budgeting easy, and we got our RAG chatbot live in 3 weeks.",
    by: "Head of IT, Legal Services",
    imgSrc: "/headshots/woman2.webp"
  },
  {
    tempId: 12,
    testimonial: "We had 15 people on calls with our old provider. Logicwerk’s lean team of 4 delivered more, faster, and with zero drama. Our CEO is still amazed.",
    by: "VP Technology, Hospitality",
    imgSrc: "/headshots/woman3.webp"
  },
  {
    tempId: 13,
    testimonial: "Before Logicwerk, we’d spend weeks waiting for updates. Now, every Monday, we know exactly what’s shipping that week. Our board meetings are a breeze.",
    by: "COO, EdTech",
    imgSrc: "/headshots/woman4.webp"
  },
  {
    tempId: 14,
    testimonial: "We nearly abandoned our IoT project after a year of delays. Logicwerk’s IoT Ops Pack shipped a working prototype in 3 sprints. I wish we’d found them sooner.",
    by: "CTO, Manufacturing",
    imgSrc: "/headshots/woman5.webp"
  },
  {
    tempId: 15,
    testimonial: "Traditional IT firms always padded the bill. With Logicwerk, we paid exactly what was quoted—no surprises. Plus, our LLM integration went live in 2 weeks.",
    by: "Chief Product Officer, Healthtech",
    imgSrc: "/headshots/woman6.webp"
  },
  {
    tempId: 16,
    testimonial: "Our legacy vendor took 18 months for an SAP rollout that Logicwerk’s Enterprise Engine did in 6 weeks. We saved over $120k and a ton of stress.",
    by: "Director of IT, Automotive",
    imgSrc: "/headshots/woman7.webp"
  },
  {
    tempId: 17,
    testimonial: "I was skeptical of the AI/human team pitch, but Logicwerk’s sprint model kept us moving. We saw real ROI after the first month.",
    by: "VP Digital, Retail",
    imgSrc: "/headshots/woman8.webp"
  },
  {
    tempId: 18,
    testimonial: "We lost a year to scope creep with our old IT partner. Logicwerk’s weekly demos and fixed scope per sprint meant no more surprises. We’ll use them again.",
    by: "CEO, SaaS Startup",
    imgSrc: "/headshots/woman9.webp"
  },
  {
    tempId: 19,
    testimonial: "We had 3 failed attempts at digital transformation before Logicwerk. Their team delivered our new platform in 5 sprints. We’re finally ahead of the curve.",
    by: "Head of Strategy, Media",
    imgSrc: "/headshots/woman10.webp"
  }
];


interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-primary text-primary-foreground border-primary" 
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <div className="flex justify-center mb-4">
        <img
          src={testimonial.imgSrc}
          alt={`${testimonial.by.split(',')[0]}`}
          className="w-16 h-16 rounded-full object-cover border-2 border-border bg-background"
        />
      </div>
      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-primary-foreground" : "text-foreground"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleMove(1);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonialsList, isPaused]);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="w-screen max-w-none px-0 py-24 bg-muted/30 overflow-x-hidden">
      <div className="w-full text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Mona_Sans']">
          <span className="text-black dark:text-white">Real Results. Real ROI.</span> <span className="" style={{ color: '#3399FF', fontWeight: 'normal' }}>Real Impact.</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          Companies that were bleeding money until they found Logicwerk
        </p>
      </div>
      <div
        className="relative w-screen max-w-none min-h-[420px] h-[60vw] sm:h-[500px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {testimonialsList.map((testimonial, index) => {
          const position = testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-20">
          <button
            onClick={() => handleMove(-1)}
            className={cn(
              "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
              "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => handleMove(1)}
            className={cn(
              "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
              "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );

};
