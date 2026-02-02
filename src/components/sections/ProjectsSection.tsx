import { BrutalCard } from "@/components/ui/BrutalCard";
import { BrutalButton } from "@/components/ui/BrutalButton";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "CUSTOSDIRETRIZ",
      category: "Web App",
      color: "bg-accent",
      problem: "Legal professionals needed a secure platform for creating blockchain-based agreements",
      approach: "Built the frontend with Next.js and Vite, integrated with Python Django backend and MySQL database",
      outcome: "Live platform enabling secure, blockchain-verified legal agreements",
      tags: ["Next.js", "Vite", "Python", "Django", "MySQL"],
      url: "https://www.custosdiretriz.com/",
    },
    {
      title: "SWIFTCONNECT",
      category: "Web App",
      color: "bg-foreground",
      problem: "Users needed a modern, intuitive finance management platform",
      approach: "Developed frontend interface with Next.js and Vite, Python Django backend with MySQL",
      outcome: "Fully functional finance web app with dashboard and transaction management",
      tags: ["Next.js", "Vite", "Python", "Django", "MySQL"],
      url: "https://swiftconnect-frontend.vercel.app/dashboard",
    },
    {
      title: "MOVIEBOX",
      category: "Web App",
      color: "bg-primary",
      problem: "Movie enthusiasts needed a discovery and recommendation platform",
      approach: "Built full-stack solution with React.js frontend, Tailwind CSS styling, and TMDB API integration",
      outcome: "Complete movie discovery app with search, recommendations, and detailed movie info",
      tags: ["React.js", "Tailwind CSS", "TMDB API"],
    },
    {
      title: "Custom ERC-20 Token",
      category: "Smart Contract",
      color: "bg-secondary",
      problem: "Needed to create and deploy a custom token on the blockchain",
      approach: "Developed ERC-20 token using Solidity, wrote comprehensive test suite with Hardhat",
      outcome: "Successfully deployed token with full test coverage",
      tags: ["Solidity", "Hardhat", "Ethereum", "Testing"],
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
              {(project as any).url && (
                <div className="px-6 py-4 bg-muted border-t-[3px] border-foreground">
                  <a href={(project as any).url} target="_blank" rel="noopener noreferrer">
                    <BrutalButton size="sm" variant="outline" className="w-full">
                      View Live <ExternalLink className="ml-2 h-4 w-4" />
                    </BrutalButton>
                  </a>
                </div>
              )}
            </BrutalCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
