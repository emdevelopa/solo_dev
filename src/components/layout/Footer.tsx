import {
  IconArrowUp,
  IconBrandGithub,
  IconBrandX,
  IconMail
} from "@tabler/icons-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Icebreaker", href: "#icebreaker" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-[#18110E] text-[#F4F1EA] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 select-none">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Top Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="/logo.svg"
              download="solo-dev-logo.svg"
              title="Download Solo_DEV SVG Logo"
              className="inline-flex items-center gap-3 group focus:outline-none cursor-pointer"
            >
              <div className="w-8 h-8 shrink-0 transition-transform group-hover:scale-105">
                <svg viewBox="0 0 256 256" className="w-full h-full drop-none">
                  <path
                    fill="#F4F1EA"
                    fillRule="evenodd"
                    d="M 76 0 L 180 0 A 76 76 0 0 1 256 76 L 256 180 A 76 76 0 0 1 180 256 L 76 256 A 76 76 0 0 1 0 180 L 0 76 A 76 76 0 0 1 76 0 Z M 76.8 153.6 A 25.6 25.6 0 1 0 76.8 204.8 A 25.6 25.6 0 1 0 76.8 153.6 Z"
                  />
                </svg>
              </div>
              <span className="font-bold text-xl sm:text-2xl tracking-tight text-[#F4F1EA]">
                Solo_DEV
              </span>
            </a>
            <p className="text-sm text-[#F4F1EA]/70 max-w-sm leading-relaxed">
              Architecting full-lifecycle digital products across decentralized smart contracts, web applications, and cross-platform native systems.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#DFA588]">
              <span>Full-Stack & Web3 Systems Engineering</span>
            </div>
          </div>

          {/* Quick Navigation Sitelinks */}
          <nav aria-label="Footer Sitelinks" className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A36C52] font-semibold block mb-2">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#F4F1EA]/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Social Channels & Direct Reach */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A36C52] font-semibold block mb-2">
              Connect
            </span>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href="https://github.com/emdevelopa"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#F4F1EA]/80 hover:text-white transition-colors"
              >
                <IconBrandGithub className="w-4 h-4" />
                <span>GitHub / emdevelopa</span>
              </a>
              <a
                href="https://x.com/Emwrld999"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#F4F1EA]/80 hover:text-white transition-colors"
              >
                <IconBrandX className="w-4 h-4" />
                <span>Twitter / @Emwrld999</span>
              </a>
              <a
                href="mailto:olatunbossemma17@gmail.com"
                className="inline-flex items-center gap-2 text-[#F4F1EA]/80 hover:text-white transition-colors"
              >
                <IconMail className="w-4 h-4" />
                <span>Direct Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t-0 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono opacity-60">
          <p>
            © {new Date().getFullYear()} Gyimah Emmanuel Olatunbosun. Designed & Built with conviction.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 bg-[#281D19] hover:bg-[#3D2C26] text-[#F4F1EA] px-4 py-2 rounded-xl transition-all active:scale-95 cursor-pointer font-bold"
          >
            <span>Back to Top</span>
            <IconArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
