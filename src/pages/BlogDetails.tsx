import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fetchInsightBySlug, fetchCaseStudies } from "../api/blog.api";
import Contact from "../components/Contact";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const BlogDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: blog, isLoading } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => fetchInsightBySlug(slug!),
    enabled: !!slug,
  });

  const { data: caseStudies = [] } = useQuery({
    queryKey: ["case-studies"],
    queryFn: fetchCaseStudies,
  });

  if (isLoading) {
    return (
      <div className="bg-black text-white text-center py-40">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="bg-black text-white text-center py-40">
        <p className="text-xl">Blog not found</p>
      </div>
    );
  }

  return (
    <>
      {/* Banner Section with Image */}
      <section className="relative h-screen overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={`${API_BASE_URL}/${blog.image}`}
            alt={blog.title}
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-end h-full">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              {/* Category Badge */}
              <div className="mb-5">
                <span className="inline-block bg-[#f4b400] text-black text-[11px] md:text-xs font-bold uppercase tracking-wider px-4 py-2">
                  {blog.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-5">
                {blog.title}
              </h1>

              {/* Date */}
              {/* {blog.createdAt && (
                <p className="text-gray-300 text-sm md:text-base mb-6">
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )} */}

              {/* Description with Left Border */}
              <div className="border-l-4 border-[#f4b400] pl-5">
                <p className="text-white/90 text-lg md:text-2xl leading-relaxed font-medium">
                  {blog.cardDescription}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-black px-4 py-20 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Overview</h2>
            <div className="text-gray-300 leading-relaxed space-y-6 text-lg">
              <p>{blog.heroDescription}</p>
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.description || "" }}
              />
            </div>
          </motion.div>

          {/* CTA Section */}
          {blog.ctaQuestion && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-2xl border border-orange-500/20 bg-gradient-to-r from-[#1a0700] via-[#2a0d00] to-[#120500] p-8 md:p-12 my-20"
            >
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                {/* Left Content */}
                <div className="max-w-2xl">
                  <span className="inline-block text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">
                    Let's Connect
                  </span>

                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                    {blog.ctaQuestion}
                  </h3>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    Connect with our experts to discuss your ideas and create
                    impactful digital solutions.
                  </p>
                </div>

                {/* Button */}
                <div>
                  <button
                    onClick={() => {
                      const section =
                        document.getElementById("contact-section");

                      section?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 cursor-pointer"
                  >
                    Get in Touch
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Related Case Studies Section */}
      {caseStudies.length > 0 && (
        <section className="bg-black px-4 py-20 md:px-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Related Case Studies
              </h2>
              <div className="h-1 w-24 bg-orange-500 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.slice(0, 3).map((caseStudy, index) => (
                <motion.div
                  key={caseStudy._id || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() =>
                    caseStudy.slug && navigate(`/case-study/${caseStudy.slug}`)
                  }
                  className="group cursor-pointer overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:shadow-lg transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`${API_BASE_URL}/${caseStudy.image}`}
                      alt={caseStudy.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded">
                        {caseStudy.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {caseStudy.cardDescription}
                    </p>
                    <div className="flex items-center text-orange-500 font-semibold">
                      View Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <div id="contact-section">
        <Contact />
      </div>
    </>
  );
};

export default BlogDetails;
