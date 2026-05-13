import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/constants';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 max-w-4xl mx-auto font-lato">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Common questions about our services, process, and pricing.
        </p>
      </motion.div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`
              border rounded-2xl overflow-hidden transition-colors duration-300
              ${openIndex === index 
                ? 'bg-white/5 border-purple-500/50 shadow-[0_0_20px_rgba(124,58,237,0.1)]' 
                : 'bg-transparent border-white/10 hover:border-white/20'
              }
            `}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
            >
              <span className={`font-medium text-lg md:text-xl transition-colors ${openIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                {faq.question}
              </span>
              <span 
                className={`
                  flex-shrink-0 ml-4 p-2 rounded-full border transition-all duration-300
                  ${openIndex === index 
                    ? 'bg-purple-600 border-purple-600 text-white' 
                    : 'bg-transparent border-white/20 text-gray-400 group-hover:border-white group-hover:text-white'
                  }
                `}
              >
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                   {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </motion.div>
              </span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-400 leading-relaxed text-base md:text-lg border-t border-white/5 mt-2">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;