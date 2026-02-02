import { BrutalCard } from "@/components/ui/BrutalCard";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Smart Contract Development",
      color: "bg-accent",
      textColor: "text-accent-foreground",
      skills: ["Solidity", "Hardhat", "Foundry", "Ethereum", "ERC Standards", "DeFi Protocols"],
    },
    {
      title: "Backend Development",
      color: "bg-secondary",
      textColor: "text-secondary-foreground",
      skills: ["Node.js", "Express", "MySQL", "MongoDB", "Python", "Django", "REST APIs"],
    },
    {
      title: "Web App Development",
      color: "bg-primary",
      textColor: "text-primary-foreground",
      skills: ["React", "Next.js", "Vue", "Angular", "Tailwind CSS", "Vite", "TypeScript"],
    },
    {
      title: "Mobile App Development",
      color: "bg-foreground",
      textColor: "text-background",
      skills: ["React Native", "Material UI", "Chakra UI", "Expo", "Cross-Platform", "Native APIs"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 border-b-[3px] border-foreground bg-muted">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <span className="inline-block bg-foreground text-background px-4 py-2 font-heading font-bold text-sm uppercase tracking-wider mb-6">
            Skills & Tools
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] tracking-tight">
            WHAT I <span className="bg-primary px-2">WORK</span> WITH
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <BrutalCard
              key={index}
              shadow="lg"
              hover="lift"
              className="p-0 overflow-hidden cursor-default"
            >
              {/* Category Header */}
              <div className={`${category.color} ${category.textColor} px-6 py-4 border-b-[3px] border-foreground`}>
                <h3 className="font-heading font-bold text-xl uppercase tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="p-6 bg-card">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block border-[2px] border-foreground bg-background px-3 py-1 font-body text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </BrutalCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
