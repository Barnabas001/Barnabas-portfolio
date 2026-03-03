import { motion, type Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../../data/portfolio";
import { useTypewriter } from "../../hooks/useTypewriter";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  const roles = [
    "Frontend Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Open Source Contributor",
  ];

  const typedText = useTypewriter(roles, 80, 1800);

  return (
    <section
      id="home"
      className="'relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Background Effects ── */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none opacity-[.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,.5)1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(transparent 50%, rgba(0,0,0,0.03) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* ── Main Content ── */}
      <div className="section-container relative z-10 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="font-mono text-cyber-green text-sm tracking-widest">
              <span className="test-cyber-muted">$</span>./hello_world.sh
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-mono text-cyber-blue text-lg mb-3"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display font-black leading-none mb-4"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            {personalInfo.name.split(" ").map((word, i) => (
              <span
                key={i}
                className={
                  i === 0
                    ? "text-white"
                    : "text-transparent bg-clip-text bg-linear-to-r from-cyber-blue to-cyber-purple"
                }
              >
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-8 h-10"
          >
            <span className="font-display text-2xl md:text-4xl text-cyber-muted font-light">
              {typedText}
            </span>

            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="font-display text-2xl md:text-4xl text-cyber-blue"
            >
              _
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-cyber-text text-lg max-w-xl leading-relaxed mb-10 font-light"
          >
            I build exceptional digital experiences with clean code and
            thoughtful design. Focused on performance, accessibility, and
            pushing the boundaries of what's possible on the web.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#projects"
              className="group relative font-mono text-sm px-8 py-4 bg-cyber-blue text-cyber-black font-bold tracking-wider hover:bg-cyber-blue/90 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-white/20 skew-x-12 transition-transform duration-700" />
              VIEW PROJECTS
            </a>

            <a
              href="#contact"
              className="font-mono text-sm px-8 py-4 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300 tracking-wider"
            >
              CONTACT ME
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6"
          >
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
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-cyber-muted hover:text-cyber-blue transition-colors duration-300 hover:-translate-y-1 transform"
              >
                <Icon size={22} />
              </a>
            ))}

            <div className="w-24 h-px bg-cyber-border" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cyber-muted"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-cyber-blue" />
        </motion.div>
      </motion.div>
    </section>
  );
}
