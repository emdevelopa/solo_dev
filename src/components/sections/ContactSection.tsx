import { BrutalButton } from "@/components/ui/BrutalButton";
import { BrutalInput } from "@/components/ui/BrutalInput";
import { BrutalTextarea } from "@/components/ui/BrutalTextarea";
import { BrutalCard } from "@/components/ui/BrutalCard";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Form submitted! (This is a demo)");
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <div>
            <span className="inline-block bg-foreground text-background px-4 py-2 font-heading font-bold text-sm uppercase tracking-wider mb-6">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] tracking-tight mb-6">
              LET'S BUILD
              <br />
              <span className="bg-primary px-2">TOGETHER</span>
            </h2>
            <p className="font-body text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Have a project in mind? Need a developer who delivers? 
              <span className="font-bold"> Let's talk.</span>
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="inline-flex items-center gap-2 border-[3px] border-foreground bg-card px-4 py-2 font-heading font-bold text-sm uppercase tracking-wide brutal-shadow brutal-hover"
                >
                  <social.icon className="h-5 w-5" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <BrutalCard shadow="xl" className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-heading font-bold text-sm uppercase tracking-wide mb-2 block">
                    Name
                  </label>
                  <BrutalInput
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="font-heading font-bold text-sm uppercase tracking-wide mb-2 block">
                    Email
                  </label>
                  <BrutalInput
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="font-heading font-bold text-sm uppercase tracking-wide mb-2 block">
                  Project Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Mobile App", "Web App", "Smart Contract", "Other"].map((type) => (
                    <label key={type} className="cursor-pointer">
                      <input type="radio" name="projectType" value={type} className="sr-only peer" />
                      <div className="border-[2px] border-foreground px-3 py-2 text-center font-body text-sm font-medium peer-checked:bg-primary peer-checked:text-primary-foreground transition-none">
                        {type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-heading font-bold text-sm uppercase tracking-wide mb-2 block">
                  Message
                </label>
                <BrutalTextarea
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <BrutalButton type="submit" size="lg" variant="default" className="w-full">
                Send Message
              </BrutalButton>
            </form>
          </BrutalCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
