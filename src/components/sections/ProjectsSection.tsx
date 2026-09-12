import { useState } from "react";
import { IconArrowUpRight, IconCircleCheck } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectItem {
  id: string;
  index: string;
  tabLabel: string;
  title: string;
  category: string;
  liveUrl?: string;
  problem: string;
  approach: string;
  outcome: string;
  tags: string[];
  highlights: string[];
  theme: {
    bg: string;
    text: string;
    mutedText: string;
    tagBg: string;
    tagText: string;
    accent: string;
  };
}

const projects: ProjectItem[] = [
  {
    id: "custos",
    index: "01",
    tabLabel: "CustosDiretriz",
    title: "CUSTOSDIRETRIZ",
    category: "Web App · Blockchain Verification",
    liveUrl: "https://www.custosdiretriz.com/",
    problem:
      "Enterprise and legal teams struggled with cumbersome, slow, and tamper-prone paper pipelines when generating and verifying critical legal agreements.",
    approach:
      "Architected a reactive Next.js & Vite client with intuitive multi-step contract builders, supported by a Python Django API and MySQL state machine for instant cryptographic verification.",
    outcome:
      "Live in commercial production. Replaces manual notarization cycles with instant, tamper-proof blockchain timestamps and verifiable digital signatures.",
    tags: ["Next.js", "Vite", "Python", "Django", "MySQL", "Smart Contracts"],
    highlights: ["Live in Production", "Blockchain Timestamping", "Document Templating"],
    theme: {
      bg: "bg-[#C46D4B]", // Warm terracotta clay
      text: "text-[#FDFBF7]",
      mutedText: "text-[#FDFBF7]/80",
      tagBg: "bg-[#A75434]",
      tagText: "text-[#FDFBF7]",
      accent: "#FDFBF7",
    },
  },
  {
    id: "swiftconnect",
    index: "02",
    tabLabel: "SwiftConnect",
    title: "SWIFTCONNECT",
    category: "Full-Stack · Fintech Dashboard",
    liveUrl: "https://swiftconnect-frontend.vercel.app/dashboard",
    problem:
      "End users faced fragmented account balances, high-latency settlement status, and disjointed financial analytics across multi-account transfers.",
    approach:
      "Engineered an ultra-responsive Next.js & Tailwind dashboard coupled with a low-latency Python Django REST framework backend and clustered MySQL transactions.",
    outcome:
      "Real-time financial analytics dashboard with zero-latency ledger updates, instant transaction audit trails, and intuitive balance charting.",
    tags: ["Next.js", "TypeScript", "Python", "Django", "MySQL", "Tailwind CSS"],
    highlights: ["Interactive Dashboard", "Real-time Metrics", "Granular Audit Logs"],
    theme: {
      bg: "bg-[#281D19]", // Deep espresso
      text: "text-[#F4F1EA]",
      mutedText: "text-[#F4F1EA]/80",
      tagBg: "bg-[#3D2C26]",
      tagText: "text-[#E6B198]",
      accent: "#E6B198",
    },
  },
  {
    id: "moviebox",
    index: "03",
    tabLabel: "MovieBox",
    title: "MOVIEBOX",
    category: "Client-Side SPA · Media Discovery",
    liveUrl: "https://movie-box-nine-gamma.vercel.app/",
    problem:
      "Users needed a zero-friction discovery engine to search, bookmark, and inspect media details without bloated page loads or laggy filtering.",
    approach:
      "Crafted an asynchronous React.js SPA utilizing TMDB REST APIs, debounced search pipelines, and fluid Framer Motion micro-interactions.",
    outcome:
      "High-speed movie exploration portal featuring debounced multi-field searches, detailed rating breakdowns, and instant related-title recommendations.",
    tags: ["React.js", "Tailwind CSS", "TMDB API", "Framer Motion", "SPA"],
    highlights: ["Debounced Search", "TMDB Integration", "Dynamic Recommendations"],
    theme: {
      bg: "bg-[#546857]", // Muted sage / forest stone
      text: "text-[#F7F5F0]",
      mutedText: "text-[#F7F5F0]/80",
      tagBg: "bg-[#415344]",
      tagText: "text-[#D8E6DA]",
      accent: "#D8E6DA",
    },
  },
  {
    id: "erc20",
    index: "04",
    tabLabel: "ERC-20 Protocol",
    title: "CUSTOM ERC-20 TOKEN",
    category: "Smart Contract · Web3 Protocol",
    problem:
      "Requirement for a secure, gas-efficient ERC-20 smart contract token with custom allowance mechanisms and deterministic minting controls.",
    approach:
      "Implemented standard-compliant Solidity contracts, authored 100% test coverage using Hardhat and Foundry, and conducted static security analysis with Slither.",
    outcome:
      "Fully audited, deployed, and verified token on Ethereum testnet with gas-optimized execution loops and zero security vulnerabilities.",
    tags: ["Solidity", "Hardhat", "Foundry", "Ethereum", "Slither", "Testing"],
    highlights: ["100% Test Coverage", "Gas-Optimized", "Slither Audited"],
    theme: {
      bg: "bg-[#353839]", // Onyx slate
      text: "text-[#F7F5F0]",
      mutedText: "text-[#F7F5F0]/80",
      tagBg: "bg-[#252829]",
      tagText: "text-[#E0E2E2]",
      accent: "#E0E2E2",
    },
  },
];

export const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7C5A48] font-semibold block mb-2">
            Selected Work / 03
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#281D19]">
            Engineered Systems.
          </h2>
          <p className="text-sm sm:text-base text-[#281D19]/70 mt-3 max-w-xl">
            Production case studies in full-stack architecture, Web3 protocols, and high-performance client applications.
          </p>
        </div>

        {/* Staggered Index-Card Organizer Deck (Inspired by Image 1) */}
        <div className="relative w-full min-h-0 sm:min-h-[540px] flex">
          {/* Main Card Body */}
          <div className="w-full md:w-[calc(100%-88px)] relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 12, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.99 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`${activeProject.theme.bg} ${activeProject.theme.text} rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 flex flex-col justify-between select-none min-h-0 sm:min-h-[540px]`}>
                {/* Top Meta Row */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6">
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="bg-black/20 px-3 py-1 rounded-full font-bold">
                        {activeProject.index} / 04
                      </span>
                      <span className="tracking-wide uppercase font-semibold">
                        {activeProject.category}
                      </span>
                    </div>

                    {activeProject.liveUrl && (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="self-start sm:self-auto inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors text-xs font-semibold px-4 py-2 rounded-full"
                      >
                        <span>Live Platform</span>
                        <IconArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-8">
                    {activeProject.title}
                  </h3>

                  {/* 3-Part Architecture Breakdown */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
                    {/* Problem */}
                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-widest font-mono opacity-60">
                        Problem
                      </span>
                      <p className={`text-sm leading-relaxed ${activeProject.theme.mutedText}`}>
                        {activeProject.problem}
                      </p>
                    </div>

                    {/* Approach */}
                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-widest font-mono opacity-60">
                        Approach
                      </span>
                      <p className={`text-sm leading-relaxed ${activeProject.theme.mutedText}`}>
                        {activeProject.approach}
                      </p>
                    </div>

                    {/* Outcome */}
                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-widest font-mono opacity-60">
                        Outcome
                      </span>
                      <p className={`text-sm leading-relaxed ${activeProject.theme.mutedText}`}>
                        {activeProject.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Tags & Highlights */}
                <div className="pt-10 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`${activeProject.theme.tagBg} ${activeProject.theme.tagText} px-3 py-1 rounded-xl text-xs font-mono font-medium`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Production Highlights */}
                  <div className="flex items-center gap-4 text-xs font-mono opacity-80 shrink-0">
                    {activeProject.highlights.map((h) => (
                      <span key={h} className="hidden sm:inline-flex items-center gap-1.5">
                        <IconCircleCheck className="w-3.5 h-3.5" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Staggered Vertical Index Tabs on Right Edge (Desktop / Tablet) */}
          <div className="hidden md:flex flex-col absolute top-0 right-0 w-[96px] h-full z-10 select-none">
            {projects.map((proj, idx) => {
              const isActive = activeIndex === idx;
              // Staggered top spacing
              const topOffset = idx * 130 + 18;

              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveIndex(idx)}
                  style={{ top: `${topOffset}px` }}
                  className={`absolute right-0 w-24 h-28 rounded-r-3xl pl-3 pr-2 py-3 flex flex-col justify-between text-left transition-all duration-300 ${
                    proj.theme.bg
                  } ${proj.theme.text} ${
                    isActive
                      ? "translate-x-3 scale-[1.03] z-30 font-bold"
                      : "translate-x-0 opacity-80 hover:opacity-100 hover:translate-x-1.5 z-10"
                  }`}
                  aria-label={`Switch to project ${proj.tabLabel}`}
                >
                  <span className="text-xs font-mono font-bold">
                    {proj.index}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider font-semibold leading-tight line-clamp-2">
                    {proj.tabLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Tab Selector (Visible below md) */}
        <div className="grid grid-cols-2 md:hidden gap-2.5 mt-6 select-none">
          {projects.map((proj, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-3.5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-between ${
                  proj.theme.bg
                } ${proj.theme.text} ${
                  isActive ? "scale-[1.02] opacity-100 font-extrabold" : "opacity-60 hover:opacity-85"
                }`}
              >
                <span className="truncate">{proj.index} · {proj.tabLabel}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0 ml-1.5" />}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
