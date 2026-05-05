import React from "react";
import { useQuery } from "@tanstack/react-query";
import BlogPortfolio from "../components/BlogPortfolio";
import { fetchBlogs, fetchCaseStudies } from "../api/blog.api";
import { BlogPost } from "../data/types";

const Blog: React.FC = () => {
  const { data: blogs = [], isLoading: blogsLoading } =
    useQuery<BlogPost[]>({
      queryKey: ["blogs"],
      queryFn: fetchBlogs,
    });

  const { data: caseStudies = [], isLoading: caseLoading } =
    useQuery<BlogPost[]>({
      queryKey: ["case-studies"],
      queryFn: fetchCaseStudies,
    });

  if (blogsLoading || caseLoading) {
    return <div className="text-white text-center py-25">Loading...</div>;
  }

  return (
    <div className="py-25 px-4 max-w-7xl mx-auto">
      <BlogPortfolio
        id="blog"
        title="Latest Insights"
        description="Thoughts, trends, and strategies from our team of digital experts."
        items={blogs}
        viewAllText="View All Posts"
        cardActionText="Read Article"
      />

      <BlogPortfolio
        id="case-studies"
        title="Case Studies"
        description="Real projects, challenges, and results we delivered for our clients."
        items={caseStudies}
        viewAllText="View All Case Studies"
        cardActionText="View Case Study"
      />
    </div>
  );
};

export default Blog;