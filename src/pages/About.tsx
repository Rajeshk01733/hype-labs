import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import DrivingInnovation from "../components/about/DrivingInnovation";
import AboutComponent from "../components/about/About";
import Approach from "../components/about/Approach";
import Choose from "../components/about/Choose";
import LetsTalk from "../components/LetsTalk";

const About = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>IT Services Companies in India | About Connectia</title>

        <meta
          name="description"
          content="About Connectia, one of the trusted IT services companies in India. We deliver software, web & digital solutions to help businesses grow."
        />
      </Helmet>

      <DrivingInnovation />

      <AboutComponent />

      <Approach />

      <Choose />

      {/* Let's Talk Heading */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col gap-2 items-center mb-6"
      >
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl uppercase text-center">
          Let's Talk
        </h1>

        <motion.p
          initial={{ opacity: 0, x: 8 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-base sm:text-lg px-5 md:w-3/5 mx-auto text-center leading-relaxed"
        >
          Looking for a reliable{" "}
          <span className="font-bold text-white">
            IT services company in Bangalore
          </span>{" "}
          or a global technology partner? Let's discuss your project and explore
          how we can support your business growth with tailored IT solutions.
        </motion.p>
      </motion.div>

      <LetsTalk />
    </>
  );
};

export default About;
