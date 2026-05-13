import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { PORTFOLIO_SECTORS } from "../data/constants";
import LetsTalk from "../components/LetsTalk";

const PortfolioFilter = () => {
  const [activeSector, setActiveSector] = useState(PORTFOLIO_SECTORS[0]);

  const [activeSection, setActiveSection] = useState(
    PORTFOLIO_SECTORS[0].sections[0],
  );

  // Update active section when sector changes
  const handleSectorChange = (sector: (typeof PORTFOLIO_SECTORS)[0]) => {
    setActiveSector(sector);
    setActiveSection(sector.sections[0]);
  };

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Portfolio | IT Projects & Case Studies | Connectia</title>

        <meta
          name="description"
          content="Explore our IT project portfolio of successful web & marketing projects. See how Connectia delivers real results. View our work today."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white py-20 font-lato">
        <div className="container mx-auto px-4">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 mt-10"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-semibold md:font-bold uppercase mb-6 tracking-wide lg:tracking-widest">
              Our Work Speaks for Itself
            </h1>
          </motion.div>

          {/* Sector Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mb-8 -mt-10"
          >
            {PORTFOLIO_SECTORS.map((sector) => (
              <button
                key={sector.id}
                onClick={() => handleSectorChange(sector)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 font-semibold cursor-pointer ${
                  activeSector.id === sector.id
                    ? "bg-white text-black border-white"
                    : "border-gray-600 text-gray-300 hover:border-gray-400"
                }`}
              >
                {sector.name}
              </button>
            ))}
          </motion.div>

          {/* Section Buttons */}
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
                className={`px-5 py-2 rounded-full border text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeSection.id === section.id
                    ? "bg-neutral-800 border-gray-400 text-white"
                    : "border-gray-700 text-gray-400 hover:border-gray-600"
                }`}
              >
                {section.name}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Images */}
            {activeSection.images.map((imageUrl, index) => (
              <motion.div
                key={`${activeSection.id}-img-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer w-full"
              >
                <img
                  src={imageUrl}
                  alt={`${activeSection.name} - Image ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={() => {
                    console.log(`Failed to load image: ${imageUrl}`);
                  }}
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.div>
            ))}

            {/* Videos */}
            {activeSection.videos &&
              activeSection.videos.map((videoUrl, vIdx) => (
                <motion.div
                  key={`${activeSection.id}-vid-${vIdx}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: (activeSection.images.length + vIdx) * 0.05,
                  }}
                  className="group relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer w-full"
                >
                  <video
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    poster={activeSection.images[0] || undefined}
                  >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

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
      </div>
    </>
  );
};

export default PortfolioFilter;
