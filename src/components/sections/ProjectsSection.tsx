import { BrutalCard } from "@/components/ui/BrutalCard";
import { BrutalButton } from "@/components/ui/BrutalButton";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "DeFi Staking Platform",
      category: "Smart Contract",
      color: "bg-accent",
      problem: "Users needed a secure way to stake tokens and earn yields",
      approach: "Built audited Solidity contracts with Hardhat, integrated with React frontend",
      outcome: "Processed $2M+ in transactions with zero security incidents",
      tags: ["Solidity", "Hardhat", "React", "Ethers.js"],
    },
    {
      title: "E-Commerce Mobile App",
      category: "Mobile App",
      color: "bg-foreground",
      problem: "Retail business needed cross-platform mobile presence",
      approach: "React Native with Material UI, integrated payments and real-time inventory",
      outcome: "50K+ downloads, 4.8 star rating, 30% increase in sales",
      tags: ["React Native", "Material UI", "Stripe", "Firebase"],
    },
    {
      title: "SaaS Dashboard",
      category: "Web App",
      color: "bg-primary",
      problem: "Analytics company needed a powerful data visualization platform",
      approach: "Next.js with TypeScript, custom charting, real-time data streaming",
      outcome: "Reduced load times by 60%, improved user retention by 40%",
      tags: ["Next.js", "TypeScript", "Tailwind", "D3.js"],
    },
    {
      title: "NFT Marketplace",
      category: "Smart Contract",
      color: "bg-secondary",
      problem: "Artists needed a platform to mint and sell digital artwork",
      approach: "ERC-721 contracts with Foundry, lazy minting, gasless transactions",
      outcome: "10K+ NFTs minted, featured in major crypto publications",
      tags: ["Foundry", "Solidity", "IPFS", "Vue"],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 border-b-[3px] border-foreground">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <span className="inline-block bg-primary px-4 py-2 font-heading font-bold text-sm uppercase tracking-wider mb-6">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] tracking-tight">
            CASE <span className="bg-secondary text-secondary-foreground px-2">STUDIES</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <BrutalCard
              key={index}
              shadow="xl"
              hover="lift"
              className="p-0 overflow-hidden"
            >
              {/* Project Header */}
              <div className={`${project.color} ${project.color === 'bg-foreground' ? 'text-background' : project.color === 'bg-secondary' ? 'text-secondary-foreground' : 'text-primary-foreground'} px-6 py-4 border-b-[3px] border-foreground`}>
                <span className="font-body text-xs uppercase tracking-widest opacity-80">
                  {project.category}
                </span>
                <h3 className="font-heading font-bold text-2xl mt-1">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-6 bg-card space-y-4">
                <div>
                  <span className="font-heading font-bold text-sm uppercase tracking-wide">Problem:</span>
                  <p className="font-body text-muted-foreground mt-1">{project.problem}</p>
                </div>
                <div>
                  <span className="font-heading font-bold text-sm uppercase tracking-wide">Approach:</span>
                  <p className="font-body text-muted-foreground mt-1">{project.approach}</p>
                </div>
                <div>
                  <span className="font-heading font-bold text-sm uppercase tracking-wide">Outcome:</span>
                  <p className="font-body font-medium mt-1">{project.outcome}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block border-[2px] border-foreground bg-muted px-2 py-0.5 font-body text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Footer */}
              <div className="px-6 py-4 bg-muted border-t-[3px] border-foreground">
                <BrutalButton size="sm" variant="outline" className="w-full">
                  View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                </BrutalButton>
              </div>
            </BrutalCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
