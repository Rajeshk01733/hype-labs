// src/api/blog.api.ts
import axios from "axios";
import type { BlogPost } from "../data/types";

const API = import.meta.env.VITE_API_BASE_URL;

// GET all insights and case studies together
export const fetchInsightsAndCaseStudies = async () => {
  const res = await axios.get(`${API}/insights/insights-case-study`);
  return res.data.data;
};

// GET all blogs (deprecated - keeping for backward compatibility)
export const fetchBlogs = async (): Promise<BlogPost[]> => {
  try {
    const data = await fetchInsightsAndCaseStudies();
    return data.insights || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

// GET all case studies (deprecated - keeping for backward compatibility)
export const fetchCaseStudies = async (): Promise<BlogPost[]> => {
  try {
    const data = await fetchInsightsAndCaseStudies();
    return data.caseStudy || [];
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return [];
  }
};

// GET single insight/blog by slug
export const fetchInsightBySlug = async (slug: string): Promise<BlogPost> => {
  const res = await axios.get(`${API}/insights/${slug}`);
  return res.data.data;
};

// GET single case study by slug
export const fetchCaseStudyBySlug = async (slug: string): Promise<BlogPost> => {
  const res = await axios.get(`${API}/case-studies/${slug}`);
  return res.data.data;
};

// GET single post by ID - Correct endpoint from your Postman request
export const fetchPostById = async (id: string): Promise<BlogPost> => {
  const res = await axios.get(`${API}/api/posts/${id}`);
  return res.data;
};
