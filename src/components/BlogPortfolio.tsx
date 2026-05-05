// In BlogPortfolio.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BlogPost } from "../data/types";

interface ContentSectionProps {
  id: string;
  title: string;
  description: string;
  items: BlogPost[];
  viewAllText?: string;
  cardActionText?: string;
}

const BlogPortfolio: React.FC<ContentSectionProps> = ({
  id,
  title,
  description,
  items,
  viewAllText = "View All",
  cardActionText = "Read More",
}) => {
  const navigate = useNavigate();

  const handleCardClick = (postId: string) => {
    // Navigate directly to the post by ID
    navigate(`/blog/${postId}`);
  };

  const handleViewAllClick = () => {
    // Navigate to the section view (you can implement this later)
    navigate(`/${id}`);
  };

  return (
    <section id={id} className="py-20 font-lato">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="font-display font-bold text-4xl md:text-5xl text-white mb-6"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-gray-400 text-lg max-w-xl"
          >
            {description}
          </motion.p>
        </div>

        <button
          onClick={handleViewAllClick}
          className="hidden md:flex items-center gap-2 text-white hover:text-purple-400 transition-colors font-medium"
        >
          {viewAllText} <ArrowRight size={18} />
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <article
            key={item._id}
            className="group cursor-pointer"
            onClick={() => handleCardClick(item._id)}
          >
            <div className="relative overflow-hidden rounded-xl mb-6 aspect-4/3">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider rounded-full border border-white/10">
                  {item.category}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-purple-400 text-xs font-semibold uppercase tracking-wide">
                {item.date}
              </div>
              <h3 className="font-display font-bold text-xl text-white group-hover:text-purple-300 transition-colors leading-tight">
                {item.title}
              </h3>
              {/* Updated description with dangerouslySetInnerHTML */}
              <div 
                className="text-gray-400 text-sm leading-relaxed line-clamp-2 prose prose-invert prose-sm"
                dangerouslySetInnerHTML={{ __html: item.excerpt }}
              />
              <div className="pt-2">
                <span className="inline-flex items-center text-sm font-medium text-white group-hover:underline decoration-purple-500 underline-offset-4">
                  {cardActionText}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile Button */}
      <div className="mt-12 text-center md:hidden">
        <button
          onClick={handleViewAllClick}
          className="px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 text-sm font-bold"
        >
          {viewAllText}
        </button>
      </div>
    </section>
  );
};

export default BlogPortfolio;