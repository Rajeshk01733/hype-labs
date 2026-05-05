import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_SECTORS } from "../data/constants";
import LetsTalk from "./LetsTalk";

const Portfolio: React.FC = () => {
  const [activeSector, setActiveSector] = useState(PORTFOLIO_SECTORS[0]);
  const [activeSection, setActiveSection] = useState(activeSector.sections[0]);

  // Update active section when sector changes
  const handleSectorChange = (sector: (typeof PORTFOLIO_SECTORS)[0]) => {
    setActiveSector(sector);
    setActiveSection(sector.sections[0]);
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 font-lato">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter mb-6">
            Our Portfolio
          </h1>
          <p className="text-gray-400 text-center text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Showcasing our work across industries with custom IT services and
            business solutions. Our expertise allows us to deliver tailored
            digital solutions.
          </p>
        </motion.div>

        {/* Sector Buttons - First Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {PORTFOLIO_SECTORS.map((sector) => (
            <button
              key={sector.id}
              onClick={() => handleSectorChange(sector)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 font-semibold ${
                activeSector.id === sector.id
                  ? "bg-white text-black border-white"
                  : "border-gray-600 text-gray-300 hover:border-gray-400"
              }`}
            >
              {sector.name}
            </button>
          ))}
        </motion.div>

        {/* Section Buttons - Second Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {activeSector.sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section)}
              className={`px-5 py-2 rounded-full border text-sm transition-all duration-300 ${
                activeSection.id === section.id &&
                activeSection.sector === section.sector
                  ? "bg-neutral-800 border-gray-400 text-white"
                  : "border-gray-700 text-gray-400 hover:border-gray-600"
              }`}
            >
              {section.name}
            </button>
          ))}
        </motion.div>

        {/* Image Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {activeSection.images.map((imageUrl, index) => (
            <motion.div
              key={`${activeSection.id}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-lg bg-gray-900 mb-6 break-inside-avoid cursor-pointer"
            >
              <img
                src={imageUrl}
                alt={`${activeSection.name} - Image ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  console.log(`Failed to load image: ${imageUrl}`);
                  (e.target as HTMLImageElement).src = "/placeholder.png";
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {activeSection.images.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">
              No images available for {activeSection.name}
            </p>
          </motion.div>
        )}
      </div>

      {/* Let's Talk Section */}
      <LetsTalk />
    </section>
  );
};

export default Portfolio;
