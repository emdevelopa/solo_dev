import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { 
  IconArrowLeft, 
  IconArrowRight, 
  IconRotateClockwise, 
  IconHome, 
  IconLock, 
  IconX 
} from "@tabler/icons-react";

interface NavLink {
  label: string;
  href: string;
  id: string;
}

const navLinks: NavLink[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [history, setHistory] = useState<string[]>([""]);
  const headerContainerRef = useRef<HTMLDivElement | null>(null);

  // Initial Entrance Animation with GSAP
  useEffect(() => {
    if (headerContainerRef.current) {
      gsap.fromTo(
        headerContainerRef.current,
        {
          y: -80,
          opacity: 0,
          filter: "blur(14px)",
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          duration: 1.0,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    }
  }, []);

  // Scroll listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 240;
      let currentSection = "";

      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = link.id;
            break;
          }
        }
      }

      if (window.scrollY < 80) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (sectionId: string) => {
    setActiveSection(sectionId);
    setHistory((prev) => [...prev.slice(0, historyIndex + 1), sectionId]);
    setHistoryIndex((prev) => prev + 1);

    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (historyIndex > 0) {
      const nextIndex = historyIndex - 1;
      setHistoryIndex(nextIndex);
      const targetId = history[nextIndex];
      navigateTo(targetId);
    }
  };

  const handleForward = () => {
    if (historyIndex < history.length - 1) {
      const nextIndex = historyIndex + 1;
      setHistoryIndex(nextIndex);
      const targetId = history[nextIndex];
      navigateTo(targetId);
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      window.scrollTo({ top: window.scrollY, behavior: "smooth" });
    }, 500);
  };

  const handleHome = () => {
    navigateTo("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <div 
        ref={headerContainerRef} 
        className="pointer-events-auto flex flex-col items-start w-full max-w-4xl lg:max-w-5xl will-change-[filter,transform,opacity]"
      >
        {/* Top Tab Row */}
        <div className="flex items-end pl-3 sm:pl-8 relative z-10">
          {/* Mac Traffic Light Control Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2 mr-2.5 sm:mr-5 pb-2.5 sm:pb-3">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neutral-400 transition-opacity hover:opacity-100" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neutral-400 transition-opacity hover:opacity-100" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neutral-400 transition-opacity hover:opacity-100" />
          </div>

          {/* Browser Tab */}
          <div className="relative bg-white text-black px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-t-xl sm:rounded-t-2xl flex items-center gap-2 sm:gap-2.5 text-xs sm:text-base font-medium select-none">
            {/* Left concave fillet */}
            <svg
              className="absolute -bottom-[1px] -left-3 sm:-left-4 w-3 sm:w-4 h-3 sm:h-4 pointer-events-none fill-white"
              viewBox="0 0 16 16"
            >
              <path d="M0,16 A16,16 0 0,0 16,0 L16,16 Z" />
            </svg>

            {/* Browser Tab Favicon - Solo_Dev Signature Mark */}
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0">
              <svg viewBox="0 0 256 256" className="w-full h-full">
                <path
                  fill="#000000"
                  fillRule="evenodd"
                  d="M 76 0 L 180 0 A 76 76 0 0 1 256 76 L 256 180 A 76 76 0 0 1 180 256 L 76 256 A 76 76 0 0 1 0 180 L 0 76 A 76 76 0 0 1 76 0 Z M 76.8 153.6 A 25.6 25.6 0 1 0 76.8 204.8 A 25.6 25.6 0 1 0 76.8 153.6 Z"
                />
              </svg>
            </div>

            <span className="tracking-tight font-bold text-xs sm:text-base">
              Solo_DEV
              {activeSection && (
                <span className="font-normal text-neutral-500 hidden xs:inline">
                  {" "}· {activeSection}
                </span>
              )}
            </span>

            <button
              onClick={handleHome}
              className="ml-0.5 sm:ml-1 text-black/50 hover:text-black transition-colors rounded-sm p-0.5 sm:p-1"
              aria-label="Close Tab"
            >
              <IconX className="w-3 h-3 sm:w-3.5 sm:h-3.5" stroke={2.5} />
            </button>

            {/* Right concave fillet */}
            <svg
              className="absolute -bottom-[1px] -right-3 sm:-right-4 w-3 sm:w-4 h-3 sm:h-4 pointer-events-none fill-white"
              viewBox="0 0 16 16"
            >
              <path d="M16,16 A16,16 0 0,1 0,0 L0,16 Z" />
            </svg>
          </div>
        </div>

        {/* Main Browser Bar Body */}
        <div className="w-full bg-white text-black rounded-[20px] sm:rounded-3xl p-2 sm:p-3.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 max-w-full">
          {/* Navigation Controls: Back, Forward, Refresh, Home */}
          <div className="flex items-center justify-between sm:justify-start gap-1 shrink-0 px-1 sm:px-2">
            <div className="flex items-center gap-1">
              <button
                onClick={handleBack}
                disabled={historyIndex <= 0}
                className="p-1.5 sm:p-2 rounded-full text-black hover:bg-neutral-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                aria-label="Back"
              >
                <IconArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" stroke={2.2} />
              </button>

              <button
                onClick={handleForward}
                disabled={historyIndex >= history.length - 1}
                className="p-1.5 sm:p-2 rounded-full text-black hover:bg-neutral-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                aria-label="Forward"
              >
                <IconArrowRight className="w-4 h-4 sm:w-5 sm:h-5" stroke={2.2} />
              </button>

              <button
                onClick={handleRefresh}
                className={`p-1.5 sm:p-2 rounded-full text-black hover:bg-neutral-100 transition-colors ${
                  isRefreshing ? "animate-spin" : ""
                }`}
                aria-label="Refresh"
              >
                <IconRotateClockwise className="w-4 h-4 sm:w-4.5 sm:h-4.5" stroke={2.2} />
              </button>

              <button
                onClick={handleHome}
                className="p-1.5 sm:p-2 rounded-full text-black hover:bg-neutral-100 transition-colors"
                aria-label="Home"
              >
                <IconHome className="w-4 h-4 sm:w-5 sm:h-5" stroke={2.2} />
              </button>
            </div>

            {/* Mobile-only compact URL badge */}
            <div className="sm:hidden flex items-center gap-1.5 text-xs text-neutral-400 font-mono pr-2">
              <IconLock className="w-3 h-3 text-neutral-500" stroke={2.2} />
              <span className="text-neutral-600 font-semibold truncate max-w-[120px]">
                {activeSection ? `#${activeSection}` : "solo-dev.me"}
              </span>
            </div>
          </div>

          {/* Address Bar Pill with Navigation Links */}
          <div className="flex-1 bg-black text-white rounded-xl sm:rounded-full px-3 sm:px-5 py-1.5 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
            {/* Domain & Lock (Desktop / Tablet) */}
            <div className="hidden sm:flex items-center gap-2 text-sm sm:text-base text-neutral-300 shrink-0 select-none">
              <IconLock className="w-4 h-4 text-neutral-400" stroke={2.2} />
              <span className="font-mono text-neutral-200 font-medium text-xs sm:text-sm">
                solo-dev{activeSection ? `/#${activeSection}` : ""}
              </span>
              <span className="text-neutral-700 hidden lg:inline">|</span>
            </div>

            {/* Nav Links */}
            <nav className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm shrink-0 font-medium w-full sm:w-auto justify-around sm:justify-start">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => navigateTo(link.id)}
                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl transition-all whitespace-nowrap ${
                      isActive
                        ? "bg-white text-black font-bold"
                        : "text-neutral-300 hover:text-white hover:bg-neutral-900"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
