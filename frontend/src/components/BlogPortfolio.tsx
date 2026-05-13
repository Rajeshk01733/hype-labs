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

  const handleCardClick = (postId?: string) => {
    if (!postId) return;

    navigate(`/blog/${postId}`);
  };

  const handleViewAllClick = () => {
    navigate(`/${id}`);
  };

  return (
    <section id={id} className="py-20 font-lato">
      {/* Header */}
      <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="font-display mb-6 text-4xl font-bold text-white md:text-5xl"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-xl text-lg text-gray-400"
          >
            {description}
          </motion.p>
        </div>

        <button
          onClick={handleViewAllClick}
          className="hidden items-center gap-2 font-medium text-white transition-colors hover:text-purple-400 md:flex"
        >
          {viewAllText}
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={item._id ?? index}
            className="group cursor-pointer"
            onClick={() => item._id && handleCardClick(item._id)}
          >
            <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute left-4 top-4">
                <span className="rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  {item.category}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-purple-400">
                {item.date}
              </div>

              <h3 className="font-display text-xl leading-tight font-bold text-white transition-colors group-hover:text-purple-300">
                {item.title}
              </h3>

              <div
                className="prose prose-invert prose-sm line-clamp-2 text-sm leading-relaxed text-gray-400"
                dangerouslySetInnerHTML={{
                  __html: item.excerpt || "",
                }}
              />

              <div className="pt-2">
                <span className="inline-flex items-center text-sm font-medium text-white underline-offset-4 group-hover:underline decoration-purple-500">
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
          className="rounded-full border border-white/20 px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
        >
          {viewAllText}
        </button>
      </div>
    </section>
  );
};

export default BlogPortfolio;
