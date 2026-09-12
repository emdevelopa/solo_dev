import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Compass, Palette, Code2, RefreshCw, CheckCircle } from "lucide-react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const ProcessSection = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      title: "Research",
      icon: Search,
      color: "bg-primary text-primary-foreground",
      description: "Deep dive into problem space, user journeys, edge cases, and architectural constraints.",
      deliverable: "Tech Spec & Architecture",
    },
    {
      number: "02",
      title: "Define",
      icon: Compass,
      color: "bg-secondary text-secondary-foreground",
      description: "Milestone scoping, data schemas, smart contract security surface, and API contracts.",
      deliverable: "Roadmap & Schemas",
    },
    {
      number: "03",
      title: "Design",
      icon: Palette,
      color: "bg-accent text-accent-foreground",
      description: "Component hierarchies, wireframes, state management flows, and token design system.",
      deliverable: "UI Components & States",
    },
    {
      number: "04",
      title: "Build",
      icon: Code2,
      color: "bg-foreground text-background",
      description: "Test-driven implementation with automated unit/integration tests and CI/CD pipelines.",
      deliverable: "Production Release",
    },
    {
      number: "05",
      title: "Iterate",
      icon: RefreshCw,
      color: "bg-primary text-primary-foreground",
      description: "Telemetry analysis, performance audits, user feedback incorporation, and optimization.",
      deliverable: "Continuous Scalability",
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32 border-b-[3px] border-foreground bg-muted relative overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4">
            <span className="bg-accent text-accent-foreground px-4 py-1.5 font-heading font-bold text-xs uppercase tracking-wider shadow-brutal border-[2px] border-foreground">
              Execution Strategy
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-[1.05] tracking-tight"
          >
            HOW I <span className="bg-primary px-3 py-1 border-[3px] border-foreground shadow-brutal inline-block">DELIVER</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 font-body text-muted-foreground text-sm sm:text-base">
            Disciplined workflow engineered for speed, predictability, and zero regression.
          </motion.p>
        </motion.div>

        {/* Process Steps Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 relative"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredStep(index)}
              onHoverEnd={() => setHoveredStep(null)}
              className="border-[3px] border-foreground bg-card shadow-brutal-lg flex flex-col justify-between overflow-hidden transition-all"
            >
              {/* Step Header */}
              <div>
                <div className={`${step.color} px-4 py-5 text-center border-b-[3px] border-foreground relative`}>
                  <span className="font-heading font-black text-4xl md:text-5xl block">
                    {step.number}
                  </span>
                  <div className="mt-2 flex items-center justify-center">
                    <span className="p-1.5 bg-background text-foreground border-[2px] border-foreground shadow-brutal inline-block">
                      <step.icon className="w-5 h-5 stroke-[2.5]" />
                    </span>
                  </div>
                </div>

                {/* Step Body */}
                <div className="p-5 text-left">
                  <h3 className="font-heading font-bold text-lg uppercase tracking-wide mb-2 flex items-center gap-2">
                    <span>{step.title}</span>
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Step Deliverable Tag */}
              <div className="px-4 py-2.5 bg-muted border-t-[2px] border-foreground text-[11px] font-mono flex items-center gap-1.5 text-foreground font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0" />
                <span className="truncate">{step.deliverable}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
