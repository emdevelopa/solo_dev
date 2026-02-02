const Footer = () => {
  return (
    <footer className="border-t-[3px] border-foreground bg-foreground text-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-heading font-bold text-xl tracking-tight">
            <span className="bg-background text-foreground px-2 py-1">Solo_DEV</span>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-center md:text-left">
            © {new Date().getFullYear()} All rights reserved. Built with conviction.
          </p>

          {/* Back to Top */}
          <a
            href="#"
            className="font-heading font-bold text-sm uppercase tracking-wide border-[3px] border-background px-4 py-2 hover:bg-background hover:text-foreground transition-none"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
