import { useState } from "react";
import { Github, Twitter, Mail, Copy, Check, Send, Sparkles, MessageSquare, ArrowUpRight } from "lucide-react";
import { BrutalButton } from "@/components/ui/BrutalButton";
import { BrutalInput } from "@/components/ui/BrutalInput";
import { BrutalTextarea } from "@/components/ui/BrutalTextarea";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", projectType: "Web App", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/emdevelopa", color: "hover:bg-foreground hover:text-background" },
    { icon: Twitter, label: "Twitter / X", href: "https://x.com/Emwrld999", color: "hover:bg-secondary hover:text-secondary-foreground" },
    { icon: Mail, label: "Email Directly", href: "mailto:olatunbossemma17@gmail.com", color: "hover:bg-accent hover:text-accent-foreground" },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("olatunbossemma17@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger multi-color celebratory confetti explosion
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FFE600", "#0066FF", "#FF3366", "#000000"],
        });
      } catch (err) {
        console.error(err);
      }
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.span
              variants={fadeInUp}
              className="inline-block bg-foreground text-background px-4 py-1.5 font-heading font-bold text-xs uppercase tracking-wider mb-4 shadow-brutal border-[2px] border-foreground"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-[1.05] tracking-tight mb-4"
            >
              LET'S BUILD <br />
              <span className="bg-primary px-3 py-1 border-[3px] border-foreground shadow-brutal inline-block mt-1">
                SOMETHING GREAT
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto"
            >
              Ready to ship a high-performance web app, mobile system, or smart contract? Let's connect.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Direct Contact Info Card */}
            <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-6">
              <div className="border-[3px] border-foreground bg-card p-6 shadow-brutal-lg">
                <h3 className="font-heading font-bold text-xl uppercase tracking-wide mb-3 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Quick Connect
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                  Direct email or social messages are welcome. I typically respond within a few hours.
                </p>

                {/* Email Copy Card */}
                <div className="border-[2px] border-foreground bg-muted p-3 mb-6 shadow-brutal">
                  <div className="text-[11px] font-mono text-muted-foreground uppercase font-bold mb-1">
                    Direct Email
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-bold truncate text-foreground mb-3">
                    olatunbossemma17@gmail.com
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCopyEmail}
                    className="w-full flex items-center justify-center gap-2 border-[2px] border-foreground bg-card py-2 font-heading font-bold text-xs uppercase shadow-brutal hover:bg-primary transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Social Badges */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono text-muted-foreground uppercase font-bold mb-2">
                    Social & Code Repos
                  </div>
                  <div className="flex flex-col gap-2">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center justify-between border-[2px] border-foreground bg-card px-4 py-2.5 font-heading font-bold text-xs uppercase shadow-brutal ${social.color} transition-colors`}
                      >
                        <span className="flex items-center gap-2">
                          <social.icon className="w-4 h-4" />
                          {social.label}
                        </span>
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Interactive Contact Form */}
            <motion.div variants={fadeInUp} className="lg:col-span-7">
              <div className="border-[3px] border-foreground bg-card p-6 md:p-8 shadow-brutal-xl">
                <h3 className="font-heading font-bold text-2xl uppercase tracking-tight mb-2">
                  Send a Message
                </h3>
                <p className="font-body text-xs sm:text-sm text-muted-foreground mb-6">
                  Fill out the details below to start a conversation about your project.
                </p>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="border-[3px] border-foreground bg-primary/20 p-8 text-center shadow-brutal space-y-4"
                    >
                      <div className="inline-flex p-3 bg-primary border-[2px] border-foreground shadow-brutal rounded-full">
                        <Sparkles className="w-8 h-8 text-foreground" />
                      </div>
                      <h4 className="font-heading font-black text-2xl uppercase">
                        Message Sent Successfully!
                      </h4>
                      <p className="font-body text-sm text-foreground/90 max-w-sm mx-auto">
                        Thank you for reaching out, <span className="font-bold">{formState.name}</span>. I'll review your project details and get back to you shortly.
                      </p>
                      <BrutalButton
                        size="sm"
                        variant="default"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormState({ name: "", email: "", projectType: "Web App", message: "" });
                        }}
                      >
                        Send Another Note
                      </BrutalButton>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-1.5">
                          Your Name *
                        </label>
                        <BrutalInput
                          required
                          placeholder="e.g. Alex Morgan"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-1.5">
                          Your Email *
                        </label>
                        <BrutalInput
                          type="email"
                          required
                          placeholder="alex@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-1.5">
                          Project Type
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {["Web App", "Smart Contract", "Mobile App"].map((type) => (
                            <button
                              type="button"
                              key={type}
                              onClick={() => setFormState({ ...formState, projectType: type })}
                              className={`border-[2px] border-foreground py-2 text-xs font-heading font-bold uppercase transition-colors shadow-brutal ${
                                formState.projectType === type
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-foreground hover:bg-card"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block font-heading font-bold text-xs uppercase tracking-wider mb-1.5">
                          Project Scope & Details *
                        </label>
                        <BrutalTextarea
                          required
                          rows={4}
                          placeholder="Tell me about your goals, timelines, and technical requirements..."
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        />
                      </div>

                      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                        <BrutalButton
                          type="submit"
                          size="lg"
                          variant="default"
                          disabled={isSubmitting}
                          className="w-full gap-2"
                        >
                          {isSubmitting ? (
                            <span>Sending...</span>
                          ) : (
                            <>
                              <span>Send Project Inquiry</span>
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </BrutalButton>
                      </motion.div>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
