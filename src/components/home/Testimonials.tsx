import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working with Connectia Technology has been a game-changer for Devshe Media. Their team understood our requirements clearly and delivered a solution that was both practical and scalable. From development to ongoing support, their approach has been seamless and highly professional. We've seen significant improvements in our digital operations, and their responsiveness makes them a reliable long-term technology partner.",
    author: "Devshe Media",
    position: "Digital Solutions Client",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Connectia Technology brought a structured and efficient approach to our technology requirements. Their ability to translate our ideas into a functional and user-friendly solution stood out. The team was proactive, detail-oriented, and committed to delivering quality at every stage. It has been a smooth and reliable partnership.",
    author: "Sigmato",
    position: "Technology Partnership Client",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Building Entry360 required a technology partner who could understand both security and user experience—and Connectia Technology delivered exactly that. Their team developed a solution that is robust, intuitive, and scalable for community use. Their support and flexibility throughout the process made a significant difference.",
    author: "Entry360",
    position: "Security & UX Solutions Client",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Connectia Technology has been instrumental in helping DSG Group streamline our digital initiatives. Their team combines technical expertise with a clear understanding of business needs, delivering solutions that are both effective and scalable. We value their professionalism and consistent support.",
    author: "DSG Group",
    position: "Digital Transformation Client",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white overflow-hidden font-lato">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4 tracking-tighter">
            Client Voices
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by industry leaders worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                <Quote className="w-10 h-10 text-gray-600 mb-6 group-hover:text-gray-400 transition-colors" />

                <p className="text-gray-300 text-lg mb-8 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
