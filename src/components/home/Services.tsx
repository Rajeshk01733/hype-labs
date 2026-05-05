import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Design",
    desc: "We craft bold, memorable brand identities that make lasting first impressions. Every visual element is built to inspire trust, spark recognition, and reflect your brand's true value. From logos to full UI/UX, we design experiences that captivate and convert.",
    img: "/home/what/Design.png",
    color: "from-purple-900/80 to-black/80",
    link: "/design",
  },
  {
    title: "Development",
    desc: "We build fast, scalable, and stunning websites that turn visitors into loyal customers. Every line of code is engineered for performance, reliability, and seamless user experience. From landing pages to full e-commerce platforms, we develop digital products that grow with your business.",
    img: "/home/what/Development.png",
    color: "from-blue-900/80 to-black/80",
    link: "/development",
  },
  {
    title: "Marketing",
    desc: "We create data-driven strategies that put your brand in front of the right audience at the right time. From paid ads to SEO, we turn clicks into conversions and attention into measurable revenue. Our marketing solutions are built to generate leads, grow reach, and deliver consistent, scalable results.",
    img: "/home/what/Marketing.png",
    color: "from-orange-900/80 to-black/80",
    link: "/marketing",
  },
  {
    title: "Infrastructure",
    desc: "We provide secure, high-performance cloud hosting that keeps your business running without interruption. Our infrastructure solutions are built for speed, uptime, and effortless scalability as your business expands. We connect your tools and systems into one seamless ecosystem, so your team operates at full power.",
    img: "/home/what/Infrastructures.png",
    color: "from-green-900/80 to-black/85",
    link: "/infrastructure",
  },
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0,
      );
    };
    checkTouchDevice();
  }, []);

  const handleCardClick = (index: number) => {
    if (isTouchDevice) {
      // On touch devices, toggle the active card
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <section
      id="services"
      className="pt-20 pb-8 container mx-auto px-4 font-lato"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-12">
          What We Do
        </h2>
        <p className="text-gray-400 text-center text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          We provide end-to-end IT services, including design, development,
          marketing, and infrastructure solutions for modern businesses. As an
          experienced IT solutions company in India, we help brands build,
          scale, and optimize their digital presence.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <Link key={index} to={service.link} className="no-underline">
              <motion.div
                className={`relative group h-[450px] md:h-[500px] overflow-hidden rounded-xl ${
                  isTouchDevice ? "cursor-pointer" : "cursor-pointer"
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleCardClick(index)}
              >
                {/* Background Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className={`
    absolute inset-0 w-full h-full object-cover object-center 
    transition-all duration-700 ease-out
    ${service.title === "Infrastructure" ? "scale-150" : "group-hover:scale-110"}
    ${!isTouchDevice ? "group-hover:blur-sm" : ""}
    ${isTouchDevice && isActive ? "blur-sm scale-110" : ""}
  `}
                />

                {/* Gradient Overlay - Always visible on touch devices */}
                <div
                  className={`
                absolute inset-0 transition-all duration-500 
                ${
                  isTouchDevice
                    ? isActive
                      ? "bg-linear-to-t from-black/95 via-black/70 to-black/40"
                      : "bg-linear-to-t from-black/70 via-black/40 to-black/20"
                    : "opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6)_0%,transparent_100%)]"
                }
              `}
                />

                {/* Content */}
                <div
                  className={`
                absolute inset-x-0 z-10 flex flex-col items-center text-center p-6
                transition-all duration-500
                ${
                  isTouchDevice
                    ? "bottom-0 top-auto justify-end pb-6"
                    : "inset-0 justify-center"
                }
              `}
                >
                  {/* Title */}
                  <div className="relative overflow-hidden w-full">
                    <h3
                      className={`
                    font-bold uppercase transition-all duration-500
                    ${
                      isTouchDevice
                        ? "text-2xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] mb-2"
                        : "text-2xl md:text-3xl text-black group-hover:-translate-y-2 group-hover:text-white [text-shadow:0_0_10px_rgba(255,255,255,0.8),2px_2px_4px_rgba(255,255,255,0.5)] mb-4"
                    }
                  `}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description - FULL TEXT visible when active on mobile */}
                  <div
                    className={`
                  transition-all duration-500 overflow-hidden
                  ${
                    isTouchDevice
                      ? isActive
                        ? "max-h-[250px] opacity-100 mt-2"
                        : "max-h-0 opacity-0 mt-0"
                      : ""
                  }
                `}
                  >
                    <p
                      className={`
                    text-gray-400 text-center text-sm md:text-base max-w-3xl mx-auto leading-relaxed px-2
                    ${
                      isTouchDevice
                        ? ""
                        : "opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0"
                    }
                  `}
                    >
                      {service.desc}
                    </p>
                  </div>

                  {/* Hint text for touch devices */}
                  {isTouchDevice && !isActive && (
                    <p className="text-xs text-white/70 mt-2">
                      Tap to learn more
                    </p>
                  )}
                </div>
                {/* <div className="absolute bottom-0 left-0 right-0 z-10 p-6 flex flex-col items-center text-center text-white">
  
  <div className="absolute top-0 left-0 right-0 z-10 p-6 text-center text-white">
  <h3 className="text-2xl md:text-3xl font-bold uppercase">
    {service.title}
  </h3>
</div>

  <p className={`
    text-gray-200 text-sm leading-relaxed transition-all duration-500
    ${isTouchDevice 
      ? isActive ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0'
      : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'
    }
  `}>
    {service.desc}
  </p>

  {isTouchDevice && !isActive && (
    <p className="text-xs text-white/70 mt-2">
      Tap to learn more
    </p>
  )}

</div> */}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
