import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Asterisk } from "lucide-react";
import { Link } from "react-router-dom";
import { designData } from "../data/design";
import WhyChoose from "../components/WhyChoose";

// Bold phrases mapping for each design service
const boldPhrasesMap: { [key: string]: string } = {
  "ui-ux-design": "website design company in India",
  "brand-strategy": "design agencies in India",
  "social-branding": "design agencies in India",
  "brand-logo": "Indian website design company",
  "product-branding": "best design agencies in India",
  "personal-branding": "website design company in India",
  "corporate-presentation": "design agencies in India",
  "ai-video": "Indian website design company",
};

// Helper function to render text with bold phrases
const renderTextWithBold = (text: string, boldPhrase: string) => {
  const parts = text.split(new RegExp(`(${boldPhrase})`, "gi"));
  return parts.map((part, idx) =>
    part.toLowerCase() === boldPhrase.toLowerCase() ? (
      <span key={idx} className="font-semibold text-white">
        {part}
      </span>
    ) : (
      part
    ),
  );
};

const Design = () => {
  return (
    <div className="min-h-screen bg-black py-28 px-5 text-white font-lato">
      <div className="flex flex-col max-w-7xl mx-auto pt-5">
        <div className="flex gap-3">
          <Asterisk className="text-gray-400" size={20} />
          <motion.h3
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-widest text-white"
          >
            ALL DESIGNS
          </motion.h3>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mt-6 mb-4 leading-tight"
        >
          Website Design Company in India for{" "}
          <span className="text-gray-400">UI/UX & Branding</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg text-gray-400 mb-8 max-w-3xl"
        >
          Connectia is a leading design agency in India specializing in website
          design, UI/UX design services, and creative branding solutions. Our
          expert team delivers innovative, user-centered designs that transform
          your brand and drive business growth.
        </motion.p>

        <section className="py-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, duration: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {designData.map((design) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                whileHover={{ y: -4 }}
                className="flex flex-col gap-4 group bg-[#111] p-8 rounded-3xl"
              >
                <Link
                  to={`/design/${design.id}`}
                  className="flex items-center gap-5"
                >
                  <h4 className="font-bold text-lg group-hover:text-gray-300 transition">
                    {design.title}
                  </h4>
                  <ArrowRight
                    size={28}
                    className="text-gray-400 group-hover:translate-x-1 transition"
                  />
                </Link>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {renderTextWithBold(
                    design.fullDesc,
                    boldPhrasesMap[design.id],
                  )}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
        <WhyChoose />
      </div>
    </div>
  );
};

export default Design;
