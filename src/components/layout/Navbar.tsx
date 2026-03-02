import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, personalInfo } from "../../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.0, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-cyber-black/80 backdrop-blur-md border-b border-cyber-border py-4" : "bg-transparent py-6"}`}
      >
        <div className="section-container flex items-center justify-between">
          <a
            href="Barnabas Olayinka Affonshike"
            className="font-display text-cyber-blue font-bold text-xl tracking-widest hover:white transition-colors"
          >
            {personalInfo.name
              .split("")
              .map((n) => n[0])
              .join("")}{" "}
            <span className="text-cyber-purple">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex  items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
              >
                <a
                  href={item.href}
                  className="font-mono text-sm text-cyber-muted hover:text-cyber-blue transition-colors duration-300 group flex items-center gap-1"
                >
                  {/* <span>0{index + 1}.</span> */}
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Resume Button */}
          <motion.a
            href="/src/BARNABAS-OLAYINKA-AFFONSHIKE-CV.pdf"
            target="_blank"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden md:block font-mono text-sm text-cyber-blue border border-cyber-blue px-4 py-2 hover:bg-cyber-blue/10 transition-all duration-300"
          >
            Resume
          </motion.a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-cyber-blue z-50"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-40 bg-cyber-dark/95 backdrop-blur-lg flex flex-col items-center justify-center md:hidden"
      >
        <ul className="flex flex-col items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: menuOpen ? 0.1 * index + 0.2 : 0 }}
            >
              <a
                href="item.href"
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl text-cyber-text hover:text-cyber-blue transition-colors"
              >
                <span className="text-cyber-blue text-sm font-mono block text-center mb-1">
                  {/* 0{index + 1} */}
                </span>
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}
