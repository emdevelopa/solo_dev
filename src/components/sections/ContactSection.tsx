import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/emdevelopa" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-foreground text-background px-4 py-2 font-heading font-bold text-sm uppercase tracking-wider mb-6">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] tracking-tight mb-6">
            LET'S BUILD
            <br />
            <span className="bg-primary px-2">TOGETHER</span>
          </h2>
          <p className="font-body text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto">
            Have a project in mind? Need a developer who delivers? 
            <span className="font-bold"> Let's talk.</span>
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 border-[3px] border-foreground bg-card px-4 py-2 font-heading font-bold text-sm uppercase tracking-wide brutal-shadow brutal-hover"
              >
                <social.icon className="h-5 w-5" />
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
