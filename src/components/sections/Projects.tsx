import { useState, useMemo, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  type Variants,
} from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import type { Project } from "../../types";

const filters = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
};

type ProjectCardProps = { project: Project; index: number; inView: boolean };

function FeaturedCard({ project, index, inView }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      layout
      key={project.id}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="exit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-cyber-dark border border-cyber-border rounded overflow-hidden hover:border-cyber-blue/40 transition-colors duration-300"
    >
      {/* Top color bar — grows on hover */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-cyber-blue to-cyber-purple origin-left"
      />

      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-cyber-blue/30 flex items-center justify-center rounded bg-cyber-blue/5">
              <span className="font-mono text-cyber-blue text-lg">{"{ }"}</span>
            </div>
            {project.featured && (
              <span className="flex items-center gap-1 font-mono text-xs text-cyber-green border border-cyber-green/30 px-2 py-0.5 rounded-full bg-cyber-green/5">
                <Star size={10} fill="currentColor" />
                Featured
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-cyber-muted hover:text-cyber-blue transition-colors duration-200"
                aria-label="View source code"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-cyber-muted hover:text-cyber-blue transition-colors duration-200"
                aria-label="View live project"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-cyber-blue transition-colors duration-300">
          {project.title}
        </h3>

        <div className="relative mb-6 min-h-12">
          <AnimatePresence mode="wait">
            <motion.p
              key={hovered ? "long" : "short"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="text-cyber-muted text-sm leading-relaxed"
            >
              {hovered ? project.longDescription : project.description}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-cyber-blue/70 border border-cyber-blue/20 px-2 py-1 rounded bg-cyber-blue/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <motion.div
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
        transition={{ duration: 0.3 }}
        className="px-8 py-4 border-t border-cyber-border bg-cyber-black/30 flex items-center gap-2"
      >
        <span className="font-mono text-xs text-cyber-muted">
          $ cd ./{project.title.toLowerCase().replace(/ /g, "-")}
        </span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-cyber-blue font-mono text-xs"
        >
          |
        </motion.span>
      </motion.div>
    </motion.article>
  );
}

function SmallCard({ project, index, inView }: ProjectCardProps) {
  return (
    <motion.article
      layout
      key={project.id}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="exit"
      whileHover={{ y: -4 }}
      className="group bg-cyber-dark border border-cyber-border p-6 rounded hover:border-cyber-blue/30 transition-colors duration-300 flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-cyber-blue text-2xl">◆</span>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-cyber-muted hover:text-cyber-blue transition-colors"
            >
              <Github size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-cyber-muted hover:text-cyber-blue transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-display font-bold text-white mb-2 group-hover:text-cyber-blue transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-cyber-muted text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.slice(0, 3).map((tech) => (
          <span key={tech} className="font-mono text-xs text-cyber-muted">
            {tech}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="font-mono text-xs text-cyber-blue">
            +{project.tech.length - 3}
          </span>
        )}
      </div>
    </motion.article>
  );
}

// ── Main Section ────────────────────────────────────────────────────
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          label="Projects"
          title="Things I've Built"
          subtitle="A selection of projects that showcase my range and approach to problem solving."
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`
                relative font-mono text-sm px-5 py-2 border rounded transition-all duration-300
                ${
                  activeFilter === filter.value
                    ? "border-cyber-blue text-cyber-blue bg-cyber-blue/10"
                    : "border-cyber-border text-cyber-muted hover:border-cyber-blue/40 hover:text-cyber-text"
                }
              `}
            >
              {/* Active indicator dot */}
              {activeFilter === filter.value && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 border border-cyber-blue rounded bg-cyber-blue/10 -z-10"
                />
              )}
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div ref={ref}>
          <AnimatePresence mode="wait">
            {featuredProjects.length > 0 && (
              <motion.div
                key={`featured-${activeFilter}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
              >
                {featuredProjects.map((project, i) => (
                  <FeaturedCard
                    key={project.id}
                    project={project}
                    index={i}
                    inView={inView}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {otherProjects.length > 0 && (
              <motion.div
                key={`other-${activeFilter}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {otherProjects.map((project, i) => (
                  <SmallCard
                    key={project.id}
                    project={project}
                    index={i}
                    inView={inView}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <p className="font-mono text-cyber-muted">
                  No projects in this category yet.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
