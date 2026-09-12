import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import IcebreakerSection from "@/components/sections/IcebreakerSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

interface GlassSectionProps {
  children: React.ReactNode;
  id?: string;
  isFirst?: boolean;
}

const GlassSection = ({ children, id, isFirst = false }: GlassSectionProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (isFirst) {
      // First section (Hero): Starts crystal clear and blurs out as user scrolls away
      const anim = gsap.to(el, {
        filter: "blur(14px)",
        opacity: 0.1,
        scale: 0.98,
        y: -25,
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom 15%",
          scrub: 0.6,
        },
      });

      return () => {
        anim.scrollTrigger?.kill();
        anim.kill();
      };
    } else {
      // Subsequent sections: Glassmorphic blur in as they enter, plateau at 100% sharpness, and blur out as they exit
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          end: "bottom 8%",
          scrub: 0.6,
        },
      });

      tl.fromTo(
        el,
        {
          filter: "blur(16px)",
          opacity: 0,
          scale: 0.97,
          y: 35,
        },
        {
          filter: "blur(0px)",
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "power2.out",
          duration: 1.2,
        }
      )
        // Middle reading & interaction plateau: fully sharp and interactive
        .to(el, {
          filter: "blur(0px)",
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 2.2,
        })
        // Exit phase: smoothly blurs out as it leaves the top of viewport
        .to(el, {
          filter: "blur(14px)",
          opacity: 0.15,
          scale: 0.98,
          y: -25,
          ease: "power2.in",
          duration: 1.2,
        });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    }
  }, [isFirst]);

  return (
    <div
      ref={sectionRef}
      id={id}
      className="w-full flex justify-center will-change-[filter,transform,opacity]"
    >
      {children}
    </div>
  );
};

const Index = () => {
  useEffect(() => {
    // Refresh ScrollTrigger calculations after initial layout mount
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-[#EBE6DE] text-[#281D19] selection:bg-[#281D19] selection:text-[#F4F1EA] flex flex-col">
      {/* Black and White Floating Browser Header */}
      <Header />

      {/* Main Content with GSAP Glassmorphic Blur In/Out Transitions */}
      <main className="flex-1 flex flex-col items-center pt-36 sm:pt-32 pb-20 sm:pb-24 w-full overflow-x-hidden">
        <GlassSection isFirst>
          <HeroSection />
        </GlassSection>

        <GlassSection id="about">
          <AboutSection />
        </GlassSection>

        <GlassSection id="skills">
          <SkillsSection />
        </GlassSection>

        <GlassSection id="projects">
          <ProjectsSection />
        </GlassSection>

        <GlassSection id="icebreaker">
          <IcebreakerSection />
        </GlassSection>

        <GlassSection id="process">
          <ProcessSection />
        </GlassSection>

        <GlassSection id="contact">
          <ContactSection />
        </GlassSection>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
