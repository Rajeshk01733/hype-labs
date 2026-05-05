// CTA.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

type CTAProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  buttonText?: React.ReactNode;
  buttonHref?: string;
  onButtonClick?: () => void;
  // optional styling overrides
  fromColor?: string; // e.g. "purple-600"
  toColor?: string; // e.g. "blue-600"
  children?: React.ReactNode; // allow full custom content if needed
  className?: string;
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CTA: React.FC<CTAProps> = ({
  title = "Ready to scale your brand?",
  subtitle = "Let's collaborate to build something extraordinary. We help ambitious brands define their future.",
  buttonText = "Start a Project",
  buttonHref,
  onButtonClick,
  fromColor = "purple-600",
  toColor = "blue-600",
  children,
  className = "",
}) => {
  // NOTE: dynamic tailwind gradient classes (from-${fromColor}) require that
  // those classes are whitelisted at build-time or present in your CSS safelist.
  const gradient = `bg-gradient-to-r from-${fromColor} to-${toColor}`;

  return (
    <section
      className={`relative py-32 px-4 overflow-hidden font-lato ${className} mb-5`}
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-neutral-950" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        className="relative max-w-5xl mx-auto text-center z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
      >
        {children ? (
          <div>{children}</div>
        ) : (
          <>
            <motion.h2
              id="cta-heading"
              className="font-display font-bold text-4xl md:text-6xl text-white mb-8 tracking-tight"
              variants={itemUp}
            >
              {title}
            </motion.h2>

            <motion.p
              className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
              variants={itemUp}
            >
              {subtitle}
            </motion.p>

            <motion.div variants={itemUp}>
              {buttonHref ? (
                <motion.a
                  href={buttonHref}
                  className={`group relative inline-flex items-center gap-3 px-8 py-4 ${gradient} rounded-full text-white font-bold text-lg overflow-hidden transition-all focus:outline-none focus:ring-4 focus:ring-white/20`}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 40px rgba(124,58,237,0.25)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <span className="relative z-10">{buttonText}</span>

                  <motion.span
                    className="relative z-10"
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    aria-hidden
                  >
                    <ArrowRight />
                  </motion.span>

                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.a>
              ) : (
                <motion.button
                  onClick={onButtonClick}
                  className={`group relative inline-flex items-center gap-3 px-8 py-4 ${gradient} rounded-full text-white font-bold text-lg overflow-hidden transition-all focus:outline-none focus:ring-4 focus:ring-white/20`}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 40px rgba(124,58,237,0.25)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <span className="relative z-10">{buttonText}</span>

                  <motion.span
                    className="relative z-10"
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    aria-hidden
                  >
                    <ArrowRight />
                  </motion.span>

                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.button>
              )}
            </motion.div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default CTA;