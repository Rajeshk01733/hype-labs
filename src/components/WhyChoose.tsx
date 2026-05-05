import React from "react";
import { JSX } from "react";
import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Helper function to render text with bold phrases
const renderTextWithBold = (text: string, boldPhrases: string[]) => {
  let parts: (string | JSX.Element)[] = [text];

  boldPhrases.forEach((phrase) => {
    const newParts: (string | JSX.Element)[] = [];
    parts.forEach((part) => {
      if (typeof part === "string") {
        const splitParts = part.split(new RegExp(`(${phrase})`, "gi"));
        splitParts.forEach((subPart, idx) => {
          if (subPart.toLowerCase() === phrase.toLowerCase()) {
            newParts.push(
              <span
                key={`${phrase}-${idx}`}
                className="font-semibold text-white"
              >
                {subPart}
              </span>,
            );
          } else {
            newParts.push(subPart);
          }
        });
      } else {
        newParts.push(part);
      }
    });
    parts = newParts;
  });

  return parts;
};

const WhyChoose = () => {
  return (
    <section className="bg-black text-white py-28 px-6 overflow-hidden font-lato">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Heading */}
          <motion.div variants={fadeUp}>
            <div className="flex gap-3">
              <Asterisk className="text-gray-400" size={20} />
              <motion.h3
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-sm uppercase tracking-widest text-white"
              >
                WHY CHOOSE
              </motion.h3>
            </div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light leading-tight"
            >
              Innovative Solutions{" "}
              <span className="text-gray-500 font-semibold">Tailored</span> for{" "}
              <br />
              Your <span className="font-semibold text-white">Brand</span>
            </motion.h2>
          </motion.div>

          {/* Feature Cards */}
          <motion.div variants={container} className="space-y-6">
            {[
              {
                title: "Creative Excellence",
                desc: "From branding to content creation, we craft compelling visuals and narratives that captivate audiences with a focus on UI/UX Design Services and responsive web design, making us a reliable website design company in India.",
                boldPhrases: [
                  "UI/UX Design Services",
                  "website design company in India",
                ],
              },
              {
                title: "Technology & Innovation",
                desc: "We integrate the latest trends, from AI-driven content to immersive CGI, ensuring you stay ahead of the curve in user interface design and digital product design offered by modern design agencies in India.",
                boldPhrases: ["design agencies in India"],
              },
              {
                title: "Optimized for Growth",
                desc: "Every solution is built with scalability in mind, driving long-term success and brand recognition through performance-focused UI/UX Design Services and website design services from a trusted website design company in India.",
                boldPhrases: [
                  "UI/UX Design Services",
                  "website design company in India",
                ],
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", duration: 1.2, stiffness: 180 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 cursor-default"
              >
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {renderTextWithBold(item.desc, item.boldPhrases)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ y: -8 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-3xl overflow-hidden bg-white p-6 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1200&auto=format&fit=crop"
              alt="Creative Visual"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
