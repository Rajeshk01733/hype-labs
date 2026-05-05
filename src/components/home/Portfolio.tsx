import React from 'react';
import { motion, Variants } from 'framer-motion';

const portfolioItems = [
  {
    category: "Design",
    description: "We craft bold, memorable brand identities that make lasting first impressions. Every visual element is built to inspire trust, spark recognition, and reflect your brand's true value. From logos to full UI/UX, we design experiences that captivate and convert.",
    image: "/home/portfolio/Design.png",
    color: "from-purple-900/80 to-black/80",
    icon: "🎨"
  },
  {
    category: "Development",
    description: "We build fast, scalable, and stunning websites that turn visitors into loyal customers. Every line of code is engineered for performance, reliability, and seamless user experience. From landing pages to full e-commerce platforms, we develop digital products that grow with your business.",
    image: "/home/portfolio/Development.png",
    color: "from-blue-900/80 to-black/80",
    icon: "💻"
  },
  {
    category: "Marketing",
    description: "We create data-driven strategies that put your brand in front of the right audience at the right time. From paid ads to SEO, we turn clicks into conversions and attention into measurable revenue. Our marketing solutions are built to generate leads, grow reach, and deliver consistent, scalable results.",
    image: "/home/portfolio/Marketing.png",
    color: "from-orange-900/80 to-black/80",
    icon: "📈"
  },
  {
    category: "Infrastructure",
    description: "We provide secure, high-performance cloud hosting that keeps your business running without interruption. Our infrastructure solutions are built for speed, uptime, and effortless scalability as your business expands. We connect your tools and systems into one seamless ecosystem, so your team operates at full power.",
    image: "/home/portfolio/Infrastructure.png",
    color: "from-green-900/80 to-black/80",
    icon: "☁️"
  }
];

// Animation variants with proper typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      duration: 0.5
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -15
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { 
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const Portfolio: React.FC = () => {
  // Safe random values for particles (avoid window reference during SSR)
  const particlePositions = React.useMemo(() => {
    return [...Array(20)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
  }, []);

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden font-lato">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/5 rounded-full"
            style={{ 
              left: `${pos.x}%`, 
              top: `${pos.y}%` 
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-sm text-gray-500 uppercase tracking-[0.3em] block mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Expertise
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter relative inline-block">
            Our Work
            <motion.div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-linear-to-r from-transparent via-white to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </h2>
        </motion.div> */}

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group perspective h-[450px] md:h-[550px] cursor-pointer"
            >
              {/* Card Container with 3D effect */}
              <div 
                className="relative w-full h-full transition-all duration-700 ease-out card-container"
                style={{ 
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front of card - Category with image background */}
                <div 
                  className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl card-face card-front"
                  style={{ 
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  {/* Background Image with Parallax */}
                  <motion.div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Animated linear Overlay */}
                  <motion.div 
                    className={`absolute inset-0 bg-linear-to-t ${item.color}`}
                    animate={{ opacity: [0.8, 0.9, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Icon with float animation */}
                  <motion.div 
                    className="absolute top-8 left-8 text-4xl z-10"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Category Label */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <motion.h3 
                      className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter relative"
                      initial={{ rotate: -3 }}
                      whileHover={{ rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.category}
                      <motion.span 
                        className="absolute -inset-1 text-white/20 blur-xl"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {item.category}
                      </motion.span>
                    </motion.h3>
                  </div>

                  {/* Corner decorations */}
                  <motion.div 
                    className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/40 z-10"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/40 z-10"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </div>

                {/* Back of card - Description */}
                <div 
                  className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl bg-linear-to-br from-gray-900 via-black to-gray-900 border border-white/10 card-face card-back"
                  style={{ 
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  {/* Animated background lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="30%"
                      stroke="rgba(255,255,255,0.03)"
                      strokeWidth="1"
                      fill="none"
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      stroke="rgba(255,255,255,0.02)"
                      strokeWidth="1"
                      fill="none"
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                  </svg>

                  <div className="relative w-full h-full flex items-center justify-center p-8 z-10">
                    <motion.div 
                      className="text-center max-w-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {/* Icon with bounce */}
                      <motion.div 
                        className="text-5xl mb-6 inline-block"
                        animate={{ 
                          y: [0, -10, 0],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        {item.icon}
                      </motion.div>

                      {/* Category title */}
                      <motion.h3 
                        className="text-2xl md:text-3xl font-bold uppercase mb-6 text-white inline-block relative"
                      >
                        {item.category}
                        <motion.div 
                          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-white to-transparent"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        />
                      </motion.h3>
                      
                      {/* Description */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-gray-300 text-sm md:text-base leading-relaxed"
                      >
                        <p className="whitespace-normal wrap-break-word">
                          {item.description}
                        </p>
                      </motion.div>

                      {/* CTA Button */}
                      <motion.button
                        className="mt-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm uppercase tracking-wider border border-white/20 hover:bg-white hover:text-black transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Projects
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Add these styles */}
      <style>{`
        .perspective {
          perspective: 2500px;
        }
        
        .group:hover .card-container {
          transform: rotateY(180deg);
        }
        
        .card-container {
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .card-front {
          transform: rotateY(0deg);
        }
        
        .card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Portfolio;