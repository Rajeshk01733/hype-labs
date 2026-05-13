import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    "/home/logo/1.png",
    "/home/logo/2.png",
    "/home/logo/3.png",
    "/home/logo/4.png",
    "/home/logo/5.png",
    "/home/logo/6.png",
    "/home/logo/7.png",
    "/home/logo/8.png",
    "/home/logo/9.png",
    "/home/logo/10.png",
    "/home/logo/11.png",
    "/home/logo/12.png",
    "/home/logo/13.png",
    "/home/logo/14.png",
    "/home/logo/15.png",
    "/home/logo/16.png",
];

const LogoCarousel: React.FC = () => {
  // Split logos into two rows
  const firstRow = logos.slice(0, 8);
  const secondRow = logos.slice(8, 16);

  return (
    <div className="py-24 bg-black overflow-hidden border-b border-white/10 font-lato">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold uppercase text-center mb-2">As You Can See!</h2>
      </div>
      
      {/* Two rows of animated carousels */}
      <div className="space-y-12">
        {/* First Row */}
        <motion.div
          className="flex gap-16 md:gap-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 5,
          }}
        >
          {[...firstRow, ...firstRow].map((src, i) => (
            <div 
              key={`row1-${i}`} 
              className="shrink-0 w-20 sm:w-24 md:w-32 lg:w-40 opacity-70 hover:opacity-100 transition-opacity duration-100"
            >
              <img 
                src={src} 
                alt="Client Logo" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-100" 
              />
            </div>
          ))}
        </motion.div>

        {/* Second Row - Opposite Direction for Visual Interest */}
        <motion.div
          className="flex gap-16 md:gap-24"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 5,
          }}
        >
          {[...secondRow, ...secondRow].map((src, i) => (
            <div 
              key={`row2-${i}`} 
              className="shrink-0 w-20 sm:w-24 md:w-32 lg:w-40 opacity-70 hover:opacity-100 transition-opacity duration-100"
            >
              <img 
                src={src} 
                alt="Client Logo" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-100" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoCarousel;