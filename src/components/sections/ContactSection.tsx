import { useState } from "react";
import {
  IconBrandGithub,
  IconBrandX,
  IconMail,
  IconCopy,
  IconCheck,
  IconArrowUpRight,
  IconSend
} from "@tabler/icons-react";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [projectType, setProjectType] = useState<string>("Web App");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = ["Web App", "Smart Contract", "Mobile App", "Full-Stack"];

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
      setFormState({ name: "", email: "", message: "" });
    }, 700);
  };

  return (
    <section id="contact" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Tag */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7C5A48] font-semibold block mb-2">
            Transmission / 06
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#281D19]">
            Let's Build Something Great.
          </h2>
          <p className="text-sm sm:text-base text-[#281D19]/70 mt-3 max-w-xl">
            Have a project in mind, an architectural challenge, or a protocol to ship? Reach out directly.
          </p>
        </div>

        {/* 2-Column Responsive Layout (Inspired by References 1, 2 & 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Dark Live Station & Telemetry Card (Inspired by Reference 2) */}
          <div className="lg:col-span-5 bg-[#281D19] text-[#F4F1EA] rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] p-6 sm:p-10 lg:p-12 flex flex-col justify-between select-none">
            <div>
              {/* Telemetry Status Pill (Inspired by Image 2) */}
              <div className="inline-flex items-center gap-2.5 bg-[#3D2C26] px-4 py-2 rounded-full text-xs font-mono mb-8">
                <span className="text-[#F4F1EA] font-semibold">Available for Work</span>
              </div>

              {/* Identity & Direct Narrative */}
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F4F1EA] leading-snug">
                Production-grade logic. Rapid execution. Zero fluff.
              </h3>
              <p className="text-sm text-[#F4F1EA]/75 leading-relaxed mt-4">
                Based in Accra (GMT+0) / remote worldwide. Specializing in high-concurrency web systems, verified smart contracts, and cross-platform native apps.
              </p>

              {/* Direct Quick-Copy Email Pill */}
              <div className="mt-8 pt-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#A36C52] block mb-2 font-semibold">
                  Direct Channel
                </span>
                <div
                  onClick={handleCopyEmail}
                  className="bg-[#3D2C26] hover:bg-[#4E3932] transition-colors rounded-2xl p-4 flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <IconMail className="w-4 h-4 text-[#DFA588] shrink-0" />
                    <span className="text-xs sm:text-sm font-mono truncate text-[#F4F1EA]">
                      olatunbossemma17@gmail.com
                    </span>
                  </div>

                  <button
                    className="p-1.5 rounded-lg bg-[#281D19] text-[#DFA588] shrink-0 transition-transform active:scale-95"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <IconCheck className="w-4 h-4 text-green-400" />
                    ) : (
                      <IconCopy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Social Channels Row */}
            <div className="pt-10 mt-8 border-t-0 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/emdevelopa"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#3D2C26] hover:bg-[#4E3932] text-[#F4F1EA] px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-colors"
              >
                <IconBrandGithub className="w-4 h-4" />
                <span>GitHub</span>
                <IconArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href="https://x.com/Emwrld999"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#3D2C26] hover:bg-[#4E3932] text-[#F4F1EA] px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-colors"
              >
                <IconBrandX className="w-4 h-4" />
                <span>Twitter / X</span>
                <IconArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Project Inquiry Terminal (Inspired by Reference 1 & 3) */}
          <div className="lg:col-span-7 bg-[#F4F1EA] text-[#281D19] rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] p-6 sm:p-10 lg:p-12 flex flex-col justify-between select-none">
            <div>
              <div className="flex items-center justify-between pb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#7C5A48] font-semibold">
                  Project Inquiry
                </span>
                <span className="text-xs font-mono opacity-50">INIT_FORM.REQ</span>
              </div>

              {isSubmitted ? (
                <div className="py-16 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#281D19] text-[#F4F1EA] flex items-center justify-center mx-auto">
                    <IconCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#281D19]">
                    Transmission Received.
                  </h4>
                  <p className="text-sm text-[#281D19]/70 max-w-sm mx-auto">
                    Thank you for reaching out. I'll review your project scope and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-xs font-mono underline font-semibold text-[#7C5A48] cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7C5A48] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="e.g. Alex Rivera"
                      className="w-full bg-[#EBE6DE] text-[#281D19] placeholder-[#281D19]/40 rounded-2xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:bg-[#E2DCD3] transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7C5A48] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="e.g. alex@studio.com"
                      className="w-full bg-[#EBE6DE] text-[#281D19] placeholder-[#281D19]/40 rounded-2xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:bg-[#E2DCD3] transition-all"
                    />
                  </div>

                  {/* Project Type Pill Selector (Inspired by Reference 3) */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7C5A48] mb-2.5">
                      Project Domain
                    </label>
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                      {projectTypes.map((type) => {
                        const isSelected = projectType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setProjectType(type)}
                            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all text-center ${isSelected
                              ? "bg-[#281D19] text-[#F4F1EA] font-bold"
                              : "bg-[#EBE6DE] text-[#281D19] hover:bg-[#DFD8CE]"
                              }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#7C5A48] mb-2">
                      Project Scope &amp; Timeline
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell me about your goals, stack preferences, and target launch date..."
                      className="w-full bg-[#EBE6DE] text-[#281D19] placeholder-[#281D19]/40 rounded-2xl p-5 text-sm font-medium focus:outline-none focus:bg-[#E2DCD3] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#281D19] hover:bg-black text-[#F4F1EA] font-bold text-sm tracking-wide uppercase px-7 py-4 rounded-2xl flex items-center justify-center gap-2 transition-transform active:scale-[0.99] cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <span>Send Transmission</span>
                          <IconSend className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
