import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  type Variants,
} from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { experiences } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";

// Each timeline entry animates in from alternating sides
const entryVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

type ExperienceEntryProps = {
  experience: (typeof experiences)[0];
  index: number;
  inView: boolean;
};

function ExperienceEntry({ experience, index, inView }: ExperienceEntryProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      custom={index}
      variants={entryVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 mb-12"
    >
      <div
        className={`${isEven ? "md:text-right" : "md:col-start-3"} md:block`}
      >
        {isEven ? (
          <EntryContent experience={experience} align="right" />
        ) : (
          // Empty spacer on mobile hidden, visible on desktop
          <div className="hidden md:block" />
        )}
      </div>

      <div className="hidden md:flex flex-col items-center gap-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{
            delay: index * 0.15 + 0.3,
            type: "spring",
            stiffness: 200,
          }}
          className="relative z-10 w-4 h-4 rounded-full bg-cyber-blue border-2 border-cyber-black shrink-0"
        >
          <motion.div
            animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
            className="absolute inset-0 rounded-full bg-cyber-blue/30"
          />
        </motion.div>
      </div>

      <div className={isEven ? "hidden md:block" : ""}>
        {!isEven ? (
          <EntryContent experience={experience} align="left" />
        ) : (
          <div className="hidden md:block" />
        )}
      </div>

      {/* Mobile: always show content (no alternating on small screens) */}
      <div className="md:hidden col-span-full">
        <EntryContent experience={experience} align="left" />
      </div>
    </motion.div>
  );
}

// ── The actual card content ──────────────────────────────────────────
type ContentProps = {
  experience: (typeof experiences)[0];
  align: "left" | "right";
};

function EntryContent({ experience, align }: ContentProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-cyber-dark border border-cyber-border p-6 rounded hover:border-cyber-blue/40 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-12 h-12 bg-linear-to-br from-cyber-blue/10 to-transparent pointer-events-none" />

      {/* Role + Company */}
      <div
        className={`flex items-start gap-3 mb-3 ${align === "right" ? "flex-row-reverse" : ""}`}
      >
        <div className="w-9 h-9 rounded border border-cyber-blue/30 bg-cyber-blue/5 flex items-center justify-center shrink-0 mt-0.5">
          <Briefcase size={16} className="text-cyber-blue" />
        </div>
        <div className={align === "right" ? "text-right" : ""}>
          <h3 className="font-display font-bold text-white group-hover:text-cyber-blue transition-colors duration-300">
            {experience.role}
          </h3>
          <p className="font-mono text-cyber-blue text-sm">
            {experience.company}
          </p>
        </div>
      </div>

      {/* Period */}
      <div
        className={`flex items-center gap-1.5 mb-4 ${align === "right" ? "justify-end" : ""}`}
      >
        <Calendar size={12} className="text-cyber-muted" />
        <span className="font-mono text-xs text-cyber-muted">
          {experience.period}
        </span>
      </div>

      <ul className="space-y-2 mb-4">
        {experience.description.map((point, i) => (
          <li
            key={i}
            className={`flex items-start gap-2 text-sm text-cyber-muted ${align === "right" ? "flex-row-reverse text-right" : ""}`}
          >
            <ChevronRight
              size={14}
              className="text-cyber-blue shrink-0 mt-0.5"
            />
            {point}
          </li>
        ))}
      </ul>

      <div
        className={`flex flex-wrap gap-2 ${align === "right" ? "justify-end" : ""}`}
      >
        {experience.tech.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs text-cyber-blue/60 border border-cyber-blue/20 px-2 py-0.5 rounded bg-cyber-blue/5"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ── Main Section ─────────────────────────────────────────────────────
export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Track scroll progress through the timeline element
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 relative" ref={sectionRef}>
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-linear-to-b from-transparent via-cyber-blue/10 to-transparent pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          label="Experience"
          title="Where I've Worked"
          subtitle="My professional journey and the impact I've made along the way."
        />

        <div ref={timelineRef} className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-cyber-border" />

          <motion.div
            style={{ height: lineHeight }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-px bg-linear-to-b from-cyber-blue via-cyber-purple to-cyber-green origin-top"
          />

          <div className="relative z-10">
            {experiences.map((exp, i) => (
              <ExperienceEntry
                key={exp.company}
                experience={exp}
                index={i}
                inView={inView}
              />
            ))}
          </div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-0 w-4 h-4 rounded-full bg-cyber-purple border-2 border-cyber-black items-center justify-center"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="font-mono text-cyber-muted text-sm mb-4">
            Want to know more about my journey?
          </p>
          <a
            href="/src/BARNABAS-OLAYINKA-AFFONSHIKE-CV.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 font-mono text-sm text-cyber-blue border border-cyber-blue px-8 py-3 hover:bg-cyber-blue/10 transition-all duration-300 group"
          >
            Download Full Resume
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
