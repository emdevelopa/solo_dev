interface PillarItem {
  title: string;
  desc: string;
}

const pillars: PillarItem[] = [
  {
    title: "Fast & Resilient",
    desc: "Zero-latency frontend architectures backed by high-concurrency, scalable server pipelines.",
  },
  {
    title: "Smart Contracts & Web3",
    desc: "Audited, gas-optimized Solidity protocols with exhaustive unit and integration test coverage.",
  },
  {
    title: "Maintainable Logic",
    desc: "Strict type safety, clean separation of concerns, and modular codebases built for rapid scaling.",
  },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "5+", label: "Production Deploys" },
  { value: "3", label: "Core Domains" },
  { value: "100%", label: "Test Coverage" },
];

export const AboutSection = () => {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Headline */}
        <div className="mb-10 sm:mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7C5A48] font-semibold block mb-2">
            Overview / 01
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#281D19]">
            Engineered with Purpose.
          </h2>
        </div>

        {/* Minimal Folder Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Card 01: Bio & Narrative Folder */}
          <div className="flex flex-col">
            {/* Folder Tab */}
            <div className="self-start relative bg-[#F4F1EA] text-[#281D19] px-4 sm:px-5 py-2 sm:py-2.5 rounded-t-xl sm:rounded-t-2xl text-xs font-bold uppercase tracking-wider select-none">
              <span>01 / Bio</span>
              {/* Concave fillet connecting tab right edge to body */}
              <svg
                className="absolute -bottom-[1px] -right-3 sm:-right-3.5 w-3 sm:w-3.5 h-3 sm:h-3.5 pointer-events-none fill-[#F4F1EA]"
                viewBox="0 0 14 14"
              >
                <path d="M14,14 A14,14 0 0,1 0,0 L0,14 Z" />
              </svg>
            </div>

            {/* Folder Body */}
            <div className="bg-[#F4F1EA] text-[#281D19] rounded-b-2xl sm:rounded-b-3xl rounded-tr-2xl sm:rounded-tr-3xl p-6 sm:p-8 flex-1 flex flex-col justify-between select-none transition-transform duration-300 hover:scale-[1.01]">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest font-mono opacity-50">
                  Profile & Identity
                </p>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                  Developer who ships value with conviction.
                </h3>
                <p className="text-sm sm:text-base leading-relaxed opacity-80 pt-2">
                  Full-stack software engineer architecting digital products across decentralized smart contracts, responsive web apps, and cross-platform mobile systems.
                </p>
              </div>

              <div className="pt-8 mt-auto flex items-center justify-between text-xs opacity-70">
                <span className="font-semibold">Gyimah Emmanuel O.</span>
                <span className="font-mono">Solo_DEV</span>
              </div>
            </div>
          </div>

          {/* Card 02: Track Record & Stats Folder */}
          <div className="flex flex-col">
            {/* Folder Tab */}
            <div className="self-start relative bg-[#281D19] text-[#F4F1EA] px-4 sm:px-5 py-2 sm:py-2.5 rounded-t-xl sm:rounded-t-2xl text-xs font-bold uppercase tracking-wider select-none">
              <span>02 / Track Record</span>
              {/* Concave fillet connecting tab right edge to body */}
              <svg
                className="absolute -bottom-[1px] -right-3 sm:-right-3.5 w-3 sm:w-3.5 h-3 sm:h-3.5 pointer-events-none fill-[#281D19]"
                viewBox="0 0 14 14"
              >
                <path d="M14,14 A14,14 0 0,1 0,0 L0,14 Z" />
              </svg>
            </div>

            {/* Folder Body */}
            <div className="bg-[#281D19] text-[#F4F1EA] rounded-b-2xl sm:rounded-b-3xl rounded-tr-2xl sm:rounded-tr-3xl p-6 sm:p-8 flex-1 flex flex-col justify-between select-none transition-transform duration-300 hover:scale-[1.01]">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest font-mono text-[#A36C52]">
                  Metrics & Impact
                </p>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                  Reliable delivery across all environments.
                </h3>
              </div>

              {/* 2x2 Clean Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5 my-6 py-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#DFA588]">
                      {stat.value}
                    </span>
                    <span className="text-xs opacity-70 mt-1 font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-[#A36C52] font-mono">
                Decentralized & Native Systems
              </div>
            </div>
          </div>

          {/* Card 03: Core Philosophy & Pillars Folder */}
          <div className="flex flex-col md:col-span-2 lg:col-span-1">
            {/* Folder Tab */}
            <div className="self-start relative bg-[#DFD8CE] text-[#281D19] px-4 sm:px-5 py-2 sm:py-2.5 rounded-t-xl sm:rounded-t-2xl text-xs font-bold uppercase tracking-wider select-none">
              <span>03 / Pillars</span>
              {/* Concave fillet connecting tab right edge to body */}
              <svg
                className="absolute -bottom-[1px] -right-3 sm:-right-3.5 w-3 sm:w-3.5 h-3 sm:h-3.5 pointer-events-none fill-[#DFD8CE]"
                viewBox="0 0 14 14"
              >
                <path d="M14,14 A14,14 0 0,1 0,0 L0,14 Z" />
              </svg>
            </div>

            {/* Folder Body */}
            <div className="bg-[#DFD8CE] text-[#281D19] rounded-b-2xl sm:rounded-b-3xl rounded-tr-2xl sm:rounded-tr-3xl p-6 sm:p-8 flex-1 flex flex-col justify-between select-none transition-transform duration-300 hover:scale-[1.01]">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest font-mono opacity-50">
                  Engineering Standards
                </p>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                  Zero fluff. Rapid execution.
                </h3>
              </div>

              {/* Pillars List */}
              <div className="space-y-4 my-6">
                {pillars.map((pillar, idx) => (
                  <div key={pillar.title} className="flex flex-col">
                    <span className="text-sm font-bold text-[#281D19] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#281D19]" />
                      {pillar.title}
                    </span>
                    <p className="text-xs opacity-75 leading-relaxed pl-3.5 mt-0.5">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs opacity-60 font-mono">
                Architecture · Security · Speed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
