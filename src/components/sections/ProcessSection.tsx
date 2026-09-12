import { useState } from "react";
import { IconCalendar, IconCheck, IconArrowUpRight } from "@tabler/icons-react";

interface CalendarTile {
  day: string;
  date: string;
  badge?: string;
  badgeBg?: string;
  badgeText?: string;
  title?: string;
  subtitle?: string;
  isCircled?: boolean;
  theme: {
    bg: string;
    text: string;
    dateText: string;
    metaText: string;
  };
  details: string[];
}

const calendarTiles: CalendarTile[] = [
  {
    day: "THU",
    date: "01",
    badge: "PHASE 01",
    badgeBg: "bg-[#281D19]",
    badgeText: "text-[#F4F1EA]",
    title: "RESEARCH",
    subtitle: "Discovery & Tech Spec",
    theme: {
      bg: "bg-[#F4F1EA]",
      text: "text-[#281D19]",
      dateText: "text-[#281D19]",
      metaText: "text-[#7C5A48]",
    },
    details: [
      "Cryptographic security boundaries",
      "Database schema query modeling",
      "OpenAPI spec contract freeze",
    ],
  },
  {
    day: "FRI",
    date: "02",
    badge: "PHASE 02",
    badgeBg: "bg-[#281D19]",
    badgeText: "text-[#F4F1EA]",
    title: "DEFINE",
    subtitle: "Milestones & Schemas",
    theme: {
      bg: "bg-[#DFD8CE]",
      text: "text-[#281D19]",
      dateText: "text-[#281D19]",
      metaText: "text-[#7C5A48]",
    },
    details: [
      "Deterministic state transitions",
      "Smart contract ABI interfaces",
      "Strict TypeScript validation models",
    ],
  },
  {
    day: "SAT",
    date: "03",
    badge: "PHASE 03",
    badgeBg: "bg-[#7A361D]",
    badgeText: "text-[#F4F1EA]",
    title: "DESIGN",
    subtitle: "UI Systems & State",
    theme: {
      bg: "bg-[#C46D4B]",
      text: "text-[#FDFBF7]",
      dateText: "text-[#FDFBF7]",
      metaText: "text-[#FDFBF7]/85",
    },
    details: [
      "Modular design tokens system",
      "Optimistic UI & pending states",
      "Keyboard accessibility standards",
    ],
  },
  {
    day: "THU",
    date: "08",
    badge: "PHASE 04",
    badgeBg: "bg-[#3D2C26]",
    badgeText: "text-[#E6B198]",
    title: "BUILD",
    subtitle: "Test-Driven Execution",
    theme: {
      bg: "bg-[#281D19]",
      text: "text-[#F4F1EA]",
      dateText: "text-[#F4F1EA]",
      metaText: "text-[#E6B198]",
    },
    details: [
      "100% test coverage (Vitest / Foundry)",
      "Static analysis with Slither & ESLint",
      "Automated branch deployment preview",
    ],
  },
  {
    day: "FRI",
    date: "09",
    isCircled: true,
    title: "PRODUCTION RELEASE",
    subtitle: "Audited & Verified Deployment",
    theme: {
      bg: "bg-[#F4F1EA]",
      text: "text-[#281D19]",
      dateText: "text-[#281D19]",
      metaText: "text-[#C83838]",
    },
    details: [
      "Immutable contract verification",
      "Automated CI/CD release gate",
      "Zero-downtime live traffic switch",
    ],
  },
  {
    day: "SAT",
    date: "10",
    badge: "PHASE 05",
    badgeBg: "bg-[#3A493D]",
    badgeText: "text-[#D8E6DA]",
    title: "SCALE & ITERATE",
    subtitle: "Telemetry & Performance SLAs",
    theme: {
      bg: "bg-[#546857]",
      text: "text-[#F7F5F0]",
      dateText: "text-[#F7F5F0]",
      metaText: "text-[#D8E6DA]",
    },
    details: [
      "Core Web Vitals monitoring",
      "Gas optimization loops",
      "Continuous feature iterations",
    ],
  },
];

export const ProcessSection = () => {
  const [selectedTile, setSelectedTile] = useState<number | null>(null);

  return (
    <section id="process" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#7C5A48] font-semibold block mb-2">
              Sprint Calendar / 05
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#281D19]">
              How I Deliver.
            </h2>
            <p className="text-sm sm:text-base text-[#281D19]/70 mt-3 max-w-xl">
              An all-in-one delivery calendar. Each phase mapped out as a concrete, deterministic milestone.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#281D19] bg-[#DFD8CE] px-4 py-2 rounded-xl select-none self-start sm:self-auto">
            <IconCalendar className="w-4 h-4" />
            <span className="font-bold">DELIVERY SPRINT · 10-DAY SPRINT CYCLE</span>
          </div>
        </div>

        {/* All-In-One Calendar Grid (Exact Style from Reference Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch select-none">
          {calendarTiles.map((tile, idx) => {
            const isSelected = selectedTile === idx;
            return (
              <div
                key={tile.date}
                onClick={() => setSelectedTile(isSelected ? null : idx)}
                className={`${tile.theme.bg} ${tile.theme.text} rounded-[28px] sm:rounded-[34px] p-7 sm:p-8 min-h-[280px] sm:min-h-[320px] flex flex-col justify-between cursor-pointer transition-transform duration-300 hover:scale-[1.01]`}
              >
                {/* Top Row: Badge on Left + Day/Date on Right (Exact layout as reference) */}
                <div className="flex items-start justify-between gap-3">
                  {/* Event / Phase Tag */}
                  <div>
                    {tile.badge && (
                      <span
                        className={`${tile.badgeBg} ${tile.badgeText} text-xs font-mono font-bold px-3 py-1.5 rounded-lg inline-block uppercase tracking-wider`}
                      >
                        {tile.badge}
                      </span>
                    )}
                  </div>

                  {/* Day of Week & Bold Date Number in the Corner */}
                  <div className="flex flex-col items-end leading-none">
                    <span className="text-xs sm:text-sm font-black tracking-wider uppercase font-mono opacity-90">
                      {tile.day}
                    </span>
                    <span className={`text-4xl sm:text-5xl font-black tracking-tight mt-1 ${tile.theme.dateText}`}>
                      {tile.date}
                    </span>
                  </div>
                </div>

                {/* Center / Middle Content Area */}
                <div className="my-auto py-4">
                  {tile.isCircled ? (
                    /* The Circled "DUE DATE" Feature (Exact match to Reference Screenshot) */
                    <div className="flex flex-col items-center justify-center text-center py-2">
                      <div className="relative inline-flex items-center justify-center px-6 py-3">
                        {/* Hand-drawn sketched red circle SVG */}
                        <svg
                          className="absolute inset-0 w-full h-full pointer-events-none stroke-[#C83838]"
                          viewBox="0 0 180 76"
                          fill="none"
                        >
                          <path
                            d="M16,38 C16,16 68,7 112,7 C156,7 173,20 170,42 C165,64 128,71 84,71 C40,71 11,58 13,36 C15,18 62,10 106,10"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="font-mono font-bold text-sm sm:text-base tracking-widest uppercase text-[#281D19]">
                          DUE DATE
                        </span>
                      </div>
                      <p className="text-xs font-mono font-bold uppercase text-[#C83838] mt-2">
                        {tile.title}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                        {tile.title}
                      </h3>
                      <p className={`text-xs sm:text-sm font-medium mt-1 ${tile.theme.metaText}`}>
                        {tile.subtitle}
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Row: Checklist details */}
                <div className="pt-4 border-t-0 space-y-1.5">
                  {tile.details.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs opacity-80"
                    >
                      <IconCheck className="w-3.5 h-3.5 shrink-0" stroke={2.5} />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Calendar Footer Note */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono opacity-60 select-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#281D19]" />
            <span>Sprint Cadence: 10 Days from kickoff to verified production deploy</span>
          </div>
          <div>All deliverables version-controlled and tested</div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
