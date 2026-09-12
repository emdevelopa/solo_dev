import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Server, Layout, Smartphone, Sparkles, CheckCircle2 } from "lucide-react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const SkillsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const skillCategories = [
    {
      id: "contracts",
      title: "Smart Contract & Web3",
      icon: Shield,
      color: "bg-accent",
      textColor: "text-accent-foreground",
      badgeText: "Web3 Engineering",
      skills: [
        { name: "Solidity", level: "Expert" },
        { name: "Hardhat", level: "Advanced" },
        { name: "Foundry", level: "Advanced" },
        { name: "Ethereum", level: "Expert" },
        { name: "ERC-20 / ERC-721", level: "Expert" },
        { name: "DeFi Protocols", level: "Advanced" },
        { name: "Ethers.js / Web3.js", level: "Advanced" },
      ],
    },
    {
      id: "backend",
      title: "Backend & Systems",
      icon: Server,
      color: "bg-secondary",
      textColor: "text-secondary-foreground",
      badgeText: "Server & Databases",
      skills: [
        { name: "Node.js", level: "Expert" },
        { name: "Express", level: "Expert" },
        { name: "Python", level: "Advanced" },
        { name: "Django", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "RESTful APIs", level: "Expert" },
      ],
    },
    {
      id: "web",
      title: "Web App Development",
      icon: Layout,
      color: "bg-primary",
      textColor: "text-primary-foreground",
      badgeText: "Interactive UIs",
      skills: [
        { name: "React", level: "Expert" },
        { name: "Next.js", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Vue.js", level: "Intermediate" },
        { name: "Vite", level: "Expert" },
        { name: "Framer Motion", level: "Advanced" },
      ],
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      icon: Smartphone,
      color: "bg-foreground",
      textColor: "text-background",
      badgeText: "Cross-Platform",
      skills: [
        { name: "React Native", level: "Expert" },
        { name: "Expo", level: "Advanced" },
        { name: "Cross-Platform UI", level: "Expert" },
        { name: "Native Modules", level: "Intermediate" },
        { name: "State Management", level: "Expert" },
        { name: "Mobile CI/CD", level: "Advanced" },
      ],
    },
  ];

  const filterButtons = [
    { id: "all", label: "All Skills" },
    { id: "contracts", label: "Smart Contracts" },
    { id: "backend", label: "Backend" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
  ];

  const filteredCategories = selectedFilter === "all"
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === selectedFilter);

  return (
    <section id="skills" className="py-20 md:py-32 border-b-[3px] border-foreground bg-muted relative overflow-hidden">
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
            <span className="inline-block bg-foreground text-background px-4 py-1.5 font-heading font-bold text-xs uppercase tracking-wider shadow-brutal border-[2px] border-foreground">
              Technical Arsenal
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-[1.05] tracking-tight"
          >
            WHAT I <span className="bg-primary px-3 py-1 border-[3px] border-foreground shadow-brutal inline-block">WORK</span> WITH
          </motion.h2>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {filterButtons.map((btn) => (
            <motion.button
              key={btn.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(btn.id)}
              className={`font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-4 py-2 border-[3px] border-foreground shadow-brutal transition-colors ${
                selectedFilter === btn.id
                  ? "bg-primary text-primary-foreground font-black"
                  : "bg-card text-foreground hover:bg-card/70"
              }`}
            >
              {btn.label}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                layout
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                whileHover={{ x: -4, y: -4 }}
                className="border-[3px] border-foreground bg-card shadow-brutal-lg overflow-hidden flex flex-col justify-between"
              >
                {/* Category Header */}
                <div>
                  <div className={`${category.color} ${category.textColor} px-6 py-4 border-b-[3px] border-foreground flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <category.icon className="w-6 h-6 stroke-[2.5]" />
                      <h3 className="font-heading font-bold text-xl uppercase tracking-wide">
                        {category.title}
                      </h3>
                    </div>
                    <span className="font-heading font-bold text-xs uppercase bg-background/20 px-2 py-1 border border-current">
                      {category.badgeText}
                    </span>
                  </div>

                  {/* Skills List with Tags & Level Badges */}
                  <div className="p-6 bg-card">
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          whileHover={{ scale: 1.08, rotate: skillIndex % 2 === 0 ? 1 : -1 }}
                          className="inline-flex items-center gap-1.5 border-[2px] border-foreground bg-background px-3 py-1.5 font-body text-xs sm:text-sm font-semibold shadow-brutal hover:bg-primary transition-colors cursor-default"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary stroke-[3]" />
                          <span>{skill.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Count */}
                <div className="px-6 py-2.5 bg-muted/60 border-t-[2px] border-foreground flex items-center justify-between font-mono text-xs text-muted-foreground">
                  <span>{category.skills.length} core technologies</span>
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
