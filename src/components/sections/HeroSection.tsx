import { BrutalButton } from "@/components/ui/BrutalButton";

const HeroSection = () => {
  const skills = ["MOBILE APPS", "WEB APPS", "SMART CONTRACTS"];

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden border-b-[3px] border-foreground">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-10 py-20">
        {/* Top Tag */}
        <div className="mb-8">
          <span className="inline-block bg-foreground text-background px-4 py-2 font-heading font-bold text-sm uppercase tracking-wider">
            Full-Stack Developer
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold leading-[0.9] tracking-tighter mb-8">
          I BUILD
          <br />
          <span className="inline-block bg-primary px-4 py-2 mt-2">
            {skills[0]}
          </span>
          <br />
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 mt-2">
            {skills[1]}
          </span>
          <br />
          <span className="inline-block bg-accent text-accent-foreground px-4 py-2 mt-2">
            {skills[2]}
          </span>
        </h1>

        {/* Value Statement */}
        <p className="font-body text-lg md:text-xl lg:text-2xl max-w-2xl mb-10 leading-relaxed">
          Production-ready code. Clean logic. Fast delivery.
          <br />
          <span className="font-bold">No fluff. Just execution.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a href="#projects">
            <BrutalButton size="xl" variant="default">
              View Projects
            </BrutalButton>
          </a>
          <a href="#contact">
            <BrutalButton size="xl" variant="outline">
              Let's Talk
            </BrutalButton>
          </a>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-foreground text-background py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="font-heading font-bold text-sm uppercase tracking-widest mx-8">
              MOBILE APPS • WEB APPS • SMART CONTRACTS • SOLIDITY • REACT • NODE.JS • NEXT.JS • REACT NATIVE • HARDHAT • FOUNDRY • MONGODB • PYTHON •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
