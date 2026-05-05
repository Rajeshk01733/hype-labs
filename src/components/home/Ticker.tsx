import React from 'react';
import { motion } from 'framer-motion';

const Ticker: React.FC = () => {
  const items = [
    "Design", "Development", "Marketing", "Infrastructure",
  ];

  // Duplicate items to ensure seamless loop
  const tickerItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#1a1a1a] py-4 overflow-hidden border-y border-white/10 relative z-20 -rotate-2 scale-105 my-10 origin-center font-lato">
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 5, 
        }}
      >
        {tickerItems.map((item, index) => (
          <div key={index} className="flex items-center mx-4">
            <img 
                src="https://innovexagency.ae/wp-content/uploads/2025/03/asterisk-icon-white.png" 
                alt="asterisk" 
                className="w-6 h-6 mr-8 object-contain" 
            />
            <span className="text-xl md:text-3xl font-bold tracking-widest text-white uppercase">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;