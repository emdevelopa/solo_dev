import { useState } from "react";
import { BrutalButton } from "@/components/ui/BrutalButton";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Sparkles, 
  ArrowRight, 
  Code2, 
  Layers, 
  ShieldCheck, 
  Cpu,
  Copy,
  Check
} from "lucide-react";
import { fadeInUp, staggerContainer, popIn } from "@/lib/motion";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"stack" | "contract" | "philosophy">("stack");

  const skills = [
    { title: "MOBILE APPS", color: "bg-primary text-primary-foreground", icon: Cpu },
    { title: "WEB APPS", color: "bg-secondary text-secondary-foreground", icon: Layers },
    { title: "SMART CONTRACTS", color: "bg-accent text-accent-foreground", icon: ShieldCheck },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("olatunbossemma17@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-between relative overflow-hidden border-b-[3px] border-foreground bg-background">
      {/* Neo-brutalist Grid & Noise Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container relative z-10 pt-12 pb-24 md:py-20 flex-1 flex flex-col justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status & Name Badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-foreground text-background px-3.5 py-1.5 font-heading font-bold text-xs md:text-sm uppercase tracking-wider shadow-brutal">
                Gyimah Emmanuel Olatunbosun
              </span>
              <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground border-[2px] border-foreground px-3 py-1 font-heading font-bold text-xs uppercase tracking-wider shadow-brutal">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-foreground"></span>
                </span>
                Available for Work
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={fadeInUp} className="mb-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-heading font-black leading-[0.95] tracking-tight">
                I BUILD <br />
                <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 mt-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill.title}
                      whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                      className={`inline-flex items-center gap-2 ${skill.color} border-[3px] border-foreground px-4 py-1.5 text-2xl sm:text-3xl md:text-4xl shadow-brutal font-heading font-bold`}
                    >
                      <skill.icon className="w-6 h-6 md:w-8 md:h-8 stroke-[2.5]" />
                      {skill.title}
                    </motion.span>
                  ))}
                </div>
              </h1>
            </motion.div>

            {/* Value Statement */}
            <motion.p
              variants={fadeInUp}
              className="font-body text-base sm:text-lg md:text-xl max-w-xl mb-8 leading-relaxed text-foreground/90 bg-card/60 p-4 border-[2px] border-foreground shadow-brutal"
            >
              Architecting full-lifecycle digital products. From decentralized smart contracts to responsive web apps & cross-platform mobile systems.
              <br />
              <span className="font-bold text-foreground underline decoration-primary decoration-4">
                Production-grade logic. Zero fluff. Rapid execution.
              </span>
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <a href="#projects">
                <BrutalButton size="lg" variant="default" className="gap-2">
                  <span>Explore Projects</span>
                  <ArrowRight className="w-5 h-5" />
                </BrutalButton>
              </a>
              <a href="#contact">
                <BrutalButton size="lg" variant="outline">
                  Let's Talk
                </BrutalButton>
              </a>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 border-[3px] border-foreground bg-card px-4 py-3 font-heading font-bold text-xs uppercase tracking-wider shadow-brutal hover:bg-muted"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Interactive Developer Terminal Widget */}
          <motion.div
            variants={popIn}
            className="lg:col-span-5 w-full"
          >
            <div className="border-[3px] border-foreground bg-card shadow-brutal-xl overflow-hidden">
              {/* Terminal Titlebar */}
              <div className="bg-foreground text-background px-4 py-2.5 flex items-center justify-between border-b-[3px] border-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent border border-foreground" />
                  <div className="w-3 h-3 rounded-full bg-primary border border-foreground" />
                  <div className="w-3 h-3 rounded-full bg-secondary border border-foreground" />
                  <span className="font-heading font-bold text-xs ml-2 tracking-wider">
                    solo_dev_environment.v2
                  </span>
                </div>
                <Code2 className="w-4 h-4 text-primary" />
              </div>

              {/* Terminal Tabs */}
              <div className="flex border-b-[2px] border-foreground bg-muted">
                {[
                  { id: "stack", label: "stack.ts" },
                  { id: "contract", label: "contract.sol" },
                  { id: "philosophy", label: "philosophy.md" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2 font-heading font-bold text-xs uppercase border-r-[2px] border-foreground transition-colors ${
                      activeTab === tab.id
                        ? "bg-card text-foreground border-b-2 border-b-card -mb-[2px]"
                        : "bg-muted text-muted-foreground hover:bg-card/50"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm bg-card text-foreground overflow-x-auto min-h-[220px]">
                {activeTab === "stack" && (
                  <div className="space-y-1.5">
                    <p className="text-muted-foreground">// Core Tech Arsenal</p>
                    <p><span className="text-secondary font-bold">const</span> developer = &#123;</p>
                    <p className="pl-4">name: <span className="text-accent font-semibold">"Gyimah Emmanuel"</span>,</p>
                    <p className="pl-4">domains: [<span className="text-accent">"Web3"</span>, <span className="text-accent">"Fullstack"</span>, <span className="text-accent">"Mobile"</span>],</p>
                    <p className="pl-4">languages: [<span className="text-primary font-semibold">"TypeScript"</span>, <span className="text-primary font-semibold">"Solidity"</span>, <span className="text-primary font-semibold">"Python"</span>],</p>
                    <p className="pl-4">frameworks: [<span className="text-primary font-semibold">"Next.js"</span>, <span className="text-primary font-semibold">"React Native"</span>, <span className="text-primary font-semibold">"Hardhat"</span>],</p>
                    <p className="pl-4">status: <span className="text-green-600 font-bold">"READY_TO_SHIP"</span></p>
                    <p>&#125;;</p>
                  </div>
                )}

                {activeTab === "contract" && (
                  <div className="space-y-1.5">
                    <p className="text-muted-foreground">// Decentralized Logic</p>
                    <p><span className="text-secondary font-bold">contract</span> <span className="text-accent font-bold">ExecutionEngine</span> &#123;</p>
                    <p className="pl-4 text-muted-foreground">// Audited & Gas-Optimized</p>
                    <p className="pl-4"><span className="text-secondary">function</span> <span className="text-primary font-semibold">deploySolution</span>() <span className="text-secondary">external</span> &#123;</p>
                    <p className="pl-8"><span className="text-secondary">require</span>(codeQuality == <span className="text-accent">"PRODUCTION"</span>);</p>
                    <p className="pl-8">emit <span className="text-green-600 font-bold">ValueDelivered</span>(client, block.timestamp);</p>
                    <p className="pl-4">&#125;</p>
                    <p>&#125;</p>
                  </div>
                )}

                {activeTab === "philosophy" && (
                  <div className="space-y-1.5">
                    <p className="text-muted-foreground"># Guiding Principles</p>
                    <p className="text-foreground font-semibold">1. <span className="text-secondary">Deterministic Delivery:</span> Ship on schedule.</p>
                    <p className="text-foreground font-semibold">2. <span className="text-accent">Clean Architecture:</span> Maintainable over clever.</p>
                    <p className="text-foreground font-semibold">3. <span className="text-primary">Performance First:</span> Fast load, high security.</p>
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="bg-muted px-4 py-2 border-t-[2px] border-foreground flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span>Build passing • v2.4.0</span>
                </span>
                <span className="text-xs bg-foreground text-background px-2 py-0.5 font-bold">
                  UTF-8
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee Ticker with Hover Pause */}
      <div className="bg-foreground text-background py-3.5 overflow-hidden border-t-[3px] border-foreground relative group">
        <div className="animate-marquee whitespace-nowrap flex group-hover:[animation-play-state:paused] select-none">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="font-heading font-black text-sm md:text-base uppercase tracking-widest mx-6 flex items-center gap-6">
              <span>MOBILE APPS</span>
              <span className="text-primary">★</span>
              <span>WEB APPS</span>
              <span className="text-secondary">★</span>
              <span>SMART CONTRACTS</span>
              <span className="text-accent">★</span>
              <span>SOLIDITY & HARDHAT</span>
              <span className="text-primary">★</span>
              <span>REACT & NEXT.JS</span>
              <span className="text-secondary">★</span>
              <span>NODE & DJANGO</span>
              <span className="text-accent">★</span>
              <span>TYPESCRIPT</span>
              <span className="text-primary">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
