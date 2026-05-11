import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus, ArrowUp, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { MarketingData } from "../data/marketing";
import Videography from "../components/Videography";
import { videography } from "../data/videography";
import CTA from "../components/CTA";
import ContactSection from "../components/Contact";

interface Props {
  data: MarketingData;
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      className="mb-8 break-inside-avoid"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`rounded-2xl overflow-hidden border border-white/10 bg-[#111] ${aspectClass}`}
      >
        {isLoading ? (
          <div className="w-full h-full min-h-[200px] bg-linear-to-r from-gray-800 to-gray-900 animate-pulse" />
        ) : (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
          />
        )}
      </motion.div>
    </motion.div>
  );
};

const MarketingPage: React.FC<Props> = ({ data }) => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState<"videography" | "photography">(
    "videography",
  );

  // Check if we should use the custom layout
  const isCustomLayout = [
    "seo",
    "smm",
    "performance",
    "content",
    "pr",
    "videography",
    "influencer",
    "email",
    "whatsapp",
  ].includes(data.id);

  // Specific check for vertical video layout
  const isVerticalLayout = [
    "smm",
    "performance",
    "pr",
    "videography",
    "influencer",
  ].includes(data.id);

  // Specific check for Content Creation
  const isContentCreation = data.id === "content";

  const isVideography = data.id === "videography";

  // Determine grid columns for images
  const getGalleryColumns = () => {
    if (data.id === "content") {
      return "md:columns-3";
    }
    if (["seo", "email", "whatsapp"].includes(data.id)) {
      return "md:columns-2";
    }
    return "md:columns-2 lg:columns-3";
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-lato"
    >
      {/* =========================================================
            CUSTOM LAYOUT
           ========================================================= */}
      {isCustomLayout ? (
        <>
          {/* 1. HERO SECTION (Split Layout) */}
          <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 pt-24 pb-12 overflow-hidden bg-black">
            <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
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
                  className="relative z-10 flex justify-center rounded-[20px] overflow-hidden"
                >
                  <img
                    src={data.heroImage}
                    alt={data.title}
                    className={`w-full h-full object-cover rounded-[28px] drop-shadow-2xl ${
                      isContentCreation
                        ? "max-h-[500px] lg:max-h-[500px]"
                        : "max-h-[450px]"
                    }`}
                  />
                </motion.div>

                {/* Glow Effect Behind Image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-900/30 blur-[100px] rounded-full pointer-events-none z-0 mix-blend-screen" />
              </motion.div>

              {/* RIGHT: Typography - On mobile: second order, on desktop: order-2 */}
              <div className="flex flex-col justify-center text-left order-2 lg:order-2">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl md:text-6xl font-bold uppercase leading-[0.95] tracking-tight mb-10 text-white wrap-break-word"
                >
                  {data.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-gray-400 text-md leading-relaxed max-w-lg mb-4"
                >
                  {data.shortDesc}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-gray-400 text-md leading-relaxed max-w-lg"
                >
                  {data.fullDesc}
                </motion.p>
              </div>
            </div>
          </section>

          {/* SUBHEAD SECTION */}
          {data.subheadSection && (
            <section className="py-8 md:py-14 px-6 md:px-12 bg-black">
              <div className="max-w-[1000px] mx-auto text-center">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-light mb-6 text-gray-300"
                >
                  {data.subheadSection.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-400 text-lg leading-relaxed"
                >
                  {data.subheadSection.description}
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
                    className="w-full max-w-sm h-auto object-contain drop-shadow-2xl"
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

          {!isVideography ? (
            <>
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
                        className="group cursor-pointer relative"
                        onClick={() => window.open(videoUrl, "_blank")}
                      >
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          className={`rounded-xl overflow-hidden border border-white/10 bg-[#111]
                            ${isContentCreation ? "aspect-9/16" : "aspect-video"} relative`}
                        >
                          <video
                            src={videoUrl}
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            poster="/path/to/thumbnail.jpg"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black/50 group-hover:bg-black/70 transition-colors">
                                <Play className="text-white w-8 h-8" />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                )}

              {/* ================= IMAGES - ADAPTIVE LAYOUT ================= */}
              {(!isContentCreation || activeTab === "photography") &&
                data.galleryImages && (
                  <div className="mx-auto px-6 md:px-12 py-8">
                    <div
                      className={`max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5`}
                    >
                      {data.galleryImages.map((img, idx) => {
                        // Force consistent aspect ratio for email gallery
                        const forceAspect =
                          data.id === "email" ? "aspect-[4/5]" : undefined;
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className={`rounded-2xl overflow-hidden border border-white/10 bg-[#111] ${forceAspect || "aspect-auto"}`}
                          >
                            <img
                              src={img}
                              alt={`Gallery ${idx + 1}`}
                              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                              loading="lazy"
                            />
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                )}
            </>
          ) : (
            <>
              {videography.map((section) => (
                <Videography key={section.id} {...section} />
              ))}
              <CTA
                title="Not limited to video, we're your creative comrades."
                subtitle="Got questions, project ideas, or just want to say hi? We're all ears!"
                buttonText="Let's Collaborate"
                buttonHref=""
              />
            </>
          )}

          {/* 4. FAQ SECTION */}
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
      ) : (
        // =========================================================
        // GENERIC LAYOUT FOR OTHER SERVICES
        // =========================================================
        <>
          <section className="relative h-screen w-full flex flex-col justify-end px-6 md:px-12 pb-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img
                src={data.heroImage}
                alt={data.title}
                className="w-full h-full object-cover scale-110"
              />
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
                    {data.fullDesc}
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

          {/* IMAGES - Generic Layout */}
          {data.galleryImages && data.galleryImages.length > 0 && (
            <section className="py-8 md:py-14 px-6 md:px-12 bg-[#050505]">
              <div className="mx-auto columns-1 gap-8 md:columns-2 lg:columns-3 max-w-[1400px]">
                {data.galleryImages.map((img, idx) => (
                  <AdaptiveImage
                    key={idx}
                    src={img}
                    alt={`${data.title} gallery ${idx + 1}`}
                    idx={idx}
                  />
                ))}
              </div>
            </section>
          )}

          {/* VIDEOS - Generic Layout */}
          {data.galleryVideos && data.galleryVideos.length > 0 && (
            <section className="py-8 md:py-14 px-6 md:px-12 bg-[#050505]">
              <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[1600px]">
                {data.galleryVideos.map((videoUrl, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                    className="group cursor-pointer relative"
                    onClick={() => window.open(videoUrl, "_blank")}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="rounded-xl overflow-hidden border border-white/10 bg-[#111] aspect-video relative"
                    >
                      <video
                        src={videoUrl}
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black/50 group-hover:bg-black/70 transition-colors">
                          <Play className="text-white w-8 h-8" />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </>
      )}
      <ContactSection />
    </div>
  );
};

export default MarketingPage;
