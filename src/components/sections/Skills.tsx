import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { skills } from "../../data/portfolio";

const categoryConfig: Record<string, { color: string; icon: string }> = {
  Languages: { color: "#00D4FF", icon: "{ }" },
  Frontend: { color: "#BD00FF", icon: "</>" },
  Backend: { color: "#00FF9F", icon: "[  ]" },
  Tools: { color: "#FFB800", icon: "⚙" },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const tagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: i * 0.04,
      ease: "backOut",
    },
  }),
};

type SkillCardProps = {
  category: string;
  items: string[];
  index: number;
  inView: boolean;
};

function SkillCard({ category, items, index, inView }: SkillCardProps) {
  const config = categoryConfig[category] ?? { color: "#00D4FF", icon: "◆" };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative bg-cyber-dark border border-cyber-border p-6 rounded hover:border-cyber-blue/40 transition-colors duration-300"
    >
      <div
        className="absolute top-0 left-0 w-0 h-0 group-hover:w-8 group-hover:h-8 transition-all duration-300 rounded-tl"
        style={{
          background: `${config.color}20`,
          borderRight: `1px solid ${config.color}40`,
          borderBottom: `1px solid ${config.color}40`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-0 h-0 group-hover:w-8 group-hover:h-8 transition-all duration-300 rounded-br"
        style={{
          background: `${config.color}20`,
          borderLeft: `1px solid ${config.color}40`,
          borderTop: `1px solid ${config.color}40`,
        }}
      />

      <div className="flex items-center gap-3 mb-5">
        <span
          className="font-mono text-lg font-bold w-10 h-10 flex items-center justify-center border rounded"
          style={{
            color: config.color,
            borderColor: `${config.color}40`,
            background: `${config.color}10`,
          }}
        >
          {config.icon}
        </span>
        <div>
          <h3
            className="font-display font-bold text-sm tracking-widest uppercase"
            style={{ color: config.color }}
          >
            {category}
          </h3>
          <p className="font-mono text-xs text-cyber-muted">
            {items.length} technologies
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <motion.span
            key={skill}
            custom={i}
            variants={tagVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            whileHover={{ scale: 1.1 }}
            className="font-mono text-xs px-3 py-1.5 border rounded-full cursor-default transition-colors duration-200"
            style={{
              borderColor: `${config.color}30`,
              color: "#C8D6F0",
              background: `${config.color}08`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = config.color;
              el.style.color = config.color;
              el.style.background = `${config.color}15`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = `${config.color}30`;
              el.style.color = "#C8D6F0";
              el.style.background = `${config.color}08`;
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const skillEntries = Object.entries(skills);

  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyber-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-cyber-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          label="Skills"
          title="What I Work With"
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillEntries.map(([category, items], index) => (
            <SkillCard
              key={category}
              category={category}
              items={items}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-6 border border-cyber-border bg-cyber-dark/50 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="font-display text-white font-semibold">
              Always learning
            </p>
            <p className="font-mono text-xs text-cyber-muted mt-1">
              Currently exploring:{" "}
              <span className="text-cyber-green">AI/ML integrations</span> and{" "}
              <span className="text-cyber-blue">Web3 development</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-cyber-green"
            />
            <span className="font-mono text-xs text-cyber-green">
              Actively upskilling
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
