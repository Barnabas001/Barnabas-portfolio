import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SectionHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeader({
  label,
  title,
  subtitle,
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="mb-16">
      {/* Small numbered label */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="font-mono text-cyber-blue text-sm tracking-widest mb-3"
      >
        {label}
      </motion.p>

      {/* Main heading with animated underline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative inline-block"
      >
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
          {title}
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-2 left-0 h-0.75 w-full bg-linear-to-r from-cyber-blue to-cyber-purple origin-left"
        />
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-cyber-muted text-lg max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
