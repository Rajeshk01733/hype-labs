import React from 'react';
import { CLIENT_LOGOS } from '../data/constants';
import { motion } from 'framer-motion';

const TrustedBy: React.FC = () => {
  // Duplicate the logos to ensure seamless looping
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-12 border-b border-white/5 bg-black/40 overflow-hidden font-lato">
      <div className="max-w-full">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
          Trusted by industry leaders
        </p>
        
        <div className="relative w-full overflow-hidden mask-linear-gradient">
          <motion.div 
            className="flex items-center gap-16 w-max"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ 
              duration: 30, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {logos.map((client, index) => (
              <span 
                key={index} 
                className="text-xl md:text-2xl font-bold font-display text-gray-500/50 whitespace-nowrap"
              >
                {client}
              </span>
            ))}
          </motion.div>
          
          {/* Gradients to fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;