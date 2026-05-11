import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="banner"
      className="relative w-full min-h-screen md:min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-x-0 top-20 md:top-24 bottom-0 z-0 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/home/Banner.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* H1 Tag - SEO (Responsive text sizes) */}
      <div className="relative z-10 container mx-auto px-4 text-center mb-8 sm:mb-12 md:mb-16"></div>

      {/* Button in Center */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-xs sm:text-xs md:text-sm tracking-wider transition-all hover:bg-white hover:text-black uppercase"
          >
            Our Ambition
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
