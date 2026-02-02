import { useState } from "react";
import { BrutalButton } from "@/components/ui/BrutalButton";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-[3px] border-foreground">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="font-heading font-bold text-xl md:text-2xl tracking-tight">
            <span className="bg-foreground text-background px-2 py-1">Solo_DEV</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-heading font-bold text-sm uppercase tracking-wide px-4 py-2 hover:bg-primary transition-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="#contact">
              <BrutalButton size="sm" variant="default">
                Hire Me
              </BrutalButton>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden border-[3px] border-foreground p-2 brutal-shadow brutal-hover"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t-[3px] border-foreground">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-heading font-bold text-lg uppercase tracking-wide px-4 py-3 border-[3px] border-foreground hover:bg-primary transition-none"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              <BrutalButton size="lg" variant="default" className="w-full mt-2">
                Hire Me
              </BrutalButton>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
