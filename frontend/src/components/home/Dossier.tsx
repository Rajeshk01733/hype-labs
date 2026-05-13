import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const Dossier: React.FC = () => {
  return (
    <section className="pt-2 pb-12 bg-black text-white font-lato">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold uppercase mb-6 tracking-tighter text-center"
        >
          Dossier
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-center text-sm md:text-base max-w-3xl mx-auto leading-relaxed mt-4 mb-12"
        >
          Showcasing our work across industries with custom IT services and
          business IT solutions. Our expertise as an IT services company in
          Bangalore and across India allows us to deliver tailored digital
          solutions.
        </motion.p>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {/* Main Image - Large */}
          <motion.div
            className="md:col-span-2 relative rounded-xl overflow-hidden group cursor-pointer bg-gray-900"
            whileHover={{ scale: 1.01 }}
          >
            <img
              src="/home/dossier/03.png"
              alt="IT services and business solutions provider"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-110 transition-opacity duration-500"
            />
          </motion.div>

          {/* Image 1 */}
          <motion.div className="relative rounded-xl overflow-hidden bg-gray-800">
            <img
              src="/home/dossier/02.png"
              alt="Business IT solutions for growing companies in India"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div className="relative rounded-xl overflow-hidden bg-gray-800">
            <img
              src="/home/dossier/04.png"
              alt="IT solutions provider India for web and software services"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div className="relative rounded-xl overflow-hidden bg-gray-800">
            <img
              src="/home/dossier/05.png"
              alt="Custom IT services company in India"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          {/* Image 4 */}
          <motion.div className="relative rounded-xl overflow-hidden bg-gray-800">
            <img
              src="/home/dossier/01.png"
              alt="IT services company in India delivering digital solutions"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          {/* Full Width Video */}
          <motion.div
            className="md:col-span-3 relative rounded-xl overflow-hidden bg-gray-900 group"
            whileHover={{ scale: 1.01 }}
          >
            <video
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            >
              <source src="/home/dossier/01.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dossier;
