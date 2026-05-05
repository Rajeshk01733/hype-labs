import React from "react";
import { motion } from "framer-motion";

const DrivingInnovation: React.FC = () => {
  return (
    <section className="w-full text-white py-30 font-lato">
      <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="md:col-span-3"
        >
          <motion.img
            src="/01.png" // Replace with actual image ID
            alt="About Connectia Technology"
            className="w-full rounded-2xl shadow-lg object-cover"
            loading="lazy"
            whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-2 space-y-6">
          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl font-bold leading-snug"
          >
            About Connectia – IT Services Company in India
          </motion.h2>

          {/* PARAGRAPHS */}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg md:text-base text-gray-300 max-w-xl"
          >
            Looking for a technology partner that truly understands your
            business? Connectia Technology, based in Bengaluru, India, has been
            helping companies build, grow, and lead in the digital world since
            2014 as a trusted IT services company Bangalore.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg md:text-base text-gray-300 max-w-xl"
          >
            We deliver end-to-end IT services, from{" "}
            <a
              href="https://www.connectia.in/development"
              className="font-bold text-white hover:text-blue-400 transition-colors"
            >
              software development
            </a>
            , web and mobile app development,{" "}
            <a
              href="https://www.connectia.in/marketing"
              className="font-bold text-white hover:text-blue-400 transition-colors"
            >
              digital marketing
            </a>
            , SEO, and{" "}
            <a
              href="https://www.connectia.in/infrastructure"
              className="font-bold text-white hover:text-blue-400 transition-colors"
            >
              cloud infrastructure
            </a>
            . Whether you're a startup ready to launch or an established
            business looking to grow, we act as a dependable IT solutions
            provider India businesses trust for long-term success.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg md:text-base text-gray-300 max-w-xl"
          >
            Over the past decade, Connectia has grown into a trusted IT
            solutions company in India for businesses around the world,
            delivering technical expertise, transparent communication, and a
            strong commitment to client success.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default DrivingInnovation;
