import { useState, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { personalInfo } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";

// Form field shape
type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Submission status
type Status = "idle" | "sending" | "success" | "error";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Social links shown on left side
const socials = [
  {
    icon: Github,
    label: "GitHub",
    value: "@AffonshikeBarn1",
    href: personalInfo.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Barnabas Affonshike",
    href: personalInfo.linkedin,
  },
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
];

// Reusable input field component
type InputProps = {
  label: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
  placeholder?: string;
  error?: string;
};

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
}: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      {/* Floating label */}
      <label
        className={`
          absolute left-3 transition-all duration-200 pointer-events-none font-mono text-xs z-10
          ${
            focused || value
              ? "-top-2.5 text-cyber-blue bg-cyber-dark px-1"
              : "top-3.5 text-cyber-muted"
          }
        `}
      >
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={focused ? placeholder : ""}
        className={`
          w-full bg-cyber-dark border px-4 py-3.5 font-mono text-sm text-cyber-text
          outline-none transition-all duration-300 rounded
          ${
            error
              ? "border-red-500/60 focus:border-red-500"
              : focused
                ? "border-cyber-blue/60"
                : "border-cyber-border hover:border-cyber-border/80"
          }
        `}
      />

      {/* Error message */}
      {error && (
        <p className="mt-1 font-mono text-xs text-red-400 flex items-center gap-1">
          <AlertCircle size={10} />
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  const updateField = (field: keyof FormState) => (val: string) => {
    setForm((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email";

    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 20)
      newErrors.message = "Message must be at least 20 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setStatus("sending");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-cyber-blue/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyber-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          label="Contact"
          title="Get In Touch"
          subtitle="Have a project in mind or just want to chat? My inbox is always open."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16"
        >
          {/* ── LEFT: Info panel ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <motion.p
              variants={itemVariants}
              className="text-cyber-muted leading-relaxed mb-10 text-lg"
            >
              I'm currently open to new opportunities — whether it's a full-time
              role, freelance project, or just an interesting conversation.
              Don't hesitate to reach out!
            </motion.p>

            {/* Social links */}
            <div className="space-y-4">
              {socials.map(({ icon: Icon, label, value, href }) => (
                <motion.div
                  key={label}
                  variants={itemVariants}
                  className="flex items-center gap-4 group"
                >
                  {/* Icon box */}
                  <div className="w-10 h-10 border border-cyber-border bg-cyber-dark rounded flex items-center justify-center shrink-0 group-hover:border-cyber-blue/40 transition-colors duration-300">
                    <Icon size={16} className="text-cyber-blue" />
                  </div>

                  <div>
                    <p className="font-mono text-xs text-cyber-muted mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-sm text-cyber-text hover:text-cyber-blue transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-mono text-sm text-cyber-text">
                        {value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability badge */}
            <motion.div
              variants={itemVariants}
              className="mt-10 inline-flex items-center gap-3 border border-cyber-green/30 bg-cyber-green/5 px-4 py-3 rounded"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-cyber-green shrink-0"
              />
              <span className="font-mono text-xs text-cyber-green">
                Available for new projects
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-cyber-dark border border-cyber-border rounded p-8 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-cyber-blue via-cyber-purple to-cyber-green rounded-t" />

            {/* Success state */}
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                  <CheckCircle size={48} className="text-cyber-green mb-4" />
                </motion.div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="font-mono text-sm text-cyber-muted mb-6">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="font-mono text-xs text-cyber-blue border border-cyber-blue/40 px-4 py-2 hover:bg-cyber-blue/10 transition-colors rounded"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="Name *"
                    value={form.name}
                    onChange={updateField("name")}
                    placeholder="Barnabas Affonshike"
                    error={errors.name}
                  />
                  <Field
                    label="Email *"
                    value={form.email}
                    onChange={updateField("email")}
                    type="email"
                    placeholder="barnabas@example.com"
                    error={errors.email}
                  />
                </div>

                <Field
                  label="Subject"
                  value={form.subject}
                  onChange={updateField("subject")}
                  placeholder="Project inquiry..."
                />

                <div className="relative">
                  <label
                    className={`
                      absolute left-3 transition-all duration-200 pointer-events-none font-mono text-xs z-10
                      ${form.message ? "-top-2.5 text-cyber-blue bg-cyber-dark px-1" : "top-3.5 text-cyber-muted"}
                    `}
                  >
                    Message *
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => updateField("message")(e.target.value)}
                    rows={5}
                    className={`
                      w-full bg-transparent border px-4 py-3.5 font-mono text-sm text-cyber-text
                      outline-none transition-all duration-300 rounded resize-none
                      ${
                        errors.message
                          ? "border-red-500/60 focus:border-red-500"
                          : "border-cyber-border hover:border-cyber-border/80 focus:border-cyber-blue/60"
                      }
                    `}
                  />
                  {errors.message && (
                    <p className="mt-1 font-mono text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={10} />
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 border border-red-500/30 bg-red-500/5 px-4 py-3 rounded font-mono text-xs"
                  >
                    <AlertCircle size={14} />
                    Something went wrong. Please try again or email directly.
                  </motion.div>
                )}

                <motion.button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  whileHover={{ scale: status === "sending" ? 1 : 1.01 }}
                  whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                  className={`
                    w-full flex items-center justify-center gap-3
                    font-mono text-sm font-bold tracking-wider py-4 rounded
                    transition-all duration-300 relative overflow-hidden
                    ${
                      status === "sending"
                        ? "bg-cyber-blue/50 text-cyber-black cursor-not-allowed"
                        : "bg-cyber-blue text-cyber-black hover:bg-cyber-blue/90 cursor-pointer"
                    }
                  `}
                >
                  {status === "sending" ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-cyber-black/30 border-t-cyber-black rounded-full"
                      />
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      SEND MESSAGE
                    </>
                  )}
                </motion.button>

                <p className="font-mono text-xs text-cyber-muted text-center">
                  Or reach me directly at{" "}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-cyber-blue hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
