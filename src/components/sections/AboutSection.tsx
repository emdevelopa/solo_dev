import { BrutalCard } from "@/components/ui/BrutalCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Code, CheckCircle2, ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const AboutSection = () => {
  const stats = [
    { number: "5+", label: "Projects Delivered", color: "bg-primary" },
    { number: "5+", label: "Years Experience", color: "bg-secondary text-secondary-foreground" },
    { number: "3", label: "Core Domains", color: "bg-accent text-accent-foreground" },
    { number: "100%", label: "Client Satisfaction", color: "bg-foreground text-background" },
  ];

  const pillars = [
    {
      icon: Zap,
      title: "Fast & Resilient",
      desc: "Architecting zero-latency frontend experiences backed by robust, scalable server pipelines.",
    },
    {
      icon: ShieldCheck,
      title: "Smart Contracts & Web3",
      desc: "Writing secure, gas-optimized Solidity smart contracts with comprehensive test coverage.",
    },
    {
      icon: Code,
      title: "Maintainable Logic",
      desc: "Clean modular architecture, type safety, and strict separation of concerns for easy scaling.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 border-b-[3px] border-foreground bg-background relative overflow-hidden">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column - Heading & Tag */}
          <div className="lg:col-span-5">
            <motion.span
              variants={fadeInUp}
              className="inline-block bg-secondary text-secondary-foreground px-4 py-2 font-heading font-bold text-sm uppercase tracking-wider mb-6 shadow-brutal border-[2px] border-foreground"
            >
              Who I Am
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-[1.05] tracking-tight"
            >
              DEVELOPER WHO <br />
              <span className="bg-primary px-3 py-1 border-[3px] border-foreground shadow-brutal inline-block mt-2">
                SHIPS VALUE
              </span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="mt-8 space-y-4">
              <p className="font-body text-lg leading-relaxed text-foreground/90">
                I'm a full-stack developer dedicated to transforming complex requirements into reliable, intuitive, and modern digital experiences.
              </p>
              <p className="font-body text-base leading-relaxed text-muted-foreground">
                Whether deploying verified Ethereum contracts, crafting native-feel React applications, or building high-concurrency backends, I bring disciplined engineering and swift turnaround.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Engineering Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                variants={fadeInUp}
                whileHover={{ x: -4, y: -4 }}
                className="border-[3px] border-foreground bg-card p-6 shadow-brutal hover:shadow-brutal-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary border-[2px] border-foreground shadow-brutal shrink-0">
                    <pillar.icon className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl uppercase tracking-wide mb-1 flex items-center gap-2">
                      <span>{pillar.title}</span>
                    </h3>
                    <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="border-[3px] border-foreground bg-card p-6 md:p-8 text-center shadow-brutal hover:shadow-brutal-lg transition-all relative overflow-hidden"
            >
              <div className="font-heading text-4xl sm:text-5xl md:text-6xl font-black mb-2 tracking-tight">
                <AnimatedCounter value={stat.number} />
              </div>
              <div className="font-heading font-bold text-xs sm:text-sm text-foreground uppercase tracking-wider">
                {stat.label}
              </div>
              <div className={`h-2 w-full ${stat.color} border-t-[2px] border-foreground absolute bottom-0 left-0 right-0`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
