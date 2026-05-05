import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Apps Delivered", value: 200, suffix: "+" },
  { label: "Marketing Experience projects", value: 180, suffix: "+" },
  { label: "Years of Experience", value: 12, suffix: "+" },
];

const Stats: React.FC = () => {
  return (
    <section className="py-24 container mx-auto px-4 border-b border-white/10 bg-black text-white font-lato">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold uppercase mb-4 tracking-wide text-center"
        >
          Trusted By Hundreds of Brands
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-0.5 bg-linear-to-r from-white to-gray-600 mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-4xl md:text-5xl font-bold mb-3 text-white"
            >
              {stat.value}{stat.suffix}
            </motion.span>
            <span className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider group-hover:text-white transition-colors">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;