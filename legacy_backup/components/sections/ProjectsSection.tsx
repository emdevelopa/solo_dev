import { useState } from "react";
import { BrutalButton } from "@/components/ui/BrutalButton";
import { ExternalLink, Github, Code, CheckCircle, Sparkles, Layers, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

interface Project {
  title: string;
  category: "Web App" | "Smart Contract" | "Full-Stack";
  typeKey: "web" | "contract" | "fullstack";
  color: string;
  badgeColor: string;
  problem: string;
  approach: string;
  outcome: string;
  tags: string[];
  url?: string;
  github?: string;
  highlights: string[];
}

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "CUSTOSDIRETRIZ",
      category: "Web App",
      typeKey: "web",
      color: "bg-accent text-accent-foreground",
      badgeColor: "bg-accent",
      problem: "Legal and enterprise professionals needed a tamper-proof, high-speed platform for generating and validating blockchain-based legal agreements.",
      approach: "Built a responsive frontend using Next.js and Vite with interactive contract wizards, backed by a robust Python Django API and MySQL database for state validation.",
      outcome: "Live commercial production platform streamlining legal workflows with instant blockchain verification and verifiable cryptographic signatures.",
      tags: ["Next.js", "Vite", "Python", "Django", "MySQL", "Smart Contracts"],
      url: "https://www.custosdiretriz.com/",
      highlights: ["Live in Production", "Blockchain Timestamping", "Document Templating Engine"],
    },
    {
      title: "SWIFTCONNECT",
      category: "Full-Stack",
      typeKey: "fullstack",
      color: "bg-foreground text-background",
      badgeColor: "bg-foreground",
      problem: "End users struggled with complex financial dashboards and slow transaction settlement trackers across fragmented accounts.",
      approach: "Engineered an intuitive interface with Next.js and Tailwind, paired with a low-latency Python Django REST framework backend and MySQL database cluster.",
      outcome: "High-performance financial web app with real-time balance metrics, instant transaction audits, and rich responsive data charts.",
      tags: ["Next.js", "TypeScript", "Python", "Django", "MySQL", "Tailwind CSS"],
      url: "https://swiftconnect-frontend.vercel.app/dashboard",
      highlights: ["Interactive Dashboard", "Real-time Metrics", "Granular Transaction Logs"],
    },
    {
      title: "MOVIEBOX",
      category: "Web App",
      typeKey: "web",
      color: "bg-primary text-primary-foreground",
      badgeColor: "bg-primary",
      problem: "Cinephiles needed a zero-friction discovery engine to search, bookmark, and explore movie details with fast responsiveness.",
      approach: "Developed a modern client-side React.js SPA utilizing TMDB REST APIs, debounced search filters, and smooth responsive CSS layouts.",
      outcome: "Rapid movie discovery experience featuring comprehensive movie details, rating breakdowns, and related title recommendations.",
      tags: ["React.js", "Tailwind CSS", "TMDB API", "Framer Motion", "SPA"],
      url: "https://movie-box-nine-gamma.vercel.app/",
      highlights: ["Debounced Search", "TMDB API Integration", "Dynamic Recommendations"],
    },
    {
      title: "Custom ERC-20 Token & Ecosystem",
      category: "Smart Contract",
      typeKey: "contract",
      color: "bg-secondary text-secondary-foreground",
      badgeColor: "bg-secondary",
      problem: "Requirement for a secure, gas-efficient ERC-20 smart contract token with custom allowance mechanisms and minting controls.",
      approach: "Implemented standard-compliant Solidity contracts, authored 100% test coverage using Hardhat and Foundry, and conducted static security analysis with Slither.",
      outcome: "Fully audited, deployed, and verified token on Ethereum testnet with gas-optimized execution loops.",
      tags: ["Solidity", "Hardhat", "Foundry", "Ethereum", "Testing"],
      highlights: ["100% Test Coverage", "Gas-Optimized", "Verified on Etherscan"],
    },
  ];

  const filterButtons = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "contract", label: "Smart Contracts" },
    { id: "fullstack", label: "Full-Stack" },
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter((p) => p.typeKey === filter);

  return (
    <section id="projects" className="py-20 md:py-32 border-b-[3px] border-foreground bg-background relative overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1.5 font-heading font-bold text-xs uppercase tracking-wider shadow-brutal border-[2px] border-foreground">
              Featured Case Studies
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-[1.05] tracking-tight"
          >
            ENGINEERED <span className="bg-secondary text-secondary-foreground px-3 py-1 border-[3px] border-foreground shadow-brutal inline-block">SYSTEMS</span>
          </motion.h2>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {filterButtons.map((btn) => (
            <motion.button
              key={btn.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(btn.id)}
              className={`font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-4 py-2 border-[3px] border-foreground shadow-brutal transition-colors ${
                filter === btn.id
                  ? "bg-foreground text-background font-black"
                  : "bg-card text-foreground hover:bg-card/70"
              }`}
            >
              {btn.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 26, delay: index * 0.05 }}
                whileHover={{ y: -6, x: -4 }}
                className="border-[3px] border-foreground bg-card shadow-brutal-xl overflow-hidden flex flex-col justify-between group"
              >
                {/* Project Header */}
                <div>
                  <div className={`${project.color} px-6 py-4 border-b-[3px] border-foreground flex items-center justify-between`}>
                    <div>
                      <span className="font-body text-xs uppercase tracking-widest font-semibold opacity-90 block">
                        {project.category}
                      </span>
                      <h3 className="font-heading font-black text-2xl md:text-3xl mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                    <span className="p-2 border-[2px] border-foreground bg-background text-foreground shadow-brutal">
                      <Code className="w-5 h-5 stroke-[2.5]" />
                    </span>
                  </div>

                  {/* Highlights Bar */}
                  <div className="bg-muted px-6 py-2 border-b-[2px] border-foreground flex flex-wrap gap-2 text-xs font-mono">
                    {project.highlights.map((h, i) => (
                      <span key={i} className="inline-flex items-center gap-1 font-semibold text-foreground">
                        <Sparkles className="w-3 h-3 text-primary" />
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Project Content Breakdown */}
                  <div className="p-6 space-y-4 bg-card">
                    <div>
                      <span className="font-heading font-bold text-xs uppercase tracking-wider text-muted-foreground block mb-1">
                        The Challenge:
                      </span>
                      <p className="font-body text-sm text-foreground/90 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <span className="font-heading font-bold text-xs uppercase tracking-wider text-muted-foreground block mb-1">
                        Technical Execution:
                      </span>
                      <p className="font-body text-sm text-foreground/90 leading-relaxed">
                        {project.approach}
                      </p>
                    </div>

                    <div>
                      <span className="font-heading font-bold text-xs uppercase tracking-wider text-muted-foreground block mb-1">
                        Outcome:
                      </span>
                      <p className="font-body text-sm font-semibold text-foreground leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block border-[2px] border-foreground bg-background px-2.5 py-1 font-body text-xs font-bold shadow-brutal"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Footer CTA */}
                <div className="px-6 py-4 bg-muted/70 border-t-[3px] border-foreground flex items-center justify-between gap-4">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <BrutalButton size="default" variant="default" className="w-full gap-2">
                        <span>Live Preview</span>
                        <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                      </BrutalButton>
                    </a>
                  ) : (
                    <div className="w-full text-center py-2 font-heading font-bold text-xs uppercase text-muted-foreground bg-card border-[2px] border-foreground shadow-brutal">
                      Smart Contract Verified
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
