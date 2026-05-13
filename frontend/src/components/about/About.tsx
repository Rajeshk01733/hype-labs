import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Asterisk, CircleDot } from "lucide-react";

const About: React.FC = () => {
  const features = [
    {
      title: "Innovation-First IT Solutions",
      description:
        "We stay ahead of the latest in custom software, cloud migration, and progressive web applications, so your technology is always ready for what's next.",
    },
    {
      title: "Data-Driven Digital Strategy",
      description:
        "Every website, app, and campaign we build is tied to measurable business goals. We use real performance data to drive decisions, not guesswork.",
    },
    {
      title: "Full-Stack Capability Under One Roof",
      description:
        "Software development, web design, mobile apps, SEO, hosting, handled by one IT team. No coordination headaches, no gaps.",
    },
    {
      title: "Client-Focused IT Consulting",
      description:
        "We listen before we build. Whether you're a startup or an enterprise, our IT consulting approach is built around your specific goals and budget.",
    },
  ];

  return (
    <section id="aboutconnectia" className="w-full py-20 font-lato">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <Asterisk className="text-gray-400" size={20} />
            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-widest text-white"
            >
              ABOUT CONNECTIA
            </motion.h3>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true }}
            className="mt-3 text-3xl md:text-5xl leading-tight"
          >
            A Full-Service IT Company in{" "}
            <span className="font-bold text-gray-400">Bengaluru</span>
            <br className="hidden md:flex" /> Built for Growing Businesses
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-md text-gray-300 max-w-3xl"
          >
            Founded in 2014, Connectia Technology provides complete IT and
            digital solutions. We work as a trusted digital partner for
            businesses. Our team of software developers, UI/UX designers,
            digital marketers, and IT consultants works together under one roof.
            That means faster decisions, consistent quality, and no handoff
            confusion across your project.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-2 text-md text-gray-300 max-w-3xl"
          >
            We do not believe in one-size-fits-all solutions. Our team first
            understands your business, your goals, and your customers before
            starting any project. This helps us build technology solutions that
            truly support your business.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-md text-gray-300 max-w-3xl italic border-l-4 border-gray-600 pl-4"
          >
            "Great technology happens when deep technical expertise meets clear
            business strategy. That's the standard we hold ourselves to on every
            project."
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
              Contact Our Team
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
        </div>

        <div className="flex flex-col gap-4 min-h-[650px] overflow-y-scroll scroll-smooth hide-scrollbar">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: idx * 0.08 + 0.12,
              }}
              viewport={{ once: true, amount: 0.25 }}
              aria-hidden={false}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white">
                  <span className="text-gray-400 font-bold text-lg">
                    {idx + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
