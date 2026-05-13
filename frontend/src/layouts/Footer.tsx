import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Smartphone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiCellphoneFill } from "react-icons/ri";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-28 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16"
        >
          {/* Contact */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">HypeLab</span>
            </Link>

            <div className="space-y-6 mt-10 text-gray-400 text-sm">
              <motion.a
                href="tel:+919741765117 "
                whileHover={{ x: 6 }}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone size={16} />
                <span className="text-white font-medium">+91 9741765117</span>
              </motion.a>

              <motion.a
                href="mailto:support@connectia.in"
                whileHover={{ x: 6 }}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span className="text-white font-medium">
                  support@connectia.in
                </span>
              </motion.a>
              <motion.a
                href="hr@connectiasolutions.in"
                whileHover={{ x: 6 }}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span className="text-white font-medium">
                  hr@connectiasolutions.in
                </span>
              </motion.a>

              {/* <motion.a 
                href="https://maps.google.com/?q=Warehouse+no+1+Street+9+Nadd+Al+Hamar+Dubai" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ x: 6 }} 
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <MapPin size={16} className="mt-1" />
                <span className="text-white">
                  Warehouse no 1 - Street 9 - Nadd Al Hamar - Dubai
                </span>
              </motion.a> */}
            </div>
          </motion.div>

          {/* Information */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Information</h4>

            <ul className="space-y-4 text-gray-400 text-sm">
              <motion.li
                whileHover={{ x: 8, color: "#fff" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link to="/about">About Us</Link>
              </motion.li>
              <motion.li
                whileHover={{ x: 8, color: "#fff" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link to="/portfolio">Portfolio</Link>
              </motion.li>
              <motion.li
                whileHover={{ x: 8, color: "#fff" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link to="/">Contact us</Link>
              </motion.li>
              <motion.li
                whileHover={{ x: 8, color: "#fff" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link to="/blog">Blogs</Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Services</h4>

            <ul className="space-y-4 text-gray-400 text-sm">
              <motion.li
                whileHover={{ x: 8, color: "#fff" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link to="/design">Design</Link>
              </motion.li>
              <motion.li
                whileHover={{ x: 8, color: "#fff" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link to="/development">Development</Link>
              </motion.li>
              <motion.li
                whileHover={{ x: 8, color: "#fff" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link to="/marketing">Marketing</Link>
              </motion.li>
              <motion.li
                whileHover={{ x: 8, color: "#fff" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link to="/infrastructure">Infrastructure</Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Newsletter Signup</h4>

            <p className="text-gray-400 text-sm mb-6">
              Enter your email below to be the first to know about new
              collections and product launches.
            </p>

            <div className="flex border border-gray-700 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-4 py-3 outline-none text-sm"
              />

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-400 text-black font-normal px-2 py-3 text-sm hover:bg-gray-300 transition-colors"
                onClick={() => {
                  // Add your newsletter signup logic here
                  alert("Newsletter subscription feature coming soon!");
                }}
              >
                Subscribe
              </motion.button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mt-8 font-lato text-gray-400">
              <motion.a
                whileHover={{ y: -5, scale: 1.15, color: "#fff" }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://www.facebook.com/ConnectiaTechnology"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </motion.a>

              <motion.a
                whileHover={{ y: -5, scale: 1.15, color: "#fff" }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://www.instagram.com/connectiatechnology"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </motion.a>

              <motion.a
                whileHover={{ y: -5, scale: 1.15, color: "#fff" }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://www.linkedin.com/company/connectia-technology/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm"
        >
          Copyright © 2026.{" "}
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Connectia Solutions Private Limited.
          </Link>{" "}
          All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
