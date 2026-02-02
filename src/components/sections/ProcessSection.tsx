import { BrutalCard } from "@/components/ui/BrutalCard";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Research",
      description: "Understanding the problem, target users, and technical requirements",
      color: "bg-primary",
    },
    {
      number: "02",
      title: "Define",
      description: "Scoping features, setting milestones, and establishing success metrics",
      color: "bg-secondary",
    },
    {
      number: "03",
      title: "Design",
      description: "Architecture planning, UI/UX wireframes, and technical specifications",
      color: "bg-accent",
    },
    {
      number: "04",
      title: "Build",
      description: "Clean code implementation with continuous testing and documentation",
      color: "bg-foreground",
    },
    {
      number: "05",
      title: "Iterate",
      description: "Feedback integration, optimization, and continuous improvement",
      color: "bg-primary",
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32 border-b-[3px] border-foreground bg-muted">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-2 font-heading font-bold text-sm uppercase tracking-wider mb-6">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] tracking-tight">
            HOW I <span className="bg-primary px-2">WORK</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <BrutalCard
              key={index}
              shadow="default"
              hover="lift"
              className="p-0 overflow-hidden cursor-default"
            >
              {/* Step Number */}
              <div className={`${step.color} ${step.color === 'bg-foreground' ? 'text-background' : step.color === 'bg-secondary' || step.color === 'bg-accent' ? 'text-secondary-foreground' : 'text-primary-foreground'} px-4 py-6 text-center border-b-[3px] border-foreground`}>
                <span className="font-heading font-bold text-4xl md:text-5xl">
                  {step.number}
                </span>
              </div>

              {/* Step Content */}
              <div className="p-4 bg-card text-center">
                <h3 className="font-heading font-bold text-lg uppercase tracking-wide mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </BrutalCard>
          ))}
        </div>

        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block relative mt-8">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-foreground" style={{ top: '-2rem' }}>
            {steps.map((_, index) => (
              <div
                key={index}
                className="absolute w-4 h-4 bg-foreground rounded-full -translate-y-1/2"
                style={{ left: `${(index * 100) / (steps.length - 1)}%`, transform: 'translate(-50%, -50%)' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
