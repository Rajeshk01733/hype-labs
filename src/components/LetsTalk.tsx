import React from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";

const servicesLeft = [
  "Website Development",
  "Content Creation Only",
  "3D, VFX and CGI",
  "Commercial Photography",
];
const servicesRight = [
  "Social Media Management",
  "Branding & Design",
  "Commercial Video Production",
];

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: easeInOut,
      // stagger children so inputs appear one-by-one
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeInOut },
  },
};

const LetsTalk = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center py-12 px-6 font-lato">
      {/* Form container uses containerVariants to stagger children */}
      <motion.form
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full max-w-4xl bg-[#0d0d0d] p-6 md:p-10 rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.7)] text-white"
        onSubmit={(e) => {
          e.preventDefault();
          // handle submit
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-3">
          {/* Name */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold mb-3">Full Name</label>
            <input
              name="name"
              placeholder="Enter Your Full Name"
              className="w-full rounded-xl border border-gray-800 bg-transparent py-4 px-6 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold mb-3">Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full rounded-xl border border-gray-800 bg-transparent py-4 px-6 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            />
          </motion.div>

          {/* Phone */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold mb-3">Phone No.</label>
            <input
              name="phone"
              placeholder="Enter Your Phone No"
              className="w-full rounded-xl border border-gray-800 bg-transparent py-4 px-6 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
          </motion.div>

          {/* Business name */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold mb-3">Business Name</label>
            <input
              name="business"
              placeholder="Enter Your Business Name"
              className="w-full rounded-xl border border-gray-800 bg-transparent py-4 px-6 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
          </motion.div>
        </div>

        {/* Services (checkboxes) */}
        <motion.div variants={itemVariants} className="flex flex-col gap-1 mt-6">
          <label className="block text-sm font-semibold mb-4">I'm interested in help with *</label>

          <div className="flex justify-between gap-6">
            <div className="flex flex-col gap-1">
              {servicesLeft.map((s) => (
                <motion.label
                  key={s}
                  variants={itemVariants}
                  className="inline-flex items-start gap-3 mb-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={s}
                    className="mt-1 w-4 h-4 accent-white rounded-sm"
                  />
                  <span className="text-sm text-gray-200">{s}</span>
                </motion.label>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              {servicesRight.map((s) => (
                <motion.label
                  key={s}
                  variants={itemVariants}
                  className="inline-flex items-start gap-3 mb-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={s}
                    className="mt-1 w-4 h-4 accent-white rounded-sm"
                  />
                  <span className="text-sm text-gray-200">{s}</span>
                </motion.label>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Business Size (select) */}
          <motion.div variants={itemVariants} className="my-5">
            <label className="block text-sm font-semibold mb-3">Business Size</label>
            <select
              name="size"
              className="w-full rounded-xl border border-gray-800 bg-black py-4 px-6 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-gray-700"
              defaultValue=""
            >
              <option value="" disabled>
                Select business size
              </option>
              <option>Small (1-10 employees)</option>
              <option>Medium (11-50 employees)</option>
              <option>Large (50+ employees)</option>
            </select>
          </motion.div>

          <motion.div variants={itemVariants} className="my-5">
            <label className="block text-sm font-semibold mb-3">Business Budget</label>
            <select
              name="budget"
              className="w-full rounded-xl border border-gray-800 bg-black py-4 px-6 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-gray-700"
              defaultValue=""
            >
              <option value="" disabled>
                Select budget range
              </option>
              <option>15,000 AED - 25,000 AED</option>
              <option>25,000 AED - 50,000 AED</option>
              <option>50,000 AED+</option>
            </select>
          </motion.div>
        </div>

        {/* Message (full width) */}
        <motion.div variants={itemVariants} className="flex flex-col gap-2 mt-4">
          <motion.div variants={itemVariants} className="md:col-span-2">
            <label className="block text-sm font-semibold mb-3">Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Additional Information"
              className="w-full rounded-xl border border-gray-800 bg-transparent py-6 px-6 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 resize-vertical"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <button
              type="submit"
              className="w-full px-6 py-3 text-black rounded-xl bg-neutral-500 hover:bg-white font-semibold transition"
            >
              Send Message
            </button>
          </motion.div>
        </motion.div>
      </motion.form>
    </section>
  );
};

export default LetsTalk;
