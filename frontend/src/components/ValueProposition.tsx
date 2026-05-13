import React from "react";
import { motion } from "framer-motion";

const ValueProposition: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white overflow-hidden font-lato">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            End-to-End{" "}
            <span className="font-black">IT Services Company in India</span> for
            Businesses
          </h1>
          <p className="text-gray-400 text-center text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Built to deliver scalable business IT solutions with innovation and
            performance. As one of the trusted IT services companies in India,
            we help businesses grow with reliable and future-ready solutions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight uppercase">
            Built Different
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-linear-to-r from-white to-gray-600 mx-auto mt-8"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-center text-sm md:text-base max-w-3xl mx-auto mt-8 leading-relaxed"
        >
          <p>
            Built to deliver scalable business IT solutions with innovation and
            performance as a leading IT solutions provider Indian businesses
            trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
