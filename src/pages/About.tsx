import React, { useEffect } from "react";
import DrivingInnovation from "../components/about/DrivingInnovation";
import AboutComponent from "../components/about/About";
import Approach from "../components/about/Approach";
import Choose from "../components/about/Choose";
import LetsTalk from "../components/LetsTalk";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    document.title = "IT Services Companies in India | About Connectia";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "About Connectia, one of the trusted IT services companies in India. We deliver software, web & digital solutions to help businesses grow.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "About Connectia, one of the trusted IT services companies in India. We deliver software, web & digital solutions to help businesses grow.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <DrivingInnovation />
      <AboutComponent />
      <Approach />
      <Choose />
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col gap-2 items-center mb-6"
      >
        <h1 className="font-bold text-5xl uppercase">Let's Talk</h1>
        <motion.p
          initial={{ opacity: 0, x: 8 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg px-5 w-3/5 mx-auto text-center"
        >
          Looking for a reliable IT services company in Bangalore or a global
          technology partner? Let's discuss your project and explore how we can
          support your business growth with tailored IT solutions.
        </motion.p>
      </motion.div>
      <LetsTalk />
    </>
  );
};

export default About;
