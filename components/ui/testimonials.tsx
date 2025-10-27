"use client"

import React from "react"

type Testimonial = {
  quote: string
  name: string
  title: string
  company: string
  location: string
  avatar: string
  fallback: string
  logo?: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Our previous development agency burned through $85,000 over eight months and delivered essentially nothing. We were desperate. Logicwerk's weekly sprint model sounded too good to be true, but we took a chance. They delivered our first working payment integration in week one. By week six, our entire platform was live at $18,000 total cost. The transparency was incredible - Friday demos meant our team could test features immediately instead of waiting for some mythical 'milestone 3' months away. For startups that can't afford six-figure budgets and six-month timelines, Logicwerk is a lifesaver.",
    name: "David Chen",
    title: "Founder & CEO",
    company: "PayFlow Analytics",
    location: "Austin, TX",
    avatar: "/testimonials/PA.webp",
    logo: "/testimonials/PA.webp",
    fallback: "DC",
  },
  {
    quote:
      "Partnering with Logicwerk let us iterate on campaign tooling at the speed of sport. Their weekly sprint rhythm and crisp demos kept our stakeholders aligned while the craft stayed top-tier.",
    name: "John Doe",
    title: "Design Lead",
    company: "Nike",
    location: "Beaverton, OR",
    avatar: "/testimonials/nike.svg",
    logo: "/testimonials/nike.svg",
    fallback: "SM",
  },
  {
    quote:
      "In a regulated environment, clarity and velocity are rare together. Logicwerk shipped our internal platform upgrades in tight, auditable sprints—on time and without surprises.",
    name: "Jane Patel",
    title: "VP, Digital Platforms",
    company: "Pfizer",
    location: "New York, NY",
    avatar: "/testimonials/pfizer.svg",
    logo: "/testimonials/pfizer.svg",
    fallback: "RV",
  },
  {
    quote:
      "HIPAA compliance makes healthcare software development notoriously expensive and slow. We'd been quoted $150,000 and nine months for a patient portal by three different agencies. Logicwerk took time to understand our compliance requirements and proposed a fixed-price sprint approach at $32,000. I was concerned they'd cut corners on security, but they exceeded our expectations. Eight weeks later, we launched a fully compliant, secure patient portal. Our board was stunned. This is now our go-to development partner for all digital health projects.",
    name: "Dr. Emily Roberts",
    title: "Chief Technology Officer",
    company: "HealthTrack Systems",
    location: "Boston, MA",
    avatar: "/testimonials/HT.webp",
    logo: "/testimonials/HT.webp",
    fallback: "ER",
  },
  {
    quote:
      "We're a mid-sized automotive parts manufacturer that needed to digitize our supply chain management. German software houses quoted €180,000 and would take over a year. Logicwerk's team understood our manufacturing workflows immediately and delivered a custom ERP integration in 10 weeks at €38,000. The weekly sprint reviews meant our operations team could provide feedback in real-time, not six months later when it's too expensive to change. We've since brought them back for three additional projects. Best ROI we've ever gotten from a technology investment.",
    name: "Klaus Schneider",
    title: "Director of IT & Operations",
    company: "AutoTech Components GmbH",
    location: "Stuttgart, Germany",
    avatar: "/testimonials/AT.webp",
    logo: "/testimonials/AT.webp",
    fallback: "KS",
  },
]

export default function Testimonials() {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length)
    }, 7000)
    return () => clearInterval(id)
  }, [])

  const t = TESTIMONIALS[index]

  function truncateToLines(text: string, maxChars = 220) {
    if (text.length <= maxChars) return text
    const slice = text.slice(0, maxChars)
    const lastSpace = slice.lastIndexOf(" ")
    return (lastSpace > 0 ? slice.slice(0, lastSpace) : slice).trimEnd() + "…"
  }

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 space-y-3 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight md:whitespace-nowrap">
              Real Results. Real ROI. <span className="text-[#2563eb] font-normal">Real Impact.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Companies that were bleeding money until they found Logicwerk
            </p>
          </div>

          <blockquote>
            <p className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight text-left">
              {truncateToLines(t.quote)}
            </p>

            <div className="mt-10 flex items-center justify-start gap-6">
              {t.logo ? (
                <img
                  className="h-9 md:h-10 w-auto dark:invert"
                  src={t.logo}
                  alt="Client logo"
                  height={28}
                />
              ) : null}
              <div className="space-y-1 border-l pl-6 text-left">
                <cite className="font-medium not-italic">{t.name}</cite>
                <span className="text-muted-foreground block text-sm">
                  {t.title}, {t.company}
                </span>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
