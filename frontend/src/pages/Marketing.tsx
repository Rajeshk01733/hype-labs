import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Asterisk } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhyChoose from '../components/WhyChoose';
import { developmentData } from '../data/development';
import { marketingData } from '../data/marketing';

const Marketing = () => {
  return (
    <div className="min-h-screen bg-black py-28 px-5 text-white font-lato">
      <div className="flex flex-col max-w-7xl mx-auto pt-5">
        <div className="flex gap-3">
                <Asterisk className="text-gray-400" size={20}/>
                <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-sm uppercase tracking-widest text-white"
                >
                  ALL MARKETINGS
                </motion.h3>
            </div>

        <section className="py-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, duration:1.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {marketingData.map((design) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration:1.2 }}
                whileHover={{ y: -4 }}
                className="flex flex-col gap-4 group bg-[#111] p-8 rounded-3xl"
              >
                <Link
                  to={`/marketing/${design.id}`}
                  className="flex items-center gap-5"
                >
                  <h4 className="font-bold text-lg group-hover:text-gray-300 transition">
                    {design.title}
                  </h4>
                  <ArrowRight
                    size={28}
                    className="text-gray-400 group-hover:translate-x-1 transition"
                  />
                </Link>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {design.fullDesc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
        <WhyChoose/>
      </div>
    </div>
  );
};

export default Marketing;
