// src/pages/BlogDetails.tsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { fetchPostById } from "../api/blog.api";
import type { BlogPost } from "../data/types";

// Helper function to convert Google Drive URL to direct image URL
const getGoogleDriveDirectUrl = (url: string): string => {
  if (!url) return "";

  // Handle different Google Drive URL formats
  if (url.includes("drive.google.com")) {
    // Extract file ID from various Google Drive URL formats
    let fileId = "";

    if (url.includes("/d/")) {
      // Format: https://drive.google.com/file/d/FILE_ID/view
      fileId = url.split("/d/")[1].split("/")[0];
    } else if (url.includes("id=")) {
      // Format: https://drive.google.com/uc?id=FILE_ID
      fileId = url.split("id=")[1].split("&")[0];
    } else if (url.includes("open?id=")) {
      // Format: https://drive.google.com/open?id=FILE_ID
      fileId = url.split("open?id=")[1].split("&")[0];
    }

    if (fileId) {
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  }
  
  // Handle share.google.com URLs
  if (url.includes("share.google")) {
    return url; // Return as is, or add specific handling if needed
  }

  // Return original URL if not a Google Drive URL
  return url;
};

// Helper function to check if string contains HTML tags
const containsHTML = (text: string): boolean => {
  const htmlRegex = /<[a-z][\s\S]*>/i;
  return htmlRegex.test(text);
};

// Helper function to convert newlines to HTML paragraphs
const formatTextToHTML = (text: string): string => {
  if (!text) return "";
  
  // Split by double newlines to get paragraphs
  return text
    .split("\n\n")
    .map(paragraph => paragraph.trim())
    .filter(paragraph => paragraph.length > 0)
    .map(paragraph => {
      // Handle single newlines within paragraphs (convert to <br/>)
      const withLineBreaks = paragraph.replace(/\n/g, "<br/>");
      return `<p class="mb-4 leading-relaxed">${withLineBreaks}</p>`;
    })
    .join("");
};

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: post,
    isLoading,
    error,
  } = useQuery<BlogPost>({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-center">Loading...</div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Post not found</h2>
          <button
            onClick={() => navigate("/blog")}
            className="text-purple-400 hover:underline"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Determine the post type based on the 'type' field from your data
  const postType = post.type === "case-study" ? "case-studies" : "blog";

  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Check if excerpt contains HTML and format accordingly
  const isHTML = containsHTML(post.excerpt);
  const formattedContent = isHTML 
    ? post.excerpt // If it's HTML, use it directly
    : formatTextToHTML(post.excerpt); // If it's plain text, convert newlines to HTML

  return (
    <div className="py-25 px-4 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        to={`/${postType}`}
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
      >
        <ArrowLeft
          size={20}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Back to {postType === "case-studies" ? "Case Studies" : "Blog"}
      </Link>

      {/* Article */}
      <article>
        {/* Article Header - Title and metadata FIRST */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-semibold rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar size={16} />
              <span>{formattedDate}</span>
            </div>
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Featured Image - AFTER the heading */}
        {post.imageUrl && (
          <div className="relative rounded-2xl overflow-hidden mb-12 aspect-video shadow-2xl">
            <img
              src={getGoogleDriveDirectUrl(post.imageUrl)}
              alt={post.title}
              className="object-cover w-full h-full"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.src =
                  "https://via.placeholder.com/1200x630?text=" +
                  encodeURIComponent(post.title);
              }}
            />
          </div>
        )}

        {/* Article Content - Using dangerouslySetInnerHTML with formatted content */}
        <div 
          className="
            text-gray-300 leading-relaxed font-light text-base md:text-lg
            [&_h1]:text-white [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mt-6 [&_h1]:mb-4
            [&_h2]:text-white [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-3
            [&_h3]:text-white [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-5 [&_h3]:mb-2
            [&_p]:mb-4 [&_p]:leading-relaxed
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
            [&_li]:mb-1
            [&_strong]:text-white [&_strong]:font-semibold
            [&_em]:italic
            [&_a]:text-purple-400 [&_a]:hover:underline
          "
          dangerouslySetInnerHTML={{ __html: formattedContent }}
        />
      </article>
    </div>
  );
};

export default BlogDetails;