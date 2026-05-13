import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DesignData } from "../data/design";
import { Helmet } from "react-helmet";
import { ArrowRight, Plus, Minus, ArrowUp, Play } from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "../components/Contact";
import CTA from "../components/CTA";
import "../index.css";
import Masonry from "react-masonry-css";
const breakpointColumnsObj = {
  default: 3,
  768: 2,
  480: 1,
};

interface Props {
  data: DesignData;
}

interface FAQItemProps {
  question: string;
  answer: string;
  [key: string]: any;
}

interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-white/20 py-8 cursor-pointer group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-xl md:text-xl font-light text-gray-300 group-hover:text-white transition-colors">
          {question}
        </h4>
        <div className="text-white/50 group-hover:text-white transition-colors">
          {isOpen ? (
            <ArrowUp size={20} className="rotate-0 transition-transform" />
          ) : (
            <ArrowUp size={20} className="rotate-180 transition-transform" />
          )}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-6 pb-2 text-gray-400 leading-relaxed text-lg max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Helper function to render text with only bold phrases
const renderWithBoldPhrases = (text: string) => {
  const boldPhrases = [
    "UI UX design company in Bangalore",
    "UI UX design company Bangalore",
    "UI UX design agency",
    "UI UX design services",
    "website design company India",
    "brand strategy",
  ];
  let parts: React.ReactNode[] = [text];

  boldPhrases.forEach((phrase) => {
    const newParts: React.ReactNode[] = [];
    parts.forEach((part) => {
      if (typeof part === "string") {
        const splitParts = part.split(new RegExp(`(${phrase})`, "gi"));
        splitParts.forEach((subPart) => {
          if (subPart.toLowerCase() === phrase.toLowerCase()) {
            newParts.push(
              <span
                key={`${phrase}-${Math.random()}`}
                className="font-semibold text-white"
              >
                {subPart}
              </span>,
            );
          } else {
            newParts.push(subPart);
          }
        });
      } else {
        newParts.push(part);
      }
    });
    parts = newParts;
  });

  return parts;
};

// Helper function to get aspect ratio class based on image dimensions
const getAspectClass = (aspectRatio: number): string => {
  if (aspectRatio > 1.2) {
    // Landscape / Horizontal
    return "aspect-video";
  } else if (aspectRatio < 0.8) {
    // Portrait / Vertical
    return "aspect-[3/4]";
  } else {
    // Square or nearly square
    return "aspect-square";
  }
};

// Helper function to render text with bold phrases and clickable links
const renderFullDescWithBoldAndLinks = (text: string) => {
  const boldPhrases = [
    "UI UX design company in Bangalore",
    "UI UX design company Bangalore",
    "UI UX design agency",
    "UI UX design services",
    "website design company India",
  ];
  const linkMatches = [
    { word: "websites", url: "https://www.connectia.in/development/website" },
    { word: "applications", url: "https://www.connectia.in/development/app" },
    { word: "development", url: "/development" },
  ];

  let parts: React.ReactNode[] = [text];

  // First, handle bold phrases
  boldPhrases.forEach((phrase) => {
    const newParts: React.ReactNode[] = [];
    parts.forEach((part) => {
      if (typeof part === "string") {
        const splitParts = part.split(new RegExp(`(${phrase})`, "gi"));
        splitParts.forEach((subPart) => {
          if (subPart.toLowerCase() === phrase.toLowerCase()) {
            newParts.push(
              <span
                key={`${phrase}-${Date.now()}`}
                className="font-semibold text-white"
              >
                {subPart}
              </span>,
            );
          } else {
            newParts.push(subPart);
          }
        });
      } else {
        newParts.push(part);
      }
    });
    parts = newParts;
  });

  // Then handle links with bold
  linkMatches.forEach(({ word, url }) => {
    const newParts: React.ReactNode[] = [];
    parts.forEach((part) => {
      if (typeof part === "string") {
        const regex = new RegExp(`\\b${word}\\b`, "gi");
        const splitParts = part.split(regex);
        let lastIndex = 0;
        part.match(regex)?.forEach((match) => {
          const index = part.indexOf(match, lastIndex);
          newParts.push(part.substring(lastIndex, index));
          newParts.push(
            <a
              key={`${word}-${Date.now()}-${index}`}
              href={url}
              className="font-semibold text-white hover:text-gray-200 underline transition-colors"
              {...(url.startsWith("/")
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
            >
              {match}
            </a>,
          );
          lastIndex = index + match.length;
        });
        newParts.push(part.substring(lastIndex));
      } else {
        newParts.push(part);
      }
    });
    parts = newParts;
  });

  return parts;
};

// Component to load image and detect dimensions
const AdaptiveImage: React.FC<{ src: string; alt: string; idx: number }> = ({
  src,
  alt,
  idx,
}) => {
  const [dimensions, setDimensions] = useState<ImageDimensions | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      setDimensions({
        width: img.width,
        height: img.height,
        aspectRatio: aspectRatio,
      });
      setIsLoading(false);
    };
    img.src = src;
  }, [src]);

  const aspectClass = dimensions
    ? getAspectClass(dimensions.aspectRatio)
    : "aspect-video";

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: idx * 0.05 }}
      // className="mb-8 break-inside-avoid"
      className="mb-4 break-inside-avoid"
    >
      <div
        className={`rounded-2xl overflow-hidden border border-white/10 bg-[#111] ${aspectClass}
          will-change-transform hover:scale-[1.02] transition-transform duration-300`}
      >
        {isLoading ? (
          <div className="w-full h-full min-h-[200px] bg-linear-to-r from-gray-800 to-gray-900 animate-pulse" />
        ) : (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        )}
      </div>
    </motion.div>
  );
};

const DesignPage: React.FC<Props> = ({ data }) => {
  const containerRef = useRef(null);

  //const contactSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  // Set meta tags for the page
  useEffect(() => {
    if (data.meta) {
      document.title = data.meta.title;
      const metaDescription = document.querySelector(
        'meta[name="description"]',
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", data.meta.description);
      }
    }
  }, [data]);

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [activeTab, setActiveTab] = useState<"videography" | "photography">(
    "videography",
  );
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Scroll to contact form function
  // const scrollToContact = () => {
  //   contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  // Check if we should use the custom layout
  const isCustomLayout = [
    "ui-ux-design",
    "brand-strategy",
    "social-branding",
    "brand-logo",
    "product-branding",
    "personal-branding",
    "corporate-presentation",
    "ai-video",
  ].includes(data.id);

  // Specific check for vertical video layout
  const isVerticalLayout = [
    "product-branding",
    "personal-branding",
    "corporate-presentation",
  ].includes(data.id);

  // Check for content creation style
  const isContentCreation = data.id === "ai-video-animations";

  // Determine grid columns based on content type
  const getGalleryColumns = () => {
    if (isContentCreation) {
      return "md:columns-3";
    }
    if (
      ["ui-ux-design", "brand-strategy", "social-branding"].includes(data.id)
    ) {
      return "md:columns-2";
    }
    if (["brand-logo"].includes(data.id)) {
      return "md:columns-2";
    }
    return "md:columns-2 lg:columns-3";
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-lato"
    >
      {isCustomLayout ? (
        <>
          {/* 1. HERO SECTION (Split Layout) */}
          <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 pt-24 pb-12 overflow-hidden bg-black">
            <div className="max-w-[1800px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              {/* LEFT: Image with Float Animation & Glow - On mobile: first order, on desktop: order-1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative order-1 lg:order-1"
              >
                <motion.div
                  animate={{ y: [-20, 20, -20] }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 flex justify-center"
                >
                  {/* WRAPPER WITH RADIUS */}
                  <div className="rounded-[20px] overflow-hidden shadow-2xl">
                    <img
                      src={data.heroImage}
                      alt={data.title}
                      className={`object-cover w-full h-full ${
                        data.id === "ui-ux-design"
                          ? "max-w-full h-auto max-h-[350px]"
                          : isContentCreation
                            ? "max-h-[700px] scale-90"
                            : "max-h-[600px]"
                      }`}
                    />
                  </div>
                </motion.div>

                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-900/30 blur-[100px] rounded-full pointer-events-none z-0 mix-blend-screen" />
              </motion.div>

              {/* RIGHT: Typography - On mobile: second order, on desktop: order-2 */}
              <div className="flex flex-col justify-center text-left order-2 lg:order-2 pr-8 lg:pr-16">
                <div className="max-w-md lg:max-w-lg">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-sm md:text-base font-bold uppercase leading-tight [word-spacing:0.1em] mb-8 text-white"
                  >
                    {data.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 font-normal"
                  >
                    {renderWithBoldPhrases(data.shortDesc)}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-gray-300 text-sm md:text-base leading-relaxed font-normal"
                  >
                    {renderFullDescWithBoldAndLinks(data.fullDesc)}
                  </motion.p>
                </div>
              </div>
            </div>
          </section>

          {/* SUBHEAD SECTION */}
          {data.subheadSection && (
            <section className="pt-2 md:pt-6 pb-8 md:pb-14 px-6 md:px-12 bg-black">
              <div className="max-w-[1000px] mx-auto text-center">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-5xl font-bold mb-8 text-white"
                >
                  {data.subheadSection.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium"
                >
                  {renderWithBoldPhrases(data.subheadSection.description)}
                </motion.p>
              </div>
            </section>
          )}

          {/* 1.5 CONTENT CREATION SPECIFIC SECTION: ELEVATE YOUR BRAND */}
          {isContentCreation && (
            <section className="py-8 md:py-14 px-6 md:px-16 bg-black flex items-center justify-center">
              <div className="max-w-[1800px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* LEFT: Image - On mobile: first order, on desktop: order-1 */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative order-1 lg:order-1 flex justify-center"
                >
                  <img
                    src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1000&auto=format&fit=crop"
                    alt="Content Strategy"
                    className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
                  />
                </motion.div>

                {/* RIGHT: Text - On mobile: second order, on desktop: order-2 */}
                <div className="flex flex-col justify-center order-2 lg:order-2">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                  >
                    Elevate Your Brand with Expert{" "}
                    <span className="text-gray-500">Content Creation</span>
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-400 text-lg leading-relaxed max-w-lg"
                  >
                    Our top-tier content creation services deliver compelling
                    copy, captivating visuals, and social media-ready materials
                    designed to engage your audience and amplify your brand's
                    presence. Let us help you tell your story and drive your
                    business forward.
                  </motion.p>
                </div>
              </div>
            </section>
          )}

          {/* 2. GALLERY GRID (Images or Videos) */}
          {(data.galleryImages || data.galleryVideos) && (
            <section className="py-8 md:py-14 px-6 md:px-12 bg-[#050505]">
              <div className="max-w-[1600px] mx-auto text-center mb-20">
                {isContentCreation ? (
                  <>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-widest"
                    >
                      Some of our work
                    </motion.h2>
                    <div className="flex justify-center gap-6 mb-16">
                      <button
                        onClick={() => setActiveTab("videography")}
                        className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider font-bold transition
                          ${
                            activeTab === "videography"
                              ? "bg-white text-black"
                              : "border border-white/20 text-gray-500 hover:text-white"
                          }
                        `}
                      >
                        Videography
                      </button>

                      <button
                        onClick={() => setActiveTab("photography")}
                        className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider font-bold transition
                          ${
                            activeTab === "photography"
                              ? "bg-white text-black"
                              : "border border-white/20 text-gray-500 hover:text-white"
                          }
                        `}
                      >
                        Photography
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-5xl md:text-7xl font-display font-extrabold mb-6"
                    >
                      {isVerticalLayout ? "Cinematic" : "Your Identity,"}{" "}
                      <span className="text-blue-500">
                        {isVerticalLayout ? "Excellence" : "Perfected"}
                      </span>
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                      {isVerticalLayout
                        ? "Crafting visual narratives that evoke emotion and drive action."
                        : "We focus on crafting cohesive brand experiences that reflect your vision and values using structured brand guidelines development and refined branding solutions built on a strong brand strategy."}
                    </motion.p>
                  </>
                )}
              </div>

              {/* ================= VIDEOS ================= */}
              {(!isContentCreation || activeTab === "videography") &&
                data.galleryVideos && (
                  <div
                    className={`mx-auto grid grid-cols-1 gap-8
                    ${isVerticalLayout ? "md:grid-cols-1 max-w-[900px]" : "md:grid-cols-2 lg:grid-cols-3 max-w-[1600px]"}`}
                  >
                    {data.galleryVideos.map((videoUrl, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ delay: idx * 0.1, duration: 0.8 }}
                        className="group relative"
                      >
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          className={`rounded-xl overflow-hidden border border-white/10 bg-[#111] w-full h-64 relative`}
                        >
                          <video
                            src={videoUrl}
                            controls
                            autoPlay
                            playsInline
                            className="w-full h-full object-cover"
                            poster="/path/to/thumbnail.jpg"
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                )}

              {/* ================= IMAGES - ADAPTIVE LAYOUT ================= */}

              {(!isContentCreation || activeTab === "photography") &&
                data.galleryImages && (
                  /* Use 'columns' instead of 'grid' to allow original heights */
                  <div className="mx-auto columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-[1600px] space-y-6">
                    {data.galleryImages.map((img, idx) => {
                      const [imgDimensions, setImgDimensions] =
                        React.useState<ImageDimensions | null>(null);
                      React.useEffect(() => {
                        const imgElement = new Image();
                        imgElement.onload = () => {
                          const aspectRatio =
                            imgElement.width / imgElement.height;
                          setImgDimensions({
                            width: imgElement.width,
                            height: imgElement.height,
                            aspectRatio: aspectRatio,
                          });
                        };
                        imgElement.src = img;
                      }, [img]);

                      const aspectClass = imgDimensions
                        ? getAspectClass(imgDimensions.aspectRatio)
                        : "aspect-video";

                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                          viewport={{ once: false, amount: 0.2 }}
                          transition={{
                            duration: 0.8,
                            delay: idx * 0.1,
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                          }}
                          whileHover={{
                            scale: 1.05,
                            rotateY: 5,
                            transition: { duration: 0.3 },
                          }}
                          className="break-inside-avoid mb-6 overflow-hidden rounded-xl cursor-pointer"
                        >
                          <motion.div
                            initial={{ filter: "blur(10px)" }}
                            whileInView={{ filter: "blur(0px)" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative overflow-hidden rounded-xl ${aspectClass}`}
                          >
                            <img
                              src={img}
                              alt={`Gallery ${idx + 1}`}
                              className="w-full h-full object-cover transition-all duration-500"
                            />

                            {/* Overlay effect on hover */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 0.3 }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 bg-black pointer-events-none"
                            />

                            {/* Zoom icon on hover */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              whileHover={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            >
                              <div className="bg-white/80 rounded-full p-3">
                                <svg
                                  className="w-8 h-8 text-gray-800"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m-3-3h6"
                                  />
                                </svg>
                              </div>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
            </section>
          )}

          {/* HEADLINE SECTION */}
          {data.headlineSection && (
            <section className="py-8 md:py-14 px-6 md:px-24 bg-[#050505]">
              <div className="max-w-[1200px] mx-auto text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-display font-bold mb-8 text-white"
                >
                  {data.headlineSection.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-300 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed"
                >
                  {renderWithBoldPhrases(data.headlineSection.description)}
                </motion.p>
              </div>
            </section>
          )}

          {/* 3. DETAILED FEATURES (Text Cards) */}
          {data.detailedFeatures && (
            <section className="py-10 md:py-16 px-6 md:px-24 bg-black">
              <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.detailedFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.6 }}
                    className="bg-[#0f0f0f] border border-white/5 p-8 rounded-2xl flex flex-col justify-between min-h-[300px] hover:border-white/20 transition-all duration-300 group hover:-translate-y-1"
                  >
                    {/* TOP CONTENT */}
                    <div>
                      <h2 className="text-3xl md:text-4xl font-semibold mb-3 leading-snug text-white/90 group-hover:text-white transition-colors">
                        {feature.title}
                      </h2>

                      <p className="text-gray-400 leading-relaxed text-base md:text-lg group-hover:text-gray-300 transition-colors">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* KEY FEATURES (3-Card Layout) */}
          {data.keyFeatures && (
            <section className="py-8 md:py-14 px-6 md:px-24 bg-black">
              <div
                className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
                 auto-rows-[280px]"
              >
                {data.keyFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.6 }}
                    className="bg-[#0f0f0f] border border-white/5 p-8 rounded-2xl 
            hover:border-white/20 transition-colors duration-300 
            flex flex-col overflow-hidden"
                  >
                    <h3 className="heading-uniform mb-4 text-white">
                      {feature.title}
                    </h3>
                    <div className="flex-1 flex flex-col justify-start">
                      <p className="text-gray-400 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </>
      ) : (
        // =========================================================
        // GENERIC LAYOUT FOR OTHER SERVICES
        // =========================================================
        <>
          <section className="relative h-screen w-full flex flex-col justify-end px-6 md:px-12 pb-24 overflow-hidden">
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10 rounded-full" />
                <img
                  src={data.heroImage}
                  alt={data.title}
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </div>

            <div className="relative z-20 max-w-[90vw]">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-6xl md:text-[8vw] font-display font-bold uppercase leading-[0.85] tracking-tight mb-8">
                  {data.title}
                </h1>
              </motion.div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/30 pt-8 w-full">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl"
                >
                  {data.shortDesc}
                </motion.p>
              </div>
            </div>
          </section>

          <section className="py-8 md:py-14 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 md:gap-32">
              <div className="md:w-1/2">
                <div className="sticky top-32">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
                    Overview
                  </h3>
                  <p className="text-3xl md:text-5xl font-display font-medium leading-tight mb-12">
                    {renderFullDescWithBoldAndLinks(data.fullDesc)}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
                  Capabilities
                </h3>
                <div className="flex flex-col">
                  {data.features.map((feature, idx) => (
                    <div key={idx} className="py-6 border-b border-white/20">
                      <span className="text-xl md:text-2xl font-light">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Cards Section for Generic Layout */}
          {data.detailedFeatures && (
            <section className="py-8 md:py-14 px-6 md:px-24 bg-black">
              <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.detailedFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.6 }}
                    className="bg-[#0f0f0f] border border-white/5 p-10 rounded-2xl flex flex-col justify-center min-h-[350px] hover:border-white/20 transition-colors duration-300 group"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* FAQ Section for Generic Layout */}
          {data.faq && (
            <section className="py-32 px-6 md:px-24 bg-black">
              <div className="max-w-[1000px] mx-auto">
                <h2 className="text-3xl md:text-5xl font-light text-center mb-16 text-gray-300">
                  Frequently Asked Questions
                </h2>
                <div className="flex flex-col">
                  {data.faq.map((item, idx) => (
                    <FAQItem
                      key={idx}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* CTA SECTION */}
      <CTA
        title={data.cta?.title || "Ready to bring your vision to life?"}
        subtitle={
          data.cta?.subtitle ||
          "Let's collaborate and create something extraordinary together."
        }
        buttonText="Start Your Project"
        // buttonHref="#contact"
        buttonHref="#contact"
      />

      {/* Contact Section with ref */}
      <div ref={contactSectionRef}>
        <ContactSection />
      </div>

      {/* Video Modal Dialog */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-black border border-white/20 rounded-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                type="button"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Video Player Container */}
              <div className="w-full aspect-video bg-black flex items-center justify-center">
                <video
                  src={selectedVideo}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  crossOrigin="anonymous"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DesignPage;
