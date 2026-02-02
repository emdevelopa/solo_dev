import { BrutalCard } from "@/components/ui/BrutalCard";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 border-b-[3px] border-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Heading */}
          <div>
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 font-heading font-bold text-sm uppercase tracking-wider mb-6">
              About
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] tracking-tight">
              DEVELOPER WHO
              <br />
              <span className="bg-primary px-2">SHIPS</span>
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <p className="font-body text-lg md:text-xl leading-relaxed">
              I'm a full-stack developer specializing in building applications that work. 
              Not just prototypes—<span className="font-bold">production-ready systems</span> that 
              scale and perform.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed">
              From blockchain smart contracts to cross-platform mobile apps and modern web 
              applications, I focus on clean architecture, maintainable code, and getting 
              things done.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "5+", label: "Years Experience" },
            { number: "3", label: "Core Domains" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <BrutalCard
              key={index}
              shadow="default"
              className="p-6 text-center bg-card"
            >
              <div className="font-heading text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="font-body text-sm md:text-base text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </BrutalCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
