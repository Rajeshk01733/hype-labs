import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import { fetchInsightsAndCaseStudies } from "../api/blog.api";
import type { BlogPost } from "../data/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Insights: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: insightsData, isLoading } = useQuery({
    queryKey: ["insights-and-case-studies"],
    queryFn: fetchInsightsAndCaseStudies,
  });

  const blogs = insightsData?.insights || [];
  const caseStudies = insightsData?.caseStudy || [];

  // Get unique categories dynamically from data
  const categories = React.useMemo(() => {
    const allItems = [...blogs, ...caseStudies];
    const categorySet = new Set(
      allItems.map((item: BlogPost) => item.category),
    );
    return ["All", ...Array.from(categorySet)];
  }, [blogs, caseStudies]);

  // Filtered Blogs
  const filteredBlogs = React.useMemo(() => {
    let filtered: BlogPost[] = blogs;

    if (searchTerm) {
      filtered = filtered.filter(
        (item: BlogPost) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.cardDescription.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (item: BlogPost) => item.category === selectedCategory,
      );
    }

    return filtered;
  }, [blogs, selectedCategory, searchTerm]);

  // Filtered Case Studies
  const filteredCaseStudies = React.useMemo(() => {
    let filtered: BlogPost[] = caseStudies;

    if (searchTerm) {
      filtered = filtered.filter(
        (item: BlogPost) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.cardDescription.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (item: BlogPost) => item.category === selectedCategory,
      );
    }

    return filtered;
  }, [caseStudies, selectedCategory, searchTerm]);

  // if (blogsLoading || caseLoading) {
  //   return <div className="text-white text-center py-25">Loading...</div>;
  // }

  return (
    <>
      {/* Banner Section */}
      <section className="relative flex min-h-[calc(100vh-96px)] w-full items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/insights/Banner.png')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Orange Glow */}
        <div className="absolute inset-0 bg-linear-to-r from-orange-500/10 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              HypeLab Insights
            </h1>

            {/* Underline */}
            <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-orange-500" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-200 md:text-2xl"
          >
            Where experience meets expertise — explore our blogs and case
            studies.
          </motion.p>

          {/* Scroll Icon */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-16"
          >
            <div className="inline-flex items-center justify-center rounded-full border-2 border-orange-500 bg-black/40 p-4 backdrop-blur-sm">
              <svg
                className="h-7 w-7 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Bottom Gradient Line */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-transparent via-orange-500 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </section>
      {/* Blogs / Insights Section */}
      <section className="bg-black px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              HypeLab Insights
            </h2>

            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gray-400" />

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
              Thoughts, trends, and strategies from our team of digital experts.
            </p>
          </div>

          {/* Search + Categories */}
          <div className="mb-14 flex flex-col items-center gap-6">
            {/* Search Box */}
            <div className="w-full max-w-2xl relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-3.5 text-gray-500 hover:text-gray-300"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results count */}
            <p className="text-gray-400 text-sm">
              Found {filteredBlogs.length + filteredCaseStudies.length} results
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog: BlogPost, index: number) => (
              <div
                key={blog._id ?? index}
                onClick={() => blog.slug && navigate(`/blog/${blog.slug}`)}
                className="group cursor-pointer overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:shadow-lg transition-all"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`${API_BASE_URL}/${blog.image}`}
                    alt={blog.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {blog.cardDescription}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center text-orange-500 font-semibold">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State for Blogs */}
          {filteredBlogs.length === 0 &&
            filteredCaseStudies.length === 0 &&
            !isLoading && (
              <div className="py-20 text-center">
                <p className="text-gray-400 text-lg">
                  No results found for "{searchTerm}"
                  {selectedCategory !== "All" && ` in ${selectedCategory}`}
                </p>
              </div>
            )}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-black px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Our Work in Action
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gray-400" />

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-400 md:text-lg">
              Real projects, challenges, and results we delivered for our
              clients.
            </p>
          </div>

          {/* CASE STUDIES AVAILABLE */}
          {filteredCaseStudies.length > 0 && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredCaseStudies.map((study: BlogPost, index: number) => (
                <div
                  key={study._id ?? index}
                  onClick={() =>
                    study.slug && navigate(`/case-study/${study.slug}`)
                  }
                  className="group cursor-pointer overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:shadow-lg transition-all"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`${API_BASE_URL}/${study.image}`}
                      alt={study.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                      {study.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {study.cardDescription}
                    </p>

                    {/* View Case Study */}
                    <div className="flex items-center text-orange-500 font-semibold">
                      View Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default Insights;
