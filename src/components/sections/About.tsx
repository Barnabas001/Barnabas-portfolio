import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { MapPin, Code2, Lightbulb } from "lucide-react";
import { personalInfo } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import barnabas from "../../assets/barnabas.jpg";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Tech Stacks" },
  { value: "100%", label: "Passion & Dedication" },
];

const facts = [
  { icon: Code2, text: "Clean code advocate" },
  { icon: Lightbulb, text: "Always learning something new" },
  { icon: MapPin, text: personalInfo.location },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true, margin: "-80px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyber-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          label="About me"
          title="Who I Am"
          subtitle="A passionate developer who loves turning complex problems into elegant solutions."
        />

        {/* Two-column layout — stacks to single column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -60 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #00D4FF, #BD00FF, #00FF9F, #00D4FF)",
                }}
              />

              <div className="absolute inset-0.73 rounded-full bg-cyber-black" />

              <div className="absolute inset-1.25 rounded-full overflow-hidden">
                <img
                  src={barnabas}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div
                className="absolute inset-1.25 rounded-full pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 30px rgba(5, 5, 16, 0.4)",
                }}
              />

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 bg-cyber-dark border border-cyber-blue/40 px-3 py-2 rounded"
              >
                <span className="font-mono text-cyber-blue text-xs">
                  &lt;developer /&gt;
                </span>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 bg-cyber-dark border border-cyber-green/40 px-3 py-2 rounded"
              >
                <span className="font-mono text-cyber-green text-xs">
                  open_to_work: true
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            ref={rightRef}
            variants={containerVariants}
            initial="hidden"
            animate={rightInView ? "show" : "hidden"}
          >
            {/* Bio paragraphs */}
            <motion.p
              variants={itemVariants}
              className="text-cyber-text leading-relaxed mb-4 text-lg"
            >
              Hey! I'm{" "}
              <span className="text-cyber-blue font-semibold">
                {personalInfo.name}
              </span>
              , a {personalInfo.title} based in{" "}
              <span className="text-cyber-blue font-semibold">
                {personalInfo.location}
              </span>
              . I love building things that live on the internet.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-cyber-muted leading-relaxed mb-4"
            >
              My journey into tech started with curiosity — I wanted to
              understand how websites worked, and that curiosity turned into a
              passion. Today I specialize in building frontend applications with
              a focus on clean architecture and delightful user experiences.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-cyber-muted leading-relaxed mb-8"
            >
              When I'm not coding, you'll find me exploring new technologies or
              sipping coffee while reading tech blogs.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 mb-10"
            >
              {facts.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 bg-cyber-dark border border-cyber-border px-4 py-3 rounded hover:border-cyber-blue/40 transition-colors duration-300"
                >
                  <Icon size={16} className="text-cyber-blue shrink-0" />
                  <span className="font-mono text-xs text-cyber-muted">
                    {text}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="/src/BARNABAS-OLAYINKA-AFFONSHIKE-CV.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 font-mono text-sm text-cyber-blue border border-cyber-blue px-6 py-3 hover:bg-cyber-blue/10 transition-all duration-300 group"
            >
              View Resume
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* ── Stats Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mt-24 border border-cyber-border bg-cyber-border"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-cyber-dark px-8 py-8 text-center hover:bg-cyber-blue/5 transition-colors duration-300 group"
            >
              <div className="font-display text-4xl font-black text-cyber-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                {value}
              </div>
              <div className="font-mono text-xs text-cyber-muted tracking-widest uppercase">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
