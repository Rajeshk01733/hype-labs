import React from "react";
import { motion } from "framer-motion";

const BeyondVisuals: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden font-lato">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain md:object-cover opacity-60"
        >
          <source
            src="/home/Bottom Connectia Banner home page.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  );
};

export default BeyondVisuals;
