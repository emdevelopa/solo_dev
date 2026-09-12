import { useState } from "react";
import { IconCheck, IconCopy } from "@tabler/icons-react";

interface SkillFile {
  name: string;
  ext: string;
  level: "Expert" | "Advanced" | "Intermediate";
  runtime: string;
  desc: string;
}

interface SkillCategory {
  id: string;
  label: string;
  folderName: string;
  itemCount: number;
  skills: SkillFile[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "web3",
    label: "Smart Contract & Web3",
    folderName: "web3_protocols",
    itemCount: 7,
    skills: [
      { name: "Solidity", ext: "sol", level: "Expert", runtime: "EVM", desc: "Gas-optimized smart contracts & DeFi architectures." },
      { name: "Hardhat", ext: "config.ts", level: "Advanced", runtime: "Node.js", desc: "Automated test harnesses & deployment scripts." },
      { name: "Foundry", ext: "toml", level: "Advanced", runtime: "Rust/EVM", desc: "Fuzz testing, invariant checks, and trace debugging." },
      { name: "Ethereum", ext: "eth", level: "Expert", runtime: "Mainnet", desc: "Consensus mechanics, RPC endpoints, and state machines." },
      { name: "ERC Standards", ext: "token.sol", level: "Expert", runtime: "ERC20/721", desc: "Custom tokens, allowance mechanics, and metadata URIs." },
      { name: "DeFi Protocols", ext: "vault.sol", level: "Advanced", runtime: "AMM/Lending", desc: "Liquidity pools, yield routers, and flash loans." },
      { name: "Ethers.js / Web3", ext: "provider.ts", level: "Advanced", runtime: "Client/RPC", desc: "Contract abstraction, wallet connect, and transaction signers." },
    ],
  },
  {
    id: "backend",
    label: "Backend & Systems",
    folderName: "backend_services",
    itemCount: 7,
    skills: [
      { name: "Node.js", ext: "runtime.js", level: "Expert", runtime: "V8 Engine", desc: "Event-driven asynchronous microservices and APIs." },
      { name: "Express", ext: "server.ts", level: "Expert", runtime: "HTTP/REST", desc: "Middleware pipelines, routing, and rate-limiting." },
      { name: "Python", ext: "core.py", level: "Advanced", runtime: "CPython 3", desc: "Data processing, script automation, and algorithms." },
      { name: "Django", ext: "models.py", level: "Advanced", runtime: "ORM / ASGI", desc: "Secure REST frameworks, admin tooling, and auth pipelines." },
      { name: "MySQL", ext: "schema.sql", level: "Advanced", runtime: "Relational", desc: "Indexed schemas, query tuning, and ACID transactions." },
      { name: "MongoDB", ext: "store.json", level: "Advanced", runtime: "Document Store", desc: "Flexible aggregations, caching, and distributed storage." },
      { name: "RESTful APIs", ext: "openapi.json", level: "Expert", runtime: "HTTP/2", desc: "Strict contract design, idempotency, and versioning." },
    ],
  },
  {
    id: "web",
    label: "Web App Development",
    folderName: "client_engineering",
    itemCount: 7,
    skills: [
      { name: "React", ext: "component.tsx", level: "Expert", runtime: "Fiber Engine", desc: "Concurrent rendering, custom hooks, and reactive UI." },
      { name: "Next.js", ext: "page.tsx", level: "Expert", runtime: "SSR / SSG", desc: "Server components, edge routing, and bundle tuning." },
      { name: "TypeScript", ext: "types.d.ts", level: "Expert", runtime: "Type Checker", desc: "Strict interfaces, generics, and compiler safety." },
      { name: "Tailwind CSS", ext: "styles.css", level: "Expert", runtime: "JIT Engine", desc: "Custom token systems, responsive design, and animations." },
      { name: "Vite", ext: "vite.config.ts", level: "Expert", runtime: "ESBuild", desc: "Lightning-fast HMR, Rollup chunking, and build tuning." },
      { name: "Framer Motion", ext: "motion.ts", level: "Advanced", runtime: "Animation", desc: "Physics spring animations, transitions, and layout orchestration." },
      { name: "Vue.js", ext: "app.vue", level: "Intermediate", runtime: "SFC", desc: "Reactive data models and component architecture." },
    ],
  },
  {
    id: "mobile",
    label: "Mobile App Development",
    folderName: "mobile_systems",
    itemCount: 6,
    skills: [
      { name: "React Native", ext: "native.tsx", level: "Expert", runtime: "Hermes", desc: "Cross-platform mobile apps for iOS and Android." },
      { name: "Expo", ext: "app.json", level: "Advanced", runtime: "EAS Pipeline", desc: "Managed workflows, OTA updates, and native build matrix." },
      { name: "Cross-Platform UI", ext: "layout.tsx", level: "Expert", runtime: "Flexbox", desc: "Native touch gestures, safe area handling, and haptics." },
      { name: "State Management", ext: "store.ts", level: "Expert", runtime: "Zustand/Redux", desc: "Predictable offline persistence and sync engines." },
      { name: "Mobile CI/CD", ext: "deploy.yml", level: "Advanced", runtime: "Fastlane", desc: "Automated test flights, app store submissions, and signing." },
      { name: "Native Modules", ext: "bridge.m", level: "Intermediate", runtime: "Objective-C/Java", desc: "Platform bridges and native hardware access." },
    ],
  },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("web3");
  const [copiedSkill, setCopiedSkill] = useState<string | null>(null);

  const currentCategory =
    skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];

  const handleCopySkill = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedSkill(name);
    setTimeout(() => setCopiedSkill(null), 1800);
  };

  return (
    <section id="skills" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7C5A48] font-semibold block mb-2">
            Tooling / 02
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#281D19]">
            Skills as Executable Files.
          </h2>
          <p className="text-sm sm:text-base text-[#281D19]/70 mt-3 max-w-xl">
            Modular engineering competencies organized by domain. Well-spaced and structured for zero regression.
          </p>
        </div>

        {/* Spacious Category Folders Bar */}
        <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap items-center gap-2.5 sm:gap-4 mb-10 sm:mb-16 pb-2 sm:pb-0 select-none">
          {skillCategories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-[#281D19] text-[#F4F1EA]"
                    : "bg-[#DFD8CE] text-[#281D19] hover:bg-[#D5CCC0]"
                }`}
              >
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <span className="font-mono text-xs opacity-60">
                    {category.itemCount} files
                  </span>
                  <span>{category.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Spacious Stage: Fanned Out Dog-Eared Skill Files */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {currentCategory.skills.map((skill) => {
            const isCopied = copiedSkill === skill.name;
            return (
              <div
                key={skill.name}
                onClick={() => handleCopySkill(skill.name)}
                className="group relative bg-[#F4F1EA] text-[#281D19] rounded-2xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer select-none transition-transform duration-300 hover:-translate-y-1"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
                }}
              >
                {/* Dog-Eared Fold Triangle Flap */}
                <div 
                  className="absolute top-0 right-0 w-6 h-6 bg-[#DFD8CE] pointer-events-none"
                  style={{
                    clipPath: "polygon(0 0, 0 100%, 100% 100%)",
                  }}
                />

                {/* Top Row: File Meta & Dog-Ear Area */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono opacity-50 mb-6 pr-4">
                    <span>SKILL_FILE</span>
                    <span>{skill.runtime}</span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#281D19] group-hover:text-black transition-colors">
                    {skill.name}
                  </h3>

                  {/* Filename with extension */}
                  <p className="text-xs font-mono text-[#7C5A48] font-semibold mt-1">
                    {skill.name.toLowerCase().replace(/\s+/g, "_")}.{skill.ext}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#281D19]/75 leading-relaxed mt-4">
                    {skill.desc}
                  </p>
                </div>

                {/* Bottom Row: Level Tag & Copy Popover Pill */}
                <div className="pt-8 mt-auto flex items-center justify-between text-xs border-t-0">
                  <span className="bg-[#EBE6DE] text-[#281D19] px-3 py-1 rounded-full font-mono font-medium">
                    {skill.level}
                  </span>

                  {/* Interactive Copy Pill (Inspired by Image 1) */}
                  <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity font-mono text-[11px]">
                    {isCopied ? (
                      <>
                        <IconCheck className="w-3.5 h-3.5 text-green-700" />
                        <span className="text-green-700 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <IconCopy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Folder Drawer Indicator (Inspired by Image 2 & 3) */}
        <div className="mt-16 sm:mt-20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono opacity-60 select-none">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#281D19]" />
            <span>
              Directory: ~/{currentCategory.folderName}/ ({currentCategory.itemCount} items loaded)
            </span>
          </div>
          <div>Click any card to copy reference</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
