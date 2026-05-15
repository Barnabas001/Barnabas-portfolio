import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "../../data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-cyber-border bg-cyber-dark/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyber-blue/30 to-transparent" />

      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-cyber-blue text-lg mb-1">
              {personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
              <span className="text-cyber-purple">.</span>
            </p>
            <p className="font-mono text-xs text-cyber-muted flex items-center gap-1 justify-center md:justify-start">
              Built
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.span>
              using React, TypeScript & Tailwind
            </p>
          </div>

          <div className="flex items-center gap-5">
            {[
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              {
                icon: Linkedin,
                href: personalInfo.linkedin,
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: `mailto:${personalInfo.email}`,
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -3, color: "#00D4FF" }}
                transition={{ duration: 0.2 }}
                className="text-cyber-muted transition-colors duration-200"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 font-mono text-xs text-cyber-muted hover:text-cyber-blue transition-colors duration-200 border border-cyber-border hover:border-cyber-blue/40 px-3 py-2 rounded"
          >
            <ArrowUp size={14} />
            Back to top
          </motion.button>
        </div>

        <div className="mt-8 pt-6 border-t border-cyber-border/50 text-center">
          <p className="font-mono text-xs text-cyber-muted">
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
