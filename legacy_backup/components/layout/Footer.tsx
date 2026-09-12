import { Terminal, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t-[3px] border-foreground bg-foreground text-background">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Status */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-heading font-bold text-xl tracking-tight"
            >
              <span className="bg-background text-foreground px-3 py-1.5 flex items-center gap-2 border-[2px] border-background font-black shadow-brutal">
                <Terminal className="w-5 h-5 text-secondary" />
                Solo_DEV
              </span>
            </motion.a>
            <span className="text-xs font-mono opacity-80 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Full-Stack & Web3 Systems</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="font-body text-xs sm:text-sm text-center md:text-left opacity-90">
            © {new Date().getFullYear()} Gyimah Emmanuel Olatunbosun. Built with speed and conviction.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ y: 2 }}
            className="font-heading font-bold text-xs uppercase tracking-wider border-[2px] border-background bg-foreground px-4 py-2 hover:bg-background hover:text-foreground transition-colors shadow-brutal"
          >
            Back to Top ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
