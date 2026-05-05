import { ArrowUpRight, Asterisk } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: "12+",
    label: "YEARS IN BUSINESS",
    sublabel: "IT solutions since 2014",
    offset: "mt-0",
  },
  {
    value: "100+",
    label: "CLIENTS SERVED",
    sublabel: "Startups to enterprises",
    offset: "mt-20",
  },
  {
    value: "70+",
    label: "PROJECTS DELIVERED",
    sublabel: "On time, on budget",
    offset: "mt-6",
  },
  {
    value: "50+",
    label: "CERTIFIED PARTNERS",
    sublabel: "Hosting, cloud & SSL",
    offset: "mt-20",
  },
];

function CountUp({
  to,
  duration = 1400,
  play = true,
}: {
  to: string;
  duration?: number;
  play?: boolean;
}) {
  const [display, setDisplay] = useState("0");
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!play) {
      setDisplay("0");
      return;
    }

    const match = /^([\d,\.]+)(.*)$/.exec(to.trim());
    if (!match) {
      setDisplay(to);
      return;
    }
    const [, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ""));
    if (isNaN(target)) {
      setDisplay(to);
      return;
    }

    const start = performance.now();
    const startVal = 0;
    const endVal = target;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(t);
      const current = startVal + (endVal - startVal) * eased;

      const hasDecimal = numStr.includes(".");
      const formatted = hasDecimal
        ? current.toFixed(1)
        : Math.round(current).toLocaleString();

      setDisplay(`${formatted}${suffix}`);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        const finalFormatted = hasDecimal
          ? parseFloat(endVal.toString()).toFixed(1)
          : Math.round(endVal).toLocaleString();
        setDisplay(`${finalFormatted}${suffix}`);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [to, duration, play]);

  return <>{display}</>;
}

const Choose = () => {
  const leftColVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 12, scale: 0.985 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
    hover: { y: -6, scale: 1.02, transition: { duration: 0.18 } },
  };

  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 py-20 font-lato"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div className="flex flex-col gap-3" variants={leftColVariants}>
          <div className="flex gap-1">
            <Asterisk className="text-gray-400" size={20} />
            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-widest text-white"
            >
              WHY CHOOSE US
            </motion.h3>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-extralight text-5xl leading-tight mb-8"
          >
            Why Businesses Globally Choose Connectia As Their IT Partner?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-xl mb-6"
          >
            Businesses choose Connectia as their trusted technology partner
            company because we combine technical expertise with a strong focus
            on results. As an experienced IT solutions company in Bangalore, our
            approach ensures every project aligns with business goals and
            delivers measurable outcomes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-xl mb-8"
          >
            We combine technical expertise with a strong focus on results. As an
            experienced IT solutions company in Bangalore, our approach ensures
            every project aligns with business goals and delivers measurable
            outcomes.
          </motion.p>

          <motion.div
            initial="initial"
            whileHover="hover"
            className="mt-3 flex gap-1 items-center"
          >
            <motion.a
              href="/contact"
              className="flex items-center gap-3 bg-neutral-800 text-white px-6 py-3 font-semibold rounded-full"
            >
              Start a Conversation
            </motion.a>
            <motion.a
              href="/contact"
              variants={{
                initial: { rotate: 0 },
                hover: { rotate: 45 },
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-11 h-11 rounded-full bg-gray-400 text-black flex items-center justify-center"
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="relative">
          <motion.div
            className="grid grid-cols-2 gap-x-8 gap-y-6"
            initial="hidden"
            variants={containerVariants}
          >
            {stats.map((s, i) => {
              const cardRef = useRef<HTMLDivElement | null>(null);
              const isInView = useInView(cardRef, { once: true, amount: 0.4 });

              return (
                <motion.div
                  key={s.label}
                  ref={cardRef}
                  className={`${s.offset} w-64 md:w-72 bg-[#0f0f0f] p-6 md:p-8 rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.6)]`}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover="hover"
                  style={{ originY: 0.5 }}
                >
                  <div className="text-[56px] md:text-[72px] font-extrabold text-white leading-none">
                    <CountUp
                      to={s.value}
                      duration={1500 + i * 200}
                      play={isInView}
                    />
                  </div>
                  <div className="uppercase tracking-wide text-sm text-gray-300 mt-3">
                    {s.label}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{s.sublabel}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Choose;
