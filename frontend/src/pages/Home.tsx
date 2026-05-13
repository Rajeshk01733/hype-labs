import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import Hero from "../components/home/Hero";
import Ticker from "../components/home/Ticker";
import ValueProposition from "../components/ValueProposition";
import Services from "../components/home/Services";
import Dossier from "../components/home/Dossier";
import BeyondVisuals from "../components/home/BeyondVisuals";
import LogoCarousel from "../components/home/LogoCarousel";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import ContactSection from "../components/Contact";

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to banner when URL contains #banner
    if (location.hash === "#banner") {
      setTimeout(() => {
        const banner = document.getElementById("banner");

        if (banner) {
          banner.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>IT Services Companies in India | Connectia</title>

        <meta
          name="description"
          content="Top IT services companies in India offering web, software & marketing solutions. Partner with Connectia to grow your business today."
        />
      </Helmet>

      <Hero />
      <ValueProposition />
      <Ticker />
      <Services />

      <Dossier />
      <BeyondVisuals />
      <LogoCarousel />
      <Stats />
      <Testimonials />
      <ContactSection />
    </>
  );
};

export default Home;
